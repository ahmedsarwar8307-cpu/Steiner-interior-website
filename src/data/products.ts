import woodenImg from "@/assets/cat-wooden-flooring.jpg";
import vinylImg from "@/assets/cat-vinyl-flooring.jpg";
import spcImg from "@/assets/cat-spc-flooring.jpg";
import panelsImg from "@/assets/cat-wall-panels.jpg";
import wallpaperImg from "@/assets/cat-wallpapers.jpg";
import blindsImg from "@/assets/cat-window-blinds.jpg";
import grassImg from "@/assets/cat-artificial-grass.jpg";
import sportsImg from "@/assets/cat-sports-flooring.jpg";
import mouldingImg from "@/assets/cat-wall-mouldings.jpg";
import carpetImg from "@/assets/cat-woolen-carpet.jpg";
import carpetTilesImg from "@/assets/cat-carpet-tiles.png.png";
import curtainsImg from "@/assets/cat-curtains.jpg";
import mediaWallImg from "@/assets/cat-media-walls.jpg";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  subcategories: { slug: string; name: string }[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  image: string;
  features: string[];
  variations: string[];
};

export const categories: Category[] = [
  {
    slug: "wooden-flooring",
    name: "Wooden Flooring",
    blurb: "Engineered and laminate wood floors with authentic grain and warmth.",
    image: woodenImg,
    subcategories: [
      { slug: "chinese", name: "Chinese Wooden Flooring" },
      { slug: "german", name: "German Wooden Flooring" },
      { slug: "turkish", name: "Turkish Wooden Flooring" },
    ],
  },
  {
    slug: "vinyl-flooring",
    name: "Vinyl Flooring",
    blurb: "Resilient, water-resistant vinyl in wood and stone finishes.",
    image: vinylImg,
    subcategories: [
      { slug: "local-made", name: "Local Made Vinyl Flooring" },
      { slug: "imported", name: "Imported Vinyl Flooring" },
    ],
  },
  {
    slug: "spc-flooring",
    name: "SPC Flooring",
    blurb: "Rigid stone-polymer core planks built for heavy daily use.",
    image: spcImg,
    subcategories: [],
  },
  {
    slug: "wall-panels",
    name: "Wall Panels",
    blurb: "Fluted, stone-effect and louvered panels for feature walls.",
    image: panelsImg,
    subcategories: [
      { slug: "pvc", name: "PVC Panels" },
      { slug: "wpc", name: "WPC Panels" },
      { slug: "pu-stone", name: "PU Stone Panels" },
    ],
  },
  {
    slug: "wallpapers",
    name: "Wallpapers",
    blurb: "Textured and printed wallcoverings from leading mills.",
    image: wallpaperImg,
    subcategories: [
      { slug: "chinese", name: "Chinese Wallpapers" },
      { slug: "korean", name: "Korean Wallpapers" },
    ],
  },
  {
    slug: "window-blinds",
    name: "Window Blinds",
    blurb: "Precision-measured blinds for light control and privacy.",
    image: blindsImg,
    subcategories: [
      { slug: "wooden", name: "Wooden Blinds" },
      { slug: "zebra", name: "Zebra Blinds" },
      { slug: "roller", name: "Roller Blinds" },
      { slug: "mini", name: "Mini Blinds" },
      { slug: "vertical", name: "Vertical Blinds" },
    ],
  },
  {
    slug: "artificial-grass",
    name: "Artificial Grass",
    blurb: "UV-stable turf for terraces, lawns, play areas and interiors.",
    image: grassImg,
    subcategories: [
      { slug: "10mm", name: "10mm" },
      { slug: "15mm", name: "15mm" },
      { slug: "20mm", name: "20mm" },
      { slug: "30mm", name: "30mm" },
      { slug: "40mm", name: "40mm" },
      { slug: "50mm", name: "50mm" },
    ],
  },
  {
    slug: "sports-flooring",
    name: "Sports Flooring",
    blurb: "Shock-absorbing surfaces for courts, gyms and activity halls.",
    image: sportsImg,
    subcategories: [],
  },
  {
    slug: "wall-mouldings",
    name: "Wall Mouldings",
    blurb: "Panel moulding, skirting and trims for architectural detail.",
    image: mouldingImg,
    subcategories: [],
  },
  {
    slug: "woolen-carpet",
    name: "Woolen Carpet",
    blurb: "Soft, dense wall-to-wall carpeting in natural tones.",
    image: carpetImg,
    subcategories: [],
  },
  {
    slug: "carpet-tiles",
    name: "Carpet Tiles",
    blurb: "Modular carpet tiles for commercial and residential spaces — easy to install, replace and maintain.",
    image: carpetTilesImg,
    subcategories: [
      { slug: "office", name: "Office Carpet Tiles" },
      { slug: "heavy-duty", name: "Heavy Duty Carpet Tiles" },
    ],
  },
  {
    slug: "curtains",
    name: "Curtains",
    blurb: "Tailored drapery, sheers and blackout treatments.",
    image: curtainsImg,
    subcategories: [],
  },
  {
    slug: "media-walls",
    name: "Media Walls",
    blurb: "Bespoke media wall design, fabrication and installation.",
    image: mediaWallImg,
    subcategories: [],
  },
];

