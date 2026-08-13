import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatsRow({ tone = "default" }: { tone?: "default" | "light" }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {siteConfig.stats.map((s) => (
        <div key={s.label}>
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span
              className={`font-display text-5xl ${tone === "light" ? "text-ivory" : "text-foreground"}`}
            >
              <Counter value={s.value} />
              <span className="text-gold">{s.suffix}</span>
            </span>
            <span
              className={`mt-3 block text-[0.62rem] uppercase tracking-[0.24em] ${
                tone === "light" ? "text-ivory/60" : "text-muted-foreground"
              }`}
            >
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
