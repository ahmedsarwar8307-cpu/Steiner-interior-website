import { AnimatePresence, motion } from "motion/react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";

type Props = {
  category: string;
  subcategory: string;
  query: string;
  onCategory: (slug: string) => void;
  onSubcategory: (slug: string) => void;
  onQuery: (value: string) => void;
};

const chip =
  "rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] transition-all duration-300";

export function ProductFilter({
  category,
  subcategory,
  query,
  onCategory,
  onSubcategory,
  onQuery,
}: Props) {
  const active = categories.find((c) => c.slug === category);

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search products…"
          aria-label="Search products"
          className="h-12 w-full rounded-sm border border-border bg-card pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onCategory("all")}
          className={cn(
            chip,
            category === "all"
              ? "border-gold bg-gold text-gold-foreground"
              : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground",
          )}
        >
          All Products
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => onCategory(c.slug)}
            className={cn(
              chip,
              category === c.slug
                ? "border-gold bg-gold text-gold-foreground"
                : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground",
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {active && active.subcategories.length > 0 ? (
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-2 border-l border-gold/40 pl-4">
              <span className="mr-1 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                Subcategory
              </span>
              <button
                type="button"
                onClick={() => onSubcategory("all")}
                className={cn(
                  chip,
                  subcategory === "all"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                All
              </button>
              {active.subcategories.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => onSubcategory(s.slug)}
                  className={cn(
                    chip,
                    subcategory === s.slug
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
