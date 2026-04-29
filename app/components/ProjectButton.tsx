import Image from "next/image";

// Asset URLs from Figma (expire in 7 days — replace with /public assets for production)
const ARROW_LINE = "https://www.figma.com/api/mcp/asset/5ed9ae0f-30b2-4911-842e-df55fc59d295";
const ARROW_HEAD = "https://www.figma.com/api/mcp/asset/56bb3a17-ecf6-4bab-a982-101f2f4ddee0";

type ProjectButtonProps = {
  label: string;
  className?: string;
  href?: string;
};

export default function ProjectButton({ label, className, href }: ProjectButtonProps) {
  const inner = (
    <div className="bg-primary border-3 border-magic-mint flex gap-2 items-center justify-center px-4 py-2 rounded-[40px]">
      <span className="font-primary font-normal leading-5 text-white text-base text-center whitespace-nowrap">
        {label}
      </span>
      <div className="overflow-hidden relative shrink-0 size-[21px]">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]">
          <div className="absolute inset-[-8.16%_-1px]">
            <Image alt="" className="block max-w-none size-full" src={ARROW_LINE} />
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2">
          <div className="absolute inset-[-16.33%_-8.16%]">
            <Image alt="" className="block max-w-none size-full" src={ARROW_HEAD} />
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={`inline-flex items-start ${className || ""}`}>
        {inner}
      </a>
    );
  }

  return (
    <div className={`inline-flex items-start ${className || ""}`}>
      {inner}
    </div>
  );
}
