import AnimationBlur from "@/app/components/animationBlur";
import Container from "@/app/components/container";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`bg-background-decorative rounded-lg ${className}`} />;
}

function SectionSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-24">
      <Container className="flex flex-col gap-6">
        {children}
      </Container>
    </section>
  );
}

export default function PageSkeleton() {
  return (
    <main className="overflow-x-hidden animate-pulse">
      <AnimationBlur />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 sm:pt-12">
        <SkeletonBlock className="h-10 w-64 rounded-full" />
      </div>

      {/* Hero */}
      <section className="pt-36 pb-12 mb-11 md:mb-0">
        <Container className="flex gap-6 flex-wrap lg:flex-nowrap min-h-[650px] items-center">
          {/* Left column */}
          <div className="flex flex-col flex-1 gap-5">
            <SkeletonBlock className="h-4 w-36" />
            <SkeletonBlock className="h-12 w-56" />
            <div className="flex flex-col gap-2">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-3/4" />
            </div>
            <div className="flex gap-3 mt-2">
              <SkeletonBlock className="h-10 w-28 rounded-5xl" />
              <SkeletonBlock className="h-10 w-10 rounded-full" />
              <SkeletonBlock className="h-10 w-10 rounded-full" />
            </div>
          </div>

          {/* Right column — code window */}
          <div className="min-w-full lg:min-w-[510px] flex justify-center">
            <SkeletonBlock className="h-80 w-full max-w-lg rounded-xl" />
          </div>
        </Container>
      </section>

      {/* About */}
      <SectionSkeleton>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <SkeletonBlock className="h-[500px] w-full lg:w-[500px] rounded-full shrink-0" />
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <SkeletonBlock className="h-4 w-24" />
            <SkeletonBlock className="h-9 w-64" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-2/3" />
          </div>
        </div>
      </SectionSkeleton>

      {/* Experience */}
      <SectionSkeleton>
        <SkeletonBlock className="h-4 w-24" />
        <SkeletonBlock className="h-9 w-48" />
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <SkeletonBlock key={i} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      </SectionSkeleton>

      {/* Feedback */}
      <SectionSkeleton>
        <SkeletonBlock className="h-4 w-24 mx-auto" />
        <SkeletonBlock className="h-9 w-48 mx-auto" />
        <SkeletonBlock className="h-48 w-full rounded-xl" />
      </SectionSkeleton>

      {/* Tools */}
      <SectionSkeleton>
        <SkeletonBlock className="h-4 w-24 mx-auto" />
        <SkeletonBlock className="h-9 w-48 mx-auto" />
        <div className="flex flex-wrap gap-3 justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>
      </SectionSkeleton>

      {/* Contact */}
      <SectionSkeleton>
        <SkeletonBlock className="h-4 w-24 mx-auto" />
        <SkeletonBlock className="h-9 w-48 mx-auto" />
        <div className="flex flex-col gap-4 max-w-lg mx-auto w-full">
          <SkeletonBlock className="h-12 w-full rounded-xl" />
          <SkeletonBlock className="h-12 w-full rounded-xl" />
          <SkeletonBlock className="h-32 w-full rounded-xl" />
          <SkeletonBlock className="h-12 w-36 rounded-5xl" />
        </div>
      </SectionSkeleton>
    </main>
  );
}
