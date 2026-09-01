import type { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface MenuItemSkeleton extends EntrySkeletonType {
  contentTypeId: 'menuItem';
  fields: {
    title: EntryFieldTypes.Symbol;
    href?: EntryFieldTypes.Symbol;
    callToAction: EntryFieldTypes.Boolean;
    variant?: EntryFieldTypes.Symbol;
    shape?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.Symbol;
    iconPosition?: EntryFieldTypes.Symbol;
  };
}

export type MenuItemEntry = Entry<MenuItemSkeleton, undefined, string>;

export interface MenuSkeleton extends EntrySkeletonType {
  contentTypeId: 'menu';
  fields: {
    name: EntryFieldTypes.Symbol;
    menuItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<MenuItemSkeleton>>;
  };
}

export type MenuItemContent = {
  title: string;
  href: string;
  callToAction: boolean;
  variant: 'default' | 'ghost';
  shape: 'square' | 'rounded';
  icon: string;
  iconPosition: 'left' | 'right';
};

export type MenuContent = {
  name: string;
  menuItems: MenuItemContent[];
};
