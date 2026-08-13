import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import woodenImg from "@/assets/cat-wooden-flooring.jpg";
import panelsImg from "@/assets/cat-wall-panels.jpg";
import curtainsImg from "@/assets/cat-curtains.jpg";
import carpetImg from "@/assets/cat-woolen-carpet.jpg";
import mediaWallImg from "@/assets/cat-media-walls.jpg";
import blindsImg from "@/assets/cat-window-blinds.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  categories: string[];
  year: string;
  description: string;
  /** Swap these imports to replace project photography. */
  cover: string;
  gallery: string[];
  materials: string[];
};

/** Placeholder portfolio content — replace with real completed projects. */
export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Flooring",
  "Wall Design",
  "Office",
  "Living Room",
  "Bedroom",
  "Kitchen",
];

export const projects: Project[] = [
  {
    slug: "villa-living-transformation",
    title: "Villa Living Transformation",
    location: "City Name",
    type: "Residential",
    categories: ["Residential", "Living Room", "Flooring"],
    year: "Completed 2025",
    description:
      "A full living-area transformation: herringbone wooden flooring, layered drapery and a warm neutral material palette designed around the family's daily use of the space.",
    cover: p1,
    gallery: [p1, woodenImg, curtainsImg],
    materials: ["German Wooden Flooring", "Curtains", "Wall Mouldings"],
  },
  {
    slug: "corporate-office-fitout",
    title: "Corporate Office Fit-out",
    location: "City Name",
    type: "Commercial",
    categories: ["Commercial", "Office", "Flooring"],
    year: "Completed 2025",
    description:
      "An open-plan workspace fit-out combining acoustic carpet tiles, timber wall cladding and uniform roller blinds for glare control across the façade.",
    cover: p2,
    gallery: [p2, blindsImg, panelsImg],
    materials: ["Carpet Tiles", "Roller Blinds", "WPC Panels"],
  },
  {
    slug: "master-bedroom-suite",
    title: "Master Bedroom Suite",
    location: "City Name",
    type: "Residential",
    categories: ["Residential", "Bedroom", "Wall Design"],
    year: "Completed 2024",
    description:
      "A calm bedroom suite built on a textured wallpaper feature wall, plush woolen carpet and dual-layer curtains for full light control.",
    cover: p3,
    gallery: [p3, carpetImg, curtainsImg],
    materials: ["Korean Wallpapers", "Woolen Carpet", "Curtains"],
  },
  {
    slug: "kitchen-dining-renovation",
    title: "Kitchen & Dining Renovation",
    location: "City Name",
    type: "Residential",
    categories: ["Residential", "Kitchen", "Flooring"],
    year: "Completed 2024",
    description:
      "Waterproof SPC flooring laid throughout an open kitchen and dining zone, paired with warm timber joinery and a restrained lighting scheme.",
    cover: p4,
    gallery: [p4, woodenImg],
    materials: ["SPC Flooring", "Wall Mouldings"],
  },
  {
    slug: "media-wall-lounge",
    title: "Media Wall Lounge",
    location: "City Name",
    type: "Residential",
    categories: ["Residential", "Living Room", "Wall Design"],
    year: "Completed 2025",
    description:
      "A bespoke media wall in fluted timber with concealed cove lighting, integrated cable management and a dark, cinematic material palette.",
    cover: p5,
    gallery: [p5, mediaWallImg, panelsImg],
    materials: ["Media Walls", "WPC Panels", "Woolen Carpet"],
  },
  {
    slug: "boutique-showroom",
    title: "Boutique Showroom",
    location: "City Name",
    type: "Commercial",
    categories: ["Commercial", "Wall Design", "Flooring"],
    year: "Completed 2023",
    description:
      "Retail showroom interior pairing wide-plank wooden flooring with PU stone wall panels and accent lighting to frame the product display.",
    cover: p6,
    gallery: [p6, panelsImg, woodenImg],
    materials: ["Turkish Wooden Flooring", "PU Stone Panels"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
