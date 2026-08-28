import type { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';
import { TestimonialCardProps } from "@/app/components/sections/testimonialSection/testimonialCard/types";

export type TestimonialSectionContent = {
  title: string;
  testimonials: TestimonialCardProps[];
};

export interface TestimonialSkeleton extends EntrySkeletonType {
  contentTypeId: 'testimonial';
  fields: {
    authorName: EntryFieldTypes.Symbol;
    authorTitle?: EntryFieldTypes.Symbol;
    authorPhoto?: EntryFieldTypes.AssetLink;
    quote: EntryFieldTypes.Text;
  };
}

export type TestimonialEntry = Entry<TestimonialSkeleton, undefined, string>;

export interface TestimonialSectionSkeleton extends EntrySkeletonType {
  contentTypeId: 'testimonialSection';
  fields: {
    title: EntryFieldTypes.Symbol;
    testimonials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TestimonialSkeleton>>;
  };
}
