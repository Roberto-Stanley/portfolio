import Image from "next/image";
import Orbital from "@/app/components/orbital";
import Text from "@/app/components/text";
import Container from "@/app/components/container";
import StatItem from "@/app/components/statItem";
import { getAboutSection } from "@/lib/contentful/aboutSection";

const PROFILE_PHOTO = "/img/profile-photo.jpg";

export default async function AboutSection() {
  const { title, subTitle, description, statItems } = await getAboutSection();

  return (
    <section id="about" className="mb-52">
      {/* Orbital decoration with profile photo + cloud label overlays */}
      <Container className="flex flex-col-reverse lg:flex-row overflow-hidden">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-w-full overflow-hidden self-center lg:self-auto">
          <Orbital className="col-start-1 row-start-1 w-[600px] h-[600px] xl:w-[700px] xl:h-[700px]" />

          {/* Main profile photo overlaid on orbital center */}
          <div className="bg-white col-start-1 row-start-1 ml-[74px] md:ml-[219px] xl:ml-[235px] mt-[256px] xl:mt-[240px] overflow-hidden relative rounded-[110px] xl:rounded-[128px] size-[197px] xl:size-[230px]">
            <div className="absolute inset-[0_-0.2%_-17.79%_-6.16%] rounded-[8px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                <Image
                  width={1920}
                  height={1080}
                  alt="Roberto Reyes"
                  className="absolute h-[139.13%] left-[-15.56%] max-w-none top-[-18.39%] w-[115.56%]"
                  src={PROFILE_PHOTO}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center flex-1 min-w-0 w-full overflow-hidden ml-0 md:ml-8">
          <div className="flex flex-col gap-2 items-start">
            <Text type="sub-title" weight="light" className="mb-6">
              {subTitle}
            </Text>
            <Text type="title" className="mb-4">
              {title}
            </Text>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {description?.split("\n\n").map((paragraph, index) => (
              <Text key={index} type="body" weight="light">
                {paragraph}
              </Text>
            ))}
          </div>

          <div className="flex gap-10">
            {statItems.map(({ value, label }) => (
              <StatItem key={value} value={value} label={label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
