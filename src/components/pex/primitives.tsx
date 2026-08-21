import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        "relative overflow-hidden px-5 py-16 sm:px-8 md:py-24",
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
    <header className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      ) : null}
    </header>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Intentionally empty media slot (no images used on this page). */
export function MediaSlot({
  label,
  className,
  rounded = "rounded-xl",
}: {
  label?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Media placeholder"}
      className={cn(
        "media-slot flex items-center justify-center",
        rounded,
        className,
      )}
    >
      {label ? (
        <span className="px-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      ) : null}
    </div>
  );
}

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
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
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
        "inline-flex items-center justify-center rounded-full border border-foreground/40 bg-transparent px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent",
        className,
      )}
    >
      {children}
    </a>
  );
}
