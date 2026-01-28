// 📄 File: src/app/whatsapp-chatbot-builder/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-chatbot-builder";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // ✅ shorter title to avoid truncation
  title: {
    absolute: "WhatsApp Chatbot Builder | No-Code Automation | XploreByte",
  },
  description:
    "Build a no-code WhatsApp chatbot with XploreByte. Automate replies, capture leads, and route to a team inbox using WhatsApp Business API. Built for small businesses. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp chatbot builder",
    "no-code WhatsApp chatbot",
    "WhatsApp automation",
    "WhatsApp lead capture",
    "WhatsApp Business API chatbot",
    "WhatsApp chatbot for small business",
    "WhatsApp flow builder",
    "WhatsApp customer support automation",
    "WhatsApp team inbox handoff",
    "WhatsApp CRM automation",
  ],
  openGraph: {
    title: "WhatsApp Chatbot Builder | No-Code Automation | XploreByte",
    description:
      "Create WhatsApp chatbots that automate FAQs, capture leads, and hand off to agents. Powered by WhatsApp Business API.",
    // ✅ absolute URL via NEXT_PUBLIC_SITE_URL
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Chatbot Builder - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Chatbot Builder | No-Code Automation | XploreByte",
    description:
      "Create WhatsApp chatbots that automate FAQs, capture leads, and hand off to agents. Powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "How long does it take to set up a WhatsApp chatbot?",
    answer:
      "Most small businesses can set up a basic WhatsApp chatbot in a few hours by starting with common FAQs, lead capture, and a simple handoff to a team inbox.",
  },
  {
    question: "Is this a no-code WhatsApp chatbot builder?",
    answer:
      "Yes. XploreByte’s no-code WhatsApp chatbot builder is designed for non-technical teams to build visual flows, quick replies, and routing without writing code.",
  },
  {
    question: "Do I need WhatsApp Business API to run a WhatsApp chatbot?",
    answer:
      "For automation and multi-agent workflows, WhatsApp Business API is typically required. XploreByte is built to work with WhatsApp Business API for reliable chatbot and team inbox experiences.",
  },
  {
    question: "What does a WhatsApp chatbot cost?",
    answer:
      "Costs usually include your WhatsApp Business API setup and usage-based messaging fees, plus your platform subscription. Exact pricing depends on your volume and configuration.",
  },
  {
    question: "Can the chatbot hand off to a human agent?",
    answer:
      "Yes. You can route conversations to agents inside a Team Inbox based on intent, availability, or tags so customers get a fast human response when needed.",
  },
  {
    question:
      "What are common WhatsApp chatbot use cases for small businesses?",
    answer:
      "Popular use cases include lead capture, appointment booking, product inquiries, order updates, FAQ automation, and follow-up reminders—especially for salons, clinics, gyms, and local services.",
  },
] as const;

