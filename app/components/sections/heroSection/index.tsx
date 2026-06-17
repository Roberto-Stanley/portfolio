import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "feather-icons-react";
import Text from "../../text/Index";
import { CodeWindow } from "../../codeWindown";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 650 }}
    >
      {/* Content — 1280px container with 93px left margin matching Figma */}
      <div
        className="relative max-w-[1280px] mx-auto px-[93px]"
        style={{ height: 650 }}
      >
        {/* Left column */}
        <div className="absolute top-0 left-[93px] w-[620px] h-full flex flex-col justify-center ">
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

          {/* Description — y=323 */}
          {/* <p className="font-montserrat font-light text-[#8e8e8e] text-[16px] leading-7 tracking-[0.32px] w-[620px] mb-9">
            Full-Stack Developer specialising in modern web technologies like
            React, Next.js &amp; the MERN stack. Focused on building scalable
            applications and delivering exceptional user experiences through
            clean architecture and performance-driven development.
          </p> */}

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

        {/* Right column — profile portrait, y=210 x=760 w=510 h=435 */}
        <div
          className="absolute overflow-hidden rounded-2xl"
          style={{ top: 210, left: 760, width: 510, height: 435 }}
        >
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
