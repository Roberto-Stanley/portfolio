import { Github, Linkedin, ArrowUpRight } from "feather-icons-react";
import Text from "@/app/components/text";
import { CodeWindow } from "@/app/components/codeWindown";
import Container from "@/app/components/container";
import Button from "@/app/components/button";
import TypingAnimation from "@/app/components/typingAnimation";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full pt-36 pb-12 overflow-hidden mb-11 md:mb-0"
    >
      <Container className="flex gap-6 lg:gap-0 flex-wrap lg:flex-nowrap min-h-[650px]">
        {/* Left column */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          {/* Role label — y=193 */}
          <Text type="sub-title" className="mb-6" weight="light">
            - Full Stack Developer
          </Text>
          <h1 className="mb-4">
            <TypingAnimation
              words={["Rreyes", "Roberto Reyes"]}
              pauseDuration={0}
            />
          </h1>
          <Text type="body" weight="light" className=" mb-6">
            Full-Stack Developer specialising in modern web technologies like
            React, Next.js &amp; the MERN stack. Focused on building scalable
            applications and delivering exceptional user experiences through
            clean architecture and performance-driven development.
          </Text>

          {/* Buttons — y=471 */}
          <div className="flex items-center gap-3">
            <Button icon={<ArrowUpRight size={18} className="text-white" />}>
              Hire me
            </Button>

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
          </div>
        </div>

        {/* Right column */}
        <div className="min-w-full lg:min-w-[510px] flex justify-center items-center">
          <CodeWindow />
        </div>
      </Container>
    </section>
  );
}
