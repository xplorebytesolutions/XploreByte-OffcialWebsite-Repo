// 📄 File: src/app/whatsapp-crm-for-education/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-education";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Education | Admissions, Follow-ups, Fee Reminders | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for education to manage admissions leads, counsellor follow-ups, demo class bookings, and fee reminders on WhatsApp. Team Inbox for counsellors, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for education",
    "WhatsApp CRM for schools",
    "WhatsApp CRM for coaching institutes",
    "WhatsApp admissions follow up",
    "WhatsApp fee reminders",
    "WhatsApp Business API for education",
    "multi-agent WhatsApp inbox for education teams",
    "WhatsApp chatbot for admissions",
    "education lead management WhatsApp",
    "coaching center WhatsApp CRM",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Education | Admissions, Follow-ups, Fee Reminders | XploreByte",
    description:
      "Convert more education leads on WhatsApp with admissions follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Education - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Education | Admissions, Follow-ups, Fee Reminders | XploreByte",
    description:
      "Convert more education leads on WhatsApp with admissions follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I manage admissions follow-ups on WhatsApp?",
    answer:
      "Yes. XploreByte WhatsApp CRM helps education teams manage inquiry-to-admission workflows on WhatsApp—with counsellor assignment, follow-up tracking, demo class scheduling, and enrollment outcomes in one shared inbox.",
  },
  {
    question: "Can I automate demo class booking and reminders?",
    answer:
      "Yes. A no-code chatbot can handle FAQs (courses, fees, batches), capture details (name, course interest, preferred date), schedule demo classes, and send automated reminders before the session.",
  },
  {
    question: "Can multiple counsellors reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple counsellors can handle chats from one number with assignment, ownership, and visibility—so no inquiry is missed.",
  },
  {
    question: "Do I need WhatsApp Business API for automation and campaigns?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
  {
    question: "Can I track response time and conversion outcomes?",
    answer:
      "Yes. Analytics helps you track response time, campaign engagement, replies, and outcomes (demo booked, enrolled, not interested). This improves follow-ups, counsellor accountability, and re-engagement campaigns.",
  },
] as const;

export default function WhatsAppCrmForEducationPage() {
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
                Leads → Demo Classes → Enrollments (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Education
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage admissions leads, counsellor follow-ups, demo class
                bookings, and fee reminders on WhatsApp with XploreByte — built
                for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing inquiries in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps
                education teams respond faster, book more demo classes, and
                convert more enrollments.
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
                Why education businesses need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Education wins on speed and trust. Parents and students message
                for course details, fees, batch timings, and demo classes. If
                replies are delayed—or the chat is lost—they join a competitor.
                WhatsApp CRM gives you a structured way to manage conversations
                like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed inquiries",
                    body: "Admissions leads get buried in personal chats or handled inconsistently by different counsellors.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No reminders for \\\"interested\\\" leads—so they enroll with a competitor or drop off silently.",
                  },
                  {
                    title: "No ownership",
                    body: "Parents repeat the same questions to multiple staff, and no one knows who's responsible.",
                  },
                  {
                    title: "Low demo-to-enrollment rate",
                    body: "Demo classes are booked but not followed up with reminders or post-demo engagement.",
                  },
                  {
                    title: "Fee collection chaos",
                    body: "Fee reminders are sent manually with no tracking of who paid or who needs a nudge.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, replies, or enrolled outcomes.",
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
                How XploreByte WhatsApp CRM works for education
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for counsellors",
                    body: "Multiple counsellors reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Student context (CRM)",
                    body: "Keep inquiry history, tags, course interest, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (courses, fees, batches), capture intent, and route to the right counsellor.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send batch start reminders, fee reminders, course launches, and re-engagement campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to demo bookings and enrollments.",
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
                High-converting education WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows education teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for parents and students.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Admissions inquiry & demo booking flow",
                    items: [
                      "Student/parent asks for course details + fees",
                      "Bot collects preferred course, batch, and date",
                      "Counsellor schedules demo class and shares joining link",
                      "Student confirms (and gets reminder before demo)",
                    ],
                  },
                  {
                    title: "Post-demo enrollment follow-up",
                    items: [
                      "Demo class completed (auto-tagged in CRM)",
                      "Counsellor sends feedback form or enrolment offer",
                      "Follow-up reminders sent after 24–48 hours",
                      "Track enrolled vs not interested outcomes",
                    ],
                  },
                  {
                    title: "Fee payment reminder campaign",
                    items: [
                      "Segment students with pending fees",
                      "Send fee reminder with payment link and deadline",
                      "Route replies to front desk or counsellor",
                      "Track payment confirmations and pending follow-ups",
                    ],
                  },
                  {
                    title: "Re-engagement of dropped inquiries",
                    items: [
                      "Segment inactive or 'interested' leads",
                      "Send new batch launch or special offer campaign",
                      "Route replies to assigned counsellor",
                      "Track re-engagement and enrollment outcomes",
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
                Benefits for education teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More enrollments:
                  </span>{" "}
                  Faster response + structured follow-ups increase demo bookings
                  and conversions.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher demo attendance:
                  </span>{" "}
                  Automated reminders and easy reschedule options reduce
                  no-shows.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear inquiry ownership and counsellor visibility in one inbox.
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
                  counsellor performance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your education business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for education teams.
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
