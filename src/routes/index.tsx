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
  MediaSlot,
  OutlineButton,
  Section,
  SectionHeading,
} from "@/components/pex/primitives";
import {
  AvatarBubble,
  FeatureCard,
  PricingCard,
  StepCard,
  TestimonialCard,
} from "@/components/pex/blocks";
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
      { title: "The Pex System — Get Funded As A Forex Trader" },
      {
        name: "description",
        content:
          "The exact forex system that got over 300 traders funded. Strategy, prop-firm playbook and a live trader community — join The Pex System.",
      },
      { property: "og:title", content: "The Pex System — Get Funded As A Forex Trader" },
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
    title: "Get The Pex System",
    body: "Unlock the full strategy: entries, exits, risk model and the exact rules used to pass funded challenges.",
    mediaLabel: "Course preview",
  },
  {
    step: "2",
    title: "Join The Trader Community",
    body: "Get plugged into the private community where setups, reviews and daily accountability happen.",
    mediaLabel: "Community preview",
  },
  {
    step: "3",
    title: "Get Funded In 90 Days",
    body: "Apply the system to a prop-firm challenge, pass evaluation and start trading real capital.",
    mediaLabel: "Payout certificate",
  },
];

const FEATURES = [
  {
    icon: <BookOpen className="size-4" />,
    title: "The Pex System Program",
    body: "The complete step-by-step curriculum, from market structure to execution.",
  },
  {
    icon: <Users className="size-4" />,
    title: "Private Student Community",
    body: "A room full of traders working the same plan every session.",
  },
  {
    icon: <Video className="size-4" />,
    title: "Live Trading Sessions",
    body: "Watch the system traded live in real market conditions each week.",
  },
  {
    icon: <ShieldCheck className="size-4" />,
    title: "Risk Management Playbook",
    body: "The exact risk rules that keep funded accounts alive.",
  },
  {
    icon: <LineChart className="size-4" />,
    title: "Prop Firm Challenge Guide",
    body: "Firm selection, challenge rules and the pass-first checklist.",
  },
  {
    icon: <Trophy className="size-4" />,
    title: "Payout & Scaling Support",
    body: "Guidance on withdrawals and scaling once you're funded.",
  },
];

const TESTIMONIALS = [
  { name: "Daniel A.", result: "Funded $100K account" },
  { name: "Grace O.", result: "First payout in 6 weeks" },
  { name: "Kelvin M.", result: "Passed phase 2 in 21 days" },
];

const SPOTLIGHT = [
  "Tobi",
  "Amara",
  "Sam",
  "Zainab",
  "Chidi",
  "Lola",
];

const FAQ = [
  {
    q: "What is The Pex System?",
    a: "A complete forex trading program: the strategy, the risk framework and the prop-firm roadmap used to get over 300 traders funded.",
  },
  {
    q: "Who is this program for?",
    a: "Traders who want a repeatable system instead of random signals — from serious beginners to traders stuck failing challenges.",
  },
  {
    q: "Do I need prior trading experience?",
    a: "No. The program starts from the fundamentals and builds up to full execution.",
  },
  {
    q: "How much capital do I need to start?",
    a: "You can start on a demo account, then use a prop-firm challenge instead of risking large personal capital.",
  },
  {
    q: "How long until I get funded?",
    a: "Most students who follow the plan target a funded account within 90 days. Results depend on your discipline.",
  },
  {
    q: "Is there ongoing support after I join?",
    a: "Yes — the private community and live sessions run continuously for members.",
  },
  {
    q: "What if the system isn't for me?",
    a: "Reach out to support and we'll walk you through your options before your next billing cycle.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <Section glow="violet" className="pt-14 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              300+ funded traders and counting
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              Learn The Exact System That Got Over 300 Traders Funded
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
              A repeatable forex strategy, a risk model that protects your account, and a
              community that keeps you executing until you're trading real capital.
            </p>
          </div>
          <MediaSlot
            label="Intro video"
            className="mx-auto mt-10 aspect-video w-full max-w-3xl"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GoldButton>Get The Pex System</GoldButton>
            <OutlineButton>See How It Works</OutlineButton>
          </div>
        </Section>

        {/* Success stories */}
        <Section>
          <SectionHeading eyebrow="Real Results" title="Success Stories" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" glow="electric">
          <SectionHeading
            title="Here's How It Works"
            subtitle="Three steps from where you are now to a funded trading account."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <GoldButton>Start Step One Today</GoldButton>
          </div>
        </Section>

        {/* What's included */}
        <Section id="included">
          <SectionHeading
            title="What's Included?"
            subtitle="Everything you need to trade the system and pass a funded challenge."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <GoldButton>Get The Pex System</GoldButton>
          </div>
        </Section>

        {/* Trader spotlight */}
        <Section glow="violet">
          <SectionHeading
            title="Trader Spotlight"
            subtitle="Members of the community currently trading funded capital."
          />
          <div className="flex flex-wrap items-start justify-center gap-6">
            {SPOTLIGHT.map((name) => (
              <AvatarBubble key={name} name={name} />
            ))}
          </div>
        </Section>

        {/* Split section */}
        <Section>
          <Card className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Everything You Need To Get Funded, In One Place
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                No scattered YouTube playlists, no paid signal groups. One system, one
                risk model and one community that trades it together.
              </p>
              <GoldButton className="mt-6">Join The System</GoldButton>
            </div>
            <MediaSlot label="Trading workspace" className="aspect-[4/3] w-full" />
          </Card>
        </Section>

        {/* FAQ */}
        <Section id="faq" glow="electric">
          <SectionHeading
            title="Your Questions, Answered"
            subtitle="Everything traders ask before joining The Pex System."
          />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-card px-5 shadow-card"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
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
            title="See The Reviews"
            subtitle="Payout screenshots and messages from inside the community."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <MediaSlot
                key={i}
                label="Review"
                rounded="rounded-lg"
                className="aspect-[3/4] w-full"
              />
            ))}
          </div>
        </Section>

        {/* CTA banner */}
        <Section glow="violet">
          <Card className="flex flex-col items-start justify-between gap-6 border-border/80 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                The Choice Is Simple
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Keep guessing your way through the charts, or trade a system that has
                already funded hundreds of traders.
              </p>
            </div>
            <GoldButton className="shrink-0">Join The Pex System</GoldButton>
          </Card>
        </Section>

        {/* Pricing */}
        <Section id="pricing" glow="electric">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="Pick the access level that matches how fast you want to get funded."
          />
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <PricingCard
              name="The Pex System"
              price="$149"
              cadence="one-time"
              blurb="Full strategy access, self-paced."
              cta="Get Started"
              features={[
                "The Pex System program",
                "Risk management playbook",
                "Prop firm challenge guide",
                "Lifetime course updates",
              ]}
            />
            <PricingCard
              name="Complete Funded Bundle"
              price="$249"
              cadence="one-time"
              blurb="Everything in The Pex System, plus live coaching."
              cta="Get Funded Faster"
              featured
              features={[
                "Everything in The Pex System",
                "Private student community",
                "Weekly live trading sessions",
                "Payout & scaling support",
                "Direct access to Q&A calls",
              ]}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
