// 📄 File: src/app/whatsapp-analytics/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-analytics";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: "WhatsApp Analytics | Campaign & Inbox Reports | XploreByte",
  },
  description:
    "Track WhatsApp performance with XploreByte Analytics: campaign delivery funnels, reply rates, response time, agent activity, and outcome reporting—built for WhatsApp Business API. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp analytics",
    "WhatsApp campaign analytics",
    "WhatsApp inbox analytics",
    "WhatsApp performance reports",
    "WhatsApp reply rate",
    "WhatsApp response time",
    "WhatsApp delivery read clicked replied",
    "WhatsApp Business API analytics",
    "WhatsApp CRM analytics",
    "WhatsApp team performance dashboard",
  ],
  openGraph: {
    title: "WhatsApp Analytics | Campaign & Inbox Reports | XploreByte",
    description:
      "Measure WhatsApp outcomes with funnels, reply rates, response time, and team dashboards—connected to CRM, campaigns, and inbox.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Analytics - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Analytics | Campaign & Inbox Reports | XploreByte",
    description:
      "Measure WhatsApp outcomes with funnels, reply rates, response time, and team dashboards—connected to CRM, campaigns, and inbox.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is WhatsApp analytics?",
    answer:
      "WhatsApp analytics helps you understand messaging performance across campaigns and conversations—such as delivery, engagement, replies, response time, and outcomes—so you can improve conversion and support quality.",
  },
  {
    question: "What metrics should I track for WhatsApp campaigns?",
    answer:
      "Common campaign metrics include delivered rate, read rate, click rate (for CTA buttons/links), reply rate, failed messages, and segment-level performance so you can optimize targeting and content.",
  },
  {
    question: "Can I track team performance in a WhatsApp Team Inbox?",
    answer:
      "Yes. Team inbox analytics typically includes first response time, average response time, conversation ownership, agent workload, and resolution outcomes—so managers can improve speed and accountability.",
  },
  {
    question: "Do I need WhatsApp Business API for analytics?",
    answer:
      "For scalable tracking, templates, multi-agent workflows, and structured reporting, WhatsApp Business API is typically required. XploreByte analytics is built to work with WhatsApp Business API workflows.",
  },
  {
    question: "Does analytics help with retargeting?",
    answer:
      "Yes. Analytics enables practical retargeting segments like delivered-not-read, read-not-replied, clicked-not-replied, failed, and replied—so you can send the next best message to the right audience.",
  },
  {
    question:
      "What’s the difference between WhatsApp CRM and WhatsApp analytics?",
    answer:
      "WhatsApp CRM focuses on organizing customers, context, tags, and follow-ups. Analytics focuses on measurement—what happened, why it happened, and what to improve in campaigns and conversations.",
  },
] as const;

