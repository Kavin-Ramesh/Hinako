import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.STRIPE_PRICE_ID;

const stripe = secretKey
  ? new Stripe(secretKey, { apiVersion: "2026-04-22.dahlia" })
  : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!stripe || !priceId) {
    return res
      .status(500)
      .json({ error: "Stripe is not configured. Set STRIPE_SECRET_KEY and STRIPE_PRICE_ID." });
  }

  try {
    const origin =
      (req.headers.origin as string | undefined) ??
      (req.headers.host ? `https://${req.headers.host}` : "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      shipping_address_collection: { allowed_countries: ["US"] },
      billing_address_collection: "auto",
      phone_number_collection: { enabled: false },
      allow_promotion_codes: true,
      success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}#join`,
      cancel_url: `${origin}/?checkout=canceled#join`,
    });

    if (!session.url) {
      return res.status(500).json({ error: "Failed to create Stripe Checkout session." });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error creating session.";
    return res.status(500).json({ error: message });
  }
}
