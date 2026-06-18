type TextType = "title" | "sub-title" | "body" | "sub-body" | "heading";
type weight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type: TextType;
  weight?: weight;
  children: React.ReactNode;
  className?: string;
  typingAnimation?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}
