import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type {
  SectionBlockSkeleton,
  SectionBlockContent,
} from "@/lib/contentful/types";
import type { StatSkeleton, StatEntry } from "@/lib/contentful/aboutSection/types";

export type { StatSkeleton, StatEntry };

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
  contentTypeId: "experienceSection";
  fields: {
    name: EntryFieldTypes.Symbol;
    sectionBlock?: EntryFieldTypes.EntryLink<SectionBlockSkeleton>;
    experienceItems: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ExperienceSkeleton>
    >;
    stats?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<StatSkeleton>>;
    renderStats: EntryFieldTypes.Boolean;
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

export type StatContent = {
  value: string;
  label: string;
  icon?: string;
};

export type ExperiencesSectionContent = {
  sectionBlock?: SectionBlockContent;
  experienceItems: ExperienceContent[];
  stats: StatContent[];
  renderStats: boolean;
};
