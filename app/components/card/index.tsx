import { CardProps } from "./types";

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-background-decorative p-4 rounded-[1rem] border border-secondary-active backdrop-blur-[4px] ${className}`}>
      {children}
    </div>
  );
}
