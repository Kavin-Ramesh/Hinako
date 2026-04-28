import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { ProductRender } from "../components/ProductRender";
import type { Variant } from "../App";

type PurchaseProps = {
  variant: Variant;
  onVariantChange: (v: Variant) => void;
  price: number;
  onAdd: () => void;
  cartCount: number;
};

const includes = [
  "Hinako clip in solid brass",
  "Soft chamois pouch",
  "Care card & polishing cloth",
  "Free worldwide shipping",
];

export function Purchase({
  variant,
  onVariantChange,
  price,
  onAdd,
  cartCount,
}: PurchaseProps) {
  return (
    <section id="shop" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <p className="eyebrow mb-4">Add to your everyday</p>
          <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            One clip. <em className="italic font-light">Two finishes.</em>
          </h2>
        </Reveal>

        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          <Reveal className="order-2 md:order-1">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm bg-bone">
              <AnimatePresence mode="wait">
                <motion.div
                  key={variant}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full w-full items-center justify-center p-12 md:p-20"
                >
                  <ProductRender variant={variant} className="h-full w-full max-h-[460px]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 md:order-2">
            <p className="eyebrow mb-4 text-gold">Hinako</p>
            <h3 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              The Original Clip
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Solid brass body, hand-finished plating, recessed silicone grip.
              One size, made to fit any bag in your closet.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-4">Finish</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-beige bg-cream p-1">
                <button
                  onClick={() => onVariantChange("gold")}
                  className={`rounded-full px-6 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-300 ${
                    variant === "gold"
                      ? "bg-ink text-cream"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  Polished Gold
                </button>
                <button
                  onClick={() => onVariantChange("silver")}
                  className={`rounded-full px-6 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-300 ${
                    variant === "silver"
                      ? "bg-ink text-cream"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  Brushed Silver
                </button>
              </div>
            </div>

            <div className="mt-10 flex items-baseline gap-3">
              <p className="font-serif text-4xl text-ink">${price}</p>
              <p className="text-sm text-ink-soft">USD &middot; tax included</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onAdd}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-cream transition-colors duration-300 hover:bg-gold"
              >
                Add to Cart
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </button>
              {cartCount > 0 && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="eyebrow text-gold"
                >
                  {cartCount} in cart
                </motion.span>
              )}
            </div>

            <ul className="mt-12 space-y-3 border-t border-beige/60 pt-8 text-sm text-ink-soft">
              {includes.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-3 bg-gold" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
