import Text from "@/app/components/text";
import { CodeWindow } from "@/app/components/codeWindown";
import Container from "@/app/components/container";
import Button from "@/app/components/button";
import TypingAnimation from "@/app/components/typingAnimation";
import { getHeroSection } from "@/lib/contentful/heroSection";

export default async function HeroSection() {
  const { subTitle, title, description, actions } = await getHeroSection();
  return (
    <section
      id="hero"
      className="w-full pt-36 pb-12 overflow-hidden mb-11 md:mb-0"
    >
      <Container className="flex gap-6 lg:gap-0 flex-wrap lg:flex-nowrap min-h-[650px]">
        {/* Left column */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <Text type="sub-title" className="mb-6" weight="light">
            {subTitle}
          </Text>

          {title && (
            <h1 className="mb-4">
              <TypingAnimation
                words={title.words}
                pauseDuration={title.pauseDuration}
              />
            </h1>
          )}

          {description && (
            <Text type="body" weight="light" className="mb-6">
              {description}
            </Text>
          )}

          {actions.length > 0 && (
            <div className="flex items-center gap-3">
              {actions.map((action) => (
                <Button
                  iconStroke="white"
                  key={action.href}
                  href={action.href}
                  variant={action.variant}
                  shape={action.shape}
                  icon={action.icon}
                  iconPosition={action.iconPosition}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {action.title}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="min-w-full lg:min-w-[510px] flex justify-center items-center">
          <CodeWindow />
        </div>
      </Container>
    </section>
  );
}
