import Image from "next/image";

export default function AnimationBlur() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute -top-32 -left-32 animate-blur-float-1">
        <Image
          src="/animationBlur/ellipse1.png"
          alt=""
          width={700}
          height={700}
          className="opacity-60"
          priority
        />
      </div>
      <div className="absolute -bottom-32 -right-32 animate-blur-float-2">
        <Image
          src="/animationBlur/ellipse2.png"
          alt=""
          width={700}
          height={700}
          className="opacity-60"
          priority
        />
      </div>
    </div>
  );
}
