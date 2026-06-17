import Image from "next/image";

interface Props {
  label: string;
  ml: number;
  mt: number;
}

const CLOUD_BG = "/icons/cloud-bg.svg";

export default function FakeTooltip({ label, ml, mt }: Props) {
  return (
    <div
      className="col-start-1 row-start-1 h-[49px] relative w-[108px]"
      style={{ marginLeft: ml, marginTop: mt }}
    >
      <Image
        width={108}
        height={49}
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={CLOUD_BG}
      />
      <p className="absolute font-alternative not-italic text-[24px] text-white text-center leading-4 inset-[30.61%_18.89%_36.21%_19.44%]">
        {label}
      </p>
    </div>
  );
}
