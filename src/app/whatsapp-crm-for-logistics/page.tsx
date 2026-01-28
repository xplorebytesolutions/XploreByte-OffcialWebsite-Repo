// 📄 File: src/app/whatsapp-crm-for-logistics/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-logistics";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Logistics | Pickup Scheduling, Delivery Updates, Customer Support | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for logistics to manage pickup scheduling, delivery updates, and customer inquiries on WhatsApp. Team Inbox for logistics teams, automated replies, status updates, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for logistics",
    "WhatsApp CRM for courier business",
    "WhatsApp CRM for packers and movers",
    "WhatsApp pickup scheduling",
    "WhatsApp delivery updates",
    "multi-agent WhatsApp inbox for logistics teams",
    "WhatsApp Business API for logistics",
    "courier service WhatsApp automation",
    "delivery tracking on WhatsApp",
    "logistics customer support WhatsApp",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Logistics | Pickup Scheduling, Delivery Updates, Customer Support | XploreByte",
    description:
      "Manage logistics operations on WhatsApp with pickup scheduling, real-time delivery updates, team inbox, automation, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Logistics - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Logistics | Pickup Scheduling, Delivery Updates, Customer Support | XploreByte",
    description:
      "Manage logistics operations on WhatsApp with pickup scheduling, real-time delivery updates, team inbox, automation, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I handle pickup scheduling and reminders on WhatsApp?",
    answer:
      "Yes. XploreByte WhatsApp CRM helps you manage pickup scheduling, delivery confirmations, and automated reminders directly on WhatsApp. Capture pickup and drop location details, send confirmations, and coordinate seamlessly with customers.",
  },
  {
    question: "Can multiple agents manage chats from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple agents (sales, operations, support) can handle chats from one number with assignment, ownership, and visibility—so no customer inquiry is missed.",
  },
  {
    question: "Can I automate delivery status updates and support handoff?",
    answer:
      "Yes. You can send automated status updates (picked up, in transit, out for delivery, delivered) and route customer queries to the right team member—using WhatsApp Business API for confirmations and reminders.",
  },
  {
    question: "Do I need WhatsApp Business API for scalable messaging?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable delivery updates with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows designed for logistics operations.",
  },
  {
    question: "Can I track response time and performance in analytics?",
    answer:
      "Yes. Analytics helps you track response time, delivery confirmation rates, support resolution time, and customer satisfaction—so you can improve operations and team accountability.",
  },
] as const;

export default function WhatsAppCrmForLogisticsPage() {
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
                Inquiries → Pickup → Delivery → Confirmation (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Logistics
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage logistics inquiries, pickup scheduling, delivery updates,
                and customer support on WhatsApp with XploreByte — built for
                WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing inquiries in personal chats. With a Team Inbox,
                automation, status updates, and analytics, XploreByte helps
                courier services, packers & movers, and logistics teams respond
                faster, coordinate seamlessly, and deliver better experiences.
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
                Why logistics businesses need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Logistics wins on speed and clarity. Customers message for
                pickup scheduling, delivery updates, quotations, and issue
                resolution. If replies are delayed—or the conversation is
                lost—customers switch to another provider. WhatsApp CRM gives
                you a structured way to manage conversations like a real
                business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed inquiries",
                    body: "Pickup requests and delivery inquiries get buried in personal chats or handled inconsistently by different team members.",
                  },
                  {
                    title: "Slow confirmations",
                    body: 'No automated confirmations for pickup scheduling or delivery updates—so customers keep asking "Where is my order?"',
                  },
                  {
                    title: "No ownership",
                    body: "Customers repeat the same questions to sales, operations, and support—and no one knows who's responsible.",
                  },
                  {
                    title: "Manual status updates",
                    body: "No automated status updates for in-transit, out-for-delivery, or delivered—leading to constant manual replies and frustrated customers.",
                  },
                  {
                    title: "Support overload",
                    body: "Delay or issue inquiries flood one person's WhatsApp, with no structured handoff or resolution tracking.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, delivery confirmation rates, or customer satisfaction.",
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
                How XploreByte WhatsApp CRM works for logistics teams
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for logistics teams",
                    body: "Multiple agents (sales, operations, support) reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Customer context (CRM)",
                    body: "Keep customer history, pickup/drop details, delivery status, and support tickets so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (rates, coverage, timing), capture pickup details, and route to the right team member for confirmation.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Status updates & broadcasts",
                    body: "Send automated delivery updates (picked up, in transit, delivered), service reminders, and promotional campaigns with templates.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, delivery confirmation rates, support resolution time, and customer satisfaction.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable logistics messaging.",
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
                High-converting logistics WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows logistics teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for customers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Pickup scheduling & confirmation flow",
                    items: [
                      "Customer requests pickup for courier/packing",
                      "Bot collects pickup location, drop location, and item details",
                      "Operations confirms pickup slot and shares tracking details",
                      "Customer receives automated pickup reminder",
                    ],
                  },
                  {
                    title: "Live delivery status update flow",
                    items: [
                      "Item picked up → automated confirmation sent",
                      "In transit → status update with estimated delivery",
                      "Out for delivery → final reminder with delivery slot",
                      "Delivered → confirmation with proof/feedback request",
                    ],
                  },
                  {
                    title: "Support handoff for delays or issues",
                    items: [
                      "Customer reports delay or damage inquiry",
                      "Bot captures issue details and assigns to support",
                      "Support agent handles resolution with context",
                      "Track resolution time and customer satisfaction",
                    ],
                  },
                  {
                    title: "Quotation follow-up & repeat bookings",
                    items: [
                      "Customer requests rate for packers & movers service",
                      "Sales shares quotation and terms on WhatsApp",
                      "Scheduled follow-up after 2–3 days",
                      "Track conversion and repeat booking campaigns",
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
                Benefits for logistics businesses
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Faster operations:
                  </span>{" "}
                  Automated confirmations and status updates reduce manual
                  replies and improve customer satisfaction.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better customer experience:
                  </span>{" "}
                  Real-time delivery updates and proactive support handling
                  build trust and reduce "Where is my order?" inquiries.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear ownership and multi-agent visibility (sales, operations,
                  support) in one inbox.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Less chaos:
                  </span>{" "}
                  Replace personal WhatsApp handling with a shared, trackable
                  workflow for pickup, delivery, and support inquiries.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Use analytics to improve response time, delivery confirmation
                  rates, and support resolution time.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your logistics business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, status updates, and analytics work
                    together for logistics teams.
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
