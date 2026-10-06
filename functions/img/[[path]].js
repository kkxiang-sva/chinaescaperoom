// Serves our Cloudinary photos from OUR OWN domain (/img/<transformation>/<version>/<file>) so visitors
// in mainland China get them via Cloudflare instead of reaching Cloudinary directly. Cached at the edge.
const CLOUD = 'zmzqssuw';

export async function onRequestGet({ request, params }) {
  const parts = Array.isArray(params.path) ? params.path : [params.path || ''];
  const rest = parts.join('/');
  // only our own cloud's uploaded images, only plain path characters — this must not become an open proxy
  if (!rest || rest.includes('..') || !/^[A-Za-z0-9_,.\-\/]+$/.test(rest)) return new Response('Not found', { status: 404 });

  const webp = /image\/webp/.test(request.headers.get('accept') || '');
  const [first, ...others] = rest.split('/');
  const hasTransform = /^[a-z]{1,2}_/.test(first);
  const transform = (hasTransform ? first + ',' : '') + (webp ? 'f_webp' : 'f_jpg');
  const path = (hasTransform ? others : parts).join('/');

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
