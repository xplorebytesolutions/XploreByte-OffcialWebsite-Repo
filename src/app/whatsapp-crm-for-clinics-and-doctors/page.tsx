// 📄 File: src/app/whatsapp-crm-for-clinics-and-doctors/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-crm-for-clinics-and-doctors";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "WhatsApp CRM for Clinics & Doctors | Patient Follow-ups | XploreByte",
  },
  description:
    "Use XploreByte WhatsApp CRM for clinics and doctors to manage patient inquiries, appointment follow-ups, and reports on WhatsApp. Team Inbox, no-code chatbot, campaigns, and analytics on WhatsApp Business API. Start free.",
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "WhatsApp CRM for clinics",
    "WhatsApp CRM for doctors",
    "clinic WhatsApp CRM",
    "doctor appointment WhatsApp",
    "WhatsApp for patient follow-ups",
    "WhatsApp Team Inbox for clinics",
    "WhatsApp chatbot for clinics",
    "WhatsApp Business API for healthcare",
    "patient appointment reminders WhatsApp",
    "clinic patient retention WhatsApp",
  ],
  openGraph: {
    title:
      "WhatsApp CRM for Clinics & Doctors | Patient Follow-ups | XploreByte",
    description:
      "Manage patient inquiries, appointment bookings, follow-ups, and reports on WhatsApp with Team Inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    url: PAGE_URL,
    siteName: "XploreByte",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp CRM for Clinics & Doctors - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp CRM for Clinics & Doctors | Patient Follow-ups | XploreByte",
    description:
      "Manage patient inquiries, appointment bookings, follow-ups, and reports on WhatsApp with Team Inbox, automation, campaigns, and analytics—powered by WhatsApp Business API.",
    images: ["/herosection.png"],
  },
};

const faqs = [
  {
    question: "What is a WhatsApp CRM for clinics and doctors?",
    answer:
      "A WhatsApp CRM for clinics and doctors helps you manage patient inquiries, appointment bookings, follow-ups, and medical reports directly on WhatsApp. It connects patient conversations, history, and outcomes so your team can respond faster and provide better care coordination.",
  },
  {
    question: "Can multiple staff reply from one clinic WhatsApp number?",
    answer:
      "Yes. With WhatsApp Business API and a Team Inbox, multiple reception staff, nurses, or assistants can handle patient chats from one number with assignment, ownership, and shared visibility—so no inquiry is missed.",
  },
  {
    question: "Can I automate replies for clinic hours, fees, and services?",
    answer:
      "Yes. A no-code chatbot can handle FAQs (clinic hours, consultation fees, specialties), capture appointment requests, and route urgent queries to a human staff member for confirmation.",
  },
  {
    question: "Can I send appointment reminders and health camp updates on WhatsApp?",
    answer:
      "Yes. You can send broadcasts for appointment reminders, vaccination drives, health camps, and wellness programs—using opt-in and structured messaging on WhatsApp Business API.",
  },
  {
    question: "How does WhatsApp analytics help a clinic?",
    answer:
      "Analytics helps you track response time, patient engagement, campaign reach, and appointment outcomes. This improves follow-ups, staff accountability, and reduces no-shows.",
  },
  {
    question: "Do clinics need WhatsApp Business API?",
    answer:
      "For multi-agent inbox, automation, templates, and scalable messaging with tracking, WhatsApp Business API is recommended. XploreByte is built around WhatsApp Business API workflows for healthcare.",
  },
] as const;

