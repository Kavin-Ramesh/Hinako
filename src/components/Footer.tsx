import { images } from "../assets/images";

export function Footer() {
  return (
    <footer className="border-t border-sand/50 bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16 lg:py-[4.25rem]">
        <div className="flex flex-col gap-10 sm:gap-11 md:flex-row md:items-start md:justify-between md:gap-14 lg:gap-16">
          <div className="max-w-[20rem] shrink-0 md:max-w-[22rem]">
            <a
              href="#top"
              className="group/footermark inline-block rounded-lg p-1.5 leading-none outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
              aria-label="Hinako home"
            >
              <img
                src={images.wordmark}
                alt=""
                width={819}
                height={1024}
                className="h-16 w-auto max-w-full object-contain object-left transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/footermark:-translate-y-1 group-hover/footermark:scale-[1.05] group-hover/footermark:drop-shadow-[0_14px_32px_rgba(92,154,224,0.4)] md:h-20 lg:h-24"
              />
            </a>
            <p className="mt-4 max-w-none text-[0.8125rem] leading-[1.65] tracking-[-0.01em] text-ink-soft md:mt-5">
              One good thing for your bag. Made really well. Designed in Kyoto, worn everywhere.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col md:items-end md:text-right">
            <p className="eyebrow mb-3 md:mb-4">about</p>
            <ul className="flex flex-col gap-3.5 text-sm text-ink md:gap-4">
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
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-sand/40 pt-6 text-xs text-ink-soft md:mt-14 md:flex-row md:items-center md:pt-7">
          <p>&copy; 2026 Hinako. All rights reserved.</p>
          <div className="flex gap-7 md:gap-8">
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
