import woodenImg from "@/assets/cat-wooden-flooring.jpg";
import vinylImg from "@/assets/cat-vinyl-flooring.jpg";
import localvinylImg from "@/assets/local-vinyl-flooring.jpeg";
import importedvinylImg from "@/assets/imported-vinyle-flooring.jpeg";
import spcImg from "@/assets/spc-flooring.jpeg";
import panelsImg from "@/assets/cat-wall-panels.jpg";
import pvcpanelImg from "@/assets/pvc-panel.jpeg";
import wpcpanelImg from "@/assets/wpc-panel.jpeg";
const wpcpanelGallery = Object.values(
  import.meta.glob("@/assets/wpc-panel/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
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
const wallmouldingGallery = Object.values(
  import.meta.glob("@/assets/wall-moulding/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
import carpetImg from "@/assets/cat-woolen-carpet.jpg";
import carpetTilesImg from "@/assets/cat-carpet-tiles.jpeg";
import ppcarpetTilesImg from "@/assets/pp-carpet-tile.jpeg";
const ppCarpettilesGallery = Object.values(
  import.meta.glob("@/assets/pp-carpettile/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
import nyloncarpetTilesImg from "@/assets/nylon-carpet-tile.jpeg";
import curtainsImg from "@/assets/curtains.jpeg";
import mediaWallImg from "@/assets/media-wall.jpeg";
import germanWoodenImg from "@/assets/german-wooden-flooring.jpeg";
const wfGermanGallery = Object.values(
  import.meta.glob("@/assets/wf-german/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
import turkishWoodenImg from "@/assets/turkish-wooden-flooring.jpeg";
import chineseWoodenImg from "@/assets/chinese-wooden-flooring.jpeg";
const wfChineseGallery = Object.values(
  import.meta.glob("@/assets/wf-chinese/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
import pustonepanelsImg from "@/assets/pu-stone-panel.jpeg";
const pustoneGallery = Object.values(
  import.meta.glob("@/assets/pu-stone/*.{jpg,jpeg,png}", { eager: true, import: "default" })
) as string[];
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
   images?: string[];
  pdfs?: { name: string; file: string }[];
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
   image: wfChineseGallery[0]!,
     images: wfChineseGallery,  // add this line for a gallery
  pdfs: [{ name: "HDF Reinforced Wood Flooring", file: "/pdf/HDFWF-8mm-chinese.pdf" }],  // add this for PDFs
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
    image: wfGermanGallery[0]!,
     images: wfGermanGallery,  // ← its own real photo
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
     pdfs: [{ name: "Effect Series AGT Flooring 8mm", file: "/pdf/EFFECT SERIES 8MM.pdf" },
     { name: "Effect Series AGT Flooring 12mm", file: "/pdf/EFFECT SERIES 12MM.pdf" }],
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
    images: ppCarpettilesGallery,  
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
      "Where our PP carpet tiles are built for everyday offices, this is the step up for spaces that take a genuine beating — retail floors, hospitality areas, and busy commercial spaces with constant foot traffic. The pile is denser and the backing's reinforced, so it holds up to far more wear before it starts looking tired. We'd recommend this over PP specifically when a client tells us the space sees heavy daily traffic, not just a normal office headcount.",
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
    images: wpcpanelGallery,
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
    images: pustoneGallery,  
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
    description: "These are the ones we recommend when a client wants more control than a plain roller blind gives them. The fabric has alternating sheer and solid stripes, so sliding it up or down lets you shift between soft, filtered light and full privacy without ever fully opening or closing the blind. Steiner Design Interior fits these a lot in living rooms and home offices, where people tend to adjust the light throughout the day rather than leave it one way.",
    image: zebrablindsImg,
    features: ["Day / night banding", "Modern minimal look", "Chain or motorised", "Wide fabric range"],
    variations: ["Sheer", "Blackout backing", "Motorised"],
  },
  {
    id: "roller-blind",
    name: "Roller Blinds",
    category: "window-blinds",
    subcategory: "roller",
    description: "If a client just wants something clean and low-fuss, this is usually where we start. It's a single flat fabric that rolls up out of the way completely, so there's no bulk or stacking at the top of the window like you get with some other blind types. We offer it in sunscreen, dim-out, and full blackout fabrics, so the same simple style works whether it's going in an office, a living room, or a bedroom.",
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
    description: "These are built for smaller or awkward windows where a full-size blind doesn't really make sense — kitchens, bathrooms, and utility spaces mostly. The aluminium slats are slim, so they don't eat up much depth on the window frame, and they're moisture resistant, which matters in spaces like these more than people expect. Steiner Design Interior usually recommends these specifically when a client's tried a regular blind in a small window before and found it too bulky.",
    image: miniblindsImg,
    features: ["Slim profile", "Moisture resistant", "Precise tilt", "Economical"],
    variations: ["Matt", "wood texture"],
  },
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    category: "window-blinds",
    subcategory: "vertical",
    description: "For wide windows or sliding doors, horizontal blinds usually don't work well — that's where vertical blinds come in. The louvres run top to bottom and rotate to control light, and because they stack neatly to one side, they don't interfere with the door opening and closing. We install these often in offices and homes with large glazed walls, where the sheer width of the window rules out most other blind options.",
    image: verticalblindsImg,
    features: ["Best for wide spans", "Rotating louvres", "Replaceable slats", "Office friendly"],
    variations: ["Wood texture", "Hard Fabric"],
  },
  
  {
  id: "artificial-grass-10mm",
  name: "Artificial Grass 10mm",
  category: "artificial-grass",
  subcategory: "10mm",
  description:
    "This is our thinnest pile, and we mainly recommend it for wall decor and feature walls, not the ground — it gives a clean, green textured surface indoors without any of the upkeep real plants need. It can be used on flooring too, for balconies or small indoor corners, but wall decor is genuinely where most clients end up using this size.",
  image: grass10mmImg,
  features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
  variations: ["Lush Green","Natural Touch","12ft roll width", "Custom cut"],
},
{
  id: "artificial-grass-15mm",
  name: "Artificial Grass 15mm",
  category: "artificial-grass",
  subcategory: "15mm",
  description:
    "Like our 10mm, this is mainly used for wall decor and feature walls rather than as ground cover — slightly denser, so it has a bit more texture and depth up close. It can still be used on the ground for balconies or small indoor spaces if that's what a client wants, but most of our installs at this size are decorative, not functional flooring.",
  image: grass15mmImg,
  features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
  variations: ["Lush Green","Natural Touch","12ft roll width", "Custom cut"],
},
{
  id: "artificial-grass-20mm",
  name: "Artificial Grass 20mm",
  category: "artificial-grass",
  subcategory: "20mm",
  description:
    "This is where we start recommending grass for actual outdoor use — terraces, play areas, and lighter garden spaces. It's got enough pile height to feel comfortable underfoot, but it's not so dense that it's a hassle to maintain. A common middle-ground pick when a client wants real outdoor grass without going for the heaviest option we carry.",
  image: grass20mmImg,
  features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
  variations: ["Lush Green","Natural Touch","12ft roll width", "Custom cut"],
},
{
  id: "artificial-grass-30mm",
  name: "Artificial Grass 30mm",
  category: "artificial-grass",
  subcategory: "30mm",
  description:
    "Same use case as our 20mm — terraces and play areas — but noticeably fuller and lusher underfoot. If a client's comparing the two in person, this is usually the one that visually reads as nicer grass, though it costs a bit more and holds slightly more heat in direct sun.",
  image: grass30mmImg,
  features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
  variations: ["Lush Green","Natural Touch","12ft roll width","6ft roll width" , "Custom cut"],
},
{
  id: "artificial-grass-40mm",
  name: "Artificial Grass 40mm",
  category: "artificial-grass",
  subcategory: "40mm",
  description:
    "This is where we move into proper garden and landscaping territory. The pile is dense enough to hold its shape over a large lawn area and genuinely looks like grass from normal viewing distance, not just up close. Steiner Design Interior usually installs this for clients doing a full garden makeover rather than a small patch.",
  image: grass40mmImg,
  features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
  variations: ["Lush Green","Natural Touch","12ft roll width","6ft roll width" , "Custom cut"],
},
{
  id: "artificial-grass-50mm",
  name: "Artificial Grass 50mm",
  category: "artificial-grass",
  subcategory: "50mm",
  description:
    "Our thickest, most premium pile — for clients who want their lawn to look genuinely lush and full, not just presentable. It's the most realistic-looking option we carry from a distance, though it's also the highest maintenance in terms of keeping the fibres standing upright over time. We'd recommend it for feature lawns and premium landscape work specifically, not high-traffic play areas.",
  image: grass50mmImg,
  features: ["UV stabilised fibres", "Permeable drainage backing", "Non-toxic & pet friendly", "Low maintenance"],
  variations: ["Lush Green","Natural Touch","12ft roll width", "6ft roll width" ,"Custom cut"],
},
  {
    id: "sports-flooring",
    name: "Sports Flooring",
    category: "sports-flooring",
    description:
      "We install this for indoor courts, gyms, and multi-purpose activity halls specifically — badminton and basketball courts, school gymnasiums, martial arts and fitness studios, and community sports halls are the most common projects we do with this. It has built-in shock absorption, so it reduces joint strain during high-impact activity, and a slip-resistant surface that still performs safely even when the floor gets sweaty or damp. We also do the court line-marking as part of the install, so you're not left sourcing that separately — available in 4.5mm and 5mm thicknesses, or as gym rubber tiles if it's a weights area rather than a court.",
    image: sportsImg,
    features: ["Shock absorption", "Slip-resistant surface", "Line marking service", "Indoor court grades"],
    variations: ["4.5mm", "5mm", "Gym rubber tiles"],
  },
  {
    id: "wall-mouldings",
    name: "Wall Mouldings",
    category: "wall-mouldings",
    description:
      "These are the small details that usually end up making the biggest difference to how finished a room feels — cornices where the wall meets the ceiling, skirting along the floor, and panel trims that break up a plain wall into something more architectural. Steiner Design Interior fits these using PS, PU, or MDF profiles depending on the room and budget, and everything's mitre-cut on site so corners line up properly instead of looking like an afterthought. We do this a lot as a finishing step on rooms we've already floored or panelled, but it works just as well as a standalone upgrade to an existing space.",
    image: mouldingImg,
    images: wallmouldingGallery,
    features: [ "Moisture resistant options", "Mitre-cut on site", "Custom layouts"],
    variations: ["PVC profiles", "PU profiles", "MDF profiles"],
  },
  {
    id: "woolen-carpet",
    name: "Woolen Carpet",
    category: "woolen-carpet",
    description:
      "This is our option for clients who want an actual soft, warm floor underfoot — not vinyl or SPC pretending to be soft, real wool wall-to-wall carpeting. It's noticeably better at dampening sound than hard flooring, which matters more than people expect in bedrooms and quiet living spaces above another floor. We offer it plain or patterned, and can also do custom rug sizing if you want it as a defined area rather than covering the whole room.",
    image: carpetImg,
    features: ["Natural wool blend", "Acoustic insulation", "Stain-treated options", "Wall-to-wall installation"],
    variations: ["Plain", "Patterned", "Custom rug sizes"],
  },

  {
    id: "curtains",
    name: "Curtains",
    category: "curtains",
    description:
      "Every set we make is measured for the specific window, not sold off a rack, so the fit is always right — we offer sheer, blackout, and layered combinations depending on how much light control a client actually wants. Pleat style makes a real visual difference too — pinch pleat and eyelet give a more structured, formal look, while wave fold sits looser and more relaxed. For bedrooms or media rooms specifically, we can also add a motorised track, so you're not manually pulling heavy blackout curtains every night.",
    image: curtainsImg,
    features: ["Made to measure", "Sheer & blackout layers", "Motorised track option", "On-site measurement"],
    variations: ["Pinch pleat", "Wave / ripple fold", "Eyelet", "Roman"],
  },
  {
    id: "media-walls",
    name: "Media Walls",
    category: "media-walls",
    description:
      "This is one of our more involved builds — we design it around your actual TV size, seating layout, and the room's proportions first, then bring in materials like fluted wood, stone, or marble inserts to give it real depth rather than a flat panel with a TV mounted on it. Cable management is built in from the start, so there's nothing hanging or visible once it's finished, and we can integrate LED lighting into the design if that's the look you're after. We usually show clients a 3D preview before we start building, so there are no surprises once installation begins.",
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