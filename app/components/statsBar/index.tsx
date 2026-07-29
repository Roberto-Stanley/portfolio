import {
  Calendar,
  Award,
  Briefcase,
  Terminal,
  Users,
} from "feather-icons-react";
import Card from "@/app/components/card";
import StatsItem from "./statsItem";

const STATS = [
  {
    Icon: Calendar,
    value: "8+",
    label: "Años de experiencia",
    dividerAfter: true,
  },
  { Icon: Award, value: "100+", label: "Cursos", dividerAfter: true },
  { Icon: Briefcase, value: "4", label: "Empresas", dividerAfter: true },
  {
    Icon: Terminal,
    value: "12+",
    label: "Proyectos Levantados",
    dividerAfter: true,
  },
  {
    Icon: Users,
    value: "15+",
    label: "Talentos Liderados",
    dividerAfter: false,
  },
];

export default function StatsBar() {
  return (
    <>
      <Card className="mx-auto hidden md:block max-w-4xl">
        <div className="flex">
          {STATS.map(({ Icon, value, label, dividerAfter }, i) => (
            <StatsItem
              key={i}
              icon={Icon}
              value={value}
              label={label}
              dividerAfter={dividerAfter}
              className="w-44 h-16"
            />
          ))}
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-2 items-stretch md:hidden">
        {STATS.map(({ Icon, value, label }, i) => {
          const isLastOdd = i === STATS.length - 1 && STATS.length % 2 !== 0;
          return (
            <div key={i} className={`h-full ${isLastOdd ? "col-span-2 flex justify-center" : ""}`}>
              <Card className={`h-full ${isLastOdd ? "w-1/2" : "w-full"}`}>
                <StatsItem icon={Icon} value={value} label={label} />
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
