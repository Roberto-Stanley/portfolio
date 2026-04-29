"use client";

import { useState } from "react";
import ProjectButton from "./ProjectButton";
import Image from "next/image";

// Asset URLs from Figma (expire in 7 days — replace with /public assets for production)
const ICON_PHONE_1 =
  "https://www.figma.com/api/mcp/asset/b65d8680-5346-4783-a36e-901ea83f2741";
const ICON_PHONE_2 =
  "https://www.figma.com/api/mcp/asset/b520d4c7-6045-4a55-9e81-b0af4e024d30";
const ICON_PHONE_3 =
  "https://www.figma.com/api/mcp/asset/3b479cb5-7f6f-4211-8a06-e3f0c0ee3dae";
const ICON_EMAIL =
  "https://www.figma.com/api/mcp/asset/46393e3f-486e-4535-a9c5-42b32fc4da8e";
const ICON_LINKEDIN_1 =
  "https://www.figma.com/api/mcp/asset/e40b56a4-c686-44c3-b6b5-e0a67c041b41";
const ICON_LINKEDIN_2 =
  "https://www.figma.com/api/mcp/asset/310cef57-a9e6-456f-bb76-d4e661fab431";

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 h-[79px] items-start w-[244px]">
      <label className="font-primary font-normal leading-[29px] text-base text-white whitespace-nowrap">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#070827] border border-primary flex flex-1 items-center min-h-0 overflow-hidden px-3.5 py-2.5 rounded-lg shadow-sm w-full text-base text-[#3d3d3d] font-primary placeholder:text-[#3d3d3d] focus:outline-none focus:shadow-[0_0_0_1px_#a3ffdc]"
      />
    </div>
  );
}

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const text =
    "Let's connect via phone, email, or through the contact form to explore how I can help you achieve your goals with effective technological solutions.";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="py-20 flex justify-center">
      <div className="flex gap-10 items-center">
        {/* Left: info + social */}
        <div className="flex flex-col gap-16 items-center w-[467px]">
          <div className="flex flex-col gap-6 items-center text-center w-full">
            <h2 className="font-second font-normal text-[32px] leading-10 text-white w-full">
              Get in touch!
            </h2>
            <p className="font-primary font-normal leading-6 text-[#b0b0b0] text-xl w-full">
              {text}
            </p>
          </div>

          <div className="flex gap-[52px] items-center">
            {/* Phone icon */}
            <div className="overflow-hidden relative shrink-0 size-[45px]">
              <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={ICON_PHONE_1}
                  />
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]">
                <div className="absolute inset-[-4.44%_-13.33%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={ICON_PHONE_2}
                  />
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]">
                <div className="absolute inset-[-13.33%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={ICON_PHONE_3}
                  />
                </div>
              </div>
            </div>

            {/* Email icon */}
            <div className="overflow-hidden relative shrink-0 size-[45px]">
              <div className="absolute inset-[12.5%]">
                <div className="absolute inset-[-4.44%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={ICON_EMAIL}
                  />
                </div>
              </div>
            </div>

            {/* LinkedIn icon */}
            <div className="overflow-hidden relative shrink-0 size-[45px]">
              <div className="absolute inset-[16.67%_8.33%]">
                <div className="absolute inset-[-5%_-4%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={ICON_LINKEDIN_1}
                  />
                </div>
              </div>
              <div className="absolute bottom-[45.83%] left-[8.33%] right-[8.33%] top-1/4">
                <div className="absolute inset-[-11.43%_-4%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={ICON_LINKEDIN_2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-5 items-start w-[504px]"
        >
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

          <ProjectButton label="Submit" />
        </form>
      </div>
    </section>
  );
}
