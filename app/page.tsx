import OrbitalDecoration from "./components/OrbitalDecoration";
import ProjectButton from "./components/ProjectButton";
import TechBadgesStrip from "./components/TechBadgesStrip";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Image from "next/image";

const HERO_BG = "/img/hero-bg.jpg";
const PROFILE_PHOTO = "/img/profile-photo.jpg";
const CLOUD_BG = "/icons/cloud-bg.svg";
const MOCKUP_LAPTOP = "/img/mockup-laptop.png";
const MOCKUP_PHONE = "/img/mockup-phone.png";
const MOCKUP_TABLET = "/img/mockup-tablet.png";
const TOOLS_FRAME = "/icons/tools-frame.svg";

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
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
          Roberto Reyes
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
        <ProjectButton label="Continuar" href="#about" />
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section
      id="about"
      className="flex gap-[37px] items-center justify-center py-16"
    >
      {/* Orbital decoration with profile photo + cloud label overlays */}
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <OrbitalDecoration
          className="col-start-1 row-start-1"
          displayWidth={714}
          displayHeight={725}
        />

        {/* Main profile photo overlaid on orbital center */}
        <div className="bg-white col-start-1 row-start-1 ml-[253px] mt-[257px] overflow-hidden relative rounded-[128px] size-[211px]">
          <div className="absolute inset-[0_-0.2%_-17.79%_-6.16%] rounded-[8px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <Image
                width={1920}
                height={1080}
                alt="Roberto Reyes"
                className="absolute h-[139.13%] left-[-15.56%] max-w-none top-[-16.39%] w-[115.56%]"
                src={PROFILE_PHOTO}
              />
            </div>
          </div>
        </div>

        {/* Cloud labels — grid-overlaid using ml/mt offsets */}
        <CloudLabel label="Team leader" ml={324} mt={49} />
        <CloudLabel label="Frontend" ml={469} mt={213} />
        <CloudLabel label="Backend" ml={163} mt={471} />
        <CloudLabel label="Full stack" ml={101} mt={298} />
        <CloudLabel label="DevOps" ml={437} mt={577} />
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-8 items-start w-[401px]">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-second font-normal text-[32px] leading-10 text-white w-full">
            Roberto Reyes
          </h2>
          <p className="font-primary font-normal text-xl leading-6 text-[#b0b0b0] w-full">
            Full stack developer
          </p>
        </div>

        <p className="font-primary font-normal text-xl leading-6 text-white w-full">
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </p>

        <ProjectButton label="Mis proyectos" href="#projects" />
      </div>
    </section>
  );
}

// Cloud label overlaid in the about section's inline-grid using ml/mt offsets
function CloudLabel({
  label,
  ml,
  mt,
}: {
  label: string;
  ml: number;
  mt: number;
}) {
  return (
    <div
      className="col-start-1 row-start-1 h-[49px] relative w-[108px]"
      style={{ marginLeft: ml, marginTop: mt }}
    >
      <Image
        width={108}
        height={49}
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={CLOUD_BG}
      />
      <p className="absolute font-alternative not-italic text-[12px] text-white text-center leading-4 inset-[30.61%_18.89%_36.21%_19.44%]">
        {label}
      </p>
    </div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

function ProjectSectionHeader({ subtitle }: { subtitle: string }) {
  return (
    <div className="flex flex-col gap-2 items-center text-center mb-8">
      <h3 className="font-second font-normal text-[32px] leading-10 text-white">
        Proyectos
      </h3>
      <p className="font-primary font-normal text-xl leading-6 text-[#b0b0b0]">
        {subtitle}
      </p>
    </div>
  );
}

const PROJECT_BIO =
  "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses";

function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center gap-16 py-16">
      {/* E-commerce */}
      <div className="flex flex-col items-center w-[1159px]">
        <ProjectSectionHeader subtitle="E-commerce" />
        <div className="flex gap-[25px] items-center w-full">
          <OrbitalDecoration displayWidth={443} displayHeight={450} />
          <div className="relative h-[474px] w-[691px] shrink-0">
            <Image
              width={691}
              height={474}
              alt="E-commerce mockup"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={MOCKUP_LAPTOP}
            />
          </div>
        </div>
      </div>

      {/* Web-Platforms 1 */}
      <div className="flex flex-col items-center w-[1131px]">
        <ProjectSectionHeader subtitle="Web-Platforms" />
        <div className="flex gap-2 items-center w-full">
          <div className="flex items-center pr-16 shrink-0">
            <div className="relative h-[515px] w-[419px] mr-[-64px] shrink-0">
              <Image
                width={419}
                height={515}
                alt="Web platform mockup"
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={MOCKUP_PHONE}
              />
            </div>
            <p className="font-primary font-normal text-xl leading-6 text-white/70 mr-[-64px] w-[325px]">
              {PROJECT_BIO}
            </p>
          </div>
          <OrbitalDecoration displayWidth={443} displayHeight={450} />
        </div>
      </div>

      {/* Web-Platforms 2 */}
      <div className="flex flex-col items-center w-full">
        <ProjectSectionHeader subtitle="Web-Platforms" />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start">
          <div className="col-start-1 row-start-1 flex gap-6 items-center">
            <OrbitalDecoration displayWidth={443} displayHeight={450} />
            <p className="font-primary font-normal text-xl leading-6 text-white/70 w-[325px]">
              {PROJECT_BIO}
            </p>
          </div>
          {/* Overlapping tablet mockup */}
          <div className="col-start-1 row-start-1 flex items-center justify-center ml-[403px] mt-[163px] h-[547px] w-[773px]">
            <div className="flex-none ">
              <div className="relative h-[547px] w-[773px]">
                <Image
                  width={773}
                  height={547}
                  alt="Web platform tablet mockup"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={MOCKUP_TABLET}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <main className="bg-[#070827] text-white overflow-x-hidden">
      <HeroSection />

      <div className="max-w-[1280px] mx-auto px-8">
        <AboutSection />
        <ProjectsSection />
      </div>

      <div className="max-w-[1280px] mx-auto px-8">
        <TestimonialsSection />
        <ToolsSection />
        <ContactSection />
      </div>

      {/* Footer tech strip */}
      <div className="flex justify-center py-6 border-t border-white/10">
        <TechBadgesStrip />
      </div>
    </main>
  );
}
