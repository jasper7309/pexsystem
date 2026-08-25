import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/pex/Header";
import { Footer } from "@/components/pex/Footer";
import {
  Card,
  GoldButton,
  OutlineButton,
  Section,
  SectionHeading,
} from "@/components/pex/primitives";
import {
  AvatarBubble,
  FeatureCard,
  PricingCard,
  StepCard,
  StepImage,
  TestimonialCard,
} from "@/components/pex/blocks";
import {
  HeroVideo,
  RandomSlideshow,
  ReviewGrid,
} from "@/components/pex/media";
import {
  FUNDED_COLLAGE,
  PEX_SYSTEM_IMAGE,
  REVIEW_IMAGES,
  SPOTLIGHT_IMAGES,
  TELEGRAM_IMAGE,
  TESTIMONIAL_VIDEOS,
} from "@/components/pex/content";
import {
  CryptoPaymentModal,
  PaymentMethodModal,
  PRICING_PLANS,
  type Plan,
} from "@/components/pex/PaymentModal";
import {
  BookOpen,
  Users,
  Video,
  ShieldCheck,
  LineChart,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pex System: Get Funded As A Forex Trader" },
      {
        name: "description",
        content:
          "The exact forex system that got over 300 traders funded. Learn the PEX strategy, pass prop firm evaluations and collect consistent payouts.",
      },
      { property: "og:title", content: "The Pex System: Get Funded As A Forex Trader" },
      {
        property: "og:description",
        content:
          "Learn the exact system that got over 300 traders funded, with live sessions and a private trader community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  {
    step: "1",
    title: "\u00a0The Pex System",
    body: "learn the exact framework behind passing a prop firm, getting funded and getting consistent payout",
    media: <StepImage src={PEX_SYSTEM_IMAGE} alt="The Pex System program" />,
  },
  {
    step: "2",
    title: "Join the Private\u00a0Student\u00a0\nCommunity",
    body: "you get access to like minded traders as yourself who are ready to learn and become consistently profitable",
    media: <StepImage src={TELEGRAM_IMAGE} alt="Private student community on Telegram" />,
  },
  {
    step: "3",
    title: "Get Funded In 90 Days",
    body: "this program to help you achieve profitability with prop firms in 90 days",
    media: (
      <RandomSlideshow
        images={FUNDED_COLLAGE}
        alt="Funded student payout"
        className="aspect-[4/3] w-full"
      />
    ),
  },
];

const FEATURES = [
  {
    icon: <BookOpen className="size-5" />,
    title: "The Pex System Program",
    body: "a complete step by step system to achieving prop firm profitability",
  },
  {
    icon: <Users className="size-5" />,
    title: "Private Student Community",
    body: "join over 300+ traders to achieve the same goal.",
  },
  {
    icon: <Video className="size-5" />,
    title: "Live Trading Sessions",
    body: "real time live trading + Q&A sessions with pex",
  },
  {
    icon: <Trophy className="size-5" />,
    title: "Pex 7-Figure Scaling Plan",
    body: "from $5k to a $100k in funding is possible with this plan",
  },
  {
    icon: <LineChart className="size-5" />,
    title: "MTA Trading Journal",
    body: "A free bonus journal, to help track, review and improve every trading decision you make",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Free 1-month VIP Signal",
    body: "you get access to the pex vip signal for a month totally free",
  },
];

const TESTIMONIALS = TESTIMONIAL_VIDEOS.map((video, i) => ({
  name: `Funded Student ${i + 1}`,
  result: "@student_handle",
  ...video,
}));

const SPOTLIGHT = ["Tobi", "Amara", "Sam", "Zainab", "Chidi", "Lola"].map(
  (name, i) => ({ name, src: SPOTLIGHT_IMAGES[i]! }),
);

const FAQ = [
  {
    q: "What is The Pex System?",
    a: "This is a system designed to help traders pass prop firms with a proven framework, get funded, and achieve consistent payouts with prop firms",
  },
  {
    q: "Who is The Pex System for?",
    a: "The Pex System is designed for struggling traders who find it difficult to pass prop firms or get consistent payouts from prop firms.",
  },
  {
    q: "Do I need prior trading experience to join?",
    a: "If you are new to prop firms or have some level of experience with prop firms this program is designed for you",
  },
  {
    q: "What is the MTA Trading Journal?",
    a: "The MTA trading is a trading tool that helps you track, review, and improve your trading decisions in order to get better psychology.",
  },
  {
    q: "How do VIP Signals work?",
    a: "It's simple! We provide you with the trade at the right time; you just need to execute it.",
  },
  {
    q: "Will this help me pass a funding challenge?",
    a: "Yes, that is the goal of the PEX system.",
  },
  {
    q: "What's included in the private community?",
    a: "Our community consists of like-minded traders working together to achieve a common trading goal, live trading and Q&A seesions.",
  },
  {
    q: "How is the Exclusive Mentorship different from The Pex System plan?",
    a: "The exclusive mentorship offers you direct access to one-on-one live trading, classes, and Q&A sessions with Pex himself, while the Pex System plan is a group mentorship program which involves group mentorship, live trading classes and Q&A sessions with Pex.",
  },
  {
    q: "Who is the exclusive mentorship for:",
    a: "The exclusive mentorship is meant for people who would like to get funded, but have a tight schedule for live classes, Q&A sessions, and trading",
  },
];


