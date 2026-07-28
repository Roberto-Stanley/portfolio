import { Home, UserCheck, Folder, ArrowUpRight } from "feather-icons-react";
import MenuItem from "@/app/components/menuItem";
import Button from "@/app/components/button";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero", icon: <Home size={18} /> },
  { label: "Sobre mi", href: "#about", icon: <UserCheck size={18} /> },
  { label: "Proyectos", href: "#projects", icon: <Folder size={18} /> },
];

type Props = {
  activeSection?: string;
};

export default function Menu({ activeSection = "hero" }: Props) {
  return (
    <nav className="inline-flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-4 rounded-full bg-background/60 border border-secondary-active backdrop-blur-[4px] shadow-[0_0_8px_var(--color-secondary-alt)]">
      {NAV_ITEMS.map((item) => (
        <MenuItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={activeSection === item.href.replace("#", "")}
        >
          {item.label}
        </MenuItem>
      ))}

      <span className="hidden sm:block w-px h-6 bg-decorative mx-1" />

      {/* Desktop: text + icon button */}
      <Button
        href="#contact"
        icon={<ArrowUpRight size={16} className="text-white" />}
        className="hidden sm:inline-flex"
      >
        Contacto
      </Button>

      {/* Mobile: icon-only button */}
      <Button
        href="#contact"
        shape="rounded"
        icon={<ArrowUpRight size={18} className="text-white" />}
        className="sm:hidden"
      />
    </nav>
  );
}
