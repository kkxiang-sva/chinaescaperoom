// Small Cloudflare Worker that sits in front of the static site. It only handles three things the static
// files can't, all for the benefit of visitors in mainland China (who can't reach Google or, reliably,
// Cloudinary directly) — everything else is served as ordinary static files:
//   GET  /api/rooms   room info saved in Firestore (posters, galleries, reviews…), as plain JSON
//   GET  /img/…       our Cloudinary photos, fetched and cached at Cloudflare's edge
//   POST /api/track   anonymous visit counter (country/city from Cloudflare — never the IP address)

const PROJECT = 'china-escape-room';
const DOCS = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const CLOUD = 'zmzqssuw';
const ROOMS_TTL = 15; // seconds — short, so the owner's edits show up almost immediately

// ---------- Firestore REST -> plain JSON ----------
function decode(v) {
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('nullValue' in v) return null;
  if ('timestampValue' in v) return v.timestampValue;
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(decode);
  if ('mapValue' in v) return decodeFields(v.mapValue.fields || {});
  return null;
}
function decodeFields(fields) {
  const out = {};
  Object.keys(fields).forEach(k => { out[k] = decode(fields[k]); });
  return out;
}

async function rooms(request) {
  const cache = caches.default;
  const cacheKey = new Request(new URL('/api/rooms', request.url).toString());
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const out = {};
  let pageToken = '';
  for (let i = 0; i < 10; i++) {
    const res = await fetch(`${DOCS}/rooms?pageSize=300${pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : ''}`);
    if (!res.ok) return new Response('{}', { status: 502, headers: { 'content-type': 'application/json' } });
    const data = await res.json();
    (data.documents || []).forEach(d => { out[decodeURIComponent(d.name.split('/').pop())] = decodeFields(d.fields || {}); });
    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
  }
  const response = new Response(JSON.stringify(out), {
    headers: { 'content-type': 'application/json', 'cache-control': `public, max-age=${ROOMS_TTL}` }
  });
  await cache.put(cacheKey, response.clone());
  return response;
}

// ---------- /img/<transformation>/<version>/<file> ----------
async function image(request, pathname) {
  const rest = pathname.replace(/^\/img\//, '');
  // only our own cloud's uploads, only plain path characters — this must never become an open proxy
  if (!rest || rest.includes('..') || !/^[A-Za-z0-9_,.\-\/]+$/.test(rest)) return new Response('Not found', { status: 404 });

  const webp = /image\/webp/.test(request.headers.get('accept') || '');
  const parts = rest.split('/');
  const hasTransform = /^[a-z]{1,2}_/.test(parts[0]);
  const transform = (hasTransform ? parts[0] + ',' : '') + (webp ? 'f_webp' : 'f_jpg');
  const path = (hasTransform ? parts.slice(1) : parts).join('/');

  const cache = caches.default;
  const cacheKey = new Request(new URL(request.url).origin + '/img/' + rest + (webp ? '?w' : '?j'));
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const upstream = await fetch(`https://res.cloudinary.com/${CLOUD}/image/upload/${transform}/${path}`);
  if (!upstream.ok) return new Response('Not found', { status: upstream.status === 404 ? 404 : 502 });
  const response = new Response(upstream.body, {
    headers: {
      'content-type': upstream.headers.get('content-type') || 'image/jpeg',
      'cache-control': 'public, max-age=31536000, immutable',
      'vary': 'Accept'
    }
  });
  await cache.put(cacheKey, response.clone());
  return response;
}

// ---------- visit counter ----------
const str = (v, n) => ({ stringValue: String(v || '').slice(0, n) });
async function track(request) {
  try {
    if (/bot|crawl|spider|headless|preview|monitor/i.test(request.headers.get('user-agent') || '')) return new Response(null, { status: 204 });
    const b = await request.json().catch(() => ({}));
    const cf = request.cf || {};
    const id = crypto.randomUUID().replace(/-/g, '');
    const body = {
      writes: [{
        update: {
          name: `projects/${PROJECT}/databases/(default)/documents/visits/${id}`,
          fields: {
            country: str(cf.country, 3), region: str(cf.region, 60), city: str(cf.city, 60),
            page: str(b.page === 'room' ? 'room' : 'home', 8), room: str(b.room, 80),
            lang: str(b.lang === 'zh' ? 'zh' : 'en', 2),
            device: str(b.device === 'mobile' ? 'mobile' : 'desktop', 8), ref: str(b.ref, 80)
          }
        },
        updateTransforms: [{ fieldPath: 'ts', setToServerValue: 'REQUEST_TIME' }],
        currentDocument: { exists: false }
      }]
    };
    await fetch(`${DOCS}:commit`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  } catch (e) { /* never matters to the visitor */ }
  return new Response(null, { status: 204 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/api/rooms') return rooms(request);
    if (request.method === 'GET' && url.pathname.startsWith('/img/')) return image(request, url.pathname);
    if (request.method === 'POST' && url.pathname === '/api/track') return track(request);
    return env.ASSETS.fetch(request); // everything else is a normal static file
  }
};
