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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-beige/60 bg-cream/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 md:px-12">
            <div className="flex items-center gap-4">
              <div
                className={`h-10 w-10 rounded-md ${
                  variant === "gold"
                    ? "bg-gradient-to-br from-gold-soft to-gold"
                    : "bg-gradient-to-br from-stone-soft to-beige"
                } shadow-sm`}
                aria-hidden
              />
              <div className="leading-tight">
                <p className="font-serif text-lg text-ink">Hinako</p>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft">
                  {variant === "gold" ? "Polished Gold" : "Brushed Silver"} &middot; ${price}
                </p>
              </div>
            </div>

            <button
              onClick={onAdd}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-cream transition-colors duration-300 hover:bg-gold md:px-8"
            >
              Add to Cart
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
