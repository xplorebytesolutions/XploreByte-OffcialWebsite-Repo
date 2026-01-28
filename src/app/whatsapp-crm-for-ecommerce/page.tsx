// 📄 File: src/app/whatsapp-crm-for-ecommerce/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-ecommerce";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for E-commerce & D2C | Order Updates, Abandoned Cart, Support | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for e-commerce and D2C brands to manage orders, COD confirmations, abandoned cart recovery, and customer support on WhatsApp. Team Inbox for agents, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for ecommerce",
    "WhatsApp CRM for D2C",
    "ecommerce WhatsApp CRM",
    "WhatsApp order updates",
    "WhatsApp abandoned cart recovery",
    "WhatsApp campaigns for ecommerce",
    "WhatsApp Team Inbox for ecommerce",
    "WhatsApp chatbot for online store",
    "WhatsApp Business API for ecommerce",
    "multi-agent WhatsApp inbox for ecommerce support",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for E-commerce & D2C | Order Updates, Abandoned Cart, Support | XploreByte",
    description:
      "Manage e-commerce orders on WhatsApp with COD confirmations, abandoned cart recovery, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for E-commerce & D2C - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for E-commerce & D2C | Order Updates, Abandoned Cart, Support | XploreByte",
    description:
      "Manage e-commerce orders on WhatsApp with COD confirmations, abandoned cart recovery, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for e-commerce businesses?",
    answer:
      "A WhatsApp CRM for e-commerce helps you manage order inquiries, COD confirmations, abandoned cart recovery, customer support, and order updates directly on WhatsApp. It connects orders, conversations, and outcomes so your team can respond faster and increase conversions.",
  },
  {
    question: "Can I reduce COD returns with WhatsApp confirmations?",
    answer:
      "Yes. By sending COD order confirmations on WhatsApp and getting customer acknowledgment before dispatch, you can significantly reduce fake orders and RTO (Return to Origin) rates.",
  },
  {
    question: "Can I recover abandoned carts with WhatsApp campaigns?",
    answer:
      "Yes. You can send personalized abandoned cart recovery messages with product images, discount codes, and quick buy links—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question: "Can multiple agents handle customer support from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple support agents can handle customer chats from one number with assignment, ownership, and visibility—so no customer query is missed.",
  },
  {
    question: "Can chatbots handle FAQs and hand off to agents?",
    answer:
      "Yes. A no-code chatbot can handle common FAQs (order status, return policy, shipping), capture customer details, and route complex queries to the right support agent for personalized assistance.",
  },
  {
    question: "Do I need WhatsApp Business API for e-commerce automation?",
    answer:
      "For multi-agent inbox, automation, templates, abandoned cart recovery, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForEcommercePage() {
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
                Orders → Support → Repeat Buyers (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for E-commerce & D2C
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage e-commerce orders, customer support, COD confirmations,
                and abandoned cart recovery on WhatsApp with XploreByte — built
                for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing orders in untracked chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps
                e-commerce brands respond faster, reduce COD RTO, and increase
                repeat purchases.
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
                Why e-commerce businesses need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                E-commerce wins on speed and trust. Customers message for order
                updates, COD confirmations, product inquiries, and support. If
                replies are delayed—or the conversation is lost—they abandon
                carts or order from competitors. WhatsApp CRM gives you a
                structured way to manage customer conversations like a
                professional e-commerce workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "High COD RTO",
                    body: "No pre-dispatch confirmation on COD orders leads to fake orders and high return-to-origin rates.",
                  },
                  {
                    title: "Abandoned carts",
                    body: "No systematic follow-up for cart abandoners—so potential customers buy elsewhere.",
                  },
                  {
                    title: "Support chaos",
                    body: "Order inquiries get buried in personal chats or handled inconsistently by different agents.",
                  },
                  {
                    title: "No ownership",
                    body: "Customers repeat the same questions to multiple agents, and no one knows who's responsible.",
                  },
                  {
                    title: "Missed upsells",
                    body: "No campaigns for cross-sells, reorders, or new arrivals—so customer lifetime value stays low.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, replies, or conversion outcomes.",
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
                How XploreByte WhatsApp CRM works for e-commerce
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for support agents",
                    body: "Multiple support agents reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Customer context (CRM)",
                    body: "Keep order history, tags, purchase behavior, and customer notes so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (order status, return policy, shipping), capture details, and route to the right agent.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send abandoned cart recovery, COD confirmations, new arrivals, flash sales, and reorder reminders with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to orders vs abandoned carts.",
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
                High-converting e-commerce WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows e-commerce brands run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for customers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "COD confirmation & RTO reduction",
                    items: [
                      "Customer places COD order",
                      "Send WhatsApp confirmation with order details",
                      "Get customer acknowledgment before dispatch",
                      "Reduce fake orders and RTO rates by 30-50%",
                    ],
                  },
                  {
                    title: "Abandoned cart recovery flow",
                    items: [
                      "Customer adds to cart but doesn't checkout",
                      "Send personalized cart recovery message with product image",
                      "Offer discount code or free shipping incentive",
                      "Track conversions and campaign ROI",
                    ],
                  },
                  {
                    title: "Order updates & delivery tracking",
                    items: [
                      "Order confirmed, packed, shipped",
                      "Send automated status updates with tracking link",
                      "Handle delivery reschedules or address changes",
                      "Improve customer experience and reduce support load",
                    ],
                  },
                  {
                    title: "Reorder reminders & upsell campaigns",
                    items: [
                      "Segment customers by past purchases (consumables, repeat buyers)",
                      "Send reorder reminders or cross-sell recommendations",
                      "Route replies to support Team Inbox",
                      "Increase repeat purchase rate and customer LTV",
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
                Benefits for e-commerce & D2C brands
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Lower COD RTO:
                  </span>{" "}
                  Pre-dispatch confirmations reduce fake orders and return
                  rates.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher conversions:
                  </span>{" "}
                  Abandoned cart recovery + faster support increase checkout
                  completion.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better customer experience:
                  </span>{" "}
                  Proactive updates + quick support improve satisfaction and
                  trust.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear customer ownership and agent visibility in one inbox.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Increased repeat purchases:
                  </span>{" "}
                  Reorder reminders, upsell campaigns, and new arrival alerts
                  boost customer LTV.
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
                    Ready to run your e-commerce business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for e-commerce and D2C brands.
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
