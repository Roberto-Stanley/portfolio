import Link from "next/link";
import type { Props, WithHref } from "./type";
import FeatherIcon from "feather-icons-react";

export default function Button({
  children,
  className,
  size = "m",
  variant = "default",
  shape = "square",
  icon,
  iconPosition = "right",
  iconFill,
  iconStroke,
  ...rest
}: Props) {
  const isIconOnly = shape === "rounded";
  const isGhost = variant === "ghost";

  const shapeClasses = isIconOnly ? "rounded-full p-2" : "rounded-5xl";
  const sizeClasses = isIconOnly
    ? ""
    : size === "s"
      ? "gap-2 px-2 py-1"
      : "gap-2 px-4 py-2";

  const variantClasses = isGhost
    ? "bg-white/10 hover:bg-primary-hover active:bg-primary-active"
    : "bg-secondary-alt hover:bg-secondary-hover active:bg-secondary-active";

  const textSpan = (
    <span className="font-primary font-medium leading-6 text-content-primary text-base text-center tracking-[0.32px] whitespace-nowrap">
      {children}
    </span>
  );

  const inner = (
    <div
      className={`flex items-center justify-center backdrop-blur-sm transition-colors ${shapeClasses} ${sizeClasses} ${variantClasses}`}
    >
      {isIconOnly ? (
        <FeatherIcon icon={icon!} fill={iconFill} stroke={iconStroke} />
      ) : iconPosition === "left" ? (
        <>
          <FeatherIcon icon={icon!} fill={iconFill} stroke={iconStroke} />
          {textSpan}
        </>
      ) : (
        <>
          {textSpan}
          <FeatherIcon icon={icon!} fill={iconFill} stroke={iconStroke} />
        </>
      )}
    </div>
  );

  const { href, ...linkRest } = rest as WithHref;

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-start ${className || ""}`}
        {...linkRest}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-start ${className || ""}`}>{inner}</div>
  );
}
