import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${siteConfig.name}` },
      {
        name: "description",
        content: "How we collect, use and protect the information you share with our studio.",
      },
      { property: "og:title", content: `Privacy Policy | ${siteConfig.name}` },
      { property: "og:description", content: "Our approach to data and privacy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 md:py-24">
        <div className="container-lux max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            We collect only the details you send us through our enquiry form or WhatsApp — your
            name, contact details and a description of your project — and use them solely to
            respond to your enquiry and deliver the work you request.
          </p>
          <p>
            We do not sell or rent your information. Details are shared only with team members and
            installers involved in your project.
          </p>
          <p>
            You can ask us to update or delete your details at any time by writing to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-gold">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
