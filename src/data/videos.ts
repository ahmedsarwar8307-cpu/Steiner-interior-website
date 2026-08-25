export type ProjectVideo = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
};

export const projectVideos: ProjectVideo[] = [
  {
    id: "video-1",
    title: "Residential Entrance & Flooring Detail",
    description:
      "A walkthrough of a completed residence showing entrance detailing, ambient lighting and finished flooring.",
    src: "/videos/project-video-1.mp4.mp4",
  },
  {
    id: "video-2",
    title: "Interior Finishing Walkthrough",
    description:
      "On-site walkthrough of interior finishes — wall treatment, flooring and joinery brought together.",
    src: "/videos/video-project.mp4",
  },
  {
    id: "video-3",
    title: "Completed Space Reveal",
    description: "A short reveal of a completed interior space after handover.",
    src: "/videos/project-video-3.mp4.mp4",
  },
];