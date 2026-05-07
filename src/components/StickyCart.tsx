import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Variant = "gold" | "silver";

type StickyCartProps = {
  variant: Variant;
  price: number;
  onAdd: () => void;
};

export function StickyCart({ variant, price, onAdd }: StickyCartProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroH = window.innerHeight;
      const purchaseEl = document.getElementById("shop");
      if (!purchaseEl) {
        setVisible(window.scrollY > heroH * 1.2);
        return;
      }
      const rect = purchaseEl.getBoundingClientRect();
      const aboveShop = rect.top > window.innerHeight * 0.4;
      const belowHero = window.scrollY > heroH * 1.2;
      setVisible(belowHero && aboveShop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const variantLabel = variant === "gold" ? "Slate" : "Sand";

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile: full-width bottom bar */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-mist bg-fog/95 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3">
              <div className="flex items-center gap-3">
                <div
                  className={`h-9 w-9 rounded-md ${
                    variant === "gold"
                      ? "bg-gradient-to-br from-ink to-ink-soft"
                      : "bg-gradient-to-br from-sand to-mist"
                  }`}
                  aria-hidden
                />
                <div className="leading-tight">
                  <p className="text-sm font-medium text-ink">Hinako</p>
                  <p className="text-xs text-ink-soft">
                    {variantLabel} &middot; ${price}
                  </p>
                </div>
              </div>

              <button
                onClick={onAdd}
                className="group inline-flex items-center gap-2 rounded-md bg-cornflower px-5 py-2.5 text-xs font-medium text-fog transition-colors duration-300 hover:bg-cornflower-deep"
              >
                Buy clip
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </motion.div>

          {/* Desktop: rectangular floating button bottom-right */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-30 hidden md:block"
          >
            <button
              onClick={onAdd}
              className="group inline-flex items-center gap-3 rounded-md bg-ink py-3 pl-3 pr-5 text-sm font-medium text-fog shadow-[0_8px_28px_-12px_rgba(57,57,64,0.45)] transition-colors duration-300 hover:bg-cornflower-deep"
            >
              <span
                className={`h-7 w-7 rounded ${
                  variant === "gold"
                    ? "bg-gradient-to-br from-fog/90 to-mist/40"
                    : "bg-gradient-to-br from-sand to-fog/60"
                }`}
                aria-hidden
              />
              <span>Buy clip</span>
              <span className="text-fog/70">— ${price}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
