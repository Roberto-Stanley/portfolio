import Image from "next/image";

const ORBITAL_RINGS = "/icons/orbital-rings.svg";
const ORBITAL_CLOUD = "/icons/orbital-cloud.svg";
const ORBITAL_DOT = "/icons/orbital-dot.svg";
const PROFILE_FILMSTRIP = "/img/profile-filmstrip.jpg";
const ELLIPSE_RING_1 = "/icons/ellipse-ring-1.svg";
const ELLIPSE_RING_2 = "/icons/ellipse-ring-2.svg";
const ELLIPSE_RING_3 = "/icons/ellipse-ring-3.svg";
const ELLIPSE_RING_4 = "/icons/ellipse-ring-4.svg";
const ELLIPSE_RING_5 = "/icons/ellipse-ring-5.svg";

// Profile bubble variants (different crops of the filmstrip image)
type ProfileVariant =
  | "Frame104"
  | "Frame103"
  | "Frame100"
  | "Frame98"
  | "Frame97";

const PROFILE_INSETS: Record<ProfileVariant, string> = {
  Frame104: "inset-[0_-187.5%_-358.75%_-50%]",
  Frame103: "inset-[-73.75%_-170%_-239.81%_-35%]",
  Frame100: "inset-[-476.25%_-275%_-42.5%_-82.5%]",
  Frame98: "inset-[-361.25%_-63.75%_-157.5%_-293.75%]",
  Frame97: "inset-[-252.5%_-66.25%_-266.25%_-291.25%]",
};

function ProfileBubble({
  variant,
  className,
}: {
  variant: ProfileVariant;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[40px] size-[80px] animate-orbital-counter-spin origin-center ${className || ""}`}
    >
      <div className={`absolute ${PROFILE_INSETS[variant]}`}>
        <Image
          fill
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={PROFILE_FILMSTRIP}
        />
      </div>
    </div>
  );
}

const BASE_W = 1277;
const BASE_H = 1297;

interface OrbitalProps {
  className?: string;
  displayWidth?: number;
  displayHeight?: number;
}

export default function Orbital({
  className = "",
  displayWidth = 600,
}: OrbitalProps) {
  const scale = displayWidth / BASE_W;

  return (
    <div className={`overflow-hidden relative shrink-0 ${className}`}>
      <div
        className="absolute -left-32 top-12 md:left-12"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: BASE_W,
          height: BASE_H,
        }}
      >
        {/* Background orbital rings */}
        <div className="absolute inset-[0_0_1.54%_0]">
          <div className="absolute inset-[-0.92%]">
            <Image
              fill
              alt=""
              className="block max-w-none size-full"
              src={ORBITAL_RINGS}
            />
          </div>
        </div>

        {/* Center cloud / link zone */}
        <div className="absolute inset-[26.75%_26.39%]">
          <div className="absolute inset-0">
            <div
              className="absolute flex inset-0 items-center justify-center"
              style={{ containerType: "size" }}
            >
              <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                <div className="relative size-full">
                  <Image
                    fill
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={ORBITAL_CLOUD}
                  />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-2px)] size-px top-[calc(50%+4px)]">
              <div className="flex-none rotate-180">
                <div className="relative size-px">
                  <Image
                    fill
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={ORBITAL_DOT}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting elements — rotate around the center */}
        <div className="absolute inset-0 animate-orbital-spin origin-center">
          {/* Profile bubble 1 – lower left (Frame 104) */}
          <div className="absolute contents inset-[63.92%_80.5%_30.45%_13.78%]">
            <div className="absolute inset-[64.3%_81.36%_31.3%_14.17%]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ELLIPSE_RING_1}
              />
            </div>
            <ProfileBubble
              variant="Frame104"
              className="absolute inset-[63.92%_80.5%_30.45%_13.78%]"
            />
          </div>

          {/* Profile bubble 2 – bottom (Frame 97/white bg) */}
          <div className="absolute contents inset-[89.51%_73.38%_6.09%_22.16%]">
            <div className="absolute inset-[89.51%_73.38%_6.09%_22.16%]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ELLIPSE_RING_2}
              />
            </div>
            <div className="absolute animate-orbital-counter-spin origin-center bg-white inset-[90.13%_74%_6.78%_22.87%] overflow-hidden rounded-[40px]">
              <div className="absolute inset-[-22.5%_-58.75%_-496.25%_-298.75%]">
                <Image
                  fill
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={PROFILE_FILMSTRIP}
                />
              </div>
            </div>
          </div>

          {/* Profile bubble 3 – upper left (Frame 103) */}
          <div className="absolute contents inset-[8.71%_79.72%_84.66%_13.55%]">
            <div className="absolute inset-[8.71%_79.72%_84.66%_13.55%]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ELLIPSE_RING_3}
              />
            </div>
            <ProfileBubble
              variant="Frame103"
              className="absolute inset-[8.94%_79.95%_84.89%_13.78%]"
            />
          </div>

          {/* Profile bubble 4 – lower right (Frame 98) */}
          <div className="absolute contents inset-[65.61%_26.7%_31.3%_70.16%]">
            <div className="absolute inset-[65.61%_26.7%_31.3%_70.16%]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ELLIPSE_RING_4}
              />
            </div>
            <ProfileBubble
              variant="Frame98"
              className="absolute inset-[65.92%_27.02%_31.53%_70.4%]"
            />
          </div>

          {/* Profile bubble 5 – bottom right (Frame 97) */}
          <div className="absolute contents inset-[92.68%_30.93%_0.69%_62.33%]">
            <div className="absolute inset-[92.68%_30.93%_0.69%_62.33%]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ELLIPSE_RING_3}
              />
            </div>
            <ProfileBubble
              variant="Frame97"
              className="absolute inset-[92.91%_31.17%_0.93%_62.57%]"
            />
          </div>

          {/* Profile bubble 6 – upper right (Frame 100) */}
          <div className="absolute contents inset-[18.12%_26.62%_79.65%_71.1%]">
            <div className="absolute inset-[18.12%_26.62%_79.65%_71.1%]">
              <Image
                fill
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ELLIPSE_RING_5}
              />
            </div>
            <ProfileBubble
              variant="Frame100"
              className="absolute inset-[18.27%_26.78%_79.8%_71.26%]"
            />
          </div>

          {/* Extra decorative card bubbles */}
          <div className="absolute animate-orbital-counter-spin origin-center bg-cards inset-[80.19%_61.39%_13.65%_32.34%] overflow-hidden rounded-[40px]">
            <div className="absolute inset-[-396.25%_-17.5%_-23.75%_-210%]">
              <Image
                fill
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={PROFILE_FILMSTRIP}
              />
            </div>
          </div>
          <div className="absolute animate-orbital-counter-spin origin-center bg-cards inset-[42.1%_9.16%_51.73%_84.57%] overflow-hidden rounded-[40px]">
            <div className="absolute inset-[-222.5%_-153.75%_-82.5%_-31.25%]">
              <Image
                fill
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={PROFILE_FILMSTRIP}
              />
            </div>
          </div>
          <div className="absolute animate-orbital-counter-spin origin-center bg-cards inset-[26.83%_77.92%_67%_15.82%] overflow-hidden rounded-[40px]">
            <div className="absolute inset-[-112.5%_-38.75%_-288.75%_-228.75%]">
              <Image
                fill
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={PROFILE_FILMSTRIP}
              />
            </div>
          </div>
        </div>
        {/* end orbital-spin wrapper */}
      </div>
    </div>
  );
}
