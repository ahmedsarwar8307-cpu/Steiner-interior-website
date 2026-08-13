import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-soft">
      <Quote className="size-7 text-gold/70" />
      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
        “{testimonial.review}”
      </blockquote>
      <div className="mt-6 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < testimonial.rating ? "size-4 fill-gold text-gold" : "size-4 text-border"
            }
          />
        ))}
      </div>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-sm text-foreground">
          {testimonial.initials}
        </span>
        <span>
          <span className="block font-display text-lg text-foreground">{testimonial.name}</span>
          <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
