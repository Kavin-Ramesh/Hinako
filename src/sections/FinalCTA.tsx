import { Reveal } from "../components/Reveal";
import { images } from "../assets/images";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative h-[80vh] min-h-[520px] w-full overflow-hidden border-t border-mist bg-fog"
    >
      <div className="absolute inset-0">
        <img
          src={images.finalCta}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-[60%_40%]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 12% 90%, rgba(59,42,35,0.6) 0%, rgba(59,42,35,0.18) 45%, rgba(59,42,35,0) 75%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-fog/85">
            Hinako
          </p>
          <h2
            id="final-cta-heading"
            className="font-display text-4xl font-medium leading-[1.0] tracking-[-0.04em] text-fog sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Stop adjusting. <em>Start moving.</em>
          </h2>

          <a
            href="#shop"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-fog/90 bg-transparent px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:bg-fog hover:text-ink"
          >
            Shop the clip
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
