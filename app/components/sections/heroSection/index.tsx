import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "feather-icons-react";
import Text from "../../text";
import { CodeWindow } from "../../codeWindown";
import Container from "../../container";

export default function HeroSection() {
  return (
    <section className="w-full py-12 overflow-hidden mb-11 md:mb-0">
      <Container className="flex gap-6 lg:gap-0 flex-wrap lg:flex-nowrap min-h-[650px]">
        {/* Left column */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          {/* Role label — y=193 */}
          <Text type="sub-title" className="mb-6" weight="light">
            - Full Stack Developer
          </Text>
          <Text type="title" tag="h1" className="mb-4" typingAnimation>
            Roberto Reyes
          </Text>
          <Text type="body" weight="light" className=" mb-6">
            Full-Stack Developer specialising in modern web technologies like
            React, Next.js &amp; the MERN stack. Focused on building scalable
            applications and delivering exceptional user experiences through
            clean architecture and performance-driven development.
          </Text>

          {/* Buttons — y=471 */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <Link
              href="#about"
              className="bg-[rgba(138,56,245,0.5)] hover:bg-[rgba(138,56,245,0.7)] flex gap-2 items-center px-4 py-2 rounded-full transition-colors"
            >
              <span className="font-primary font-normal text-white text-base leading-5 whitespace-nowrap">
                Hire me
              </span>
              <ArrowUpRight size={18} className="text-white" />
            </Link>

            {/* GitHub icon button */}
            <a
              href="https://github.com/robertostanleyreyes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 size-[40px] flex items-center justify-center rounded-full transition-colors"
            >
              <Github size={18} className="text-white" />
            </a>

            {/* LinkedIn icon button */}
            <a
              href="https://linkedin.com/in/robertostanleyreyes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 size-[40px] flex items-center justify-center rounded-full transition-colors"
            >
              <Linkedin size={18} className="text-white" />
            </a>
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
