import { contentfulClient } from "../client";
import { AboutSectionSkeleton, AboutSectionContent, StatEntry } from "./types";

export async function getAboutSection(): Promise<AboutSectionContent> {
  const entries = await contentfulClient.getEntries<AboutSectionSkeleton>({
    content_type: "aboutMeSection",
    include: 2,
    limit: 1,
  });
  console.log("important entries", entries);
  const section = entries.items[0];

  if (!section) {
    return { title: "", subTitle: "", description: "", statItems: [] };
  }

  const { title, subTitle, description, statItems } = section.fields;

  const resolvedStatItems = (statItems ?? [])
    .filter((item): item is StatEntry => "fields" in item)
    .map(({ fields }) => ({
      value: fields.value,
      label: fields.shortTitle ?? fields.title,
    }));

  return {
    title,
    subTitle: subTitle ?? "",
    description,
    statItems: resolvedStatItems,
  };
}
