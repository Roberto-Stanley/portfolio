type TextType = "title" | "sub-title" | "body";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type: TextType;
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}
