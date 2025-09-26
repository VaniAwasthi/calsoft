// app/api/blogs/route.js
import https from "https";

export async function GET() {
  try {
    // Forward GET to your backend with self-signed SSL acceptance
    const resp = await fetch("https://cms.calsoft.org:4000/api/blogs", {
      method: "GET",
      agent: new https.Agent({
        rejectUnauthorized: false, // accept self-signed certificate
      }),
    });

    // if backend sends JSON, parse it
    const data = await resp.json();

    return new Response(JSON.stringify(data), {
      status: resp.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy GET error:", err);
    return new Response(JSON.stringify({ error: "Proxy failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