function Index() {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [step, setStep] = useState<"method" | "crypto" | null>(null);

  const openPayment = (p: Plan) => {
    setPlan(p);
    setStep("method");
  };
  const closePayment = () => setStep(null);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <Section glow="violet">
          <div className="mx-auto max-w-3xl text-center">
            <span className="type-meta inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1 uppercase tracking-[0.22em] text-gold">
              With Over 300+ Funded Students
            </span>
            <h1 className="type-h1 mt-6 text-foreground">
              Learn The Exact System That Got Over 300+ Traders Funded
            </h1>
            <p className="type-body mx-auto mt-6 max-w-2xl text-muted-foreground">
              In 90 days you will learn the exact system required by prop firms, to pass get payouts and become consistently profitable as a funded trader.
            </p>
          </div>
          <HeroVideo className="mx-auto mt-8 max-w-3xl" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GoldButton>Get The Pex System</GoldButton>
            <OutlineButton href="#how-it-works">See How Traders Get Funded</OutlineButton>
          </div>
        </Section>

        {/* Success stories */}
        <Section>
          <SectionHeading eyebrow="300+ Funded Students" title="Success Stories" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works">
          <SectionHeading
            title="Here's How It Works"
            subtitle="From learning the system to getting payouts, here's the path."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <GoldButton>Start Learning </GoldButton>
          </div>
        </Section>

        {/* What's included */}
        <Section id="included">
          <SectionHeading
            title="What's Included?"
            subtitle="Everything inside the Pex System, plus the bonus tools students use to stay funded."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <GoldButton>Get The Pex System</GoldButton>
          </div>
        </Section>

        {/* Trader spotlight */}
        <Section>
          <SectionHeading
            title="Trader Spotlight"
            subtitle="A few of the traders now collecting payouts with the PEX system."
          />
          <div className="flex flex-wrap items-start justify-center gap-6">
            {SPOTLIGHT.map((person) => (
              <AvatarBubble key={person.name} {...person} />
            ))}
          </div>
        </Section>

        {/* Split section */}
        <Section>
          <Card className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-8">
            <div>
              <h2 className="type-h2 text-foreground">
                Everything You Need To Get Funded, All In One Program
              </h2>
              <p className="type-body mt-4 text-muted-foreground">
                The Pex Strategy, The Trading Journal, VIP Signals, and a Private Student Community
              </p>
              <GoldButton className="mt-6">Join The Family</GoldButton>
            </div>
            <img
              src={PEX_SYSTEM_IMAGE}
              alt="Everything included in The Pex System"
              loading="lazy"
              className="w-full"
            />
          </Card>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <SectionHeading
            title="FAQs"
            subtitle="How the PEX system, the journal, the signals and the mentorship work."
          />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-card px-6 shadow-card"
                >
                  <AccordionTrigger className="type-h3 text-left text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="type-body text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Reviews */}
        <Section id="reviews">
          <SectionHeading
            title="Traders Results"
            subtitle="Results from students who got funded\u00a0"
          />
          <ReviewGrid images={REVIEW_IMAGES} />
        </Section>

        {/* CTA banner */}
        <Section glow="violet">
          <Card className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="type-h2 text-foreground">The Choice Is Simple</h2>
              <p className="type-body mt-4 max-w-xl text-muted-foreground">
                Keep guessing on evaluation accounts, or trade the PEX system that has
                already taken 300+ students to funded accounts and payouts.
              </p>
            </div>
            <GoldButton className="shrink-0">Get The Pex System</GoldButton>
          </Card>
        </Section>

        {/* Pricing */}
        <Section id="pricing">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="Each program gives you the exact system designed to get you consistently profitable with propfirms."
          />
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <PricingCard
              name="The Pex System"
              price="$149"
              cadence="/month"
              blurb="Learn the full System + bonus products."
              cta="Get Started"
              onCtaClick={() => openPayment(PRICING_PLANS[0]!)}
              featured
              features={[
                "The Pex System",
                "MTA Trading Journal access",
                "Private Student Community",
                "VIP Signals",
                "Pex 7-Figure Scaling Plan",
              ]}
            />
            <PricingCard
              name="Exclusive Mentorship"
              price="$249"
              cadence="/month"
              blurb="Everything in The Pex System, plus direct 1-on-1 mentorship from Pex."
              cta="Get Started"
              onCtaClick={() => openPayment(PRICING_PLANS[1]!)}
              featured
              features={[
                "Everything in The Pex System",
                "2 Live Trading Sessions With Pex 1 Hour Each",
                "Access to Pex 7-Figure Scale-Up Plan",
                "How to Get Private Investors",
              ]}
            />
          </div>
        </Section>
      </main>
      <Footer />
      {plan && step === "method" ? (
        <PaymentMethodModal
          plan={plan}
          onClose={closePayment}
          onCrypto={() => setStep("crypto")}
        />
      ) : null}
      {plan && step === "crypto" ? (
        <CryptoPaymentModal
          plan={plan}
          onClose={closePayment}
          onBack={() => setStep("method")}
        />
      ) : null}
    </div>
  );
}
