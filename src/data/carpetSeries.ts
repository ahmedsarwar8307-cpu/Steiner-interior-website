import seekingSeriesImg from "@/assets/carpet-tiles/seeking-series.jpeg";
import seekingSeries1Img from "@/assets/carpet-tiles/seeking-series1.jpeg";
import { Construction } from "lucide-react";
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
    name: "SEEKING Series",
    material: "PP",
    image: seekingGallery[0]!,
    images: seekingGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "Transform your interiors with the Seeking Series carpet planks from Steiner Design Interior. Featuring an elegant multi-level loop construction and dynamic color gradients, these 33.3cm x 100cm planks offer versatile installation options like Herringbone and Ashlar to create unique layouts. Manufactured with 100% Solution Dyed yarn for exceptional color retention, they provide a durable and stylish flooring solution for commercial spaces. Whether outfitting a modern office in Islamabad, a retail space in Rawalpindi, or undertaking a commercial project anywhere in Pakistan, the Seeking Series ensures lasting performance and life-of-the-carpet static protection.",
specs : [ "Style Name: Seeking, Construction: Multi-level loop, Yarn: 100% Unicolor, Color System: 100% Solution Dyed, Gauge: 1/12, Stitches: 9 per inch, Pile Weight: 19 oz/yd², Pile Height: 2.5mm-5.0mm(±0.5mm), Backing: PVC with fiberglass, Tile Size: 33.3cmx100cm, Static Control: Life-of-the Carpet Static Protection, Installation Methods: Herringbone, Ashlar, Monolithic, Brick "],
  },
  {
    slug: "huishan-series",
    name: "HUISHAN Series",
    material: "PP",
    image: huishanGallery[1]!,
    images: huishanGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "Elevate your commercial workspace with the modern, linear design of the HUISHAN Series carpet tiles, brought to you by Steiner Design Interior. Featuring a sophisticated striated pattern available in versatile professional shades, these tiles offer a sleek and contemporary aesthetic. Crafted for durability in high-traffic environments, these tiles are an ideal office flooring solution. Whether you are upgrading a corporate office in Rawalpindi, a commercial hub in Islamabad, or seeking premium flooring services anywhere in Pakistan, the HuiShan Series delivers the perfect combination of resilience, style, and easy maintenance",
    specs: ["Style Name: HUISHAN, Pile Height: 4mm, Face Yarn: 100% PP, Gauge: 1/12, Pile Weight: 500g/sqm, Backing: PVC with fiberglass, Tile Size: 50x50cm"],
  },

  {
    slug: "lmp-series",
    name: "LMP Series",
    material: "PP",
    image: lmpGallery[1]!,
    images: lmpGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "Upgrade your commercial interiors with the striking LMP2 Series carpet planks from Steiner Design Interior. Featuring a contemporary sleek grey design accented by vibrant green stripes, these 25x100cm planks bring a dynamic, modern energy to any workspace. Designed with a durable 100% PP face yarn and a sturdy PVC with fiberglass backing, they offer excellent resilience for high-traffic areas. Whether you are outfitting a creative agency in Islamabad, a corporate office in Rawalpindi, or seeking top-tier flooring solutions anywhere in Pakistan, the LMP2 Series delivers an impactful aesthetic with dependable performance.",
specs : [ "Style Name: LMP2, Pile Height: 4mm, Face Yarn: 100% PP, Gauge: 1/10, Pile Weight: 460g/sqm, Backing: PVC with fiberglass, Tile Size: 25x100cm" ],
  },
{
    slug: "mujito-series",
    name: "MOJITO Series",
    material: "PP",
    image: mujitoGallery[1]!,
    images: mujitoGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
     "Introduce vibrant versatility to your commercial floors with the MOJITUO Series carpet planks, exclusively available through Steiner Design Interior. Showcasing an extensive palette of rich textures and colors—from professional greys to bold reds, earthy tones, greens, and blues—these 25x100cm planks allow for highly customizable layout designs. Constructed with a resilient 100% PP face yarn and a robust PVC with fiberglass backing, they are built to withstand the demands of high-traffic environments. Ideal for corporate offices in Islamabad, modern retail environments in Rawalpindi, or large-scale commercial projects across Pakistan, the MOJITUO Series combines practical durability with dynamic visual appeal.",
specs : [ "Style Name: MOJITUO, Pile Height: 4mm, Face Yarn: 100% PP, Gauge: 1/12, Pile Weight: 490g/sqm, Backing: PVC with fiberglass, Tile Size: 25x100cm" ],
  },

{
    slug: "fp10-series",
    name: "FP10 Series",
    material: "PP",
    image: fp10Gallery[0]!,
    images: fp10Gallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "Enhance your professional environment with the FP10 Series carpet tiles from Steiner Design Interior. Featuring a sophisticated, textured geometric pattern with multi-tonal linear blocks, these 50x50cm tiles bring depth and modern elegance to any commercial space. Designed with a variable 4-6mm pile height and resilient 100% PP face yarn, they offer a comfortable yet highly durable surface for busy areas. Whether you are renovating an office in Islamabad, a commercial facility in Rawalpindi, or seeking premium flooring solutions anywhere in Pakistan, the FP10 Series provides the perfect blend of structural style and long-lasting performance.",
specs : [ "Style Name: FP10, Pile Height: 4-6mm, Face Yarn: 100% PP, Gauge: 1/12, Pile Weight: 500g/sqm, Backing: PVC with fiberglass, Tile Size: 50x50cm" ],
  },

