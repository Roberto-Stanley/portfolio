"use client";

import FeatherIcon from "feather-icons-react";
import { FloatingBadge, FloatingTechBadgesProps } from "./types";

const badges: FloatingBadge[] = [
  {
    id: "mysql",
    label: "MySQL",
    icon: "database",
    color: "#00bcd4",
    size: 56,
    animationName: "float-mysql",
    delay: "0s",
    initialLeft: 69,
    initialTop: 166,
  },
  {
    id: "react-native",
    label: "React Native",
    icon: "smartphone",
    color: "#a663fe",
    size: 65,
    animationName: "float-react-native",
    delay: "0.4s",
    initialLeft: 279,
    initialTop: 180,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    icon: "database",
    color: "#42d392",
    size: 56,
    animationName: "float-mongodb",
    delay: "0.8s",
    initialLeft: 189,
    initialTop: 65,
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "cloud",
    color: "#00e5ff",
    size: 56,
    animationName: "float-devops",
    delay: "1.2s",
    initialLeft: 180,
    initialTop: 153,
  },
  {
    id: "vuejs",
    label: "Vue.js",
    icon: "zap",
    color: "#42d392",
    size: 56,
    animationName: "float-vuejs",
    delay: "1.6s",
    initialLeft: 89,
    initialTop: 89,
  },
  {
    id: "nextjs",
    label: "Next.js",
    icon: "triangle",
    color: "#f1f1f1",
    size: 56,
    animationName: "float-nextjs",
    delay: "2s",
    initialLeft: 319,
    initialTop: 74,
  },
  {
    id: "expressjs",
    label: "Express.js",
    icon: "code",
    color: "#999999",
    size: 56,
    animationName: "float-expressjs",
    delay: "2.4s",
    initialLeft: 161,
    initialTop: 253,
  },
];

export default function FloatingTechBadges({ className }: FloatingTechBadgesProps) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ width: 400, height: 336 }}
    >
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="absolute flex flex-col items-center justify-center gap-1 rounded-full border border-[#1d2048] bg-[rgba(31,59,241,0.2)]"
          style={{
            width: badge.size,
            height: badge.size,
            left: badge.initialLeft,
            top: badge.initialTop,
            animation: `${badge.animationName} 8s ease-in-out infinite`,
            animationDelay: badge.delay,
          }}
        >
          <FeatherIcon
            icon={badge.icon}
            size={20}
            color={badge.color}
            strokeWidth={1.5}
          />
          <span
            className="whitespace-nowrap text-[#dedede]"
            style={{
              fontFamily: "var(--primary-font-family)",
              fontSize: 7,
              fontWeight: 500,
              letterSpacing: "0.16px",
              lineHeight: "10px",
            }}
          >
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
