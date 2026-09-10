import Text from "@/app/components/text";
import { StatItemProps } from "./types";

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col">
      <Text type="heading" weight="semibold">
        {value}
      </Text>
      <Text type="sub-body" weight="light" className="capitalize">
        {label}
      </Text>
    </div>
  );
}
