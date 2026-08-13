import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CalendarCheck, MapPin, Tag } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProject } from "@/data/projects";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} | ${siteConfig.name}` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.title} | ${siteConfig.name}` },
        { property: "og:description", content: project.description },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero eyebrow={project.type} title={project.title} description={project.description} />

      <section className="py-16 md:py-24">
        <div className="container-lux">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" /> Back to projects
          </Link>

          <Reveal className="mt-10">
            <button
              type="button"
              onClick={() => setIndex(0)}
              className="block w-full overflow-hidden rounded-sm"
              aria-label="Open project gallery"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full object-cover shadow-lift transition-transform duration-[900ms] hover:scale-[1.02]"
              />
            </button>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <Reveal>
              <h2 className="text-3xl">About this project</h2>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <h3 className="mt-12 text-xs uppercase tracking-[0.24em] text-foreground">Gallery</h3>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className="group overflow-hidden rounded-sm"
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} image ${i + 1}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-sm border border-border bg-card p-8 shadow-soft">
                <dl className="space-y-6 text-sm">
                  <div>
                    <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Category
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 text-foreground">
                      <Tag className="size-4 text-gold" /> {project.categories.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Location
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 text-foreground">
                      <MapPin className="size-4 text-gold" /> {project.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Completion
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 text-foreground">
                      <CalendarCheck className="size-4 text-gold" /> {project.year}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Materials & Products Used
                    </dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {project.materials.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
                        >
                          {m}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <WhatsAppButton
                  className="mt-8 w-full"
                  label="Discuss a similar project"
                  message={waMessages.project(project.title)}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Lightbox
        images={project.gallery}
        index={index}
        title={project.title}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
