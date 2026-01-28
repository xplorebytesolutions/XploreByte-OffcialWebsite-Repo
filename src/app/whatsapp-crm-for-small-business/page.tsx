import type { Metadata } from "next";
import Link from "next/link";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-small-business";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "WhatsApp CRM for Small Businesses | XploreByte" },
  description:
    "XploreByte is a WhatsApp CRM for small businesses built on WhatsApp Business API, with Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics. Start your free trial today.",
  keywords: [
    "WhatsApp CRM for Small Business",
    "WhatsApp CRM for Small Businesses",
    "WhatsApp Business API",
    "Team Inbox",
    "No-Code Chatbot Builder",
    "WhatsApp Campaigns",
    "Advanced Campaign Analytics",
    "free trial",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "WhatsApp CRM for Small Businesses | XploreByte",
    description:
      "XploreByte is a WhatsApp CRM for small businesses built on WhatsApp Business API, with Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics. Start your free trial today.",
    url: PAGE_URL,
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Small Businesses - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp CRM for Small Businesses | XploreByte",
    description:
      "XploreByte is a WhatsApp CRM for small businesses built on WhatsApp Business API, with Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics. Start your free trial today.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Is a WhatsApp CRM worth it for a small business?",
    answer:
      "Yes—if WhatsApp drives your leads or sales. A WhatsApp CRM prevents missed messages, keeps customer context, and helps you follow up consistently with a small team.",
  },
  {
    question: "How does XploreByte help beyond basic WhatsApp tools?",
    answer:
      "XploreByte adds a shared Team Inbox, customer history and tags, automated chatbots, campaigns, and analytics—so you can manage more conversations without losing track.",
  },
  {
    question: "Do I need WhatsApp Business API to use XploreByte?",
    answer:
      "For multi-agent access, automation, and compliant messaging at scale, WhatsApp Business API is typically required. XploreByte is built on WhatsApp Business API for reliable team workflows.",
  },
  {
    question: "Can I run campaigns and track results?",
    answer:
      "Yes. You can run WhatsApp campaigns and see Advanced Campaign Analytics to understand performance, responses, and follow-up outcomes.",
  },
  {
    question: "Which industries use WhatsApp CRM the most?",
    answer:
      "Common examples include salons, clinics, gyms, coaching centers, and retail shops—any business that needs fast responses and repeat follow-ups.",
  },
] as const;

export default function WhatsAppCrmForSmallBusinessPage() {
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
                WhatsApp CRM for Small Businesses
              </h1>
              <p className="mt-5 text-xl text-white/85">
                Everything small businesses need to manage WhatsApp leads, follow-ups, campaigns,
                and customer conversations — in one place.
              </p>
              <p className="mt-6 text-lg text-white/80">
                If your business depends on WhatsApp, you've likely felt the pain: missed messages,
                no tracking, and no team access. A{" "}
                <span className="font-semibold text-white">WhatsApp CRM for Small Business</span>{" "}
                turns conversations into an organized pipeline with clear ownership and measurable
                outcomes.
              </p>
              <p className="mt-4 text-lg text-white/80">
                XploreByte is built on WhatsApp Business API with Team Inbox, No-Code Chatbot
                Builder, WhatsApp campaigns, and Advanced Analytics—so you can grow without
                spreadsheets or messy handoffs.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Why small businesses struggle on WhatsApp
                </h2>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">Missed messages:</span> Customers
                    expect fast replies; delays cost sales.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">No tracking:</span> Follow-ups
                    live in someone's memory, not a system.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">No team access:</span> Shared
                    visibility and ownership are unclear across staff shifts.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">No customer context:</span> Past
                    conversations and preferences aren't searchable.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Why a WhatsApp CRM is essential
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  A WhatsApp CRM gives your team a single source of truth for WhatsApp leads and
                  customers—so every message is owned, every follow-up is tracked, and every
                  outcome is measurable. It replaces scattered chats, spreadsheets, and ad-hoc
                  notes with repeatable workflows.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  With WhatsApp Business API, you can scale responsibly with compliant messaging,
                  automation, and reliable multi-agent access.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Benefits built for small businesses</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Shared Team Inbox",
                    body: "Assign chats, collaborate, and keep full visibility across your team.",
                  },
                  {
                    title: "No-Code Chatbot Builder",
                    body: "Automate FAQs, lead capture, qualification, and follow-ups without code.",
                  },
                  {
                    title: "WhatsApp Campaigns",
                    body: "Run targeted outreach and promotions with consistent messaging.",
                  },
                  {
                    title: "Customer history & tags",
                    body: "Search conversations, tag customers, and personalize follow-ups.",
                  },
                  {
                    title: "Advanced Campaign Analytics",
                    body: "Understand campaign performance, replies, and conversion paths.",
                  },
                  {
                    title: "WhatsApp Business API compliance",
                    body: "Scale with reliable multi-agent access and compliant messaging workflows.",
                  },
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
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Built for salons, clinics, gyms, and local teams
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                XploreByte is designed specifically for small businesses that rely on WhatsApp every
                day. If your team handles bookings, inquiries, quotes, or follow-ups, a WhatsApp CRM
                helps you respond faster and stay organized.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Salons", "Clinics", "Gyms", "Coaching centers", "Retail shops"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Ready to set up your WhatsApp CRM?</h2>
                  <p className="mt-2 text-gray-700">
                    Start your free trial or book a demo to see how Team Inbox, chatbots, campaigns,
                    and analytics work together for small businesses.
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
