// 📄 File: src/app/whatsapp-campaigns/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-campaigns";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // ✅ shorter title to avoid truncation
  title: {
    absolute: "WhatsApp Campaigns | Broadcast & Retargeting | XploreByte",
  },
  description:
    "Run WhatsApp campaigns and broadcasts with XploreByte on WhatsApp Business API. Send targeted messages, add CTA buttons, track performance, and follow up inside WhatsApp CRM. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp campaigns",
    "WhatsApp broadcast software",
    "WhatsApp marketing",
    "WhatsApp retargeting",
    "WhatsApp Business API campaigns",
    "WhatsApp template messages",
    "WhatsApp CTA buttons",
    "WhatsApp campaign tracking",
    "WhatsApp CRM follow-up",
    "WhatsApp campaigns for small business",
  ],
  openGraph: {
    title: "WhatsApp Campaigns | Broadcast & Retargeting | XploreByte",
    description:
      "Send broadcasts, retarget leads, and track outcomes on WhatsApp Business API—connected to CRM and team inbox follow-ups.",
    // ✅ absolute OG url
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Campaigns and Broadcast Software - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Campaigns | Broadcast & Retargeting | XploreByte",
    description:
      "Send broadcasts, retarget leads, and track outcomes on WhatsApp Business API—connected to CRM and team inbox follow-ups.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What are WhatsApp campaigns?",
    answer:
      "WhatsApp campaigns are structured outbound messages sent to a list of opted-in contacts—such as promotions, announcements, and follow-ups—often using templates and tracking for performance.",
  },
  {
    question: "Is WhatsApp broadcast the same as WhatsApp campaigns?",
    answer:
      "Broadcasts are a common campaign format where one message is sent to many recipients. Campaigns typically include segmentation, scheduling, templates, and reporting.",
  },
  {
    question:
      "Do I need WhatsApp Business API to run WhatsApp campaigns at scale?",
    answer:
      "For compliant, scalable messaging with templates and tracking, WhatsApp Business API is typically required. XploreByte runs campaigns on WhatsApp Business API to support teams and reporting.",
  },
  {
    question: "How do I segment contacts for targeted messaging?",
    answer:
      "Use contact lists and segments based on tags, customer history, lead stage, or engagement so your messages stay relevant and reduce unsubscribes.",
  },
  {
    question: "Can I schedule WhatsApp broadcasts and add CTA buttons?",
    answer:
      "Yes. You can schedule broadcasts and include button-based CTAs to drive actions like booking, purchasing, or contacting your team.",
  },
  {
    question: "How do I stay compliant with WhatsApp policies?",
    answer:
      "Use opt-in, respect user preferences, and follow template and policy guidelines. XploreByte is designed to help small businesses send in a structured, compliant way on WhatsApp Business API.",
  },
] as const;

