import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import woodenImg from "@/assets/cat-wooden-flooring.jpg";
import panelsImg from "@/assets/optimized/cat-wall-panels.webp";
import curtainsImg from "@/assets/cat-curtains.jpg";
import carpetImg from "@/assets/cat-woolen-carpet.jpg";
import mediaWallImg from "@/assets/cat-media-walls.jpg";
import blindsImg from "@/assets/optimized/cat-window-blinds.webp";
import villaLivingTransformation from "@/assets/villa-living-transformation.jpeg";
import masterbedroomImg from "@/assets/master-bedroom-suite.jpeg";
import corporateofficeImg from "@/assets/corporate-office-fitout.jpeg";
import kitchenDiningImg from "@/assets/kitchen-dining-renovation.jpeg";
import mediawallloungeImg from "@/assets/media-wall-lounge.jpeg";
import boutiqueShowroomImg from "@/assets/showroom.jpeg";
import loungechairImg from"@/assets/media-wall-lounge-chairs.jpeg";
import puStoneImg from "@/assets/pu-stone-panel.jpeg";
import turkishwoodenflooringImg from "@/assets/turkish-wooden-flooring.jpeg";
import wallmouldingsImg from "@/assets/wall-mouldings.jpeg";
import KDrenovationImg from "@/assets/K-D-renovation.jpeg";
import Curtain from "@/assets/curtain.jpeg";
import CT from "@/assets/cp-project.jpeg";
import CO from "@/assets/CO-project.jpeg";
import villa from "@/assets/living-after.jpeg";
import villa2 from "@/assets/villa-project.jpeg";
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
    title: "Villa Living Transformation in DHA II, Islamabad | Steiner",
    location: "DHA II , Islamabad",
    type: "Residential",
    categories: ["Residential", "Living Room", "Wall Decor"],
    year: "Completed 2026",
    description:
      "Discover a villa living room transformation in DHA II, Islamabad, featuring luxury furniture,wall mouldings, rugs and wall panels for a warm, refined and cohesive interior.",
    cover: villaLivingTransformation,
    gallery: [villa, villa2,villaLivingTransformation],
    materials: ["Luxury Furniture", "Rugs", "Wall Panels", "Wall mouldings"],
  },
  {
    slug: "corporate-office-fitout",
    title: "Corporate Office Fit-Out in Islamabad | Steiner Design",
    location: "Gulberg Green, Islamabad",
    type: "Commercial",
    categories: ["Commercial", "Office", "Carpet Tiles"],
    year: "Completed 2025",
    description:
      "Explore an office fit-out in Gulberg Green, Islamabad, featuring carpet tiles, timber wall cladding and roller blinds designed for a coordinated, professional workspace.",
    cover: corporateofficeImg,
    gallery: [CO, CT,corporateofficeImg],
    materials: ["Carpet Tiles", "Wooden Flooring", "Sports Flooring"],
  },
  {
    slug: "master-bedroom-suite",
    title: "Master Bedroom Design in F-10, Islamabad | Steiner",
    location: "F-10, Islamabad",
    type: "Residential",
    categories: ["Residential", "Bedroom", "Wall Decor"],
    year: "Completed 2026",
    description:
      "See a master bedroom project in F-10, Islamabad, combining PU stone wall panels and curtains to create a comfortable space with layered textures and a refined finish.",
    cover: masterbedroomImg,
    gallery: [masterbedroomImg,Curtain],
    materials: ["PU Stone Panel ","WPC Panels", "Curtain"],
  },
  {
    slug: "kitchen-dining-renovation",
    title: "Kitchen & Dining Renovation in Islamabad | Steiner",
    location: "DHA II, Islamabad",
    type: "Residential",
    categories: ["Residential", "Kitchen", "Flooring"],
    year: "Completed 2026",
    description:
      "Explore a kitchen and dining renovation in DHA II, Islamabad, featuring SPC flooring, wall mouldings and coordinated finishes for a practical, contemporary interior.",
    cover: kitchenDiningImg,
    gallery: [kitchenDiningImg,KDrenovationImg,],
    materials: ["SPC Flooring", "Wall Mouldings"],
  },
  {
    slug: "media-wall-lounge",
    title: "Custom Media Wall Design in Islamabad | Steiner Interior",
    location: "Airport Housing Society, Islamabad",
    type: "Residential",
    categories: ["Residential", "Living Room", "Wall Design"],
    year: "Completed 2026",
    description:
      "View a custom media wall in Airport Housing Society, Islamabad, featuring fluted timber, concealed cove lighting and integrated cable management for a cinematic lounge.",
    cover: mediawallloungeImg,
    gallery: [mediawallloungeImg, loungechairImg, panelsImg],
    materials: ["Media Walls", "WPC Panels", "Lounge Chairs"],
  },
  {
    slug: "boutique-showroom",
    title: "Boutique Showroom Interior in Islamabad | Steiner Design",
    location: "Gulberg Green, Islamabad",
    type: "Commercial",
    categories: ["Commercial", "Wall Design", "Flooring"],
    year: "Completed 2026",
    description:
      "Explore a boutique showroom in Gulberg Green, Islamabad, combining Turkish wooden flooring, PU stone wall panels and accent lighting to highlight product displays.",
    cover: boutiqueShowroomImg,
    gallery: [boutiqueShowroomImg, puStoneImg, turkishwoodenflooringImg],
    materials: ["Turkish Wooden Flooring", "PU Stone Panels"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
