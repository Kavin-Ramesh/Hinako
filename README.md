# Hinako

A quiet-luxury landing page for **Hinako** — a minimalist metal clip that
keeps a handbag strap on the shoulder.

Built with **Vite + React + TypeScript + Tailwind CSS v4**, with **Framer
Motion** for subtle reveals and **Lenis** for smooth scrolling.

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

```bash
npm run build    # production build
npm run preview  # preview the production build locally
```

## Project structure

```
hinako/
├─ public/
│  ├─ favicon.svg           Brand mark
│  └─ images/               Drop your own .jpg/.webp here (see "Imagery")
├─ src/
│  ├─ App.tsx               Composes sections, mounts Lenis
│  ├─ index.css             Tailwind v4 + design tokens
│  ├─ assets/images.ts      Single source of truth for all photo URLs
│  ├─ components/
│  │  ├─ Nav.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Reveal.tsx         Framer-Motion fade-in-on-view wrapper
│  │  ├─ ProductRender.tsx  SVG render of the clip (gold / silver)
│  │  └─ StickyCart.tsx     Slides up after the hero
│  └─ sections/
│     ├─ Hero.tsx
│     ├─ ProductFocus.tsx
│     ├─ ProblemSolution.tsx
│     ├─ Features.tsx
│     ├─ Lifestyle.tsx
│     ├─ HowItWorks.tsx
│     ├─ Testimonials.tsx
│     ├─ Purchase.tsx
│     └─ FinalCTA.tsx
└─ index.html
```

## Design system

All tokens live in [`src/index.css`](src/index.css) under the `@theme`
block:

| Token             | Value     | Use                         |
| ----------------- | --------- | --------------------------- |
| `color-cream`     | `#F7F3EC` | Default background          |
| `color-bone`      | `#EFE8DD` | Alternate sections          |
| `color-beige`     | `#D9CFBE` | Dividers, hairlines         |
| `color-ink`       | `#1A1A1A` | Body & headlines            |
| `color-ink-soft`  | `#4A4641` | Secondary text              |
| `color-gold`      | `#B08A4A` | Accent (used sparingly)     |
| `font-serif`      | Cormorant Garamond | Headlines        |
| `font-sans`       | Inter     | UI & body                   |

Use the `eyebrow` utility for the small all-caps labels and `hairline`
for the 1-px beige rules.

## Imagery

Lifestyle photography is sourced from [Unsplash](https://unsplash.com)
via direct CDN URLs in [`src/assets/images.ts`](src/assets/images.ts).

To use your own photography:

1. Drop your JPGs or WebPs into `public/images/` (e.g. `hero.jpg`).
2. Open `src/assets/images.ts` and replace the relevant Unsplash URL
   with the local path: `"/images/hero.jpg"`.

The product clip itself is rendered as an inline SVG
(`src/components/ProductRender.tsx`) so it always matches the brand
palette. Replace it with a real product photo whenever you have studio
shots ready.

## Scripts

| Script           | Purpose                       |
| ---------------- | ----------------------------- |
| `npm run dev`    | Start dev server on port 5173 |
| `npm run build`  | Production build              |
| `npm run preview`| Preview prod build            |
| `npm run lint`   | ESLint                        |

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section`).
- Keyboard focus rings in soft gold (`:focus-visible`).
- Honors `prefers-reduced-motion` (Lenis disabled, animations
  collapsed to instant).
- Image `alt` text on every photo; decorative SVGs marked
  `aria-hidden`.
