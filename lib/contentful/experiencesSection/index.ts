import type { Asset } from "contentful";
import { getEntries } from "../client";
import type { SectionBlockEntry } from "@/lib/contentful/types";
import {
  ExperiencesSectionSkeleton,
  ExperiencesSectionContent,
  ExperienceEntry,
  StatEntry,
} from "./types";

export async function getExperiencesSection(): Promise<ExperiencesSectionContent> {
  const entries = await getEntries<ExperiencesSectionSkeleton>("experienceSection", {
    content_type: "experienceSection",
    include: 2,
    limit: 1,
  });
  const section = entries.items[0];

  if (!section) {
    return { experienceItems: [], stats: [], renderStats: false };
  }

  const { sectionBlock, experienceItems, stats, renderStats } = section.fields;

  const resolvedSectionBlock = sectionBlock
    ? {
        title: (sectionBlock as SectionBlockEntry).fields.title,
        subTitle: (sectionBlock as SectionBlockEntry).fields.subTitle,
        description: (sectionBlock as SectionBlockEntry).fields.description,
      }
    : undefined;

  const resolvedExperienceItems = experienceItems
    .filter((item): item is ExperienceEntry => "fields" in item)
    .map(({ fields }) => {
      const imageAsset = fields.image as Asset | undefined;
      const imageUrl = imageAsset?.fields?.file?.url
        ? `https:${imageAsset.fields.file.url}`
        : undefined;

      return {
        title: fields.title,
        companyName: fields.companyName,
        description: fields.description,
        type: fields.type,
        image: imageUrl,
        link: fields.link,
        starteAt: fields.starteAt,
        endedAt: fields.endedAt,
      };
    });

  const resolvedStats = (stats ?? [])
    .filter((item): item is StatEntry => "fields" in item)
    .map(({ fields }) => ({
      value: fields.value,
      label: fields.title,
      icon: fields.icon,
    }));

  return {
    sectionBlock: resolvedSectionBlock,
    experienceItems: resolvedExperienceItems,
    stats: resolvedStats,
    renderStats,
  };
}
