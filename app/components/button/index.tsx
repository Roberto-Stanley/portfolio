import { ArrowDown } from "feather-icons-react";
import Link from "next/link";
interface Props {
  label: string;
  className?: string;
  href?: string;
}

export default function Button({ label, className, href }: Props) {
  const inner = (
    <div className="bg-primary hover:bg-primary-alt border-3 border-magic-mint flex gap-2 items-center justify-center px-4 py-2 rounded-[40px]">
      <span className="font-primary font-normal leading-5 text-white text-base text-center whitespace-nowrap">
        {label}
      </span>
      <ArrowDown />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-start ${className || ""}`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-start ${className || ""}`}>{inner}</div>
  );
}
