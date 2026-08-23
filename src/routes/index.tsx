import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Star} from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import aboutImg from "@/assets/about-studio.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { StatsRow } from "@/components/StatsRow";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FAQAccordion } from "@/components/FAQAccordion";
import { VideoSection } from "@/components/VideoSection";
import { siteConfig } from "@/config/site";
import { waMessages } from "@/lib/whatsapp";
import { categories } from "@/data/products";
import { projects } from "@/data/projects";
import { services, whyChooseUs } from "@/data/content";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
//import { AreaCalculator } from "@/components/AreaCalculator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — Premium Flooring & Interior Solutions` },
      {
        name: "description",
        content:
          "Premium flooring, wall panels, wallpapers, blinds, curtains and media walls — designed, supplied and installed for homes and businesses.",
      },
      { property: "og:title", content: `${siteConfig.name} — Premium Flooring & Interior Solutions` },
      {
        property: "og:description",
        content: "Transforming spaces into timeless designs with premium interior products.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury living room with wooden flooring and warm neutral finishes"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="container-lux relative pb-20 pt-36">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl text-5xl leading-[1.03] text-ivory md:text-7xl"
          >
            Transforming Spaces Into Timeless Designs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-ivory/80"
          >
            Premium flooring, wall solutions, window treatments and interior products designed to
            transform your space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button asChild variant="gold" size="lg">
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="onImage" size="lg">
              <Link to="/projects">View Our Projects</Link>
            </Button>
                       <Button asChild variant="onImage" size="lg">
              <Link to="/calculator">Estimate Your Area</Link>
            </Button>
            <WhatsAppButton message={waMessages.general} size="lg" label="WhatsApp Us" />
          </motion.div>
        </div>
      </section>

 {/* PRODUCT CATEGORIES */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Products"
              title="Browse the showroom by category"
              description="Twelve curated categories, each with the sub-ranges we stock and install."
            />
            <Reveal>
              <Button asChild variant="goldOutline">
                <Link to="/products">All products</Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={Math.min(i, 6) * 0.05}>
                <Link
                  to="/products"
                  search={{ category: c.slug, sub: "all", q: "" }}
                  className="group relative block aspect-[5/4] overflow-hidden rounded-sm"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="card-veil absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl text-ivory">{c.name}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-ivory/70">{c.blurb}</p>
                    {c.subcategories.length ? (
                      <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                        {c.subcategories.length} sub-categories
                      </p>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

{/* FEATURED PRODUCTS */}
<section className="border-y border-border bg-secondary/50 py-24 md:py-32">
  <div className="container-lux">
    <SectionHeading
      eyebrow="Featured"
      title="Best sellers from our catalogue"
      description="A few standout picks our clients choose again and again."
      align="center"
    />
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {getFeaturedProducts().map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={aboutImg}
              alt="Interior designer selecting flooring and fabric samples"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full rounded-sm object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A studio built around materials, detail and trust"
              description={siteConfig.shortDescription}
            />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                We work with homeowners, architects and businesses to specify and install interior
                surfaces that last — from flooring and wall panels to curtains, blinds and bespoke
                media walls.
              </p>
              <p>
                <span className="text-foreground">Our mission</span> is to make premium interior
                materials accessible, correctly specified and professionally installed.{" "}
                <span className="text-foreground">Our vision</span> is to be the most trusted
                interior products partner in the region.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="mt-10">
              <Button asChild variant="goldOutline">
                <Link to="/about">
                  More about us <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
        <div className="container-lux mt-24">
          <StatsRow />
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-secondary/50 py-24 md:py-32">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Services"
            title="Complete interior solutions, end to end"
            description="From first consultation to final installation, every stage handled by one team."
            align="center"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i, 6) * 0.05}>
                <article className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <Icon
                    name={s.icon}
                    className="size-7 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                  />
                  <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

     
      {/* PROJECTS */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Projects"
            title="Recently completed spaces"
            description="A selection of residential and commercial interiors delivered by our team."
            tone="light"
          />
          <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {projects.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="onImage">
              <Link to="/projects">View full portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

 
      {/* VIDEOS */}
      <VideoSection />

      {/* WHY CHOOSE US */}
      <section className="border-y border-border bg-secondary/50 py-24 md:py-32">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Reasons clients keep coming back"
            align="center"
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={Math.min(i, 6) * 0.05}>
                <Icon name={w.icon} className="size-6 text-gold" />
                <h3 className="mt-5 font-display text-xl text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

{/* TESTIMONIALS */}
<section className="py-24 md:py-32">
  <div className="container-lux">
    <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
    <div className="mt-16">
      <TestimonialCarousel />
    </div>
    <div className="mt-10 flex justify-center">
      <a href="https://www.google.com/maps/place/?q=place_id:ChIJae4upd-V3zgRzEP9CWotwnA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary/70">
        <span className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-gold" />)}
        </span>
        <span className="font-medium">5.0</span>
        <span className="text-muted-foreground">(43 Google Reviews)</span>
      </a>
    </div>
  </div>
</section>

      {/* FAQ + CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-lux grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered"
              description="Still unsure? Send us a message on WhatsApp and we will guide you."
            />
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={waMessages.consultation} label="Free Consultation" />
              <Button asChild variant="outline">
                <Link to="/faq">All FAQs</Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQAccordion limit={6} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