export default function WhatsAppCampaignsPage() {
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
                Broadcast • Retargeting • CTA Buttons • Tracking
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp Campaigns & Broadcast for Small Businesses
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Send promotions, announcements, and follow-ups on WhatsApp using
                XploreByte’s campaign engine — built on WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Run WhatsApp campaigns and broadcast workflows: targeted lists,
                templates, scheduled sends, button CTAs, and delivery
                tracking—connected to your WhatsApp CRM for consistent
                follow-ups.
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
                Why WhatsApp is the highest-converting marketing channel
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                WhatsApp conversations feel personal and immediate. For small
                businesses, it’s one of the fastest ways to move leads from
                interest to action—especially when outreach, follow-ups, and
                reminders are sent at the right time with clear CTAs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                What are WhatsApp campaigns?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                WhatsApp campaigns are planned outbound messages to opted-in
                contacts—promotions, announcements, product updates,
                reactivation offers, or follow-ups. With templates,
                segmentation, and tracking, campaigns become predictable and
                measurable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How XploreByte WhatsApp Campaigns work
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Contact lists & segments",
                    body: "Target customers by tags, stage, or engagement for better relevance.",
                  },
                  {
                    title: "Templates",
                    body: "Use structured templates where applicable for consistent messaging.",
                  },
                  {
                    title: "Scheduled broadcasts",
                    body: "Plan sends ahead of time for launches, reminders, and reactivation.",
                  },
                  {
                    title: "Button-based CTAs",
                    body: "Add click-to-action buttons to drive bookings, purchases, or inquiries.",
                  },
                  {
                    title: "Delivery tracking",
                    body: "Monitor delivery and engagement signals to optimize future sends.",
                  },
                  {
                    title: "Retargeting-ready",
                    body: "Re-engage audiences based on outcomes like delivered, read, or clicked—so you keep improving ROI.",
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

            {/* ✅ NEW: WHO USES THIS? */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Who uses WhatsApp campaigns?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
                Businesses that already get leads on WhatsApp—and want a
                repeatable way to convert, retain, and re-engage customers with
                targeted outreach.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Salons & clinics",
                    body: "Appointment reminders, reactivation offers, seasonal packages, and follow-ups.",
                  },
                  {
                    title: "D2C & retail",
                    body: "New arrivals, back-in-stock alerts, COD confirmations, and order updates.",
                  },
                  {
                    title: "Gyms & coaching",
                    body: "Trial follow-ups, renewal nudges, class updates, and win-back campaigns.",
                  },
                  {
                    title: "Education & institutes",
                    body: "Admissions updates, counseling reminders, webinar invites, and nurture sequences.",
                  },
                  {
                    title: "Real estate & agents",
                    body: "New listings, site visit scheduling, and lead follow-ups with clear CTAs.",
                  },
                  {
                    title: "Local services",
                    body: "Quotes, repeat-service reminders, and targeted offers by service type.",
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

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How it connects with WhatsApp CRM, chatbots, and Team Inbox
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Campaigns work best when they connect to the rest of your
                workflow. XploreByte ties campaigns into a{" "}
                <Link
                  href="/whatsapp-team-inbox"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp Team Inbox
                </Link>{" "}
                so replies are handled with clear ownership. Use{" "}
                <Link
                  href="/whatsapp-chatbot-builder"
                  className="text-[#0d8a3a] hover:underline"
                >
                  chatbots
                </Link>{" "}
                to qualify and route responses automatically, and keep customer
                context in your{" "}
                <Link
                  href="/whatsapp-crm"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp CRM
                </Link>{" "}
                for follow-ups and retention.
              </p>
            </div>

            {/* ✅ NEW: Cluster authority links (explicit) */}
            <section className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Build the full WhatsApp growth system
              </h2>
              <p className="mt-2 text-gray-700">
                Campaigns convert best when your setup includes CRM context,
                automation, and a shared inbox for replies. Explore related
                modules:
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link
                  href="/whatsapp-crm"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">WhatsApp CRM</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Store context, tags, and follow-up workflows.
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
                    Handle replies with clear agent ownership.
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
                    Qualify and route responses automatically.
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

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Compliance & WhatsApp Business API (opt-in, templates, policies)
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Safe, compliant sending starts with opt-in and respecting
                customer preferences. For WhatsApp Business API, templates and
                policies matter. XploreByte is designed to help small businesses
                run WhatsApp broadcasts and campaigns in a structured way while
                keeping compliance best practices in view.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits for small businesses
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher open rates:
                  </span>{" "}
                  Reach customers where they already engage daily.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better engagement:
                  </span>{" "}
                  Drive replies and actions with conversational messaging and
                  CTAs.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Targeted messaging:
                  </span>{" "}
                  Segment audiences to keep outreach relevant.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Trackable results:
                  </span>{" "}
                  Measure performance and improve with analytics.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Safe, compliant sending:
                  </span>{" "}
                  Use opt-in and structured sending practices on WhatsApp
                  Business API.
                </li>
              </ul>
            </div>

            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run WhatsApp campaigns?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how broadcasts,
                    templates, tracking, and CRM follow-ups work together for
                    small businesses.
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
