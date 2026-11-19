/**
 * Generates smooth, nested "topographic" contour paths — a nod to the
 * Deccan plateau — deterministically at build time (no runtime JS).
 */
type Pt = [number, number];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function closedSpline(points: Pt[]): string {
  const n = points.length;
  const f = (v: number) => String(Math.round(v));
  let d = `M${f(points[0][0])} ${f(points[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return `${d}Z`;
}

export interface ContourOptions {
  cx: number;
  cy: number;
  rings?: number;
  base?: number;
  gap?: number;
  seed?: number;
  /** Horizontal stretch — plateaus are wider than they are tall. */
  stretch?: number;
  points?: number;
}

export function contours({
  cx,
  cy,
  rings = 9,
  base = 40,
  gap = 34,
  seed = 7,
  stretch = 1.5,
  points = 14,
}: ContourOptions): string[] {
  const rand = mulberry32(seed);
  const ph = Array.from({ length: 4 }, () => rand() * Math.PI * 2);
  const amp = [0.16, 0.1, 0.06, 0.035];
  const paths: string[] = [];
  for (let k = 0; k < rings; k++) {
    const r0 = base + k * gap;
    const pts: Pt[] = [];
    for (let i = 0; i < points; i++) {
      const t = (i / points) * Math.PI * 2;
      const wobble =
        amp[0] * Math.sin(2 * t + ph[0] + k * 0.32) +
        amp[1] * Math.sin(3 * t + ph[1] - k * 0.21) +
        amp[2] * Math.sin(5 * t + ph[2] + k * 0.45) +
        amp[3] * Math.sin(7 * t + ph[3] - k * 0.6);
      const r = r0 * (1 + wobble);
      pts.push([cx + Math.cos(t) * r * stretch, cy + Math.sin(t) * r]);
    }
    paths.push(closedSpline(pts));
  }
  return paths;
}
