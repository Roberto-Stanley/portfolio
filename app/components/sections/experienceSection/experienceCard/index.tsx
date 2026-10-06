import Image from "next/image";
import { MapPin } from "feather-icons-react";
import ExpandableText from "@/app/components/expandableText";
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
  link,
}: ExperienceCardProps) {
  return (
    <Card className="flex flex-col gap-3 w-full sm:flex-row sm:items-start md:flex-col md:items-stretch lg:flex-row lg:items-start">
      {/* Badge + image */}
      <div className="flex flex-col gap-3 items-center shrink-0">
        <Badge>
          <Text type="sub-body">{years}</Text>
        </Badge>
        {imageSrc && (
          <div className="relative h-[111px] w-5/6 sm:w-[148px] md:w-5/6 lg:w-[148px] rounded-lg overflow-hidden shrink-0">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
        )}
        {/* Ver button — desktop only */}
        {link && (
          <Button
            icon="arrow-up-right"
            iconStroke="white"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex md:hidden lg:inline-flex"
          >
            Ver
          </Button>
        )}
      </div>

      {/* Title, company, location, description */}
      <div className="flex flex-col gap-2 flex-1 min-w-0 sm:self-stretch md:self-auto lg:self-stretch">
        <Text type="body" className="text-content-primary" weight="medium">
          {title}
        </Text>
        <div className="flex gap-3 items-center flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
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
        {/* Mobile: 4 lines */}
        <div className="sm:hidden md:block lg:hidden">
          <ExpandableText
            text={description}
            collapsedLines={4}
            className="font-primary text-base text-content-secondary font-light [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mb-1 [&_strong]:font-semibold"
            buttonClassName="mt-1 text-xs font-medium text-primary hover:underline w-full text-right"
          />
        </div>
        {/* Desktop: 8 lines */}
        <div className="hidden sm:block md:hidden lg:block">
          <ExpandableText
            text={description}
            collapsedLines={8}
            className="font-primary text-base text-content-secondary font-light [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mb-1 [&_strong]:font-semibold"
            buttonClassName="mt-1 text-sm text-primary hover:underline"
          />
        </div>
      </div>

      {/* Ver button — mobile only */}
      {link && (
        <Button
          icon="arrow-up-right"
          iconStroke="white"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden md:inline-flex lg:hidden"
        >
          Ver
        </Button>
      )}
    </Card>
  );
}
