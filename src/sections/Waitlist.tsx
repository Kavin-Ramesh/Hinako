import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Product hero: idle turntable + float live in `index.css` (`.hero-product-*` keyframes).
 * Pointer tilt — desktop / fine pointer only. Tune spin amplitude/duration in CSS; tune tilt here:
 *
 * - maxRotateDeg — max tilt toward edges (degrees). ~4–8 feels luxury-subtle.
 * - hoverScale — 1 = none; ~1.02–1.04 for a slight lift.
 * - hoverLiftPx — negative floats the card up a few pixels (adds on top of idle float).
 * - lerp — smoothing while hovering (0–1). Higher = snappier follow.
 * - transitionLerpOnLeave — smoothing after mouse leave (usually lower = slower settle).
 * - perspectivePx — on the stage wrapper; higher = flatter 3D (try 900–1200).
 * - easeShadow() below — edit RGBA / blur / spread for rest vs active shadows.
 */
const TILT = {
  maxRotateDeg: 5.5,
  hoverScale: 1.022,
  hoverLiftPx: -6,
  lerp: 0.14,
  transitionLerpOnLeave: 0.09,
  perspectivePx: 1000,
} as const;

/** shadowT: 0 = rest, 1 = full hover — blend for a soft premium shadow */
function easeShadow(shadowT: number) {
  const v = Math.max(0, Math.min(1, shadowT));
  const blur = 60 + 14 * v;
  const y = 24 + 12 * v;
  const spread = -24 + 4 * v;
  const alpha = 0.14 + 0.06 * v;
  const accent = v > 0.04 ? `, 0 ${14 + 10 * v}px ${38 + 14 * v}px -12px rgba(92, 154, 224, ${0.08 + 0.08 * v})` : "";
  return `0 ${y}px ${blur}px ${spread}px rgba(47, 61, 82, ${alpha})${accent}`;
}

