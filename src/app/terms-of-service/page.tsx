"use client";

import type { Metadata } from "next";
import Link from "next/link";
 

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
        {/* Hero Section (unchanged) */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="font-bold text-white mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                Terms of <span className="text-[#11A944]">Use</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                This Terms of Use is a binding legal agreement between you and
                XploreByte Solutions. Please read these terms carefully before
                using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Last updated (right-aligned, no box) */}
        <section className="pt-6 pb-0 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-right text-sm font-semibold text-gray-700">Last updated&nbsp;&nbsp;01-10-2025</p>
          </div>
        </section>

        {/* Agreement Overview */}
        <section className="pt-8 pb-4 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2
                className="font-semibold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.25rem",
                  lineHeight: "1.2",
                }}
              >
                Agreement Overview
              </h2>
              <p className="text-gray-700 leading-normal text-base mb-3">
                These Terms &amp; Conditions (“<strong>Terms</strong>”) are a binding agreement between
                <strong> XploreByte Solutions</strong> (“<strong>XploreByte</strong>”, “we”, “us”, “our”) and
                the business entity or person accepting them (“<strong>Customer</strong>”, “you”). By creating an
                account or using the Service, you agree to these Terms. If you use the Service on behalf of a
                company, you represent that you have authority to bind that company.
              </p>
              <p className="text-gray-700 leading-normal text-base">
                “<strong>Service</strong>” means the XploreByte software-as-a-service platform, our Site (
                <a className="text-[#11A944] hover:underline" href="https://xplorebyte.com">https://xplorebyte.com</a>
                ), and related features including integrations with the <strong>WhatsApp Business (Cloud) API</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pt-8 pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* 1. Definitions */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  1) Definitions
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    <strong>Customer Data</strong>: data you submit or generate
                    in the Service (contacts, templates, media, logs).
                  </p>
                  <p>
                    <strong>WhatsApp Data</strong>: data processed via the
                    WhatsApp Cloud API (WABA ID, <code>phone_number_id</code>,
                    template metadata, delivery/read events).
                  </p>
                  <p>
                    <strong>WABA</strong>: WhatsApp Business Account. &nbsp;{" "}
                    <strong>Order</strong>: any online checkout or SOW
                    referencing these Terms.
                  </p>
                  <p>
                    <strong>Documentation</strong>: help docs, onboarding
                    guides, and API references we publish.
                  </p>
                </div>
              </div>

              {/* 2. Service & Meta Dependencies */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  2) The Service; WhatsApp/Meta Dependencies
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    XploreByte provides tools to connect a WABA, manage
                    templates, send messages through the WhatsApp Cloud API,
                    receive/process webhooks, and analyze performance.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>Onboarding</strong>: Embedded Signup (ESU) or
                      Manual connection of existing WABA/number.
                    </li>
                    <li>
                      <strong>External control</strong>: Meta/WhatsApp controls
                      template approvals, quality ratings, throughput,
                      conversation categories/prices, and the green tick. We
                      cannot guarantee approvals or specific performance.
                    </li>
                    <li>
                      <strong>Changes</strong>: We may modify or discontinue
                      features for stability, security, or compliance (e.g., to
                      address API/policy changes by Meta). Material changes will
                      be communicated where required.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Accounts & Eligibility */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  3) Accounts & Eligibility
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    You must be 18+, provide accurate information, keep
                    credentials confidential, and ensure only authorized
                    personnel access the account. You are responsible for
                    activities under your account.
                  </p>
                </div>
              </div>

              {/* 4. Responsibilities & Acceptable Use */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  4) Your Responsibilities; Acceptable Use
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      Obtain/document valid <strong>opt-in</strong> for WhatsApp
                      messaging and honor opt-out.
                    </li>
                    <li>
                      Ensure your{" "}
                      <strong>
                        content, templates, media, and contact lists
                      </strong>{" "}
                      comply with law and WhatsApp/Meta policies.
                    </li>
                    <li>
                      No impersonation, spam, illegal, harmful, or infringing
                      content.
                    </li>
                    <li>
                      No attempts to bypass quotas,{" "}
                      <strong>API rate limits</strong>, or platform
                      restrictions; no probing/scanning or reverse engineering
                      except as allowed by law.
                    </li>
                    <li>No emergency or life-critical usage.</li>
                  </ul>
                  <p>
                    We may throttle or suspend usage to protect platform
                    stability or enforce limits.
                  </p>
                </div>
              </div>

              {/* 5. License */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  5) License
                </h2>
                <p className="text-gray-700 text-base">
                  Subject to your compliance with these Terms, we grant you a
                  limited, non-exclusive, non-transferable, non-sublicensable,
                  revocable license to access and use the Service during your
                  subscription for your internal business purposes.
                </p>
              </div>

              {/* 6. Fees, Taxes, Credits, Refunds */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  6) Plans, Fees, Taxes, Credits, Refunds
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    Fees and plan limits are shown on the Site or in your Order.
                    You authorize recurring charges to your payment method.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>Taxes &amp; pass-throughs</strong>: You are
                      responsible for taxes, carrier charges, and Meta
                      conversation charges unless stated otherwise.
                    </li>
                    <li>
                      <strong>Changes</strong>: We may update plan features and
                      pricing prospectively; notice provided where required.
                    </li>
                    <li>
                      <strong>Late payment</strong>: Overdue balances may incur
                      interest, collection costs, and/or suspension.
                    </li>
                    <li>
                      <strong>Credits</strong>: Promotional credits/trial
                      allowances expire as stated and have no cash value.
                    </li>
                    <li>
                      <strong>Refunds</strong>: Except where required by law,
                      fees are non-refundable.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 7. Trials & Betas */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  7) Trials, Betas, Pre-release
                </h2>
                <p className="text-gray-700 text-base">
                  Trials/betas are provided <strong>AS IS</strong>, may be
                  limited or discontinued, and may not be suitable for
                  production.
                </p>
              </div>

              {/* 8. Data Protection & Privacy */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  8) Data Protection & Privacy
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    Our Privacy Policy governs our handling of personal data:{" "}
                    <a
                      className="text-[#11A944] hover:underline"
                      href="https://xplorebyte.com/privacy"
                    >
                      https://xplorebyte.com/privacy
                    </a>
                    .
                  </p>
                  <p>
                    <strong>Roles</strong>: For your end-user data, you are the
                    controller and we process on your instructions; for our own
                    operations (billing, security, analytics), we act as an
                    independent controller.
                  </p>
                  <p>
                    <strong>DPA</strong>: Our Data Processing Addendum
                    (sub-processors, SCCs, security, rights assistance,
                    deletion/return) is available on request at{" "}
                    <a
                      className="text-[#11A944] hover:underline"
                      href="mailto:support@xplorebyte.com"
                    >
                      support@xplorebyte.com
                    </a>
                    . Sub-processors list:{" "}
                    <a
                      className="text-[#11A944] hover:underline"
                      href="https://xplorebyte.com/subprocessors"
                    >
                      /subprocessors
                    </a>
                    . Cookies:{" "}
                    <a
                      className="text-[#11A944] hover:underline"
                      href="https://xplorebyte.com/cookies"
                    >
                      /cookies
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* 9. IP; Feedback */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  9) Intellectual Property; Feedback
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    We own the Service and related IP. You own your Customer
                    Data and marks. You grant us a limited license to host,
                    process, transmit, display, and create necessary technical
                    copies of your content to provide and improve the Service.
                  </p>
                  <p>
                    <strong>Feedback</strong>: If you provide feedback, you
                    grant us a perpetual, irrevocable, royalty-free license to
                    use it without restriction.
                  </p>
                </div>
              </div>

              {/* 10. Confidentiality */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  10) Confidentiality
                </h2>
                <p className="text-gray-700 text-base">
                  Each party will protect the other’s Confidential Information
                  and use it only to perform under these Terms. Exceptions apply
                  to information that is public through no fault, independently
                  developed, or lawfully received from a third party.
                </p>
              </div>

              {/* 11. APIs, Rate Limits & Webhooks */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  11) APIs, Rate Limits & Webhooks
                </h2>
                <p className="text-gray-700 text-base">
                  We may publish API rate limits and concurrency caps; do not
                  exceed them. You are responsible for reliable webhooks
                  (acknowledge quickly, implement retries, secure endpoints).
                  Limits may change for security or provider reasons.
                </p>
              </div>

              {/* 12. Support & Availability */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  12) Support & Availability
                </h2>
                <p className="text-gray-700 text-base">
                  We aim for high availability but do not guarantee
                  uninterrupted service. Maintenance, provider incidents (e.g.,
                  Meta outages), or policy changes may impact throughput or
                  features. Support level depends on your plan; premium SLAs may
                  require a separate Order.
                </p>
              </div>

              {/* 13. Security; Incidents */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  13) Security; Incidents
                </h2>
                <p className="text-gray-700 text-base">
                  We implement industry-standard safeguards (encryption in
                  transit, least-privilege access, secret management, auditing).
                  If we discover a security incident affecting your data, we
                  will investigate, mitigate, and notify you and/or authorities
                  as required by law and our agreements.
                </p>
              </div>

              {/* 14. Suspension & Termination */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  14) Suspension & Termination
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    We may suspend or terminate access for: (a) material breach
                    of these Terms or law/policies; (b) security risk; (c)
                    non-payment; or (d) discontinuation of the Service. You may
                    terminate per your plan at any time.
                  </p>
                  <p>
                    Upon termination: access ceases; we will delete/return
                    Customer Data per the Privacy Policy/DPA and your
                    instructions (subject to legal retention); accrued fees
                    remain due.
                  </p>
                </div>
              </div>

              {/* 15. Disclaimers */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  15) Disclaimers
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-gray-700 font-semibold text-base">
                    THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” WE
                    DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                    NON-INFRINGEMENT. WE DO NOT CONTROL OR GUARANTEE
                    META/WHATSAPP APPROVALS, QUALITY RATINGS, PRICING, OR
                    THROUGHPUT.
                  </p>
                </div>
              </div>

              {/* 16. Limitation of Liability */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  16) Limitation of Liability
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 text-base">
                    <li>
                      We are not liable for indirect, incidental, special,
                      consequential, exemplary, or punitive damages, or for lost
                      profits/revenue, data loss, or business interruption.
                    </li>
                    <li>
                      Our aggregate liability for all claims in any 12-month
                      period will not exceed the fees you paid for the Service
                      in that period (or USD 100 if no fees were paid), to the
                      maximum extent permitted by law.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 17. Indemnification */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  17) Indemnification
                </h2>
                <p className="text-gray-700 text-base">
                  You will defend, indemnify, and hold harmless XploreByte and
                  its affiliates, officers, directors, and employees from
                  claims, damages, liabilities, costs, and expenses (including
                  reasonable legal fees) arising from (a) your content or
                  Customer Data; (b) your unlawful use of the Service; or (c)
                  your breach of these Terms or applicable law/policy.
                </p>
              </div>

              {/* 18. Export/Sanctions; Anti-Bribery; Publicity */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  18) Compliance & Publicity
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    <strong>Export control &amp; sanctions</strong>: You are not
                    on any restricted list and will not use the Service in
                    violation of export/sanctions laws. We may restrict access
                    where required by law or platform policy.
                  </p>
                  <p>
                    <strong>Anti-bribery/anti-corruption</strong>: You will
                    comply with applicable anti-bribery laws.
                  </p>
                  <p>
                    <strong>Publicity</strong>: Unless you opt out via{" "}
                    <a
                      className="text-[#11A944] hover:underline"
                      href="mailto:support@xplorebyte.com"
                    >
                      support@xplorebyte.com
                    </a>
                    , you grant us the right to use your name and logo to
                    identify you as a customer.
                  </p>
                </div>
              </div>

              {/* 19. Force Majeure; Order of Precedence; Assignment; Notices; Misc */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  19) General Terms
                </h2>
                <div className="space-y-3 text-gray-700 text-base">
                  <p>
                    <strong>Force majeure</strong>: Neither party is liable for
                    delays/failures due to events beyond reasonable control
                    (e.g., telecom failure, DoS attacks, acts of God, war,
                    government action, changes to third-party platforms like
                    Meta/WhatsApp). Payment obligations are excluded.
                  </p>
                  <p>
                    <strong>Order of precedence</strong>: If there’s a conflict,
                    the following governs: (1) Order (commercial/pricing
                    specifics), (2) DPA (data processing), then (3) these Terms.
                  </p>
                  <p>
                    <strong>Assignment</strong>: You may not assign without our
                    consent (not unreasonably withheld). We may assign to an
                    affiliate or in connection with merger, acquisition, or
                    asset sale.
                  </p>
                  <p>
                    <strong>Notices</strong>: Legal notices to XploreByte must
                    be emailed to{" "}
                    <a
                      className="text-[#11A944] hover:underline"
                      href="mailto:support@xplorebyte.com"
                    >
                      support@xplorebyte.com
                    </a>{" "}
                    and sent to the postal address below. We may notify you via
                    email to your admin address or through the Service.
                  </p>
                  <p>
                    <strong>Relationship; No waiver; Severability</strong>:
                    Parties are independent contractors; no waiver is
                    continuing; invalid terms are modified to the minimum extent
                    necessary; the rest remains effective.
                  </p>
                  <p>
                    <strong>Entire agreement</strong>: These Terms (plus
                    referenced documents) are the entire agreement and supersede
                    prior statements on the subject.
                  </p>
                </div>
              </div>

              {/* 20. Governing Law & Venue */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  20) Governing Law & Venue
                </h2>
                <p className="text-gray-700 text-base">
                  These Terms are governed by the laws of <strong>India</strong>
                  , excluding conflict-of-law rules. Courts located in{" "}
                  <strong>Bhiwani, Haryana, India</strong> (or the nearest
                  competent courts in Haryana) have exclusive jurisdiction,
                  unless mandatory law provides otherwise.
                </p>
              </div>

              {/* 21. Contact */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  21) Contact
                </h2>
                <div className="space-y-2 text-gray-700 text-base">
                  <p className="font-semibold">XploreByte Solutions</p>
                  <p>
                    HNo 279, WardNo 5, Bawani Khera, Bhiwani, Haryana – 127032
                  </p>
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="text-[#11A944] hover:underline"
                  >
                    support@xplorebyte.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
