// 📄 File: src/app/whatsapp-crm-for-hr-recruitment/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-hr-recruitment";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for HR & Recruitment | Interview Scheduling, Candidate Follow-ups | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for recruitment to manage candidate follow-ups, interview scheduling, and hiring campaigns on WhatsApp. Team Inbox for recruiters, automated replies, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for recruitment",
    "WhatsApp CRM for HR teams",
    "WhatsApp follow up for candidates",
    "WhatsApp interview scheduling",
    "WhatsApp campaigns for hiring",
    "multi-agent WhatsApp inbox for recruiters",
    "WhatsApp Business API for recruitment",
    "WhatsApp chatbot for candidate screening",
    "recruitment agency WhatsApp CRM",
    "staffing agency WhatsApp automation",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for HR & Recruitment | Interview Scheduling, Candidate Follow-ups | XploreByte",
    description:
      "Convert more candidates on WhatsApp with interview scheduling, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for HR & Recruitment - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for HR & Recruitment | Interview Scheduling, Candidate Follow-ups | XploreByte",
    description:
      "Convert more candidates on WhatsApp with interview scheduling, team inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "Can I schedule interviews and send reminders on WhatsApp?",
    answer:
      "Yes. XploreByte allows you to schedule interviews, send automated reminders before the interview, share meeting links, and handle reschedule requests—all on WhatsApp.",
  },
  {
    question: "Can multiple recruiters reply from one WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple recruiters can handle candidate chats from one number with assignment, ownership, and visibility—so no candidate is missed.",
  },
  {
    question: "Can a chatbot pre-qualify candidates?",
    answer:
      "Yes. A no-code chatbot can collect candidate details (experience, skills, location, availability), pre-qualify them based on job requirements, and route qualified candidates to the right recruiter.",
  },
  {
    question: "Can I run bulk hiring campaigns on WhatsApp?",
    answer:
      "Yes. You can send broadcast campaigns for new job openings, bulk hiring drives, walk-in interviews, and re-engagement to your candidate database—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question: "Do I need WhatsApp Business API for recruitment automation?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable campaigns with tracking, WhatsApp Business API is typically required. XploreByte is built around WhatsApp Business API workflows.",
  },
] as const;

export default function WhatsAppCrmForHRRecruitmentPage() {
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
                Candidates → Interviews → Placements (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for HR & Recruitment
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage candidate follow-ups, interview scheduling, status
                updates, and hiring campaigns on WhatsApp with XploreByte —
                built for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing candidates in personal chats. With a Team Inbox,
                automation, campaigns, and analytics, XploreByte helps
                recruitment teams respond faster, schedule more interviews, and
                close more placements.
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
                Why recruitment teams need a WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Recruitment wins on speed and communication. Candidates message
                for job details, interview slots, and status updates. If
                replies are delayed—or the conversation is lost—they accept
                another offer. WhatsApp CRM gives you a structured way to
                manage conversations like a real business workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed candidates",
                    body: "Job applications get buried in personal chats or handled inconsistently by different recruiters.",
                  },
                  {
                    title: "Slow responses",
                    body: "No quick replies for interested candidates—so they accept offers from faster-moving competitors.",
                  },
                  {
                    title: "No ownership",
                    body: "Candidates repeat the same questions to multiple recruiters, and no one knows who's responsible.",
                  },
                  {
                    title: "High no-shows",
                    body: "Interviews are scheduled but not followed up with reminders—leading to no-shows and wasted slots.",
                  },
                  {
                    title: "Campaign chaos",
                    body: "Bulk hiring messages and job openings are sent randomly with no tracking of results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know what's working—response time, replies, or placement outcomes.",
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
                How XploreByte WhatsApp CRM works for recruitment
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for recruiters",
                    body: "Multiple recruiters reply from one number with assignment, ownership, and shared visibility.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Candidate context (CRM)",
                    body: "Keep candidate history, tags, job interest, skills, and status so your team replies with context and consistency.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code automation",
                    body: "Auto-reply to FAQs (job details, salary, location), capture candidate info, and route to the right recruiter.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns & broadcasts",
                    body: "Send job opening alerts, bulk hiring campaigns, interview invites, and re-engagement campaigns with templates and CTAs.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics & outcomes",
                    body: "Track response speed, replies, campaign performance, and what leads to interviews and placements.",
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
                High-converting recruitment WhatsApp use cases
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows recruitment teams run daily. With
                XploreByte, the experience becomes structured, trackable, and
                faster for candidates and hiring managers.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Candidate screening & qualification flow",
                    items: [
                      "Candidate applies or inquires about job",
                      "Bot collects experience, skills, location, availability",
                      "Recruiter reviews profile and schedules interview",
                      "Candidate confirms (and gets reminder before interview)",
                    ],
                  },
                  {
                    title: "Interview scheduling & reminder flow",
                    items: [
                      "Recruiter sends interview invite with date, time, link",
                      "Candidate confirms or requests reschedule",
                      "Auto reminder sent 24 hours and 1 hour before interview",
                      "Track attendance and follow-up after interview",
                    ],
                  },
                  {
                    title: "Bulk hiring campaign flow",
                    items: [
                      "Segment candidates by skills, location, and experience",
                      "Send job opening broadcast with apply link or CTA",
                      "Route replies to Team Inbox with auto-assignment",
                      "Track applications, interviews, and placements",
                    ],
                  },
                  {
                    title: "Document collection & status updates",
                    items: [
                      "Send checklist reminder for documents (resume, ID, certificates)",
                      "Candidate uploads via WhatsApp or portal link",
                      "Send status updates (shortlisted, rejected, hired)",
                      "Track document submission and hiring progress",
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
                Benefits for recruitment teams
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More placements:
                  </span>{" "}
                  Faster response + structured follow-ups increase interview
                  attendance and closures.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Higher candidate quality:
                  </span>{" "}
                  Pre-qualify candidates with automation—so recruiters focus on
                  qualified profiles.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear candidate ownership and recruiter visibility in one
                  inbox.
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
                  recruiter performance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your recruitment business on WhatsApp —
                    professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM,
                    Team Inbox, automation, campaigns, and analytics work
                    together for recruitment teams.
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
