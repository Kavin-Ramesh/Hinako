import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

const columns = [
  {
    eyebrow: "mission",
    title: "One good thing, made really well.",
    copy: "We make a single object instead of a thousand. Every angle, weight, and finish is tuned until it disappears in your hand.",
    src: images.mission.purpose,
  },
  {
    eyebrow: "craftsmanship",
    title: "Solid brass, hand-finished in Kyoto.",
    copy: "Cores cast in solid brass, plated by hand, polished to a soft cool sheen. Built to outlast every bag in your closet.",
    src: images.mission.craftsmanship,
  },
  {
    eyebrow: "sustainability",
    title: "Mindful materials, mindful production.",
    copy: "Recycled brass, recyclable packaging, no single-use plastic. Made in small batches because a clip should not cost the earth.",
    src: images.mission.workshop,
  },
];

export function MissionColumns() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="border-t border-mist bg-fog py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink-soft">
            What we stand for
          </p>
          <h2
            id="mission-heading"
            className="mt-4 font-display text-3xl font-medium leading-[1.04] tracking-[-0.03em] text-ink md:text-4xl"
          >
            Hinako, by way of Kyoto.
          </h2>
        </Reveal>

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.eyebrow} delay={i * 0.08}>
              <figure className="overflow-hidden rounded-md bg-mist/50">
                <img
                  src={col.src}
                  alt={col.title}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </figure>
              <div className="mt-6 flex flex-col gap-3">
                <p className="eyebrow">{col.eyebrow}</p>
                <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.02em] text-ink md:text-2xl">
                  {col.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                  {col.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
