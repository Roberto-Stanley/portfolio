import { TextProps } from "./types";

const Text = ({
  type = "body",
  tag: Tag = "p",
  typingAnimation = false,
  weight = "normal",
  children,
  className,
}: TextProps) => {
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
  }

  if (typingAnimation)
    elementClass +=
      "inline-block w-0 overflow-hidden whitespace-nowrap animate-typing-loop border-r-3";

  elementClass += ` font-${weight}`;

  return <Tag className={`${elementClass} ${className}`}>{children}</Tag>;
};

export default Text;
