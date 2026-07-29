import Image from "next/image";
import Text from "@/app/components/text";
import { FeedbackCardProps } from "./types";

export default function FeedbackCard({ name, company, photo, quote }: FeedbackCardProps) {
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

      <Text
        type="body"
        className="text-xl italic text-white text-center"
        weight="light"
      >
        {quote}
      </Text>
    </div>
  );
}
