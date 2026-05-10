import { images } from "../assets/images";

/** Shared luxury hover — tweak translate / shadow / duration here */
const marketingHoverStrip =
  "block w-full origin-center rounded-md outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_46px_-10px_rgba(237,229,216,0.92),0_12px_32px_-12px_rgba(47,61,82,0.1)]";

const marketingHoverCard =
  "block w-full origin-center rounded-lg outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_52px_-12px_rgba(237,229,216,0.94),0_14px_36px_-14px_rgba(47,61,82,0.11)]";

/** Shared white frame — tweak `border-[3px]` / `md:border-4` for thickness */
const stripImgClass =
  "h-auto w-full rounded-md border-[3px] border-white object-contain md:border-4";
const cardImgClass =
  "h-auto w-full rounded-lg border-[3px] border-white object-contain shadow-[0_20px_45px_-28px_rgba(47,61,82,0.12)] md:border-4";

/** Full-width four-benefits graphic — beige band, minimal padding */
export function BenefitsStrip() {
  return (
    <section
      aria-label="Product benefits"
      className="border-t border-sand/40 bg-[#f2ede6] py-10 md:py-14"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <div className={marketingHoverStrip}>
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
      </div>
    </section>
  );
}

/** Packaging + editorial still life — Rhode-style two-up */
export function ProductMoments() {
  return (
    <section
      aria-label="Product gallery"
      className="border-t border-sand/40 bg-cream py-14 md:py-16 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-[56rem] grid-cols-1 gap-8 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-6 md:px-8 lg:max-w-[60rem] lg:gap-7 lg:px-10">
        <figure className="m-0 flex w-full justify-center">
          <div className={`${marketingHoverCard} w-full max-w-full`}>
            <img
              src={images.productPackaging}
              alt="Hinako handbag clip in open cream gift box with tissue paper"
              width={572}
              height={406}
              decoding="async"
              loading="lazy"
              className={cardImgClass}
            />
          </div>
        </figure>
        <figure className="m-0 flex w-full justify-center">
          <div className={`${marketingHoverCard} w-full max-w-full`}>
            <img
              src={images.productEditorial}
              alt="Hinako clip on a stone pedestal with soft floral styling"
              width={572}
              height={406}
              decoding="async"
              loading="lazy"
              className={cardImgClass}
            />
          </div>
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
        <div className={marketingHoverStrip}>
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
      </div>
    </section>
  );
}
