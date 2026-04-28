import { motion } from "framer-motion";
import { images } from "../assets/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cream">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0"
      >
        <img
          src={images.hero}
          alt="Model wearing a structured leather bag held in place by the Hinako clip"
          className="h-full w-full object-cover object-[60%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-cream/10" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="eyebrow mb-6 text-ink"
          >
            Hinako &mdash; Est. 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.8 }}
            className="font-serif text-[3.25rem] leading-[1.02] tracking-[-0.015em] text-ink sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem]"
          >
            A bag that <em className="italic font-light">stays.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.0 }}
            className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            Designed to move with you &mdash; without slipping.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-cream transition-colors duration-300 hover:bg-gold"
            >
              Shop Hinako
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>

            <a
              href="#story"
              className="group inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-ink"
            >
              <span className="relative">
                The story
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink transition-transform duration-500 group-hover:scale-x-0" />
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 1.4 }}
        className="absolute bottom-8 right-8 hidden flex-col items-end gap-3 md:flex"
      >
        <span className="eyebrow text-ink-soft">Scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-ink/40"
        />
      </motion.div>
    </section>
  );
}
