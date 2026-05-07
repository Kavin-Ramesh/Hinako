export function Footer() {
  return (
    <footer className="border-t border-mist bg-fog">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-medium tracking-[-0.025em] text-ink md:text-4xl">
              Hinako
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              One good thing for your bag. Made really well.
              Designed in Kyoto, worn everywhere.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">shop</p>
            <ul className="space-y-3 text-sm text-ink">
              <li><a href="#shop" className="transition-colors hover:text-cornflower">The clip — Slate</a></li>
              <li><a href="#shop" className="transition-colors hover:text-cornflower">The clip — Sand</a></li>
              <li><a href="#shop" className="transition-colors hover:text-cornflower">Gift card</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">about</p>
            <ul className="space-y-3 text-sm text-ink">
              <li><a href="#story" className="transition-colors hover:text-cornflower">Our story</a></li>
              <li><a href="#" className="transition-colors hover:text-cornflower">Care</a></li>
              <li><a href="#" className="transition-colors hover:text-cornflower">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-mist pt-8 text-xs text-ink-soft md:flex-row md:items-center">
          <p>&copy; 2026 Hinako. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <a href="#" className="transition-colors hover:text-ink">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