export default function WhatsAppAnalyticsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ✅ FAQ JSON-LD (App Router friendly) */}
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/30 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/90 ring-1 ring-white/20">
                Funnels • Reply Rates • Response Time • Team Performance
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp Analytics & Reports for Small Businesses
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Measure what matters on WhatsApp: campaign funnels, reply rates,
                agent response time, and outcomes — built for WhatsApp Business
                API workflows.
              </p>

              <p className="mt-6 text-lg text-white/80">
                XploreByte Analytics connects WhatsApp Campaigns, Team Inbox,
                and WhatsApp CRM so you can see what happened, what’s working,
                and what to improve—without guessing or managing everything in
                spreadsheets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://app.xplorebyte.com/signup-for-trial"
                  className="inline-flex items-center justify-center rounded-lg bg-[#11A944] px-6 py-3 font-semibold text-white hover:bg-[#0d8a3a] transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>

              <p className="mt-3 text-sm text-white/75">
                Start a free trial or book a demo in minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Why analytics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Why WhatsApp analytics matters
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                WhatsApp feels “conversational,” but your business still needs
                measurable performance. Analytics helps you answer the real
                questions: Which campaigns create replies? Which segments
                convert? Are leads being followed up on time? Which agents need
                help? What message content drives clicks and bookings?
              </p>
            </div>

            {/* What you can measure */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                What you can measure with XploreByte
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Campaign funnel metrics",
                    body: "Track delivered, read, clicked, and replied performance to understand true outcomes.",
                  },
                  {
                    title: "Reply & conversion signals",
                    body: "Measure replies and outcomes so teams optimize for real conversations, not vanity sends.",
                  },
                  {
                    title: "First response time",
                    body: "Know how fast your team replies—especially for high-intent leads.",
                  },
                  {
                    title: "Agent workload & activity",
                    body: "See distribution of conversations and maintain accountability inside the inbox.",
                  },
                  {
                    title: "Segment-level performance",
                    body: "Compare results by tag, stage, or list so messaging stays relevant and efficient.",
                  },
                  {
                    title: "Trend reporting",
                    body: "Identify improvements or drops over time and fix issues before revenue is affected.",
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who uses this */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Who uses WhatsApp analytics?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
                Any team that depends on WhatsApp for leads, follow-ups, or
                support. Analytics is especially valuable when multiple people
                handle the same inbox or you run campaigns regularly.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Sales owners",
                    body: "Improve conversion by tracking reply rate, follow-up speed, and outcomes by segment.",
                  },
                  {
                    title: "Support managers",
                    body: "Reduce delays by monitoring response time, workload, and unresolved conversations.",
                  },
                  {
                    title: "Marketing teams",
                    body: "Optimize broadcasts using delivered/read/clicked/replied metrics and retarget segments.",
                  },
                  {
                    title: "Founders & operators",
                    body: "Get a clear view of WhatsApp as a channel—revenue impact, performance, and bottlenecks.",
                  },
                  {
                    title: "Multi-location businesses",
                    body: "Compare performance across teams/branches with consistent workflows and reporting.",
                  },
                  {
                    title: "Automation-first teams",
                    body: "Measure chatbot routing, human handoff performance, and downstream results.",
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Retargeting framing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Analytics that powers retargeting
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The fastest wins come from sending the next best message to the
                right audience. Analytics makes common retargeting segments
                possible—like delivered-not-read, read-not-replied,
                clicked-not-replied, failed, and replied—so you can improve
                results without increasing spam.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                This works best when campaigns are connected to a{" "}
                <Link
                  href="/whatsapp-crm"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp CRM
                </Link>{" "}
                and replies flow into a{" "}
                <Link
                  href="/whatsapp-team-inbox"
                  className="text-[#0d8a3a] hover:underline"
                >
                  Team Inbox
                </Link>
                .
              </p>
            </div>

            {/* Cluster links */}
            <section className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Explore related modules
              </h2>
              <p className="mt-2 text-gray-700">
                WhatsApp analytics is strongest when it’s connected to
                campaigns, inbox workflows, and automation.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
                <Link
                  href="/whatsapp-campaigns"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Campaigns</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Broadcast + tracking + retargeting outcomes.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-team-inbox"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Team Inbox</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Multi-agent speed, ownership, and accountability.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-chatbot-builder"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Chatbot Builder</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Automation that improves response and qualification.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-crm"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">WhatsApp CRM</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Customer context, tags, and follow-up discipline.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-business-api-provider"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">API Provider</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Set up WhatsApp Business API correctly.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>
              </div>
            </section>

            {/* Benefits */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits for small businesses
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Better conversion:
                  </span>{" "}
                  Identify what drives replies and bookings, then double down.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Faster follow-ups:
                  </span>{" "}
                  Improve response speed and reduce missed leads.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Track workload and ownership so nothing slips.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Smarter retargeting:
                  </span>{" "}
                  Use outcome-based segments instead of blasting everyone.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Monitor trends over time and keep iterating.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to track WhatsApp performance?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how analytics
                    connects your campaigns, inbox workflows, and CRM
                    follow-ups.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://app.xplorebyte.com/signup-for-trial"
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
            <div className="mt-6 space-y-5">
              {faqs.map(faq => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
