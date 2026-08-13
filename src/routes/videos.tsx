import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { VideoSection } from "@/components/VideoSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: `Project Videos — Walkthroughs | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Watch on-site walkthrough videos of completed flooring, wall panel and interior fit-out projects.",
      },
      { property: "og:title", content: `Project Videos | ${siteConfig.name}` },
      { property: "og:description", content: "On-site walkthroughs of our completed interiors." },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Videos"
        title="Our Previous Projects"
        description="Filmed on site — real installations, real finishes."
      />
      <VideoSection eyebrow="Gallery" title="Watch the walkthroughs" description="" />
      <div className="container-lux pb-24 text-center">
        <WhatsAppButton label="Send us your space" message={waMessages.consultation} size="lg" />
      </div>
    </>
  );
}
