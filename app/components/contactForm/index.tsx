"use client";

import { useState } from "react";
import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-5 items-start w-[504px]"
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        <InputField label="Name" placeholder="John" />
        <InputField label="Last name" placeholder="Doe" />
        <InputField
          label="Email Address"
          placeholder="john@gmail.com"
          type="email"
        />
        <InputField
          label="Phone Number"
          placeholder="+1 234 567 890"
          type="tel"
        />
      </div>

      {/* Message textarea */}
      <div className="flex flex-col gap-1.5 h-[175px] items-start w-full">
        <label className="font-primary font-normal leading-[29px] text-base text-white whitespace-nowrap">
          Mail
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="John@gmail.com"
          className="bg-[#070827] border border-primary flex flex-1 items-start min-h-0 overflow-hidden px-3.5 py-2.5 rounded-lg shadow-sm w-full text-base text-[#3d3d3d] font-primary placeholder:text-[#3d3d3d] resize-none focus:outline-none focus:shadow-[0_0_0_1px_#a3ffdc]"
        />
      </div>

      <Button>Submit</Button>
    </form>
  );
}
