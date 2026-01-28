// 📄 File: src/app/whatsapp-crm-for-interior-designers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-interior-designers";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Interior Designers | Lead Follow-ups, Quotation Tracking | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for interior designers to manage leads, quotation follow-ups, and site visits on WhatsApp. Team Inbox for designers & project coordinators, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for interior designers",
    "WhatsApp CRM for architects",
    "WhatsApp lead follow up for interior design",
    "WhatsApp quotation follow up",
    "WhatsApp campaigns for interior designers",
    "multi-agent WhatsApp inbox for interior design teams",
    "WhatsApp Business API for interior design business",
    "interior design WhatsApp automation",
    "architect WhatsApp CRM",
    "home renovation WhatsApp management",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Interior Designers | Lead Follow-ups, Quotation Tracking | XploreByte",
    description:
      "Convert more interior design leads on WhatsApp with quotation follow-ups, site visit scheduling, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Interior Designers - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Interior Designers | Lead Follow-ups, Quotation Tracking | XploreByte",
    description:
      "Convert more interior design leads on WhatsApp with quotation follow-ups, site visit scheduling, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I manage leads and quotations on WhatsApp with a CRM?",
    answer:
      "Yes. XploreByte WhatsApp CRM helps you capture leads from ads, Instagram, or website, track quotation status, follow-ups, and site visits—all in one place with customer history and context.",
  },
  {
    question: "Can multiple team members reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple designers, sales executives, and project coordinators can handle chats from one number with assignment, ownership, and visibility—so no lead is missed.",
  },
  {
    question: "Can I automate lead qualification and site visit booking?",
    answer:
      "Yes. A no-code chatbot can capture property type, budget, city, and timeline, then route qualified leads to the right designer or sales executive for site visit scheduling.",
  },
  {
    question: "Can I run campaigns to re-engage old leads?",
    answer:
      "Yes. You can send re-engagement campaigns to leads who didn't convert, share new portfolio work, seasonal offers, or project completion stories using structured templates on WhatsApp Business API.",
  },
  {
    question: "Do I need WhatsApp Business API for team inbox and automation?",
    answer:
      "For multi-agent inbox, automation, templates, quotation tracking, and scalable campaigns with analytics, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForInteriorDesignersPage() {
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
                Leads → Quotations → Projects (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Interior Designers
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage interior design leads, quotation follow-ups, site visits,
                and project updates on WhatsApp with XploreByte — built for
                WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing leads in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps interior
                design teams respond faster, close more projects, and keep
                clients engaged.
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
                Why interior designers need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Interior design wins on trust and responsiveness. Clients
                message for quotations, project updates, design ideas, and
                timelines. If replies are delayed—or the conversation is
                lost—they move to another designer. WhatsApp CRM gives you a
                structured way to manage conversations like a real business
                workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed leads",
                    body: "Inquiries from ads, Instagram, and referrals get buried in personal chats or handled inconsistently.",
                  },
                  {
                    title: "Slow quotation follow-ups",
                    body: "No reminders for 'send me the quote' leads—so they go with a competitor before you follow up.",
                  },
                  {
                    title: "No ownership clarity",
                    body: "Clients repeat the same questions to designers, sales, and project coordinators, and no one knows who's responsible.",
                  },
                  {
                    title: "Site visit no-shows",
                    body: "Site visits are scheduled but not followed up with reminders—leading to no-shows and wasted time.",
                  },
                  {
                    title: "Campaign chaos",
                    body: "Portfolio updates, offers, and re-engagement messages are sent randomly with no tracking of results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, quotation conversion, or project closure rates.",
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
                How XploreByte WhatsApp CRM works for interior designers
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for design teams",
                    body: "Multiple team members (designers, sales, coordinators) reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Client context (CRM)",
                    body: "Keep client history, project details, tags, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (pricing, services, portfolio), capture property details and budget, and route to the right designer.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send portfolio updates, seasonal offers, re-engagement campaigns, and referral requests with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to site visits, quotations, and project closures.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "Built on WhatsApp Business API",
                    body: "Designed for multi-agent workflows, templates, automation, and scalable messaging for interior design businesses.",
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
                High-converting interior design WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows interior design teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for clients.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Lead qualification & site visit flow",
                    items: [
                      "Lead asks for quotation and design consultation",
                      "Bot collects property type, budget, city, and timeline",
                      "Designer schedules site visit and shares portfolio",
                      "Client confirms (and gets reminder before visit)",
                    ],
                  },
                  {
                    title: "Quotation follow-up flow",
                    items: [
                      "Designer sends quotation via WhatsApp",
                      "Bot tracks if quote was opened and viewed",
                      "Auto-reminder sent after 3–5 days if no response",
                      "Track responses and conversion to project",
                    ],
                  },
                  {
                    title: "Project update & check-in flow",
                    items: [
                      "Send milestone updates (design approval, material procurement, execution start)",
                      "Share progress photos and timelines",
                      "Handle client queries and change requests",
                      "Request final approval and collect feedback",
                    ],
                  },
                  {
                    title: "Re-engagement & referral flow",
                    items: [
                      "Segment old leads or completed project clients",
                      "Send new portfolio work, seasonal offers, or referral incentives",
                      "Route replies to Team Inbox (sales or designer)",
                      "Track re-engagement and referral conversions",
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
                Benefits for interior design teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More project closures:
                  </span>{" "}
                  Faster response + structured quotation follow-ups increase
                  conversions from inquiry to signed project.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher client satisfaction:
                  </span>{" "}
                  Project updates, milestone check-ins, and timely communication
                  keep clients engaged and happy.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear chat ownership for designers, sales, and coordinators in
                  one inbox with visibility.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Less chaos:
                  </span>{" "}
                  Replace personal WhatsApp handling with a shared, trackable
                  workflow for leads and projects.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable improvement:
                  </span>{" "}
                  Use analytics to improve response time, quotation conversion,
                  and campaign outcomes.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your interior design business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for interior design teams.
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
