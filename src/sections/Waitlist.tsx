import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Product hero: idle turntable + float live in `index.css` (`.hero-product-*` keyframes).
 * Pointer tilt — desktop / fine pointer only. Tune spin amplitude/duration in CSS; tune tilt here:
 *
 * - maxRotateDeg — max tilt toward edges (degrees).
 * - hoverScale — 1 = none; ~1.03–1.05 reads clearly with idle spin.
 * - hoverLiftPx — negative floats the card up a few pixels (adds on top of idle float).
 * - lerp — smoothing while hovering (0–1). Higher = snappier follow.
 * - transitionLerpOnLeave — smoothing after mouse leave (usually lower = slower settle).
 * - perspectivePx — on the stage wrapper; higher = flatter 3D (try 900–1200).
 * - easeShadow() below — edit RGBA / blur / spread for rest vs active shadows.
 */
const TILT = {
  maxRotateDeg: 8.5,
  hoverScale: 1.038,
  hoverLiftPx: -10,
  lerp: 0.16,
  transitionLerpOnLeave: 0.09,
  perspectivePx: 920,
} as const;

/** shadowT: 0 = rest, 1 = full hover — blend for a soft premium shadow */
function easeShadow(shadowT: number) {
  const v = Math.max(0, Math.min(1, shadowT));
  const blur = 60 + 14 * v;
  const y = 24 + 12 * v;
  const spread = -24 + 4 * v;
  const alpha = 0.14 + 0.06 * v;
  const accent = v > 0.04 ? `, 0 ${14 + 10 * v}px ${38 + 14 * v}px -12px rgba(168, 184, 158, ${0.12 + 0.08 * v})` : "";
  return `0 ${y}px ${blur}px ${spread}px rgba(28, 28, 26, ${alpha})${accent}`;
}

type TiltVals = { rx: number; ry: number; s: number; lz: number; shadowT: number };

