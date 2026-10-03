"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";
import Text from "@/app/components/text";
import { contactFormSchema, ContactFormValues } from "./types";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-5 items-start w-[504px]"
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        <InputField
          label="Name"
          placeholder="John"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputField
          label="Last name"
          placeholder="Doe"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
        <InputField
          label="Email Address"
          placeholder="john@gmail.com"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputField
          label="Phone Number"
          placeholder="+1 234 567 890"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      {/* Message textarea */}
      <div className="flex flex-col gap-1.5 h-[175px] items-start w-full">
        <Text type="body" weight="medium" tag="label" className="text-content-primary">
          Message
        </Text>
        <textarea
          {...register("message")}
          placeholder="Your message..."
          className={twMerge(
            "bg-background border border-primary flex flex-1 items-start min-h-0 overflow-hidden px-3.5 py-2.5 rounded-lg shadow-sm w-full text-base text-content-primary font-primary placeholder:text-decorative resize-none focus:outline-none focus:shadow-[0_0_0_1px_#a3ffdc]",
            errors.message && "border-red-500"
          )}
        />
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message.message}</span>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
