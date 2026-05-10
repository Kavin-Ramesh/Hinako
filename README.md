# Hinako

A modern minimalist landing page for **Hinako** — a small metal clip
that keeps a handbag strap on the shoulder.

Built with **Vite + React + TypeScript + Tailwind CSS v4**, with
**Framer Motion** for subtle reveals and **Lenis** for smooth scrolling.

Aesthetic: warm cream, baby pink, soft peach, butter yellow, and
warm-brown ink — Rhode Skin's actual identity. The Hinako wordmark
renders in **Rubik Bubbles** (the closest free match to Rhode's
hand-drawn lettering), always lowercase, in baby pink. Section
headlines stay clean (Geist + Instrument Serif italic accents) so
the bubble lettering is reserved for the brand mark.

Architecture follows Rhode Skin's product-forward storefront flow:
utility bar, sticky three-column nav, full-bleed hero,
horizontal-scroll line carousel, oversized brand statement, curated
category grid, featured kit banner, and three-column mission columns
before the footer.

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build
npm run preview  # preview the production build
```

## Project structure

```
hinako/
├─ public/
│  ├─ favicon.svg           Brand mark
│  └─ images/               Drop your own .jpg/.webp here
├─ src/
│  ├─ App.tsx               Composes sections, mounts Lenis
│  ├─ index.css             Tailwind v4 + design tokens
│  ├─ assets/images.ts      Single source of truth for all photo URLs
│  ├─ components/
│  │  ├─ UtilityBar.tsx     Top shipping-notice strip
│  │  ├─ Nav.tsx            Sticky 3-column nav with centered wordmark
│  │  ├─ Footer.tsx
│  │  ├─ Reveal.tsx         Framer-Motion fade-in-on-view wrapper
│  │  ├─ ProductRender.tsx  Inline SVG of the clip (Slate / Sand)
│  │  └─ StickyCart.tsx     Floating bottom-right button after the hero
│  └─ sections/
│     ├─ Hero.tsx           Full-bleed image with bottom-right corner copy
│     ├─ LineCarousel.tsx   Horizontal-scroll product cards (8 use cases)
│     ├─ BrandStatement.tsx Oversized italic "one good thing" block
│     ├─ CategoryGrid.tsx   4-up curated grid (morning/off-duty/dinner/weekend)
│     ├─ FeaturedSet.tsx    50/50 split kit banner with outlined pill CTA
│     ├─ HowItWorks.tsx     3 horizontal cards with imagery
│     ├─ Testimonials.tsx   Static 3-up press strip
│     ├─ Purchase.tsx       Variant selector + Apple-style buy block
│     ├─ FinalCTA.tsx       Full-bleed image banner with corner copy
│     └─ MissionColumns.tsx 3-column mission/craftsmanship/sustainability
└─ index.html
```

## Design system

All tokens live in [src/index.css](src/index.css) under the `@theme`
block.

| Token              | Value     | Use                              |
| ------------------ | --------- | -------------------------------- |
| `color-fog`        | `#F2EAE0` | Cream primary background         |
| `color-mist`       | `#E8DDC9` | Sand-beige hairline rule         |
| `color-sand`       | `#D9C8B0` | Warm grounding surface           |
| `color-rose`       | `#E8B0CB` | Baby pink — primary accent       |
| `color-rose-deep`  | `#D88AB1` | Hover / active                   |
| `color-peach`      | `#F2C9A8` | Soft secondary surface           |
| `color-butter`     | `#F5E6B0` | Occasional accent surface        |
| `color-ink`        | `#3B2A23` | Warm dark brown — replaces black |
| `color-ink-soft`   | `#7A655B` | Warm taupe secondary text        |
| `font-display`     | Geist     | Display + UI sans grotesque      |
| `font-italic`      | Instrument Serif | Italic accent words       |
| `font-wordmark`    | Rubik Bubbles | Hinako wordmark only         |

Helper utilities: `eyebrow` (small lowercase italic label),
`hairline` (1px mist rule), `wordmark` (lowercase Rubik Bubbles
brand mark), `btn-primary`, `btn-primary-rose`, `btn-outline`,
`tracked-cta` (uppercase tracked mini-CTA), `scroll-row` +
`scroll-snap` (horizontal scroll-snap rows for the line carousel).

## Typography pattern

Headlines use clean Geist sentence case with a single Instrument Serif
italic accent word per heading:

```tsx
<h1 className="font-display text-7xl font-medium tracking-[-0.04em]">
  A bag that <em>stays.</em>
</h1>
```

The `em` automatically picks up Instrument Serif italic via base
styles in [src/index.css](src/index.css).

## Imagery

Photography in `public/images/` is cool, calm, and minimalist —
Toteme/COS-adjacent grey morning light, sand-beige leather, charcoal
accents. Swap any image by dropping a new file into `public/images/`
and updating
[src/assets/images.ts](src/assets/images.ts).

The clip itself is rendered as inline SVG
([src/components/ProductRender.tsx](src/components/ProductRender.tsx))
in two finishes — `Slate` and `Sand` — so the visuals stay cohesive
without studio photography.

## Scripts

| Script            | Purpose                       |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start dev server on port 5173 |
| `npm run build`   | Production build              |
| `npm run preview` | Preview prod build            |
| `npm run lint`    | ESLint                        |

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section`).
- Keyboard focus rings in rose-deep pink (`:focus-visible`).
- Honors `prefers-reduced-motion` (Lenis disabled, animations
  collapsed to instant).
- Image `alt` text on every photo; decorative SVGs marked
  `aria-hidden`.
