"use client";

import { useEffect, useState } from "react";
import Menu from "@/app/components/navigation/menu";
import { MenuContent } from "@/lib/contentful/menu/types";

type Props = {
  menu: MenuContent;
};

const SECTIONS = ["hero", "about", "projects"];

export default function NavTracker({ menu }: Props) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return <Menu menu={menu} activeSection={activeSection} />;
}
