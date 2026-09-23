"use client";

import React, { Children, useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import NavArrow from "./navArrow";
import NavDots from "./navDots";

type Props = {
  children: React.ReactNode;
};

export default function Carousel({ children }: Props) {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const isTextExpandedRef = useRef(false);

  const handleExpandChange = useCallback((expanded: boolean) => {
    isTextExpandedRef.current = expanded;
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!isTextExpandedRef.current) emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (id: number) => {
    emblaApi?.scrollTo(id);
  };

  return (
    <div className="flex gap-4 sm:gap-20 items-center justify-center overflow-hidden w-full">
      <div className="hidden sm:block">
        <NavArrow direction="left" onClick={() => emblaApi?.scrollPrev()} />
      </div>

      <div className="flex flex-col gap-[52px] items-center w-full max-w-xl min-w-0">
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex">
            {Children.map(children, (child, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 shrink-0 ml-12">
                {React.isValidElement(child)
                  ? React.cloneElement(child as React.ReactElement<{ onExpandChange?: (expanded: boolean) => void }>, {
                      onExpandChange: handleExpandChange,
                    })
                  : child}
              </div>
            ))}
          </div>
        </div>

        <NavDots
          current={current}
          scrollSnaps={scrollSnaps}
          scrollTo={scrollTo}
        />
      </div>

      <div className="hidden sm:block">
        <NavArrow direction="right" onClick={() => emblaApi?.scrollNext()} />
      </div>
    </div>
  );
}
