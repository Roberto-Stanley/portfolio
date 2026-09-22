import FloatingTechBadges from "@/app/components/floatingTechBadges";
import Container from "@/app/components/container";
import Text from "@/app/components/text";
import StatsBar from "@/app/components/statsBar";
import TimeLine from "@/app/components/timeLine";
import ExperienceCard from "./experienceCard";
import { getExperiencesSection } from "@/lib/contentful/experiencesSection";

export default async function ExperienceSection() {
  const { sectionBlock, experienceItems } = await getExperiencesSection();

  const experiences = experienceItems.map(
    ({ title, companyName, description, type, image, starteAt, endedAt }) => ({
      years: endedAt ? `${starteAt} - ${endedAt}` : starteAt,
      imageSrc: image ?? "",
      title,
      company: companyName ?? "",
      location: type,
      description,
    }),
  );
  console.log("important", experiences);
  return (
    <section id="projects" className="w-full relative mb-52">
      <div className="flex flex-row justify-between items-center gap-12 mb-24">
        <FloatingTechBadges className="hidden xl:block shrink-0" />
        {/* Heading + Floating Badges */}
        <Container className="grow">
          <div className="flex flex-col gap-2">
            {sectionBlock?.subTitle && (
              <Text
                type="sub-title"
                weight="light"
                className="mb-6 text-center"
              >
                {sectionBlock.subTitle}
              </Text>
            )}
            {sectionBlock?.title && (
              <Text tag="h2" type="title" className="mb-2 text-center">
                {sectionBlock.title}
              </Text>
            )}
            {sectionBlock?.description && (
              <Text
                tag="h2"
                type="title"
                weight="extrabold"
                className="text-center"
              >
                {sectionBlock.description}
              </Text>
            )}
          </div>
        </Container>
        <FloatingTechBadges className="hidden xl:block shrink-0" />
      </div>

      {/* Experience cards 2×2 grid */}
      <Container>
        <div className="relative mb-24">
          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>

          {/* Desktop: timeline */}
          <div className="hidden md:block">
            <TimeLine>
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </TimeLine>
          </div>
        </div>

        <StatsBar />
      </Container>
    </section>
  );
}
