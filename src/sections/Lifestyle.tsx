import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

export function Lifestyle() {
  const [a, b, c, d] = images.lifestyle;

  return (
    <section className="border-t border-mist bg-fog py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">worn into the day</p>
            <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-6xl lg:text-7xl">
              Morning to night.<br />
              <em>It stays.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            On a tote at the market. On a leather bag at dinner. On a slouchy shoulder bag on the weekend. The clip vanishes and the bag stays.
          </p>
        </Reveal>

        <div className="grid gap-2 md:grid-cols-12 md:grid-rows-[260px_260px_260px] md:gap-3">
          <Reveal className="md:col-span-7 md:row-span-2 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-md">
              <img
                src={a}
                alt="lifestyle"
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5 md:row-span-1 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-md">
              <img
                src={b}
                alt="lifestyle"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5 md:row-span-1 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-md">
              <img
                src={c}
                alt="lifestyle"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/55 via-ink/0 to-transparent p-8">
                <p className="font-display text-2xl font-medium tracking-[-0.02em] text-fog">
                  &ldquo;<em>It stays.</em>&rdquo;
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-12 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-md">
              <img
                src={d}
                alt="lifestyle"
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
