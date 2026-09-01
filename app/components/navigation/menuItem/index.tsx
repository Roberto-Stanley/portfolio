import FeatherIcon from "feather-icons-react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  icon: string;
  href: string;
  active?: boolean;
};

export default function MenuItem({ children, icon, href, active }: Props) {
  return (
    <Link href={href} className="flex items-center">
      <div
        className={`relative flex items-center justify-center rounded-full px-4 py-2 transition-colors border ${
          active
            ? "bg-secondary-light border-secondary-alt"
            : "border-transparent hover:bg-white/10"
        }`}
      >
        <span className="hidden sm:block font-primary text-sm text-content-primary whitespace-nowrap">
          {children}
        </span>
        <span className="sm:hidden text-content-primary flex items-center justify-center">
          <FeatherIcon icon={icon} stroke="white" />
        </span>
        {active && (
          <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary" />
        )}
      </div>
    </Link>
  );
}
