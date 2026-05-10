import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

const categories = [
  {
    eyebrow: "morning",
    title: "Office to errand",
    copy: "Bag stays put through every commute, every coffee.",
    src: images.category[0],
  },
  {
    eyebrow: "off-duty",
    title: "Casual carry",
    copy: "Tote on the shoulder, hands free for everything else.",
    src: images.category[1],
  },
  {
    eyebrow: "dinner",
    title: "After hours",
    copy: "Quiet enough for evening; built for the long night.",
    src: images.category[2],
  },
  {
    eyebrow: "weekend",
    title: "Out of town",
    copy: "Loaded weekenders, train platforms, long days.",
    src: images.category[3],
  },
];

export function CategoryGrid() {
  return (
    <section
      aria-labelledby="category-heading"
      className="border-t border-mist bg-fog py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink-soft">
            On-the-go essentials
          </p>
          <h2
            id="category-heading"
            className="mt-4 font-display text-3xl font-medium leading-[1.04] tracking-[-0.03em] text-ink md:text-4xl"
          >
            Built for every kind of day.
          </h2>
        </Reveal>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.eyebrow} delay={(i % 4) * 0.06} className="group">
              <a href="#shop" className="block">
                <figure className="overflow-hidden rounded-md bg-mist/50">
                  <img
                    src={cat.src}
                    alt={cat.title}
                    loading="lazy"
                    className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </figure>
                <div className="mt-5 flex flex-col gap-2">
                  <p className="eyebrow">{cat.eyebrow}</p>
                  <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-ink">
                    {cat.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
                    {cat.copy}
                  </p>
                  <span className="tracked-cta mt-2 inline-flex items-center gap-2 group-hover:text-rose-deep">
                    Shop the clip
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
