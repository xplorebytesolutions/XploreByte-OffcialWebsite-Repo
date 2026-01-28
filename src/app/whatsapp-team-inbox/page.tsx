// 📄 File: src/app/whatsapp-team-inbox/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-team-inbox";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const faqs = [
  {
    question: "What is a WhatsApp Team Inbox?",
    answer:
      "A WhatsApp Team Inbox (shared inbox) lets multiple agents manage chats from one WhatsApp Business API number—so sales and support can collaborate, assign conversations, and respond faster with full visibility.",
  },
  {
    question:
      "Can multiple agents use the same WhatsApp number at the same time?",
    answer:
      "Yes—when you use WhatsApp Business API with a shared inbox, multiple agents can work simultaneously, with assignment and history so nothing gets missed.",
  },
  {
    question: "Is this different from WhatsApp Business App?",
    answer:
      "Yes. The WhatsApp Business App is designed for single-device workflows. A team inbox on WhatsApp Business API enables multi-agent collaboration, conversation routing, and better reporting.",
  },
  {
    question: "How does conversation assignment work?",
    answer:
      "Teams typically assign conversations to agents (manually or via rules). This prevents duplicate replies and makes ownership clear across sales and support.",
  },
  {
    question: "Can I connect this with chatbots and campaigns?",
    answer:
      "Yes. A team inbox works best when paired with no-code chatbots for FAQs/lead capture and campaigns for broadcasts and retargeting—so your team handles only high-value conversations.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: "WhatsApp Team Inbox | Multi-Agent Shared Inbox | XploreByte",
  },
  description:
    "XploreByte provides a WhatsApp Team Inbox (shared inbox) for multi-agent WhatsApp sales and support on WhatsApp Business API. Assign chats, collaborate, and respond faster. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp Team Inbox",
    "WhatsApp shared inbox",
    "multi-agent WhatsApp",
    "WhatsApp Business API inbox",
    "WhatsApp customer support inbox",
    "WhatsApp CRM inbox",
    "team WhatsApp support",
    "shared WhatsApp number",
    "WhatsApp inbox for small business",
  ],
  openGraph: {
    title: "WhatsApp Team Inbox | Multi-Agent Shared Inbox | XploreByte",
    description:
      "A multi-agent WhatsApp Team Inbox for WhatsApp Business API—assign chats, collaborate, and speed up sales & support. Start a free trial.",
    url: PAGE_URL, // ✅ absolute URL
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "XploreByte WhatsApp Team Inbox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Team Inbox | Multi-Agent Shared Inbox | XploreByte",
    description:
      "A multi-agent WhatsApp Team Inbox for WhatsApp Business API—assign chats, collaborate, and respond faster.",
    images: ["/herosection.png"],
  },
};

export default function WhatsAppTeamInboxPage() {
  return (
    <>
      {/* ✅ FAQ JSON-LD */}
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              WhatsApp Team Inbox • Shared Inbox • Multi-Agent
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              WhatsApp Team Inbox for multi-agent sales & support
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Let multiple agents handle chats from one WhatsApp Business API
              number. Assign conversations, collaborate across teams, and keep
              full context—so responses are fast, consistent, and measurable.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://app.xplorebyte.com/signup-for-trial"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Talk to Sales
              </Link>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-center text-emerald-800">
                  ✓
                </span>
                Shared inbox workflow for teams (sales + support)
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-center text-emerald-800">
                  ✓
                </span>
                Assign chats to agents to prevent duplicate replies
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-center text-emerald-800">
                  ✓
                </span>
                Full conversation history & accountability for every contact
              </li>
            </ul>
          </div>

          {/* Visual / Proof block (keep layout simple, no redesign) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">
                Shared Inbox Snapshot
              </p>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                WhatsApp Business API
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-700">
                  Incoming message
                </p>
                <p className="mt-1 text-sm text-slate-900">
                  “Hi, I want to know pricing for your package.”
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Assigned to:{" "}
                  <span className="font-semibold text-slate-900">
                    Sales Team
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-700">
                  Agent reply
                </p>
                <p className="mt-1 text-sm text-slate-900">
                  “Sure! Sharing pricing + options. What’s your city and
                  preferred start date?”
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Owner:{" "}
                  <span className="font-semibold text-slate-900">Agent A</span>{" "}
                  • Status:{" "}
                  <span className="font-semibold text-emerald-700">
                    In Progress
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-700">Outcome</p>
                <p className="mt-1 text-sm text-slate-900">
                  Faster resolution + no double replies + full context.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://app.xplorebyte.com/signup-for-trial"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Try it
              </Link>
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Get a demo
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-14 md:mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Built for shared ownership, clarity, and speed
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            When WhatsApp becomes your primary customer channel, you need a real
            team workflow—not screenshots, not “who replied last”, not chaos. A
            team inbox gives you control.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Multi-agent collaboration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Multiple agents handle chats simultaneously from one WhatsApp
                number with clear ownership.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Assignment & accountability
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Assign conversations to the right team member, track follow-ups,
                and avoid duplicate replies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Context that converts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Keep full chat history and notes so every response feels
                personal, fast, and consistent.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ NEW: WHO USES THIS? (use-case block) */}
        <section className="mt-14 md:mt-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Who uses this?
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Teams that get inbound WhatsApp leads and need multiple agents to
              respond quickly—without losing context or ownership.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  D2C & Retail
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Handle product questions, COD queries, returns, and order
                  updates with a shared queue.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Services (Clinics, Salons, Gyms)
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Manage appointment requests, pricing questions, and follow-ups
                  with multiple staff members.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Education & Consultations
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Convert WhatsApp leads faster by routing inquiries to
                  counselors and tracking outcomes.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://app.xplorebyte.com/signup-for-trial"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Ask about team setup
              </Link>
            </div>
          </div>
        </section>

        {/* ✅ NEW: Internal cluster links (authority + topical depth) */}
        <section className="mt-14 md:mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Explore related WhatsApp growth modules
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            This page is part of the XploreByte WhatsApp-first CRM cluster.
            Build a complete WhatsApp growth system across inbox, automation,
            campaigns, and API setup.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Link
              href="/whatsapp-chatbot-builder"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900 group-hover:text-slate-900">
                WhatsApp Chatbot Builder
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Capture leads, answer FAQs, and route users to agents—without
                code.
              </p>
              <p className="mt-3 text-sm font-semibold text-emerald-700">
                Learn more →
              </p>
            </Link>

            <Link
              href="/whatsapp-campaigns"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900">
                WhatsApp Campaigns
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Broadcast offers, re-target leads, and measure outcomes with
                WhatsApp-first funnels.
              </p>
              <p className="mt-3 text-sm font-semibold text-emerald-700">
                Explore campaigns →
              </p>
            </Link>

            <Link
              href="/whatsapp-business-api-provider"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900">
                WhatsApp Business API Provider
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Set up WhatsApp Business API correctly and connect your number
                to XploreByte.
              </p>
              <p className="mt-3 text-sm font-semibold text-emerald-700">
                See setup →
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 md:mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            FAQ
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map(f => (
              <details
                key={f.question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  {f.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-700">
              Prefer to start with the full CRM view?{" "}
              <Link
                href="/whatsapp-crm"
                className="font-semibold text-emerald-700 hover:underline"
              >
                Explore WhatsApp CRM
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 md:mt-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Ready to run WhatsApp like a real team?
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Get a multi-agent WhatsApp Team Inbox on WhatsApp Business
              API—then expand into chatbots and campaigns as your volume grows.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://app.xplorebyte.com/signup-for-trial"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
