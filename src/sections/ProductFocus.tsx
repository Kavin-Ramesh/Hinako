import { Reveal } from "../components/Reveal";
import { ProductRender } from "../components/ProductRender";

const captions = [
  { eyebrow: "01", title: "Engineered grip", copy: "A quiet bite that holds — without leaving a mark." },
  { eyebrow: "02", title: "Refined metal", copy: "Solid brass and stainless steel, polished to a soft sheen." },
  { eyebrow: "03", title: "Invisible support", copy: "Sized to disappear against any strap or shoulder line." },
];

export function ProductFocus() {
  return (
    <section id="product" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-20 flex flex-col gap-6 md:mb-28 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">The object</p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-ink md:text-6xl">
              Three details, <em className="italic font-light">considered.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
            Every angle, weight, and finish was tuned over eighteen months until
            the clip felt like nothing at all.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="overflow-hidden rounded-sm bg-bone">
            <div className="flex aspect-[4/5] items-center justify-center p-12">
              <ProductRender variant="gold" className="h-full w-full max-h-[480px]" />
            </div>
            <div className="px-6 py-6 text-center">
              <p className="eyebrow text-gold">Polished gold</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-sm bg-bone">
            <div className="flex aspect-[4/5] items-center justify-center p-12">
              <ProductRender variant="silver" className="h-full w-full max-h-[480px]" />
            </div>
            <div className="px-6 py-6 text-center">
              <p className="eyebrow text-ink-soft">Brushed silver</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-16">
          {captions.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <p className="font-serif text-2xl text-gold/80">{c.eyebrow}</p>
              <div className="mt-4 hairline" />
              <h3 className="mt-6 font-serif text-2xl text-ink md:text-3xl">
                {c.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                {c.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
