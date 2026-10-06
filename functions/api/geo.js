// Tells the browser which country/city Cloudflare sees the visit coming from.
// Only coarse location is returned — the visitor's IP address is never read, stored or sent back.
export function onRequestGet({ request }) {
  const cf = request.cf || {};
  return new Response(
    JSON.stringify({ country: cf.country || '', region: cf.region || '', city: cf.city || '' }),
    { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } }
  );
}
