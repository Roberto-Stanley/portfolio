import { contentfulClient } from "../client";
import { TestimonialSectionSkeleton, TestimonialEntry, TestimonialSectionContent } from "./types";

export async function getTestimonials(): Promise<TestimonialSectionContent> {
  const entries = await contentfulClient.getEntries<TestimonialSectionSkeleton>({
    content_type: "testimonialSection",
    include: 2,
    limit: 1,
  });

  const section = entries.items[0];

  if (!section) return { title: "", testimonials: [] };

  const resolved = section.fields.testimonials.filter(
    (t): t is TestimonialEntry => "fields" in t
  );

  const testimonials = resolved.map(({ fields }) => {
    const { authorName, authorTitle, authorPhoto, quote } = fields;
const photoUrl = authorPhoto && "fields" in authorPhoto && authorPhoto.fields?.file?.url
      ? `https:${authorPhoto.fields.file.url}`
      : "";

    return {
      name: authorName,
      company: authorTitle ?? "",
      photo: photoUrl,
      quote,
    };
  });

  return {
    title: section.fields.title,
    testimonials,
  };
}
