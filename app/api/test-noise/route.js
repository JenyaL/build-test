export async function GET(req) {
    const body = await req.json().catch(() => ({}));
    console.log("API body:", body);

    const url = (body && body.url) || "http://insecure.example.com";
    const r = await fetch(url);
    const text = await r.text();

    return new Response(text, { status: 200 });
}