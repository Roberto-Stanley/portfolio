import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { MapPin } from "feather-icons-react";
import Text from "@/app/components/text";
import Card from "@/app/components/card";
import Badge from "@/app/components/badge";
import Button from "@/app/components/button";
import { ExperienceCardProps } from "./types";

export default function ExperienceCard({
  years,
  imageSrc,
  title,
  company,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <Card className="flex gap-3 items-start w-full">
      {/* Left column: year badge + mockup + ver button */}
      <div className="flex flex-col gap-3 items-center shrink-0">
        <Badge>
          <Text type="sub-body">{years}</Text>
        </Badge>
        {imageSrc && (
          <div className="relative h-[111px] w-[148px] rounded-lg overflow-hidden shrink-0">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
        )}
        <Button icon="arrow-up-right" iconStroke="white">
          Ver
        </Button>
      </div>

      {/* Right column: title, company, location, description */}
      <div className="flex flex-col gap-2 flex-1 min-w-0 self-stretch">
        <Text type="body" className="text-content-primary" weight="medium">
          {title}
        </Text>
        <div className="flex gap-3 items-center flex-wrap sm:flex-nowrap">
          <Text type="sub-body" weight="medium" className="text-secondary">
            {company}
          </Text>
          <div className="flex gap-0.5 items-center">
            <MapPin size={14} className="text-[#dedede] shrink-0" />
            <Text
              type="sub-body"
              tag="span"
              className="text-content-primary"
              weight="medium"
            >
              {location}
            </Text>
          </div>
        </div>
        <div className="font-primary text-base text-content-secondary font-light [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mb-1 [&_strong]:font-semibold">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </Card>
  );
}
