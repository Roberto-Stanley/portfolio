"use client";

import { useState } from "react";
import Button from "@/app/components/button";
import Container from "@/app/components/container";
import InputField from "./inputField";
import Text from "@/app/components/text";
import { Github, Linkedin, Smartphone } from "feather-icons-react";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const text =
    "Let's connect via phone, email, or through the contact form to explore how I can help you achieve your goals with effective technological solutions.";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="mb-40">
      <Container>
        <div
          className="flex gap-10 items-center justify-center
         flex-wrap"
        >
          {/* Left: info + social */}
          <div className="flex flex-col gap-16 items-center w-[467px]">
            <div className="flex flex-col gap-6 items-center text-center w-full">
              <Text type="title">Get in touch!</Text>
              <Text type="body" weight="light">
                {text}
              </Text>
            </div>

            <div className="flex gap-[52px] items-center">
              <Button
                shape="rounded"
                variant="ghost"
                href="https://github.com/Roberto-Stanley"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github size={18} className="text-white" />}
              />

              {/* LinkedIn icon button */}
              <Button
                shape="rounded"
                variant="ghost"
                href="https://www.linkedin.com/in/roberto-reyes/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Linkedin size={18} className="text-white" />}
              />

              <Button
                shape="rounded"
                variant="ghost"
                href="https://www.linkedin.com/in/roberto-reyes/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Smartphone size={18} className="text-white" />}
              />
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-5 items-start w-[504px]"
          >
            <div className="grid grid-cols-2 gap-x-5 ">
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
        </div>
      </Container>
    </section>
  );
}
