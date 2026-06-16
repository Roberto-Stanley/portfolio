import Image from "next/image";
import Button from "../../button";
const HERO_BG = "/img/hero-bg.jpg";

interface Props {
  title: string;
}

export default function HeroSection({ title }: Props) {
  return (
    <section className="relative h-[845px] overflow-hidden w-full">
      {/* Background image */}
      <div className="absolute h-[845px] top-0 w-full">
        <Image
          width={1920}
          height={1080}
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none  size-full"
          src={HERO_BG}
        />
      </div>

      {/* Dark blur overlay */}
      <div className="absolute backdrop-blur-[4px] bg-black/50 inset-0" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
        {/* Name */}
        <h1 className="font-second font-normal text-[40px] leading-10 text-white text-center whitespace-nowrap animate-typing overflow-hidden border-r-4 border-white">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-primary font-normal text-[32px] leading-[var(--2xl,20px)] text-[#b0b0b0] text-center">
          {`Get ready to turn your `}
          <span className="bg-clip-text bg-gradient-to-b from-[#a3ffdc] to-[#90b1ff] not-italic font-alternative text-[40px] text-transparent leading-7">
            ideas
          </span>
          {` into `}
          <span className="bg-clip-text bg-gradient-to-b from-[#a3ffdc] to-[#90b1ff] not-italic font-alternative text-[40px] text-transparent leading-7">
            reality
          </span>
        </p>

        {/* CTA button */}
        <Button label="Continue" href="#about" />
      </div>
    </section>
  );
}
