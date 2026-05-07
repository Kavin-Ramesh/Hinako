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
    <section id="shop" className="border-t border-mist bg-fog py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <p className="eyebrow mb-4">add to your everyday</p>
          <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-6xl lg:text-7xl">
            One clip. <em>Two finishes.</em>
          </h2>
        </Reveal>

        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          <Reveal className="order-2 md:order-1">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md bg-fog">
              {/* soft variant-tinted radial */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    variant === "gold"
                      ? "radial-gradient(circle at 50% 45%, rgba(217,208,193,0.85) 0%, rgba(217,208,193,0.3) 35%, rgba(244,245,247,0) 70%)"
                      : "radial-gradient(circle at 50% 45%, rgba(172,209,242,0.65) 0%, rgba(172,209,242,0.2) 40%, rgba(244,245,247,0) 70%)",
                }}
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={variant}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-full w-full items-center justify-center p-12 md:p-20"
                >
                  <ProductRender variant={variant} className="h-full w-full max-h-[460px]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 md:order-2">
            <p className="eyebrow mb-4">hinako</p>
            <h3 className="font-display text-4xl font-medium leading-tight tracking-[-0.03em] text-ink md:text-5xl">
              The original clip
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Solid brass body, hand-finished plating, recessed silicone grip. One size, made to fit any bag in your closet.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-3">finish</p>
              <div className="inline-flex items-center gap-2">
                <button
                  onClick={() => onVariantChange("gold")}
                  className={`rounded-md border px-5 py-2.5 text-sm transition-all duration-300 ${
                    variant === "gold"
                      ? "border-ink bg-ink text-fog"
                      : "border-mist text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  Slate
                </button>
                <button
                  onClick={() => onVariantChange("silver")}
                  className={`rounded-md border px-5 py-2.5 text-sm transition-all duration-300 ${
                    variant === "silver"
                      ? "border-ink bg-ink text-fog"
                      : "border-mist text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  Sand
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-baseline gap-3">
              <p className="font-display text-4xl font-medium tracking-[-0.03em] text-ink">${price}</p>
              <p className="text-sm text-ink-soft">USD &middot; tax included</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onAdd}
                className="group inline-flex items-center gap-2 rounded-md bg-cornflower px-7 py-3.5 text-sm font-medium text-fog transition-colors duration-300 hover:bg-cornflower-deep"
              >
                Buy clip <span className="text-fog/70">— ${price}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </button>
              {cartCount > 0 && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="eyebrow text-cornflower"
                >
                  {cartCount} in cart
                </motion.span>
              )}
            </div>

            <ul className="mt-10 space-y-3 border-t border-mist pt-8 text-sm text-ink-soft">
              {includes.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-3 bg-cornflower" aria-hidden />
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
