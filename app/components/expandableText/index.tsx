"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ExpandableTextProps } from "./types";

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

export default function ExpandableText({
  text,
  collapsedLines = 8,
  className,
  buttonClassName,
  onExpandChange,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div>
      <div
        ref={contentRef}
        className={`${className ?? ""} ${!expanded ? (lineClampClass[collapsedLines] ?? "") : ""}`.trim()}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      {(isOverflowing || expanded) && (
        <button
          onClick={() => {
            const next = !expanded;
            setExpanded(next);
            onExpandChange?.(next);
          }}
          className={buttonClassName ?? "mt-1 text-sm text-primary hover:underline"}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
