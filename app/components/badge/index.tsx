import { BadgeProps } from "./types";

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div className={`bg-primary-active flex items-center justify-center px-2 py-1 rounded-full backdrop-blur-[4px] ${className}`}>
      {children}
    </div>
  );
}
