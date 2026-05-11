const STEPS = [
  {
    n: "01",
    title: "clip on.",
    body: "open the soft-grip jaws over your strap. it bites without creasing.",
  },
  {
    n: "02",
    title: "slide up.",
    body: "push it toward your shoulder until it sits where the strap meets your collarbone.",
  },
  {
    n: "03",
    title: "done.",
    body: "your strap stays put. no more shrug. no more re-adjusting.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-[color:var(--hinako-line)] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-4 md:mb-24">
          <div>
            <p className="uppercase-wide mb-3 text-[color:var(--hinako-muted)]">
              how it works
            </p>
            <h2 className="serif-italic text-5xl leading-[0.9] md:text-7xl">
              three seconds.{" "}
              <span className="text-[color:var(--hinako-muted)]">once.</span>
            </h2>
          </div>
          <p className="serif-italic text-xl text-[color:var(--hinako-muted)]">
            stays.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px md:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(28,28,26,0.35) 50%, transparent 0%)",
              backgroundSize: "8px 1px",
              backgroundRepeat: "repeat-x",
            }}
          />

          <ol className="grid gap-10 md:grid-cols-3 md:gap-16">
            {STEPS.map((s, i) => (
              <li key={s.n} className="relative">
                <span
                  aria-hidden
                  className="absolute -top-1.5 left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-[color:var(--hinako-text)] bg-[color:var(--hinako-bg)] md:block"
                />

                <div
                  className="mb-6 select-none text-[7rem] font-black leading-none tracking-[-0.04em] md:text-[9rem]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px var(--hinako-text)",
                  }}
                  aria-hidden
                >
                  {s.n}
                </div>

                <div className="max-w-sm">
                  <h3 className="serif-italic mb-3 text-3xl leading-[1.05] md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[color:var(--hinako-text)]/85">
                    {s.body}
                  </p>
                </div>

                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-0 top-[2.4rem] hidden -translate-y-1/2 text-lg text-[color:var(--hinako-muted)] md:inline"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
