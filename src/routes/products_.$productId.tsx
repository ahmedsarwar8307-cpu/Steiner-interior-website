import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { categoryName, getProduct, products, subcategoryName } from "@/data/products";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { AreaCalculator } from "@/components/AreaCalculator";
import { categoryToCalculatorTab } from "@/lib/calculator";
import { ProductImageCarousel } from "@/components/ProductImageCarousel";
import { ProductPdfs } from "@/components/ProductPdfs";

export const Route = createFileRoute("/products_/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | ${siteConfig.name}` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} | ${siteConfig.name}` },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const sub = subcategoryName(product.category, product.subcategory);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
    const calcTab = categoryToCalculatorTab(product.category);

  return (
    <>
      <PageHero eyebrow={categoryName(product.category)} title={product.name} />

      <section className="py-16 md:py-24">
        <div className="container-lux">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" /> Back to products
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
           <Reveal>
  <ProductImageCarousel images={product.images} fallback={product.image} alt={product.name} />
</Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">{categoryName(product.category)}</p>
              {sub ? (
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {sub}
                </p>
              ) : null}
              <h2 className="mt-4 text-4xl md:text-5xl">{product.name}</h2>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <h3 className="mt-10 text-xs uppercase tracking-[0.24em] text-foreground">Features</h3>
              <ul className="mt-4 space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" /> {f}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-xs uppercase tracking-[0.24em] text-foreground">
                Available Variations
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.variations.map((v) => (
                  <span
                    key={v}
                   // className="rounded-full border border-border bg-card px-4 py-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground"
                   className="rounded-full border border-border bg-secondary px-4 py-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {v}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <WhatsAppButton
                  size="lg"
                  label="Ask About This Product"
                  message={waMessages.product(product.name)}
                />
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
            </Reveal>
                   </div>
{product.pdfs?.length ? <ProductPdfs pdfs={product.pdfs} /> : null}
          {calcTab ? (
            <div className="mt-24 border-t border-border pt-16">
              <h2 className="text-3xl">How Much Do You Need?</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Estimate the quantity for your space before you order.
              </p>
              <div className="mt-8">
                <AreaCalculator defaultTab={calcTab} />
              </div>
            </div>
          ) : null}

          {related.length ? (
            <div className="mt-24">
              <h2 className="text-3xl">More in {categoryName(product.category)}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

