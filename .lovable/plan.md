# Payment method popup for pricing cards

Both "Get Started" buttons in "Choose Your Plan" stop being plain links and instead open a plan-aware payment method modal.

## What the user sees

1. Click "Get Started" on either plan card.
2. A dark modal opens (near-black panel, violet/indigo glow, gold accent) showing the plan it came from, e.g. "The Pex System — $149/month" or "Exclusive Mentorship — $249/month".
3. Two large stacked buttons:
   - "Pay with Card / Bank Transfer" (gold, primary)
   - "Pay with Crypto" (outline)
4. An X close button top-right; Escape and backdrop click also close.

## Behavior

- Card / Bank Transfer opens in a new tab (`target="_blank"`, `rel="noopener noreferrer"`) and closes the modal:
  - The Pex System -> https://selar.com/pexsystem
  - Exclusive Mentorship -> https://selar.com/Pex1V1?currency=USD
- Pay with Crypto does not redirect. It closes the method modal and hands the selected plan (name, price, cadence) to the crypto popup step. Since the crypto popup is the next prompt, this step opens a minimal placeholder modal that displays the selected plan and amount, so the plan hand-off is already wired and only the crypto content gets filled in later.

## Technical notes

- New `src/components/pex/PaymentModal.tsx` built on the existing `@/components/ui/dialog` (Radix), styled with existing tokens (`bg-card`, `border-border`, `text-gold`, `shadow-gold`) plus the violet glow utility already used by `Section`.
- Plan definitions (name, price, cadence, checkout URL) move into a small `PRICING_PLANS` array so the card and modal read from one source.
- `PricingCard` in `src/components/pex/blocks.tsx` gains an optional `onCtaClick` handler; when provided the CTA renders as a `<button>` instead of an `<a>`. Existing `ctaHref` behavior stays for any other usage.
- `src/routes/index.tsx` holds the selected-plan state (`selectedPlan`) and the current step (`method` | `crypto` | closed), passes it to the modal, and keeps all other CTAs scrolling to `#pricing` unchanged.
- No backend or payments integration involved — external checkout links only.
