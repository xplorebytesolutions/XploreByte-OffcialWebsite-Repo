// 📄 File: src/app/whatsapp-business-api-provider/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-business-api-provider";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // ✅ shorter title to avoid truncation
  title: {
    absolute: "WhatsApp Business API Provider | Setup & CRM | XploreByte",
  },
  description:
    "Get started with WhatsApp Business API using XploreByte. Connect your number, run a WhatsApp CRM, and enable Team Inbox, no-code chatbots, campaigns, and reporting. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp Business API provider",
    "WhatsApp Business API setup",
    "WhatsApp Business API for small business",
    "WhatsApp Cloud API onboarding",
    "WhatsApp CRM",
    "WhatsApp Team Inbox",
    "WhatsApp chatbot builder",
    "WhatsApp campaigns",
    "WhatsApp templates",
    "WhatsApp Business API compliance",
  ],
  openGraph: {
    title: "WhatsApp Business API Provider | Setup & CRM | XploreByte",
    description:
      "Connect WhatsApp Business API and run a WhatsApp-first CRM with team inbox, automation, campaigns, and analytics.",
    // ✅ absolute URL via NEXT_PUBLIC_SITE_URL
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Business API Provider - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API Provider | Setup & CRM | XploreByte",
    description:
      "Connect WhatsApp Business API and run a WhatsApp-first CRM with team inbox, automation, campaigns, and analytics.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Is WhatsApp Business API free?",
    answer:
      "WhatsApp Business API typically involves provider and message fees. Costs vary by region and message type, and you’ll usually pay based on usage rather than a single fixed price.",
  },
  {
    question:
      "Do I need a Facebook Business Manager to get WhatsApp Business API?",
    answer:
      "In most cases, yes. WhatsApp Business API setup generally requires a Meta Business account and verification steps so your business can use an approved WhatsApp Business API connection.",
  },
  {
    question: "How long does WhatsApp Business API setup take?",
    answer:
      "Setup time can range from hours to a few days depending on business verification and provider steps. XploreByte focuses on guided onboarding so small businesses can get live quickly.",
  },
  {
    question:
      "What’s the difference between WhatsApp Business App and WhatsApp Business API?",
    answer:
      "The Business App is designed for single-device or small teams with limited automation. The API is built for scaling with multi-agent access, templates, automation, and reliable integrations.",
  },
  {
    question: "Can multiple agents reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a shared inbox, multiple agents can manage conversations from one number with clear ownership, assignments, and visibility.",
  },
  {
    question:
      "Can I run campaigns and track analytics with WhatsApp Business API?",
    answer:
      "Yes. With the right WhatsApp CRM, you can send campaigns, automate follow-ups, and track results with analytics and reporting to improve performance over time.",
  },
] as const;

