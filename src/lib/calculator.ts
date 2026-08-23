export type Opening = { width: number; height: number };
export type CalcType = "flooring" | "panels" | "wallpaper" | "blinds";

/** Maps a product category slug to the matching calculator tab, if any. */
const CATEGORY_TO_CALC: Record<string, CalcType> = {
  "wooden-flooring": "flooring",
  "vinyl-flooring": "flooring",
  "spc-flooring": "flooring",
  "sports-flooring": "flooring",
  "woolen-carpet": "flooring",
  "carpet-tiles": "flooring",
  "wall-panels": "panels",
  "wall-mouldings": "panels",
  wallpapers: "wallpaper",
  "window-blinds": "blinds",
};

export function categoryToCalculatorTab(categorySlug: string): CalcType | null {
  return CATEGORY_TO_CALC[categorySlug] ?? null;
}

export function calculateFlooring(lengthFt: number, widthFt: number) {
  const area = lengthFt * widthFt;
  const withWastage = area * 1.07;
  return { area, total: withWastage };
}

export function calculateWallPanels(
  wallWidthFt: number,
  wallHeightFt: number,
  panelWidthInches: number,
  openings: Opening[] = [],
) {
  const PANEL_HEIGHT_FT = 9.5;
  const wallWidthInches = wallWidthFt * 12;
  const openingsWidthInches = openings.reduce((sum, o) => sum + o.width * 12, 0);
  const usableWidthInches = Math.max(wallWidthInches - openingsWidthInches, 0);

  const columns = Math.ceil(usableWidthInches / panelWidthInches);
  const totalLinearFeet = columns * wallHeightFt;
  const panels = Math.ceil(totalLinearFeet / PANEL_HEIGHT_FT);

  return { columns, totalLinearFeet, panels };
}

export function calculateWallpaper(wallWidthFt: number, wallHeightFt: number) {
  const ROLL_COVERAGE_SQFT = 50;
  const area = wallWidthFt * wallHeightFt;
  const rolls = Math.ceil(area / ROLL_COVERAGE_SQFT);
  return { area, rolls };
}

export function calculateBlinds(windowWidthFt: number, windowHeightFt: number) {
  const MIN_SQFT = 16;
  const newWidthInches = windowWidthFt * 12 + 1.5;
  const newHeightInches = windowHeightFt * 12 + 1.5;
  const rawArea = (newWidthInches * newHeightInches) / 144;
  const billedArea = Math.max(rawArea, MIN_SQFT);
  return { rawArea, billedArea, minimumApplied: rawArea < MIN_SQFT };
}