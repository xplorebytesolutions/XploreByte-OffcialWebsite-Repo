"use client";


import {
  CheckCircle,
  AlertTriangle,
  Users,
  MessageCircle,
  Shield,
  Clock,
} from "lucide-react";

export default function BestPractices() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                WhatsApp Business{" "}
                <span className="text-[#11A944]">Best Practices</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Learn the essential best practices for successful WhatsApp
                Business automation and customer engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Essential Best Practices
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow these proven strategies to maximize your WhatsApp
                Business success and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Message Timing
                </h3>
                <p className="text-gray-600 mb-4">
                  Send messages at optimal times to maximize engagement and
                  response rates.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business hours: 9 AM - 6 PM</li>
                  <li>• Avoid weekends for non-urgent messages</li>
                  <li>• Consider time zones for global customers</li>
                  <li>• Test different times for your audience</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Message Content
                </h3>
                <p className="text-gray-600 mb-4">
                  Craft compelling messages that drive action and build
                  relationships.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Keep messages concise and clear</li>
                  <li>• Use personalization tokens</li>
                  <li>• Include clear call-to-actions</li>
                  <li>• Test different message formats</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Segmentation
                </h3>
                <p className="text-gray-600 mb-4">
                  Target the right customers with the right messages at the
                  right time.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Segment by behavior and preferences</li>
                  <li>• Use customer lifecycle stages</li>
                  <li>• Consider purchase history</li>
                  <li>• Track engagement patterns</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#EA1752] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Privacy & Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  Ensure compliance with WhatsApp policies and data protection
                  regulations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Obtain proper consent</li>
                  <li>• Respect opt-out requests</li>
                  <li>• Follow GDPR guidelines</li>
                  <li>• Maintain data security</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#7D47C4] rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Response Time
                </h3>
                <p className="text-gray-600 mb-4">
                  Maintain quick response times to keep customers engaged and
                  satisfied.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Aim for under 5 minutes</li>
                  <li>• Use automated responses</li>
                  <li>• Set clear expectations</li>
                  <li>• Monitor response metrics</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Error Handling
                </h3>
                <p className="text-gray-600 mb-4">
                  Implement robust error handling to ensure smooth customer
                  experiences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Monitor delivery failures</li>
                  <li>• Handle invalid numbers</li>
                  <li>• Provide fallback options</li>
                  <li>• Log and analyze errors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Do&apos;s and Don&apos;ts
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential guidelines to follow and common mistakes to avoid.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Do's */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Do&apos;s
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Personalize your messages</strong> - Use customer
                      names and relevant information
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Provide value</strong> - Share useful information,
                      offers, or updates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Respect opt-outs</strong> - Honor unsubscribe
                      requests immediately
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Test before sending</strong> - Always test your
                      campaigns on a small group first
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Monitor performance</strong> - Track metrics and
                      optimize based on results
                    </span>
                  </li>
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#EA1752] rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Don&apos;ts
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#EA1752] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Don&apos;t spam</strong> - Avoid sending too many
                      messages to the same customer
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#EA1752] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Don&apos;t ignore timing</strong> - Avoid sending
                      messages outside business hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#EA1752] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Don&apos;t use generic content</strong> - Avoid
                      one-size-fits-all messages
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#EA1752] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Don&apos;t neglect compliance</strong> - Always
                      follow WhatsApp policies and regulations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#EA1752] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Don&apos;t ignore feedback</strong> - Listen to
                      customer responses and adjust accordingly
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement Best Practices?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get expert guidance and support to implement these best practices
              in your WhatsApp Business strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Get Expert Consultation
              </a>
              <a
                href="/whatsapp-business"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Our Solutions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
