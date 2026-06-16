import { TextProps } from "./types";

const Text = ({
  type = "body",
  tag: Tag = "p",
  children,
  className,
}: TextProps) => {
  let elementClass = "";
  switch (type) {
    case "title":
      elementClass = "font-second text-3xl font-normal leading-10";
      break;
    case "sub-title":
      elementClass = "font-primary text-xl font-normal leading-6";
      break;
  }

  return <Tag className={`${elementClass} ${className}`}>{children}</Tag>;
};

export default Text;
