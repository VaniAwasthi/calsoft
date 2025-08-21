export async function GET(req, { params }) {
  const className = params.class; // <--- use the folder param name

  try {
    const res = await fetch(`http://dev.calsoft.org/api/popupform/${className}`);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "No form found" }), { status: 404 });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
