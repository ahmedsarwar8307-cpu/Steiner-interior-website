import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-studio.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whyChooseUs } from "@/data/content";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — Our Story & Values | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Learn about our interior design and flooring studio: our story, mission, vision and the values behind every installation.",
      },
      { property: "og:title", content: `About ${siteConfig.name}` },
      {
        property: "og:description",
        content: "A studio built around materials, detail and trust.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Craft, Materials & Trust"
        description="We design, supply and install premium interior surfaces for homes and businesses."
      />

      <section className="py-16 md:py-24">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={aboutImg}
              alt="Designer reviewing flooring and fabric samples in the studio"
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our Story" title="Built on site, not on slogans" />
            <Reveal delay={0.08} className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                What began as a small flooring supplier has grown into a full interior products
                studio — flooring, wall panels, wallpapers, blinds, curtains, artificial grass,
                sports surfaces and bespoke media walls, all under one roof.
              </p>
              <p>
                Every project is measured, specified and installed by our own teams, so the finish
                you see in the showroom is the finish you get at home.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.12} className="rounded-sm border border-border bg-card p-6">
                <h3 className="font-display text-2xl">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To make premium interior materials accessible, correctly specified and
                  professionally installed.
                </p>
              </Reveal>
              <Reveal delay={0.16} className="rounded-sm border border-border bg-card p-6">
                <h3 className="font-display text-2xl">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be the most trusted interior products partner in the region.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="container-lux mt-24">
          <StatsRow />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-24">
        <div className="container-lux">
          <SectionHeading eyebrow="Our Values" title="What we hold ourselves to" align="center" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={Math.min(i, 6) * 0.05}>
                <Icon name={w.icon} className="size-6 text-gold" />
                <h3 className="mt-5 font-display text-xl">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label="Talk to our team" message={waMessages.consultation} />
            <Button asChild variant="outline">
              <Link to="/projects">See our work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
