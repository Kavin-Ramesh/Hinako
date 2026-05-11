import { images } from "../assets/images";
import { SHOWCASE_VIDEO_SRC } from "../assets/media";
import { Reveal } from "../components/Reveal";

/**
 * Product film + “Anatomy of the clip” diagram.
 * Video: set `VITE_HINAKO_SHOWCASE_VIDEO` in `.env` (see `src/assets/media.ts`).
 */
export function ProductShowcase() {
  const hasVideo = SHOWCASE_VIDEO_SRC.length > 0;

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="border-t border-sand/40 bg-butter py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="mb-12 text-center md:mb-14">
          <p className="eyebrow mb-3">hinako in motion</p>
          <h2
            id="showcase-heading"
            className="font-display text-3xl font-medium tracking-[-0.035em] text-ink sm:text-4xl"
          >
            The film · the details
          </h2>
        </Reveal>

        <div
          className={`grid gap-10 md:gap-12 ${hasVideo ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-14" : "max-w-3xl lg:mx-auto"}`}
        >
          <Reveal y={20} delay={0.04} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-white bg-cream shadow-[0_24px_60px_-32px_rgba(47,61,82,0.18)]">
              {hasVideo ? (
                <video
                  className="aspect-video w-full object-cover"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                  poster={images.product}
                >
                  <source src={SHOWCASE_VIDEO_SRC} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-cream to-fog/80 px-8 text-center">
                  <span className="rounded-full border border-mist bg-cream/90 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink-soft">
                    Film
                  </span>
                  <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                    Showcase reel coming soon.
                  </p>
                </div>
              )}
            </div>
            <p className="mt-3 text-center text-xs text-ink-soft lg:text-left">
              {hasVideo ? "Watch how the clip moves and closes." : "Space reserved for your Hinako film."}
            </p>
          </Reveal>

          <Reveal y={20} delay={hasVideo ? 0.08 : 0.04} className="min-w-0">
            <figure className="m-0">
              <div className="overflow-hidden rounded-2xl border border-white bg-cream shadow-[0_24px_60px_-32px_rgba(47,61,82,0.16)]">
                <img
                  src={images.clipAnatomy}
                  alt='Diagram titled “Anatomy of the clip” with labeled parts: clip lever (curved top you press to open), press area (finger press surface), base (structure supporting the teeth), spring hinge (flexible hinge for tension), and teeth or grip (small teeth that grip bag fabric).'
                  width={1024}
                  height={819}
                  decoding="async"
                  loading="lazy"
                  className="h-auto w-full object-contain"
                  draggable={false}
                />
              </div>
              <figcaption className="mt-3 text-center text-xs leading-relaxed text-ink-soft lg:text-left">
                Every surface earns its place—lever, hinge, grip—mapped for clarity.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
