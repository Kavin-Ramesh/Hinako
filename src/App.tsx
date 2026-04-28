import { useEffect, useState } from "react";
import Lenis from "lenis";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { StickyCart } from "./components/StickyCart";

import { Hero } from "./sections/Hero";
import { ProductFocus } from "./sections/ProductFocus";
import { ProblemSolution } from "./sections/ProblemSolution";
import { Features } from "./sections/Features";
import { Lifestyle } from "./sections/Lifestyle";
import { HowItWorks } from "./sections/HowItWorks";
import { Testimonials } from "./sections/Testimonials";
import { Purchase } from "./sections/Purchase";
import { FinalCTA } from "./sections/FinalCTA";

export type Variant = "gold" | "silver";

const PRICE = 48;

export default function App() {
  const [variant, setVariant] = useState<Variant>("gold");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const handleAdd = () => setCartCount((c) => c + 1);

  return (
    <div id="top" className="bg-cream text-ink">
      <Nav />

      <main>
        <Hero />
        <ProductFocus />
        <ProblemSolution />
        <Features />
        <Lifestyle />
        <HowItWorks />
        <Testimonials />
        <Purchase
          variant={variant}
          onVariantChange={setVariant}
          price={PRICE}
          onAdd={handleAdd}
          cartCount={cartCount}
        />
        <FinalCTA />
      </main>

      <Footer />

      <StickyCart variant={variant} price={PRICE} onAdd={handleAdd} />
    </div>
  );
}
