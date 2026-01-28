"use client";

import { useState } from "react";


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
  Shield,
  Clock,
  Users,
} from "lucide-react";

export default function Product() {
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
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                  Our <span className="text-[#11A944]">Product</span> Suite
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Comprehensive WhatsApp Business solutions designed to scale
                  your business and enhance customer engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.xplorebyte.com/signup-for-trial"
                    className="inline-flex items-center px-6 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <button
                    onClick={() => setIsSalesModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Talk to Sales
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#11A944]">
                        10K+
                      </div>
                      <div className="text-white/80 text-sm">
                        Active Clients
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0296FE]">
                        98%
                      </div>
                      <div className="text-white/80 text-sm">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FFB800]">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#EA1752]">
                        5+
                      </div>
                      <div className="text-white/80 text-sm">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete WhatsApp Business Platform
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to run a successful WhatsApp Business
                operation in one integrated platform.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Core Platform */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#11A944]/10 to-[#0296FE]/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    WhatsApp Business Hub
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Centralized platform for managing all your WhatsApp Business
                  communications, automation, and analytics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#11A944] rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Message Broadcasting
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#11A944] rounded-full"></div>
                      <span className="text-sm text-gray-600">AI Chatbots</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#11A944] rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Contact Management
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#11A944] rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Analytics Dashboard
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#11A944] rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Template Management
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#11A944] rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Multi-Agent Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      AI Automation
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Intelligent chatbots that understand context and provide
                    instant responses.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Analytics</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Real-time insights into your WhatsApp Business performance.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Integrations
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Connect with CRM, e-commerce, and other business tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Modules */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Product Modules
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the modules that fit your business needs or get the
                complete suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Marketing Hub */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-xl flex items-center justify-center mb-6">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Marketing Hub
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced marketing automation tools for WhatsApp campaigns and
                  lead generation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Broadcast messaging</li>
                  <li>• Campaign management</li>
                  <li>• Lead scoring</li>
                  <li>• A/B testing</li>
                </ul>
                <a
                  href="/contact"
                  className="text-[#11A944] font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* Sales Hub */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sales Hub
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete sales management system with WhatsApp integration for
                  customer engagement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Lead management</li>
                  <li>• Sales pipeline</li>
                  <li>• Customer tracking</li>
                  <li>• Deal management</li>
                </ul>
                <a
                  href="/contact"
                  className="text-[#11A944] font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* Support Hub */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-xl flex items-center justify-center mb-6">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Support Hub
                </h3>
                <p className="text-gray-600 mb-6">
                  Customer support automation with AI-powered chatbots and
                  ticket management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• AI chatbots</li>
                  <li>• Ticket management</li>
                  <li>• Knowledge base</li>
                  <li>• Multi-language support</li>
                </ul>
                <a
                  href="/contact"
                  className="text-[#11A944] font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and performance with enterprise-grade
                infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Security
                </h3>
                <p className="text-gray-600">
                  End-to-end encryption, GDPR compliance, and enterprise-grade
                  security.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Performance
                </h3>
                <p className="text-gray-600">
                  99.9% uptime with global CDN and optimized infrastructure.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Reliability
                </h3>
                <p className="text-gray-600">
                  24/7 monitoring and support with instant failover
                  capabilities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Integration
                </h3>
                <p className="text-gray-600">
                  RESTful APIs and webhooks for seamless third-party
                  integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join hundreds of businesses already using our platform to
              transform their WhatsApp Business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.xplorebyte.com/signup-for-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
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
