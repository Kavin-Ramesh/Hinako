export function FounderMini() {
  return (
    <section className="border-t border-[color:var(--hinako-line)] bg-[color:var(--hinako-card)] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <img
            src="/products/lifestyle-closeup.png"
            alt="hinako on a shoulder bag"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="uppercase-wide mb-4 text-[color:var(--hinako-muted)]">
            made by
          </p>
          <h2 className="serif-italic mb-8 text-5xl leading-[0.95] md:text-6xl">
            small studio. small product.
          </h2>
          <p className="mb-4 max-w-xl text-lg leading-relaxed md:text-xl">
            i made hinako in my dorm because i was tired of adjusting my bag every twelve seconds.
          </p>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-[color:var(--hinako-muted)] md:text-xl">
            it&apos;s small. it&apos;s quiet. it works.
          </p>
          <a
            href="#story"
            className="uppercase-wide border-b border-[color:var(--hinako-text)] pb-1 transition hover:opacity-70"
          >
            read the full story →
          </a>
        </div>
      </div>
    </section>
  );
}
