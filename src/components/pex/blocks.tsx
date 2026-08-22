import type { ReactNode } from "react";
import { Card } from "./primitives";
import { InlineVideo } from "./media";
import { cn } from "@/lib/utils";

export function StepCard({
  step,
  title,
  body,
  media,
}: {
  step: string;
  title: string;
  body: string;
  media?: ReactNode;
}) {
  return (
    <Card className="flex flex-col gap-5">
      <div>
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-gold">
          {step}
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
      {media ? <div className="mt-auto">{media}</div> : null}
    </Card>
  );
}

export function StepImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-letterbox">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="size-full object-contain"
      />
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-gold">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </Card>
  );
}

export function TestimonialCard({
  name,
  result,
  src,
  kind,
}: {
  name: string;
  result: string;
  src: string;
  kind: "youtube" | "mp4";
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-light p-3 shadow-card">
      <InlineVideo src={src} kind={kind} />
      <div className="flex items-center gap-3 px-1 py-3">
        <div
          className="size-9 rounded-full border border-border bg-muted"
          aria-hidden
        />
        <div>
          <p className="text-sm font-semibold text-surface-light-foreground">{name}</p>
          <p className="text-xs text-surface-light-foreground/70">{result}</p>
        </div>
      </div>
    </div>
  );
}

export function AvatarBubble({ name, src }: { name: string; src: string }) {
  return (
    <figure className="flex w-24 flex-col items-center gap-2">
      <div className="flex size-20 items-center justify-center overflow-hidden rounded-full border border-border bg-letterbox shadow-card sm:size-24">
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="size-full object-contain"
        />
      </div>
      <figcaption className="text-xs text-muted-foreground">{name}</figcaption>
    </figure>
  );
}

export function PricingCard({
  name,
  price,
  cadence,
  blurb,
  features,
  featured = false,
  cta,
  ctaHref = "#checkout",
  onCtaClick,
}: {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
  /** Pricing CTAs go to signup/checkout, not the pricing anchor. */
  ctaHref?: string;
  /** When provided, the CTA opens the payment flow instead of navigating. */
  onCtaClick?: () => void;
}) {
  const ctaClass = cn(
    "mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]",
    featured
      ? "bg-gold text-gold-foreground shadow-gold"
      : "border border-foreground/40 text-foreground hover:bg-accent",
  );
  return (
    <Card
      className={cn(
        "flex flex-col",
        featured && "border-gold/60 shadow-gold",
      )}
    >
      {featured ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Most popular
        </p>
      ) : null}
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {name}
      </h3>
      <p className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        <span className="pb-1 text-sm text-muted-foreground">{cadence}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{blurb}</p>
      {onCtaClick ? (
        <button type="button" onClick={onCtaClick} className={ctaClass}>
          {cta}
        </button>
      ) : (
        <a href={ctaHref} className={ctaClass}>
          {cta}
        </a>
      )}
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-muted-foreground">
            <span aria-hidden className="mt-0.5 text-gold">
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
