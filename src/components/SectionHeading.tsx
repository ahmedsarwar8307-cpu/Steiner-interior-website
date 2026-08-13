import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-4 text-4xl leading-[1.08] md:text-5xl",
          tone === "light" ? "text-ivory" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-6 h-px w-14 bg-gold",
          align === "center" && "mx-auto",
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-6 text-[0.95rem] leading-relaxed",
            tone === "light" ? "text-ivory/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
