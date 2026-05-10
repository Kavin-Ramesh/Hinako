import type { CSSProperties } from "react";
import { images } from "../assets/images";

/**
 * Bottom grain / dither pair — tweak aesthetics here.
 *
 * - driftDurationLeftS / driftDurationRightS — grain loop length (seconds). Slightly different = less sync.
 * - delayLeftS / delayRightS — animation-delay on the grain layer (e.g. -5s staggers the right card).
 * - grainOpacity — ~0.04–0.09; higher = stronger grain (also update in CSS var --grain-opacity on cards).
 * - gridGapClass — grid gap utilities (spacing between the two columns).
 *
 * Image sizing: edit Tailwind classes on `<img>` — `max-h-[min(38vh,340px)]` and `md:max-h-[min(42vh,380px)]`.
 * Second image path: `rightFallback` uses leather editorial; change slug or assign a literal URL.
 */
const SHOWCASE = {
  driftDurationLeftS: 18,
  driftDurationRightS: 22,
  delayLeftS: 0,
  delayRightS: -5,
  grainOpacity: 0.058,
  gridGapClass: "gap-14 md:gap-16 lg:gap-24",
} as const;

const rightFallback =
  images.line.find((c) => c.slug === "leather")?.src ?? images.product;

export function GrainClipPair() {
  return (
    <section
      aria-label="Product details"
      className="border-t border-mist/35 bg-[#e8dfd4]"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24 lg:py-28">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${SHOWCASE.gridGapClass}`}>
          <GrainClipCard
            src={images.product}
            alt="Hinako handbag clip — landscape product art on warm background"
            driftDurationS={SHOWCASE.driftDurationLeftS}
            delayS={SHOWCASE.delayLeftS}
            grainOpacity={SHOWCASE.grainOpacity}
            className="md:justify-self-end"
            innerClassName="md:pr-2 lg:pr-4"
          />
          <GrainClipCard
            src={rightFallback}
            alt="Hinako clip on leather — editorial product photograph"
            driftDurationS={SHOWCASE.driftDurationRightS}
            delayS={SHOWCASE.delayRightS}
            grainOpacity={SHOWCASE.grainOpacity * 0.92}
            className="md:justify-self-start md:pt-10 lg:pt-14"
            innerClassName="md:pl-2 lg:pl-4"
          />
        </div>
      </div>
    </section>
  );
}

type GrainClipCardProps = {
  src: string;
  alt: string;
  driftDurationS: number;
  delayS: number;
  grainOpacity: number;
  className?: string;
  innerClassName?: string;
};

function GrainClipCard({
  src,
  alt,
  driftDurationS,
  delayS,
  grainOpacity,
  className = "",
  innerClassName = "",
}: GrainClipCardProps) {
  return (
    <figure
      className={`grain-clip-card relative m-0 overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_20px_50px_-28px_rgba(47,61,82,0.12)] md:max-w-[min(100%,480px)] ${className}`.trim()}
      style={
        {
          "--grain-opacity": String(grainOpacity),
          "--grain-drift-duration": `${driftDurationS}s`,
          "--grain-delay": `${delayS}s`,
        } as CSSProperties
      }
    >
      <div className="grain-layer" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,rgba(255,255,255,0.45)_0%,transparent_62%)]"
        aria-hidden
      />
      <div
        className={`relative z-[1] flex items-center justify-center px-6 py-10 sm:px-8 sm:py-12 md:px-10 ${innerClassName}`.trim()}
      >
        <img
          src={src}
          alt={alt}
          width={1024}
          height={570}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-auto w-full max-h-[min(38vh,340px)] max-w-[92%] object-contain md:max-h-[min(42vh,380px)]"
        />
      </div>
    </figure>
  );
}
