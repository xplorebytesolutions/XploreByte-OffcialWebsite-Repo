import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/**
 * Resolve site base URL for absolute OpenGraph URLs.
 * Uses NEXT_PUBLIC_SITE_URL if set, otherwise falls back to production domain.
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");

const PAGE_PATH = "/whatsapp-crm";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
//   metadataBase: new URL(SITE_URL),
  title: { absolute: "WhatsApp CRM for Small Businesses | XploreByte" },
  description:
    "XploreByte is a WhatsApp CRM for small businesses with WhatsApp Business API integration, Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "WhatsApp CRM for Small Businesses | XploreByte",
    description:
      "XploreByte is a WhatsApp CRM for small businesses with WhatsApp Business API integration, Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start a free trial.",
    // ✅ Make URL absolute for better OG previews and tooling compatibility
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
      "XploreByte is a WhatsApp CRM for small businesses with WhatsApp Business API integration, Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start a free trial.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM?",
    answer:
      "A WhatsApp CRM is a system that helps you manage WhatsApp conversations like customer records—capturing leads, tracking follow-ups, assigning owners, and measuring outcomes in one place.",
  },
  {
    question: "Do I need the WhatsApp Business API to use a WhatsApp CRM?",
    answer:
      "For multi-agent teams, automation, and compliant messaging at scale, WhatsApp Business API is typically required. XploreByte is built for WhatsApp Business API integration so your team can collaborate, automate, and track results reliably.",
  },
  {
    question: "Is XploreByte best for small businesses?",
    answer:
      "Yes. XploreByte is designed for small businesses that need speed and clarity—shared visibility, fast assignment, and workflow-first tools without adding complexity.",
  },
  {
    question: "Can I run WhatsApp campaigns and automate follow-ups?",
    answer:
      "Yes. Use WhatsApp Campaigning for targeted outreach and a No-Code Chatbot Builder for automated replies, lead capture, qualification, and follow-up flows.",
  },
  {
    question: "What analytics and reports do I get?",
    answer:
      "You can track conversation performance, campaign outcomes, team responsiveness, and customer journeys with Advanced Analytics reports for better decisions and consistent follow-ups.",
  },
] as const;

export default function WhatsAppCrmPage() {
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
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/30 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* ✅ Exactly one H1 on page */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Small Businesses
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage leads, conversations, campaigns, and follow-ups in one
                place — powered by WhatsApp Business API and built for teams.
              </p>

              <p className="mt-6 text-lg text-white/80">
                XploreByte is a WhatsApp First CRM designed for small
                businesses. Use Team Inbox, No-Code Chatbot Builder, WhatsApp
                Campaigning, and Advanced Analytics reports to turn WhatsApp
                chats into repeat customers.
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

        {/* MAIN CONTENT */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* LEFT */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    What “WhatsApp CRM” means
                  </h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    A WhatsApp CRM helps you treat WhatsApp conversations as
                    customer relationships. Instead of scattered chats across
                    personal devices, you get a structured system to capture
                    leads, centralize conversations, assign owners, and track
                    follow-ups end-to-end.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Why small businesses need it
                  </h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    Small businesses often win on speed and trust. When leads
                    come from WhatsApp, delays, missed messages, and unclear
                    ownership cost revenue. A WhatsApp CRM keeps every
                    conversation visible, actionable, and measurable—so your
                    team can respond faster and follow up consistently.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    How XploreByte solves it
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-700">
                    <li>
                      <span className="font-semibold text-gray-900">
                        Team Inbox:
                      </span>{" "}
                      Share visibility, assign chats, and collaborate without
                      switching tools.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        No-Code Chatbot Builder:
                      </span>{" "}
                      Build automated flows for FAQs, lead capture,
                      qualification, and follow-ups.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        WhatsApp Campaigning:
                      </span>{" "}
                      Run targeted outreach and campaigns with consistent
                      messaging and tracking.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        Advanced Analytics & Reports:
                      </span>{" "}
                      Understand what’s working—from response speed to campaign
                      performance.
                    </li>
                  </ul>
                </div>

                {/* ✅ NEW: HOW IT WORKS (high-intent conversion section) */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    How it works (in 3 steps)
                  </h2>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <p className="text-sm font-semibold text-[#0d8a3a]">
                        Step 1
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-gray-900">
                        Connect WhatsApp
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Set up WhatsApp Business API integration so your team
                        can manage chats in a shared workspace.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <p className="text-sm font-semibold text-[#0d8a3a]">
                        Step 2
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-gray-900">
                        Organize & automate
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Use Team Inbox to assign conversations, and No-Code
                        Chatbot Builder to capture leads and automate
                        follow-ups.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <p className="text-sm font-semibold text-[#0d8a3a]">
                        Step 3
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-gray-900">
                        Campaign + measure
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Run WhatsApp campaigns and use Advanced Analytics
                        reports to improve response speed, outcomes, and ROI.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ✅ NEW: INDUSTRY USE CASES (long-tail SEO capture) */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Built for small businesses
                  </h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    If your leads come from WhatsApp, a WhatsApp CRM helps you
                    handle every inquiry professionally—without losing context
                    when your team grows.
                  </p>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="text-lg font-bold text-gray-900">
                        Salons & clinics
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Track appointments, inquiries, and follow-ups with clear
                        ownership across your team.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="text-lg font-bold text-gray-900">
                        Gyms & coaching
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Qualify leads, send offers, and follow up automatically
                        to convert interested chats into memberships.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="text-lg font-bold text-gray-900">
                        Local services
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Assign incoming queries, manage repeat customers, and
                        reduce missed leads with a shared Team Inbox.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="text-lg font-bold text-gray-900">
                        Retail & D2C
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Run WhatsApp campaigns, support customers faster, and
                        measure what drives conversions with analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    WhatsApp Business API integration
                  </h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    XploreByte is designed to work with WhatsApp Business API,
                    enabling teams to manage conversations in a compliant,
                    scalable way. If you’re already using the API—or planning
                    to—XploreByte helps you operationalize it with shared
                    workflows, automation, campaigns, and reporting.
                  </p>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    Prefer a deep dive? Explore our{" "}
                    <Link
                      href="/whatsapp-business"
                      className="text-[#0d8a3a] hover:underline"
                    >
                      WhatsApp Business API page
                    </Link>
                    .
                  </p>
                </div>

                {/* ✅ NEW: INTERNAL LINKS (SEO cluster reinforcement) */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Explore more
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Learn how XploreByte helps across team collaboration,
                    automation, campaigns, and WhatsApp CRM workflows.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
                    <Link
                      href="/whatsapp-team-inbox"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      WhatsApp Team Inbox
                    </Link>
                    <Link
                      href="/whatsapp-chatbot-builder"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      No-Code Chatbot Builder
                    </Link>
                    <Link
                      href="/whatsapp-campaigns"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      WhatsApp Campaigning
                    </Link>
                    <Link
                      href="/whatsapp-business-api-provider"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      WhatsApp Business API Provider
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className="bg-gray-50 rounded-2xl p-6 h-fit border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">
                  Get started fast
                </h2>
                <p className="mt-2 text-gray-700">
                  Set up your WhatsApp CRM workflow in minutes and keep every
                  lead and follow-up in one place.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="https://app.xplorebyte.com/signup-for-trial"
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Built for small businesses using WhatsApp Business API, with
                  clear ownership and measurable outcomes.
                </p>
              </aside>
            </div>
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

        {/* ✅ JSON-LD FAQ Schema (kept on-page for clarity) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}

// import type { Metadata } from "next";
// import Link from "next/link";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
//   title: { absolute: "WhatsApp CRM for Small Businesses | XploreByte" },
//   description:
//     "XploreByte is a WhatsApp CRM for small businesses with WhatsApp Business API integration, Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start a free trial.",
//   alternates: {
//     canonical: PAGE_PATH,
//   },
//   openGraph: {
//     title: "WhatsApp CRM for Small Businesses | XploreByte",
//     description:
//       "XploreByte is a WhatsApp CRM for small businesses with WhatsApp Business API integration, Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start a free trial.",
//     url: "/whatsapp-crm",
//     images: [
//       {
//         url: "/herosection.png",
//         width: 1200,
//         height: 630,
//         alt: "WhatsApp CRM for Small Businesses - XploreByte",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "WhatsApp CRM for Small Businesses | XploreByte",
//     description:
//       "XploreByte is a WhatsApp CRM for small businesses with WhatsApp Business API integration, Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start a free trial.",
//     images: ["/herosection.png"],
//   },
// };

// const faqs = [
//   {
//     question: "What is a WhatsApp CRM?",
//     answer:
//       "A WhatsApp CRM is a system that helps you manage WhatsApp conversations like customer records—capturing leads, tracking follow-ups, assigning owners, and measuring outcomes in one place.",
//   },
//   {
//     question: "Do I need the WhatsApp Business API to use a WhatsApp CRM?",
//     answer:
//       "For multi-agent teams, automation, and compliant messaging at scale, WhatsApp Business API is typically required. XploreByte is built to work with WhatsApp Business API integration.",
//   },
//   {
//     question: "Is XploreByte best for small businesses?",
//     answer:
//       "Yes. XploreByte is designed for small businesses that need speed and clarity—shared visibility, fast assignment, and workflow-first tools without adding complexity.",
//   },
//   {
//     question: "Can I run WhatsApp campaigns and automate follow-ups?",
//     answer:
//       "Yes. Use WhatsApp Campaigning for targeted outreach and a No-Code Chatbot Builder for automated replies, lead capture, and follow-up flows.",
//   },
//   {
//     question: "What analytics and reports do I get?",
//     answer:
//       "You can track conversation performance, campaign outcomes, team responsiveness, and customer journeys with Advanced Analytics reports for better decisions and consistent follow-ups.",
//   },
// ] as const;

// export default function WhatsAppCrmPage() {
//   const faqJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: faq.answer,
//       },
//     })),
//   };

//   return (
//     <>
//       <Header />
//       <main className="min-h-screen bg-white">
//         <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/30 py-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl">
//               <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
//                 WhatsApp CRM for Small Businesses
//               </h1>
//               <p className="mt-5 text-xl text-white/85">
//                 Manage leads, conversations, campaigns, and follow-ups in one place — powered by
//                 WhatsApp Business API and built for teams.
//               </p>
//               <p className="mt-6 text-lg text-white/80">
//                 XploreByte is a WhatsApp First CRM designed for small businesses. Use Team Inbox,
//                 No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to
//                 turn WhatsApp chats into repeat customers.
//               </p>

//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="https://app.xplorebyte.com/signup-for-trial"
//                   className="inline-flex items-center justify-center rounded-lg bg-[#11A944] px-6 py-3 font-semibold text-white hover:bg-[#0d8a3a] transition-colors"
//                 >
//                   Start Free Trial
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition-colors"
//                 >
//                   Book a Demo
//                 </Link>
//               </div>
//               <p className="mt-3 text-sm text-white/75">Start a free trial or book a demo in minutes.</p>
//             </div>
//           </div>
//         </section>

//         <section className="py-14">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//               <div className="lg:col-span-2 space-y-10">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">What “WhatsApp CRM” means</h2>
//                   <p className="mt-3 text-gray-700 leading-relaxed">
//                     A WhatsApp CRM helps you treat WhatsApp conversations as customer relationships.
//                     Instead of scattered chats across personal devices, you get a structured system
//                     to capture leads, centralize conversations, assign owners, and track follow-ups
//                     end-to-end.
//                   </p>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">Why small businesses need it</h2>
//                   <p className="mt-3 text-gray-700 leading-relaxed">
//                     Small businesses often win on speed and trust. When leads come from WhatsApp,
//                     delays, missed messages, and unclear ownership cost revenue. A WhatsApp CRM
//                     keeps every conversation visible, actionable, and measurable—so your team can
//                     respond faster and follow up consistently.
//                   </p>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">How XploreByte solves it</h2>
//                   <ul className="mt-4 space-y-3 text-gray-700">
//                     <li>
//                       <span className="font-semibold text-gray-900">Team Inbox:</span> Share
//                       visibility, assign chats, and collaborate without switching tools.
//                     </li>
//                     <li>
//                       <span className="font-semibold text-gray-900">No-Code Chatbot Builder:</span>{" "}
//                       Build automated flows for FAQs, lead capture, qualification, and follow-ups.
//                     </li>
//                     <li>
//                       <span className="font-semibold text-gray-900">WhatsApp Campaigning:</span>{" "}
//                       Run targeted outreach and campaigns with consistent messaging and tracking.
//                     </li>
//                     <li>
//                       <span className="font-semibold text-gray-900">
//                         Advanced Analytics & Reports:
//                       </span>{" "}
//                       Understand what’s working—from response speed to campaign performance.
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">WhatsApp Business API integration</h2>
//                   <p className="mt-3 text-gray-700 leading-relaxed">
//                     XploreByte is designed to work with WhatsApp Business API, enabling teams to
//                     manage conversations in a compliant, scalable way. If you’re already using the
//                     API—or planning to—XploreByte helps you operationalize it with shared workflows,
//                     automation, campaigns, and reporting.
//                   </p>
//                   <p className="mt-3 text-gray-700 leading-relaxed">
//                     Prefer a deep dive? Explore our{" "}
//                     <Link href="/whatsapp-business" className="text-[#0d8a3a] hover:underline">
//                       WhatsApp Business API page
//                     </Link>
//                     .
//                   </p>
//                 </div>
//               </div>

//               <aside className="bg-gray-50 rounded-2xl p-6 h-fit border border-gray-100">
//                 <h2 className="text-xl font-bold text-gray-900">Get started fast</h2>
//                 <p className="mt-2 text-gray-700">
//                   Set up your WhatsApp CRM workflow in minutes and keep every lead and follow-up in
//                   one place.
//                 </p>
//                 <div className="mt-5 flex flex-col gap-3">
//                   <Link
//                     href="https://app.xplorebyte.com/signup-for-trial"
//                     className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800 transition-colors"
//                   >
//                     Start Free Trial
//                   </Link>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
//                   >
//                     Book a Demo
//                   </Link>
//                 </div>
//                 <p className="mt-4 text-sm text-gray-600">
//                   Built for small businesses using WhatsApp Business API, with clear ownership and
//                   measurable outcomes.
//                 </p>
//               </aside>
//             </div>
//           </div>
//         </section>

//         <section className="py-14 bg-white border-t border-gray-100">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
//             <div className="mt-6 space-y-5">
//               {faqs.map((faq) => (
//                 <details key={faq.question} className="rounded-xl border border-gray-200 p-5">
//                   <summary className="cursor-pointer font-semibold text-gray-900">
//                     {faq.question}
//                   </summary>
//                   <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </section>

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
//         />
//       </main>
//       <Footer />
//     </>
//   );
// }
