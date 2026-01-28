import type { Metadata } from "next";
import Link from "next/link";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/campaign-analytics";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "WhatsApp Campaign Analytics & Reports | XploreByte" },
  description:
    "Track WhatsApp campaign performance with XploreByte’s Campaign Analytics and Reports. See delivery, engagement, and ROI using WhatsApp Business API — built for small businesses. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "WhatsApp Campaign Analytics & Reports | XploreByte",
    description:
      "Track WhatsApp campaign performance with XploreByte’s Campaign Analytics and Reports. See delivery, engagement, and ROI using WhatsApp Business API — built for small businesses. Start a free trial.",
    url: PAGE_URL,
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Campaign Analytics & Reports - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Campaign Analytics & Reports | XploreByte",
    description:
      "Track WhatsApp campaign performance with XploreByte’s Campaign Analytics and Reports. See delivery, engagement, and ROI using WhatsApp Business API — built for small businesses. Start a free trial.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What are WhatsApp campaign analytics?",
    answer:
      "WhatsApp campaign analytics are metrics and reports that show how your WhatsApp campaigns perform, including delivery, engagement, replies, and outcomes—so you can improve ROI over time.",
  },
  {
    question: "What does XploreByte track for WhatsApp Campaign Reports?",
    answer:
      "XploreByte tracks key delivery and engagement signals such as sent, delivered, read, clicked, replied, and failed, helping small businesses understand performance clearly.",
  },
  {
    question: "Why do WhatsApp marketing campaigns fail without analytics?",
    answer:
      "Without analytics, you can’t tell which audience segments, messages, or CTAs work. That leads to wasted sends, inconsistent follow-ups, and unclear ROI.",
  },
  {
    question: "Do I need WhatsApp Business API for campaign reporting?",
    answer:
      "For structured, scalable WhatsApp marketing performance tracking, WhatsApp Business API is typically required. XploreByte is built on WhatsApp Business API for reliable campaigns and reporting.",
  },
  {
    question: "How can small businesses use analytics to improve conversions?",
    answer:
      "Use reports to spot which segments engage, which messages drive replies or clicks, and where follow-ups drop. Then refine targeting, timing, and automation to convert more leads.",
  },
  {
    question: "Can analytics connect to chatbots, Team Inbox, and CRM workflows?",
    answer:
      "Yes. When analytics connect to campaigns, chatbots, and a Team Inbox inside your WhatsApp CRM, you can measure performance end-to-end—from message delivery to follow-up outcomes.",
  },
] as const;

export default function CampaignAnalyticsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/30 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp Campaign Analytics & Reports
              </h1>
              <p className="mt-5 text-xl text-white/85">
                Track delivery, clicks, replies, and conversions for every WhatsApp campaign —
                powered by XploreByte.
              </p>
              <p className="mt-6 text-lg text-white/80">
                XploreByte gives small businesses Campaign Analytics and WhatsApp Campaign Reports
                to measure WhatsApp marketing performance on WhatsApp Business API, improve ROI, and
                build smarter follow-ups inside your WhatsApp CRM.
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
                Why WhatsApp marketing without analytics fails
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                When you can’t see what happened after a send, it’s easy to keep repeating the same
                campaign with no improvements. Small businesses end up guessing—sending to the same
                audience, using the same message, and hoping for results. Analytics turns WhatsApp
                outreach into a measurable system where you can improve targeting, content, timing,
                and follow-ups.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">What are WhatsApp campaign analytics?</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                WhatsApp campaign analytics summarize how your campaign performs across delivery and
                engagement. With clear reports, you can compare segments, test messaging, and
                measure the impact of automation and follow-ups in your WhatsApp CRM.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">What XploreByte tracks</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: "Messages sent", body: "Total messages attempted for the campaign." },
                  { title: "Delivered", body: "Messages successfully delivered to recipients." },
                  { title: "Read", body: "Messages opened/read by recipients." },
                  { title: "Clicked", body: "Clicks on button-based CTAs or tracked links." },
                  { title: "Replied", body: "Replies generated by the campaign message." },
                  { title: "Failed", body: "Messages that failed to deliver and why (when available)." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These signals are most reliable when campaigns run on WhatsApp Business API, which
                is why XploreByte is designed for WhatsApp Business API workflows for small
                businesses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How reports help small businesses improve ROI
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Reports help you find what’s working and cut what’s not. You can identify segments
                that respond, messages that drive clicks, and follow-ups that convert. Over time,
                this reduces wasted outreach and increases conversions with smarter targeting and
                better timing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How analytics connects with Campaigns, Chatbots, and CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Analytics is most valuable when it connects to the full workflow. XploreByte links
                Campaign Analytics with{" "}
                <Link href="/whatsapp-campaigns" className="text-[#0d8a3a] hover:underline">
                  WhatsApp Campaigns
                </Link>
                , routes replies into a{" "}
                <Link href="/whatsapp-team-inbox" className="text-[#0d8a3a] hover:underline">
                  Team Inbox
                </Link>
                , and supports automation via the{" "}
                <Link href="/whatsapp-chatbot-builder" className="text-[#0d8a3a] hover:underline">
                  No-Code Chatbot Builder
                </Link>
                . With CRM context, your team can follow up with ownership and track outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Benefits for small businesses</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">Better targeting:</span> Focus on
                  segments that engage and convert.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Improved conversions:</span> Learn
                  which messages and CTAs drive replies and clicks.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Reduced waste:</span> Stop sending
                  the same campaign blindly.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Clear ROI:</span> See what
                  performance looks like over time.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Smarter follow-ups:</span> Use
                  replies and click signals to prioritize your team’s next actions.
                </li>
              </ul>
            </div>

            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to measure WhatsApp campaign performance?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see Campaign Analytics and Reports in
                    action for WhatsApp Business API campaigns.
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

        <section className="py-14 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-gray-200 p-5">
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
    </>
  );
}