export default function WhatsAppBusinessApiProviderPage() {
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
                Setup • Verification • Templates • Messaging Workflows
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp Business API Provider for Small Businesses
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Get started with WhatsApp Business API and manage chats,
                campaigns, and automation with XploreByte — a WhatsApp CRM built
                for small business teams.
              </p>

              <p className="mt-6 text-lg text-white/80">
                If you’re searching for a WhatsApp Business API provider, you
                likely need reliable onboarding, support, and a system your team
                can run every day. XploreByte helps small businesses connect
                WhatsApp Business API and operate a WhatsApp-first CRM with Team
                Inbox, no-code chatbots, campaigns, and reporting.
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
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                What is WhatsApp Business API?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                WhatsApp Business API is the WhatsApp solution designed for
                businesses that need a scalable, team-ready messaging setup. It
                enables multi-agent workflows, templates, automation, and
                integration with tools you use to manage leads and customer
                support.
              </p>
            </div>

            {/* ✅ NEW: WHO IS THIS FOR? */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Who is this for?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
                WhatsApp Business API is best when WhatsApp is a core revenue or
                support channel—and you need a team workflow, templates,
                automation, and measurable outcomes.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Sales teams on WhatsApp",
                    body: "Convert inbound leads faster with clear ownership, follow-ups, and handoffs.",
                  },
                  {
                    title: "Support & service teams",
                    body: "Handle higher chat volume with multi-agent workflows and consistent responses.",
                  },
                  {
                    title: "Businesses running campaigns",
                    body: "Send broadcasts and retargeting with templates, CTAs, and reporting.",
                  },
                  {
                    title: "Automation-first teams",
                    body: "Use chatbots to answer FAQs, qualify leads, and route to humans when needed.",
                  },
                  {
                    title: "Multi-location businesses",
                    body: "Standardize WhatsApp workflows and track outcomes across teams and branches.",
                  },
                  {
                    title: "Founders who want control",
                    body: "Move from ad-hoc WhatsApp usage to structured, trackable business messaging.",
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

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Why small businesses need WhatsApp Business API
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Scaling and reliability:
                  </span>{" "}
                  Handle more conversations without losing track of follow-ups.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Multi-user inbox:
                  </span>{" "}
                  Let your whole team reply from one number with shared
                  visibility.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Templates:
                  </span>{" "}
                  Use structured messaging for notifications and outreach where
                  applicable.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Workflow discipline:
                  </span>{" "}
                  Track ownership, status, and outcomes inside a WhatsApp CRM
                  rather than spreadsheets.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Why choose XploreByte as your provider
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                XploreByte is built to help small businesses adopt WhatsApp
                Business API and run day-to-day messaging with speed and
                clarity. We focus on onboarding, support, and workflows, while
                keeping compliance and templates in view at a practical level.
              </p>

              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Guided onboarding:
                  </span>{" "}
                  Clear steps and support so you can go live faster.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team Inbox + shared workspace:
                  </span>{" "}
                  Assign chats, collaborate, and keep accountability.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    No-Code Chatbot Builder:
                  </span>{" "}
                  Automate FAQs, lead capture, qualification, and follow-ups.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    WhatsApp Campaigning:
                  </span>{" "}
                  Run targeted campaigns without losing customer context.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Reporting & measurement:
                  </span>{" "}
                  Track performance and improve outcomes over time.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Support for templates and best practices:
                  </span>{" "}
                  Help with setup guidance and practical compliance guardrails.
                </li>
              </ul>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Want the CRM side too? Explore{" "}
                <Link
                  href="/whatsapp-crm"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp CRM
                </Link>
                .
              </p>
            </div>

            {/* ✅ NEW: Internal cluster links (authority + navigation) */}
            <section className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Explore what you can build on the API
              </h2>
              <p className="mt-2 text-gray-700">
                Once your WhatsApp Business API is connected, these modules work
                together to create a complete WhatsApp-first growth system:
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link
                  href="/whatsapp-team-inbox"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Team Inbox</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Multi-agent replies, assignment, and accountability.
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
                    No-code flows for FAQs, lead capture, and routing.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-campaigns"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Campaigns</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Broadcast, retargeting, CTAs, and tracking.
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
                    Context, tags, history, and follow-up discipline.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>
              </div>
            </section>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
              <ol className="mt-4 space-y-3 text-gray-700 list-decimal pl-5">
                <li>
                  <span className="font-semibold text-gray-900">
                    Connect WhatsApp Business API:
                  </span>{" "}
                  Complete setup steps and connect your number.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Set up inbox + team:
                  </span>{" "}
                  Create roles, assignments, and shared visibility.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Build chatbot/automation:
                  </span>{" "}
                  Use no-code flows for lead capture and follow-ups.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Launch campaigns + measure results:
                  </span>{" "}
                  Send targeted messages and track analytics to improve
                  performance.
                </li>
              </ol>
            </div>

            {/* Trust/compliance framing (no redesign, just authority language) */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Compliance notes (opt-in, templates, policies)
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                WhatsApp Business API works best when you follow opt-in best
                practices, respect user preferences, and use templates for
                appropriate message types. XploreByte is built to help small
                businesses operate messaging in a structured way while keeping
                policy and template workflows in view.
              </p>
            </div>

            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Start WhatsApp Business API with a WhatsApp CRM
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Built for small businesses that need onboarding support,
                    team workflows, and measurable results. Start a free trial
                    or book a demo.
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
