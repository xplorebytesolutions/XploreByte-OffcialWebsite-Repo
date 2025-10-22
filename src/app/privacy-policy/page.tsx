"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Privacy <span className="text-[#11A944]">Policy</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and
                protect your personal information.
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

        {/* Privacy Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Privacy Commitment
              </h2>
              <p className="text-lg text-gray-600">
                We are committed to protecting your privacy and ensuring the
                security of your personal information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Protection
                </h3>
                <p className="text-gray-600 text-sm">
                  We implement industry-standard security measures to protect
                  your data.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transparency
                </h3>
                <p className="text-gray-600 text-sm">
                  We clearly explain how we collect and use your information.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Your Control
                </h3>
                <p className="text-gray-600 text-sm">
                  You have control over your data and can request changes or
                  deletion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Information We Collect */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        Name and contact information (email, phone number)
                      </li>
                      <li>Company information and job title</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Usage Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Website usage and interaction data</li>
                      <li>Service usage patterns and preferences</li>
                      <li>Device and browser information</li>
                      <li>IP address and location data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#0296FE] rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Provide and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Develop new products and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Data Security
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure data storage and processing</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#EA1752] rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Your Rights
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccurate information</li>
                    <li>Right to delete your personal data</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    We use cookies and similar technologies to enhance your
                    experience on our website and to analyze usage patterns.
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Types of Cookies We Use
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand usage</li>
                      <li>Marketing cookies for personalized content</li>
                      <li>Preference cookies to remember your settings</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Email:</strong> privacy@xplorebyte.com
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
              Questions About Your Privacy?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We're here to help. Contact our privacy team for any questions or
              concerns about your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Request Data Access
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
