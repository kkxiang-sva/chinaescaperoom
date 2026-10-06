// Serves the room info saved in Firestore (posters, galleries, reviews, edits…) as plain JSON from
// OUR OWN domain. Visitors in mainland China can't reach Google's servers, but they can reach this site —
// Cloudflare fetches the data from Firestore on their behalf and keeps a copy for a few seconds.
const PROJECT = 'china-escape-room';
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/rooms`;
const TTL = 15; // seconds — short, so the owner's edits show up almost immediately

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

export async function onRequestGet({ request }) {
  const cache = caches.default;
  const cacheKey = new Request(new URL('/api/rooms', request.url).toString());
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const rooms = {};
  let pageToken = '';
  for (let i = 0; i < 10; i++) {
    const res = await fetch(`${BASE}?pageSize=300${pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : ''}`);
    if (!res.ok) return new Response('{}', { status: 502, headers: { 'content-type': 'application/json' } });
    const data = await res.json();
    (data.documents || []).forEach(d => { rooms[decodeURIComponent(d.name.split('/').pop())] = decodeFields(d.fields || {}); });
    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
  }
  const response = new Response(JSON.stringify(rooms), {
    headers: { 'content-type': 'application/json', 'cache-control': `public, max-age=${TTL}` }
  });
  await cache.put(cacheKey, response.clone());
  return response;
}
