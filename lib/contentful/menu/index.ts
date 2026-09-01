import { contentfulClient } from "../client";
import { MenuSkeleton, MenuItemEntry, MenuContent } from "./types";

export async function getMenu(): Promise<MenuContent> {
  const entries = await contentfulClient.getEntries<MenuSkeleton>({
    content_type: "menu",
    include: 2,
    limit: 1,
  });

  const menu = entries.items[0];

  if (!menu) return { name: "", menuItems: [] };

  const resolved = menu.fields.menuItems.filter(
    (item): item is MenuItemEntry => "fields" in item
  );

  const menuItems = resolved.map(({ fields }) => {
    const { title, href, callToAction, variant, shape, icon, iconPosition } = fields;
    return {
      title,
      href: href ?? "",
      callToAction,
      variant: (variant ?? "default") as 'default' | 'ghost',
      shape: (shape ?? "square") as 'square' | 'rounded',
      icon: icon ?? "",
      iconPosition: (iconPosition ?? "right") as 'left' | 'right',
    };
  });

  return {
    name: menu.fields.name,
    menuItems,
  };
}
