import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

export function FeaturedSet() {
  return (
    <section
      aria-labelledby="kit-heading"
      className="border-t border-mist bg-fog"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        <Reveal className="relative overflow-hidden bg-mist/50">
          <img
            src={images.kit}
            alt="The Hinako kit: clip, chamois pouch, and care card on a fog-grey paper backdrop."
            loading="lazy"
            className="aspect-[5/4] h-full w-full object-cover lg:aspect-auto lg:min-h-[640px]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex items-center px-6 py-20 md:px-16 md:py-32">
          <div className="max-w-md">
            <p className="eyebrow mb-6">the kit</p>
            <h2
              id="kit-heading"
              className="font-display text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl"
            >
              Clip, pouch, <em>care card.</em>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">
              Everything we'd want it to come with. Slate or sand finish, a soft chamois pouch for travel, and a single card with everything you need to know.
            </p>

            <div className="mt-10 flex items-baseline gap-3">
              <p className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">$58</p>
              <p className="text-sm text-ink-soft">complete set</p>
            </div>

            <a
              href="#shop"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-ink bg-transparent px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-fog"
            >
              Shop the kit
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
