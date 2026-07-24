import { ArrowUpRight } from "feather-icons-react";
import Link, { type LinkProps } from "next/link";

type ButtonSize = "s" | "m";
type ButtonVariant = "default" | "ghost";
type ButtonType = "text-icon" | "icon";
type ButtonIconPosition = "left" | "right";

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
};

type WithHref = BaseProps &
  Omit<LinkProps, keyof BaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | "href"> & {
    href: string;
  };

type WithoutHref = BaseProps & { href?: never };

type Props = WithHref | WithoutHref;

export default function Button({
  children,
  className,
  size = "m",
  variant = "default",
  type = "text-icon",
  icon,
  iconPosition = "right",
  ...rest
}: Props) {
  const isIconOnly = type === "icon";
  const isGhost = variant === "ghost";
  const resolvedIcon = icon ?? <ArrowUpRight className="shrink-0 size-6" />;

  const sizeClasses = isIconOnly
    ? "p-2 w-10 h-10"
    : size === "s"
      ? "gap-2 px-2 py-1"
      : "gap-2 px-4 py-2";

  const variantClasses = isGhost
    ? isIconOnly
      ? "bg-white/10 hover:bg-primary-hover active:bg-primary-active"
      : "bg-transparent"
    : "bg-secondary-alt hover:bg-secondary-hover active:bg-secondary-active";

  const textSpan = (
    <span className="font-primary font-medium leading-6 text-content-primary text-base text-center tracking-[0.32px] whitespace-nowrap">
      {children}
    </span>
  );

  const inner = (
    <div
      className={`flex items-center justify-center rounded-[40px] backdrop-blur-sm transition-colors ${sizeClasses} ${variantClasses}`}
    >
      {isIconOnly ? (
        resolvedIcon
      ) : iconPosition === "left" ? (
        <>{resolvedIcon}{textSpan}</>
      ) : (
        <>{textSpan}{resolvedIcon}</>
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
