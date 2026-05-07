import { Reveal } from "../components/Reveal";

export function ProblemSolution() {
  return (
    <section id="story" className="border-t border-mist bg-fog py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 md:mb-24">
          <p className="eyebrow">the problem — and the answer</p>
        </Reveal>

        <div className="grid items-stretch gap-12 md:grid-cols-2">
          <Reveal className="relative md:pr-16">
            <p className="font-display text-3xl font-medium leading-[1.02] tracking-[-0.03em] text-ink-soft sm:text-4xl md:text-5xl lg:text-6xl">
              Slipping straps.<br />Constant adjusting.
            </p>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-soft">
              You hike it back up. You shrug your shoulder. You tuck the strap under your collar. You do it all day, without thinking — until you realize you&rsquo;ve been doing it for years.
            </p>

            <div className="absolute right-0 top-0 hidden h-full w-px bg-mist md:block" />
          </Reveal>

          <Reveal delay={0.15} className="md:pl-16">
            <p className="font-display text-3xl font-medium leading-[1.02] tracking-[-0.03em] text-ink sm:text-4xl md:text-5xl lg:text-6xl">
              The clip keeps your bag <em>exactly</em> where it belongs.
            </p>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-soft">
              One quiet click on your strap. The bag holds. Your hands are free. You stop noticing it &mdash; which is the entire point.
            </p>

            <div className="mt-10 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-cornflower" />
              <span className="eyebrow text-cornflower">designed in kyoto</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
