import { Reveal } from "../components/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-cream py-32 md:py-48">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-beige" aria-hidden />
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <Reveal>
          <p className="eyebrow mb-8 text-gold">Hinako</p>
          <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.015em] text-ink sm:text-6xl md:text-[6rem] lg:text-[7.5rem]">
            Stop adjusting.
            <br />
            <em className="italic font-light">Start moving.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-md text-base leading-relaxed text-ink-soft">
            Made in small batches. Built to outlast every bag in your closet.
          </p>

          <a
            href="#shop"
            className="group mt-12 inline-flex items-center gap-3 rounded-full border border-ink px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-cream"
          >
            Get Hinako
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
