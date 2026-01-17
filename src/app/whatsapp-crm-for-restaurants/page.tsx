// 📄 File: src/app/whatsapp-crm-for-restaurants/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-restaurants";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Restaurants | Orders, Reservations, Campaigns | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for restaurants to manage orders, reservations, delivery updates, and repeat customers on WhatsApp. Team Inbox for staff, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for restaurants",
    "restaurant WhatsApp CRM",
    "WhatsApp CRM for cloud kitchens",
    "WhatsApp order updates for restaurants",
    "WhatsApp marketing for restaurants",
    "WhatsApp campaigns for restaurants",
    "WhatsApp chatbot for restaurants",
    "WhatsApp Business API for restaurants",
    "multi-agent WhatsApp inbox for restaurant staff",
    "restaurant customer retention WhatsApp",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Restaurants | Orders, Reservations, Campaigns | XploreByte",
    description:
      "Convert more restaurant orders on WhatsApp with automated updates, reservation confirmations, team inbox, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Restaurants - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Restaurants | Orders, Reservations, Campaigns | XploreByte",
    description:
      "Convert more restaurant orders on WhatsApp with automated updates, reservation confirmations, team inbox, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for restaurants?",
    answer:
      "A WhatsApp CRM for restaurants helps you manage customer orders, reservations, delivery updates, feedback, and repeat orders directly on WhatsApp. It connects conversations, order history, and outcomes so your team can respond faster and build customer loyalty.",
  },
  {
    question: "Can I send offers and re-order campaigns on WhatsApp?",
    answer:
      "Yes. With WhatsApp Business API, you can send weekly specials, festival offers, re-order reminders, and loyalty campaigns—all trackable and structured with templates and CTAs.",
  },
  {
    question: "Can I automate menu FAQs and route to staff?",
    answer:
      "Yes. A no-code chatbot can handle menu inquiries, timings, delivery areas, and special requests—then hand off to kitchen or front desk staff for order confirmation and personalized service.",
  },
  {
    question:
      "Can multiple staff handle chats from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple staff—front desk, kitchen, delivery team—can handle chats from one number with assignment, ownership, and visibility—so no customer is ignored.",
  },
  {
    question:
      "Do I need WhatsApp Business API for automation and campaigns?",
    answer:
      "For multi-agent inbox, order automation, delivery updates, campaigns, and tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
  {
    question:
      "Can I track campaign performance and customer engagement?",
    answer:
      "Yes. Analytics helps you track campaign replies, order conversions, response time, repeat customers, and what drives the most engagement—so you can optimize offers and operations.",
  },
] as const;

export default function WhatsAppCrmForRestaurantsPage() {
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
                Orders → Delivery → Repeat Customers (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Restaurants
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage restaurant orders, reservations, delivery updates, and
                repeat customers on WhatsApp with XploreByte — built for
                WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing customers in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps
                restaurants respond faster, confirm more orders, and drive
                repeat business.
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
                Why restaurants need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Restaurants win on speed and experience. Customers message for
                menu details, reservations, delivery status, and offers. If
                replies are delayed—or orders are mishandled—they order from a
                competitor. WhatsApp CRM gives you a structured way to manage
                conversations like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed orders",
                    body: "Order inquiries get buried in personal chats or handled inconsistently by different staff members.",
                  },
                  {
                    title: "Slow confirmations",
                    body: 'No structured order acceptance or delivery updates—customers keep asking "where is my order?"',
                  },
                  {
                    title: "No ownership",
                    body: "Customers repeat the same questions to multiple staff, and no one knows who's responsible.",
                  },
                  {
                    title: "Low repeat orders",
                    body: "No re-order campaigns or weekly offers—customers forget about you and order elsewhere.",
                  },
                  {
                    title: "Offer chaos",
                    body: "Festival deals and daily specials are sent randomly with no tracking of results or conversions.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, campaign engagement, or order conversion rates.",
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
                How XploreByte WhatsApp CRM works for restaurants
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for staff",
                    body: "Multiple staff—front desk, kitchen, delivery—reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Customer context (CRM)",
                    body: "Keep order history, preferences, tags, and feedback so your team replies with context and delivers personalized service.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to menu FAQs, timings, delivery areas, and special requests—then route to staff for order confirmation.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send weekly specials, festival offers, re-order nudges, and loyalty campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, campaign replies, order conversions, and repeat customer rates to optimize operations.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, order automation, templates, and scalable messaging.",
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
                High-converting restaurant WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows restaurants run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for customers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Order acceptance & delivery updates flow",
                    items: [
                      "Customer sends order via WhatsApp",
                      "Bot collects delivery address and payment preference",
                      "Staff confirms order and shares ETA",
                      "Auto delivery updates (preparing → out for delivery → delivered)",
                    ],
                  },
                  {
                    title: "Reservation booking & confirmation flow",
                    items: [
                      "Customer asks for table reservation",
                      "Bot collects party size, date, and time preference",
                      "Staff confirms reservation and sends reminder",
                      "Follow-up after visit for feedback and offers",
                    ],
                  },
                  {
                    title: "Re-order & weekly offers flow",
                    items: [
                      "Segment customers by order frequency and preferences",
                      "Send weekly specials or festival offers with images",
                      "Route replies to Team Inbox",
                      "Track order conversions and campaign ROI",
                    ],
                  },
                  {
                    title: "Feedback collection & loyalty flow",
                    items: [
                      "Auto message after delivery or dine-in",
                      "Collect rating and feedback via quick replies",
                      "Send thank-you message with loyalty discount",
                      "Track repeat orders and customer satisfaction",
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
                Benefits for restaurant owners
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More orders:
                  </span>{" "}
                  Faster response + structured order handling increase conversions and customer satisfaction.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher repeat rates:
                  </span>{" "}
                  Re-order campaigns and weekly offers bring customers back consistently.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better experience:
                  </span>{" "}
                  Automated delivery updates and reservation confirmations reduce "where is my order?" messages.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear chat ownership and staff visibility in one inbox improves coordination.
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
                  Use analytics to improve response time, campaign effectiveness, and customer retention.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your restaurant on WhatsApp — professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for restaurants and cloud kitchens.
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
