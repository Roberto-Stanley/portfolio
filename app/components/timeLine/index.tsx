import { Children } from "react";
import { TimeLineProps } from "./types";

export default function TimeLine({ children }: TimeLineProps) {
  const items = Children.toArray(children);

  return (
    <div className="relative">
      {/* Center vertical line */}
      <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-1.5 bg-primary-hover" />

      <div className="flex flex-col gap-12">
        {Array.from({ length: Math.ceil(items.length / 2) }, (_, pi) => {
          const leftItem = items[pi * 2];
          const rightItem = items[pi * 2 + 1];
          return (
            <div key={pi} className="flex items-start">
              {/* Left item + connector */}
              <div className="w-[calc(50%-24px)] relative">
                {leftItem && (
                  <>
                    {leftItem}
                    <div className="absolute top-[30px] left-full w-6 flex items-center">
                      <div className="w-full h-1.5 bg-primary-hover" />
                      <div className="absolute right-0 translate-x-1/2 size-3 rounded-full bg-secondary" />
                    </div>
                  </>
                )}
              </div>

              {/* Center spacer */}
              <div className="w-12 shrink-0" />

              {/* Right item + connector (offset 100px from pair top) */}
              <div className="w-[calc(50%-24px)] pt-[100px]">
                {rightItem && (
                  <div className="relative">
                    {rightItem}
                    <div className="absolute top-[30px] right-full w-6 flex items-center">
                      <div className="w-full h-1.5 bg-primary-hover" />
                      <div className="absolute left-0 -translate-x-1/2 size-3 rounded-full bg-secondary" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
