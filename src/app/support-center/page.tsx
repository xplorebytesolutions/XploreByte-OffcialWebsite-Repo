"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HelpCircle,
  BookOpen,
  Video,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Search,
  FileText,
} from "lucide-react";

export default function SupportCenter() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                <span className="text-[#11A944]">Help</span> Center
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Usage guides & tutorials. Find answers to your questions and
                learn how to get the most out of XploreByte.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#11A944] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the help you need organized by topic and feature.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Getting Started
                </h3>
                <p className="text-gray-600">
                  Learn the basics and set up your first WhatsApp campaigns.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Video Tutorials
                </h3>
                <p className="text-gray-600">
                  Watch step-by-step video guides for all major features.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  API Documentation
                </h3>
                <p className="text-gray-600">
                  Technical guides for developers and advanced integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most frequently asked questions and helpful guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-[#11A944]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How to Set Up Your First Campaign
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A complete guide to creating and launching your first
                      WhatsApp marketing campaign.
                    </p>
                    <a
                      href="#"
                      className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#11A944]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Understanding Message Templates
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn about WhatsApp message templates and how to use them
                      effectively.
                    </p>
                    <a
                      href="#"
                      className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#11A944]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Best Practices for WhatsApp Marketing
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Essential tips and strategies to maximize your WhatsApp
                      marketing success.
                    </p>
                    <a
                      href="#"
                      className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#11A944]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Troubleshooting Common Issues
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Solutions to the most common problems you might encounter.
                    </p>
                    <a
                      href="#"
                      className="text-[#11A944] font-medium hover:text-[#0d8a3a] transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Can&apos;t find what you&apos;re looking for? Our support team is
              here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
