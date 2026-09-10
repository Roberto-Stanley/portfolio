import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { StatItemProps } from "@/app/components/statItem/types";

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
    title: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    statItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<StatSkeleton>>;
  };
}

export type AboutSectionContent = {
  title: string;
  subTitle: string;
  description: string;
  statItems: StatItemProps[];
};
