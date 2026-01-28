"use client";

import { useState } from "react";
import Link from "next/link";


import DemoModal from "../../../components/DemoModal";
import {
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PieChart,
  Activity,
  Eye,
} from "lucide-react";

export default function AnalyticsReporting() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-extrabold text-white mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <span className="text-[#11A944]">Advanced Analytics</span> &{" "}
                  Reports
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  Real-time ROI & performance tracking. Get deep insights into
                  your WhatsApp campaigns and team performance.
                </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="https://app.xplorebyte.com/signup-for-trial"
                      className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors"
                    >
                      View Analytics
                      <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Generate Report
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Comprehensive Analytics Features
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Track every metric that matters with our powerful analytics and
                reporting suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-Time Metrics
                </h3>
                <p className="text-base text-gray-600">
                  Monitor campaign performance, response times, and engagement
                  rates in real-time.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ROI Tracking
                </h3>
                <p className="text-base text-gray-600">
                  Measure return on investment with detailed
                  cost-per-acquisition and revenue tracking.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Team Performance
                </h3>
                <p className="text-base text-gray-600">
                  Track agent productivity, response times, and customer
                  satisfaction scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2rem",
                    lineHeight: "1.2",
                  }}
                >
                  Why Choose Our Analytics?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Actionable Insights
                      </h3>
                      <p className="text-base text-gray-600">
                        Get clear, actionable insights that help you optimize
                        your WhatsApp campaigns and improve performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Custom Reports
                      </h3>
                      <p className="text-base text-gray-600">
                        Create custom reports and dashboards tailored to your
                        business needs and KPIs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Automated Alerts
                      </h3>
                      <p className="text-base text-gray-600">
                        Set up automated alerts for important metrics and get
                        notified when action is needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Performance Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-white mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Track Your Success?
            </h2>
            <p className="text-base text-white/80 mb-8">
              Start using our powerful analytics to optimize your WhatsApp
              campaigns and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.xplorebyte.com/signup-for-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
