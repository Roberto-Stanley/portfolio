import type { Metadata } from "next";
import "./globals.css";
import { getSeoMetadata } from "@/lib/contentful/seo";
import PersonJsonLd from "@/app/components/personJsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata();

  if (!seo) {
    return {
      title: "Roberto Reyes | Senior Full-Stack Developer",
      description:
        "Senior Full-Stack Developer with 8+ years building scalable web apps.",
    };
  }

  return {
    metadataBase: new URL(seo.siteUrl),
    title: {
      default: seo.siteTitle,
      template: seo.titleTemplate ?? `%s | ${seo.authorName}`,
    },
    description: seo.siteDescription,
    keywords: seo.keywords,
    authors: [{ name: seo.authorName }],
    creator: seo.authorName,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: seo.siteUrl,
      siteName: seo.ogSiteName ?? seo.authorName,
      locale: seo.ogLocale ?? "en_US",
      title: seo.siteTitle,
      description: seo.siteDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.siteTitle,
      description: seo.siteDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    // verification: { google: "YOUR_GOOGLE_VERIFICATION_TOKEN" },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
