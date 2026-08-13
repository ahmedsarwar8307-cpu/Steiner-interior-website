import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { VideoCard } from "./VideoCard";
import { VideoModal } from "./VideoModal";
import { projectVideos, type ProjectVideo } from "@/data/videos";

export function VideoSection({
  eyebrow = "Project Videos",
  title = "Our Previous Projects",
  description = "Short walkthroughs of completed interiors, filmed on site.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const [active, setActive] = useState<ProjectVideo | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectVideos.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} onPlay={() => setActive(v)} />
          ))}
        </div>
      </div>
      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
