import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group mb-6 break-inside-avoid"
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="relative block overflow-hidden rounded-sm"
      >
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <div className="card-veil absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-gold">{project.type}</p>
          <h3 className="mt-2 font-display text-2xl text-ivory">{project.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-ivory/70">
            <MapPin className="size-3.5" /> {project.location}
          </p>
          <p className="mt-3 line-clamp-2 max-w-md text-sm text-ivory/70">{project.description}</p>
        </div>
        <span className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-ivory/15 text-ivory opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </motion.article>
  );
}
