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
      <nav className="mx-auto grid h-16 max-w-[1600px] grid-cols-3 items-center px-5 md:h-[4.75rem] md:px-10">
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
          className="group/wordmark justify-self-center rounded-lg p-1.5 leading-none outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
          aria-label="Hinako home"
        >
          <img
            src={images.wordmark}
            alt=""
            width={819}
            height={1024}
            className="h-12 w-auto max-w-[min(70vw,320px)] object-contain object-center transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/wordmark:-translate-y-0.5 group-hover/wordmark:scale-[1.06] group-hover/wordmark:drop-shadow-[0_12px_28px_rgba(92,154,224,0.45)] sm:h-[3.25rem] md:h-14 md:max-w-[min(78vw,400px)] lg:max-w-[460px]"
          />
        </a>

        <div className="min-w-0" aria-hidden />
      </nav>
    </motion.header>
  );
}
