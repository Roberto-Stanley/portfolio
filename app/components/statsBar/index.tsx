import Card from "@/app/components/card";
import StatsItem from "./statsItem";
import type { StatContent } from "@/lib/contentful/experiencesSection/types";

type StatsBarProps = {
  stats: StatContent[];
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <>
      <Card className="mx-auto hidden md:block max-w-4xl">
        <div className="flex gap-6 divide-x divide-white/20">
          {stats.map(({ value, label, icon }, i) => (
            <StatsItem
              key={i}
              icon={icon}
              value={value}
              label={label}
              className="w-44 h-16 px-3"
            />
          ))}
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-2 items-stretch md:hidden">
        {stats.map(({ value, label, icon }, i) => {
          const isLastOdd = i === stats.length - 1 && stats.length % 2 !== 0;
          return (
            <div
              key={i}
              className={`h-full ${isLastOdd ? "col-span-2 flex justify-center" : ""}`}
            >
              <Card className={`h-full ${isLastOdd ? "w-1/2" : "w-full"}`}>
                <StatsItem icon={icon} value={value} label={label} />
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
