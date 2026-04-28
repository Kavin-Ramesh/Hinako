import { ShieldCheck, Feather, Gem, Infinity as InfinityIcon, Sparkle } from "lucide-react";
import { Reveal } from "../components/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure hold",
    copy: "Grips firmly without leaving a mark on leather, canvas, or wool.",
  },
  {
    icon: Feather,
    title: "Lightweight & compact",
    copy: "Twelve grams. Disappears in your palm and on your strap.",
  },
  {
    icon: Gem,
    title: "Premium build",
    copy: "Solid brass core, hand-finished plating, brushed steel teeth.",
  },
  {
    icon: InfinityIcon,
    title: "Universal fit",
    copy: "Adjusts from delicate chains to wide leather straps up to 25mm.",
  },
  {
    icon: Sparkle,
    title: "Everyday elegance",
    copy: "Refined enough for evening, quiet enough for the office.",
  },
];

export function Features() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow mb-4">What makes it Hinako</p>
          <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            Small in size. <em className="italic font-light">Considered everywhere.</em>
          </h2>
        </Reveal>

        <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08} className="group">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-beige text-gold transition-colors duration-500 group-hover:border-gold">
                  <Icon strokeWidth={1.1} className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl text-ink md:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                  {f.copy}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
