"use client";

import { useEffect, useState } from "react";
import { CODE, Tab, highlight } from "./constants";
import { useTypewriter } from "./useTypewriter";
import { TitleBar } from "./TitleBar";
import { TabBar } from "./TabBar";
import { CodePanel } from "./CodePanel";
import { Footer } from "./Footer";

export function CodeWindow() {
  const [tab, setTab] = useState<Tab>("request");
  const [html, setHtml] = useState("");

  const { content, lang } = CODE[tab];
  const { charIndex, done } = useTypewriter(content);
  const isComplete = done && tab === "response";

  useEffect(() => {
    highlight(content, lang).then(setHtml);
  }, [content, lang]);

  useEffect(() => {
    if (!done || tab !== "request") return;
    const t = setTimeout(() => setTab("response"), 800);
    return () => clearTimeout(t);
  }, [done, tab]);

  return (
    <div className="bg-[#011627] rounded-xl border border-white/[0.07] overflow-hidden w-full max-w-lg">
      <TitleBar isComplete={isComplete} />
      <TabBar tab={tab} isComplete={isComplete} onTabChange={setTab} />
      <CodePanel html={html} charIndex={charIndex} />
      <Footer isComplete={isComplete} />
    </div>
  );
}
