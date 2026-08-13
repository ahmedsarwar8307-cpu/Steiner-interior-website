import { siteConfig } from "@/config/site";

/** Build a wa.me link with a pre-filled contextual message. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: `Hello ${siteConfig.name}, I would like to know more about your interior products and services.`,
  consultation: `Hello ${siteConfig.name}, I would like to book a free interior design consultation.`,
  quote: `Hello ${siteConfig.name}, I would like to request a quotation.`,
  category: (category: string) =>
    `Hello, I am interested in your ${category} products. Please provide more information.`,
  product: (product: string) =>
    `Hello, I am interested in ${product}. Please provide details and pricing.`,
  service: (service: string) =>
    `Hello, I would like to discuss your ${service} service. Please provide more information.`,
  project: (project: string) =>
    `Hello, I saw your project "${project}" on your website and would like to discuss a similar project.`,
};
