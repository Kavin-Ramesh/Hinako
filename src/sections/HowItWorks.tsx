import { Reveal } from "../components/Reveal";

const steps = [
  {
    n: "01",
    title: "Clip on",
    copy: "A single press; the spring closes around any strap up to 25mm.",
  },
  {
    n: "02",
    title: "Shoulder up",
    copy: "The shaped pad sits flush, gripping fabric without bulk.",
  },
  {
    n: "03",
    title: "Carry on",
    copy: "All day. No more slipping, no more thinking about it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-mist bg-fog py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow mb-4">how it works</p>
          <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-6xl lg:text-7xl">
            Three steps. <em>One good day.</em>
          </h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-12">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="relative">
              <p className="font-display text-7xl font-semibold tracking-[-0.04em] text-cornflower md:text-8xl">
                {s.n}
              </p>
              <div className="mt-6 hairline" />
              <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
