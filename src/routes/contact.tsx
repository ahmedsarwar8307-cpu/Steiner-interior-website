import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { waMessages } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — Free Consultation & Quotes | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Contact our showroom for a free consultation, site measurement or quotation on flooring and interior products.",
      },
      { property: "og:title", content: `Contact ${siteConfig.name}` },
      { property: "og:description", content: "Book a free consultation or request a quote today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Design Your Space"
        description="Send an enquiry, or message us directly on WhatsApp for the fastest response."
      />

      <section className="py-16 md:py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl">Showroom & Enquiries</h2>
            <dl className="mt-8 space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Address
                  </dt>
                  <dd className="mt-1 text-foreground">{siteConfig.address}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a href={siteConfig.phoneHref} className="text-foreground hover:text-gold">
                      {siteConfig.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-gold">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Opening Hours
                  </dt>
                  <dd className="mt-1 space-y-1 text-foreground">
                    {siteConfig.hours.map((h) => (
                      <p key={h.days}>
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <WhatsAppButton className="mt-8" size="lg" label="Chat on WhatsApp" message={waMessages.general} />

            {siteConfig.mapEmbedUrl ? (
              <div className="mt-10 overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Showroom location map"
                  src={siteConfig.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full"
                />
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-soft md:p-10">
              <h2 className="text-3xl">Request a Quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your space and we'll come back with options and pricing.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
