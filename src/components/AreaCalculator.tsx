import { useState } from "react";
import { Ruler, PanelsTopLeft, ScrollText, Blinds as BlindsIcon, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  calculateFlooring,
  calculateWallPanels,
  calculateWallpaper,
  calculateBlinds,
  type Opening,
  type CalcType,
} from "@/lib/calculator";

const TABS: { id: CalcType; label: string; icon: typeof Ruler }[] = [
  { id: "flooring", label: "Flooring", icon: Ruler },
  { id: "panels", label: "Wall Panels", icon: PanelsTopLeft },
  { id: "wallpaper", label: "Wallpaper", icon: ScrollText },
  { id: "blinds", label: "Window Blinds", icon: BlindsIcon },
];

const inputClass =
  "h-11 w-full rounded-sm border border-border bg-card px-3.5 text-sm outline-none transition-colors focus:border-gold";
const labelClass = "text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground";

function num(v: string) {
  const n = Number.parseFloat(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function AreaCalculator({ defaultTab = "flooring" }: { defaultTab?: CalcType }) {
  const [tab, setTab] = useState<CalcType>(defaultTab);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
      <div>
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                                "flex min-h-11 items-center gap-2 rounded-full border px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.14em] transition-all duration-300",
                tab === t.id
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground",
              )}
            >
              <t.icon className="size-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-sm border border-border bg-card p-6 sm:p-8">
          {tab === "flooring" ? <FlooringCalc /> : null}
          {tab === "panels" ? <PanelsCalc /> : null}
          {tab === "wallpaper" ? <WallpaperCalc /> : null}
          {tab === "blinds" ? <BlindsCalc /> : null}
        </div>
      </div>
    </div>
  );
}

function ResultShell({
  label,
  value,
  unit,
  note,
  whatsappMessage,
}: {
  label: string;
  value: string;
  unit: string;
  note?: string;
  whatsappMessage: string;
}) {
  return (
    <div className="mt-8 rounded-sm border border-gold/30 bg-secondary px-6 py-8 text-center">
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-5xl text-foreground">
        {value}
        <span className="ml-2 text-lg text-muted-foreground">{unit}</span>
      </p>
      {note ? <p className="mt-3 text-sm text-gold">{note}</p> : null}
      <p className="mx-auto mt-5 max-w-sm text-[0.72rem] leading-relaxed text-muted-foreground">
        This is an estimate only. Actual measurements may vary — our team will confirm exact
        quantities on-site before installation.
      </p>
      <div className="mt-5 flex justify-center">
        <WhatsAppButton message={whatsappMessage} label="Get This Quote on WhatsApp" size="sm" />
      </div>
    </div>
  );
}

function FlooringCalc() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const l = num(length);
  const w = num(width);
  const result = l > 0 && w > 0 ? calculateFlooring(l, w) : null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Room Length (ft)</label>
          <input
            type="number"
            min="0"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="e.g. 15"
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <div>
          <label className={labelClass}>Room Width (ft)</label>
          <input
            type="number"
            min="0"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 12"
            className={cn(inputClass, "mt-2")}
          />
        </div>
      </div>

      {result ? (
        <ResultShell
          label="Flooring Needed (incl. 7% wastage)"
          value={result.total.toFixed(1)}
          unit="sq ft"
          whatsappMessage={`Hi, I calculated I need approximately ${result.total.toFixed(
            1,
          )} sq ft of flooring for a ${l}ft x ${w}ft room. Please confirm pricing and availability.`}
        />
      ) : null}
    </div>
  );
}

