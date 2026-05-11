import { images } from "../assets/images";

/** Layout + rounding for marketing hover (glow animation lives in index.css) */
const marketingHoverStrip =
  "marketing-hover-strip block w-full origin-center rounded-md outline-none";
const marketingHoverCard =
  "marketing-hover-card block w-full max-w-full origin-center rounded-lg outline-none";

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

/** Big hinako wordmark — closing brand mark */
export function VariantsLineup() {
  return (
    <section
      aria-label="Hinako"
      className="border-t border-sand/40 bg-[#eee8df] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[512px] px-6 md:px-12">
        <img
          src={images.wordmark}
          alt="hinako"
          decoding="async"
          loading="lazy"
          draggable={false}
          className="block h-auto w-full select-none"
        />
      </div>
    </section>
  );
}
