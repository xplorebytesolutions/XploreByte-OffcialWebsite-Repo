// 📄 File: src/app/whatsapp-crm-for-event-planners/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-event-planners";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Event Planners | Quotations, Follow-ups, Booking Management | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for event planners to manage inquiries, quotation follow-ups, and booking confirmations on WhatsApp. Team Inbox for event teams, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for event planners",
    "WhatsApp CRM for wedding planners",
    "WhatsApp lead follow up for events",
    "WhatsApp quotation follow up",
    "WhatsApp campaigns for event businesses",
    "multi-agent WhatsApp inbox for event teams",
    "WhatsApp Business API for event planners",
    "WhatsApp chatbot for event inquiries",
    "event management WhatsApp CRM",
    "wedding planner WhatsApp automation",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Event Planners | Quotations, Follow-ups, Booking Management | XploreByte",
    description:
      "Convert more event leads on WhatsApp with quotation follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Event Planners - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Event Planners | Quotations, Follow-ups, Booking Management | XploreByte",
    description:
      "Convert more event leads on WhatsApp with quotation follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I manage event inquiries and quotations on WhatsApp?",
    answer:
      "Yes. XploreByte WhatsApp CRM helps you capture event inquiries, send quotations, track follow-ups, manage booking confirmations, and coordinate event-day updates—all on WhatsApp with a shared team inbox.",
  },
  {
    question: "Can multiple team members reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple team members (sales, planners, coordinators) can handle client chats from one number with assignment, ownership, and visibility—so no inquiry is missed.",
  },
  {
    question: "Can I automate follow-ups and booking reminders?",
    answer:
      "Yes. A no-code chatbot can handle FAQs, capture event details (date, venue, budget, guest count), send quotation follow-ups, booking confirmations, and payment milestone reminders automatically.",
  },
  {
    question: "Can I run campaigns for wedding season or festive offers?",
    answer:
      "Yes. You can send broadcast campaigns for seasonal offers, new packages, festive discounts, and referral promotions—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question: "Do I need WhatsApp Business API for team inbox and automation?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForEventPlannersPage() {
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
      <Header />

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
                Leads → Quotations → Confirmed Bookings (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Event Planners
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage event inquiries, quotation follow-ups, booking
                confirmations, and event-day coordination on WhatsApp with
                XploreByte — built for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing event leads in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps event
                teams respond faster, close more bookings, and delight more
                clients.
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
                Why event planners need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Event planning wins on speed and trust. Clients message for
                venue options, packages, pricing, and availability. If replies
                are delayed—or the conversation is lost—they book with a
                competitor. WhatsApp CRM gives you a structured way to manage
                conversations like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed inquiries",
                    body: "Event leads get buried in personal chats or handled inconsistently by different team members.",
                  },
                  {
                    title: "Slow quotation follow-ups",
                    body: 'No reminders for "thinking about it" clients—so they book with faster-moving competitors.',
                  },
                  {
                    title: "No ownership",
                    body: "Clients repeat the same questions to multiple people, and no one knows who's responsible.",
                  },
                  {
                    title: "Payment tracking chaos",
                    body: "Advance and milestone payments are tracked manually with no structured reminders or confirmations.",
                  },
                  {
                    title: "Referral opportunity loss",
                    body: "No post-event follow-up or referral campaigns to generate repeat business or testimonials.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, replies, or booking conversion outcomes.",
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
                How XploreByte WhatsApp CRM works for event planners
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for event teams",
                    body: "Multiple team members reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Client context (CRM)",
                    body: "Keep inquiry history, tags, event details, quotations, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (packages, pricing, availability), capture event details, and route to the right planner.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send seasonal offers, package launches, payment reminders, and referral campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to booking confirmations.",
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
                High-converting event planning WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows event planners run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for clients.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Inquiry to quotation flow",
                    items: [
                      "Client inquires about event package or service",
                      "Bot collects date, venue preference, budget, guest count",
                      "Planner shares customized quotation and proposal",
                      "Follow-up reminders sent after 24–48 hours",
                    ],
                  },
                  {
                    title: "Booking confirmation & payment flow",
                    items: [
                      "Client confirms booking with advance payment",
                      "Send booking confirmation with contract link",
                      "Milestone payment reminders sent automatically",
                      "Track payment confirmations and pending dues",
                    ],
                  },
                  {
                    title: "Event-day coordination & updates",
                    items: [
                      "Send event timeline and vendor details to client",
                      "Real-time updates during event setup and execution",
                      "Handle last-minute changes or special requests",
                      "Post-event feedback collection and follow-up",
                    ],
                  },
                  {
                    title: "Seasonal offer & referral campaigns",
                    items: [
                      "Segment past clients and warm leads",
                      "Send wedding season, festive, or early-bird offers",
                      "Route replies to Team Inbox with auto-assignment",
                      "Track referrals, bookings, and campaign ROI",
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
                Benefits for event planning teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More bookings:
                  </span>{" "}
                  Faster response + structured follow-ups increase quotation
                  acceptance and confirmations.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher client satisfaction:
                  </span>{" "}
                  Timely updates, payment reminders, and event-day coordination
                  improve client experience.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear inquiry ownership and planner visibility in one inbox.
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
                  team performance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your event planning business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for event planning teams.
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

      <Footer />
    </>
  );
}
