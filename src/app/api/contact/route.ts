import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Email and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const contactFrom = process.env.CONTACT_FROM;

    if (!contactEmail) {
      return new Response(
        JSON.stringify({ error: "Contact email is not configured." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const serviceLabels: Record<string, string> = {
      landing: "Landing Page",
      website: "Website",
      ecommerce: "Ecommerce",
      seo: "Monthly SEO",
    };

    const serviceLabel = service ? serviceLabels[service] ?? service : "Not specified";

    const { data, error } = await resend.emails.send({
      from: contactFrom || "onboarding@resend.dev",
      to: [contactEmail],
      replyTo: email,
      subject: `New Contact Form Submission - ${name || "Anonymous"} (${serviceLabel})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${name || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone</td>
              <td style="padding: 8px 0;">${phone || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service</td>
              <td style="padding: 8px 0;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Message</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent:", data?.id);

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error processing contact form:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
