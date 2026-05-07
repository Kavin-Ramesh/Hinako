import { useEffect, useState } from "react";
import Lenis from "lenis";

import { UtilityBar } from "./components/UtilityBar";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { StickyCart } from "./components/StickyCart";

import { Hero } from "./sections/Hero";
import { LineCarousel } from "./sections/LineCarousel";
import { BrandStatement } from "./sections/BrandStatement";
import { CategoryGrid } from "./sections/CategoryGrid";
import { FeaturedSet } from "./sections/FeaturedSet";
import { HowItWorks } from "./sections/HowItWorks";
import { Testimonials } from "./sections/Testimonials";
import { Purchase } from "./sections/Purchase";
import { FinalCTA } from "./sections/FinalCTA";
import { MissionColumns } from "./sections/MissionColumns";

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
    <div id="top" className="bg-fog text-ink">
      <UtilityBar />
      <Nav />

      <main>
        <Hero />
        <LineCarousel />
        <BrandStatement />
        <CategoryGrid />
        <FeaturedSet />
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
        <MissionColumns />
      </main>

      <Footer />

      <StickyCart variant={variant} price={PRICE} onAdd={handleAdd} />
    </div>
  );
}
