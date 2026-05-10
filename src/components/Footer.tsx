import { images } from "../assets/images";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-fog">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <a href="#top" className="inline-block leading-none" aria-label="Hinako home">
              <img
                src={images.wordmark}
                alt=""
                width={819}
                height={1024}
                className="h-16 w-auto max-w-full object-contain object-left md:h-20 lg:h-24"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              One good thing for your bag. Made really well. Designed in Kyoto, worn everywhere.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">about</p>
            <ul className="space-y-3 text-sm text-ink">
              <li>
                <a href="#story" className="transition-colors hover:text-rose-deep">
                  Our philosophy
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-rose-deep">
                  Join the waitlist
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-rose-deep">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-mist pt-8 text-xs text-ink-soft md:flex-row md:items-center">
          <p>&copy; 2026 Hinako. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
