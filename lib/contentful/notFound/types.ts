export type NotFoundSkeleton = {
  contentTypeId: "notFoundPage";
  fields: {
    label: string;
    title: string;
    subTitle: string;
    description?: string;
    buttonText: string;
  };
};

export type NotFoundContent = NotFoundSkeleton["fields"];
