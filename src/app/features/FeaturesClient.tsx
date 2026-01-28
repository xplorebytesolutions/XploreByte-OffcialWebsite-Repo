"use client";

import { useState } from "react";
import Link from "next/link";


import DemoModal from "../../components/DemoModal";
import SalesModal from "../../components/SalesModal";
import {
  Bot,
  BarChart3,
  Zap,
  Settings,
  ArrowRight,
  Code,
  HelpCircle,
  Megaphone,
  MessageCircle,
  FileText,
  BookOpen,
  ToggleLeft,
} from "lucide-react";

export default function Features() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Powerful <span className="text-[#11A944]">Features</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the comprehensive suite of tools designed to transform
                your business communication and automation.
              </p>
            </div>
          </div>
        </section>

        {/* WhatsApp Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WhatsApp Business Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leverage the power of WhatsApp to connect with your customers
                like never before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Broadcasting
                </h3>
                <p className="text-gray-600 mb-4">
                  Send targeted messages to thousands of customers instantly
                  with advanced segmentation and personalization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bulk messaging with personalization</li>
                  <li>• Advanced audience segmentation</li>
                  <li>• Delivery reports and analytics</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI WhatsApp Chatbot
                </h3>
                <p className="text-gray-600 mb-4">
                  Intelligent chatbots that understand context and provide
                  instant, accurate responses to customer queries.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Natural language processing</li>
                  <li>• 24/7 automated support</li>
                  <li>• Easy conversation flow builder</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Click to WhatsApp Ads
                </h3>
                <p className="text-gray-600 mb-4">
                  Convert your Facebook and Instagram ads into direct WhatsApp
                  conversations, increasing lead generation by 3x.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Seamless ad integration</li>
                  <li>• Higher conversion rates</li>
                  <li>• Direct customer engagement</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Chatbots
                </h3>
                <p className="text-gray-600 mb-4">
                  Create sophisticated conversation flows with our drag-and-drop
                  chatbot builder.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Visual flow builder</li>
                  <li>• Multi-language support</li>
                  <li>• Advanced logic conditions</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Catalog
                </h3>
                <p className="text-gray-600 mb-4">
                  Showcase your products directly within WhatsApp with rich
                  media and easy ordering.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Product catalog integration</li>
                  <li>• Rich media support</li>
                  <li>• Direct ordering system</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Payments
                </h3>
                <p className="text-gray-600 mb-4">
                  Accept payments directly through WhatsApp using UPI, cards,
                  and other payment methods.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multiple payment options</li>
                  <li>• Secure transactions</li>
                  <li>• Payment tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Business Automation Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Streamline your business operations with our comprehensive
                automation suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Smart Workflows
                    </h3>
                    <p className="text-gray-600">
                      Automate complex business processes with our drag-and-drop
                      workflow builder.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0296FE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Analytics Dashboard
                    </h3>
                    <p className="text-gray-600">
                      Get real-time insights into your business performance with
                      comprehensive analytics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Integrations
                    </h3>
                    <p className="text-gray-600">
                      Connect with your favorite tools and platforms for
                      seamless data flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EA1752] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      AI Automation
                    </h3>
                    <p className="text-gray-600">
                      Leverage artificial intelligence to automate repetitive
                      tasks and decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7D47C4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      API Access
                    </h3>
                    <p className="text-gray-600">
                      Build custom integrations with our comprehensive API
                      documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multi-Channel Support
                    </h3>
                    <p className="text-gray-600">
                      Manage all your customer communications from a single
                      platform.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Start your free trial today and experience the power of our
              comprehensive feature set.
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
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Talk to Sales
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
