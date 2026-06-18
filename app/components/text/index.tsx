import { TextProps } from "./types";

export default function Text({
  type = "body",
  tag: Tag = "p",
  typingAnimation = false,
  weight = "normal",
  children,
  className,
}: TextProps) {
  let elementClass = "";
  switch (type) {
    case "title":
      elementClass = "font-second text-4xl leading-10 text-content-primary";
      break;
    case "sub-title":
      elementClass =
        "font-alternative text-sm text-primary leading-none capitalize";
      break;
    case "body":
      elementClass = "font-primary text-base text-content-secondary";
      break;
    case "sub-body":
      elementClass = "font-primary text-xs text-content-secondary";
      break;
    case "heading":
      elementClass = "font-primary text-3xl text-secondary";
  }

  if (typingAnimation)
    elementClass +=
      " inline-block w-0 overflow-hidden whitespace-nowrap animate-typing-loop border-r-3";

  elementClass += ` font-${weight}`;

  return <Tag className={`${elementClass} ${className}`}>{children}</Tag>;
}
