"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ExpandableDescriptionProps } from "./types";

const lineClampClass: Record<number, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
  7: "line-clamp-7",
  8: "line-clamp-8",
  9: "line-clamp-9",
  10: "line-clamp-10",
};

export default function ExpandableDescription({
  description,
  collapsedLines = 8,
}: ExpandableDescriptionProps) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [description]);

  return (
    <div className="font-primary text-base text-content-secondary font-light [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mb-1 [&_strong]:font-semibold">
      <div
        ref={contentRef}
        className={!expanded ? lineClampClass[collapsedLines] : undefined}
      >
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
      {(isOverflowing || expanded) && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-sm text-primary hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
