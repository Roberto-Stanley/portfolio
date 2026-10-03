import Button from "@/app/components/button";
import Container from "@/app/components/container";
import ContactForm from "@/app/components/contactForm";
import Text from "@/app/components/text";
import { getContactSection } from "@/lib/contentful/contactSection";

export default async function ContactSection() {
  const { title, description, actions } = await getContactSection();

  return (
    <section id="contact" className="mb-40">
      <Container>
        <div
          className="flex gap-10 items-center justify-center
         flex-wrap"
        >
          {/* Left: info + social */}
          <div className="flex flex-col gap-16 items-center w-[467px]">
            <div className="flex flex-col gap-6 items-center text-center w-full">
              <Text type="title">{title}</Text>
              {description && (
                <Text type="body" weight="light">
                  {description}
                </Text>
              )}
            </div>

            {actions.length > 0 && (
              <div className="flex gap-[52px] items-center">
                {actions.map((action) => (
                  <Button
                    key={action.href || action.title}
                    iconStroke="white"
                    shape={action.shape}
                    variant={action.variant}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={action.icon}
                    iconPosition={action.iconPosition}
                  >
                    {action.title}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
