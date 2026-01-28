// 📄 File: src/app/whatsapp-crm-for-automobile-dealers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-automobile-dealers";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Automobile Dealers | Test Drive Follow-ups, Service Reminders | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for automobile dealers to manage vehicle inquiries, test drive follow-ups, and service bookings on WhatsApp. Team Inbox for sales & service teams, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for automobile dealers",
    "WhatsApp CRM for car dealerships",
    "WhatsApp CRM for service centers",
    "WhatsApp service reminders",
    "WhatsApp follow up for test drive leads",
    "WhatsApp campaigns for car dealers",
    "multi-agent WhatsApp inbox for service center",
    "WhatsApp Business API for automobile dealers",
    "car dealer WhatsApp automation",
    "vehicle inquiry management WhatsApp",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Automobile Dealers | Test Drive Follow-ups, Service Reminders | XploreByte",
    description:
      "Convert more automobile leads on WhatsApp with test drive follow-ups, service reminders, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Automobile Dealers - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Automobile Dealers | Test Drive Follow-ups, Service Reminders | XploreByte",
    description:
      "Convert more automobile leads on WhatsApp with test drive follow-ups, service reminders, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I follow up test drive leads on WhatsApp automatically?",
    answer:
      "Yes. A no-code chatbot can capture vehicle interest, budget, and preferred date, then route to a sales executive for test drive scheduling. You can also send automated reminders before the scheduled test drive.",
  },
  {
    question: "Can I send service reminders and appointment confirmations?",
    answer:
      "Yes. You can send service reminders, appointment confirmations, pickup/drop coordination messages, and 'ready for delivery' updates using structured templates on WhatsApp Business API.",
  },
  {
    question: "Can multiple agents handle chats from one number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple sales executives, service advisors, and support staff can handle chats from one number with assignment, ownership, and visibility—so no inquiry is missed.",
  },
  {
    question: "Can a chatbot answer FAQs and route to the right team?",
    answer:
      "Yes. The chatbot can handle common questions about vehicle specs, pricing, EMI options, service packages, and branch locations—then route qualified leads to sales or service teams based on intent.",
  },
  {
    question:
      "Do I need WhatsApp Business API for automation and campaigns?",
    answer:
      "For multi-agent inbox, automation, templates, service reminders, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForAutomobileDealersPage() {
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
                Inquiries → Test Drives → Sales + Service (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Automobile Dealers
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage vehicle inquiries, test drive leads, service bookings,
                and retention on WhatsApp with XploreByte — built for WhatsApp
                Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing inquiries in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps
                automobile dealers respond faster, book more test drives, and
                bring customers back for service.
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
                Why automobile dealers need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Automobile businesses win on speed and trust. Customers message
                for vehicle details, test drives, pricing, service
                appointments, and offers. If replies are delayed—or the chat is
                lost—buyers move to another dealer. WhatsApp CRM gives you a
                structured way to manage conversations like a real business
                workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Vehicle inquiries and test drive requests get buried in personal chats or handled inconsistently.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No reminders for 'call back later' leads—so they buy from a competitor or forget about the test drive.",
                  },
                  {
                    title: "No ownership clarity",
                    body: "Customers repeat the same questions to sales and service teams, and no one knows who's responsible.",
                  },
                  {
                    title: "Service no-shows",
                    body: "Service appointments are scheduled but not followed up with reminders—leading to no-shows and idle bays.",
                  },
                  {
                    title: "Offer chaos",
                    body: "Festival discounts, new launches, and accessories campaigns are sent randomly with no tracking.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, replies, or conversion outcomes for sales and service.",
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
                How XploreByte WhatsApp CRM works for automobile dealers
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for sales & service",
                    body: "Multiple agents (sales, service advisors, support) reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Customer context (CRM)",
                    body: "Keep customer history, vehicle interest, tags, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (pricing, specs, EMI options), capture intent, and route to the right team (sales or service).",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send new launches, service reminders, insurance renewal alerts, and accessories offers with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to test drives, sales, and service bookings.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable messaging for automobile businesses.",
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
                High-converting automobile WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows automobile dealers run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for customers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Test drive lead follow-up flow",
                    items: [
                      "Customer asks for vehicle details + price",
                      "Bot collects budget, model interest, and city",
                      "Sales executive schedules test drive",
                      "Customer confirms (and gets reminder before visit)",
                    ],
                  },
                  {
                    title: "Service appointment booking flow",
                    items: [
                      "Customer requests service appointment",
                      "Bot collects vehicle details and preferred date",
                      "Service advisor confirms booking and shares slot",
                      "Send pickup/drop confirmation and ready-for-delivery update",
                    ],
                  },
                  {
                    title: "Insurance renewal & upsell flow",
                    items: [
                      "Segment customers by insurance renewal date",
                      "Send renewal reminder with insurance partner details",
                      "Upsell accessories, AMC packages, or extended warranty",
                      "Track replies and conversions",
                    ],
                  },
                  {
                    title: "New launch & offer broadcast flow",
                    items: [
                      "Segment leads by budget and vehicle preference",
                      "Send new model launch or festival discount campaign",
                      "Route replies to Team Inbox (sales team)",
                      "Track test drive bookings and sales outcomes",
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
                Benefits for automobile dealers
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More test drives & sales:
                  </span>{" "}
                  Faster response + structured follow-ups increase conversions
                  from inquiry to test drive to sale.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher service retention:
                  </span>{" "}
                  Service reminders, appointment confirmations, and insurance
                  renewals bring customers back.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear chat ownership for sales, service advisors, and support
                  in one inbox with visibility.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Less chaos:
                  </span>{" "}
                  Replace personal WhatsApp handling with a shared, trackable
                  workflow for sales and service.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Use analytics to improve response time, campaign outcomes, and
                  team performance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your automobile business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for automobile dealers.
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
