import { sliceHtml } from "./constants";

type Props = {
  html: string;
  charIndex: number;
};

export function CodePanel({ html, charIndex }: Props) {
  return (
    <div className="relative p-5 font-mono text-sm leading-relaxed min-h-[310px] [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0">
      {/* Invisible full content — reserves the final height so the window never grows */}
      <div
        className="invisible [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* Visible typed content overlaid */}
      <div
        className="absolute inset-0 p-5 [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0"
        dangerouslySetInnerHTML={{ __html: sliceHtml(html, charIndex) }}
      />
    </div>
  );
}
