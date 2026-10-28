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
    title: "Complete Room Interior in Commercial Market, Rawalpindi",
    description:
      "A complete room interior designed and finished in Commercial Market, Rawalpindi, featuring a custom media wall, German wooden flooring, decorative wall panelling, a 3D ceiling and bespoke high-end furniture.",
    src: "/videos/project-video-1.mp4.mp4",
  },
  {
    id: "video-2",
    title: "Modern Wall Design with WPC and PU Stone Panels",
    description:
      "A contemporary feature wall combining WPC wall panels with PU stone wall panels to create a distinctive mix of textures and a refined decorative finish.",
    src: "/videos/project-video-2.mp4.mp4",
  },
  {
    id: "video-3",
    title: "Luxury Office Interior with Custom Furniture and Wall Panels",
    description:
      "An office interior featuring WPC wall panels, PU stone wall panels, custom luxury office furniture and built-in office almirahs, bringing together practical storage and a polished professional finish.",
    src: "/videos/project-video-3.mp4.mp4",
  },
];
