import { motion } from "framer-motion";
import { Gem, Anchor, Feather } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    icon: Gem,
    title: "crystal-clear",
    body: "Transparent design complements your bag without distracting from it.",
  },
  {
    icon: Anchor,
    title: "dual strap support",
    body: "Holds one strap in the clip and one on top — both stay secured.",
  },
  {
    icon: Feather,
    title: "silicone shoulder pad",
    body: "Soft cushion against your shoulder. Reduces pressure, digging, and slipping.",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="border-b border-[color:var(--hinako-line)] bg-fog px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="uppercase-wide mb-3 text-ink-soft"
          >
            what's inside
          </motion.p>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="serif-italic text-4xl font-medium leading-[1] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            built for the carry.
          </motion.h2>
        </div>

        <ul className="grid gap-10 md:grid-cols-3 md:gap-12">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, ease, delay: 0.15 + i * 0.1 }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-mist bg-cream text-ink">
                  <Icon size={22} strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="uppercase-wide mb-3 text-ink">{f.title}</h3>
                <p className="max-w-xs text-base leading-relaxed text-ink-soft">
                  {f.body}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
