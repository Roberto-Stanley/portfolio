interface IProp {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className = "" }: IProp) {
  return (
    <div className={`md:max-w-5xl xl:max-w-7xl mx-auto min-w-xs px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}
