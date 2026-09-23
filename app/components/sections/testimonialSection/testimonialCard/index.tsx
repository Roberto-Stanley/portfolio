"use client";

import Image from "next/image";
import Text from "@/app/components/text";
import ExpandableText from "@/app/components/expandableText";
import { TestimonialCardProps } from "./types";

export default function TestimonialCard({ name, company, photo, quote, onExpandChange }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-[21px] items-center w-full">
      <div className="flex gap-6 items-center">
        <div className="relative shrink-0 size-[75px] rounded-full overflow-hidden">
          <Image
            alt={name}
            className="absolute block inset-0 max-w-none size-full object-cover"
            height="75"
            src={photo}
            width="75"
          />
        </div>
        <div className="flex flex-col items-start">
          <Text type="body" weight="medium" className="text-white">
            {name}
          </Text>
          <Text type="body" weight="light">
            {company}
          </Text>
        </div>
      </div>

      <ExpandableText
        text={quote}
        className="text-xl italic text-white text-center font-light"
        buttonClassName="mt-1 text-sm text-primary hover:underline w-full text-center"
        onExpandChange={onExpandChange}
      />
    </div>
  );
}
