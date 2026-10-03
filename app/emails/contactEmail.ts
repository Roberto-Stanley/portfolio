import type { ContactFormValues } from "@/app/components/contactForm/types";

export function contactEmailHtml({ name, lastName, email, phone, message }: ContactFormValues): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      <h2 style="margin: 0 0 24px;">New contact form submission</h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px; vertical-align: top;">Name</td>
          <td style="padding: 8px 0;">${name} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Phone</td>
          <td style="padding: 8px 0;">${phone}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
    </div>
  `;
}

export function contactEmailSubject({ name, lastName }: Pick<ContactFormValues, "name" | "lastName">): string {
  return `New message from ${name} ${lastName}`;
}
