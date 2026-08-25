import { useState, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
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
    <Card className="flex flex-col gap-6">
      <div>
        <span className="type-meta inline-flex size-8 items-center justify-center rounded-full bg-accent font-bold text-gold">
          {step}
        </span>
        <h3 className="type-h3 mt-4 text-foreground">{title}</h3>
        <p className="type-body mt-2 text-muted-foreground">{body}</p>
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
        className="size-full object-cover"
      />
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  body,
  bonus = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  bonus?: boolean;
}) {
  return (
    <Card className="relative">
      {bonus ? (
        <span className="absolute right-4 top-4 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
          Bonus
        </span>
      ) : null}
      <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-gold">
        {icon}
      </div>
      <h3 className="type-h3 mt-4 text-foreground">{title}</h3>
      <p className="type-body mt-2 text-muted-foreground">{body}</p>
    </Card>
  );
}

export function TestimonialCard({
  name,
  result,
  src,
  kind,
  profilePic,
}: {
  name: string;
  result: string;
  src: string;
  kind: "youtube" | "mp4";
  profilePic?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-light p-4 shadow-card">
      <InlineVideo src={src} kind={kind} />
      <div className="flex items-center gap-4 pt-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={result}
            loading="lazy"
            className="size-8 rounded-full border border-border object-cover"
          />
        ) : (
          <div
            className="size-8 rounded-full border border-border bg-muted"
            aria-hidden
          />
        )}
        <div>
          <h3 className="type-h3 text-surface-light-foreground">{name}</h3>
          <p className="type-meta text-surface-light-foreground/70">{result}</p>
        </div>
      </div>
    </div>
  );
}

export function AvatarBubble({ name, src }: { name: string; src: string }) {
  return (
    <figure className="flex w-24 flex-col items-center gap-2">
      <div className="flex size-20 items-center justify-center overflow-hidden rounded-full border border-border bg-letterbox sm:size-24">
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="size-full object-contain"
        />
      </div>
      <figcaption className="type-meta text-muted-foreground">{name}</figcaption>
    </figure>
  );
}

export function PricingCard({
  name,
  price,
  cadence,
  oldCadence,
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
  /** When provided, renders a struck-through old cadence above the active one. */
  oldCadence?: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
  /** Pricing CTAs go to signup/checkout, not the pricing anchor. */
  ctaHref?: string;
  /** When provided, the CTA opens the payment flow instead of navigating. */
  onCtaClick?: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const ctaClass = cn(
    "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold",
    featured
      ? "btn-press bg-gold text-gold-foreground"
      : "btn-press-light border border-foreground/40 text-foreground",
  );

  const handleClick = () => {
    if (!onCtaClick || loading) return;
    setLoading(true);
    window.setTimeout(() => {
      onCtaClick();
      setLoading(false);
    }, 320);
  };

  return (
    <Card className={cn("pricing-card-glow relative flex flex-col rounded-3xl px-8 py-7 md:px-10 md:py-8", featured && "border-gold/60")}>
      {featured ? (
        <p className="absolute right-6 top-6 type-meta uppercase tracking-[0.2em] text-gold">
          Most popular
        </p>
      ) : null}
      <h3 className="type-meta uppercase tracking-[0.2em] text-muted-foreground">
        {name}
      </h3>
      {oldCadence ? (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[4rem] font-bold leading-none tracking-tight text-foreground">
            {price}
          </span>
          <div className="flex flex-col">
            <span className="type-meta leading-snug text-muted-foreground/60 line-through decoration-muted-foreground/40">
              {oldCadence}
            </span>
            <div className="my-0.5 h-px w-full bg-border" />
            <span className="type-meta leading-snug text-muted-foreground">
              {cadence}
            </span>
          </div>
        </div>
      ) : (
        <p className="mt-4 flex items-end gap-1.5">
          <span className="text-[3.25rem] font-bold leading-none tracking-tight text-foreground">
            {price}
          </span>
          <span className="type-meta pb-1 text-muted-foreground">{cadence}</span>
        </p>
      )}
      <p className="type-body mt-2 text-muted-foreground">{blurb}</p>
      {onCtaClick ? (
        <button
          type="button"
          onClick={handleClick}
          aria-busy={loading}
          className={ctaClass}
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Opening
            </>
          ) : (
            cta
          )}
        </button>
      ) : (
        <a href={ctaHref} className={ctaClass}>
          {cta}
        </a>
      )}
      <ul className="mt-6 space-y-4">
        {features.map((f) => (
          <li key={f} className="type-body flex gap-4 text-muted-foreground">
            <span aria-hidden className="text-gold">
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
