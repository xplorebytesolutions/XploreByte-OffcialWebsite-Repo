"use client";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="font-bold text-white mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                Privacy <span className="text-[#11A944]">Notice</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Learn how XploreByte handles your data and protects your
                privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Last updated (right-aligned, no box) */}
        <section className="pt-6 pb-0 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-right text-sm font-semibold text-gray-700">
              Last updated&nbsp;&nbsp;01-10-2025
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Overview (moved from hero) */}
              <p className="text-gray-700 leading-relaxed text-base mb-8">
                This privacy notice for <strong>XploreByte Solutions</strong>{" "}
                (&quot;XploreByte&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) explains how and why we
                <em> collect, store, use, and disclose</em>{" "}
                (&quot;process&quot;) personal information when you use{" "}
                <a
                  href="https://xplorebyte.com"
                  className="text-[#11A944] hover:underline"
                >
                  https://xplorebyte.com
                </a>
                and the XploreByte SaaS, including features powered by the{" "}
                <strong>WhatsApp Business (Cloud) API</strong>
                (the &quot;Service&quot;).
              </p>

              {/* Scope */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  1) Scope
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  This Privacy Notice explains how we collect, use, disclose,
                  and protect personal information when you visit the Site or
                  use the Service, including our integrations with the WhatsApp
                  Business (Cloud) API provided by Meta Platforms
                  (&quot;WhatsApp&quot;). In this notice, &quot;
                  <strong>process</strong>&quot; means any operation on personal
                  information, such as collect, store, use, disclose, or delete.
                </p>
              </div>

              {/* Definitions */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  2) Definitions
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base">
                  <li>
                    <strong>Personal data</strong>: information that identifies
                    or can reasonably be linked to an identifiable individual.
                  </li>
                  <li>
                    <strong>Controller</strong>: determines purposes and means
                    of processing personal data; <strong>Processor</strong>:
                    processes personal data on the controller&apos;s
                    instructions.
                  </li>
                  <li>
                    <strong>Customer Data</strong>: personal data you submit to
                    the Service (e.g., contacts, templates, logs).
                  </li>
                  <li>
                    <strong>WhatsApp Data</strong>: data processed via the
                    WhatsApp Cloud API (e.g., WABA ID, phone_number_id,
                    delivery/read events).
                  </li>
                </ul>
              </div>

              {/* Roles */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  3) Roles (Controller vs. Processor)
                </h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 text-base">
                  <li>
                    For data about your end-users/contacts (e.g., WhatsApp
                    recipients) that you upload or generate through the Service,{" "}
                    <strong>you are the data controller</strong> and XploreByte
                    acts as your <strong>data processor</strong>, processing
                    personal data only on your documented instructions to
                    provide the Service.
                  </li>
                  <li>
                    For our own operations (account administration, billing,
                    security, analytics, and service communications to admins),{" "}
                    <strong>XploreByte is an independent controller</strong>.
                  </li>
                </ul>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  4) Information We Collect
                </h2>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    A. Information you provide
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-2">
                    Account details (name, email, phone, username, role),
                    business info (business name, country), billing details
                    (address, tax IDs, payment status; full card data handled by
                    payment processors), content you submit (message templates,
                    campaigns, media), configuration settings, and support
                    requests.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    B. Automatic collection
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    IP address, device/browser type, OS, pages viewed,
                    timestamps, referral URLs, product usage events, crash/error
                    logs, and security signals (e.g., rate-limit counters).
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    C. From third parties
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Identity providers (e.g., Facebook Login), service partners
                    and sub-processors (hosting, analytics, email, payments).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    D. WhatsApp-specific data (Cloud API)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base">
                    <li>
                      <strong>IDs & configuration</strong>: WABA ID,
                      phone_number_id, display phone number, template metadata
                      (name, language, status), and account/quality/tier signals
                      exposed by the API.
                    </li>
                    <li>
                      <strong>Events & metadata</strong>: message IDs,
                      timestamps, delivery/read statuses, error codes, provider
                      responses via webhooks.
                    </li>
                    <li>
                      <strong>Content/media</strong>:{" "}
                      <em>not stored by default</em>. If you enable features
                      that require storing message content or media (e.g.,
                      searchable logs or previews), we process that content
                      strictly for those features.
                    </li>
                  </ul>
                </div>
              </div>

              {/* How We Use */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  5) How We Use Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base">
                  <li>
                    Provide and maintain the Service (auth, account management,
                    messaging via Cloud API, webhooks, results).
                  </li>
                  <li>
                    Product operations and improvement (analytics, feature
                    development, quality monitoring, troubleshooting, support).
                  </li>
                  <li>
                    Security and abuse prevention (fraud detection, rate
                    limiting, logging, incident response).
                  </li>
                  <li>
                    Legal and compliance (tax, accounting, audits, enforcing
                    terms, responding to lawful requests).
                  </li>
                  <li>
                    Communications (service announcements, onboarding, support
                    replies; marketing only with consent where required).
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-base mt-3">
                  <strong>Legal bases (GDPR/UK GDPR)</strong>: performance of a
                  contract; legitimate interests (security, improvement);
                  consent (where required); and legal obligations.
                </p>
              </div>

              {/* Processing Summary Table */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  6) Processing Summary
                </h2>
                <div className="overflow-x-auto rounded-lg ring-1 ring-gray-200 shadow-sm">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
                      <tr className="text-left">
                        <th
                          scope="col"
                          className="px-4 py-3 font-semibold uppercase tracking-wide text-xs sm:text-[13px]"
                        >
                          Data category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 font-semibold uppercase tracking-wide text-xs sm:text-[13px]"
                        >
                          Purpose
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 font-semibold uppercase tracking-wide text-xs sm:text-[13px]"
                        >
                          Legal basis
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 font-semibold uppercase tracking-wide text-xs sm:text-[13px]"
                        >
                          Source
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 font-semibold uppercase tracking-wide text-xs sm:text-[13px]"
                        >
                          Sharing
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 font-semibold uppercase tracking-wide text-xs sm:text-[13px]"
                        >
                          Retention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-3">
                          WABA ID, phone_number_id, display number, template
                          metadata
                        </td>
                        <td className="p-3">
                          Connect WhatsApp, manage templates, subscribe
                          webhooks, enable messaging
                        </td>
                        <td className="p-3">
                          Contract; legitimate interests (security)
                        </td>
                        <td className="p-3">Customer (ESU/manual)</td>
                        <td className="p-3">
                          Meta (Cloud API), hosting/logging
                        </td>
                        <td className="p-3">While account is active</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Message metadata (IDs, timestamps, delivery/read,
                          error codes)
                        </td>
                        <td className="p-3">Logs, analytics, support</td>
                        <td className="p-3">Contract; legitimate interests</td>
                        <td className="p-3">Webhooks/API</td>
                        <td className="p-3">Hosting/logging</td>
                        <td className="p-3">
                          <strong>180 days</strong> (configurable)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Message content/media (only if enabled)
                        </td>
                        <td className="p-3">Searchable logs/previews</td>
                        <td className="p-3">
                          Contract; consent where required
                        </td>
                        <td className="p-3">Customer/API</td>
                        <td className="p-3">Storage provider</td>
                        <td className="p-3">
                          <strong>30–90 days</strong> (configurable)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Account/admin &amp; billing</td>
                        <td className="p-3">Auth, billing, support</td>
                        <td className="p-3">Contract; legal obligation</td>
                        <td className="p-3">Customer</td>
                        <td className="p-3">Payment/email providers</td>
                        <td className="p-3">As required by law/contract</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Device/usage &amp; security signals
                        </td>
                        <td className="p-3">
                          Reliability, abuse prevention, improvement
                        </td>
                        <td className="p-3">Legitimate interests</td>
                        <td className="p-3">Automatic</td>
                        <td className="p-3">Logging/analytics</td>
                        <td className="p-3">12–24 months (aggregate)</td>
                      </tr>
                      <tr>
                        <td className="p-3">Backups</td>
                        <td className="p-3">
                          Disaster recovery/business continuity
                        </td>
                        <td className="p-3">Legitimate interests; legal</td>
                        <td className="p-3">System</td>
                        <td className="p-3">Hosting</td>
                        <td className="p-3">≤ 30 days rolling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sharing & Third parties */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  7) How We Share Information
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We do <strong>not sell or share</strong> personal information
                  as defined by CPRA. We may disclose personal information to
                  service providers (hosting, storage, logging, analytics, email
                  delivery, payments, and Meta/WhatsApp to operate the Cloud
                  API), for business transfers (with safeguards), and for
                  legal/compliance where required.
                </p>
                <p className="text-gray-700 leading-relaxed text-base mt-3">
                  <strong>Government and law-enforcement requests.</strong> We
                  assess requests under applicable law, require valid legal
                  process, limit scope, and notify affected customers where
                  legally permitted before producing data.
                </p>

                <p className="text-gray-700 leading-relaxed text-base mt-3">
                  <strong>Third-party sites and plugins.</strong> The Service
                  and Site may link to third-party websites, services, or social
                  plugins. Their practices are governed by their own policies.
                </p>
              </div>

              {/* Transfers */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  8) International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We may process data globally. Where required (e.g., EEA/UK),
                  we rely on appropriate safeguards such as Standard Contractual
                  Clauses (SCCs) and implement technical and organizational
                  measures to protect personal data transferred internationally.
                </p>
              </div>

              {/* Retention */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  9) Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  Defaults (configurable where supported): IDs &amp; settings —
                  while account is active; message metadata &amp; webhook logs —{" "}
                  <strong>180 days</strong>; content/media (if enabled) —{" "}
                  <strong>30–90 days</strong>; backups — up to{" "}
                  <strong>30 days</strong> rolling. We may retain limited data
                  to comply with law, resolve disputes, or enforce agreements.
                </p>
              </div>

              {/* Security */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  10) Security & Incidents
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We use industry-standard administrative, technical, and
                  physical safeguards, including encryption in transit, access
                  controls, secret management, and auditing. If we become aware
                  of a breach of security leading to accidental or unlawful
                  destruction, loss, alteration, unauthorized disclosure of, or
                  access to personal data, we will investigate, mitigate, and
                  notify customers and/or regulators as required by law and our
                  agreements.
                </p>
              </div>

              {/* Automated Decision-Making */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  11) Automated Decision-Making
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We do not engage in automated decision-making that produces
                  legal or similarly significant effects. Limited automation is
                  used for abuse/spam detection and rate-limiting.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  12) Your Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  You are responsible for obtaining and recording valid{" "}
                  <strong>opt-in</strong> for WhatsApp messaging and honoring
                  opt-out requests; ensuring templates and content comply with
                  WhatsApp/Meta policies and applicable laws; and configuring
                  retention settings that meet your compliance needs.
                </p>
              </div>

              {/* Rights */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  13) Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong>Global:</strong> Subject to law, you may request
                  access, correction, deletion, portability, restriction, or
                  objection by contacting us (see Contact). We may request
                  information to verify your identity and authority. We aim to
                  respond within <strong>30 days</strong> (extendable where
                  permitted).
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong>California (CCPA/CPRA):</strong> We do not “sell” or
                  “share” personal information. California residents may request
                  to know, delete, and correct personal information and will not
                  be discriminated against for exercising their rights.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong>India (DPDP Act, 2023):</strong> You may raise
                  grievances to our Grievance Officer (details below). We aim to
                  acknowledge and resolve grievances within{" "}
                  <strong>15 days</strong>.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  14) Cookies and Similar Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We use cookies and similar technologies for login sessions,
                  preferences, analytics, and security. Most browsers allow you
                  to block or delete cookies; some features may not function
                  without them. Where required (e.g., EEA/UK), a cookie
                  banner/manager will present choices for non-essential cookies.
                  See our{" "}
                  <a
                    href="https://xplorebyte.com/cookies"
                    className="text-[#11A944] hover:underline"
                  >
                    Cookie Notice
                  </a>
                  .
                </p>
              </div>

              {/* Marketing & DNT */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  15) Marketing Communications & Do-Not-Track
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We may send admins product updates or newsletters. You can opt
                  out at any time via the unsubscribe link in those emails.
                  Service and transactional messages (e.g., security, billing)
                  are not marketing and may still be sent.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  The Site does not respond to Do-Not-Track (DNT) signals due to
                  the absence of an industry standard.
                </p>
              </div>

              {/* Children */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  16) Children’s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  The Service is not intended for individuals under 18. We do
                  not knowingly collect personal data from children. If we learn
                  we have collected such data, we will delete it.
                </p>
              </div>

              {/* Changes */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  17) Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We may update this Policy from time to time. We will post the
                  updated version with a new Effective date and, where legally
                  required, provide additional notice.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  18) Contact
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong>XploreByte Solutions</strong>
                  <br />
                  <strong>Address:</strong> HNo 279, WardNo 5, Bawani Khera,
                  Bhiwani, Haryana – 127032
                  <br />
                  <strong>Support:</strong>{" "}
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="text-[#11A944] hover:underline"
                  >
                    support@xplorebyte.com
                  </a>
                </p>
              </div>

              {/* DPA */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  19) Data Processing Addendum (DPA)
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  For customers subject to GDPR/UK GDPR/CCPA or enterprise
                  requirements, XploreByte offers a Data Processing Addendum
                  that forms part of the agreement and governs our processing as
                  a processor, including sub-processors, international transfers
                  (SCCs), security measures, assistance with data subject
                  requests, and deletion/return of data on termination. Request
                  a copy at{" "}
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="text-[#11A944] hover:underline"
                  >
                    support@xplorebyte.com
                  </a>
                  .
                </p>
              </div>

              {/* WhatsApp Reminder */}
              <div className="mb-4">
                <h2
                  className="font-semibold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  WhatsApp-Specific Reminder
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  By connecting your WABA and phone number(s), you instruct
                  XploreByte to process WhatsApp data on your behalf (including{" "}
                  <code>waba_id</code>, <code>phone_number_id</code>, template
                  metadata, and webhook events). Storage of message
                  content/media is <strong>off by default</strong>
                  and only enabled if you turn on features that require it. You
                  remain responsible for end-user consent, template compliance,
                  and lawful messaging.
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
