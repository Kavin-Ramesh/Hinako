import { motion } from "framer-motion";
import { images } from "../assets/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[calc(100svh-3.5rem)] min-h-[560px] w-full overflow-hidden bg-fog md:h-[calc(100svh-4rem)]"
    >
      <motion.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0"
      >
        <img
          src={images.hero}
          alt="A model in a heather-grey coat with a sand-beige bag held by the Hinako clip"
          className="h-full w-full object-cover object-[60%_center]"
          fetchPriority="high"
        />
        {/* Soft darkening only at the bottom-right corner for legibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 90% 95%, rgba(57,57,64,0.55) 0%, rgba(57,57,64,0.2) 40%, rgba(57,57,64,0) 75%)",
          }}
          aria-hidden
        />
      </motion.div>

      {/* Bottom-right overlay copy */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-[1600px] items-end justify-end px-6 pb-10 md:px-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="text-right text-fog"
          >
            <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-fog/85">
              Est. 2026
            </p>
            <h1 className="font-display text-4xl font-medium leading-[1.0] tracking-[-0.035em] text-fog sm:text-5xl md:text-6xl">
              A bag that <em>stays.</em>
            </h1>
            <div className="mt-6 flex justify-end">
              <a
                href="#shop"
                className="group inline-flex items-center gap-2 rounded-full border border-fog/90 bg-transparent px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:bg-fog hover:text-ink"
              >
                Shop the clip
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-center page indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 1.1 }}
        className="absolute inset-x-0 bottom-5 z-10 flex justify-center md:bottom-7"
        aria-hidden
      >
        <span className="block h-px w-10 bg-fog/85" />
      </motion.div>
    </section>
  );
}
