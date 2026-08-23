import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";
import { categories } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/videos", label: "Project Videos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-lux grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl">{siteConfig.name}</p>
          <p className="mt-2 text-[0.58rem] uppercase tracking-[0.34em] text-gold">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
            {siteConfig.shortDescription}
          </p>
          <a
            href={whatsappUrl(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-gold"
          >
            <WhatsAppIcon className="size-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/70">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Products</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/70">
            {categories.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products"
                  search={{ category: c.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="text-gold/90 transition-colors hover:text-gold">
                View all products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Contact</h3>
          <ul className="mt-6 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={siteConfig.phoneHref} className="hover:text-gold">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
                    <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-ivory/60">
            {siteConfig.socials.map((s) => (
              <a key={s.label} href={s.href} className="transition-colors hover:text-gold">
                {s.label}
              </a>
            ))}
          </div>
          {siteConfig.mapEmbedUrl ? (
            <iframe
              title="Showroom location map"
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="180"
              loading="lazy"
              className="mt-6 rounded-sm border border-ivory/10"
            />
          ) : null}
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
