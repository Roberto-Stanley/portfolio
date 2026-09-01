import TestimonialSection from "./components/sections/testimonialSection";
import ContactSection from "./components/sections/contactSection";
import HeroSection from "./components/sections/heroSection";
import AboutSection from "./components/sections/aboutSection";
import ExperienceSection from "./components/sections/experienceSection";
import ToolsSection from "./components/sections/toolsSection";
import AnimationBlur from "./components/animationBlur";
import Navigation from "./components/navigation";

// TODO: replace with real data fetching
async function loadData() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
}

export default async function Home() {
  await loadData();
  return (
    <main className=" overflow-x-hidden">
      <AnimationBlur />

      <Navigation />

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <TestimonialSection />

      <ToolsSection />

      <ContactSection />
    </main>
  );
}
