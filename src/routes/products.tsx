import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductFilter } from "@/components/ProductFilter";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/data/products";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

type Search = { category?: string; sub?: string; q?: string };

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: typeof search["category"] === "string" ? search["category"] : "all",
    sub: typeof search["sub"] === "string" ? search["sub"] : "all",
    q: typeof search["q"] === "string" ? search["q"] : "",
  }),
  head: () => ({
    meta: [
      { title: `Products — Flooring, Panels, Blinds & More | ${siteConfig.name}` },
      {
        name: "description",
        content: "Browse wooden, vinyl and SPC flooring, wall panels, wallpapers, blinds, artificial grass, carpets, carpet tiles, curtains and media walls."
      },
      { property: "og:title", content: `Product Catalogue | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "A premium showroom catalogue of interior products, organised by category.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(search.q ?? "");

  const category = search.category ?? "all";
  const sub = search.sub ?? "all";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (category !== "all" && sub !== "all" && p.subcategory !== sub) return false;
      if (q && !`${p.name} ${p.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [category, sub, query]);

  const activeCategory = categories.find((c) => c.slug === category);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="The Showroom Catalogue"
        description="Thirteen categories of interior products — filter by category and sub-range, then enquire directly on WhatsApp."
      />

      <section className="py-16 md:py-24">
        <div className="container-lux">
          <ProductFilter
            category={category}
            subcategory={sub}
            query={query}
            onQuery={setQuery}
            onCategory={(slug) => navigate({ search: { category: slug, sub: "all", q: query } })}
            onSubcategory={(slug) => navigate({ search: { category, sub: slug, q: query } })}
          />

                   <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
              {activeCategory ? ` in ${activeCategory.name}` : ""}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/calculator"
                className="text-xs uppercase tracking-[0.16em] text-gold underline-offset-4 hover:underline"
              >
                 Try our area calculator
              </Link>
              <WhatsAppButton
                size="sm"
                label={activeCategory ? `Enquire about ${activeCategory.name}` : "Enquire on WhatsApp"}
                message={
                  activeCategory ? waMessages.category(activeCategory.name) : waMessages.general
                }
              />
            </div>
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-sm text-muted-foreground">
              No products match this filter. Try another category or search term.
            </p>
          ) : null}

        
        </div>
      </section>
    </>
  );
}