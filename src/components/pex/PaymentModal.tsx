import { useEffect, useState } from "react";
import { ArrowLeft, Check, Copy, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkeletonImage } from "./media";

export type BankTransfer = {
  price: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
};

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  checkoutUrl?: string;
  bankTransfer?: BankTransfer;
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
    bankTransfer: {
      price: "₦249,000",
      bankName: "KudaBank",
      accountName: "MULTITECH ACADEMY LIMITED",
      accountNumber: "3003897385",
    },
  },
];

function ModalShell({
  onClose,
  title,
  plan,
  headerAction,
  children,
}: {
  onClose: () => void;
  title: string;
  plan: Plan;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
      <div className="glow-violet relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card animate-in fade-in zoom-in-95 duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="type-meta uppercase tracking-[0.22em] text-gold">
              {title}
            </p>
            <h2 className="type-h2 mt-2 text-foreground">
              {plan.name}, {plan.price}
              {plan.cadence}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {headerAction}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
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
    "flex w-full items-center justify-center rounded-full px-6 py-4 text-[15px] font-semibold";
  return (
    <ModalShell plan={plan} onClose={onClose} title="Choose payment method">
      <p className="type-body mt-2 text-muted-foreground">
        Pick how you want to pay and your Pex System access is set up right after
        payment clears.
      </p>
      <div className="mt-6 space-y-3">
        <a
          href={plan.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className={cn(btn, "btn-press bg-gold text-gold-foreground")}
        >
          Pay with Card / Bank Transfer
        </a>
        <button
          type="button"
          onClick={onCrypto}
          className={cn(
            btn,
            "btn-press-light border border-foreground/40 text-foreground",
          )}
        >
          Pay with Crypto
        </button>
      </div>
    </ModalShell>
  );
}

const CRYPTO_DETAILS = {
  USDT: {
    coin: "USDT",
    network: "TRC20",
    address: "TRuGYWchcbGmj3tBUMqoEr7FXky7cubjKT",
    qr: "https://res.cloudinary.com/dgxsyq2tf/image/upload/v1787394520/USDTQRCODE_xm1trt.png",
  },
  BTC: {
    coin: "BTC",
    network: null,
    address: "bc1q6z0ttfmjdjtv3qw22w3twc9u0upye4aq2lk3g0",
    qr: "https://res.cloudinary.com/dgxsyq2tf/image/upload/v1787394521/BTCQRCODE_fdjz6z.png",
  },
};

type Coin = keyof typeof CRYPTO_DETAILS;

function CoinToggle({ coin, onChange }: { coin: Coin; onChange: (c: Coin) => void }) {
  return (
    <div
      role="group"
      aria-label="Select coin"
      className="inline-flex rounded-full border border-border bg-accent/60 p-1"
    >
      {(["USDT", "BTC"] as Coin[]).map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          aria-pressed={coin === c}
          className={cn(
            "type-meta rounded-full px-3 py-1 transition-colors duration-[180ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
            coin === c
              ? "bg-gold text-gold-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

function fallbackCopy(text: string) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(ta);
  }
}

function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      fallbackCopy(address);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent/60 px-3 py-1.5 type-meta text-foreground transition-colors duration-[180ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-accent"
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-gold" />
          <span className="text-gold">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          Copy
        </>
      )}
    </button>
  );
}

export function CryptoPaymentModal({
  plan,
  onClose,
  onBack,
}: {
  plan: Plan;
  onClose: () => void;
  onBack: () => void;
}) {
  const [coin, setCoin] = useState<Coin>("USDT");
  const details = CRYPTO_DETAILS[coin];

  return (
    <ModalShell
      plan={plan}
      onClose={onClose}
      title="Pay with crypto"
      headerAction={<CoinToggle coin={coin} onChange={setCoin} />}
    >
      <div className="mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-accent/40 p-3">
            <p className="type-meta text-muted-foreground">Price</p>
            <p className="type-h3 mt-1 text-foreground">
              {plan.price}
              {plan.cadence}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-accent/40 p-3">
            <p className="type-meta text-muted-foreground">Coin</p>
            <p className="type-h3 mt-1 text-foreground">{details.coin}</p>
          </div>
          {details.network ? (
            <div className="col-span-2 rounded-xl border border-border bg-accent/40 p-3">
              <p className="type-meta text-muted-foreground">Network</p>
              <p className="type-h3 mt-1 text-foreground">{details.network}</p>
            </div>
          ) : null}
        </div>

        <div className="rounded-xl border border-border bg-accent/40 p-4">
          <p className="type-meta text-muted-foreground">Wallet address</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="type-meta break-all text-foreground">{details.address}</p>
            <CopyAddress address={details.address} />
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-xl bg-surface-light p-3 shadow-card">
          <SkeletonImage
            key={details.qr}
            src={details.qr}
            alt={`${details.coin} payment QR code`}
            eager
            className="size-full rounded-xl"
            imgClassName="object-contain"
          />
        </div>

        <p className="type-meta text-center text-muted-foreground">
          After sending payment, please send your receipt to our WhatsApp number:{" "}
          <a
            href="https://wa.me/2348151719335"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold underline underline-offset-2"
          >
            0815 171 9335
          </a>
        </p>

        <a
          href="https://wa.me/2348151719335"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 btn-press rounded-full bg-gold px-6 py-3.5 text-[15px] font-semibold text-gold-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send receipt on WhatsApp
        </a>

        <button
          type="button"
          onClick={onBack}
          className="flex w-full items-center justify-center gap-2 btn-press-light rounded-full border border-border px-6 py-3 text-[15px] font-semibold text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to payment methods
        </button>
      </div>
    </ModalShell>
  );
}
