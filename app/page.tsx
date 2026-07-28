import TechBadgesStrip from "./components/TechBadgesStrip";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/sections/contactSection";
import Image from "next/image";
import HeroSection from "./components/sections/heroSection";
import AboutSection from "./components/sections/aboutSection";
import ExperienceSection from "./components/sections/experienceSection";
import NavTracker from "./components/navigation/navTracker";

const CLOUD_BG = "/icons/cloud-bg.svg";
const TOOLS_FRAME = "/icons/tools-frame.svg";

// ─── Tools Section ────────────────────────────────────────────────────────────

function ToolsSection() {
  return (
    <section className="py-12 flex flex-col items-center gap-8">
      {/* Decorative cloud + frame */}
      <div className="relative flex items-center justify-center">
        <div className="relative flex items-center justify-center size-[136px]">
          <div className="-rotate-[87.36deg] flex-none">
            <div className="relative size-[130px]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={TOOLS_FRAME}
              />
            </div>
          </div>
        </div>
        {/* Tools cloud label */}
        <div className="absolute h-[49px] w-[108px]">
          <Image
            fill
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={CLOUD_BG}
          />
          <p className="absolute font-alternative not-italic text-[12px] text-white text-center leading-4 inset-[30.61%_18.89%_36.21%_19.44%]">
            Tools
          </p>
        </div>
      </div>

      {/* Tech badges strip */}
      <TechBadgesStrip />
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-16">
        <NavTracker />
      </div>
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <FeedbackSection />

      <ToolsSection />

      <ContactSection />
    </main>
  );
}
