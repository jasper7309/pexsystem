import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="type-h3 tracking-[0.18em] text-foreground">
          THE PEX <span className="text-gold">SYSTEM</span>
        </p>
        <p className="type-meta mx-auto mt-4 max-w-2xl text-muted-foreground">
          Trading foreign exchange carries risk. Prop firm payouts earned by Pex System
          students do not guarantee your own results. Nothing here is financial advice,
          and every trade you place on a funded or evaluation account is your own
          decision.
        </p>
        <nav
          className="type-meta mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground"
          aria-label="Footer"
        >
          <a className="hover:text-foreground" href="#pricing">
            Plans
          </a>
          <a className="hover:text-foreground" href="#faq">
            FAQ
          </a>
          <a className="hover:text-foreground" href="#reviews">
            Student reviews
          </a>
        </nav>
        <p className="type-meta mt-6 text-muted-foreground">
          © {new Date().getFullYear()} The Pex System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
