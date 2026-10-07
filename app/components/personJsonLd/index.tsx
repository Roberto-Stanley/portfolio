import { getSeoMetadata } from "@/lib/contentful/seo";

export default async function PersonJsonLd() {
  const seo = await getSeoMetadata();

  if (!seo) return null;

  const sameAs: string[] = [];
  if (seo.gitHubUrl) sameAs.push(seo.gitHubUrl);
  if (seo.linkedinUrl) sameAs.push(seo.linkedinUrl);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seo.authorName,
    url: seo.siteUrl,
    ...(seo.jobTitle && { jobTitle: seo.jobTitle }),
    ...(seo.worksForName && {
      worksFor: {
        "@type": "Organization",
        name: seo.worksForName,
        ...(seo.worksForUrl && { url: seo.worksForUrl }),
      },
    }),
    address: {
      "@type": "PostalAddress",
      addressCountry: seo.addressCountry,
    },
    ...(seo.knowsAbout && seo.knowsAbout.length > 0 && { knowsAbout: seo.knowsAbout }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
