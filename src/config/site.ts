export const siteConfig = {
  name: "STEINER Design Interior",
  tagline: "The New Way of Life",
  shortDescription:
    "A premium interior products studio specialising in flooring, wall solutions, window transformations and complete interior transformations.",

  /** WhatsApp number in international format, digits only (no +, spaces or dashes). */
  whatsappNumber: "923114978508",

  phoneDisplay: "+92 311 4978508 / +92 347 5785993",
  phoneHref: "tel:+923114978508",
  email: "steinerdesigninterior@gmail.com",
  address:
    "Office #2&3, Basement UBL Bank, Aries Tower, Shamsabad, Murree Road, Rawalpindi",

  hours: [
    { days: "Monday – Sunday", time: "10:00 AM – 8:00 PM" },
    { days: "Friday", time: "Only by appointment" },
  ],

  /** Replace with your Google Maps embed URL. */
  mapEmbedUrl: "https://www.google.com/maps?q=Steiner+Design+Interior,+Main+Murree+Rd,+Shamsabad,+Rawalpindi&output=embed",

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/steinerdesigninterior?igsh=MW9sa2Q2bm5ycmFydQ==" },
    { label: "Facebook", href: "https://www.facebook.com/share/1CCSF2ZuJd/" },
    { label: "TikTok", href: "https://www.tiktok.com/@ahsan_steiner?_r=1&_t=ZS-98qibDfLZnY" },
    
  ],

  /** Placeholder statistics — update with real figures. */
  stats: [
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 250, suffix: "+", label: "Happy Clients" },
    { value: 6, suffix: "+", label: "Years of Experience" },
    { value: 25, suffix: "+", label: "Products Available" },
  ],
} as const;