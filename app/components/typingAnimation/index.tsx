"use client";

import { useEffect, useState } from "react";
import { TypingAnimationProps } from "./types";

export default function TypingAnimation({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1000,
  className = "",
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const current = words[wordIndex];
    const isLast = wordIndex === words.length - 1;

    if (!isDeleting && displayed === current) {
      if (isLast) {
        setDone(true);
        return;
      }
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayed(
          isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, done, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`font-second text-4xl leading-10 text-content-primary ${className}`}>
      {displayed}
      <span className={`border-r-3 border-white ml-0.5 ${done ? "animate-blink-cursor-three" : "border-opacity-100"}`} />
    </span>
  );
}
