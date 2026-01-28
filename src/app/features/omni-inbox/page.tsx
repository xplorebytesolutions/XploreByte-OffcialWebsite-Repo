"use client";

import { useState } from "react";


import DemoModal from "../../../components/DemoModal";
import {
  MessageCircle,
  Bot,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Star,
  Play,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Smartphone,
  Globe,
  Settings,
  Eye,
  Target,
  Award,
} from "lucide-react";

export default function OmniInbox() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#11A944]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0296FE]/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#11A944]/10 border border-[#11A944]/20 rounded-full text-[#11A944] text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>All-in-One WhatsApp Management</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                  Unified{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11A944] to-[#0296FE]">
                    Omni-Inbox
                  </span>
                </h1>

                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  The only dashboard you need to manage all WhatsApp
                  conversations. Seamlessly switch between bots and agents,
                  track performance, and delight customers.
                </p>

                {/* Stats */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">10K+</div>
                    <div className="text-sm text-white/70">
                      Active Conversations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-white/70">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2.3s</div>
                    <div className="text-sm text-white/70">Avg Response</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#11A944] text-white font-semibold rounded-xl shadow-2xl hover:bg-[#0d8a3a] transition-all duration-300 hover:scale-105">
                    <a
                      href="https://app.xplorebyte.com/signup-for-trial"
                      className="text-white hover:underline"
                    >
                      Start Free Trial
                    </a>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
                    <span>Book a Demo</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div>4.9/5 from 2,500+ customers</div>
                  </div>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Omni-Inbox Dashboard
                      </div>
                    </div>

                    {/* Mock Dashboard Content */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-[#11A944] rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Sarah Johnson
                          </div>
                          <div className="text-sm text-gray-500">
                            Hey, I need help with my order...
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">2m ago</div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-[#0296FE] rounded-full flex items-center justify-center">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Mike Chen
                          </div>
                          <div className="text-sm text-gray-500">
                            Bot: What can I help you with?
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">5m ago</div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Emma Wilson
                          </div>
                          <div className="text-sm text-gray-500">
                            Thanks for the quick response!
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">1h ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#0296FE] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#11A944]/10 border border-[#11A944]/20 rounded-full text-[#11A944] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Powerful Features</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Everything You Need in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11A944] to-[#0296FE]">
                  One Dashboard
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stop juggling multiple tools. Our unified inbox brings all your
                WhatsApp conversations, team collaboration, and analytics into
                one powerful interface.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#11A944]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smart Bot & Agent Handoff
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Seamlessly transition between AI-powered bots and human
                    agents. Our intelligent routing ensures customers always get
                    the right level of support.
                  </p>
                  <div className="flex items-center text-[#11A944] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#FFB800]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Team Collaboration Hub
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Assign conversations, share context, and collaborate in
                    real-time. Built-in notes, tags, and handoff protocols keep
                    your team aligned.
                  </p>
                  <div className="flex items-center text-[#FFB800] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0296FE]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Real-time Analytics
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Track performance, response times, and customer
                    satisfaction. Get actionable insights to optimize your
                    WhatsApp operations.
                  </p>
                  <div className="flex items-center text-[#0296FE] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#11A944]/10 border border-[#11A944]/20 rounded-full text-[#11A944] text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Why Choose Our Omni-Inbox?</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11A944] to-[#0296FE]">
                    Complete Solution
                  </span>{" "}
                  for WhatsApp Management
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Stop switching between tools. Our unified platform gives you
                  everything you need to manage WhatsApp conversations at scale.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Centralized Management
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        All your WhatsApp conversations in one unified
                        dashboard, regardless of whether they&apos;re handled by
                        bots or agents. Never lose track of customer
                        interactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Seamless Handoffs
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Smooth transitions between automated responses and human
                        agents when needed. Context is preserved, ensuring
                        customers never have to repeat themselves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Advanced Analytics
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Comprehensive insights into bot performance, agent
                        efficiency, and customer satisfaction. Make data-driven
                        decisions to optimize your operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Dashboard Preview */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Live Dashboard
                    </div>
                  </div>

                  {/* Mock Analytics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-[#11A944]">
                        2,847
                      </div>
                      <div className="text-sm text-gray-500">
                        Active Conversations
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-[#0296FE]">
                        98.5%
                      </div>
                      <div className="text-sm text-gray-500">Response Rate</div>
                    </div>
                  </div>

                  {/* Mock Conversation List */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-[#11A944] rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          Sarah Johnson
                        </div>
                        <div className="text-sm text-gray-500">
                          Order #12345 - Need help with delivery
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Live
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-[#0296FE] rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          Mike Chen
                        </div>
                        <div className="text-sm text-gray-500">
                          Bot: What can I help you with today?
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Bot
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          Emma Wilson
                        </div>
                        <div className="text-sm text-gray-500">
                          Thanks for the quick response!
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        Resolved
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold">99.9%</div>
                    <div className="text-xs">Uptime</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#11A944]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#0296FE]/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Ready to Get Started?</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11A944] to-[#0296FE]">
                WhatsApp Operations
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using our Omni-Inbox to
              streamline their WhatsApp conversations and delight customers.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-sm text-white/70">Messages Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/70">Customer Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-[#11A944] text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-[#0d8a3a] transition-all duration-300 hover:scale-105">
                <a
                  href="https://app.xplorebyte.com/signup-for-trial"
                  className="text-white hover:underline"
                >
                  Start Free Trial
                </a>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-6 h-6" />
                <span>Book a Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Global Infrastructure</span>
              </div>
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
