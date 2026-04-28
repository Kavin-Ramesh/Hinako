import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

const quotes = [
  {
    quote: "I stopped adjusting my bag completely.",
    author: "Lena M.",
    location: "Paris",
  },
  {
    quote: "It&rsquo;s small, but it changes everything.",
    author: "Aiko T.",
    location: "Tokyo",
  },
  {
    quote: "My shoulders thanked me by the second day.",
    author: "Margot R.",
    location: "Copenhagen",
  },
  {
    quote: "It looks like a piece of jewelry. It works like an engineer.",
    author: "Sara K.",
    location: "Milan",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section className="bg-bone py-32 md:py-48">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <Reveal>
          <p className="eyebrow mb-10">Worn by</p>
        </Reveal>

        <div className="relative min-h-[260px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <p
                className="font-serif text-3xl italic font-light leading-[1.25] text-ink sm:text-4xl md:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
              />
              <footer className="flex flex-col items-center gap-2">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-ink-soft">
                  {q.author} &middot; {q.location}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-10 bg-ink" : "w-5 bg-beige hover:bg-ink-soft"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
