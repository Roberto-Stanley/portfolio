import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface SeoMetadataSkeleton extends EntrySkeletonType {
  contentTypeId: "seoMetadata";
  fields: {
    name: EntryFieldTypes.Symbol;
    siteTitle: EntryFieldTypes.Symbol;
    titleTemplate?: EntryFieldTypes.Symbol;
    siteDescription: EntryFieldTypes.Text;
    keywords: EntryFieldTypes.Symbol;
    authorName: EntryFieldTypes.Symbol;
    jobTitle?: EntryFieldTypes.Symbol;
    worksForName?: EntryFieldTypes.Symbol;
    worksForUrl?: EntryFieldTypes.Symbol;
    addressCountry: EntryFieldTypes.Symbol;
    knowsAbout?: EntryFieldTypes.Symbol;
    gitHubUrl?: EntryFieldTypes.Symbol;
    linkedinUrl?: EntryFieldTypes.Symbol;
    siteUrl: EntryFieldTypes.Symbol;
    ogSiteName?: EntryFieldTypes.Symbol;
    ogLocate?: EntryFieldTypes.Symbol;
  };
}

export type SeoMetadataContent = {
  siteTitle: string;
  titleTemplate?: string;
  siteDescription: string;
  keywords: string[];
  authorName: string;
  jobTitle?: string;
  worksForName?: string;
  worksForUrl?: string;
  addressCountry: string;
  knowsAbout?: string[];
  gitHubUrl?: string;
  linkedinUrl?: string;
  siteUrl: string;
  ogSiteName?: string;
  ogLocale?: string;
};
