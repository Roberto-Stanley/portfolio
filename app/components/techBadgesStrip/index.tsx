import TechBadge from "./techBadge";
import { TechBadgeProps } from "./techBadge/types";
import { TechBadgesStripProps } from "./types";

const TECH_LOGO_A = "/img/tech-logos-a.png";
const TECH_LOGO_B = "/img/tech-logos-a.png";
const TECH_LOGO_C = "/img/tech-logos-c.png";

const BADGES: TechBadgeProps[] = [
  { src: TECH_LOGO_A, inset: "inset-[-229.73%_-99.63%_-155.31%_-116.16%]", name: "React" },
  { src: TECH_LOGO_A, inset: "inset-[-332.43%_-201.65%_-52.61%_-14.14%]", name: "Next.js" },
  { src: TECH_LOGO_A, inset: "inset-[-229.73%_-209.73%_-155.31%_-6.06%]", name: "Node.js" },
  { src: TECH_LOGO_A, inset: "inset-[-128.38%_-202.66%_-256.66%_-13.13%]", name: "GraphQL" },
  { src: TECH_LOGO_A, inset: "inset-[-131.08%_-101.65%_-253.96%_-114.14%]", name: "TypeScript" },
  { src: TECH_LOGO_B, inset: "inset-[-24.41%_-200.58%_-360.63%_-15.2%]", name: "JavaScript" },
  { src: TECH_LOGO_A, inset: "inset-[-27.03%_-102.66%_-358.01%_-113.13%]", name: "AWS" },
  { src: TECH_LOGO_A, inset: "inset-[-29.73%_-3.67%_-355.31%_-212.12%]", name: "Docker" },
  { src: TECH_LOGO_A, inset: "inset-[-131.08%_0.37%_-253.96%_-216.16%]", name: "PostgreSQL" },
  { src: TECH_LOGO_A, inset: "inset-[-229.73%_0.37%_-155.31%_-216.16%]", name: "MongoDB" },
  { src: TECH_LOGO_A, inset: "inset-[-335.14%_-94.58%_-49.9%_-121.21%]", name: "Git" },
  { src: TECH_LOGO_C, inset: "inset-[-85.14%_-152%_-421.62%_-40.4%]", name: "Tailwind CSS" },
  { src: TECH_LOGO_C, inset: "inset-[-21.62%_-10.58%_-485.14%_-181.82%]", name: "Figma" },
  { src: TECH_LOGO_C, inset: "inset-[-105.41%_-11.59%_-401.35%_-180.81%]", name: "Redux" },
  { src: TECH_LOGO_C, inset: "inset-[-208.11%_-11.59%_-298.65%_-180.81%]", name: "Storybook" },
  { src: TECH_LOGO_C, inset: "inset-[-308.11%_-9.57%_-198.65%_-182.83%]", name: "Jest" },
  { src: TECH_LOGO_C, inset: "inset-[-404.05%_-10.58%_-102.7%_-181.82%]", name: "Webpack" },
  { src: TECH_LOGO_C, inset: "inset-[-489.19%_-149.98%_-17.57%_-42.42%]", name: "Contentful" },
  { src: TECH_LOGO_C, inset: "inset-[-343.24%_-129.99%_-109.46%_-36.36%]", name: "Vercel" },
];

export default function TechBadgesStrip({ className }: TechBadgesStripProps) {
  return (
    <div className={`bg-[#070827] h-[111px] overflow-hidden w-full ${className ?? ""}`}>
      <div className="flex gap-[92px] items-center h-full w-max animate-marquee pl-[23px]">
        {BADGES.map((badge, i) => (
          <TechBadge key={i} {...badge} />
        ))}
        {BADGES.map((badge, i) => (
          <TechBadge key={`d${i}`} {...badge} />
        ))}
      </div>
    </div>
  );
}