export const products: Product[] = [
  {
    id: "chinese-wooden-flooring",
    name: "Chinese Wooden Flooring",
    category: "wooden-flooring",
    subcategory: "chinese",
    description:
      "Value-focused laminate wood flooring with a realistic grain emboss and a durable wear layer — ideal for bedrooms and low-traffic living areas.",
    image: woodenImg,
    features: ["Scratch-resistant wear layer", "Click-lock installation", "Wide shade range", "Budget friendly"],
    variations: ["8mm", "12mm", "Matte & embossed finishes"],
  },
  {
    id: "german-wooden-flooring",
    name: "German Wooden Flooring",
    category: "wooden-flooring",
    subcategory: "german",
    description:
      "Premium European-engineered planks with high abrasion classes and precise milling for a seamless, long-lasting floor.",
    image: woodenImg,
    features: ["AC4 / AC5 abrasion class", "Moisture-treated core", "Precision click system", "Long-term warranty"],
    variations: ["8mm", "10mm", "12mm", "Oak, walnut & ash tones"],
  },
  {
    id: "turkish-wooden-flooring",
    name: "Turkish Wooden Flooring",
    category: "wooden-flooring",
    subcategory: "turkish",
    description:
      "Warm, character-rich Turkish planks balancing natural aesthetics with everyday durability for family homes.",
    image: woodenImg,
    features: ["Natural grain finishes", "Low-gloss surface", "Stable HDF core", "Easy maintenance"],
    variations: ["8mm", "12mm", "Herringbone option"],
  },
  {
    id: "local-vinyl-flooring",
    name: "Local Made Vinyl Flooring",
    category: "vinyl-flooring",
    subcategory: "local-made",
    description:
      "Cost-effective locally manufactured vinyl sheets and planks — quick to install and simple to maintain.",
    image: vinylImg,
    features: ["Water resistant", "Fast installation", "Wide stock availability", "Economical"],
    variations: ["Sheet roll", "Plank", "1.2mm – 2mm"],
  },
  {
    id: "imported-vinyl-flooring",
    name: "Imported Vinyl Flooring",
    category: "vinyl-flooring",
    subcategory: "imported",
    description:
      "Luxury vinyl planks with deeper texture, thicker wear layers and refined colour matching for premium interiors.",
    image: vinylImg,
    features: ["Thick wear layer", "Realistic wood & stone texture", "Dimensionally stable", "Commercial grade"],
    variations: ["2mm", "3mm", "Glue-down & click"],
  },
  {
    id: "spc-flooring",
    name: "SPC Flooring",
    category: "spc-flooring",
    description:
      "Rigid stone-polymer core flooring — fully waterproof, dent resistant and suited to kitchens, offices and high-traffic spaces.",
    image: spcImg,
    features: ["100% waterproof", "Rigid dent-resistant core", "Integrated underlay options", "Underfloor heating compatible"],
    variations: ["4mm", "5mm", "6mm", "Stone & wood décors"],
  },
  {
    id: "pvc-panels",
    name: "PVC Panels",
    category: "wall-panels",
    subcategory: "pvc",
    description:
      "Lightweight PVC wall panels with printed and marble-effect finishes for fast, clean wall transformations.",
    image: panelsImg,
    features: ["Moisture proof", "Easy to clean", "Quick dry installation", "Large format sheets"],
    variations: ["Marble effect", "Fluted", "Plain matte"],
  },
  {
    id: "wpc-panels",
    name: "WPC Panels",
    category: "wall-panels",
    subcategory: "wpc",
    description:
      "Wood-plastic composite louvre panels delivering warm, acoustic-friendly fluted feature walls.",
    image: panelsImg,
    features: ["Acoustic softening", "Warm wood finishes", "Termite proof", "Concealed fixing"],
    variations: ["Slat 3, 4 & 5 grooves", "Oak, walnut, charcoal"],
  },
  {
    id: "pu-stone-panels",
    name: "PU Stone Panels",
    category: "wall-panels",
    subcategory: "pu-stone",
    description:
      "Lightweight polyurethane stone panels reproducing natural stone texture without the structural load.",
    image: panelsImg,
    features: ["Feather-light", "Realistic stone texture", "Interior & exterior grades", "Insulating"],
    variations: ["Ledge stone", "Brick", "Travertine"],
  },
  {
    id: "chinese-wallpapers",
    name: "Chinese Wallpapers",
    category: "wallpapers",
    subcategory: "chinese",
    description:
      "Broad catalogue of printed and embossed wallpapers covering classic, floral and contemporary patterns.",
    image: wallpaperImg,
    features: ["Extensive design library", "Washable surface", "Roll-based pricing", "Fast availability"],
    variations: ["Non-woven", "Vinyl coated", "3D embossed"],
  },
  {
    id: "korean-wallpapers",
    name: "Korean Wallpapers",
    category: "wallpapers",
    subcategory: "korean",
    description:
      "Refined Korean wallcoverings known for subtle texture, muted palettes and excellent print consistency.",
    image: wallpaperImg,
    features: ["Premium texture", "Colour-fast pigments", "Low sheen finishes", "Durable surface"],
    variations: ["Plain textures", "Micro patterns", "Silk effect"],
  },
  {
    id: "wooden-blinds",
    name: "Wooden Blinds",
    category: "window-blinds",
    subcategory: "wooden",
    description: "Natural and faux-wood venetian slats offering warm light control with a classic finish.",
    image: blindsImg,
    features: ["Tilt light control", "Natural & faux wood", "Custom widths", "Cord or wand operation"],
    variations: ["25mm", "50mm slats"],
  },
  {
    id: "zebra-blinds",
    name: "Zebra Blinds",
    category: "window-blinds",
    subcategory: "zebra",
    description: "Dual-layer banded shades that shift between sheer and privacy with a simple pull.",
    image: blindsImg,
    features: ["Day / night banding", "Modern minimal look", "Chain or motorised", "Wide fabric range"],
    variations: ["Sheer", "Blackout backing", "Motorised"],
  },
  {
    id: "roller-blinds",
    name: "Roller Blinds",
    category: "window-blinds",
    subcategory: "roller",
    description: "Clean single-fabric roller shades — the most versatile option for offices and living spaces.",
    image: blindsImg,
    features: ["Sunscreen & blackout fabrics", "Slim cassette option", "Easy operation", "Custom sizing"],
    variations: ["Sunscreen", "Dim-out", "Blackout"],
  },
  {
    id: "mini-blinds",
    name: "Mini Blinds",
    category: "window-blinds",
    subcategory: "mini",
    description: "Slim aluminium slat blinds for compact windows, kitchens and service areas.",
    image: blindsImg,
    features: ["Slim profile", "Moisture resistant", "Precise tilt", "Economical"],
    variations: ["16mm", "25mm slats"],
  },
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    category: "window-blinds",
    subcategory: "vertical",
    description: "Vertical louvre systems ideal for wide glazing, sliding doors and commercial interiors.",
    image: blindsImg,
    features: ["Best for wide spans", "Rotating louvres", "Replaceable slats", "Office friendly"],
    variations: ["89mm", "127mm louvres"],
  },
  ...["10mm", "15mm", "20mm", "30mm", "40mm", "50mm"].map((mm) => ({
    id: `artificial-grass-${mm}`,
    name: `Artificial Grass ${mm}`,
    category: "artificial-grass",
    subcategory: mm.toLowerCase(),
    description: `${mm} pile-height artificial turf with UV-stable fibres and a permeable backing — ${
      Number.parseInt(mm) <= 15
        ? "ideal for interiors, balconies and decorative applications."
        : Number.parseInt(mm) <= 30
          ? "well suited to terraces, play areas and light landscaping."
          : "a dense, lush pile for gardens and premium landscape work."
    }`,
    image: grassImg,
    features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
    variations: ["2m roll width", "4m roll width", "Custom cut"],
  })),
  {
    id: "sports-flooring",
    name: "Sports Flooring",
    category: "sports-flooring",
    description:
      "Multipurpose sports surfaces with controlled shock absorption and slip resistance for indoor courts and gyms.",
    image: sportsImg,
    features: ["Shock absorption", "Slip-resistant surface", "Line marking service", "Indoor court grades"],
    variations: ["4.5mm", "6.5mm", "8mm", "Gym rubber tiles"],
  },
  {
    id: "wall-mouldings",
    name: "Wall Mouldings",
    category: "wall-mouldings",
    description:
      "Panel mouldings, cornices, skirting and trims that add architectural rhythm and finish to plain walls.",
    image: mouldingImg,
    features: ["Paint-ready profiles", "Moisture resistant options", "Mitre-cut on site", "Custom layouts"],
    variations: ["PS profiles", "PU profiles", "MDF profiles"],
  },
  {
    id: "woolen-carpet",
    name: "Woolen Carpet",
    category: "woolen-carpet",
    description:
      "Dense woolen wall-to-wall carpeting delivering warmth, acoustic comfort and a soft underfoot feel.",
    image: carpetImg,
    features: ["Natural wool blend", "Acoustic insulation", "Stain-treated options", "Wall-to-wall installation"],
    variations: ["Plain", "Patterned", "Custom rug sizes"],
  },
  {
    id: "office-carpet-tiles",
    name: "Office Carpet Tiles",
    category: "carpet-tiles",
    subcategory: "office",
    description:
      "Low-profile modular carpet tiles designed for commercial offices — anti-static, stain-resistant and easy to lift and replace.",
    image: carpetTilesImg,
    features: ["Stain-resistant fibres", "Anti-static backing", "Quick individual replacement", "Sound absorbing"],
    variations: ["50cm x 50cm", "Plain", "Patterned", "Loop pile"],
  },
  {
    id: "heavy-duty-carpet-tiles",
    name: "Heavy Duty Carpet Tiles",
    category: "carpet-tiles",
    subcategory: "heavy-duty",
    description:
      "High-traffic rated carpet tiles with dense loop construction and reinforced bitumen backing for retail, hospitality and busy offices.",
    image: carpetTilesImg,
    features: ["Heavy traffic rating", "Dense loop pile", "Reinforced bitumen backing", "Long lifespan"],
    variations: ["50cm x 50cm", "Plain", "Multi-colour mix", "Textured loop"],
  },
  {
    id: "curtains",
    name: "Curtains",
    category: "curtains",
    description:
      "Made-to-measure curtains — sheers, linens, velvets and blackout linings with tracks and motorisation.",
    image: curtainsImg,
    features: ["Made to measure", "Sheer & blackout layers", "Motorised track option", "On-site measurement"],
    variations: ["Pinch pleat", "Wave / ripple fold", "Eyelet", "Roman"],
  },
  {
    id: "media-walls",
    name: "Media Walls",
    category: "media-walls",
    description:
      "Bespoke media walls combining fluted wood, stone, marble inserts and concealed lighting with cable management.",
    image: mediaWallImg,
    features: ["Custom design & 3D preview", "Concealed cable routing", "Integrated LED lighting", "Complete installation"],
    variations: ["Wood & marble", "Fluted panel", "Full-wall unit"],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function categoryName(slug: string) {
  return getCategory(slug)?.name ?? slug;
}

export function subcategoryName(categorySlug: string, subSlug?: string) {
  if (!subSlug) return undefined;
  return getCategory(categorySlug)?.subcategories.find((s) => s.slug === subSlug)?.name;
}