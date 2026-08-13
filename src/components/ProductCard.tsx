import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";
import { categoryName, subcategoryName, type Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const sub = subcategoryName(product.category, product.subcategory);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-foreground backdrop-blur">
          {categoryName(product.category)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight text-foreground">{product.name}</h3>
        {sub ? (
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold">{sub}</p>
        ) : null}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/products/$productId" params={{ productId: product.id }}>
              View Details
            </Link>
          </Button>
          <WhatsAppButton
            size="sm"
            label="Enquire"
            message={waMessages.product(product.name)}
          />
        </div>
      </div>
    </motion.article>
  );
}
