import { getEntries } from "../client";
import type { SectionBlockEntry } from "@/lib/contentful/types";
import { AboutSectionSkeleton, AboutSectionContent, StatEntry } from "./types";

export async function getAboutSection(): Promise<AboutSectionContent> {
  const entries = await getEntries<AboutSectionSkeleton>("aboutMeSection", {
    content_type: "aboutMeSection",
    include: 2,
    limit: 1,
  });

  const section = entries.items[0];

  if (!section) {
    return { title: "", statItems: [] };
  }

  const { sectionBLock, statItems } = section.fields;

  const { title, subTitle, description } = (sectionBLock as SectionBlockEntry).fields;

  const resolvedStatItems = (statItems ?? [])
    .filter((item): item is StatEntry => "fields" in item)
    .map(({ fields }) => ({
      value: fields.value,
      label: fields.shortTitle ?? fields.title,
    }));

  return {
    title,
    subTitle,
    description,
    statItems: resolvedStatItems,
  };
}
