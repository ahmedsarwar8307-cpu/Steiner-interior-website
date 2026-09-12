import seekingSeriesImg from "@/assets/carpet-tiles/seeking-series.jpeg";
import seekingSeries1Img from "@/assets/carpet-tiles/seeking-series1.jpeg";
export type CarpetSeries = {
  slug: string;
  name: string;
  material: "PP" | "Nylon";
  image: string;
  gallery:string[];
  description: string;
  specs: string[];
};

export const carpetSeries: CarpetSeries[] = [
  {
    slug: "seeking-series",
    name: "Seeking Series",
    material: "PP",
    image: seekingSeriesImg,
    gallery: [seekingSeriesImg , seekingSeries1Img],
    description:
      "This is one of our PP carpet tile options — built with the same practical backbone as the rest of our PP range: anti-static backing, stain resistance, and the ability to lift and replace a single damaged tile without redoing the whole floor. Steiner Design Interior usually fits this series in offices and commercial spaces where day-to-day durability matters more than plush comfort.",
    specs: ["Material: 100% PP fibre", "Tile size: 25cm x 100cm", "Backing: PVC", "Install: Loose-lay or glue-down"],
  },
];

export function getCarpetSeries(slug: string) {
  return carpetSeries.find((s) => s.slug === slug);
}
