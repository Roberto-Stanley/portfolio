import FeedbackSection from "./components/sections/feedbackSection";
import ContactSection from "./components/sections/contactSection";
import HeroSection from "./components/sections/heroSection";
import AboutSection from "./components/sections/aboutSection";
import ExperienceSection from "./components/sections/experienceSection";
import NavTracker from "./components/navigation/navTracker";
import ToolsSection from "./components/sections/toolsSection";
import AnimationBlur from "./components/animationBlur";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <AnimationBlur />
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 sm:pt-12">
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
