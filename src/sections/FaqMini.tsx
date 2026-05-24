import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";

const FAQ = [
  {
    q: "when does hinako launch?",
    a: "June 2026. waitlist members get 24-hour early access and a small thank-you discount before public launch.",
  },
  { q: "how much will it cost?", a: "$7 for one. $12 for two. shipping flat $4 in the US." },
  {
    q: "what bags does it work on?",
    a: "any strap up to 1.5\" wide. totes, shoulder bags, crossbody, gym bags. the silicone collar grips without creasing.",
  },
];

function Row({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    setH(open ? ref.current.scrollHeight : 0);
  }, [open]);
  return (
    <div className="py-2">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between py-4 text-left"
      >
        <span className="flex items-baseline gap-4">
          <span className="uppercase-wide tabular-nums text-[color:var(--hinako-muted)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="serif-italic text-lg transition-transform duration-500 group-hover:translate-x-1 md:text-xl">
            {q}
          </span>
        </span>
        <span
          className={[
            "relative h-5 w-5 shrink-0 transition-transform duration-500",
            open ? "rotate-45" : "rotate-0",
          ].join(" ")}
          aria-hidden
        >
          <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[color:var(--hinako-text)]" />
          <span className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[color:var(--hinako-text)]" />
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-700"
        style={{ maxHeight: h }}
        aria-hidden={!open}
      >
        <div ref={ref} className="pb-5 pl-12 pr-8">
          <p
            className={[
              "text-base leading-relaxed text-[color:var(--hinako-text)]/85 transition-all duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
            ].join(" ")}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqMini() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-[color:var(--hinako-line)] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="uppercase-wide mb-2 text-[color:var(--hinako-muted)]">
            questions
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="serif-italic mb-10 text-5xl leading-[0.95] md:text-6xl">
            before launch.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="divide-y divide-[color:var(--hinako-line)] border-y border-[color:var(--hinako-line)]">
            {FAQ.map((item, i) => (
              <Row
                key={item.q}
                q={item.q}
                a={item.a}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx((p) => (p === i ? null : i))}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
