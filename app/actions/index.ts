"use server";

import { Resend } from "resend";
import type { ContactFormValues } from "@/app/components/contactForm/types";
import { contactEmailHtml, contactEmailSubject } from "@/app/emails/contactEmail";

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
    return { success: false, error: error.message };
  }

  return { success: true };
}

