import { Link } from "@tanstack/react-router";
import { carpetSeries } from "@/data/carpetSeries";

export function CarpetSeriesGrid() {
  return (
    <div className="mt-24 border-t border-border pt-16">
      <h2 className="text-3xl">Browse Series</h2>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Every pattern we stock, across both PP and Nylon ranges.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carpetSeries.map((s) => (
          <Link
            key={s.slug}
            to="/carpet-tiles/$seriesSlug"
            params={{ seriesSlug: s.slug }}
            className="group block overflow-hidden rounded-sm border border-border"
          >
            <img
              src={s.image}
              alt={s.name}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-3">
              <p className="text-[0.6rem] uppercase tracking-[0.16em] text-gold">{s.material}</p>
              <p className="mt-1 text-sm text-foreground">{s.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 