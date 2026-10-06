"use server";

import { Resend } from "resend";
import type { ContactFormValues } from "@/app/components/contactForm/types";
import { contactEmailHtml, contactEmailSubject } from "@/app/emails/contactEmail";
import logger from "@/lib/logger";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactInfo(data: ContactFormValues): Promise<{ success: boolean; error?: string }> {
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: data.email,
    subject: contactEmailSubject(data),
    html: contactEmailHtml(data),
  });

  if (error) {
    logger.error({ err: error.message }, "Failed to send contact email");
    return { success: false, error: error.message };
  }

  logger.info({ to: process.env.CONTACT_EMAIL }, "Contact email sent successfully");
  return { success: true };
}

