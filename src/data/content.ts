export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name key resolved in the UI
};

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    description: "Concept development, material boards and full design direction for your space.",
    icon: "PencilRuler",
  },
  {
    slug: "residential-interior-solutions",
    title: "Residential Interiors",
    description: "Complete interior solutions for homes, apartments and villas.",
    icon: "Home",
  },
  {
    slug: "commercial-interior-solutions",
    title: "Commercial Interiors",
    description: "Offices, retail and hospitality interiors delivered on schedule.",
    icon: "Building2",
  },
  {
    slug: "flooring-installation",
    title: "Flooring Installation",
    description: "Precision installation of wooden, vinyl, SPC, carpet and sports flooring.",
    icon: "Layers",
  },
  {
    slug: "wall-decoration",
    title: "Wall Decoration",
    description: "Panels, wallpapers, mouldings and textured finishes for feature walls.",
    icon: "LayoutPanelLeft",
  },
  {
    slug: "window-blinds-installation",
    title: "Window Blinds",
    description: "Measurement, supply and fitting of every blind system we carry.",
    icon: "Blinds",
  },
  {
    slug: "curtain-solutions",
    title: "Curtain Solutions",
    description: "Made-to-measure drapery, tracks, sheers and motorised systems.",
    icon: "Wind",
  },
  {
    slug: "custom-media-walls",
    title: "Custom Media Walls",
    description: "Designed, fabricated and installed media walls with hidden cabling.",
    icon: "MonitorPlay",
  },
  {
    slug: "renovation",
    title: "Renovation",
    description: "Refurbishment of tired interiors with minimal disruption.",
    icon: "Hammer",
  },
  {
    slug: "space-transformation",
    title: "Space Transformation",
    description: "End-to-end reworking of layout, light, surface and finish.",
    icon: "Sparkles",
  },
];

export const whyChooseUs = [
  { title: "Premium Quality", description: "Materials sourced from trusted local and international mills.", icon: "Gem" },
  { title: "Wide Product Selection", description: "Thirteen product categories under a single roof.", icon: "LayoutGrid" },
  { title: "Experienced Team", description: "Designers and installers who have delivered hundreds of spaces.", icon: "Users" },
  { title: "Professional Installation", description: "Clean, measured, on-schedule fitting by in-house teams.", icon: "Ruler" },
  { title: "Customized Solutions", description: "Every specification tailored to your space and budget.", icon: "Settings2" },
  { title: "Reliable Service", description: "Clear timelines, honest updates and after-sales support.", icon: "ShieldCheck" },
  { title: "Modern Designs", description: "Current finishes and detailing, never dated catalogues.", icon: "Palette" },
  { title: "Customer Satisfaction", description: "We hand over only when you are completely satisfied.", icon: "Heart" },
];

export type Testimonial = { name: string; role: string; rating: number; review: string; initials: string };

/** Placeholder reviews — replace with real customer testimonials. */
export const testimonials: Testimonial[] = [
  {
    name: "Muhammad Waqas",
    role: "CEO, LentroTech pvt ltd",
    rating: 5,
    initials: "MW",
    review:
      "The team measured, advised and installed our wooden flooring within a week. The finish is flawless and the site was left spotless.",
  },
  {
    name: "Sohail Azeem",
    role: "CEO, Unicorn International",
    rating: 5,
    initials: "SA",
    review:
      "We refitted our entire office floor with carpet tiles and roller blinds. Coordination was easy and the work happened around our schedule.",
  },
  {
    name: "Raja Afaq",
    role: "Villa Owner",
    rating: 5,
    initials: "RA",
    review:
      "Their media wall design changed the whole character of our lounge. Excellent craftsmanship and genuinely helpful design guidance.",
  },
  {
    name: "Irfan Khan",
    role: "CEO, Saizon Cafe",
    rating: 4,
    initials: "IK",
    review:
      "Great range of wallpapers and blinds to choose from, with honest recommendations rather than a hard sell.",
  },
  {
    name: "Muhammad Adil",
    role: "Manager, Bali Tech BPO",
    rating: 5,
    initials: "MA",
    review:
      "Our showroom flooring and stone panels were delivered exactly as specified and installed ahead of the opening date.",
  },
];

export const faqs = [
  {
    q: "What types of flooring do you provide?",
    a: "We supply and install wooden flooring (Chinese, German and Turkish), vinyl flooring (local and imported), SPC flooring, woolen carpet, artificial grass and sports flooring.",
  },
  {
    q: "Do you provide installation services?",
    a: "Yes. Every product we sell can be installed by our own trained teams, including site measurement, subfloor preparation, fitting and finishing.",
  },
  {
    q: "What types of wall panels are available?",
    a: "We offer PVC panels, WPC fluted panels and PU stone panels, alongside wallpapers and decorative wall mouldings.",
  },
  {
    q: "Do you provide imported flooring?",
    a: "Yes. We carry imported vinyl and European-engineered wooden flooring in addition to regionally produced ranges.",
  },
  {
    q: "What types of blinds do you offer?",
    a: "Wooden, zebra, roller, mini and vertical blinds — all made to measure, with motorised options available.",
  },
  {
    q: "What artificial grass thicknesses are available?",
    a: "We stock 10mm, 15mm, 20mm, 30mm, 40mm and 50mm pile heights for interior, terrace and landscape applications.",
  },
  {
    q: "Can I request a product quotation?",
    a: "Absolutely. Send us the product and approximate area on WhatsApp, or use the contact form, and we will share a detailed quotation.",
  },
  {
    q: "Do you provide interior design consultation?",
    a: "Yes. We offer a free initial consultation to review your space, discuss materials and prepare a recommended specification.",
  },
  {
    q: "How can I contact you?",
    a: "WhatsApp is the fastest route and is available on every page. You can also call us, email, or visit the showroom during working hours.",
  },
];

export type ProcessStep = { title: string; description: string };

export const processSteps: ProcessStep[] = [
  { title: "Consultation", description: "We discuss your space, style and budget — in the showroom or on WhatsApp." },
  { title: "Site Measurement", description: "Our team visits, measures precisely and checks subfloor and wall conditions." },
  { title: "Material Selection", description: "You choose finishes from physical samples, with guidance on durability and cost." },
  { title: "Installation", description: "Our own installers complete the work on schedule and hand over a finished space." },
];
