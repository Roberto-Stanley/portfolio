"use client";

import { useState } from "react";

// Asset URLs from Figma (expire in 7 days — replace with /public assets for production)
const TESTIMONIAL_PHOTO = "https://www.figma.com/api/mcp/asset/c4f74ca1-75bd-476c-ae54-c71051615e75";
const ARROW_LINE = "https://www.figma.com/api/mcp/asset/5ed9ae0f-30b2-4911-842e-df55fc59d295";
const ARROW_HEAD = "https://www.figma.com/api/mcp/asset/56bb3a17-ecf6-4bab-a982-101f2f4ddee0";

const testimonials = [
  {
    name: "Raz neizmal",
    company: "Trez labs",
    photo: TESTIMONIAL_PHOTO,
    quote:
      "Lorem ipsum dolor sit amet consectetur. Et aliquam rhoncus non sagittis aliquam donec lectus sagittis in. Bibendum quis enim nisl tristique orci in sit diam. Dolor mauris tempor eget habitasse feugiat potenti elementum in. Massa felis nisi ornare eu sagittis purus.",
  },
];

function NavArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white/10 flex items-center justify-center p-2 rounded-2xl shrink-0 size-[37px]"
    >
      <div
        className={`overflow-hidden relative size-[21px] ${direction === "left" ? "rotate-180" : ""}`}
      >
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]">
          <div className="absolute inset-[-8.16%_-1px]">
            <img alt="" className="block max-w-none size-full" src={ARROW_LINE} />
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2">
          <div className="absolute inset-[-16.33%_-8.16%]">
            <img alt="" className="block max-w-none size-full" src={ARROW_HEAD} />
          </div>
        </div>
      </div>
    </button>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const t = testimonials[current];

  return (
    <section className="py-20 flex flex-col items-center gap-10">
      <h2 className="font-second font-normal text-[32px] leading-10 text-white text-center">
        What people say about me
      </h2>

      <div className="flex gap-20 items-center">
        <NavArrow
          direction="left"
          onClick={() => setCurrent((c) => (c - 1 + total) % total)}
        />

        <div className="flex flex-col gap-[52px] items-center w-[566px]">
          <div className="flex flex-col gap-[21px] items-center w-full">
            <div className="flex gap-6 items-center">
              <div className="relative shrink-0 size-[75px]">
                <img
                  alt={t.name}
                  className="absolute block inset-0 max-w-none size-full"
                  height="75"
                  src={t.photo}
                  width="75"
                />
              </div>
              <div className="flex flex-col items-start leading-6 text-white text-xl w-[170px]">
                <p className="font-primary font-extrabold w-full">{t.name}</p>
                <p className="font-primary font-normal w-full">{t.company}</p>
              </div>
            </div>

            <p className="font-primary font-light italic leading-7 text-white text-xl text-center w-full">
              {t.quote}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center bg-white/10 px-2 py-2 rounded-2xl">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`size-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <NavArrow
          direction="right"
          onClick={() => setCurrent((c) => (c + 1) % total)}
        />
      </div>
    </section>
  );
}
