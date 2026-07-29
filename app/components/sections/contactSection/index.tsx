import Button from "@/app/components/button";
import Container from "@/app/components/container";
import ContactForm from "@/app/components/contactForm";
import Text from "@/app/components/text";
import { Github, Linkedin, Smartphone } from "feather-icons-react";

export default function ContactSection() {
  const text =
    "Let's connect via phone, email, or through the contact form to explore how I can help you achieve your goals with effective technological solutions.";

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
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
