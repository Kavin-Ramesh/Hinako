import { useEffect, useState } from "react";
import { images } from "../assets/images";

const LEFT = [
  { label: "waitlist", href: "#join" },
  { label: "faq", href: "#faq" },
];
const RIGHT = [{ label: "@hinako.ucla_", href: "https://instagram.com/hinako.ucla_" }];

const linkClass =
  "uppercase-wide link-underline text-[color:var(--hinako-text)] transition-opacity hover:opacity-80";

/** Sticky nav — stacked on mobile, 3-col grid on md+. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setPastHero(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const joinPill = (
    <a
      href="#join"
      className="uppercase-wide rounded-full bg-[color:var(--hinako-text)] px-4 py-1.5 text-[color:var(--hinako-bg)] transition hover:opacity-85"
    >
      + join
    </a>
  );

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all duration-500",
        "border-b bg-[color:var(--hinako-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--hinako-bg)]/80",
        scrolled
          ? "border-[color:var(--hinako-line)] shadow-[0_8px_24px_-20px_rgba(28,28,26,0.35)]"
          : "border-transparent",
      ].join(" ")}
    >
      {/* Mobile: stacked. Wordmark on top, links beneath. */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-4 pt-3 pb-2 md:hidden">
        <a href="#top" aria-label="Hinako home" className="group">
          <img
            src={images.wordmark}
            alt=""
            width={819}
            height={1024}
            className={[
              "w-auto object-contain transition-all duration-500 group-hover:opacity-85",
              scrolled ? "h-9" : "h-12",
            ].join(" ")}
          />
        </a>
        <div className="mt-2 flex w-full items-center justify-between gap-3">
          <ul className="flex min-w-0 items-center gap-4">
            {LEFT.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex min-w-0 items-center gap-3">
            {RIGHT.map((l) => (
              <li key={l.label} className="min-w-0">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} truncate`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li
              className={[
                "transition-all duration-500",
                pastHero ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
              ].join(" ")}
            >
              {joinPill}
            </li>
          </ul>
        </div>
      </div>

      {/* Tablet/desktop: original 3-col grid. */}
      <nav
        className={[
          "mx-auto hidden max-w-[1600px] grid-cols-3 items-center px-10 transition-[height] duration-500 md:grid",
          scrolled ? "h-20" : "h-32",
        ].join(" ")}
      >
        <ul className="flex min-w-0 items-center gap-7">
          {LEFT.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="group flex min-w-0 justify-center" aria-label="Hinako home">
          <img
            src={images.wordmark}
            alt=""
            width={819}
            height={1024}
            className={[
              "w-auto max-w-[min(60vw,640px)] object-contain transition-all duration-500 group-hover:opacity-85",
              scrolled ? "h-16" : "h-28",
            ].join(" ")}
          />
        </a>
        <ul className="flex min-w-0 items-center justify-end gap-7">
          {RIGHT.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            className={[
              "transition-all duration-500",
              pastHero ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
            ].join(" ")}
          >
            {joinPill}
          </li>
        </ul>
      </nav>
    </header>
  );
}
