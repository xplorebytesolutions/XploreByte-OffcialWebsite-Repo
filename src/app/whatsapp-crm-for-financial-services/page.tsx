// 📄 File: src/app/whatsapp-crm-for-financial-services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-financial-services";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Financial Services | Loan & Insurance Lead Follow-ups | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for financial services to manage loan leads, insurance inquiries, and client follow-ups on WhatsApp. Team Inbox for advisors, automated reminders, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for loan agents",
    "WhatsApp CRM for insurance agents",
    "WhatsApp follow up for financial leads",
    "WhatsApp reminders for EMI renewals",
    "WhatsApp campaigns for financial services",
    "WhatsApp Business API for finance",
    "multi-agent WhatsApp inbox for finance teams",
    "financial advisor WhatsApp automation",
    "loan agent WhatsApp CRM",
    "insurance advisor WhatsApp management",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Financial Services | Loan & Insurance Lead Follow-ups | XploreByte",
    description:
      "Convert more financial leads on WhatsApp with loan follow-ups, EMI reminders, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Financial Services - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Financial Services | Loan & Insurance Lead Follow-ups | XploreByte",
    description:
      "Convert more financial leads on WhatsApp with loan follow-ups, EMI reminders, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I follow up loan leads automatically on WhatsApp?",
    answer:
      "Yes. A no-code chatbot can capture loan type, income range, and preferred contact time, then route qualified leads to a loan advisor for personalized follow-up. Automation helps with reminders and scheduling, not approvals.",
  },
  {
    question: "Can I send EMI and renewal reminders?",
    answer:
      "Yes. You can send EMI payment reminders, insurance renewal alerts, policy maturity notifications, and document submission reminders using structured templates on WhatsApp Business API—without sharing sensitive financial data in messages.",
  },
  {
    question: "Can multiple agents handle one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple loan advisors, insurance agents, and support staff can handle chats from one number with assignment, ownership, and visibility—so no lead is missed.",
  },
  {
    question: "Can chatbots qualify leads and route to advisors?",
    answer:
      "Yes. The chatbot can handle initial queries (loan types, policy options, document checklists), capture intent, and route qualified leads to the right advisor or verification team based on the service type.",
  },
  {
    question: "Do I need WhatsApp Business API for automation and tracking?",
    answer:
      "For multi-agent inbox, automation, templates, EMI reminders, and scalable campaigns with analytics, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForFinancialServicesPage() {
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
      {/* ✅ FAQ JSON-LD */}
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/30 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/90 ring-1 ring-white/20">
                Leads → Follow-ups → Closures (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Financial Services
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage loan leads, insurance inquiries, EMI reminders, and
                client follow-ups on WhatsApp with XploreByte — built for
                WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing leads in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps financial
                service teams respond faster, track loan pipelines, and keep
                clients engaged—while staying compliant.
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
                Start free or book a demo in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Pain points */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Why financial service teams need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Financial services win on trust and responsiveness. Clients
                message for loan eligibility, policy details, EMI schedules, and
                document requirements. If replies are delayed—or the
                conversation is lost—they move to another advisor or lender.
                WhatsApp CRM gives you a structured way to manage conversations
                like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Loan and insurance inquiries from ads and referrals get buried in personal chats or handled inconsistently.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No reminders for 'call back later' leads—so they apply elsewhere before you follow up.",
                  },
                  {
                    title: "No ownership clarity",
                    body: "Clients repeat questions to sales, verification, and support teams, and no one knows who's responsible.",
                  },
                  {
                    title: "Document chase",
                    body: "Endless back-and-forth for pending documents with no structured tracking or reminders.",
                  },
                  {
                    title: "Campaign chaos",
                    body: "EMI reminders, renewal alerts, and upsell campaigns are sent randomly with no tracking of results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, loan conversions, or policy renewal rates.",
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

            {/* How it works */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How XploreByte WhatsApp CRM works for financial services
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for advisors",
                    body: "Multiple agents (loan, insurance, verification, support) reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Client context (CRM)",
                    body: "Keep client history, loan pipeline stage, tags, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (eligibility, documents, loan types), capture intent, and route to the right advisor—without collecting sensitive data.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send EMI reminders, renewal alerts, policy upsells, and referral campaigns with templates and CTAs—compliance-safe.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to loan disbursements and policy sales.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable messaging for financial services.",
                    link: "/whatsapp-business-api-provider",
                    linkText: "Explore API Provider →",
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
                    <Link
                      href={item.link}
                      className="mt-4 inline-block text-sm font-semibold text-[#0d8a3a] hover:underline"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Use-case flows */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                High-converting financial services WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows financial service teams run daily.
                With XploreByte, the experience becomes structured, trackable,
                and faster for clients—while staying compliant.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Loan lead qualification flow",
                    items: [
                      "Lead asks for loan details + eligibility",
                      "Bot collects loan type, income range, and employment status",
                      "Advisor schedules call and shares document checklist",
                      "Lead confirms (and gets reminder for document submission)",
                    ],
                  },
                  {
                    title: "EMI & renewal reminder flow",
                    items: [
                      "Segment clients by upcoming EMI or policy renewal date",
                      "Send reminder 3–5 days before due date (no sensitive details)",
                      "Provide payment link or renewal process guidance",
                      "Track replies and payment confirmations",
                    ],
                  },
                  {
                    title: "Document collection & verification flow",
                    items: [
                      "Send document checklist to applicant via WhatsApp",
                      "Track submission status and send reminders for pending docs",
                      "Verification team reviews and requests corrections if needed",
                      "Send status updates (verification complete, pending bank check)",
                    ],
                  },
                  {
                    title: "Upsell & referral flow",
                    items: [
                      "Segment existing clients by product eligibility (top-up loan, policy upgrade)",
                      "Send personalized upsell offer or referral incentive campaign",
                      "Route replies to Team Inbox (sales or relationship manager)",
                      "Track conversions and referral success rate",
                    ],
                  },
                ].map(card => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {card.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-gray-700">
                      {card.items.map(t => (
                        <li key={t} className="flex gap-2">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#11A944]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
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

            {/* Benefits */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits for financial service teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More conversions:
                  </span>{" "}
                  Faster response + structured follow-ups increase loan
                  applications and policy sales.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher retention:
                  </span>{" "}
                  EMI reminders, renewal alerts, and timely communication keep
                  clients engaged and on track.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear chat ownership for advisors, verification, and support in
                  one inbox with visibility.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Less chaos:
                  </span>{" "}
                  Replace personal WhatsApp handling with a shared, trackable
                  workflow for leads and clients.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Use analytics to improve response time, loan conversion rates,
                  and campaign outcomes.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your financial services business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for financial service teams.
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
