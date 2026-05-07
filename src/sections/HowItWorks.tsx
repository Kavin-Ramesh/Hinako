import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

const steps = [
  {
    n: "01",
    eyebrow: "clip",
    title: "Clip on",
    copy: "A single press; the spring closes around any strap up to 25mm.",
    src: images.line[5].src,
  },
  {
    n: "02",
    eyebrow: "shoulder",
    title: "Shoulder up",
    copy: "The shaped pad sits flush, gripping fabric without bulk.",
    src: images.line[6].src,
  },
  {
    n: "03",
    eyebrow: "carry",
    title: "Carry on",
    copy: "All day. No more slipping, no more thinking about it.",
    src: images.line[2].src,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="border-t border-mist bg-fog py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow mb-3">how it works</p>
          <h2
            id="how-heading"
            className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl"
          >
            Three steps, <em>one good day.</em>
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="group">
              <figure className="relative overflow-hidden rounded-md bg-mist/50">
                <img
                  src={step.src}
                  alt={step.title}
                  loading="lazy"
                  className="aspect-[5/4] h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-fog/95 px-3 py-1 font-display text-xs font-medium text-ink backdrop-blur-sm">
                  {step.n}
                </span>
              </figure>
              <div className="mt-5 flex flex-col gap-2">
                <p className="eyebrow">{step.eyebrow}</p>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
