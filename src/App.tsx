import { useEffect } from "react";
import Lenis from "lenis";

import { UtilityBar } from "./components/UtilityBar";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

import { Waitlist } from "./sections/Waitlist";
import {
  BenefitsStrip,
  ProductMoments,
  VariantsLineup,
} from "./sections/MarketingSections";
import { BrandStatement } from "./sections/BrandStatement";

export default function App() {
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

  return (
    <div className="bg-fog text-ink">
      <UtilityBar />
      <Nav />

      <main>
        <Waitlist />
        <BenefitsStrip />
        <BrandStatement />
        <ProductMoments />
        <VariantsLineup />
      </main>

      <Footer />
    </div>
  );
}
