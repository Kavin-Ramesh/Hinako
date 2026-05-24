/**
 * Image asset registry.
 *
 * Drop your own .jpg / .webp into `public/images/` and update the path
 * here to swap them in. All paths are served as static assets by Vite.
 */

export const images = {
  /** Hand-drawn “hinako” bubble wordmark (RGBA, transparent) */
  wordmark: "/images/title-card.png",
  /** Waitlist hero — landscape promo (wordmark + tagline + clip on beige). `?v=` busts cache after swaps. */
  product: "/images/product-hero-promo.png?v=h1-20260511a",
  /** Four-pillar value strip (SECURE, LIGHTWEIGHT, MINIMAL, MADE TO LAST) */
  benefitsStrip: "/images/benefits-strip.jpg",
  /** Clip in cream packaging with tissue */
  productPackaging: "/images/product-packaging.png",
  /** Editorial still on stone with floral accents */
  productEditorial: "/images/product-editorial.png",
  /** Clear, smoke, and amber variants lineup */
  variantsLineup: "/images/variants-lineup.jpg?v=2",
  /** Anatomy of the clip — labeled diagram (cache-bust on swap) */
  clipAnatomy: "/images/clip-anatomy.jpg?v=1",
  hero: "/images/hero.jpg",

  // Carousel — clip on a different bag type per card
  line: [
    { slug: "tote", src: "/images/carousel-tote.jpg" },
    { slug: "leather", src: "/images/lifestyle-product.jpg" },
    { slug: "weekender", src: "/images/carousel-weekender.jpg" },
    { slug: "mini", src: "/images/carousel-mini.jpg" },
    { slug: "chain", src: "/images/carousel-chain.jpg" },
    { slug: "canvas", src: "/images/carousel-canvas.jpg" },
    { slug: "wool", src: "/images/carousel-wool.jpg" },
    { slug: "evening", src: "/images/lifestyle-detail.jpg" },
  ],

  // 4-up curated category grid
  category: [
    "/images/carousel-canvas.jpg",
    "/images/carousel-tote.jpg",
    "/images/carousel-mini.jpg",
    "/images/carousel-weekender.jpg",
  ],

  // Featured "the kit" set banner
  kit: "/images/featured-kit.jpg",

  // Editorial / fallbacks
  finalCta: "/images/lifestyle-architectural.jpg",
  detail: "/images/lifestyle-detail.jpg",

  // Mission columns
  mission: {
    purpose: "/images/lifestyle-stilllife.jpg",
    craftsmanship: "/images/mission-craftsmanship.jpg",
    workshop: "/images/mission-workshop.jpg",
  },
} as const;
