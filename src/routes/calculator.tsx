import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AreaCalculator } from "@/components/AreaCalculator";
import { siteConfig } from "@/config/site";
import type { CalcType } from "@/lib/calculator";

type Search = { tab?: CalcType };

export const Route = createFileRoute("/calculator")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    tab:
      search["tab"] === "flooring" ||
      search["tab"] === "panels" ||
      search["tab"] === "wallpaper" ||
      search["tab"] === "blinds"
        ? search["tab"]
        : "flooring",
  }),
 head: () => ({
  meta: [
    { title: `Area Calculator — Estimate Your Materials | ${siteConfig.name}` },
    {
      name: "description",
      content:
        "Estimate how much flooring, wall panels, wallpaper or window blinds you need before you order.",
    },
    { property: "og:title", content: `Area Calculator | ${siteConfig.name}` },
    {
      property: "og:description",
      content: "Quick estimates for flooring, wall panels, wallpaper and window blinds.",
    },
  ],
  links: [
    { rel: "canonical", href: "https://www.steinerinterior.com/calculator" },
  ],
}),
  component: CalculatorPage,
});

function CalculatorPage() {
  const search = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Area Calculator"
        title="Estimate What You Need"
        description="A quick estimate for flooring, wall panels, wallpaper and window blinds — before you place an order."
      />
      <section className="py-16 md:py-24">
        <div className="container-lux">
          <AreaCalculator defaultTab={search.tab} />
        </div>
      </section>
    </>
  );
}