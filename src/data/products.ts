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
      "This is usually the flooring we recommend when a client has a tight budget but still wants a real wood look. It's an MDF/HDF laminate with a realistic grain emboss on top, so from a few feet away it reads as genuine timber — it just isn't built for heavy daily traffic, which is why we mostly install it in bedrooms and lower-traffic living areas. It clicks together without glue, so fitting is quick, and Steiner Design Interior stocks it in matte and high-gloss finishes, plus herringbone and 3D parquet patterns if you want something more than a plain plank look.",
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
      "If a client asks us for the option that'll genuinely last the longest, this is usually what we point them to. It's European-engineered with a moisture-treated HDF core and a higher abrasion rating than most laminates on the market, which in plain terms means it resists scratching and daily wear much better over time. We stock it in oak, walnut, and ash tones, and it comes with a longer warranty than our other wooden flooring lines — worth the extra cost if you're flooring a space you don't want to redo again in five years.",
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
      "This one sits right in the middle for us — better wear resistance than our budget laminate, without stepping all the way up to German pricing. It has a warm, natural grain finish with a low-gloss surface, so it doesn't have that overly shiny laminate look some cheaper floors do. We install this a lot in family homes specifically, since it holds up well to daily use without asking clients to pay a premium for it.",
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
      "When a client needs a floor down fast and isn't working with a big budget, this is usually the answer. It's manufactured locally, which keeps the cost down and means Steiner Design Interior can usually get it in stock and installed quickly without waiting on imports. It's fully water resistant, so it works fine in kitchens and bathrooms, and we offer it as both sheet rolls and individual planks depending on the space.",
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
      "This is the step up from our local vinyl range, and the difference is mostly in the wear layer — it's noticeably thicker, so it holds up better under commercial-level foot traffic, and the wood and stone textures are more convincing up close. We'd recommend this over the local option for offices, retail spaces, or any home where you want vinyl's practicality but don't want it to look obviously like vinyl.",
    image: importedvinylImg,
    features: ["Thick wear layer", "Realistic wood & stone texture", "Dimensionally stable", "Commercial grade"],
    variations: ["1.3mm", "5mm", "Matt & semi-gloss finishes"],
  },
  {
    id: "spc-flooring",
    name: "SPC Flooring",
    category: "spc-flooring",
    description:
      "At Steiner Design Interior, SPC is usually what we recommend when a client tells us they're tired of replacing flooring every few years. It's built with a rigid stone-polymer core, which basically means it won't dent, swell, or warp even if water sits on it — so it works well in kitchens, offices, or anywhere that gets a lot of daily traffic. If you like the look of wood or marble but don't want the upkeep that comes with it, this is usually the middle ground we point clients toward.",
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
      "For office spaces, we usually steer clients away from regular carpet and toward tiles like these instead — here's why. If one tile gets stained or damaged, we can lift and swap just that one piece instead of redoing the whole floor. Steiner Design Interior fits these often in offices and commercial spaces, especially around workstations and server areas, since they're built to resist static buildup too.",
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
      "These are the fastest way we know to transform a wall without a long installation process. They're lightweight PVC sheets printed with a marble or wood-texture finish, they install dry (no waiting on adhesive to cure), and they wipe clean easily — genuinely practical for kitchens, bathrooms, or any wall that gets touched or splashed often. Steiner Design Interior keeps these in marble effect, wood texture, and plain matte finishes.",
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
      "If a client wants a feature wall that also helps with room acoustics, this is what we usually suggest. They're a wood-plastic composite with a fluted, grooved surface — the grooves aren't just decorative, they actually help soften sound in the room, which makes a real difference in lounges or media rooms. They're also termite-proof, unlike solid timber slats, and we install them with concealed fixings so you don't see a single screw on the finished wall.",
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
      "A lot of clients come to us wanting a stone feature wall, but real stone is heavy and expensive to install properly. That's exactly why Steiner Design Interior stocks PU stone panels — they give you the same textured, natural stone look, but they're made from lightweight polyurethane, so they go up faster and don't need extra wall reinforcement. We install these often in lounges, media walls, and showroom entrances where clients want a strong first impression without the cost of real stone.",
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
      "This is our widest wallpaper range by far, covering everything from classic florals to more contemporary prints, so it's usually where we start when a client isn't sure yet what direction they want. It's a washable surface, which matters more than people expect — hallways and dining rooms get marked up over time, and being able to wipe it down keeps it looking new for longer. Available as non-woven, vinyl-coated, or 3D embossed depending on the texture you're after..",
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
      "Where our Chinese range is about variety, this range is about finish quality — Korean wallpaper mills are known for tighter print consistency and colours that don't fade or shift as fast under sunlight. It has a lower sheen than most wallpaper, which gives rooms a more refined, less printed look. Steiner Design Interior usually recommends this range specifically when a client cares more about how the wallpaper ages over the next few years than the upfront cost.",
    image: koreanwallpaperImg,
    features: ["Premium texture", "Colour-fast pigments", "Low sheen finishes", "Durable surface"],
    variations: ["Plain textures", "Micro patterns", "Silk effect"],
  },
  {
    id: "wooden-blinds",
    name: "Wooden Blinds",
    category: "window-blinds",
    subcategory: "wooden",
    description: "These give you the warmth of real wood slats with the same tilt control you'd get from any venetian blind — open and close the angle to control how much light gets in without fully raising them. We offer both natural wood and a faux-wood option, which looks nearly identical but handles humidity better, so we'd usually recommend faux wood for kitchens or bathrooms and real wood everywhere else. Custom widths are made to order, and you can choose cord or wand operation depending on what's more convenient for the space.",
    image: woodenblindsImg,
    features: ["Tilt light control", "Natural & faux wood", "Custom widths", "Cord or wand operation"],
    variations: ["venetian", "faux wood"],
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