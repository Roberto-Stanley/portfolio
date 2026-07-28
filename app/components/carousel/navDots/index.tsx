interface Props {
  current: number;
  scrollSnaps: number[];
  scrollTo: (index: number) => void;
}
export default function NavDots({ current, scrollSnaps, scrollTo }: Props) {
  return (
    <div className="flex gap-2 items-center bg-decorative px-2 py-2 rounded-2xl">
      {scrollSnaps.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className={`size-2 rounded-full transition-colors ${
            i === current ? "bg-primary" : "bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}
