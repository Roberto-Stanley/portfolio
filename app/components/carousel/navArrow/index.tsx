import { ArrowRight } from "feather-icons-react";

export default function NavArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-primary-hover flex items-center justify-center p-1 rounded-full shrink-0 size-8"
    >
      <ArrowRight
        size={24}
        className={`text-primary ${direction === "left" ? "rotate-180" : ""}`}
      />
    </button>
  );
}
