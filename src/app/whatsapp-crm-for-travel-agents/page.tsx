// 📄 File: src/app/whatsapp-crm-for-travel-agents/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-travel-agents";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Travel Agents | Bookings, Follow-ups, Campaigns | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for travel agents to manage leads, booking follow-ups, itinerary sharing, and seasonal campaigns on WhatsApp. Team Inbox for agents, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for travel agents",
    "travel agent WhatsApp CRM",
    "WhatsApp CRM for tour operators",
    "WhatsApp lead follow up for travel",
    "WhatsApp booking follow up",
    "WhatsApp campaigns for travel agents",
    "WhatsApp chatbot for travel inquiries",
    "WhatsApp Business API for travel agencies",
    "multi-agent WhatsApp inbox for travel teams",
    "travel agency WhatsApp marketing",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Travel Agents | Bookings, Follow-ups, Campaigns | XploreByte",
    description:
      "Convert more travel leads on WhatsApp with booking follow-ups, itinerary sharing, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Travel Agents - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Travel Agents | Bookings, Follow-ups, Campaigns | XploreByte",
    description:
      "Convert more travel leads on WhatsApp with booking follow-ups, itinerary sharing, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for travel agents?",
    answer:
      "A WhatsApp CRM for travel agents helps you manage travel inquiries, bookings, itinerary sharing, follow-ups, and customer history directly on WhatsApp. It connects leads, conversations, and outcomes so your team can respond faster and close more bookings.",
  },
  {
    question: "Can I manage multiple agents on one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple travel agents can handle chats from one number with assignment, ownership, and visibility—so no lead is missed.",
  },
  {
    question:
      "Can I automate inquiry qualification and route to the right agent?",
    answer:
      "Yes. A no-code chatbot can handle initial inquiries, capture travel preferences (destination, budget, dates), and route qualified leads to the right agent for personalized itinerary planning.",
  },
  {
    question: "Can I run seasonal travel offer campaigns on WhatsApp?",
    answer:
      "Yes. You can send seasonal offers, holiday packages, last-minute deals, and re-engagement campaigns—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question:
      "Do I need WhatsApp Business API for automation and tracking?",
    answer:
      "For multi-agent inbox, automation, templates, campaigns, and tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
  {
    question: "Can I track response time and conversion outcomes?",
    answer:
      "Yes. Analytics helps you track response time, campaign engagement, replies, and outcomes (booking confirmed vs not interested). This improves follow-ups, agent accountability, and conversion campaigns.",
  },
] as const;

export default function WhatsAppCrmForTravelAgentsPage() {
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
                Inquiries → Itineraries → Confirmed Bookings (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Travel Agents
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage travel leads, booking follow-ups, itinerary sharing, and
                seasonal campaigns on WhatsApp with XploreByte — built for
                WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing leads in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps travel
                agents respond faster, share itineraries seamlessly, and convert
                more bookings.
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
                Why travel agents need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Travel wins on speed and trust. Customers message for packages,
                itineraries, pricing, and availability. If replies are
                delayed—or the conversation is lost—they book with a competitor.
                WhatsApp CRM gives you a structured way to manage conversations
                like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Travel inquiries get buried in personal chats or handled inconsistently by different agents.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No reminders for \"thinking about it\" leads—so they book with another agent or platform.",
                  },
                  {
                    title: "No ownership",
                    body: "Leads repeat the same questions to multiple agents, and no one knows who's responsible.",
                  },
                  {
                    title: "Lost booking momentum",
                    body: "No payment reminders or document checklist follow-ups—bookings drop off before confirmation.",
                  },
                  {
                    title: "Seasonal offer chaos",
                    body: "Holiday packages and last-minute deals are sent randomly with no tracking of results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, campaign engagement, or booking conversion rates.",
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
                How XploreByte WhatsApp CRM works for travel agents
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for agents",
                    body: "Multiple travel agents reply from one number with assignment, ownership, and shared visibility—perfect for specialization by destination or package type.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Lead context (CRM)",
                    body: "Keep lead history, travel preferences, budget, tags, and booking status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (destinations, pricing, best time to visit), capture preferences, and route to the right agent for itinerary planning.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send seasonal offers, holiday packages, last-minute deals, and re-engagement campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to confirmed bookings and repeat customers.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable messaging for travel teams.",
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
                High-converting travel agent WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows travel teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for customers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Itinerary & quote sharing flow",
                    items: [
                      "Lead asks for destination package or custom trip",
                      "Bot collects destination, dates, budget, and group size",
                      "Agent shares personalized itinerary and pricing",
                      "Follow-up for confirmation and payment collection",
                    ],
                  },
                  {
                    title: "Document checklist & payment reminder flow",
                    items: [
                      "Booking confirmed—send document checklist (passport, visa forms, IDs)",
                      "Auto reminders for pending documents or payments",
                      "Agent handles exceptions and confirms readiness",
                      "Pre-trip reminder with itinerary and support contact",
                    ],
                  },
                  {
                    title: "Seasonal offer & re-engagement flow",
                    items: [
                      "Segment leads by destination preference and past inquiries",
                      "Send seasonal offers (summer, Diwali, New Year packages)",
                      "Route replies to Team Inbox",
                      "Track booking conversions and campaign ROI",
                    ],
                  },
                  {
                    title: "Post-trip feedback & repeat customer flow",
                    items: [
                      "Auto message after trip completion",
                      "Collect feedback and ratings via quick replies",
                      "Send thank-you message with loyalty discount for next trip",
                      "Tag as repeat customer for future campaigns",
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

            {/* Compliance Note */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">
                📋 Compliance & Privacy Note
              </h3>
              <p className="mt-2 text-sm text-blue-800 leading-relaxed">
                XploreByte is designed for checklists, reminders, scheduling, and support workflows. 
                Do not store or send sensitive personal information (passport numbers, visa details, payment card data) 
                in message automation text. Use WhatsApp for coordination and follow-ups—not for sharing sensitive documents directly.
              </p>
            </div>

            {/* Benefits */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits for travel agents
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More bookings:
                  </span>{" "}
                  Faster response + structured follow-ups increase conversions and customer trust.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher repeat rates:
                  </span>{" "}
                  Post-trip engagement and seasonal campaigns bring customers back for their next trip.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better coordination:
                  </span>{" "}
                  Document checklists and payment reminders reduce booking drop-offs and last-minute chaos.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear lead ownership and agent visibility in one inbox—perfect for specialization by destination.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Less chaos:
                  </span>{" "}
                  Replace personal WhatsApp handling with a shared, trackable
                  workflow.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Use analytics to improve response time, campaign effectiveness, and booking conversion rates.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your travel business on WhatsApp — professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for travel agents and tour operators.
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
