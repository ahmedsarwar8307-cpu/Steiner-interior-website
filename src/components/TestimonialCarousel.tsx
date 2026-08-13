import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/content";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-6">
        {testimonials.map((t, i) => (
          <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
            <TestimonialCard testimonial={t} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-10 flex justify-center gap-3">
        <CarouselPrevious className="static translate-y-0 rounded-full border-border" />
        <CarouselNext className="static translate-y-0 rounded-full border-border" />
      </div>
    </Carousel>
  );
}