export default function WhatsAppCrmForClinicsAndDoctorsPage() {
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
                Patient Inquiries → Appointments → Follow-ups (on WhatsApp)
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                WhatsApp CRM for Clinics & Doctors
              </h1>

              <p className="mt-5 text-xl text-white/85">
                Manage patient inquiries, appointment bookings, follow-ups, and reports on WhatsApp with XploreByte — built for WhatsApp Business API.
              </p>

              <p className="mt-6 text-lg text-white/80">
                Stop losing patient inquiries in personal chats. With a Team Inbox, no-code automation, campaigns, and analytics, XploreByte helps clinics respond faster, reduce no-shows, and improve patient care coordination.
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
                Why clinics and doctors need WhatsApp CRM
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Clinics win on trust and responsiveness. Patients message for appointments, consultation fees, reports, and prescriptions. If replies are delayed—or the chat is lost—patients book elsewhere. WhatsApp CRM gives you a structured, compliant way to manage patient conversations like a real healthcare workflow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Missed patient calls",
                    body: "Inquiries get buried in personal chats and no one knows who responded or who is responsible for follow-up.",
                  },
                  {
                    title: "No-show appointments",
                    body: "No reminder system means patients forget appointments, wasting clinic slots and time.",
                  },
                  {
                    title: "Scattered patient chats",
                    body: "Reception, doctor, and assistant all handle patient messages separately with no shared context.",
                  },
                  {
                    title: "Slow follow-ups",
                    body: "No system to follow up on test results, prescription renewals, or post-consultation queries.",
                  },
                  {
                    title: "Manual campaign chaos",
                    body: "Health camps, vaccination drives, and wellness programs are sent manually with no tracking of reach or results.",
                  },
                  {
                    title: "No measurement",
                    body: "Teams don't know response time, patient engagement, or appointment conversion rates.",
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
                How XploreByte WhatsApp CRM works for clinics
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Team Inbox for reception + staff",
                    body: "Multiple staff members reply from one number with assignment, ownership, and shared patient context.",
                    link: "/whatsapp-team-inbox",
                    linkText: "Explore Team Inbox →",
                  },
                  {
                    title: "Patient context & tags",
                    body: "Keep patient history, tags, appointment status, and notes so your team replies with context and care.",
                    link: "/whatsapp-crm",
                    linkText: "Explore WhatsApp CRM →",
                  },
                  {
                    title: "No-code chatbot for FAQs",
                    body: "Auto-reply to clinic hours, fees, specialties, and capture appointment requests with structured workflows.",
                    link: "/whatsapp-chatbot-builder",
                    linkText: "Explore Chatbot Builder →",
                  },
                  {
                    title: "Campaigns for reminders & camps",
                    body: "Send appointment reminders, health camp invites, vaccination drives, and wellness programs with templates.",
                    link: "/whatsapp-campaigns",
                    linkText: "Explore WhatsApp Campaigns →",
                  },
                  {
                    title: "Analytics (response time, outcomes)",
                    body: "Track response speed, patient engagement, campaign reach, and what leads to confirmed appointments.",
                    link: "/whatsapp-analytics",
                    linkText: "Explore WhatsApp Analytics →",
                  },
                  {
                    title: "WhatsApp Business API foundation",
                    body: "Built on WhatsApp Business API for multi-agent workflows, templates, automation, and compliant messaging.",
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
                High-converting use cases for clinics
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                These are proven workflows clinics run daily. With XploreByte, the patient experience becomes structured, trackable, and faster.
              </p>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Appointment booking & reminders",
                    items: [
                      "Patient requests appointment for specific date",
                      "Bot collects preferred time and reason for visit",
                      "Staff confirms slot and sends confirmation",
                      "Automated reminder sent before appointment",
                    ],
                  },
                  {
                    title: "No-show reduction workflow",
                    items: [
                      "Day-before appointment reminder with quick replies",
                      "Easy reschedule option if patient cannot make it",
                      "Staff handles exceptions and confirms changes",
                      "Reduce no-shows and optimize clinic capacity",
                    ],
                  },
                  {
                    title: "Reports/prescription sharing + follow-up",
                    items: [
                      "Patient requests test reports or prescription renewal",
                      "Staff shares reports securely via WhatsApp",
                      "Follow-up message to check on recovery or next steps",
                      "Track patient engagement and outcomes",
                    ],
                  },
                  {
                    title: "Health camp / vaccination drive broadcast",
                    items: [
                      "Segment patients by age, condition, or location",
                      "Send health camp or vaccination drive invite",
                      "Route interested replies to Team Inbox",
                      "Track registrations and campaign reach",
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
                Benefits for clinic owners and doctors
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    More appointments:
                  </span>{" "}
                  Faster response + structured follow-ups increase patient conversions and bookings.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Fewer no-shows:
                  </span>{" "}
                  Automated reminders and easy reschedule options reduce missed appointments.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Team accountability:
                  </span>{" "}
                  Clear chat ownership and shared patient context in one inbox for reception + staff.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Better patient experience:
                  </span>{" "}
                  Replace scattered personal WhatsApp chats with a professional, trackable workflow.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Measurable outcomes:
                  </span>{" "}
                  Use analytics to improve response time, campaign reach, and appointment outcomes.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <section className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ready to run your clinic on WhatsApp — professionally?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Start a free trial or book a demo to see how WhatsApp CRM, Team Inbox, automation, campaigns, and analytics work together for clinics.
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
