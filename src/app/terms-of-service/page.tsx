"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Lock,
} from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Terms of <span className="text-[#11A944]">Service</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By
                using our platform, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#11A944]" />
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> January 15, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Agreement
              </h2>
              <p className="text-lg text-gray-600">
                These terms govern your use of our WhatsApp Business automation
                platform and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Service Terms
                </h3>
                <p className="text-gray-600 text-sm">
                  Clear terms for using our platform and services.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  User Rights
                </h3>
                <p className="text-gray-600 text-sm">
                  Your rights and responsibilities as a user of our platform.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Protection
                </h3>
                <p className="text-gray-600 text-sm">
                  How we protect your data and ensure compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    By accessing and using our services, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      You must be at least 18 years old to use our services
                    </li>
                    <li>
                      You agree to provide accurate and complete information
                    </li>
                    <li>
                      You are responsible for maintaining account security
                    </li>
                    <li>
                      You will not use our services for illegal activities
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#0296FE] rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Service Description
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    Our platform provides WhatsApp Business automation services
                    including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Automated message sending and responses</li>
                    <li>Customer engagement and support tools</li>
                    <li>Analytics and reporting features</li>
                    <li>Integration with third-party services</li>
                    <li>Template management and customization</li>
                    <li>User management and access controls</li>
                  </ul>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    User Responsibilities
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect WhatsApp's terms of service and policies</li>
                    <li>Not send spam or unsolicited messages</li>
                    <li>
                      Obtain proper consent before sending marketing messages
                    </li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Report any security breaches or suspicious activity</li>
                    <li>
                      Use the service only for legitimate business purposes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#EA1752] rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Prohibited Uses
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">You may not use our services for:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Illegal activities or violation of any laws</li>
                    <li>Sending spam, phishing, or malicious content</li>
                    <li>Harassment, abuse, or threatening behavior</li>
                    <li>Violation of intellectual property rights</li>
                    <li>
                      Attempting to gain unauthorized access to our systems
                    </li>
                    <li>
                      Interfering with the proper functioning of our services
                    </li>
                    <li>Collecting personal information without consent</li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Payment Terms
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Subscription Fees
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Subscription fees are billed in advance</li>
                      <li>
                        All fees are non-refundable unless otherwise stated
                      </li>
                      <li>Prices may change with 30 days notice</li>
                      <li>Late payments may result in service suspension</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cancellation
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>You may cancel your subscription at any time</li>
                      <li>
                        Cancellation takes effect at the end of the billing
                        period
                      </li>
                      <li>No refunds for partial months of service</li>
                      <li>
                        Data will be retained for 30 days after cancellation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    To the maximum extent permitted by law, XploreByte shall not
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including but not
                    limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Service interruptions or downtime</li>
                    <li>Third-party actions or content</li>
                    <li>User-generated content or communications</li>
                    <li>Force majeure events beyond our control</li>
                  </ul>
                </div>
              </div>

              {/* Termination */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Termination
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    Either party may terminate this agreement at any time:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Users may cancel their subscription at any time</li>
                    <li>We may suspend or terminate accounts for violations</li>
                    <li>Termination does not affect accrued obligations</li>
                    <li>
                      Data will be retained according to our data retention
                      policy
                    </li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Governing Law
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    These terms shall be governed by and construed in accordance
                    with the laws of the jurisdiction in which XploreByte
                    operates, without regard to conflict of law principles.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Any disputes shall be resolved through binding arbitration
                    </li>
                    <li>
                      Class action waivers apply where legally permissible
                    </li>
                    <li>Severability clause for invalid provisions</li>
                    <li>Entire agreement supersedes prior agreements</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Email:</strong> legal@xplorebyte.com
                    </p>
                    <p className="text-sm">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p className="text-sm">
                      <strong>Address:</strong> 123 Business Street, Suite 100,
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our legal team is available to answer any questions about these
              terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Contact Legal Team
              </a>
              <a
                href="/privacy-policy"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Privacy Policy
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