export default function WhatsAppChatbotBuilderPage() {
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
                No-Code Automation • Lead Capture • Agent Handoff
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                No-Code WhatsApp Chatbot Builder for Small Businesses
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Automate replies, lead capture, follow-ups, and support on
                WhatsApp using XploreByte’s visual chatbot builder — powered by
                WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Build a WhatsApp chatbot that answers common questions, captures
                leads, and routes customers to the right person. XploreByte
                combines a no-code chatbot builder with a Team Inbox and
                WhatsApp CRM—so your business stays responsive without adding
                manual workload.
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
            {/* WHAT IS */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                What is a WhatsApp chatbot?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                A WhatsApp chatbot is an automated flow that replies to
                customers on WhatsApp. It can answer FAQs, collect details,
                qualify leads, and guide customers to the next step—either
                completing the action automatically or routing to a human agent.
              </p>
            </div>

            {/* WHY */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Why small businesses need chatbot automation on WhatsApp
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Small businesses compete on speed. When customers message on
                WhatsApp outside business hours or during peak time, delays lead
                to missed revenue. A WhatsApp chatbot keeps your business
                responsive with consistent answers, faster lead capture, and
                structured follow-ups.
              </p>
            </div>

            {/* HOW IT WORKS */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How XploreByte’s No-Code Chatbot Builder works
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Visual flow builder",
                    body: "Create chatbot flows with a simple, visual builder designed for teams.",
                  },
                  {
                    title: "Buttons & quick replies",
                    body: "Guide customers with structured options that reduce back-and-forth.",
                  },
                  {
                    title: "Lead capture",
                    body: "Collect details like name, location, and intent to qualify faster.",
                  },
                  {
                    title: "Auto-replies",
                    body: "Answer FAQs and handle common requests 24/7 with consistent messaging.",
                  },
                  {
                    title: "Routing to agents",
                    body: "Escalate conversations to humans based on intent, tags, or availability.",
                  },
                  {
                    title: "Follow-up readiness",
                    body: "Capture structured intent so your team can follow up with the right message at the right time.",
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
                Who uses this?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
                Teams that get WhatsApp inquiries and want to respond
                instantly—without hiring more people on day one. These are
                common “chatbot-first” use cases:
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Salons & local services",
                    body: "Auto-answer pricing, services, timings, and capture appointment intent.",
                  },
                  {
                    title: "Clinics & consultations",
                    body: "Collect symptoms/requirements, share next steps, and route to a coordinator.",
                  },
                  {
                    title: "Gyms & coaching",
                    body: "Qualify leads, share packages, and push high-intent conversations to sales.",
                  },
                  {
                    title: "D2C & retail",
                    body: "Handle product questions, availability, shipping, and order updates instantly.",
                  },
                  {
                    title: "Education & institutes",
                    body: "Capture course interest, schedule callbacks, and share brochures automatically.",
                  },
                  {
                    title: "Real estate & agents",
                    body: "Collect location/budget, share listings, and hand off to the right agent fast.",
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

            {/* INTEGRATION */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                How it integrates with Team Inbox + WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Chatbot automation works best when it connects to a shared inbox
                and CRM workflows. XploreByte routes chatbot conversations into
                a{" "}
                <Link
                  href="/whatsapp-team-inbox"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp Team Inbox
                </Link>{" "}
                so your team can pick up where the bot leaves off. Customer
                history and tags help agents reply with context, while status
                tracking keeps follow-ups organized.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Learn more about the full workflow on our{" "}
                <Link
                  href="/whatsapp-crm"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp CRM
                </Link>{" "}
                page.
              </p>
            </div>

            {/* CAMPAIGNS + ANALYTICS (keep, but add internal links) */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Campaign + analytics connection
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Use chatbots to improve campaign conversion: respond instantly,
                qualify leads, and route high-intent conversations to agents.
                With analytics and reporting, you can measure performance across
                replies, outcomes, and follow-up effectiveness—so you can refine
                flows and campaigns over time.
              </p>

              {/* ✅ cluster links inside body */}
              <p className="mt-3 text-gray-700 leading-relaxed">
                Explore{" "}
                <Link
                  href="/whatsapp-campaigns"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp Campaigns
                </Link>{" "}
                for broadcast + retargeting, and learn how to set up the right
                foundation with a{" "}
                <Link
                  href="/whatsapp-business-api-provider"
                  className="text-[#0d8a3a] hover:underline"
                >
                  WhatsApp Business API Provider
                </Link>
                .
              </p>
            </div>

            {/* BENEFITS */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits for small businesses
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    24/7 automated replies:
                  </span>{" "}
                  Handle FAQs and basic requests anytime.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Fewer missed leads:
                  </span>{" "}
                  Capture intent and contact details reliably.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Faster response time:
                  </span>{" "}
                  Reduce manual back-and-forth and speed up first replies.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better customer experience:
                  </span>{" "}
                  Consistent answers and faster resolution.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable performance:
                  </span>{" "}
                  Improve flows and campaign outcomes with insights.
                </li>
              </ul>
            </div>

            {/* ✅ NEW: INTERNAL CLUSTER LINKS (authority block) */}
            <section className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Build the full WhatsApp growth system
              </h2>
              <p className="mt-2 text-gray-700">
                This page is part of XploreByte’s topical SEO cluster. Pair
                chatbots with a team inbox, campaigns, and CRM to build a
                complete WhatsApp-first growth engine.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/whatsapp-team-inbox"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">
                    WhatsApp Team Inbox
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Route chatbot conversations to agents with ownership and
                    context.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-campaigns"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">
                    WhatsApp Campaigns
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Broadcast, retarget, and drive responses with WhatsApp-first
                    funnels.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>

                <Link
                  href="/whatsapp-business-api-provider"
                  className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">
                    WhatsApp Business API Provider
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Set up WhatsApp Business API correctly and connect your
                    number.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0d8a3a]">
                    Explore →
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to build a WhatsApp chatbot?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how no-code
                    chatbots, Team Inbox, and WhatsApp CRM workflows fit
                    together for small businesses.
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
