"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Clock, Bell, ArrowRight, Zap, Star } from "lucide-react";

export default function ComingSoon() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Something <span className="text-[#11A944]">Amazing</span> is
                Coming
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                We're working hard to bring you revolutionary WhatsApp Business
                features that will transform your customer engagement.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Launch Countdown
                </h2>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#11A944]">30</div>
                    <div className="text-white/80 text-sm">Days</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0296FE]">12</div>
                    <div className="text-white/80 text-sm">Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#FFB800]">45</div>
                    <div className="text-white/80 text-sm">Minutes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#EA1752]">30</div>
                    <div className="text-white/80 text-sm">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Coming
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get a sneak peek at the exciting features we're developing for
                you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI-Powered Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI that understands context and provides intelligent
                  responses to customer queries.
                </p>
                <div className="flex items-center text-sm text-[#11A944] font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  Coming Soon
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-6">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Notifications
                </h3>
                <p className="text-gray-600 mb-4">
                  Intelligent notification system that sends the right message
                  at the perfect time.
                </p>
                <div className="flex items-center text-sm text-[#11A944] font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  Coming Soon
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Deep insights into customer behavior and campaign performance
                  with predictive analytics.
                </p>
                <div className="flex items-center text-sm text-[#11A944] font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notify Me Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Be the First to Know
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get notified when we launch these amazing features. Join our
              exclusive early access list.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#11A944] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors flex items-center justify-center gap-2"
                >
                  <Bell className="w-5 h-5" />
                  Notify Me When Ready
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Current Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Now
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While you wait, explore our current powerful WhatsApp Business
                features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#11A944]/10 to-[#0296FE]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  WhatsApp Broadcasting
                </h3>
                <p className="text-gray-600 mb-6">
                  Send personalized messages to thousands of customers with our
                  advanced broadcasting system.
                </p>
                <a
                  href="/whatsapp-business"
                  className="inline-flex items-center text-[#11A944] font-semibold hover:underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#FFB800]/10 to-[#EA1752]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Chatbots
                </h3>
                <p className="text-gray-600 mb-6">
                  Intelligent chatbots that provide instant responses and
                  seamless customer support.
                </p>
                <a
                  href="/whatsapp-business"
                  className="inline-flex items-center text-[#11A944] font-semibold hover:underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Wait - Start Today
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get started with our current features while we prepare the next
              generation of WhatsApp Business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/whatsapp-business"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Current Features
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
