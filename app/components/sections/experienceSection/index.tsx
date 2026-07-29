import FloatingTechBadges from "@/app/components/floatingTechBadges";
import Container from "@/app/components/container";
import Text from "@/app/components/text";
import StatsBar from "@/app/components/statsBar";
import TimeLine from "@/app/components/timeLine";
import ExperienceCard from "./experienceCard";
import { ExperienceCardProps } from "./experienceCard/types";

const EXPERIENCES: ExperienceCardProps[] = [
  {
    years: "2022-2023",
    imageSrc: "/img/exp-1.png",
    title: "Development Lead",
    company: "Gobierno de El Salvador",
    location: "Hibrid",
    description:
      "Led teams of 10+ professionals in the delivery and modernization of mission-critical healthcare systems used nationwide, driving digital transformation through scalable solutions built with Node.js and Vue.js.",
  },
  {
    years: "2021-2022",
    imageSrc: "/img/exp-2.png",
    title: "Senior Full Stack Developer",
    company: "Gobierno de El Salvador",
    location: "Hibrid",
    description:
      "Contributed to the digital transformation of the Ministry of Health by establishing modern frontend and backend standards with Vue.js, React, and Node.js.",
  },
  {
    years: "2023-2024",
    imageSrc: "/img/exp-3.png",
    title: "Senior Full Stack Developer",
    company: "Gobierno de El Salvador",
    location: "Remoto",
    description:
      "I am a full-stack developer with expertise in JavaScript, React.js, Node.js, Next.js, TypeScript, and Tailwind CSS. I specialize in building dynamic, scalable web applications.",
  },
  {
    years: "2023-2024",
    imageSrc: "/img/exp-4.png",
    title: "Senior Full Stack Developer",
    company: "Gobierno de El Salvador",
    location: "Remoto",
    description:
      "Developed and optimized a large-scale eCommerce platform, implementing new features, redesigning core experiences, and ensuring the reliability and security of the administration system.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="projects" className="w-full relative mb-52">
      <div className="flex flex-row justify-between items-center gap-12 mb-24">
        <FloatingTechBadges className="hidden xl:block shrink-0" />
        {/* Heading + Floating Badges */}
        <Container className="grow">
          <div className="flex flex-col gap-2">
            <Text type="sub-title" weight="light" className="mb-6 text-center">
              Mi Viaje Profesional
            </Text>
            <Text tag="h2" type="title" className="mb-2 text-center">
              8 años construyendo
            </Text>
            <Text
              tag="h2"
              type="title"
              weight="extrabold"
              className="text-center"
            >
              Soluciones impactantes
            </Text>
          </div>
        </Container>
        <FloatingTechBadges className="hidden xl:block shrink-0" />
      </div>

      {/* Experience cards 2×2 grid */}
      <Container>
        <div className="relative mb-24">
          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>

          {/* Desktop: timeline */}
          <div className="hidden md:block">
            <TimeLine>
              {EXPERIENCES.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </TimeLine>
          </div>
        </div>

        <StatsBar />
      </Container>
    </section>
  );
}
