import { sliceHtml } from "./constants";

type Props = {
  html: string;
  charIndex: number;
};

export function CodePanel({ html, charIndex }: Props) {
  return (
    <div
      className="p-5 font-mono text-sm leading-relaxed min-h-[200px] [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0"
      dangerouslySetInnerHTML={{ __html: sliceHtml(html, charIndex) }}
    />
  );
}
