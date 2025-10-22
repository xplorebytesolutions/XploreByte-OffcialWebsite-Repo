"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Megaphone,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Bell,
} from "lucide-react";

export default function ProductUpdates() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                <span className="text-[#11A944]">Product</span> Updates
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Latest feature updates. Stay informed about new features,
                improvements, and enhancements to XploreByte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors">
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Roadmap
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover what&apos;s new in XploreByte and how it can improve
                your WhatsApp marketing.
              </p>
            </div>

            <div className="space-y-8">
              {/* Update 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#11A944]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#11A944] text-white text-sm font-medium rounded-full">
                        New Feature
                      </span>
                      <span className="text-sm text-gray-500">
                        December 15, 2024
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Advanced Analytics Dashboard
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We&apos;ve launched a comprehensive analytics dashboard
                      that provides deeper insights into your WhatsApp
                      campaigns, including real-time metrics, conversion
                      tracking, and performance analytics.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                      >
                        Learn More →
                      </a>
                      <span className="text-sm text-gray-500">
                        Available now
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Update 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-[#FFB800]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#FFB800] text-white text-sm font-medium rounded-full">
                        Enhancement
                      </span>
                      <span className="text-sm text-gray-500">
                        December 10, 2024
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Improved Message Templates
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Enhanced message template management with better approval
                      workflows, template versioning, and automated compliance
                      checking.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                      >
                        Learn More →
                      </a>
                      <span className="text-sm text-gray-500">
                        Available now
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Update 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0296FE]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#0296FE]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#0296FE] text-white text-sm font-medium rounded-full">
                        Improvement
                      </span>
                      <span className="text-sm text-gray-500">
                        December 5, 2024
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Enhanced API Performance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Significant improvements to API response times and
                      reliability, with 99.9% uptime guarantee and faster
                      message delivery.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                      >
                        Learn More →
                      </a>
                      <span className="text-sm text-gray-500">
                        Available now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What&apos;s Coming Next
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get a sneak peek at upcoming features and improvements
                we&apos;re working on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Q1 2025
                </h3>
                <p className="text-gray-600">
                  AI-powered message optimization and advanced automation
                  workflows.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Q2 2025
                </h3>
                <p className="text-gray-600">
                  Multi-channel messaging support and enhanced team
                  collaboration tools.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Q3 2025
                </h3>
                <p className="text-gray-600">
                  Advanced reporting suite and enterprise-grade security
                  features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our newsletter and be the first to know about new
              features and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors">
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Follow on Social
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
