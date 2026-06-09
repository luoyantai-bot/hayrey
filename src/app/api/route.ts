import { NextRequest, NextResponse } from "next/server";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "luoyantai@gmail.com";

async function sendEmail(to: string, subject: string, html: string) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  return resend.emails.send({
    from: "Hayrey Website <onboarding@resend.dev>",
    to: [to],
    subject,
    html,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    if (type === "quote") {
      const { name, email, company, productType, quantity, message } = data;

      await sendEmail(
        NOTIFY_EMAIL,
        `New Inquiry from ${name || "Unknown"} — ${productType || "General"}`,
        `
          <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0F172A; color: #F8FAFC; border-radius: 12px;">
            <div style="border-bottom: 2px solid #D97706; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; font-size: 20px; color: #D97706;">New Quote Request</h1>
              <p style="margin: 4px 0 0; font-size: 13px; color: #94A3B8;">From hayrey.com contact form</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #94A3B8; width: 120px; vertical-align: top;">Name</td><td style="padding: 8px 0; color: #F8FAFC; font-weight: 600;">${name || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8; vertical-align: top;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #D97706;">${email || "—"}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8; vertical-align: top;">Company</td><td style="padding: 8px 0; color: #F8FAFC;">${company || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8; vertical-align: top;">Product Type</td><td style="padding: 8px 0; color: #F8FAFC; font-weight: 600;">${productType || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8; vertical-align: top;">Quantity</td><td style="padding: 8px 0; color: #F8FAFC;">${quantity || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #F8FAFC; white-space: pre-wrap;">${message || "—"}</td></tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #334155; font-size: 12px; color: #64748B;">
              This inquiry was submitted from the Hayrey website contact form.
            </div>
          </div>
        `
      );

      return NextResponse.json({ success: true });
    }

    if (type === "deck") {
      const { email } = data;

      await sendEmail(
        NOTIFY_EMAIL,
        `Deck Download: ${email}`,
        `
          <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0F172A; color: #F8FAFC; border-radius: 12px;">
            <div style="border-bottom: 2px solid #D97706; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; font-size: 20px; color: #D97706;">Capability Deck Download</h1>
              <p style="margin: 4px 0 0; font-size: 13px; color: #94A3B8;">Someone requested the product catalog</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #94A3B8; width: 120px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #D97706;">${email}</a></td></tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #334155; font-size: 12px; color: #64748B;">
              This request was submitted from the Hayrey website.
            </div>
          </div>
        `
      );

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Unknown request type" }, { status: 400 });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send notification", detail: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
