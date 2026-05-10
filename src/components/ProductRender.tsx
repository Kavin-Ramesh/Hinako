type Variant = "gold" | "silver";

type ProductRenderProps = {
  variant?: Variant;
  className?: string;
  showLogo?: boolean;
};

/**
 * Stylized SVG render of the Hinako bag clip.
 * "gold"  → "Slate" (charcoal body with cool highlight)
 * "silver" → "Sand" (warm sand-beige body)
 */
export function ProductRender({
  variant = "gold",
  className = "",
  showLogo = true,
}: ProductRenderProps) {
  const id = variant;

  const colors =
    variant === "gold"
      ? {
          highlight: "#7C8090",
          mid: "#5A5E6B",
          base: "#41444F",
          shadow: "#2A2C33",
          edge: "#1B1C20",
          glowFrom: "rgba(232, 176, 203, 0.22)",
          glowMid: "rgba(232, 176, 203, 0.06)",
          inner: "#F2EAE0",
          logoFill: "#F2EAE0",
        }
      : {
          highlight: "#EDE5D6",
          mid: "#D9C8B0",
          base: "#BFAE92",
          shadow: "#8E7A65",
          edge: "#5C4D3F",
          glowFrom: "rgba(232, 176, 203, 0.18)",
          glowMid: "rgba(232, 176, 203, 0.05)",
          inner: "#F2EAE0",
          logoFill: "#5C4D3F",
        };

  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`Hinako clip in ${variant === "gold" ? "Slate" : "Sand"}`}
    >
      <defs>
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="35%" stopColor={colors.mid} />
          <stop offset="65%" stopColor={colors.base} />
          <stop offset="100%" stopColor={colors.shadow} />
        </linearGradient>
        <linearGradient id={`top-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.base} />
        </linearGradient>
        <linearGradient id={`teeth-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors.shadow} />
          <stop offset="50%" stopColor={colors.base} />
          <stop offset="100%" stopColor={colors.shadow} />
        </linearGradient>
        <radialGradient id={`shadow-${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={colors.edge} stopOpacity="0.3" />
          <stop offset="100%" stopColor={colors.edge} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`roseglow-${id}`} cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor={colors.glowFrom} />
          <stop offset="60%" stopColor={colors.glowMid} />
          <stop offset="100%" stopColor="rgba(232,176,203,0)" />
        </radialGradient>
        <filter id={`soft-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* very soft rose halo */}
      <ellipse cx="200" cy="220" rx="220" ry="170" fill={`url(#roseglow-${id})`} />
      <ellipse cx="200" cy="430" rx="140" ry="14" fill={`url(#shadow-${id})`} />

      <g transform="translate(80 90)">
        <rect x="0" y="0" width="240" height="170" rx="6" fill={`url(#body-${id})`} />
        <rect x="0" y="0" width="240" height="34" rx="6" fill={`url(#top-${id})`} opacity="0.85" />
        <rect x="0" y="34" width="240" height="2" fill={colors.shadow} opacity="0.35" />

        {showLogo && (
          <g transform="translate(20 50)" opacity="0.95">
            <text
              x="100"
              y="48"
              textAnchor="middle"
              fontFamily='"Rubik Bubbles", "Bagel Fat One", cursive'
              fontSize="46"
              fontWeight="400"
              letterSpacing="0"
              fill={colors.logoFill}
            >
              hinako
            </text>
          </g>
        )}

        <g transform="translate(0 170)">
          {Array.from({ length: 16 }).map((_, i) => (
            <rect
              key={i}
              x={6 + i * 14.5}
              y={0}
              width={9}
              height={28}
              rx={1.5}
              fill={`url(#teeth-${id})`}
            />
          ))}
        </g>

        <g transform="translate(95 200)">
          <rect x="0" y="0" width="50" height="74" rx="4" fill={`url(#body-${id})`} />
          <rect x="10" y="14" width="30" height="46" rx="3" fill={colors.inner} opacity="0.95" />
        </g>

        <rect
          x="0"
          y="0"
          width="240"
          height="170"
          rx="6"
          fill="none"
          stroke={colors.highlight}
          strokeOpacity="0.5"
          strokeWidth="0.7"
          filter={`url(#soft-${id})`}
        />
      </g>
    </svg>
  );
}
