import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — Flooring & Interior Questions | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Answers about pricing, installation time, warranties, maintenance, site visits and product suitability.",
      },
      { property: "og:title", content: `Frequently Asked Questions | ${siteConfig.name}` },
      { property: "og:description", content: "Everything clients usually ask before starting." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything clients usually ask before starting a project."
      />
      <section className="py-16 md:py-24">
        <div className="container-lux max-w-3xl">
          <FAQAccordion />
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">Still have a question?</p>
            <WhatsAppButton className="mt-4" label="Ask on WhatsApp" message={waMessages.general} />
          </div>
        </div>
      </section>
    </>
  );
}
