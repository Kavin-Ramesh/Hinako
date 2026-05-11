const QUOTES = [
  {
    body:
      "i have a huge linen tote that always slid off. first day i walked across campus i never adjusted it once. honestly forgot it was there until i got home.",
    who: "ari",
    where: "boston",
    owns: "matcha · linen tote, ~1.2\" strap",
  },
  {
    body:
      "was worried it'd look bulky. in sumi on a black leather strap it basically disappears. a friend wore mine for two weeks before noticing.",
    who: "noa",
    where: "tokyo",
    owns: "sumi · leather crossbody",
  },
  {
    body:
      "was nervous about it leaving marks. it doesn't. clipped and unclipped probably fifty times by now and the leather still looks new.",
    who: "june",
    where: "seoul",
    owns: "kome · leather shoulder bag",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-[color:var(--hinako-line)] bg-[color:var(--hinako-bg)] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <p className="uppercase-wide text-[color:var(--hinako-muted)]">
            early testers · verified
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {QUOTES.map((q) => (
            <figure key={q.who} className="flex flex-col">
              <span
                aria-hidden
                className="serif-italic mb-2 select-none text-7xl leading-none text-[color:var(--hinako-text)]/15"
              >
                &ldquo;
              </span>
              <blockquote className="serif-italic mb-6 text-lg leading-snug text-[color:var(--hinako-text)] md:text-xl">
                {q.body}
              </blockquote>
              <figcaption className="mt-auto border-t border-[color:var(--hinako-line)] pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="serif-italic text-base">— {q.who}</span>
                  <span className="text-sm text-[color:var(--hinako-muted)]">
                    · {q.where}
                  </span>
                </div>
                <div className="mt-1 text-xs text-[color:var(--hinako-muted)]">
                  owns: {q.owns}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
