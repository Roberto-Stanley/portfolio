import React from "react";
import MenuItem from "@/app/components/navigation/menuItem";
import Button from "@/app/components/button";
import { MenuContent, MenuItemContent } from "@/lib/contentful/menu/types";

type Props = {
  menu: MenuContent;
  activeSection?: string;
};

export default function Menu({ menu, activeSection = "hero" }: Props) {
  const navItems = menu.menuItems.filter(
    (item: MenuItemContent) => !item.callToAction,
  );
  const ctaItems = menu.menuItems.filter(
    (item: MenuItemContent) => item.callToAction,
  );

  return (
    <nav className="inline-flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-4 rounded-full bg-background/60 border border-secondary-active backdrop-blur-[4px] shadow-[0_0_8px_var(--color-secondary-alt)]">
      {navItems.map((item) => (
        <MenuItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={activeSection === item.href.replace("#", "")}
        >
          {item.title}
        </MenuItem>
      ))}

      {ctaItems.length > 0 && (
        <span className="hidden sm:block w-px h-6 bg-decorative mx-1" />
      )}

      {ctaItems.map((item) => (
        <React.Fragment key={item.href}>
          {/* Desktop: text + icon button */}
          <Button
            href={item.href}
            variant={item.variant}
            shape={item.shape}
            icon={item.icon}
            iconPosition={item.iconPosition}
            iconStroke="white"
            className="hidden sm:inline-flex"
          >
            {item.title}
          </Button>

          {/* Mobile: icon-only button */}
          <Button
            href={item.href}
            shape="rounded"
            icon={item.icon}
            iconStroke="white"
            className="sm:hidden"
          />
        </React.Fragment>
      ))}
    </nav>
  );
}
