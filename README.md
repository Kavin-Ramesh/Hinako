# Hinako

A modern minimalist landing page for **Hinako** — a small metal clip
that keeps a handbag strap on the shoulder.

Built with **Vite + React + TypeScript + Tailwind CSS v4**, with
**Framer Motion** for subtle reveals and **Lenis** for smooth scrolling.

Aesthetic: heather grey, sand beige, soft cornflower blue, and
charcoal — quiet, confident, trust-modern-luxury 2026. Inspired by
Rhode by Hailey Bieber, with a cooler grey-blue palette that signals
intentional minimalism over high-end metallic glamour.

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
│  │  ├─ Nav.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Reveal.tsx         Framer-Motion fade-in-on-view wrapper
│  │  ├─ ProductRender.tsx  Inline SVG of the clip (Slate / Sand)
│  │  └─ StickyCart.tsx     Floating bottom-right button after the hero
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

All tokens live in [src/index.css](src/index.css) under the `@theme`
block.

| Token              | Value     | Use                          |
| ------------------ | --------- | ---------------------------- |
| `color-fog`        | `#F4F5F7` | Primary background           |
| `color-mist`       | `#E6E7EA` | Hairline rules, dividers     |
| `color-sand`       | `#D9D0C1` | Warm grounding surface       |
| `color-powder`     | `#ACD1F2` | Soft tertiary surface        |
| `color-periwinkle` | `#A0B8F2` | Soft secondary accent        |
| `color-cornflower` | `#5B92D9` | Primary accent (CTAs)        |
| `color-ink`        | `#393940` | Charcoal — replaces black    |
| `color-ink-soft`   | `#6F7480` | Secondary text               |
| `font-display`     | Geist     | Display + UI sans grotesque  |
| `font-italic`      | Instrument Serif | Italic accent words   |

Helper utilities: `eyebrow` (small lowercase italic label),
`hairline` (1px mist rule), `btn-primary`, `btn-primary-cornflower`,
`btn-outline`.

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
- Keyboard focus rings in cornflower blue (`:focus-visible`).
- Honors `prefers-reduced-motion` (Lenis disabled, animations
  collapsed to instant).
- Image `alt` text on every photo; decorative SVGs marked
  `aria-hidden`.
