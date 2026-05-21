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
| `color-fog`       | `#E4EEFB` | Page background (light blue) |
| `color-mist`      | `#C8DAF2` | Hairlines |
| `color-sand`      | `#E9DFD2` | Beige surfaces |
| `color-cream`     | `#F5EEE4` | Cards / inputs |
| `color-butter`    | `#EFE6D8` | Utility strip |
| `color-rose`      | `#5C9AE0` | Primary accent (historical `rose` class names) |
| `color-rose-deep` | `#3D7DCE` | Hover / focus ring |
| `color-ink`       | `#2F3D52` | Primary text |
| `color-ink-soft`  | `#5C6E80` | Secondary text |
| `font-wordmark`   | _unused_  | Replaced by PNG wordmark |

Helpers: `eyebrow`, `hairline`, `wordmark`, `btn-primary`, `btn-primary-rose`, `btn-outline`, `tracked-cta`, `scroll-row`, `scroll-snap`.

## Waitlist form

The form validates email locally and shows a confirmation message. Wire it to your provider (Formspree, Resend, a serverless endpoint, etc.) when you're ready.

## Stripe pre-order

A "Pre-order — $7" button sits under the waitlist form. It POSTs to `/api/create-checkout-session`, which creates a Stripe Checkout Session and redirects the buyer to Stripe-hosted checkout.

### Required env vars

| Var | Where to get it |
| --- | --- |
| `STRIPE_SECRET_KEY` | [Stripe dashboard → API keys](https://dashboard.stripe.com/apikeys). Use `sk_test_...` for testing, `sk_live_...` for production. |
| `STRIPE_PRICE_ID`   | The Price ID of the clip product (`price_...`). |

Copy [`.env.example`](.env.example) to `.env.local` for local dev. For production, add both vars in **Vercel → Project Settings → Environment Variables** (or run `vercel env add`).

### Local testing

```bash
npx vercel dev    # runs Vite + the /api function together
```

Note: `npm run dev` only runs Vite — the Stripe button will fail because the API route isn't running.

Use Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC, any address.

### Flow

1. Customer clicks **Pre-order — $7**.
2. Browser POSTs to `/api/create-checkout-session`; Vercel function creates a Checkout Session and returns its URL.
3. Browser redirects to Stripe-hosted checkout. Stripe collects card + US shipping address.
4. On success → returns to `/?checkout=success#join` → "Thank you — your order is in."
5. On cancel → returns to `/?checkout=canceled#join` → "Checkout canceled — your card was not charged."

### Files

- [`api/create-checkout-session.ts`](api/create-checkout-session.ts) — serverless endpoint. Edit `allowed_countries` here to expand shipping.
- [`src/sections/Waitlist.tsx`](src/sections/Waitlist.tsx) — `startCheckout()` handler + button + status banners.

Orders show up in the **Stripe Dashboard** with the shipping address attached; no DB/webhook is wired up (intentional — Stripe is the source of truth for early pre-orders).

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
