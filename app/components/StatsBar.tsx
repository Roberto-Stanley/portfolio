import {
  Calendar,
  Award,
  Briefcase,
  Terminal,
  Users,
} from "feather-icons-react";

const STATS = [
  {
    Icon: Calendar,
    value: "8+",
    label: "Años de experiencia",
    dividerAfter: false,
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
    <div className="bg-white/10 flex gap-3 items-start p-4 rounded-2xl w-full">
      {STATS.map(({ Icon, value, label, dividerAfter }, i) => (
        <div key={i}>
          <div className="flex flex-1 gap-2 items-start min-w-0 h-16">
            <div className="shrink-0 size-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Icon size={16} className="text-primary" />
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <p className="font-montserrat font-medium text-[#dedede] text-[36px] leading-6 tracking-[0.72px]">
                {value}
              </p>
              <p className="font-montserrat font-light text-[#adadad] text-[12px] leading-6 tracking-[0.24px]">
                {label}
              </p>
            </div>
          </div>
          {dividerAfter && (
            <div
              key={`divider-${i}`}
              className="w-px h-[54px] bg-white/20 shrink-0 self-center"
            />
          )}
        </div>
      ))}
    </div>
  );
}
