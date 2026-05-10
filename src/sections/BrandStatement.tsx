import { images } from "../assets/images";
import { Reveal } from "../components/Reveal";

export function BrandStatement() {
  return (
    <section
      id="story"
      aria-labelledby="brand-statement-heading"
      className="border-t border-mist bg-fog py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-12">
        <Reveal>
          <div className="mb-10 flex justify-center">
            <img
              src={images.wordmark}
              alt=""
              width={819}
              height={1024}
              decoding="async"
              loading="lazy"
              className="h-12 w-auto max-w-[min(70vw,280px)] object-contain object-center md:h-14"
            />
          </div>
          <p className="eyebrow mb-10">our philosophy</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="brand-statement-heading"
            className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem]"
          >
            One good thing,<br />
            made <em>really well.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-12 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            At Hinako, our philosophy is to make one of everything really well. To us, that means a single, intentional object you reach for every day. The one you trust. The one you keep coming back to.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
