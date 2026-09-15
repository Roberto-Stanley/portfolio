import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { SectionBlockSkeleton, SectionBlockContent } from "@/lib/contentful/types";

export interface ExperienceSkeleton extends EntrySkeletonType {
  contentTypeId: "experience";
  fields: {
    title: EntryFieldTypes.Symbol;
    companyName?: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    type: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    link?: EntryFieldTypes.Symbol;
    starteAt: EntryFieldTypes.Symbol;
    endedAt?: EntryFieldTypes.Symbol;
  };
}

export type ExperienceEntry = Entry<ExperienceSkeleton, undefined, string>;

export interface ExperiencesSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "experiencesSection";
  fields: {
    name: EntryFieldTypes.Symbol;
    sectionBlock?: EntryFieldTypes.EntryLink<SectionBlockSkeleton>;
    experienceItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ExperienceSkeleton>>;
  };
}

export type ExperienceContent = {
  title: string;
  companyName?: string;
  description: string;
  type: string;
  image?: string;
  link?: string;
  starteAt: string;
  endedAt?: string;
};

export type ExperiencesSectionContent = {
  sectionBlock?: SectionBlockContent;
  experienceItems: ExperienceContent[];
};
