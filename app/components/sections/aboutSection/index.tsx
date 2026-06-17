import Image from "next/image";
import Button from "../../button";
import FakeTooltip from "../../fakeTooltip";
import Orbital from "../../orbital";
import Text from "../../text/Index";

const PROFILE_PHOTO = "/img/profile-photo.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex gap-[37px] items-center justify-center py-16"
    >
      {/* Orbital decoration with profile photo + cloud label overlays */}
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <Orbital
          className="col-start-1 row-start-1"
          displayWidth={714}
          displayHeight={725}
        />

        {/* Main profile photo overlaid on orbital center */}
        <div className="bg-white col-start-1 row-start-1 ml-[253px] mt-[257px] overflow-hidden relative rounded-[128px] size-[211px]">
          <div className="absolute inset-[0_-0.2%_-17.79%_-6.16%] rounded-[8px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <Image
                width={1920}
                height={1080}
                alt="Roberto Reyes"
                className="absolute h-[139.13%] left-[-15.56%] max-w-none top-[-16.39%] w-[115.56%]"
                src={PROFILE_PHOTO}
              />
            </div>
          </div>
        </div>

        {/* Cloud labels — grid-overlaid using ml/mt offsets */}
        <FakeTooltip label="Team leader" ml={324} mt={49} />
        <FakeTooltip label="Frontend" ml={469} mt={213} />
        <FakeTooltip label="Backend" ml={163} mt={471} />
        <FakeTooltip label="Full stack" ml={101} mt={298} />
        <FakeTooltip label="DevOps" ml={437} mt={577} />
      </div>

      {/* Bio */}
      <div className="">
        <div className="flex flex-col gap-2 items-start">
          <Text type="sub-title" weight="light" className="mb-6">
            Who am I?
          </Text>
          <Text type="title" className="mb-4">
            About me
          </Text>
        </div>

        <Text type="body" weight="light" className="mb-6">
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </Text>
      </div>
    </section>
  );
}
