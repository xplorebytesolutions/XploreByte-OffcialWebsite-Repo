// 📄 File: src/app/whatsapp-crm-for-b2b-sales/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-b2b-sales";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for B2B Sales | Quotations, Follow-ups, Dealer Management | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for B2B sales to manage manufacturer leads, quotations, distributor follow-ups, and dealer inquiries on WhatsApp. Team Inbox for sales teams, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for B2B sales",
    "WhatsApp CRM for manufacturers",
    "WhatsApp lead follow up for distributors",
    "WhatsApp quotation follow up",
    "WhatsApp campaigns for B2B sales",
    "multi-agent WhatsApp inbox for sales teams",
    "WhatsApp Business API for B2B",
    "B2B sales WhatsApp automation",
    "dealer management on WhatsApp",
    "wholesaler WhatsApp CRM",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for B2B Sales | Quotations, Follow-ups, Dealer Management | XploreByte",
    description:
      "Convert more B2B leads on WhatsApp with quotation follow-ups, dealer management, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for B2B Sales - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for B2B Sales | Quotations, Follow-ups, Dealer Management | XploreByte",
    description:
      "Convert more B2B leads on WhatsApp with quotation follow-ups, dealer management, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I manage dealer and distributor leads on WhatsApp?",
    answer:
      "Yes. XploreByte WhatsApp CRM helps you manage dealer inquiries, distributor follow-ups, quotation requests, and order confirmations directly on WhatsApp. Keep customer history, tags, and deal status so your sales team can respond with context and consistency.",
  },
  {
    question: "Can multiple sales agents handle one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple sales agents (including accounts and support) can handle chats from one number with assignment, ownership, and visibility—so no inquiry is missed.",
  },
  {
    question: "Can I automate quotation follow-ups on WhatsApp?",
    answer:
      "Yes. You can schedule reminders and send structured follow-up messages for pending quotations, order confirmations, and payment coordination—using WhatsApp Business API templates for scheduling and reminders.",
  },
  {
    question: "Can I run campaigns for resellers and partners on WhatsApp?",
    answer:
      "Yes. You can send broadcasts for new product launches, price updates, seasonal offers, and repeat order reminders—using opt-in and structured messaging on WhatsApp Business API for dealer and distributor networks.",
  },
  {
    question: "Do I need WhatsApp Business API for B2B workflows?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows designed for B2B sales teams.",
  },
] as const;

export default function WhatsAppCrmForB2BSalesPage() {
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
                Inquiries → Quotations → Orders (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for B2B Sales
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage B2B leads, quotations, dealer inquiries, and order
                follow-ups on WhatsApp with XploreByte — built for WhatsApp
                Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing inquiries in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps
                manufacturers, distributors, and B2B sales teams respond
                faster, close more deals, and coordinate seamlessly.
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
                Why B2B sales teams need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                B2B sales win on speed and trust. Dealers, distributors, and
                buyers message for product specs, pricing, quotations, and
                delivery timelines. If replies are delayed—or the conversation
                is lost—deals go to a competitor. WhatsApp CRM gives you a
                structured way to manage conversations like a real business
                workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed inquiries",
                    body: "Product inquiries and dealer requests get buried in personal chats or handled inconsistently by different sales reps.",
                  },
                  {
                    title: "Slow quotation follow-ups",
                    body: "No reminders for 'quote sent' or 'pending approval'—so buyers go to another supplier.",
                  },
                  {
                    title: "No deal ownership",
                    body: "Customers repeat the same questions to multiple reps, and no one knows who's responsible for closing the deal.",
                  },
                  {
                    title: "Repeat order delays",
                    body: "No reactivation campaigns for repeat orders after 30–60 days—so dealers forget and switch suppliers.",
                  },
                  {
                    title: "Launch chaos",
                    body: "New product launches and price updates are sent randomly with no tracking of engagement or conversions.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, quotation conversion rates, or campaign outcomes.",
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
                How XploreByte WhatsApp CRM works for B2B sales teams
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for sales teams",
                    body: "Multiple agents (sales, accounts, support) reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Customer context (CRM)",
                    body: "Keep dealer history, tags, order status, and quotation details so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (product specs, pricing, availability), capture intent, and route to the right sales rep.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send product launches, price updates, seasonal offers, and repeat order reminders with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, quotation follow-ups, campaign performance, and what leads to order confirmations.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable B2B messaging.",
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
                High-converting B2B WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows B2B sales teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for dealers, distributors, and buyers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Inquiry qualification & quotation flow",
                    items: [
                      "Buyer asks for product specs + pricing",
                      "Bot collects quantity, location, and delivery timeline",
                      "Sales rep shares quotation and terms",
                      "Buyer confirms order (and gets delivery coordination)",
                    ],
                  },
                  {
                    title: "Quotation follow-up & closing flow",
                    items: [
                      "Quotation sent to dealer/distributor",
                      "Scheduled reminder after 3–5 days",
                      "Sales rep handles objections and negotiations",
                      "Track conversion outcomes (approved/rejected)",
                    ],
                  },
                  {
                    title: "Repeat order reactivation after 30–60 days",
                    items: [
                      "Segment inactive dealers or regular buyers",
                      "Send repeat order reminder with new offers",
                      "Route replies to assigned sales rep",
                      "Track reactivation and order confirmations",
                    ],
                  },
                  {
                    title: "New product launch & dealer engagement",
                    items: [
                      "Segment dealers by category and region",
                      "Send new product launch with brochure and pricing",
                      "Route replies to Team Inbox",
                      "Track engagement and order bookings",
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
                Benefits for B2B sales teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More conversions:
                  </span>{" "}
                  Faster response + structured quotation follow-ups increase
                  deal closures and repeat orders.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher deal quality:
                  </span>{" "}
                  Capture product requirements, quantity, and location
                  upfront—so sales reps focus on qualified leads.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear deal ownership and multi-agent visibility (sales,
                  accounts, support) in one inbox.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Less chaos:
                  </span>{" "}
                  Replace personal WhatsApp handling with a shared, trackable
                  workflow for dealer and distributor inquiries.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Use analytics to improve response time, quotation conversion
                  rates, and campaign outcomes.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your B2B sales on WhatsApp — professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for B2B sales teams.
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
