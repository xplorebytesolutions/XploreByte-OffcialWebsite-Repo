"use client";

import { useState } from "react";
import NextLink from "next/link";
import Hero from "../components/Hero";
import HeroFeatureStrip from "../components/HeroFeatureStrip";
import IndustriesGrid from "../components/whatsappBusiness/IndustriesGrid";
import WhyWhatsAppSection from "../components/WhyWhatsAppSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import SalesModal from "../components/SalesModal";
import {
  ShoppingCart,
  Rocket,
  Building2,
  Bot,
  Clock,
  Users,
  Settings,
  Link,
  Infinity,
} from "lucide-react";

// import DigitalSerenity from "../components/DigitalSerenity";

export default function Home() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col relative overflow-hidden bg-white">
        <div className="flex-1 flex flex-col justify-center">
          <Hero />
        </div>
        <HeroFeatureStrip />
      </div>

      <main className="flex flex-col">
        <IndustriesGrid />
        <WhyWhatsAppSection />

        {/* Features Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                All the features you need, all in one place
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to turn WhatsApp into your most powerful
                business tool. From intelligent campaigns to automated
                conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Click to WhatsApp Ads */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/Click-to-WhatsApp-Ads.webp"
                    alt="Click to WhatsApp Ads - Mobile ad to chat flow"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Click to WhatsApp Ads
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Turn ad clicks into revenue-driving conversations
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Capture verified leads from Meta and Google, engage them
                    instantly, and send conversion signals back to improve ad
                    targeting and ROAS.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More →
                    </span>
                  </div>
                </div>
              </div>

              {/* Broadcast & Bulk Messages */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/bluk-messaging.webp"
                    alt="Broadcast & Bulk Messages - Mass messaging interface"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Broadcast & Bulk Messages
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Drive higher engagement than email & SMS
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Reach thousands instantly with ready-to-use message
                    templates across different languages. Higher engagement than
                    traditional email and SMS.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More →
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Flows */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/WhatsApp-flows.webp"
                    alt="WhatsApp Flows - Interactive flow examples"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    WhatsApp Flows
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Create frictionless surveys and interactive experiences
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Effortlessly capture customer interests with WhatsApp flows.
                    Create frictionless surveys, interactive experiences, and
                    registrations to collect customer preferences.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More →
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Catalog */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/catalog.webp"
                    alt="WhatsApp Catalog - Product catalog interface"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    WhatsApp Catalog
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Browse, ask and buy right inside WhatsApp
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Let people browse, ask and buy, right inside WhatsApp. Use
                    your catalog to highlight offers, share updates and keep
                    customers coming back.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More →
                    </span>
                  </div>
                </div>
              </div>

              {/* No-code Chatbot */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/noCodeChatbuilder.webp"
                    alt="No-code Chatbot - Chatbot flow builder"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    No-code Chatbot
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Build flows in minutes, not hours
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Build flows in minutes, not hours. Answer FAQs, guide
                    purchases, or route chats, all while staying available 24/7
                    across marketing, support, and sales.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More →
                    </span>
                  </div>
                </div>
              </div>

              {/* Analytics & Reporting */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/analytics.webp"
                    alt="Analytics & Reporting - Performance tracking dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Analytics & Reporting
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Track performance with detailed analytics
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Track performance with detailed analytics. Monitor message
                    delivery, engagement rates, conversion metrics, and customer
                    satisfaction to optimize your WhatsApp strategy.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transform Your Business with WhatsApp API Section */}
            <div className="mt-20 mb-20">
              <h2
                className="text-center text-black mb-6 font-bold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                Transform Your Business with WhatsApp API
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
                Three powerful ways to revolutionize your customer engagement,
                boost revenue, and scale operations
              </p>
              {/* Featurette 1: Marketing & Sales */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h3
                    className="font-bold text-black mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    1. Drive Revenue & Boost Sales
                  </h3>
                  <p className="text-lg text-[#333] mb-6">
                    Convert conversations into sales. Send targeted campaigns,
                    showcase products, and close deals faster than ever.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Drive More Sales
                        </h4>
                        <p className="text-[#333]">
                          Send catalogs, process orders, and accept payments
                          through WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Launch Campaigns
                        </h4>
                        <p className="text-[#333]">
                          Send bulk messages and promotional content to
                          thousands instantly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Build Your Brand
                        </h4>
                        <p className="text-[#333]">
                          Create memorable experiences that keep customers
                          coming back.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg">
                    <div className="rounded-xl overflow-hidden w-full h-80">
                      <img
                        src="/landing-page/roi.webp"
                        alt="Boost Sales & Marketing ROI - ROI Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featurette 2: Customer Support */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                <div className="flex items-center justify-center">
                  <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg w-full">
                    <div className="rounded-xl overflow-hidden w-full h-80">
                      <img
                        src="/landing-page/support.webp"
                        alt="Deliver 24/7, World-Class Support - Support Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center h-80">
                  <h3
                    className="font-bold text-black mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    2. Deliver Exceptional Customer Support
                  </h3>
                  <p className="text-lg text-[#333] mb-6">
                    Provide 24/7 support that delights customers. Reduce costs,
                    eliminate wait times, and resolve issues instantly.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Resolve Queries Instantly
                        </h4>
                        <p className="text-[#333]">
                          Deploy intelligent chatbots 24/7.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Eliminate Wait Times
                        </h4>
                        <p className="text-[#333]">
                          Reduce response time from hours to seconds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Empower Your Agents
                        </h4>
                        <p className="text-[#333]">
                          Unified Omni-Inbox for seamless management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featurette 3: Automation & Scale */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="flex flex-col justify-center h-80">
                  <h3
                    className="font-bold text-black mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    3. Automate & Scale Seamlessly
                  </h3>
                  <p className="text-lg text-[#333] mb-6">
                    Scale your business without limits. Automate repetitive
                    tasks, integrate with your existing tools, and grow
                    efficiently.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Automate Everything
                        </h4>
                        <p className="text-[#333]">
                          Send automatic reminders and notifications.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Link className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Integrate Your Stack
                        </h4>
                        <p className="text-[#333]">
                          Connect to CRM, e-commerce, and other tools.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Infinity className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Grow Without Limits
                        </h4>
                        <p className="text-[#333]">
                          Scale from 100 to 1 million messages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg w-full">
                    <div className="rounded-xl overflow-hidden w-full h-80">
                      <img
                        src="/landing-page/automation.webp"
                        alt="Automate & Scale Your Operations - Automation Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mt-20 bg-gradient-to-r from-[#10B981]/10 to-[#1E3A8A]/10 rounded-xl p-12">
              <div className="text-center mb-8">
                <h3
                  className="font-bold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Real Results from Real Businesses
                </h3>
                <p className="text-xl text-gray-600">
                  Here&apos;s what happens when you combine all these elements
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">
                    3,800
                  </div>
                  <div className="text-gray-600">Messages Delivered</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Out of 5,000 sent
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">
                    2,100
                  </div>
                  <div className="text-gray-600">Messages Read</div>
                  <div className="text-sm text-gray-500 mt-1">
                    55% read rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">
                    110
                  </div>
                  <div className="text-gray-600">Purchases Made</div>
                  <div className="text-sm text-gray-500 mt-1">
                    5.2% conversion
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg text-gray-700 italic">
                  &quot;Those 110 buyers didn&apos;t appear by luck — they
                  appeared because we understood their behavior through
                  xByteChat&apos;s campaign analytics.&quot;
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  — Clothing Brand Case Study
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2.5rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of successful businesses that trust XploreByte for
              their digital transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 rounded-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                Talk to Sales
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <NextLink
                href="/whatsapp-business"
                className="inline-flex items-center px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Book a Demo
              </NextLink>
            </div>
          </div>
        </section>

        {/* <DigitalSerenity /> */}
      </main>
      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
