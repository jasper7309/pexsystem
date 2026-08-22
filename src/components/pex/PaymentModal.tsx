import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  checkoutUrl: string;
};

export const PRICING_PLANS: Plan[] = [
  {
    name: "The Pex System",
    price: "$149",
    cadence: "/month",
    checkoutUrl: "https://selar.com/pexsystem",
  },
  {
    name: "Exclusive Mentorship",
    price: "$249",
    cadence: "/month",
    checkoutUrl: "https://selar.com/Pex1V1?currency=USD",
  },
];

function ModalShell({
  onClose,
  title,
  plan,
  children,
}: {
  onClose: () => void;
  title: string;
  plan: Plan;
  children: React.ReactNode;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center px-5 py-8"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <div className="glow-violet relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X className="size-4" />
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {title}
        </p>
        <h2 className="mt-3 text-xl font-bold text-foreground">
          {plan.name} — {plan.price}
          {plan.cadence}
        </h2>
        {children}
      </div>
    </div>
  );
}

export function PaymentMethodModal({
  plan,
  onClose,
  onCrypto,
}: {
  plan: Plan;
  onClose: () => void;
  onCrypto: () => void;
}) {
  const btn =
    "flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-transform hover:scale-[1.02]";
  return (
    <ModalShell plan={plan} onClose={onClose} title="Choose payment method">
      <p className="mt-2 text-sm text-muted-foreground">
        Select how you'd like to pay to get instant access.
      </p>
      <div className="mt-6 space-y-3">
        <a
          href={plan.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className={cn(btn, "bg-gold text-gold-foreground shadow-gold")}
        >
          Pay with Card / Bank Transfer
        </a>
        <button
          type="button"
          onClick={onCrypto}
          className={cn(
            btn,
            "border border-foreground/40 text-foreground hover:bg-accent",
          )}
        >
          Pay with Crypto
        </button>
      </div>
    </ModalShell>
  );
}

export function CryptoPaymentModal({
  plan,
  onClose,
}: {
  plan: Plan;
  onClose: () => void;
}) {
  return (
    <ModalShell plan={plan} onClose={onClose} title="Pay with crypto">
      <p className="mt-2 text-sm text-muted-foreground">
        Amount due:{" "}
        <span className="font-semibold text-foreground">
          {plan.price}
          {plan.cadence}
        </span>
      </p>
      <p className="mt-6 rounded-xl border border-border bg-accent/40 p-4 text-sm text-muted-foreground">
        Crypto payment details are coming next.
      </p>
    </ModalShell>
  );
}
