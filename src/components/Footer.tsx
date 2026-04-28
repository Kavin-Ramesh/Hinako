export function Footer() {
  return (
    <footer className="border-t border-beige/60 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl tracking-[0.04em] text-ink md:text-4xl">
              Hinako
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              Designed in Kyoto, made for the women who carry too much and want
              to look like they aren&rsquo;t.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Shop</p>
            <ul className="space-y-3 text-sm text-ink">
              <li><a href="#shop" className="transition-colors hover:text-gold">Hinako — Gold</a></li>
              <li><a href="#shop" className="transition-colors hover:text-gold">Hinako — Silver</a></li>
              <li><a href="#shop" className="transition-colors hover:text-gold">Gift Card</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">About</p>
            <ul className="space-y-3 text-sm text-ink">
              <li><a href="#story" className="transition-colors hover:text-gold">Our Story</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Care</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-beige/60 pt-8 text-xs text-ink-soft md:flex-row md:items-center">
          <p className="tracking-[0.12em]">&copy; 2026 Hinako. All rights reserved.</p>
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
