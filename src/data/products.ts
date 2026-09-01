import woodenImg from "@/assets/cat-wooden-flooring.jpg";
import vinylImg from "@/assets/cat-vinyl-flooring.jpg";
import localvinylImg from "@/assets/local-vinyl-flooring.jpeg";
import importedvinylImg from "@/assets/imported-vinyle-flooring.jpeg";
import spcImg from "@/assets/spc-flooring.jpeg";
import panelsImg from "@/assets/cat-wall-panels.jpg";
import pvcpanelImg from "@/assets/pvc-panel.jpeg";
import wpcpanelImg from "@/assets/wpc-panel.jpeg";
import wallpaperImg from "@/assets/cat-wallpapers.jpg";
import koreanwallpaperImg from "@/assets/korean-wallpaper.jpeg";
import chinesewallpaperImg from "@/assets/chinese-wallpaper.jpeg";
import blindsImg from "@/assets/cat-window-blinds.jpg";
import woodenblindsImg from "@/assets/wooden-blinds.jpeg";
import zebrablindsImg from "@/assets/zebra-blinds.jpeg";
import miniblindsImg from "@/assets/mini-blinds.jpeg";
import verticalblindsImg from "@/assets/vertical-blind.jpeg";
import grassImg from "@/assets/cat-artificial-grass.jpg";
import grass10mmImg from "@/assets/grass-10mm.jpeg";
import grass15mmImg from "@/assets/grass-15mm.jpeg";
import grass20mmImg from "@/assets/grass-20mm.jpeg";
import grass30mmImg from "@/assets/grass-30mm.jpeg";
import grass40mmImg from "@/assets/grass-40mm.jpeg";
import grass50mmImg from "@/assets/grass-50mm.jpeg";
import sportsImg from "@/assets/cat-sports-flooring.jpg";
import mouldingImg from "@/assets/cat-wall-mouldings.jpg";
import carpetImg from "@/assets/cat-woolen-carpet.jpg";
import carpetTilesImg from "@/assets/cat-carpet-tiles.jpeg";
import ppcarpetTilesImg from "@/assets/pp-carpet-tile.jpeg";
import nyloncarpetTilesImg from "@/assets/nylon-carpet-tile.jpeg";
import curtainsImg from "@/assets/curtains.jpeg";
import mediaWallImg from "@/assets/media-wall.jpeg";
import germanWoodenImg from "@/assets/german-wooden-flooring.jpeg";
import turkishWoodenImg from "@/assets/turkish-wooden-flooring.jpeg";
import chineseWoodenImg from "@/assets/chinese-wooden-flooring.jpeg";
import pustonepanelsImg from "@/assets/pu-stone-panel.jpeg";
import rollerblindsImg from "@/assets/roller-blind.jpeg";
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
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "wooden-flooring",
    name: "Wooden Flooring",
    blurb: "Premium laminate and solid wood flooring with authentic grain, natural warmth, and timeless elegance.",
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
    blurb: "Premium waterproof SPC flooring designed for lasting durability, effortless maintenance, and stylish everyday living.",
    image: spcImg,
    subcategories: [],
  },
  {
    slug: "carpet-tiles",
    name: "Carpet Tiles",
    blurb: "Modular carpet tiles for commercial and residential spaces — easy to install, replace and maintain.",
    image: carpetTilesImg,
    subcategories: [
      { slug: "PP", name: "PP Carpet Tiles" },
      { slug: "Nylon", name: "Nylon Carpet Tiles" },
    ],
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
    blurb: "Premium artificial grass for terraces, lawns, play areas, and interiors, offering a lush and natural look.",
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
    blurb: "Elegant wall moulding solutions crafted to add depth, character, and refined architectural detail to any interior.",
    image: mouldingImg,
    subcategories: [],
  },
  {
    slug: "woolen-carpet",
    name: "Woolen Carpet",
    blurb: "Pure wool carpeting with a soft, luxurious texture and timeless natural elegance.",
    image: carpetImg,
    subcategories: [],
  },
  
  {
    slug: "curtains",
    name: "Curtains",
    blurb: "Elegant curtains crafted to enhance privacy, light control, and ambience while adding a refined finishing touch.",
    image: curtainsImg,
    subcategories: [],
  },
  {
    slug: "media-walls",
    name: "Media Walls",
    blurb: "Custom media walls designed around your space, style, and entertainment needs.",
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
    image: chineseWoodenImg,
    features: [ "MDF/HDF" , "Scratch-resistant wear layer", "Click-lock installation", "Wide shade range", "Budget friendly"],
    variations: ["8mm","10mm", "12mm", "Matte & High-gloss finishes" , "Herringbone", "3d parquet flooring"],
  },
  {
    id: "german-wooden-flooring",
    name: "German Wooden Flooring",
    category: "wooden-flooring",
    subcategory: "german",
    description:
      "Premium European-engineered planks with high abrasion classes and precise milling for a seamless, long-lasting floor.",
    image:germanWoodenImg,   // ← its own real photo
    features: ["HDF", "Moisture-treated core", "Precision click system", "Long-term warranty"],
    variations: ["8mm","12mm", "Oak, walnut & ash tones"],
  },
  {
    id: "turkish-wooden-flooring",
    name: "Turkish Wooden Flooring",
    category: "wooden-flooring",
    subcategory: "turkish",
    description:
      "Warm, character-rich Turkish planks balancing natural aesthetics with everyday durability for family homes.",
    image: turkishWoodenImg,
    features: ["Natural grain finishes", "AC3 / AC4 abrasion class", "Low-gloss surface", "Stable HDF core"],
    variations: ["8mm", "12mm",],
      featured: true,
  },
  {
    id: "local-vinyl-flooring",
    name: "Local Made Vinyl Flooring",
    category: "vinyl-flooring",
    subcategory: "local-made",
    description:
      "Cost-effective locally manufactured vinyl sheets and planks — quick to install and simple to maintain.",
    image: localvinylImg,
    features: ["Water resistant", "Fast installation", "Wide stock availability", "Economical"],
    variations: ["Sheet roll", "Plank", "1.3mm"],
  },
  {
    id: "imported-vinyl-flooring",
    name: "Imported Vinyl Flooring",
    category: "vinyl-flooring",
    subcategory: "imported",
    description:
      "Luxury vinyl planks with deeper texture, thicker wear layers and refined colour matching for premium interiors.",
    image: importedvinylImg,
    features: ["Thick wear layer", "Realistic wood & stone texture", "Dimensionally stable", "Commercial grade"],
    variations: ["1.3mm", "5mm", "Matt & semi-gloss finishes"],
  },
  {
    id: "spc-flooring",
    name: "SPC Flooring",
    category: "spc-flooring",
    description:
      "Rigid stone-polymer core flooring — fully waterproof, dent resistant and suited to kitchens, offices and high-traffic spaces.",
    image: spcImg,
    features: ["100% waterproof", "Rigid dent-resistant core", "Integrated underlay options", "Underfloor heating compatible"],
    variations: [ "5mm", "Stone & wood décors"],
  },
   {
    id: "PP-carpet-tiles",
    name: "PP Carpet Tiles",
    category: "carpet-tiles",
    subcategory: "PP",
    description:
      "Low-profile modular carpet tiles designed for commercial offices — anti-static, stain-resistant and easy to lift and replace.",
    image: ppcarpetTilesImg,
    features: ["Stain-resistant fibres", "Anti-static backing", "Quick individual replacement", "Sound absorbing"],
    variations: ["50cm x 50cm", "10cm x 39cm", "Plain", "Patterned", "Loop pile"],
      featured: true,
  },
  {
    id: "Nylon-carpet-tiles",
    name: "Nylon Carpet Tiles",
    category: "carpet-tiles",
    subcategory: "Nylon",
    description:
      "High-traffic rated carpet tiles with dense loop construction and reinforced bitumen backing for retail, hospitality and busy offices.",
    image: nyloncarpetTilesImg,
    features: ["Heavy traffic rating", "Dense loop pile", "Reinforced bitumen/PVC backing", "Long lifespan"],
    variations: ["50cm x 50cm", "10cm x 39cm", "Plain", "Multi-colour mix", "Textured loop"],
  },
  {
    id: "pvc-panel",
    name: "PVC Panels",
    category: "wall-panels",
    subcategory: "pvc",
    description:
      "Lightweight PVC wall panels with printed and marble-effect finishes for fast, clean wall transformations.",
    image: pvcpanelImg,
    features: ["Moisture proof", "Easy to clean", "Quick dry installation", "Large format sheets"],
    variations: ["Marble effect", "Wood texture", "Plain matte"],
  },
  {
    id: "wpc-panels",
    name: "WPC Panels",
    category: "wall-panels",
    subcategory: "wpc",
    description:
      "Wood-plastic composite louvre panels delivering warm, acoustic-friendly fluted feature walls.",
    image: wpcpanelImg,
    features: ["Acoustic softening", "Warm wood finishes", "Termite proof", "Concealed fixing"],
    variations: ["high grooves", "fluted", "Oak, walnut, charcoal"],
  },
  {
    id: "pu-stone-panel",
    name: "PU Stone Panels",
    category: "wall-panels",
    subcategory: "pu-stone",
    description:
      "Lightweight polyurethane stone panels reproducing natural stone texture without the structural load.",
    image: pustonepanelsImg,
    features: ["Feather-light", "Realistic stone texture", "Interior & exterior grades", "Insulating"],
    variations: ["Ledge stone", "Brick", "Travertine"],
      featured: true,
  },
  {
    id: "chinese-wallpapers",
    name: "Chinese Wallpapers",
    category: "wallpapers",
    subcategory: "chinese",
    description:
      "Broad catalogue of printed and embossed wallpapers covering classic, floral and contemporary patterns.",
    image: chinesewallpaperImg,
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
    image: koreanwallpaperImg,
    features: ["Premium texture", "Colour-fast pigments", "Low sheen finishes", "Durable surface"],
    variations: ["Plain textures", "Micro patterns", "Silk effect"],
  },
  {
    id: "wooden-blinds",
    name: "Wooden Blinds",
    category: "window-blinds",
    subcategory: "wooden",
    description: "Natural and faux-wood venetian slats offering warm light control with a classic finish.",
    image: woodenblindsImg,
    features: ["Tilt light control", "Natural & faux wood", "Custom widths", "Cord or wand operation"],
    variations: ["vertian", "fox wood"],
  },
  {
    id: "zebra-blinds",
    name: "Zebra Blinds",
    category: "window-blinds",
    subcategory: "zebra",
    description: "Dual-layer banded shades that shift between sheer and privacy with a simple pull.",
    image: zebrablindsImg,
    features: ["Day / night banding", "Modern minimal look", "Chain or motorised", "Wide fabric range"],
    variations: ["Sheer", "Blackout backing", "Motorised"],
  },
  {
    id: "roller-blind",
    name: "Roller Blinds",
    category: "window-blinds",
    subcategory: "roller",
    description: "Clean single-fabric roller shades — the most versatile option for offices and living spaces.",
    image: rollerblindsImg,
    features: ["Sunscreen & blackout fabrics", "Slim cassette option", "Easy operation", "Custom sizing"],
    variations: ["Sunscreen", "Dim-out", "Blackout"],
      featured: true,
  },
  {
    id: "mini-blinds",
    name: "Mini Blinds",
    category: "window-blinds",
    subcategory: "mini",
    description: "Slim aluminium slat blinds for compact windows, kitchens and service areas.",
    image: miniblindsImg,
    features: ["Slim profile", "Moisture resistant", "Precise tilt", "Economical"],
    variations: ["Matt", "wood texture"],
  },
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    category: "window-blinds",
    subcategory: "vertical",
    description: "Vertical louvre systems ideal for wide glazing, sliding doors and commercial interiors.",
    image: verticalblindsImg,
    features: ["Best for wide spans", "Rotating louvres", "Replaceable slats", "Office friendly"],
    variations: ["Wood texture", "Hard Fabric"],
  },
  
  ...["10mm", "15mm", "20mm", "30mm", "40mm", "50mm"].map((mm) => ({
    id: `artificial-grass-${mm}`,
    name: `Artificial Grass ${mm}`,
    category: "artificial-grass",
    subcategory: mm.toLowerCase(),
    description: `${mm} pile-height artificial turf with UV-stable fibres and a permeable backing — ${
      Number.parseInt(mm) <= 15
        ? "ideal for interiors, balconies and wall decor."
        : Number.parseInt(mm) <= 30
          ? "well suited to terraces, play areas and light landscaping."
          : "a dense, lush pile for gardens and premium landscape work."
    }`,
    image: ({ "10mm": grass10mmImg, "15mm": grass15mmImg, "20mm": grass20mmImg, "30mm": grass30mmImg, "40mm": grass40mmImg, "50mm": grass50mmImg } as Record<string, string>)[mm] ?? grassImg,
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
    variations: ["4.5mm", "5.5mm", "Gym rubber tiles"],
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
    id: "curtains",
    name: "Curtains",
    category: "curtains",
    description:
      "Made-to-measure curtains — sheers, linens, jute, velvets and blackout linings with tracks and motorisation.",
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
    variations: ["Wood & marble", "Fluted panel", "Full-wall unit","custom designs"],
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
export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}