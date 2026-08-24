import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Every section uses the same vertical rhythm: 48px mobile / 64px desktop.
 * Glow is opt-in and used sparingly — at most one glowing section per viewport.
 */
export function Section({
  id,
  glow,
  className,
  children,
}: {
  id?: string;
  glow?: "violet" | "electric" | "none";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-4 py-12 sm:px-8 md:py-16",
        glow === "violet" && "glow-violet",
        glow === "electric" && "glow-electric",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto mb-8 max-w-2xl text-center">
      {eyebrow ? (
        <p className="type-meta mb-2 uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="type-h2 text-foreground">{title}</h2>
      {subtitle ? (
        <p className="type-body mt-4 text-muted-foreground">{subtitle}</p>
      ) : null}
    </header>
  );
}

export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  /** Only interactive cards get a hover lift. */
  interactive?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-card",
        interactive && "card-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

const goldBtn =
  "btn-press inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-gold-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function GoldButton({
  children,
  className,
  href = "#pricing",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a href={href} className={cn(goldBtn, className)}>
      {children}
    </a>
  );
}

export function OutlineButton({
  children,
  className,
  href = "#how-it-works",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "btn-press-light inline-flex items-center justify-center rounded-full border border-foreground/40 bg-transparent px-6 py-3 text-[15px] font-semibold text-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
}
