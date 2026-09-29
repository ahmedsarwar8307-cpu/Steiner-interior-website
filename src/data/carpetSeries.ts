import seekingSeriesImg from "@/assets/carpet-tiles/seeking-series.jpeg";
import seekingSeries1Img from "@/assets/carpet-tiles/seeking-series1.jpeg";
const seekingGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/seeking-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
const huishanGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/huishan-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
const lmpGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/lmp-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
const mujitoGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/mujito-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];

const fp10Gallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/fp10-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
const wqnGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/wqn-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];

const leapGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/leap-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];

const pegasusGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/pegasus-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];

const hillviewGallery = Object.values(
  import.meta.glob("@/assets/carpet-tiles/HillView-series/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];


export type CarpetSeries = {
  slug: string;
  name: string;
  material: "PP" | "Nylon";
  image: string;
  images?: string[];
  pdfs?: { name: string; file: string }[];
  description: string;
  specs: string[];
};

export const carpetSeries: CarpetSeries[] = [
  {
    slug: "seeking-series",
    name: "Seeking Series",
    material: "PP",
    image: seekingGallery[0]!,
    images: seekingGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 25cm x 100cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },
  {
    slug: "huishan-series",
    name: "Huishan Series",
    material: "PP",
    image: huishanGallery[1]!,
    images: huishanGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 50cm x 50cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },

  {
    slug: "lmp-series",
    name: "LMP Series",
    material: "PP",
    image: lmpGallery[1]!,
    images: lmpGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 25cm x 100cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },
{
    slug: "mujito-series",
    name: "Mujito Series",
    material: "PP",
    image: mujitoGallery[1]!,
    images: mujitoGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 25cm x 100cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },

{
    slug: "fp10-series",
    name: "FP10 Series",
    material: "PP",
    image: fp10Gallery[0]!,
    images: fp10Gallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 50cm x 50cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },

{
    slug: "wqn-series",
    name: "WQN Series",
    material: "PP",
    image: wqnGallery[1]!,
    images: wqnGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: NYLON fibre", "Tile size: 50cm x 50cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },

  {
    slug: "leap-series",
    name: "LEAP Series",
    material: "PP",
    image: leapGallery[0]!,
    images: leapGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 50cm x 50cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },

  {
    slug: "pegasus-series",
    name: "PEGASUS Series",
    material: "PP",
    image: pegasusGallery[1]!,
    images: pegasusGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 50cm x 50cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },

  {
    slug: "hillview-series",
    name: "HILLVIEW Series",
    material: "PP",
    image: hillviewGallery[0]!,
    images: hillviewGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 25cm x 100cm", "Backing: E back", "Install: Loose-lay or glue-down"],
  },

];

export function getCarpetSeries(slug: string) {
  return carpetSeries.find((s) => s.slug === slug);
}
