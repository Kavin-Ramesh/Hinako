import { motion } from "framer-motion";
import { Search, User } from "lucide-react";

const leftLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Story", href: "#story" },
  { label: "How it works", href: "#how" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="sticky top-0 z-40 border-b border-mist bg-fog"
    >
      <nav className="mx-auto grid h-14 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-16 md:px-10">
        {/* Left links */}
        <ul className="hidden items-center gap-7 md:flex">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:text-cornflower"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden" aria-hidden />

        {/* Center wordmark */}
        <a
          href="#top"
          className="font-display text-2xl font-medium tracking-[-0.03em] text-ink md:text-[1.65rem]"
          aria-label="Hinako home"
        >
          Hinako
        </a>

        {/* Right utilities */}
        <ul className="flex items-center justify-end gap-5 md:gap-7">
          <li className="hidden md:block">
            <a
              href="#"
              aria-label="Search"
              className="text-ink transition-colors hover:text-cornflower"
            >
              <Search strokeWidth={1.4} className="h-4 w-4" />
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="#"
              aria-label="Account"
              className="text-ink transition-colors hover:text-cornflower"
            >
              <User strokeWidth={1.4} className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href="#shop"
              className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:text-cornflower"
            >
              Cart (0)
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
