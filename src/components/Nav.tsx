import { motion } from "framer-motion";
import { images } from "../assets/images";

const leftLinks = [
  { label: "Waitlist", href: "#top" },
  { label: "Philosophy", href: "#story" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="sticky top-0 z-40 border-b border-mist bg-fog"
    >
      <nav className="mx-auto grid h-14 max-w-[1600px] grid-cols-3 items-center px-5 md:h-16 md:px-10">
        <div className="flex min-w-0 items-center justify-start">
          <ul className="hidden items-center gap-7 md:flex">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:text-rose-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#top"
          className="justify-self-center leading-none"
          aria-label="Hinako home"
        >
          <img
            src={images.wordmark}
            alt=""
            width={819}
            height={1024}
            className="h-8 w-auto max-w-[min(52vw,220px)] object-contain object-center md:h-9 md:max-w-[260px]"
          />
        </a>

        <div className="min-w-0" aria-hidden />
      </nav>
    </motion.header>
  );
}
