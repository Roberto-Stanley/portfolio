import { Home } from "feather-icons-react";
import AnimationBlur from "@/app/components/animationBlur";
import Container from "@/app/components/container";
import Button from "@/app/components/button";
import Text from "@/app/components/text";
import { getNotFoundContent } from "@/lib/contentful/notFound";

export default async function NotFound() {
  const { label, title, subTitle, description, buttonText } = await getNotFoundContent();

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <AnimationBlur />
      <Container className="relative z-10 flex flex-col items-center text-center gap-6">
        <Text
          type="heading"
          tag="p"
          weight="semibold"
          className="leading-none text-secondary"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
        >
          {label}
        </Text>

        <Text type="sub-title">{subTitle}</Text>

        <Text type="title" tag="h1">
          {title}
        </Text>

        {description && (
          <Text type="body" className="max-w-md">
            {description}
          </Text>
        )}

        <Button
          href="/"
          icon={<Home size={18} className="text-white" />}
          iconPosition="left"
        >
          {buttonText}
        </Button>
      </Container>
    </main>
  );
}
