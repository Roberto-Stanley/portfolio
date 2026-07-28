import Image from "next/image";
import { ArrowUpRight, MapPin } from "feather-icons-react";
import FloatingTechBadges from "@/app/components/FloatingTechBadges";
import Container from "@/app/components/container";
import Text from "@/app/components/text";
import StatsBar from "@/app/components/statsBar";

interface ExperienceCardProps {
  years: string;
  imageSrc: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

function ExperienceCard({
  years,
  imageSrc,
  title,
  company,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <div className="bg-white/10 flex gap-3 items-start p-4 rounded-2xl w-full">
      {/* Left column: year badge + mockup + ver button */}
      <div className="flex flex-col gap-3 items-center shrink-0">
        <div className="bg-primary/20 flex items-center justify-center px-2 py-1 rounded-full">
          <span className="font-montserrat font-medium text-[#dedede] text-[12px] leading-[14px] tracking-[0.24px] whitespace-nowrap">
            {years}
          </span>
        </div>
        <div className="relative h-[111px] w-[148px] rounded-lg overflow-hidden shrink-0">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
        <a
          href="#"
          className="bg-[rgba(138,56,245,0.5)] flex gap-2 items-center justify-center px-4 py-2 rounded-full"
        >
          <span className="font-primary font-normal text-white text-base leading-5 whitespace-nowrap">
            Ver
          </span>
          <ArrowUpRight size={24} className="text-white shrink-0" />
        </a>
      </div>

      {/* Right column: title, company, location, description */}
      <div className="flex flex-col gap-2 flex-1 min-w-0 self-stretch">
        <p className="font-montserrat font-medium text-[#dedede] text-[16px] leading-6 tracking-[0.32px]">
          {title}
        </p>
        <div className="flex gap-3 items-center flex-wrap sm:flex-nowrap">
          <span className="font-montserrat font-medium text-[#a663fe] text-[12px] leading-[14px] tracking-[0.24px] whitespace-nowrap">
            {company}
          </span>
          <div className="flex gap-0.5 items-center">
            <MapPin size={14} className="text-[#dedede] shrink-0" />
            <span className="font-montserrat font-medium text-[#dedede] text-[12px] leading-[14px] tracking-[0.24px] whitespace-nowrap">
              {location}
            </span>
          </div>
        </div>
        <p className="font-montserrat font-light text-[#adadad] text-[16px] leading-6 tracking-[0.32px]">
          {description}
        </p>
      </div>
    </div>
  );
}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>

        <StatsBar />
      </Container>
    </section>
  );
}
