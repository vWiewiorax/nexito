import { NextResponse } from "next/server";

import { contactLimits, needOptions } from "@/content/contact";
import { verifyTurnstile } from "@/lib/turnstile";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedNeeds = new Set(needOptions.map((option) => option.value));

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  if (text(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const submission = {
    name: text(body.name, contactLimits.name),
    company: text(body.company, contactLimits.company),
    email: text(body.email, contactLimits.email),
    phone: text(body.phone, contactLimits.phone),
    needs: Array.isArray(body.needs)
      ? body.needs.filter((need): need is string => typeof need === "string" && allowedNeeds.has(need))
      : [],
    message: text(body.message, contactLimits.message),
  };

  if (!submission.name || !emailPattern.test(submission.email) || submission.message.length < 10) {
    return NextResponse.json({ error: "Uzupełnij wymagane pola formularza." }, { status: 422 });
  }

  const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (!(await verifyTurnstile(text(body.turnstileToken, 2048), ip))) {
    return NextResponse.json({ error: "Potwierdź, że nie jesteś robotem, i spróbuj ponownie." }, { status: 403 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...submission, submittedAt: new Date().toISOString(), source: "nexiweb-website" }),
      });
      if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    } catch (error) {
      console.error("[contact] delivery failed", error);
      return NextResponse.json({ error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." }, { status: 502 });
    }
  } else {
    console.info("[contact] new submission (CONTACT_WEBHOOK_URL not set)", submission);
  }

  return NextResponse.json({ ok: true });
}
