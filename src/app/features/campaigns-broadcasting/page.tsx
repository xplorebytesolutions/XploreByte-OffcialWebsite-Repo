"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import DemoModal from "../../../components/DemoModal";
import {
  Megaphone,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
} from "lucide-react";

export default function CampaignsBroadcasting() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                  <span className="text-[#11A944]">Campaigns</span> &
                  Broadcasting
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Bulk messaging & retargeting campaigns. Send targeted messages
                  to thousands of customers with precision and personalization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors">
                    Launch Campaign
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                    View Templates
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Megaphone className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Campaign Dashboard Preview</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Campaign Tools
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Create, manage, and optimize your WhatsApp marketing campaigns
                with advanced targeting and analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bulk Messaging
                </h3>
                <p className="text-gray-600">
                  Send personalized messages to thousands of contacts with
                  advanced segmentation and scheduling.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Targeting
                </h3>
                <p className="text-gray-600">
                  Advanced audience segmentation based on behavior,
                  demographics, and engagement history.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Campaign Analytics
                </h3>
                <p className="text-gray-600">
                  Track delivery rates, open rates, click-through rates, and
                  conversion metrics in real-time.
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Campaign Platform?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        High Delivery Rates
                      </h3>
                      <p className="text-gray-600">
                        Optimized delivery infrastructure ensures your messages
                        reach customers reliably and quickly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Personalization at Scale
                      </h3>
                      <p className="text-gray-600">
                        Dynamic content and personalized messaging that
                        resonates with each individual customer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Compliance Ready
                      </h3>
                      <p className="text-gray-600">
                        Built-in compliance tools to ensure your campaigns meet
                        WhatsApp Business API requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Campaign Analytics Preview</p>
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
              Ready to Launch Your First Campaign?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Start reaching your customers with targeted, personalized WhatsApp
              messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors">
                <a
                  href="/start-free-trial"
                  className="text-white hover:underline"
                >
                  Start Free Trial
                </a>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
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

      <Footer />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
