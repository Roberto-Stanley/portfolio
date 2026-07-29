import Text from "@/app/components/text";
import { StatsItemProps } from "./types";

export default function StatsItem({
  icon: Icon,
  value,
  label,
  dividerAfter = false,
  className = "",
}: StatsItemProps) {
  return (
    <div
      className={`flex gap-2 items-start min-w-0 w-full ${dividerAfter ? "border-r-4 border-white/20" : ""} ${className}`}
    >
      <div className="shrink-0 size-8 bg-primary/20 rounded-full flex items-center justify-center">
        <Icon size={16} className="text-primary" />
      </div>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <Text type="heading" className="text-content-primary">
          {value}
        </Text>
        <Text type="sub-body" className="text-wrap">
          {label}
        </Text>
      </div>
    </div>
  );
}
