import { Reveal } from "../components/Reveal";
import { ProductRender } from "../components/ProductRender";

const tags = [
  { tag: "Grip", copy: "A quiet bite that holds — without leaving a mark." },
  { tag: "Glow", copy: "Solid brass and stainless steel, polished to a soft sheen." },
  { tag: "Gone", copy: "Sized to disappear against any strap or shoulder line." },
];

export function ProductFocus() {
  return (
    <section id="product" className="border-t border-mist bg-fog py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">the object</p>
            <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-6xl lg:text-7xl">
              One good thing,<br />
              <em>made really well.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
            Every angle, weight, and finish was tuned over eighteen months until the clip felt like nothing at all.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className="relative flex aspect-[4/5] flex-col rounded-md bg-sand">
              <div className="flex flex-1 items-center justify-center p-12">
                <ProductRender variant="gold" className="h-full w-full max-h-[440px]" />
              </div>
              <div className="flex items-center justify-between border-t border-ink/10 px-6 py-5">
                <p className="font-display text-base font-medium text-ink">Slate</p>
                <a href="#shop" className="text-sm text-ink-soft transition-colors hover:text-cornflower">
                  Buy — $48 →
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex aspect-[4/5] flex-col rounded-md bg-powder">
              <div className="flex flex-1 items-center justify-center p-12">
                <ProductRender variant="silver" className="h-full w-full max-h-[440px]" />
              </div>
              <div className="flex items-center justify-between border-t border-ink/10 px-6 py-5">
                <p className="font-display text-base font-medium text-ink">Sand</p>
                <a href="#shop" className="text-sm text-ink-soft transition-colors hover:text-cornflower">
                  Buy — $48 →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-12">
          {tags.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.08}>
              <p className="font-display text-5xl font-medium tracking-[-0.04em] text-cornflower md:text-6xl">
                {c.tag}
              </p>
              <div className="mt-6 hairline" />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
                {c.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
