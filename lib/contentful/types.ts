import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface SectionBlockSkeleton extends EntrySkeletonType {
  contentTypeId: "sectionBlock";
  fields: {
    title: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
  };
}

export type SectionBlockEntry = Entry<SectionBlockSkeleton, undefined, string>;

export type SectionBlockContent = {
  title: string;
  subTitle?: string;
  description?: string;
};
