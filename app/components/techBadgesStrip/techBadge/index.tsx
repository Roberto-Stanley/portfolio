import Image from "next/image";
import { TechBadgeProps } from "./types";

export default function TechBadge({ src, inset, name }: TechBadgeProps) {
  return (
    <div className="bg-decorative h-[52px] overflow-hidden relative rounded-[40px] shrink-0 w-[69px]">
      <div className={`absolute ${inset}`}>
        <Image
          fill
          alt={name}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={src}
        />
      </div>
    </div>
  );
}
