"use server";

import { ContactFormValues } from "@/app/components/contactForm/types";

export async function sendContactInfo(data: ContactFormValues) {
  console.log("important data with the new values", data);
}
