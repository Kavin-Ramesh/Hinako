import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

export function Lifestyle() {
  const [a, b, c, d] = images.lifestyle;

  return (
    <section className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Worn into the day</p>
            <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
              From morning <em className="italic font-light">to night</em> &mdash;
              <br />
              it stays.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            On a tote at the market. On a leather bag at dinner. On a slouchy
            shoulder bag on the weekend. The clip vanishes and the bag stays.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[260px_260px_260px] md:gap-6">
          <Reveal className="md:col-span-7 md:row-span-2 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-sm">
              <img
                src={a}
                alt="Editorial lifestyle"
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5 md:row-span-1 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-sm">
              <img
                src={b}
                alt="Editorial lifestyle"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5 md:row-span-1 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-sm">
              <img
                src={c}
                alt="Editorial lifestyle"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-full"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-ink/0 to-transparent p-8">
                <p className="font-serif text-2xl italic font-light text-cream">
                  &ldquo;It stays.&rdquo;
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-12 md:h-full">
            <figure className="group relative h-full overflow-hidden rounded-sm">
              <img
                src={d}
                alt="Editorial lifestyle"
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
