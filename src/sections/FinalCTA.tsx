import { Reveal } from "../components/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-mist bg-fog py-32 md:py-48">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <Reveal>
          <p className="eyebrow mb-8 text-cornflower">hinako</p>
          <h2 className="font-display text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl md:text-[6rem] lg:text-[7.5rem]">
            Stop adjusting.<br />
            <em>Start moving.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-md text-base leading-relaxed text-ink-soft">
            Made in small batches. Built to outlast every bag in your closet.
          </p>

          <a
            href="#shop"
            className="group mt-12 inline-flex items-center gap-2 rounded-md bg-cornflower px-8 py-4 text-sm font-medium text-fog transition-colors duration-300 hover:bg-cornflower-deep"
          >
            Shop the clip
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
