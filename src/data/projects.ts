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
import villaLivingTransformation from "@/assets/villa-living-transformation.jpeg";
import masterbedroomImg from "@/assets/master-bedroom-suite.jpeg";
import corporateofficeImg from "@/assets/corporate-office-fitout.jpeg";
import kitchenDiningImg from "@/assets/kitchen-dining-renovation.jpeg";
import mediawallloungeImg from "@/assets/media-wall-lounge.jpeg";
import boutiqueShowroomImg from "@/assets/showroom.jpeg";
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
    location: "DHA II , Islamabad",
    type: "Residential",
    categories: ["Residential", "Living Room", "Flooring"],
    year: "Completed 2026",
    description:
      "A complete living-area transformation featuring luxury furniture, premium rugs, and custom interior work, designed to create a warm, elegant, and personalized space.",
    cover: villaLivingTransformation,
    gallery: [p1, woodenImg, curtainsImg,villaLivingTransformation],
    materials: ["German Wooden Flooring", "Curtains", "Wall Mouldings"],
  },
  {
    slug: "corporate-office-fitout",
    title: "Corporate Office Fit-out",
    location: "Gulberg Green, Islamabad",
    type: "Commercial",
    categories: ["Commercial", "Office", "Flooring"],
    year: "Completed 2025",
    description:
      "An open-plan workspace fit-out combining acoustic carpet tiles, timber wall cladding and uniform roller blinds for glare control across the façade.",
    cover: corporateofficeImg,
    gallery: [p2, blindsImg,corporateofficeImg],
    materials: ["Carpet Tiles", "Roller Blinds", "WPC Panels"],
  },
  {
    slug: "master-bedroom-suite",
    title: "Master Bedroom Suite",
    location: "F-10, Islamabad",
    type: "Residential",
    categories: ["Residential", "Bedroom", "Wall Design"],
    year: "Completed 2026",
    description:
      "A sophisticated master bedroom featuring elegant PU stone wall panels and premium Curtains, creating a refined balance of texture, privacy, and comfort.",
    cover: masterbedroomImg,
    gallery: [masterbedroomImg, carpetImg, curtainsImg],
    materials: ["Korean Wallpapers", "Woolen Carpet", "Curtains"],
  },
  {
    slug: "kitchen-dining-renovation",
    title: "Kitchen & Dining Renovation",
    location: "DHA II, Islamabad",
    type: "Residential",
    categories: ["Residential", "Kitchen", "Flooring"],
    year: "Completed 2026",
    description:
      "Waterproof SPC flooring laid throughout an open kitchen and dining zone, paired with warm timber joinery and a restrained lighting scheme.",
    cover: kitchenDiningImg,
    gallery: [kitchenDiningImg, woodenImg],
    materials: ["SPC Flooring", "Wall Mouldings"],
  },
  {
    slug: "media-wall-lounge",
    title: "Media Wall Lounge",
    location: "Airport Housing Society, Islamabad",
    type: "Residential",
    categories: ["Residential", "Living Room", "Wall Design"],
    year: "Completed 2026",
    description:
      "A bespoke media wall in fluted timber with concealed cove lighting, integrated cable management and a dark, cinematic material palette.",
    cover: mediawallloungeImg,
    gallery: [mediawallloungeImg, mediaWallImg, panelsImg],
    materials: ["Media Walls", "WPC Panels", "Woolen Carpet"],
  },
  {
    slug: "boutique-showroom",
    title: "Boutique Showroom Office",
    location: "Gulberg Green, Islamabad",
    type: "Commercial",
    categories: ["Commercial", "Wall Design", "Flooring"],
    year: "Completed 2025",
    description:
      "Retail showroom interior pairing wide-plank wooden flooring with PU stone wall panels and accent lighting to frame the product display.",
    cover: boutiqueShowroomImg,
    gallery: [boutiqueShowroomImg, panelsImg, woodenImg],
    materials: ["Turkish Wooden Flooring", "PU Stone Panels"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
