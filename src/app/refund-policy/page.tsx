"use client";

import {
  Shield,
  Clock,
  CreditCard,
  AlertTriangle,
  UserCheck,
  Mail,
  FileText,
  Scale,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white">
        {/* Hero Section */}
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
                Refund <span className="text-[#11A944]">Policy</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our refund policy is designed to be fair and reasonable,
                ensuring that customers feel secure in their transactions with
                XploreByte.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Introduction */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#11A944]" />
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Policy Overview
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                This policy is designed to be fair and reasonable, ensuring that
                customers feel secure in their transactions with XploreByte,
                while also protecting the company from potential abuse of the
                refund process.
              </p>
            </div>
          </div>
        </section>

        {/* Refund Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Section 1: Trial Period */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Clock className="w-8 h-8 text-[#11A944] mr-3" />
                  1. Trial Period
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  XploreByte offers a 14-day free trial for new users, during
                  which they can explore the Basic Plan features available on
                  the platform along with a 14-day free trial of Chatbot Flows
                  (add-on). Since no credit card is required to start the trial
                  and users are not charged.
                </p>
              </div>

              {/* Section 2: Subscription Services */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <CreditCard className="w-8 h-8 text-[#11A944] mr-3" />
                  2. Subscription Services
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  Following the free trial, if a user subscribes to any of
                  XploreByte&#39;s paid services, they are ineligible to receive a
                  refund. The FREE trial is provided to ensure that the users
                  try out all the services and decide whether to continue with
                  the XploreByte platform. If the user feels unsatisfied, they
                  can cancel their FREE Trial anytime and they will not be
                  charged. If the user has subscribed to any XploreByte plan,
                  they are not eligible for a refund. They can cancel their
                  subscription to ensure they are not charged the next month.
                </p>
              </div>

              {/* Section 3: Non-Refundable Services */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <XCircle className="w-8 h-8 text-[#11A944] mr-3" />
                  3. Non-Refundable Services
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  All XploreByte services, such as the charges for an XploreByte
                  Plan, WhatsApp Conversation Credits (WCCs), Add-ons or any
                  third-party integrations, are non-refundable due to the nature
                  of the service and the costs incurred by XploreByte to provide
                  these services. This includes one-time Chatbot development and
                  other one-time setup payments.
                </p>
              </div>

              {/* Section 4: Technical Issues */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <AlertTriangle className="w-8 h-8 text-[#11A944] mr-3" />
                  4. Technical Issues
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  If a user experiences continuous technical issues that prevent
                  them from using the service effectively, and if these issues
                  are verified by XploreByte&#39;s support team, a partial or full
                  refund may be granted at XploreByte&#39;s discretion.
                </p>
              </div>

              {/* Section 5: Unauthorized Charges */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Shield className="w-8 h-8 text-[#11A944] mr-3" />
                  5. Unauthorized Charges
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  In the case of unauthorized or fraudulent charges, users
                  should contact XploreByte support immediately. If such claims
                  are verified, XploreByte will issue a full refund.
                </p>
              </div>

              {/* Section 6: Cancellation Policy */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <UserCheck className="w-8 h-8 text-[#11A944] mr-3" />
                  6. Cancellation Policy
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  A user may cancel their subscription at any time. However, the
                  cancellation will be effective at the end of the current
                  billing cycle, and users will not receive a refund for the
                  remaining period of the subscription, except under special
                  circumstances that will be reviewed on a case-by-case basis.
                </p>
              </div>

              {/* Section 7: Contact and Support */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Mail className="w-8 h-8 text-[#11A944] mr-3" />
                  7. Contact and Support
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  For any refund-related queries, users are encouraged to
                  contact XploreByte&#39;s customer support team, which is committed
                  to providing efficient and personalized assistance.
                </p>
              </div>

              {/* Section 8: Refund Process */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <FileText className="w-8 h-8 text-[#11A944] mr-3" />
                  8. Refund Process
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  To request a refund, users should write to us at{" "}
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="text-[#11A944] hover:underline"
                  >
                    support@xplorebyte.com
                  </a>
                  . The request must include the transaction details and a clear
                  explanation of the reason for the refund request.
                </p>
              </div>

              {/* Section 9: Policy Amendments */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <AlertTriangle className="w-8 h-8 text-[#11A944] mr-3" />
                  9. Policy Amendments
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  XploreByte reserves the right to modify this refund policy at
                  any time, and the changes will be effective immediately upon
                  posting the updated policy on the XploreByte website.
                </p>
              </div>

              {/* Section 10: Legal Compliance */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Scale className="w-8 h-8 text-[#11A944] mr-3" />
                  10. Legal Compliance
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  This refund policy complies with the local laws and
                  regulations where XploreByte operates. Users are also
                  encouraged to review the Terms of Service and Privacy Policy
                  for a comprehensive understanding of their rights and
                  obligations.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-[#11A944] mr-2" />
                    Need Help?
                  </h3>
                  <p className="text-gray-700 mb-4 text-base">
                    If you have any questions about our refund policy or need
                    assistance with a refund request, please contact our support
                    team:
                  </p>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#11A944]" />
                    <a
                      href="mailto:support@xplorebyte.com"
                      className="text-[#11A944] hover:underline font-medium"
                    >
                      support@xplorebyte.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
