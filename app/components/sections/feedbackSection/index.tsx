"use client";

import Carousel from "@/app/components/carousel";
import Text from "@/app/components/text";
import Container from "@/app/components/container";
import FeedbackCard from "./feedbackCard";
import { FeedbackCardProps } from "./feedbackCard/types";

const TESTIMONIAL_PHOTO = "/img/testimonial-photo.jpg";
const PROFILE_PHOTO = "/img/profile-photo.jpg";

const feedbacks: FeedbackCardProps[] = [
  {
    name: "Raz neizmal",
    company: "Trez labs",
    photo: TESTIMONIAL_PHOTO,
    quote:
      "Lorem ipsum dolor sit amet consectetur. Et aliquam rhoncus non sagittis aliquam donec lectus sagittis in. Bibendum quis enim nisl tristique orci in sit diam. Dolor mauris tempor eget habitasse feugiat potenti elementum in. Massa felis nisi ornare eu sagittis purus.",
  },
  {
    name: "Roberto Reyes",
    company: "Trez labs",
    photo: PROFILE_PHOTO,
    quote:
      "Lorem ipsum dolor sit amet consectetur. Et aliquam rhoncus non sagittis aliquam donec lectus sagittis in. Bibendum quis enim nisl tristique orci in sit diam. Dolor mauris tempor eget habitasse feugiat potenti elementum in. Massa felis nisi ornare eu sagittis purus.",
  },
];

export default function FeedbackSection() {
  return (
    <section id="feedback">
      <Container className="flex flex-col items-center">
        <Text type="title" className="mb-24 text-center">
          What people say about me
        </Text>

        <Carousel>
          {feedbacks.map((f, i) => (
            <FeedbackCard key={i} {...f} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
