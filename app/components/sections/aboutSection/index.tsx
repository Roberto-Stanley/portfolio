import Image from "next/image";
import Orbital from "../../orbital";
import Text from "@/app/components/text";
import Container from "@/app/components/container";

const PROFILE_PHOTO = "/img/profile-photo.jpg";

export default function AboutSection() {
  return (
    <section>
      {/* Orbital decoration with profile photo + cloud label overlays */}
      <Container className="flex flex-col-reverse md:flex-row">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <Orbital className="col-start-1 row-start-1 w-[700px] h-[700px]" />

          {/* Main profile photo overlaid on orbital center */}
          <div className="bg-white col-start-1 row-start-1 ml-[8%] md:ml-[235px] mt-[240px] overflow-hidden relative rounded-[128px] size-[230px]">
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

          {/* Cloud labels — grid-overlaid using ml/mt offsets */}
          {/* <FakeTooltip label="Team leader" ml={324} mt={49} />
          <FakeTooltip label="Frontend" ml={489} mt={213} />
          <FakeTooltip label="Backend" ml={163} mt={471} />
          <FakeTooltip label="Full stack" ml={101} mt={298} />
          <FakeTooltip label="DevOps" ml={437} mt={577} /> */}
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center flex-1 min-w-0 ml-0 md:ml-8">
          <div className="flex flex-col gap-2 items-start">
            <Text type="sub-title" weight="light" className="mb-6">
              Who am I?
            </Text>
            <Text type="title" className="mb-4">
              About me
            </Text>
          </div>

          <Text type="body" weight="light" className="mb-6">
            I am a full-stack developer with expertise
            in JavaScript, React.js, Node.js, Next.js, TypeScript, and Tailwind
            CSS. I specialize in building dynamic, scalable web applications
            with hands-on experience in both frontend and backend technologies,
            including MongoDB, PostgreSQL, and Prisma ORM. I am passionate about
            continuous learning, staying updated with the latest industry
            trends, and delivering high-quality, problem-solving solutions.
          </Text>

          <div className="flex gap-10">
            <div className="flex flex-col">
              <Text type="heading" weight="semibold">
                8 +
              </Text>
              <Text type="sub-body" weight="light" className="capitalize">
                Years Exp.
              </Text>
            </div>
            <div className="flex flex-col">
              <Text type="heading" weight="semibold">
                17 +
              </Text>
              <Text type="sub-body" weight="light" className="capitalize">
                Projects
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
