import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { testimonials } from "@/data/content";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: `Testimonials — Client Reviews | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Read reviews from homeowners, architects and business owners about our flooring and interior installations.",
      },
      { property: "og:title", content: `Client Testimonials | ${siteConfig.name}` },
      { property: "og:description", content: "What our clients say about working with us." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Words From Our Clients"
        description="Feedback from the homes and businesses we've worked in."
      />
      <section className="py-16 md:py-24">
        <div className="container-lux grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i, 6) * 0.05}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
        <div className="container-lux mt-14 text-center">
          <WhatsAppButton label="Start your project" message={waMessages.consultation} size="lg" />
        </div>
      </section>
    </>
  );
}
