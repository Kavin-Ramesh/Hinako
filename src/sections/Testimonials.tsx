import { Reveal } from "../components/Reveal";

const quotes = [
  {
    quote: "I stopped adjusting my bag completely.",
    author: "Lena M.",
    location: "Paris",
  },
  {
    quote: "It's small, but it changes everything.",
    author: "Aiko T.",
    location: "Tokyo",
  },
  {
    quote: "Looks like jewelry. Works like an engineer.",
    author: "Sara K.",
    location: "Milan",
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="press-heading"
      className="border-t border-mist bg-fog py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow mb-3">worn by</p>
          <h2
            id="press-heading"
            className="font-display text-3xl font-medium leading-[1.04] tracking-[-0.03em] text-ink md:text-4xl"
          >
            What they said.
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col">
                <blockquote className="font-italic text-2xl italic font-normal leading-[1.25] text-ink md:text-3xl">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 text-xs">
                  <span className="h-px w-6 bg-cornflower" />
                  <span className="font-medium uppercase tracking-[0.18em] text-ink-soft">
                    {q.author} &middot; {q.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
