import { contentfulClient } from "../client";
import type { SectionBlockEntry } from "@/lib/contentful/types";
import type { CtaEntry } from "@/lib/contentful/heroSection/types";
import type { ContactSectionSkeleton, ContactSectionContent } from "./types";

export async function getContactSection(): Promise<ContactSectionContent> {
  const entries = await contentfulClient.getEntries<ContactSectionSkeleton>({
    content_type: "contactSection",
    include: 2,
    limit: 1,
  });

  const section = entries.items[0];

  if (!section) {
    return { title: "", actions: [] };
  }

  const { sectionBlock, actions } = section.fields;

  const { title, subTitle, description } = (sectionBlock as SectionBlockEntry).fields;

  const resolvedActions = (actions ?? [])
    .filter((action): action is CtaEntry => "fields" in action)
    .map(({ fields }) => {
      const { title: ctaTitle, href, variant, shape, icon, iconPosition } = fields;
      return {
        title: ctaTitle,
        href: href ?? "",
        variant: (variant ?? "default") as "default" | "ghost",
        shape: (shape ?? "square") as "square" | "rounded",
        icon: icon ?? "",
        iconPosition: (iconPosition ?? "right") as "left" | "right",
      };
    });

  return {
    title,
    subTitle,
    description,
    actions: resolvedActions,
  };
}
