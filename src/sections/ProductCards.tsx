export function ProductCards() {
  return (
    <section className="px-6 py-12 md:px-12 md:py-16">
      <p className="uppercase-wide mb-8 text-center text-[color:var(--hinako-text)] md:mb-10">
        hinako essentials
      </p>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[color:var(--hinako-card)]">
          <video
            src="/products/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/products/lifestyle-closeup.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="relative flex aspect-[4/3] flex-col rounded-sm bg-[color:var(--hinako-card)]">
          <div className="relative flex-1">
            <img
              src="/products/product-clip.png"
              alt="hinako soft-grip clip"
              className="absolute inset-0 h-full w-full object-contain p-6 mix-blend-multiply md:p-10"
            />
          </div>

          <div className="flex items-end justify-between px-6 pb-6 md:px-10 md:pb-8">
            <div>
              <div className="mb-1 text-xs text-[color:var(--hinako-text)]">
                ★★★★★{" "}
                <span className="text-[color:var(--hinako-muted)]">(142)</span>
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em]">
                hinako
              </div>
              <div className="text-sm text-[color:var(--hinako-muted)]">
                soft-grip bag clip
              </div>
            </div>
            <a
              href="#join"
              className="uppercase-wide rounded-full border border-[color:var(--hinako-text)] px-5 py-2 transition hover:bg-[color:var(--hinako-text)] hover:text-[color:var(--hinako-bg)]"
            >
              join waitlist · $7.00
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
