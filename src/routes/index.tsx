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
    body: "Learn the framework behind passing a prop firm, getting a payout, and becoming consistently profitable.",
    mediaLabel: "Course preview",
  },
  {
    step: "2",
    title: "Join The Student Private Community",
    body: "Get access to like minded traders as yourself, who is ready to learn and get consistently profitable.",
    mediaLabel: "Community preview",
  },
  {
    step: "3",
    title: "Get Funded In 90 Days",
    body: "This program is designed to get you funded in 90 days.",
    mediaLabel: "Payout certificate",
  },
];

const FEATURES = [
  {
    icon: <BookOpen className="size-4" />,
    title: "The Pex System Program",
    body: "The complete, step-by-step trading program.",
  },
  {
    icon: <Users className="size-4" />,
    title: "Private Student Community",
    body: "A community of like-minded traders.",
  },
  {
    icon: <Video className="size-4" />,
    title: "Live Trading Sessions",
    body: "Real-time live trading with pex.",
  },
  {
    icon: <Trophy className="size-4" />,
    title: "PEX Seven Figure Scaling Plan",
    body: "Access to pex scaling plan.",
  },
  {
    icon: <LineChart className="size-4" />,
    title: "MTA Trading Journal",
    body: "Track, review, and improve every trade you take.",
  },
  {
    icon: <ShieldCheck className="size-4" />,
    title: "Free 1-month VIP Signal",
    body: "Access to free VIP signals.",
  },
];

const TESTIMONIALS = [
  { name: "Funded Student 1", result: "@student_handle" },
  { name: "Funded Student 2", result: "@student_handle" },
  { name: "Funded Student 3", result: "@student_handle" },
];

const SPOTLIGHT = ["Tobi", "Amara", "Sam", "Zainab", "Chidi", "Lola"];

const FAQ = [
  {
    q: "What is The Pex System?",
    a: "",
  },
  {
    q: "Who is The Pex System for?",
    a: "The PEX system is designed for struggling traders who find it difficult to pass evaluations and receive consistent payouts from prop firms.",
  },
  {
    q: "Do I need prior trading experience to join?",
    a: "No, the PEX system includes everything you need to know.",
  },
  {
    q: "What is the MTA Trading Journal?",
    a: "The MTA trading journal is a tool that helps you track, review, and improve your trading decisions.",
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
    a: "Our community consists of like-minded traders working together to achieve a common trading goal: profitability and consistent payouts.",
  },
  {
    q: "How is the Exclusive Mentorship different from The Pex System plan?",
    a: "The exclusive mentorship offers you direct access to one-on-one live trading, classes, and Q&A sessions with PEX himself, while the PEX system plan is a broader form of mentorship that is not as exclusive as the private mentorship.",
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
              With Over 300+ Funded Students
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              Learn The Exact System That Got Over 300 Traders Funded
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
              In 90 days you will learn the exact system required by propfirms, to pass,
              get payouts and become consistently profitable as a funded trader.
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
          <SectionHeading eyebrow="300+ Funded Students" title="Success Stories" />
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
            subtitle="From learning the strategy to getting funded, here's the path."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <GoldButton>Start Learning The System</GoldButton>
          </div>
        </Section>

        {/* What's included */}
        <Section id="included">
          <SectionHeading
            title="What's Included?"
            subtitle="Everything you get in the PEX system + bonus products."
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
            subtitle="Meet a few of our funded traders."
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
                The PEX strategy, the journal, live signals, and a like-minded private
                student community.
              </p>
              <GoldButton className="mt-6">Join The Family</GoldButton>
            </div>
            <MediaSlot label="Trading workspace" className="aspect-[4/3] w-full" />
          </Card>
        </Section>

        {/* FAQ */}
        <Section id="faq" glow="electric">
          <SectionHeading
            title="Your Questions, Answered"
            subtitle="Everything you need to know about The Pex System."
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
            subtitle="Real feedback from students who've gone through The Pex System."
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
                Keep trading without a system, or learn the system that's gotten 300+
                traders funded.
              </p>
            </div>
            <GoldButton className="shrink-0">Get The Pex System</GoldButton>
          </Card>
        </Section>

        {/* Pricing */}
        <Section id="pricing" glow="electric">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="Each program gives access to the exact system designed to get you consistently profitable with propfirms."
          />
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <PricingCard
              name="The Pex System"
              price="$149"
              cadence="/month"
              blurb="Learn the full strategy and get the tools to apply it."
              cta="Get Started"
              features={[
                "The Pex Strategy course",
                "MTA Trading Journal access",
                "Private Community access",
                "VIP Signals",
              ]}
            />
            <PricingCard
              name="Exclusive Mentorship"
              price="$249"
              cadence="/month"
              blurb="Everything in The Pex System, plus direct 1-on-1 mentorship from Pex."
              cta="Get Started"
              featured
              features={[
                "Everything in The Pex System",
                "2 Live Trading Sessions With Pex 1 Hour Each",
                "Access to Pex Seven-Figure Scale-Up Plan",
                "How to Get Private Investors",
              ]}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
