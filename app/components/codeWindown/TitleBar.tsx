type Props = {
  isComplete: boolean;
};

export function TitleBar({ isComplete }: Props) {
  return (
    <div className="bg-[#010e1a] px-4 py-2.5 flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      <span className="ml-2 text-xs text-zinc-500 font-mono">api.ts</span>
      <span
        className={`ml-auto w-2 h-2 rounded-full transition-colors duration-500 ${
          isComplete ? "bg-emerald-400" : "bg-zinc-700"
        }`}
      />
    </div>
  );
}