function PanelsCalc() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("9.5");
  const [panelWidth, setPanelWidth] = useState("6");
  const [openings, setOpenings] = useState<Opening[]>([]);

  const w = num(width);
  const h = num(height);
  const pw = num(panelWidth);
  const result = w > 0 && h > 0 && pw > 0 ? calculateWallPanels(w, h, pw, openings) : null;

  function addOpening() {
    setOpenings((o) => [...o, { width: 0, height: 0 }]);
  }
  function updateOpening(i: number, field: keyof Opening, value: string) {
    setOpenings((o) => o.map((op, idx) => (idx === i ? { ...op, [field]: num(value) } : op)));
  }
  function removeOpening(i: number) {
    setOpenings((o) => o.filter((_, idx) => idx !== i));
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Wall Width (ft)</label>
          <input
            type="number"
            min="0"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 10"
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <div>
          <label className={labelClass}>Wall Height (ft)</label>
          <input
            type="number"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={cn(inputClass, "mt-2")}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className={labelClass}>Panel Width</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {["4.5", "6", "10", "16"].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setPanelWidth(v)}
              className={cn(
                               "min-h-11 rounded-full border px-4 py-2.5 text-[0.7rem] transition-all duration-300",
                panelWidth === v
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-gold/50",
              )}
            >
              {v}"
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        {openings.map((o, i) => (
          <div key={i} className="mb-3 flex items-end gap-2">
            <div className="flex-1">
              <label className={labelClass}>Window/Door {i + 1} Width (ft)</label>
              <input
                type="number"
                min="0"
                value={o.width || ""}
                onChange={(e) => updateOpening(i, "width", e.target.value)}
                className={cn(inputClass, "mt-2")}
              />
            </div>
            <button
              type="button"
              onClick={() => removeOpening(i)}
              className="mb-0.5 flex size-11 shrink-0 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
              aria-label="Remove opening"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
        <Button type="button" variant="outline" size="sm" onClick={addOpening}>
          <Plus className="size-3.5" /> Add a window or door
        </Button>
      </div>

      {result ? (
        <ResultShell
          label={`Panels Needed (${pw}" width, ${h}ft wall)`}
          value={String(result.panels)}
          unit="panels"
                   {...(openings.length
            ? { note: "Openings reduce total wall width used in this estimate." }
            : {})}
          whatsappMessage={`Hi, I calculated I need approximately ${result.panels} wall panels (${pw}" width) for a ${w}ft x ${h}ft wall. Please confirm pricing and availability.`}
        />
      ) : null}
    </div>
  );
}

function WallpaperCalc() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const w = num(width);
  const h = num(height);
  const result = w > 0 && h > 0 ? calculateWallpaper(w, h) : null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Wall Width (ft)</label>
          <input
            type="number"
            min="0"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 10"
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <div>
          <label className={labelClass}>Wall Height (ft)</label>
          <input
            type="number"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 9"
            className={cn(inputClass, "mt-2")}
          />
        </div>
      </div>

      {result ? (
        <ResultShell
          label="Wallpaper Rolls Needed (each roll ≈ 50 sq ft)"
          value={String(result.rolls)}
          unit={result.rolls === 1 ? "roll" : "rolls"}
          whatsappMessage={`Hi, I calculated I need approximately ${result.rolls} roll(s) of wallpaper for a ${w}ft x ${h}ft wall. Please confirm pricing and availability.`}
        />
      ) : null}
    </div>
  );
}

function BlindsCalc() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const w = num(width);
  const h = num(height);
  const result = w > 0 && h > 0 ? calculateBlinds(w, h) : null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Window Width (ft)</label>
          <input
            type="number"
            min="0"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 5"
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <div>
          <label className={labelClass}>Window Height (ft)</label>
          <input
            type="number"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 5"
            className={cn(inputClass, "mt-2")}
          />
        </div>
      </div>

      {result ? (
        <ResultShell
          label="Blind Size"
          value={result.billedArea.toFixed(1)}
          unit="sq ft"
                  {...(result.minimumApplied
            ? { note: "Minimum charge of 16 sq ft applied." }
            : {})}
          whatsappMessage={`Hi, I calculated a blind size of approximately ${result.billedArea.toFixed(
            1,
          )} sq ft for a ${w}ft x ${h}ft window. Please confirm pricing and availability.`}
        />
      ) : null}
    </div>
  );
}