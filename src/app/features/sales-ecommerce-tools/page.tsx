"use client";

import { useState } from "react";


import DemoModal from "../../../components/DemoModal";
import SalesModal from "../../../components/SalesModal";
import {
  Users,
  ShoppingCart,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Target,
} from "lucide-react";

export default function SalesEcommerceTools() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
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
                  Sales &{" "}
                  <span className="text-[#11A944]">E-commerce Tools</span>
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  Team management & in-chat catalogs. Manage your sales team and
                  showcase products directly in WhatsApp conversations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsSalesModalOpen(true)}
                    className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors"
                  >
                    Talk to Sales
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">
                      Sales & E-commerce Dashboard
                    </p>
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
                Powerful Sales & E-commerce Features
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your sales team and drive
                e-commerce success through WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Team Management
                </h3>
                <p className="text-base text-gray-600">
                  Assign conversations, track performance, and manage your sales
                  team efficiently.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  In-Chat Catalogs
                </h3>
                <p className="text-base text-gray-600">
                  Showcase products directly in WhatsApp with rich media and
                  easy ordering.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sales Analytics
                </h3>
                <p className="text-base text-gray-600">
                  Track sales performance, conversion rates, and team
                  productivity in real-time.
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
                  Why Choose Our Sales Tools?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Seamless Team Collaboration
                      </h3>
                      <p className="text-base text-gray-600">
                        Assign conversations, share context, and collaborate in
                        real-time with your sales team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Direct Product Sales
                      </h3>
                      <p className="text-base text-gray-600">
                        Sell products directly through WhatsApp with integrated
                        catalogs and payment processing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Performance Tracking
                      </h3>
                      <p className="text-base text-gray-600">
                        Monitor sales metrics, team performance, and customer
                        satisfaction with detailed analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Sales Performance Dashboard</p>
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
              Ready to Boost Your Sales?
            </h2>
            <p className="text-base text-white/80 mb-8">
              Start using our powerful sales and e-commerce tools to drive more
              conversions through WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors">
                <a
                  href="https://app.xplorebyte.com/signup-for-trial"
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

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
