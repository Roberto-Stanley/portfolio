import type { EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { SectionBlockSkeleton, SectionBlockContent } from "@/lib/contentful/types";
import type { CtaSkeleton, CtaContent } from "@/lib/contentful/heroSection/types";

export interface ContactSectionSkeleton extends EntrySkeletonType {
  contentTypeId: "contactSection";
  fields: {
    sectionBlock: EntryFieldTypes.EntryLink<SectionBlockSkeleton>;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CtaSkeleton>>;
  };
}

export type ContactSectionContent = SectionBlockContent & {
  actions: CtaContent[];
};
