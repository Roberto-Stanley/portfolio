import { type LinkProps } from "next/link";

export type ButtonSize = "s" | "m";
export type ButtonVariant = "default" | "ghost";
export type ButtonShape = "square" | "rounded";
export type ButtonIconPosition = "left" | "right";

export type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
};

export type WithHref = BaseProps &
  Omit<LinkProps, keyof BaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | "href"> & {
    href: string;
  };

export type WithoutHref = BaseProps & { href?: never };

export type Props = WithHref | WithoutHref;
