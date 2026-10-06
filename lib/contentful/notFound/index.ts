import { getEntries } from "../client";
import { NotFoundContent, NotFoundSkeleton } from "./types";

export async function getNotFoundContent(): Promise<NotFoundContent> {
  const entries = await getEntries<NotFoundSkeleton>("notFoundPage", {
    content_type: "notFoundPage",
    limit: 1,
  });

  const entry = entries.items[0];

  if (!entry) {
    return {
      label: "404",
      title: "You've wandered off the map",
      subTitle: "page not found",
      description:
        "The page you're looking for doesn't exist or has been moved. Head back home and keep exploring.",
      buttonText: "Back to Home",
    };
  }

  return {
    label: String(entry.fields.label),
    title: String(entry.fields.title),
    subTitle: String(entry.fields.subTitle),
    description: entry.fields.description
      ? String(entry.fields.description)
      : undefined,
    buttonText: String(entry.fields.buttonText),
  };
}
