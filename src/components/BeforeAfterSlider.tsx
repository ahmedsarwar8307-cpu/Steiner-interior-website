import { useCallback, useRef, useState } from "react";

type Props = {
  /** Replace with real project photography when available. */
  before?: string;
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/**
 * Drag-to-compare Before / After slider.
 * Pass `before` and `after` image URLs; without them a placeholder frame is shown.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  if (!before || !after) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-sm border border-dashed border-border bg-secondary/60 p-8 text-center">
        <p className="max-w-sm text-sm text-muted-foreground">
          Before &amp; After comparison is ready — add a pair of project photographs to{" "}
          <span className="text-foreground">BeforeAfterSlider</span> to activate the drag slider.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full cursor-ew-resize select-none overflow-hidden rounded-sm"
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img src={after} alt={afterLabel} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeLabel}
          loading="lazy"
          className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
          style={{ width: ref.current?.getBoundingClientRect().width }}
        />
      </div>
      <div className="absolute inset-y-0 w-px bg-ivory" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/60 bg-ivory/25 text-ivory backdrop-blur">
          ⇔
        </span>
      </div>
      <span className="absolute bottom-4 left-4 rounded-sm bg-charcoal/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-ivory">
        {beforeLabel}
      </span>
      <span className="absolute bottom-4 right-4 rounded-sm bg-charcoal/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-ivory">
        {afterLabel}
      </span>
    </div>
  );
}
