"use client";

import { useEffect, useRef, useState } from "react";

export function useTypewriter(text: string, speed = 42) {
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCharIndex(0);
    setDone(false);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCharIndex((i) => {
        if (i + 1 >= text.length) {
          clearInterval(timerRef.current!);
          setDone(true);
        }
        return i + 1;
      });
    }, speed);

    return () => clearInterval(timerRef.current!);
  }, [text, speed]);

  return { charIndex, done };
}
