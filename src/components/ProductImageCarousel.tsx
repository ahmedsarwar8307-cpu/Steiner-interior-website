import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductImageCarousel({
  images,
  fallback,
  alt,
}: {
  images: string[] | undefined;
  fallback: string;
  alt: string;
})  {
  const slides = images && images.length > 0 ? images : [fallback];
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-sm shadow-lift">
        <img
          src={slides[index]}
          alt={alt}
          loading="lazy"
          width={1200}
          height={900}
          className="w-full object-cover"
        />
        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition-colors hover:bg-background"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition-colors hover:bg-background"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="mt-3 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === index ? "bg-gold" : "bg-border",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}