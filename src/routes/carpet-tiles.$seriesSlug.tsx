import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getCarpetSeries } from "@/data/carpetSeries";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { ProductImageCarousel } from "@/components/ProductImageCarousel";
import { ProductPdfs } from "@/components/ProductPdfs";

export const Route = createFileRoute("/carpet-tiles/$seriesSlug")({
  loader: ({ params }) => {
    const series = getCarpetSeries(params.seriesSlug);
    if (!series) throw notFound();
    return { series };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.series.name} | ${siteConfig.name}` },
      { name: "description", content: loaderData?.series.description ?? "" },
    ],
  }),
  component: CarpetSeriesDetail,
});

function CarpetSeriesDetail() {
  const { series } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={`${series.material} Carpet Tiles`} title={series.name} />
      <section className="py-16 md:py-24">
        <div className="container-lux">
          <Link
            to="/products/$productId"
            params={{ productId: "carpet-tiles" }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold"
          >
            <ArrowLeft className="size-4" /> Back to Carpet Tiles
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
           <ProductImageCarousel images={series.images} fallback={series.image} alt={series.name} /> 
            <div>
              <p className="eyebrow">{series.material} Range</p>
              <h2 className="mt-4 text-4xl">{series.name}</h2>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                {series.description}
              </p>
              <h3 className="mt-10 text-xs uppercase tracking-[0.24em] text-foreground">Specs</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {series.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="mt-10">
                <WhatsAppButton
                  size="lg"
                  label="Ask About This Series"
                  message={waMessages.product(series.name)}
                />
              </div>
            </div>
          </div>
 {series.pdfs?.length ? <ProductPdfs pdfs={series.pdfs} /> : null}
        </div>
      </section>
    </>
  );
}