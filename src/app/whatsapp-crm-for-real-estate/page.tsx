// 📄 File: src/app/whatsapp-crm-for-real-estate/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-real-estate";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Real Estate | Lead Follow-ups, Site Visits, Property Inquiries | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for real estate to manage leads, site visit follow-ups, and property inquiries on WhatsApp. Team Inbox for agents, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for real estate",
    "real estate WhatsApp CRM",
    "WhatsApp leads for real estate",
    "real estate follow up on WhatsApp",
    "WhatsApp campaigns for real estate",
    "WhatsApp Team Inbox for real estate",
    "WhatsApp chatbot for property agents",
    "WhatsApp Business API for real estate",
    "property inquiry management WhatsApp",
    "real estate agent WhatsApp automation",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Real Estate | Lead Follow-ups, Site Visits, Property Inquiries | XploreByte",
    description:
      "Convert more real estate leads on WhatsApp with site visit follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Real Estate - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Real Estate | Lead Follow-ups, Site Visits, Property Inquiries | XploreByte",
    description:
      "Convert more real estate leads on WhatsApp with site visit follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for real estate?",
    answer:
      "A WhatsApp CRM for real estate helps you manage property inquiries, lead follow-ups, site visit scheduling, and customer history directly on WhatsApp. It connects leads, conversations, and outcomes so your team can respond faster and close more deals.",
  },
  {
    question: "Can multiple agents reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple real estate agents can handle chats from one number with assignment, ownership, and visibility—so no lead is missed.",
  },
  {
    question: "Can I automate replies for property inquiries and pricing?",
    answer:
      "Yes. A no-code chatbot can handle FAQs, capture details (property type, budget, location), and route high-intent leads to the right agent for personalized follow-up.",
  },
  {
    question: "Can I run WhatsApp campaigns for property launches and offers?",
    answer:
      "Yes. You can send broadcasts for new launches, price drops, open house invites, and re-engagement campaigns—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question: "How does WhatsApp analytics help real estate teams?",
    answer:
      "Analytics helps you track response time, campaign engagement, replies, and outcomes (site visit scheduled vs not interested). This improves follow-ups, agent accountability, and conversion campaigns.",
  },
  {
    question: "Do real estate businesses need WhatsApp Business API?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForRealEstatePage() {
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
                Leads → Site Visits → Closed Deals (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Real Estate
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage real estate leads, property inquiries, site visit
                follow-ups, and conversions on WhatsApp with XploreByte — built
                for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing leads in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps real
                estate teams respond faster, schedule more site visits, and
                close more deals.
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
                Why real estate teams need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Real estate wins on speed and trust. Leads message for property
                details, site visits, pricing, and availability. If replies are
                delayed—or the conversation is lost—buyers move to another
                broker. WhatsApp CRM gives you a structured way to manage
                conversations like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Property inquiries get buried in personal chats or handled inconsistently by different agents.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No reminders for “call back later” leads—so they book with another broker.",
                  },
                  {
                    title: "No ownership",
                    body: "Leads repeat the same questions to multiple agents, and no one knows who’s responsible.",
                  },
                  {
                    title: "High no-shows",
                    body: "Site visits are scheduled but not followed up with reminders—leading to no-shows and wasted time.",
                  },
                  {
                    title: "Launch chaos",
                    body: "New property launches and price drops are sent randomly with no tracking of results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don’t know what’s working—response time, replies, or conversion outcomes.",
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
                How XploreByte WhatsApp CRM works for real estate
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for agents",
                    body: "Multiple agents reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Lead context (CRM)",
                    body: "Keep lead history, tags, property interests, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (pricing, location, amenities), capture intent, and route to the right agent.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send property launches, price drops, open house invites, and re-engagement campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to site visits and conversions.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable messaging.",
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
                High-converting real estate WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows real estate teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for buyers and investors.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Property inquiry & site visit flow",
                    items: [
                      "Lead asks for property details + pricing",
                      "Bot collects budget, location, and property type",
                      "Agent shares brochure and schedules site visit",
                      "Lead confirms (and gets reminder before visit)",
                    ],
                  },
                  {
                    title: "New launch broadcast flow",
                    items: [
                      "Segment leads by budget and location preference",
                      "Send new property launch with images and CTA",
                      "Route replies to Team Inbox",
                      "Track site visit bookings and conversions",
                    ],
                  },
                  {
                    title: "Re-engagement after 30–60 days",
                    items: [
                      "Segment inactive leads or warm prospects",
                      "Send price drop or new inventory alert",
                      "Route replies to assigned agent",
                      "Track re-engagement and conversion outcomes",
                    ],
                  },
                  {
                    title: "No-show prevention & reminders",
                    items: [
                      "Auto reminders before site visit",
                      "Easy reschedule quick replies",
                      "Agent handles exceptions or questions",
                      "Reduce no-shows and improve conversion rate",
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
                Benefits for real estate teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More conversions:
                  </span>{" "}
                  Faster response + structured follow-ups increase site visits
                  and closures.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher lead quality:
                  </span>{" "}
                  Capture budget, location, and intent upfront—so agents focus
                  on qualified leads.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear lead ownership and agent visibility in one inbox.
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
                  Use analytics to improve response time, campaign outcomes, and
                  agent performance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your real estate business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for real estate teams.
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