{
    slug: "wqn-series",
    name: "WQN Series",
    material: "PP",
    image: wqnGallery[1]!,
    images: wqnGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
     "Create a sophisticated and commanding professional space with the WNQ Series carpet tiles, exclusively from Steiner Design Interior. Featuring a refined, multi-level loop construction and a subtle, textured cross-hatch design, these 50x50cm tiles deliver a premium aesthetic ideal for boardrooms and executive suites. Crafted with high-quality Nylon face yarn, they offer superior durability, crush resistance, and longevity for demanding commercial environments. Available with a standard PVC or an upgraded PVC+800g Cushion backing for enhanced underfoot comfort and acoustic insulation, the WNQ Series is the ultimate flooring choice. Whether you are outfitting a corporate headquarters in Islamabad, an upscale office in Rawalpindi, or undertaking a major project anywhere in Pakistan, these tiles ensure luxury and lasting performance.",
specs : [ "Style Name: WNQ, Construction: Multi-Level Loop, Face Yarn: Nylon, Gauge: 1/12 Inch, Pile Height: 3.0-4.0mm, Pile Weight: 400g/m², Tile Backing: PVC/PVC+800g Cushion, Total Thickness: 5mm/8mm, Tile Size: 50cmx50cm, Packing: 20 pcs per carton(5m²)" ],
  },

  {
    slug: "leap-series",
    name: "LEAP Series",
    material: "PP",
    image: leapGallery[0]!,
    images: leapGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
      "Revitalize your commercial interiors with the Leap Series carpet tiles, brought to you by Steiner Design Interior. Showcasing a contemporary multi-level loop construction with an elegant linear streak pattern, these 50x50cm tiles offer a sophisticated and textured look perfect for modern workspaces. Crafted from 100% Solution Dyed Unicolor yarn, they ensure superior colorfastness and exceptional durability specifically rated for heavy commercial use. Whether you are upgrading a corporate lounge in Islamabad, a high-traffic office in Rawalpindi, or undertaking a large-scale project anywhere in Pakistan, the Leap Series provides versatile installation methods and enduring professional style.",
specs : [ "Style Name: Leap, Construction: Multi-level loop, Yarn: 100% Unicolor, Color System: 100% Solution Dyed, Gauge: 1/12, Stitches: 10 per inch, Pile Weight: 18 oz/yd², Pile Height: 2.5mm-5.0mm(± 0.5mm), Backing: PVC with fiberglass, Tile Size: 50cm x 50cm, Area of Use: Heavy Commercial" ],
  },

  {
    slug: "pegasus-series",
    name: "PEGASUS Series",
    material: "PP",
    image: pegasusGallery[1]!,
    images: pegasusGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
     "Infuse artistic flair and heavy-duty performance into your workspace with the Pegasus Series carpet tiles from Steiner Design Interior. Featuring a contemporary multi-level loop construction and a beautifully distressed abstract pattern with subtle color accents, these 50x50cm tiles create a visually striking commercial environment. Engineered from 100% Solution Dyed Unicolor yarn and explicitly rated for heavy commercial use, they offer outstanding durability and color retention for high-traffic areas. Perfect for dynamic corporate offices in Islamabad, modern retail spaces in Rawalpindi, or premium commercial projects across Pakistan, the Pegasus Series offers flexible installation methods like Quarter Turn and Ashlar to achieve a truly customized and sophisticated look.",
specs : [ "Style Name: Pegasus, Construction: Multi-level loop, Yarn: 100% Unicolor, Color System: 100% Solution Dyed, Gauge: 1/12, Stitches: 10 per inch, Pile Weight: 18 oz/yd², Pile Height: 2.5mm-5.5mm(±0.5mm), Backing: PVC with Fiberglass, Tile Size: 50cmx50cm, Area of Use: Heavy Commercial, Flammability: Passes (GB 8624-2012) B1, Installation Methods: Quarter Turn, Ashlar, Monolithic, Brick" ],
  },

  {
    slug: "hillview-series",
    name: "HILLVIEW Series",
    material: "PP",
    image: hillviewGallery[0]!,
    images: hillviewGallery,
    // pdfs: [{ name: "Spec Sheet", file: "/pdfs/seeking-series-spec.pdf" }],
    description:
     "Bring modern dynamism to your commercial spaces with the HILLVIEW Series carpet planks from Steiner Design Interior. These 25x100cm planks feature a multi-level loop construction and are available in striking color combinations, from sleek greys to vibrant accents like Turquoise Blue and Orange, allowing for highly creative flooring layouts. Manufactured with 100% Solution Dyed Polypropylene yarn, they are engineered specifically for commercial areas requiring superior stain resistance and dimension stability. Boasting an extensive list of safety and performance certifications, including flammability and static generation standards, the HILLVIEW Series guarantees top-tier performance. Whether you are designing a creative studio in Islamabad, a contemporary retail outlet in Rawalpindi, or a large-scale corporate office anywhere in Pakistan, these planks offer versatile installation options like Herringbone and Ashlar to perfectly match your aesthetic vision.",
specs : [ "Style Name: HILLVIEW, Construction: Multi-level loop, Yarn: 100% Polypropylene, Color System: 100% Solution Dyed, Gauge: 1/12, Stitches: 9.5 per inch, Pile Weight: 660 ±10g/m2 (20 onz), Pile Height: 2.5-4.5mm (±0.5mm), Backing: E back, Tile Size: 25cmx100cm, Area of Use: Commercial, Installation Methods: Herringbone, Ashlar, Monolithic, Brick" ],
  },

];

export function getCarpetSeries(slug: string) {
  return carpetSeries.find((s) => s.slug === slug);
}
