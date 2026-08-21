export function Footer() {
  return (
    <footer className="bg-footer px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold tracking-[0.18em] text-foreground">
          THE PEX <span className="text-gold">SYSTEM</span>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Trading foreign exchange carries risk. Past results of our students do not
          guarantee future performance. Nothing on this page is financial advice — you are
          responsible for your own trading decisions.
        </p>
        <nav
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          aria-label="Footer"
        >
          <a className="hover:text-foreground" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-foreground" href="#faq">
            FAQ
          </a>
          <a className="hover:text-foreground" href="#reviews">
            Reviews
          </a>
          <a className="hover:text-foreground" href="#top">
            Contact
          </a>
        </nav>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Pex System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
