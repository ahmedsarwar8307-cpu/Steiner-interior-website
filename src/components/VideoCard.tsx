import { motion } from "motion/react";
import { Play } from "lucide-react";
import type { ProjectVideo } from "@/data/videos";

export function VideoCard({
  video,
  index = 0,
  onPlay,
}: {
  video: ProjectVideo;
  index?: number;
  onPlay: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onPlay}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block w-full overflow-hidden rounded-sm border border-border bg-card text-left shadow-soft transition-shadow duration-500 hover:shadow-lift"
      aria-label={`Play video: ${video.title}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        {video.poster ? (
          <img
            src={video.poster}
            alt=""
            loading="lazy"
            className="size-full object-cover opacity-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
        ) : null}
        <div className="card-veil absolute inset-0" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 items-center justify-center rounded-full border border-ivory/40 bg-ivory/15 text-ivory backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-gold-foreground">
            <Play className="ml-0.5 size-6 fill-current" />
          </span>
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl leading-tight text-foreground">{video.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
      </div>
    </motion.button>
  );
}