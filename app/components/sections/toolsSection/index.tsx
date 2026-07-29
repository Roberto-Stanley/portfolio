import Image from "next/image";
import TechBadgesStrip from "@/app/components/techBadgesStrip";

const CLOUD_BG = "/icons/cloud-bg.svg";
const TOOLS_FRAME = "/icons/tools-frame.svg";

export default function ToolsSection() {
  return (
    <section className="pt-12 flex flex-col items-center gap-8 mb-52">
      {/* Decorative cloud + frame */}
      <div className="flex justify-center">
        <div className="relative w-24 h-full">
          <div className="absolute right-0 -top-8 h-[49px] w-[108px]">
            <Image
              fill
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={CLOUD_BG}
            />
            <p className="absolute font-alternative not-italic text-[12px] text-white text-center leading-4 inset-[30.61%_18.89%_36.21%_19.44%]">
              Tools
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center size-[136px]">
          <div className=" flex-none">
            <div className="relative size-[130px]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={TOOLS_FRAME}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech badges strip */}
      <TechBadgesStrip />
    </section>
  );
}
