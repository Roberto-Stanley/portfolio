type Props = {
  isComplete: boolean;
};

export function Footer({ isComplete }: Props) {
  return (
    <div className="bg-[#010e1a] px-4 py-1.5 flex justify-between border-t border-white/[0.05]">
      <span className="text-[11px] text-zinc-600 font-mono tracking-wide">
        TYPESCRIPT
      </span>
      <span
        className={`text-[11px] font-mono transition-colors duration-300 ${
          isComplete ? "text-emerald-400" : "text-zinc-600"
        }`}
      >
        ● no errors
      </span>
    </div>
  );
}
