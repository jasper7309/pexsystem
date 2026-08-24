import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Hero video — Vimeo, autoplay muted looping. */
export function HeroVideo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-black shadow-card",
        className,
      )}
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        src="https://player.vimeo.com/video/1219511642?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title="The Pex System intro video"
        className="absolute left-0 top-0 size-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

/** Inline testimonial video: YouTube Shorts embed or direct mp4. */
export function InlineVideo({
  src,
  kind,
  className,
}: {
  src: string;
  kind: "youtube" | "mp4";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl bg-letterbox",
        className,
      )}
    >
      {kind === "youtube" ? (
        <iframe
          src={src}
          title="Funded student testimonial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute left-0 top-0 size-full"
          style={{ border: 0 }}
        />
      ) : (
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="absolute left-0 top-0 size-full bg-letterbox object-contain"
        />
      )}
    </div>
  );
}

/** Image that reserves its box with a skeleton until loaded. */
export function SkeletonImage({
  src,
  alt,
  className,
  imgClassName,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!loaded ? <div className="skeleton absolute inset-0" aria-hidden /> : null}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "size-full transition-opacity duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName,
        )}
      />
    </div>
  );
}

/** Random-switching slideshow. */
export function RandomSlideshow({
  images,
  alt,
  className,
  intervalMs = 2600,
}: {
  images: string[];
  alt: string;
  className?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => {
        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * images.length);
        }
        return next;
      });
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-letterbox",
        className,
      )}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}

/** Reviews grid with lightbox. Fixed-ratio cells so nothing shifts as images load. */
export function ReviewGrid({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="card-lift overflow-hidden rounded-xl border border-border bg-card shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={`Open student review ${i + 1}`}
          >
            <SkeletonImage
              src={src}
              alt={`Pex System student review ${i + 1}`}
              className="aspect-[3/4] w-full"
              imgClassName="object-cover"
            />
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Review screenshot"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <img
            src={active}
            alt="Pex System student review, full size"
            className="max-h-[90vh] max-w-full rounded-xl object-contain"
          />
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="btn-press-light absolute right-6 top-6 rounded-full border border-border bg-card px-4 py-2 text-[15px] font-semibold text-foreground"
          >
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}
