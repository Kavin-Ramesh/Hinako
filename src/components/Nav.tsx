import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Product", href: "#product" },
  { label: "Story", href: "#story" },
  { label: "How It Works", href: "#how" },
  { label: "Shop", href: "#shop" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-beige/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#top"
          className="font-serif text-xl tracking-[0.18em] text-ink"
          aria-label="Hinako home"
        >
          HINAKO
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#shop"
          className="group flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:text-gold"
        >
          <span className="hidden sm:inline">Cart</span>
          <span className="font-serif text-base">(0)</span>
        </a>
      </nav>
    </motion.header>
  );
}
