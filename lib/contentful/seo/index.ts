import { getEntries } from "../client";
import type { SeoMetadataSkeleton, SeoMetadataContent } from "./types";

export async function getSeoMetadata(): Promise<SeoMetadataContent | null> {
  const entries = await getEntries<SeoMetadataSkeleton>("seoMetadata", {
    content_type: "seoMetadata",
    limit: 1,
  });

  const entry = entries.items[0];

  if (!entry) return null;

  const {
    siteTitle,
    titleTemplate,
    siteDescription,
    keywords,
    authorName,
    jobTitle,
    worksForName,
    worksForUrl,
    addressCountry,
    knowsAbout,
    gitHubUrl,
    linkedinUrl,
    siteUrl,
    ogSiteName,
    ogLocate,
  } = entry.fields;

  return {
    siteTitle,
    titleTemplate,
    siteDescription,
    keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
    authorName,
    jobTitle,
    worksForName,
    worksForUrl,
    addressCountry,
    knowsAbout: knowsAbout
      ? knowsAbout.split(",").map((s) => s.trim()).filter(Boolean)
      : undefined,
    gitHubUrl,
    linkedinUrl,
    siteUrl,
    ogSiteName,
    ogLocale: ogLocate,
  };
}
