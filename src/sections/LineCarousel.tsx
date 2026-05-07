import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

type LineCard = {
  slug: string;
  title: string;
  tag?: string;
  description: string;
  src: string;
};

const cards: LineCard[] = [
  {
    slug: "tote",
    title: "the tote",
    tag: "bestseller",
    description: "Canvas straps. Held quiet, all errand long.",
    src: images.line[0].src,
  },
  {
    slug: "leather",
    title: "the leather",
    description: "Buttery vegetable-tan straps. Zero slip.",
    src: images.line[1].src,
  },
  {
    slug: "weekender",
    title: "the weekender",
    description: "Loaded duffles, train platforms, long days.",
    src: images.line[2].src,
  },
  {
    slug: "mini",
    title: "the mini",
    tag: "new",
    description: "Delicate handles, structured silhouettes.",
    src: images.line[3].src,
  },
  {
    slug: "chain",
    title: "the chain",
    description: "Polished metal links, jewelry-grade hold.",
    src: images.line[4].src,
  },
  {
    slug: "canvas",
    title: "the canvas",
    description: "Workwear messengers and unbleached weaves.",
    src: images.line[5].src,
  },
  {
    slug: "wool",
    title: "the wool",
    description: "Heather coats. The strap stops sliding.",
    src: images.line[6].src,
  },
  {
    slug: "evening",
    title: "the evening",
    tag: "limited",
    description: "Slim straps for a night that goes long.",
    src: images.line[7].src,
  },
];

export function LineCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      id="product"
      aria-labelledby="line-heading"
      className="border-t border-mist bg-fog py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="mb-10 flex flex-col gap-6 px-6 md:mb-14 md:flex-row md:items-end md:justify-between md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">the line</p>
            <h2
              id="line-heading"
              className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl"
            >
              One clip, <em>every bag.</em>
            </h2>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <p className="hidden max-w-xs text-sm leading-relaxed text-ink-soft md:block">
              Slate or sand. The same clip, photographed against the bags it lives on.
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Scroll line left"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist bg-fog text-ink transition-colors hover:border-ink hover:bg-ink hover:text-fog"
              >
                <ArrowLeft strokeWidth={1.4} className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Scroll line right"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist bg-fog text-ink transition-colors hover:border-ink hover:bg-ink hover:text-fog"
              >
                <ArrowRight strokeWidth={1.4} className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={rowRef}
          className="scroll-row px-6 pb-2 md:px-10"
          role="region"
          aria-label="Hinako line"
        >
          {cards.map((card, i) => (
            <article
              key={card.slug}
              data-card
              className="scroll-snap group flex w-[78vw] flex-col sm:w-[52vw] md:w-[38vw] lg:w-[28vw] xl:w-[22vw]"
              style={{ scrollSnapAlign: i === 0 ? "start" : undefined }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-mist/60">
                <img
                  src={card.src}
                  alt={`Hinako clip on ${card.slug} bag`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                {card.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-fog/95 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                    {card.tag}
                  </span>
                )}
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p className="eyebrow">{card.slug}</p>
                <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-ink">
                  {card.title}
                </h3>
                <p className="line-clamp-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                  {card.description}
                </p>
                <a
                  href="#shop"
                  className="tracked-cta mt-2 inline-flex items-center gap-2 hover:text-cornflower"
                >
                  Buy clip — $48
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
