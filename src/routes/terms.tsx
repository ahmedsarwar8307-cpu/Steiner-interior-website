import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${siteConfig.name}` },
      {
        name: "description",
        content: "The terms that apply to quotations, orders and installation work with our studio.",
      },
      { property: "og:title", content: `Terms & Conditions | ${siteConfig.name}` },
      { property: "og:description", content: "Quotation, order and installation terms." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-16 md:py-24">
        <div className="container-lux max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Quotations are based on the measurements and specifications agreed at the time of the
            site visit and remain valid for 30 days.
          </p>
          <p>
            Product images, colours and finishes shown on this website are indicative. Natural
            materials vary in grain and tone between batches.
          </p>
          <p>
            Installation dates are confirmed once materials are in stock and the site is ready.
            Warranty terms vary by product and are stated on your order confirmation.
          </p>
        </div>
      </section>
    </>
  );
}
