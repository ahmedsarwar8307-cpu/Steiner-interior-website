import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { services } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const field =
  "h-12 w-full rounded-sm border border-border bg-card px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";
const labelCls = "block text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground";

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function set(key: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[\d+\-\s()]{7,}$/.test(values.phone.trim())) next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please check the highlighted fields.");
      return;
    }
    const text = [
      `Hello, my name is ${values.name}.`,
      values.interest ? `I am interested in: ${values.interest}.` : "",
      values.message,
      `Phone: ${values.phone} | Email: ${values.email}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your enquiry…");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input
            id="name"
            className={`${field} mt-2`}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={`${field} mt-2`}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+92 300 0000000"
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`${field} mt-2`}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="interest" className={labelCls}>
            Service / Product
          </label>
          <select
            id="interest"
            className={`${field} mt-2`}
            value={values.interest}
            onChange={(e) => set("interest", e.target.value)}
          >
            <option value="">Select an option</option>
            <optgroup label="Products">
              {categories.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Services">
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full rounded-sm border border-border bg-card p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your space, area size and what you have in mind…"
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
        ) : null}
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Send Enquiry
      </Button>
      <p className="text-xs text-muted-foreground">
        Your enquiry opens in WhatsApp so our team can reply immediately.
      </p>
    </form>
  );
}