export function Waitlist() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [checkoutStatus, setCheckoutStatus] = useState<"success" | "canceled" | null>(null);
  const [idleMotionEnabled, setIdleMotionEnabled] = useState(false);
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<TiltVals>({ rx: 0, ry: 0, s: 1, lz: 0, shadowT: 0 });
  const targetRef = useRef<TiltVals>({ rx: 0, ry: 0, s: 1, lz: 0, shadowT: 0 });
  const hoveringRef = useRef(false);
  const rafRef = useRef<number>(0);
  const runFrameRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const status = params.get("checkout");
    if (status === "success" || status === "canceled") {
      setCheckoutStatus(status);
      params.delete("checkout");
      params.delete("session_id");
      const remaining = params.toString();
      const newUrl =
        window.location.pathname + (remaining ? `?${remaining}` : "") + window.location.hash;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

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
      rafRef.current = requestAnimationFrame(() => {
        runFrameRef.current();
      });
    } else {
      rafRef.current = 0;
    }
  }, [tiltEnabled]);

  useLayoutEffect(() => {
    runFrameRef.current = runFrame;
  }, [runFrame]);

  const scheduleFrame = useCallback(() => {
    if (!tiltEnabled) return;
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        runFrameRef.current();
      });
    }
  }, [tiltEnabled]);

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

  const startCheckout = async () => {
    if (checkoutLoading) return;
    setCheckoutLoading(true);
    setCheckoutError(null);
    try {
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Could not start checkout. Please try again.");
      }
      window.location.assign(data.url);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not start checkout.";
      setCheckoutError(message);
      setCheckoutLoading(false);
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const submittedFirstName = firstName.trim();
    const submittedLastName = lastName.trim();
    const submittedEmail = email;
    setDone(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    fetch(
      "https://script.google.com/macros/s/AKfycbyD0FEk4oVZh3BrksppDhmg7fnwU9Fsn4oiLWkjpEcZ-5LYy9kO5zpP7d_XI_HCwtVU/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          firstName: submittedFirstName,
          lastName: submittedLastName,
          email: submittedEmail,
        }),
      },
    ).catch(() => {});
  };

  const productCard = (
    <div
      ref={tiltEnabled ? cardRef : undefined}
      role={tiltEnabled ? "presentation" : undefined}
      onMouseEnter={tiltEnabled ? onMouseEnter : undefined}
      onMouseMove={tiltEnabled ? onMouseMove : undefined}
      onMouseLeave={tiltEnabled ? onMouseLeave : undefined}
      className={`overflow-hidden rounded-2xl border border-mist bg-cream transform-gpu will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden] ${
        tiltEnabled ? "shadow-none" : "shadow-[0_24px_60px_-24px_rgba(28,28,26,0.14)]"
      }`}
    >
      <img
        src={images.product}
        alt="Hinako — the handbag clip, secure your style. Sky-blue wordmark and translucent clip on a warm beige background."
        className="mx-auto h-auto w-full max-h-[min(48vh,420px)] object-contain object-center md:max-h-[min(52vh,480px)]"
        fetchPriority="high"
        width={1024}
        height={570}
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
        id="join"
        aria-labelledby="waitlist-heading"
        className="relative overflow-x-hidden overflow-y-visible border-b border-[color:var(--hinako-line)] bg-fog px-6 py-16 md:px-10 md:py-24"
      >
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
                className="uppercase-wide mb-4 text-ink-soft"
              >
                early access
              </motion.p>
              <motion.h2
                id="waitlist-heading"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.28 }}
                className="serif-italic text-5xl font-medium leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl"
              >
                first in line.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.42 }}
                className="mx-auto mt-6 max-w-md text-base text-ink-soft md:text-lg lg:mx-0"
              >
                Be the first to hear when Hinako opens. One good clip, made really well.
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
                    className="mx-auto max-w-lg space-y-5 lg:mx-0"
                    aria-label="Join the waitlist"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="input-line">
                        <label htmlFor="waitlist-first-name" className="sr-only">
                          First name
                        </label>
                        <input
                          id="waitlist-first-name"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="first name"
                          className="flex-1 bg-transparent py-3 text-base text-ink placeholder:text-ink-soft/80 focus:outline-none"
                        />
                      </div>
                      <div className="input-line">
                        <label htmlFor="waitlist-last-name" className="sr-only">
                          Last name
                        </label>
                        <input
                          id="waitlist-last-name"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="last name"
                          className="flex-1 bg-transparent py-3 text-base text-ink placeholder:text-ink-soft/80 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="input-line">
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
                        placeholder="your email"
                        className="flex-1 bg-transparent py-3 text-base text-ink placeholder:text-ink-soft/80 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 py-3 pl-4 uppercase-wide text-ink transition-opacity hover:opacity-70"
                      >
                        <span>join</span>
                        <span className="arrow">→</span>
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.62 }}
                className="mt-8"
              >
                {checkoutStatus === "success" ? (
                  <p
                    className="text-sm font-medium text-ink lg:text-left"
                    role="status"
                  >
                    Thank you — your order is in. We will email you a confirmation shortly.
                  </p>
                ) : (
                  <>
                    <div className="flex flex-col items-center gap-3 lg:items-start">
                      <button
                        type="button"
                        onClick={startCheckout}
                        disabled={checkoutLoading}
                        className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 uppercase-wide text-cream transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <span>
                          {checkoutLoading ? "redirecting…" : "pre-order — $7"}
                        </span>
                        <span className="arrow">→</span>
                      </button>
                      <p className="text-xs text-ink-soft">
                        Secure checkout via Stripe. Ships at launch.
                      </p>
                    </div>
                    {checkoutStatus === "canceled" && (
                      <p
                        className="mt-3 text-sm text-ink-soft lg:text-left"
                        role="status"
                      >
                        Checkout canceled — your card was not charged.
                      </p>
                    )}
                    {checkoutError && (
                      <p
                        className="mt-3 text-sm text-red-500 lg:text-left"
                        role="alert"
                      >
                        {checkoutError}
                      </p>
                    )}
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
}
