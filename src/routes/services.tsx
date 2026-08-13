import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services, processSteps } from "@/data/content";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — Design, Supply & Installation | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Interior design consultancy, flooring installation, wall design, window treatments, media walls and full turnkey fit-outs.",
      },
      { property: "og:title", content: `Our Services | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "End-to-end interior services from consultation to installation.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Design, Supply & Installation"
        description="One team from first measurement to final walkthrough."
      />

      <section className="py-16 md:py-24">
        <div className="container-lux grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i, 6) * 0.05}>
              <article className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                <Icon
                  name={s.icon}
                  className="size-7 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                />
                <h2 className="mt-6 font-display text-2xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <WhatsAppButton
                  className="mt-6"
                  size="sm"
                  label="Enquire"
                  message={waMessages.service(s.title)}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-24">
        <div className="container-lux">
          <SectionHeading eyebrow="Process" title="How we work" align="center" />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i, 6) * 0.06}>
                <li className="border-t border-gold/40 pt-5">
                  <span className="font-display text-4xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label="Book a site visit" message={waMessages.consultation} />
            <Button asChild variant="outline">
              <Link to="/contact">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
