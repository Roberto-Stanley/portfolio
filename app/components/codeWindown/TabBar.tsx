import { Tab, TABS } from "./constants";

type Props = {
  tab: Tab;
  isComplete: boolean;
  onTabChange: (tab: Tab) => void;
};

export function TabBar({ tab, isComplete, onTabChange }: Props) {
  return (
    <div className="flex border-b border-white/[0.07] items-center">
      {TABS.map((t) => (
        <button
          key={t}
          onClick={() => onTabChange(t)}
          className={`px-5 py-2 text-xs font-mono border-b-2 transition-colors ${
            tab === t
              ? "text-[#7c6af7] border-[#7c6af7]"
              : "text-zinc-600 border-transparent hover:text-zinc-400"
          }`}
        >
          {t}
        </button>
      ))}
      <span
        className={`ml-auto mr-4 text-xs font-mono px-2.5 py-0.5 rounded-full border transition-all duration-300 ${
          isComplete
            ? "text-emerald-400 border-emerald-400 bg-emerald-400/10"
            : "text-zinc-600 border-zinc-700"
        }`}
      >
        {isComplete ? "● 200 OK" : "● pending"}
      </span>
    </div>
  );
}
