# Hinako

A **waitlist landing page** for **Hinako** — a small metal clip that keeps a handbag strap on the shoulder.

Built with **Vite + React + TypeScript + Tailwind CSS v4**, with **Framer Motion** for subtle reveals and **Lenis** for smooth scrolling.

**Current experience:** one full-viewport **waitlist** (email + join) and a single **philosophy** section below (`BrandStatement`). Everything that used to follow the shop flow (carousel, purchase, mission columns, etc.) has been removed.

The Hinako wordmark is **hand-drawn bubble lettering** in pastel blue (`public/images/wordmark.png`), used in the nav and footer.

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
│  ├─ favicon.svg
│  ├─ images/wordmark.png   Hand-drawn bubble title (nav + footer)
│  └─ images/               `product.jpg` — first-clip promo art; see `assets/images.ts`
├─ src/
│  ├─ App.tsx               Waitlist + philosophy + Lenis
│  ├─ index.css             Tailwind v4 + design tokens
│  ├─ assets/images.ts      Paths for wordmark, product, legacy assets
│  ├─ components/
│  │  ├─ UtilityBar.tsx     Top strip ("launching soon")
│  │  ├─ Nav.tsx            Centered wordmark + waitlist / philosophy links
│  │  ├─ Footer.tsx
│  │  └─ Reveal.tsx         Fade-in-on-view wrapper
│  └─ sections/
│     ├─ Waitlist.tsx       Hero waitlist form (client-side thank-you only)
│     └─ BrandStatement.tsx Philosophy block (#story)
└─ index.html
```

## Design system

Tokens live in [src/index.css](src/index.css) under `@theme`.

| Token             | Value     | Use |
| ----------------- | --------- | --- |
| `color-fog`       | `#EEF3F9` | Page background |
| `color-mist`      | `#DBE4EF` | Hairlines |
| `color-sand`      | `#C8D4E4` | Secondary surfaces |
| `color-rose`      | `#5B92D9` | Primary accent (named `rose` for historical Tailwind classnames) |
| `color-rose-deep` | `#3F74BB` | Hover / focus ring |
| `color-ink`       | `#1A2744` | Primary text |
| `color-ink-soft`  | `#5A6B85` | Secondary text |
| `font-wordmark`   | _unused_      | Replaced by PNG wordmark |

Helpers: `eyebrow`, `hairline`, `wordmark`, `btn-primary`, `btn-primary-rose`, `btn-outline`, `tracked-cta`, `scroll-row`, `scroll-snap`.

## Waitlist form

The form validates email locally and shows a confirmation message. Wire it to your provider (Formspree, Resend, a serverless endpoint, etc.) when you're ready.

## Scripts

| Script            | Purpose |
| ----------------- | ------- |
| `npm run dev`     | Dev server on port 5173 |
| `npm run build`   | Production build |
| `npm run preview` | Preview prod build |
| `npm run lint`    | ESLint |

## Accessibility

- Semantic landmarks, labels on the email field, focus rings on accent blue.
- Honors `prefers-reduced-motion` (Lenis off, instant transitions).
