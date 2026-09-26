import { NextResponse } from "next/server";

const PHONE_PATTERN = /^[+0-9 ()-]{10,16}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Enquiry = { name: string; phone: string; email: string; city: string; type: string; product: string; message: string };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate(body: Record<string, unknown>): { data?: Enquiry; error?: string } {
  const data: Enquiry = {
    name: clean(body.name, 80),
    phone: clean(body.phone, 16),
    email: clean(body.email, 120),
    city: clean(body.city, 80),
    type: clean(body.type, 60),
    product: clean(body.product, 60),
    message: clean(body.message, 1500),
  };
  if (data.name.length < 2) return { error: "Please enter your full name." };
  if (!PHONE_PATTERN.test(data.phone)) return { error: "Please enter a valid mobile number." };
  if (data.email && !EMAIL_PATTERN.test(data.email)) return { error: "Please enter a valid email address." };
  if (!data.city) return { error: "Please enter your city / state." };
  if (data.message.length < 5) return { error: "Please tell us a little more about your requirement." };
  return { data };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  const { data, error } = validate(body ?? {});
  if (!data) return NextResponse.json({ ok: false, message: error }, { status: 400 });

  // Integration point: forward `data` to email / CRM (e.g. SMTP to vnbhidwaria2026@gmail.com) in production.
  return NextResponse.json({ ok: true });
}
