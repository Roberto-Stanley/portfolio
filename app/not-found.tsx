import { Home } from "feather-icons-react";
import AnimationBlur from "@/app/components/animationBlur";
import Container from "@/app/components/container";
import Button from "@/app/components/button";
import Text from "@/app/components/text";

export default function NotFound() {
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
          404
        </Text>

        <Text type="sub-title">page not found</Text>

        <Text type="title" tag="h1">
          You&apos;ve wandered off the map
        </Text>

        <Text type="body" className="max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Head back home and keep exploring.
        </Text>

        <Button
          href="/"
          icon={<Home size={18} className="text-white" />}
          iconPosition="left"
        >
          Back to Home
        </Button>
      </Container>
    </main>
  );
}
