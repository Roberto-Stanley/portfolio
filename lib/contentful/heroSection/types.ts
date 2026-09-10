import type { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface TypingAnimationSkeleton extends EntrySkeletonType {
  contentTypeId: 'typingAnimation';
  fields: {
    prevText: EntryFieldTypes.Symbol;
    finalText: EntryFieldTypes.Symbol;
    pauseDuration?: EntryFieldTypes.Integer;
  };
}

export type TypingAnimationEntry = Entry<TypingAnimationSkeleton, undefined, string>;

export interface CtaSkeleton extends EntrySkeletonType {
  contentTypeId: 'cta';
  fields: {
    title: EntryFieldTypes.Symbol;
    href?: EntryFieldTypes.Symbol;
    variant?: EntryFieldTypes.Symbol;
    shape?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.Symbol;
    iconPosition?: EntryFieldTypes.Symbol;
  };
}

export type CtaEntry = Entry<CtaSkeleton, undefined, string>;

export interface HeroSectionSkeleton extends EntrySkeletonType {
  contentTypeId: 'heroSection';
  fields: {
    subTitle: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.EntryLink<TypingAnimationSkeleton>;
    description?: EntryFieldTypes.Text;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CtaSkeleton>>;
  };
}

export type TypingAnimationContent = {
  words: string[];
  pauseDuration: number;
};

export type CtaContent = {
  title: string;
  href: string;
  variant: 'default' | 'ghost';
  shape: 'square' | 'rounded';
  icon: string;
  iconPosition: 'left' | 'right';
};

export type HeroSectionContent = {
  subTitle: string;
  title: TypingAnimationContent | null;
  description: string;
  actions: CtaContent[];
};