type TiltVals = { rx: number; ry: number; s: number; lz: number; shadowT: number };

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [idleMotionEnabled, setIdleMotionEnabled] = useState(false);
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<TiltVals>({ rx: 0, ry: 0, s: 1, lz: 0, shadowT: 0 });
  const targetRef = useRef<TiltVals>({ rx: 0, ry: 0, s: 1, lz: 0, shadowT: 0 });
  const hoveringRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      const reduce = reduceMq.matches;
      setIdleMotionEnabled(!reduce);
      setTiltEnabled(!reduce && fineMq.matches);
    };
    sync();
    reduceMq.addEventListener("change", sync);
    fineMq.addEventListener("change", sync);
    return () => {
      reduceMq.removeEventListener("change", sync);
      fineMq.removeEventListener("change", sync);
    };
  }, []);

  const runFrame = useCallback(() => {
    const el = cardRef.current;
    if (!el || !tiltEnabled) return;

    const c = currentRef.current;
    const t = targetRef.current;
    const a = hoveringRef.current ? TILT.lerp : TILT.transitionLerpOnLeave;

    c.rx += (t.rx - c.rx) * a;
    c.ry += (t.ry - c.ry) * a;
    c.s += (t.s - c.s) * a;
    c.lz += (t.lz - c.lz) * a;
    c.shadowT += (t.shadowT - c.shadowT) * a;

    el.style.transform = `rotateX(${c.rx}deg) rotateY(${c.ry}deg) translateY(${c.lz}px) scale(${c.s})`;
    el.style.boxShadow = easeShadow(c.shadowT);

    const eps = 0.003;
    const settled =
      Math.abs(t.rx - c.rx) < eps &&
      Math.abs(t.ry - c.ry) < eps &&
      Math.abs(t.s - c.s) < eps &&
      Math.abs(t.lz - c.lz) < eps &&
      Math.abs(t.shadowT - c.shadowT) < eps;

    if (!settled) {
      rafRef.current = requestAnimationFrame(runFrame);
    } else {
      rafRef.current = 0;
    }
  }, [tiltEnabled]);

  const scheduleFrame = useCallback(() => {
    if (!tiltEnabled) return;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(runFrame);
  }, [tiltEnabled, runFrame]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!tiltEnabled && rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, [tiltEnabled]);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!tiltEnabled || !el) return;
    currentRef.current = { rx: 0, ry: 0, s: 1, lz: 0, shadowT: 0 };
    targetRef.current = { rx: 0, ry: 0, s: 1, lz: 0, shadowT: 0 };
    el.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    el.style.boxShadow = easeShadow(0);
  }, [tiltEnabled]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    const cx = Math.max(-0.5, Math.min(0.5, nx));
    const cy = Math.max(-0.5, Math.min(0.5, ny));

    targetRef.current.ry = cx * 2 * TILT.maxRotateDeg;
    targetRef.current.rx = -cy * 2 * TILT.maxRotateDeg;
    targetRef.current.s = TILT.hoverScale;
    targetRef.current.lz = TILT.hoverLiftPx;
    targetRef.current.shadowT = 1;
    scheduleFrame();
  };

  const onMouseEnter = () => {
    if (!tiltEnabled) return;
    hoveringRef.current = true;
    targetRef.current.s = TILT.hoverScale;
    targetRef.current.lz = TILT.hoverLiftPx;
    targetRef.current.shadowT = 1;
    scheduleFrame();
  };

  const onMouseLeave = () => {
    if (!tiltEnabled) return;
    hoveringRef.current = false;
    targetRef.current.rx = 0;
    targetRef.current.ry = 0;
    targetRef.current.s = 1;
    targetRef.current.lz = 0;
    targetRef.current.shadowT = 0;
    scheduleFrame();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
    setEmail("");
  };

  const productCard = (
    <div
      ref={tiltEnabled ? cardRef : undefined}
      role={tiltEnabled ? "presentation" : undefined}
      onMouseEnter={tiltEnabled ? onMouseEnter : undefined}
      onMouseMove={tiltEnabled ? onMouseMove : undefined}
      onMouseLeave={tiltEnabled ? onMouseLeave : undefined}
      className={`overflow-hidden rounded-2xl border border-mist bg-cream transform-gpu will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden] ${
        tiltEnabled ? "shadow-none" : "shadow-[0_24px_60px_-24px_rgba(47,61,82,0.14)]"
      }`}
    >
      <img
        src={images.product}
        alt="Hinako the handbag clip — secure your style. Translucent clip prototype on a warm beige background."
        className="mx-auto h-auto w-full max-h-[min(42vh,380px)] object-contain object-center md:max-h-[min(46vh,420px)]"
        fetchPriority="high"
        width={933}
        height={1024}
        draggable={false}
      />
    </div>
  );

  const perspectiveStage =
    idleMotionEnabled || tiltEnabled ? `${TILT.perspectivePx}px` : undefined;

  const heroProduct = (
    <div className="hero-product-stage relative w-full overflow-visible pb-8 pt-0.5 md:pb-10">
      <div className="hero-product-oval-shadow" aria-hidden />
      <div
        className="relative z-[1] px-0.5"
        style={perspectiveStage ? { perspective: perspectiveStage } : undefined}
      >
        {idleMotionEnabled ? (
          <div className="hero-product-float-layer will-change-transform">
            <div className="hero-product-spin-layer will-change-transform">{productCard}</div>
          </div>
        ) : (
          productCard
        )}
      </div>
    </div>
  );

  return (
    <section
      id="top"
      aria-labelledby="waitlist-heading"
      className="relative flex min-h-[calc(100svh-8rem)] w-full flex-col justify-center overflow-x-hidden overflow-y-visible bg-fog px-6 py-16 md:min-h-[calc(100svh-8.75rem)] md:px-10 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(92,154,224,0.18) 0%, transparent 55%), radial-gradient(ellipse 55% 48% at 100% 100%, rgba(233,223,210,0.45) 0%, transparent 52%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.05 }}
            className="mx-auto w-full max-w-2xl overflow-visible lg:mx-0 lg:max-w-none"
          >
            {heroProduct}
            <figcaption className="mt-4 text-center text-xs leading-relaxed text-ink-soft lg:text-left">
              The first Hinako clip — the handbag clip, refined for production.
            </figcaption>
          </motion.figure>

          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="eyebrow mb-6"
            >
              early access
            </motion.p>
            <motion.h1
              id="waitlist-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.28 }}
              className="font-display mx-auto max-w-[min(92vw,440px)] text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl md:text-6xl lg:mx-0"
            >
              A bag that <em>stays.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.42 }}
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg lg:mx-0"
            >
              One good clip, made really well. Join the list — we will let you know when Hinako opens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.52 }}
              className="mt-10"
            >
              {done ? (
                <p className="text-sm font-medium text-ink lg:text-left" role="status">
                  You are on the list. Thank you.
                </p>
              ) : (
                <form
                  onSubmit={submit}
                  className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch lg:mx-0"
                >
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="min-h-12 flex-1 rounded-md border border-mist bg-cream/80 px-4 text-sm text-ink placeholder:text-ink-soft/70 backdrop-blur-sm transition-colors focus:border-rose-deep focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="min-h-12 shrink-0 rounded-md bg-rose px-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-rose-deep"
                  >
                    Join
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
