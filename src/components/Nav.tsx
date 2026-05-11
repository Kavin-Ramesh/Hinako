import { useEffect, useState } from "react";
import { images } from "../assets/images";

const LEFT = [
  { label: "philosophy", href: "#story" },
  { label: "waitlist", href: "#join" },
];
const RIGHT = [{ label: "@hinako.ucla_", href: "https://instagram.com/hinako.ucla_" }];

/** Sticky nav — modeled after testsite `Header` */
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
      <nav
        className={[
          "mx-auto grid max-w-[1600px] grid-cols-3 items-center px-6 transition-[height] duration-500 md:px-10",
          scrolled ? "h-20" : "h-32",
        ].join(" ")}
      >
        <ul className="flex items-center gap-7">
          {LEFT.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="uppercase-wide link-underline text-[color:var(--hinako-text)] transition-opacity hover:opacity-80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="group flex justify-center" aria-label="Hinako home">
          <img
            src={images.wordmark}
            alt=""
            width={819}
            height={1024}
            className={[
              "w-auto max-w-[min(80vw,560px)] object-contain transition-all duration-500 group-hover:opacity-85 sm:max-w-[640px]",
              scrolled ? "h-14 sm:h-16" : "h-24 sm:h-28",
            ].join(" ")}
          />
        </a>
        <ul className="flex items-center justify-end gap-5 sm:gap-7">
          <li className="hidden items-center gap-2 text-[color:var(--hinako-muted)] sm:flex">
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ color: "var(--hinako-matcha)" }}
            >
              <span className="absolute inset-0 rounded-full bg-current pulse-dot" />
              <span className="absolute inset-0 rounded-full bg-current" />
            </span>
            <span className="uppercase-wide">waitlist open</span>
          </li>
          {RIGHT.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase-wide link-underline text-[color:var(--hinako-text)] transition-opacity hover:opacity-80"
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
            <a
              href="#join"
              className="uppercase-wide rounded-full bg-[color:var(--hinako-text)] px-4 py-1.5 text-[color:var(--hinako-bg)] transition hover:opacity-85"
            >
              + join
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
