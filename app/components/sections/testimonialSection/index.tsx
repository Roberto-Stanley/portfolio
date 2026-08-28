import Carousel from "@/app/components/carousel";
import Text from "@/app/components/text";
import Container from "@/app/components/container";
import TestimonialCard from "./testimonialCard";
import { getTestimonials } from "@/lib/contentful/testimonial";

export default async function TestimonialSection() {
  const { title, testimonials } = await getTestimonials();

  return (
    <section id="feedback">
      <Container className="flex flex-col items-center">
        <Text type="title" className="mb-24 text-center">
          {title}
        </Text>

        <Carousel>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
