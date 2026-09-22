import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { StatItemProps } from "@/app/components/statItem/types";
import type { SectionBlockSkeleton, SectionBlockContent } from "@/lib/contentful/types";

export interface StatSkeleton extends EntrySkeletonType {
  contentTypeId: "stat";
  fields: {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    shortTitle?: EntryFieldTypes.Symbol;
    value: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.Symbol;
  };
}

export type StatEntry = Entry<StatSkeleton, undefined, string>;

export interface AboutSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "aboutMeSection";
  fields: {
    name: EntryFieldTypes.Symbol;
    sectionBLock: EntryFieldTypes.EntryLink<SectionBlockSkeleton>;
    statItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<StatSkeleton>>;
  };
}

export type AboutSectionContent = SectionBlockContent & {
  statItems: StatItemProps[];
};
