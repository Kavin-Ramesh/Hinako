import { Reveal } from "../components/Reveal";

const steps = [
  {
    n: "01",
    title: "Clip onto the strap",
    copy: "A single press; the spring closes around any strap up to 25mm.",
  },
  {
    n: "02",
    title: "Place on your shoulder",
    copy: "The shaped pad sits flush, gripping fabric without bulk.",
  },
  {
    n: "03",
    title: "It stays in place",
    copy: "All day. No more slipping, no more thinking about it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            Three quiet <em className="italic font-light">moments.</em>
          </h2>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-3 md:gap-12">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="relative">
              <p className="font-serif text-7xl font-light text-gold/70 md:text-8xl">
                {s.n}
              </p>
              <div className="mt-6 hairline" />
              <h3 className="mt-8 font-serif text-2xl text-ink md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
