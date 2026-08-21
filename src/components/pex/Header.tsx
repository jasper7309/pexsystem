const NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Included", href: "#included" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-bold tracking-[0.18em] text-foreground">
          THE PEX <span className="text-gold">SYSTEM</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-brand-blue-foreground transition-transform hover:scale-[1.03]"
        >
          Join Now
        </a>
      </div>
    </header>
  );
}
