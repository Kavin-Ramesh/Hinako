import { Reveal } from "../components/Reveal";

export function Preview() {
  return (
    <section className="relative overflow-hidden border-t border-[color:var(--hinako-line)] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <p className="uppercase-wide mb-6 text-[color:var(--hinako-muted)]">
              what it is
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="serif-italic mb-2 text-5xl leading-[0.95] tracking-tight md:text-7xl">
              a soft-grip clip.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="serif-italic mb-10 text-3xl leading-[0.95] text-[color:var(--hinako-muted)] md:text-4xl">
              that&apos;s the whole thing.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="max-w-md text-lg leading-relaxed">
              two grams. clips to your bag strap and keeps it on your shoulder.
              that&apos;s every feature in one sentence.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-[color:var(--hinako-card)]">
            <img
              src="/products/strap-detail.png"
              alt="hinako clip — soft-grip clip on a bag strap"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
