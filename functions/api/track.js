// Anonymous visit counter. Country/city come from Cloudflare (request.cf) — the visitor's IP address is
// never read or stored. Writes one small record to Firestore's `visits` collection (see admin.html).
const PROJECT = 'china-escape-room';
const DOCS = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const str = (v, n) => ({ stringValue: String(v || '').slice(0, n) });

export async function onRequestPost({ request }) {
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
