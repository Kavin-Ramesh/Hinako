import { images } from "../assets/images";

/** Shared white frame — tweak `border-[3px]` / `md:border-4` for thickness */
const stripImgClass =
  "h-auto w-full rounded-md border-[3px] border-white object-contain md:border-4";
const cardImgClass =
  "h-auto w-full rounded-lg border-[3px] border-white object-cover shadow-[0_20px_45px_-28px_rgba(47,61,82,0.12)] md:border-4";

/** Full-width four-benefits graphic — beige band, minimal padding */
export function BenefitsStrip() {
  return (
    <section
      aria-label="Product benefits"
      className="border-t border-sand/40 bg-[#f2ede6] py-10 md:py-14"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <img
          src={images.benefitsStrip}
          alt="Secure: keeps your handbag closed and protected. Lightweight: small in size, big on function. Minimal: designed to blend in with your style. Made to last: quality materials."
          width={1024}
          height={269}
          decoding="async"
          loading="lazy"
          className={stripImgClass}
        />
      </div>
    </section>
  );
}

/** Packaging + editorial still life — Rhode-style two-up */
export function ProductMoments() {
  return (
    <section
      aria-label="Product gallery"
      className="border-t border-sand/40 bg-cream py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-12">
        <figure className="m-0">
          <img
            src={images.productPackaging}
            alt="Hinako handbag clip in open cream gift box with tissue paper"
            width={572}
            height={406}
            decoding="async"
            loading="lazy"
            className={cardImgClass}
          />
        </figure>
        <figure className="m-0 md:pt-6 lg:pt-8">
          <img
            src={images.productEditorial}
            alt="Hinako clip on a stone pedestal with soft floral styling"
            width={572}
            height={406}
            decoding="async"
            loading="lazy"
            className={cardImgClass}
          />
        </figure>
      </div>
    </section>
  );
}

/** Clear, smoke, amber lineup — slim banner */
export function VariantsLineup() {
  return (
    <section
      aria-label="Color options"
      className="border-t border-sand/40 bg-[#eee8df] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <img
          src={images.variantsLineup}
          alt="Hinako handbag clip in three finishes: clear, smoke, and amber"
          width={1024}
          height={238}
          decoding="async"
          loading="lazy"
          className={stripImgClass}
        />
      </div>
    </section>
  );
}
