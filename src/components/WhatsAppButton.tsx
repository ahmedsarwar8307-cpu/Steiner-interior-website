import { Button, type ButtonProps } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  message: string;
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

/** Reusable WhatsApp CTA. The number lives only in src/config/site.ts. */
export function WhatsAppButton({
  message,
  label = "WhatsApp Us",
  variant = "whatsapp",
  size = "default",
  className,
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-4" />
        {label}
      </a>
    </Button>
  );
}
