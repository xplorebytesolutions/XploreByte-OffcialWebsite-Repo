// 📄 File: src/app/whatsapp-crm-for-gyms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-gyms";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Gyms | Memberships, Renewals, Class Bookings | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for gyms to manage leads, memberships, renewals, and class bookings on WhatsApp. Team Inbox for trainers, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for gyms",
    "gym WhatsApp CRM",
    "WhatsApp CRM for fitness studios",
    "WhatsApp lead follow up for gym memberships",
    "WhatsApp reminders for gym renewals",
    "WhatsApp campaigns for gyms",
    "multi-agent WhatsApp inbox for gym staff",
    "WhatsApp Business API for gyms",
    "gym membership retention WhatsApp",
    "fitness studio WhatsApp marketing",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Gyms | Memberships, Renewals, Class Bookings | XploreByte",
    description:
      "Convert more gym leads on WhatsApp with membership follow-ups, renewal reminders, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Gyms - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Gyms | Memberships, Renewals, Class Bookings | XploreByte",
    description:
      "Convert more gym leads on WhatsApp with membership follow-ups, renewal reminders, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for gyms?",
    answer:
      "A WhatsApp CRM for gyms helps you manage gym inquiries, memberships, renewals, class bookings, and member history directly on WhatsApp. It connects leads, conversations, and outcomes so your team can respond faster and retain more members.",
  },
  {
    question: "Can I increase membership renewals with WhatsApp reminders?",
    answer:
      "Yes. With WhatsApp Business API, you can send automated renewal reminders before expiry, special renewal offers, and reactivation campaigns for dropped members—all trackable and structured.",
  },
  {
    question: "Can multiple staff reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple gym staff—front desk, trainers, managers—can handle chats from one number with assignment, ownership, and visibility—so no inquiry is missed.",
  },
  {
    question: "Can I automate trial pass follow-ups?",
    answer:
      "Yes. A no-code chatbot can handle trial pass inquiries, capture details (preferred batch, fitness goals), send trial confirmation, and route high-intent leads to staff for membership conversion.",
  },
  {
    question:
      "Can chatbots answer pricing/timings and hand off to staff?",
    answer:
      "Yes. Chatbots can handle FAQs like gym timings, membership plans, class schedules, and pricing—then hand off to a trainer or sales rep for personalized follow-up and closure.",
  },
  {
    question: "Do I need WhatsApp Business API for a gym CRM?",
    answer:
      "For multi-agent inbox, automation, templates, renewal reminders, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForGymsPage() {
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
                Leads → Memberships → Renewals (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Gyms
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage gym leads, memberships, renewals, and class bookings on
                WhatsApp with XploreByte — built for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing inquiries in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps gyms
                respond faster, convert more memberships, and boost renewals.
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
                Why gyms need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Gyms win on speed and experience. Leads message for pricing,
                trial passes, batch timings, and membership plans. If replies
                are delayed—or the chat is lost—they join a competitor. WhatsApp
                CRM gives you a structured way to manage conversations like a
                real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Trial pass inquiries get buried in personal chats or handled inconsistently by different staff.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: 'No reminders for "thinking about it" leads—so they join another gym.',
                  },
                  {
                    title: "No ownership",
                    body: "Leads repeat the same questions to multiple staff, and no one knows who's responsible.",
                  },
                  {
                    title: "Low renewals",
                    body: "No renewal reminders before expiry—memberships lapse and members disappear.",
                  },
                  {
                    title: "Dropped members",
                    body: "Members drop out after 30–60 days with no reactivation campaigns or follow-up.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, trial conversions, or renewal rates.",
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
                How XploreByte WhatsApp CRM works for gyms
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for staff",
                    body: "Multiple staff—front desk, trainers, managers—reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Member context (CRM)",
                    body: "Keep member history, tags, membership status, and renewal dates so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (pricing, timings, batches), capture trial pass requests, and route to the right person.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send renewal reminders, reactivation offers, class schedule updates, and promotional campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to memberships and renewals.",
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
                High-converting gym WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows gyms run daily. With XploreByte,
                the experience becomes structured, trackable, and faster for
                members and leads.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Trial pass & membership conversion flow",
                    items: [
                      "Lead asks for trial pass or demo session",
                      "Bot collects preferred batch and fitness goals",
                      "Staff confirms trial slot and shares details",
                      "Follow-up after trial for membership conversion",
                    ],
                  },
                  {
                    title: "Membership renewal reminder flow",
                    items: [
                      "Auto reminder sent 7 days before expiry",
                      "Member receives renewal link or quick reply options",
                      "Staff handles exceptions or special offers",
                      "Track renewal completion and reduce drop-offs",
                    ],
                  },
                  {
                    title: "Dropped member reactivation flow",
                    items: [
                      "Segment members inactive for 30–60 days",
                      "Send reactivation offer (discount or free PT session)",
                      "Route replies to Team Inbox",
                      "Track re-enrollment outcomes",
                    ],
                  },
                  {
                    title: "Class schedule & batch reminders",
                    items: [
                      "Auto reminders for class schedule changes",
                      "Batch-specific updates (Yoga, Zumba, CrossFit)",
                      "Easy reschedule or cancellation quick replies",
                      "Reduce no-shows and improve attendance",
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
                Benefits for gym owners
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More memberships:
                  </span>{" "}
                  Faster response + structured trial pass follow-ups increase conversions.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher renewals:
                  </span>{" "}
                  Automated renewal reminders reduce drop-offs and increase retention rates.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Member reactivation:
                  </span>{" "}
                  Bring back dropped members with targeted reactivation campaigns and offers.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear chat ownership and staff visibility in one inbox.
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
                  Use analytics to improve response time, conversion rates, and renewal outcomes.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your gym on WhatsApp — professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for gyms and fitness studios.
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
