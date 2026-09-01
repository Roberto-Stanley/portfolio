import { contentfulClient } from "../client";
import {
  HeroSectionSkeleton,
  TypingAnimationEntry,
  CtaEntry,
  HeroSectionContent,
} from "./types";

export async function getHeroSection(): Promise<HeroSectionContent> {
  const entries = await contentfulClient.getEntries<HeroSectionSkeleton>({
    content_type: "heroSection",
    include: 2,
    limit: 1,
  });

  const section = entries.items[0];

  if (!section) {
    return { subTitle: "", title: null, description: "", actions: [] };
  }

  const { subTitle, title, description, actions } = section.fields;

  const typingAnimation =
    title && "fields" in title
      ? {
          words: [(title as TypingAnimationEntry).fields.prevText, (title as TypingAnimationEntry).fields.finalText],
          pauseDuration: (title as TypingAnimationEntry).fields.pauseDuration ?? 0,
        }
      : null;

  const resolvedActions = (actions ?? [])
    .filter((action): action is CtaEntry => "fields" in action)
    .map(({ fields }) => {
      const { title: ctaTitle, href, variant, shape, icon, iconPosition } = fields;
      return {
        title: ctaTitle,
        href: href ?? "",
        variant: (variant ?? "default") as 'default' | 'ghost',
        shape: (shape ?? "square") as 'square' | 'rounded',
        icon: icon ?? "",
        iconPosition: (iconPosition ?? "right") as 'left' | 'right',
      };
    });

  return {
    subTitle,
    title: typingAnimation,
    description: description ?? "",
    actions: resolvedActions,
  };
}
