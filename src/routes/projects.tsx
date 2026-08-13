import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { cn } from "@/lib/utils";
import { projectCategories, projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — Completed Interiors | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Explore completed residential and commercial interior projects: flooring, wall design, media walls, blinds and curtains.",
      },
      { property: "og:title", content: `Project Portfolio | ${siteConfig.name}` },
      { property: "og:description", content: "A portfolio of completed interior transformations." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const list =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed Interior Projects"
        description="Residential and commercial spaces delivered with our own design and installation teams."
      />

      <section className="py-16 md:py-24">
        <div className="container-lux">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] transition-all duration-300",
                  filter === c
                    ? "border-gold bg-gold text-gold-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {list.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Before & After"
            title="See the transformation"
            description="Drag the handle to compare a space before and after our work."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
    </>
  );
}
