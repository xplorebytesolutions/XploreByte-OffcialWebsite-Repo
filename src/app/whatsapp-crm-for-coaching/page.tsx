// 📄 File: src/app/whatsapp-crm-for-coaching/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-coaching";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Coaching | Admissions, Follow-ups, Fee Reminders | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for coaching institutes to manage leads, admissions follow-ups, and demo class bookings on WhatsApp. Team Inbox for trainers, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for coaching",
    "WhatsApp CRM for coaching institute",
    "coaching WhatsApp CRM",
    "WhatsApp lead follow up for coaching",
    "WhatsApp admissions follow up",
    "WhatsApp campaigns for coaching",
    "WhatsApp Team Inbox for coaching",
    "WhatsApp chatbot for coaching institute",
    "WhatsApp Business API for coaching institute",
    "coaching center WhatsApp automation",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Coaching | Admissions, Follow-ups, Fee Reminders | XploreByte",
    description:
      "Convert more coaching leads on WhatsApp with admissions follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Coaching - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Coaching | Admissions, Follow-ups, Fee Reminders | XploreByte",
    description:
      "Convert more coaching leads on WhatsApp with admissions follow-ups, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for coaching institutes?",
    answer:
      "A WhatsApp CRM for coaching institutes helps you manage student inquiries, admissions follow-ups, demo class bookings, and student history directly on WhatsApp. It connects leads, conversations, and outcomes so your team can respond faster and enroll more students.",
  },
  {
    question: "Can multiple counselors reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple counselors and trainers can handle chats from one number with assignment, ownership, and visibility—so no inquiry is missed.",
  },
  {
    question: "Can I automate replies for course details and pricing?",
    answer:
      "Yes. A no-code chatbot can handle FAQs, capture details (course interest, location, budget), and route high-intent leads to the right counselor for personalized follow-up.",
  },
  {
    question: "Can I run WhatsApp campaigns for batch launches and offers?",
    answer:
      "Yes. You can send broadcasts for new batch announcements, early bird offers, fee reminders, and re-engagement campaigns—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question: "How does WhatsApp analytics help coaching institutes?",
    answer:
      "Analytics helps you track response time, campaign engagement, replies, and outcomes (demo booked vs enrolled). This improves follow-ups, counselor accountability, and enrollment campaigns.",
  },
  {
    question: "Do coaching institutes need WhatsApp Business API?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForCoachingPage() {
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
                Leads → Counselling → Admissions (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Coaching Institutes
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage coaching leads, admissions follow-ups, demo class
                bookings, and enrollments on WhatsApp with XploreByte — built
                for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing inquiries in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps coaching
                institutes respond faster, book more demo classes, and convert
                more students.
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
                Why coaching institutes need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Coaching institutes win on speed and trust. Students and
                parents message for course details, batch timings, fees, and
                demo classes. If replies are delayed—or the conversation is
                lost—they enroll elsewhere. WhatsApp CRM gives you a structured
                way to manage conversations like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Inquiries get buried in personal chats or handled inconsistently by different counselors.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No reminders for 'will join next batch' leads—so they join a competitor.",
                  },
                  {
                    title: "No ownership",
                    body: "Students repeat the same questions to multiple counselors, and no one knows who's responsible.",
                  },
                  {
                    title: "Low enrollments",
                    body: "No systematic follow-up after demo classes or counselling calls—so conversions are lost.",
                  },
                  {
                    title: "Offer chaos",
                    body: "Early bird discounts and batch announcements are sent randomly with no tracking of results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, replies, or enrollment outcomes.",
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
                How XploreByte WhatsApp CRM works for coaching institutes
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for counselors",
                    body: "Multiple counselors and trainers reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Student context (CRM)",
                    body: "Keep student history, tags, course interest, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (course details, fees, batch timings), capture intent, and route to the right counselor.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send batch announcements, early bird offers, fee reminders, and re-engagement campaigns with templates and CTAs.",
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
                High-converting coaching WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows coaching institutes run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for students and parents.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Course inquiry & demo booking flow",
                    items: [
                      "Student asks for course details + fees",
                      "Bot collects course interest, location, and preferred timing",
                      "Counselor shares details and schedules demo class",
                      "Student confirms (and gets reminder before demo)",
                    ],
                  },
                  {
                    title: "Admissions follow-up after demo",
                    items: [
                      "Demo class completed",
                      "Counselor sends feedback form and enrollment link",
                      "Auto follow-up if no response in 24 hours",
                      "Track enrolled vs dropped outcomes",
                    ],
                  },
                  {
                    title: "New batch launch campaign",
                    items: [
                      "Segment leads by course interest",
                      "Send new batch announcement with early bird offer",
                      "Route replies to Team Inbox",
                      "Track enrollments and campaign ROI",
                    ],
                  },
                  {
                    title: "Fee reminders & re-engagement",
                    items: [
                      "Segment students with pending fees or dropped leads",
                      "Send fee reminder or re-engagement offer",
                      "Route replies to assigned counselor",
                      "Reduce drop-offs and improve collections",
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
                Benefits for coaching institutes
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More enrollments:
                  </span>{" "}
                  Faster response + structured follow-ups increase demo
                  bookings and admissions.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher conversions:
                  </span>{" "}
                  Systematic post-demo follow-ups and re-engagement campaigns
                  reduce drop-offs.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear lead ownership and counselor visibility in one inbox.
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
                  counselor performance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your coaching institute on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for coaching institutes.
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
