import {
  Blinds,
  Building2,
  Gem,
  Hammer,
  Heart,
  Home,
  LayoutGrid,
  LayoutPanelLeft,
  Layers,
  MonitorPlay,
  Palette,
  PencilRuler,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Blinds,
  Building2,
  Gem,
  Hammer,
  Heart,
  Home,
  LayoutGrid,
  LayoutPanelLeft,
  Layers,
  MonitorPlay,
  Palette,
  PencilRuler,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Wind,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
