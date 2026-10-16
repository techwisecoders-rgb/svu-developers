import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    if (name.length < 2 || name.length > 100) return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    if (!/^[+0-9() -]{7,20}$/.test(phone)) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    if (message.length > 2000) return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    // Demo behavior: no database or notification provider is configured. Do not log personal details.
    return NextResponse.json({ ok: true, demo: true, message: "Your form passed validation. This demo is not connected to a live sales inbox yet." });
  } catch {
    return NextResponse.json({ error: "Unable to process this request." }, { status: 400 });
  }
}