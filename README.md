# Pex System Landing

using the attached image as reference, Build a responsive landing page for a forex trading program called "The Pex System."

STRUCTURE (in this exact order):

1. Header — logo + nav

2. Hero — eyebrow badge, headline, subheadline, video, CTA

3. Success Stories — video testimonial grid

4. Here's How It Works — 3-step process

5. What's Included? — 6-item feature grid

6. Trader Spotlight — circular avatar row

7. Split section ("Everything You Need To Get Funded, In One Place") — text + image

8. FAQ accordion

9. See The Reviews — image grid

10. CTA banner ("The Choice Is Simple")

11. Choose Your Plan — 2 pricing cards

12. Footer

HEADER:

- Left: logo text "THE PEX SYSTEM" — the word "SYSTEM" in gold accent color, rest in dark/white depending on theme

- Right: "Join Now" button — keep this button a distinct blue color, NOT the gold CTA color used everywhere else

THEME — dark background with gradient glow (not the flat white/light-blue look):

- Base background: #0A0A12 (near-black, slight blue tint)

- Apply a soft radial gradient glow behind key sections (hero, CTA banner, pricing) blending 

  from deep violet (#4C1D95) to indigo (#1E1B4B), heavily blurred, no hard edges

- Alternate some sections with a secondary electric blue glow (#1E3A8A) for rhythm between 

  sections, similar to how light/muted sections would normally alternate

- Body text: off-white (#F5F5F7); headings white/light gray, bold

- Card backgrounds: #14141F with a 1px border in #2A2A3D, rounded corners (~12px), soft shadow

- Footer: near-pure black (#050508)

- All primary CTA buttons: gold/orange fill (e.g. #F5A623), rounded/pill-shaped — this is the 

  one consistent accent color used on every button site-wide EXCEPT the header "Join Now" button

- Secondary/outline buttons: white or light-violet border, transparent fill

- Maintain WCAG AA text contrast throughout — lighten body gray further on the darkest sections 

  if needed

Keep all components modular (reusable Card, AccordionItem, PricingCard, StepCard, FeatureCard) 

so content can be swapped without restructuring.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://thepexsystem-v2.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d62bc243-9363-4b75-8a6f-37643040fa63).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
