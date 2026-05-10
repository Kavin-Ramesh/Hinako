import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section
      id="top"
      aria-labelledby="waitlist-heading"
      className="relative flex min-h-[calc(100svh-7.5rem)] w-full flex-col justify-center overflow-hidden bg-fog px-6 py-16 md:min-h-[calc(100svh-8rem)] md:px-10 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(91,146,217,0.16) 0%, transparent 55%), radial-gradient(ellipse 60% 45% at 100% 100%, rgba(72,118,180,0.08) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          early access
        </motion.p>
        <motion.h1
          id="waitlist-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl md:text-6xl"
        >
          A bag that <em>stays.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.45 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
        >
          One good clip, made really well. Join the list — we will let you know when Hinako opens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.6 }}
          className="mt-10"
        >
          {done ? (
            <p className="text-sm font-medium text-ink" role="status">
              You are on the list. Thank you.
            </p>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
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
                className="min-h-12 flex-1 rounded-md border border-mist bg-fog px-4 text-sm text-ink placeholder:text-ink-soft/70 transition-colors focus:border-rose-deep focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-12 shrink-0 rounded-md bg-rose px-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-fog transition-colors hover:bg-rose-deep"
              >
                Join
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
