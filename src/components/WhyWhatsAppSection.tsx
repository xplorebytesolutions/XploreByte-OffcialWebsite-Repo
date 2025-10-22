"use client";

import { useState, useEffect } from "react";
import {
  AlertCircle,
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  Infinity,
  Link,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Settings,
  ShoppingCart,
  Building2,
  Users,
} from "lucide-react";
import DemoModal from "./DemoModal";

export default function WhyWhatsAppSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("why-whatsapp-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="why-whatsapp-section"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: The "Problem & Promise" Hero */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Your Business Can&apos;t Afford to Ignore WhatsApp
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            While your competitors are still using outdated email and phone
            systems, smart businesses are already winning customers with
            WhatsApp&apos;s 98% open rate and instant engagement.
          </p>

          {/* Visual Element - Redesigned (glass border + glow) */}
          <div className="max-w-5xl mx-auto relative">
            {/* Soft background glow */}
            <div className="absolute -inset-x-10 -top-6 -bottom-6 bg-gradient-to-r from-emerald-300/20 via-cyan-300/10 to-blue-300/20 blur-3xl rounded-[40px] pointer-events-none" />

            {/* Glass card */}
            <div className="relative rounded-3xl p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="rounded-2xl overflow-hidden w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <img
                  src="/New_Design/whatApi_integration.webp"
                  alt="WhatsApp Business API Integration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: The "Solution" Featurettes */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How the API Transforms Your Entire Business
          </h2>

          {/* Featurette 1: Marketing & Sales */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                1. Boost Sales & Marketing ROI
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Turn every conversation into a sales opportunity. Send targeted
                campaigns, showcase products, and close deals faster than ever.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Drive More Sales
                    </h4>
                    <p className="text-gray-700">
                      Send product catalogs, process orders, and accept payments
                      directly through WhatsApp conversations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Launch Campaigns
                    </h4>
                    <p className="text-gray-700">
                      Send bulk messages, promotional content, and updates to
                      thousands of customers instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Build Your Brand
                    </h4>
                    <p className="text-gray-700">
                      Create memorable customer experiences that keep them
                      coming back for more.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
                <div className="rounded-xl overflow-hidden w-full h-80">
                  <img
                    src="/New_Design/Gemini_Generated_Image_6y3mc36y3mc36y3m.png"
                    alt="WhatsApp Marketing & Sales Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featurette 2: Customer Support */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                2. Deliver 24/7, World-Class Support
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Slash support costs and eliminate wait times. Provide instant
                answers and empower your team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Resolve Queries Instantly
                    </h4>
                    <p className="text-gray-700">
                      Deploy an intelligent Chatbot to answer common questions
                      24/7, even while you sleep.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Eliminate Wait Times
                    </h4>
                    <p className="text-gray-700">
                      Stop making customers wait days for an email reply. Reduce
                      response time from hours to seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Empower Your Agents
                    </h4>
                    <p className="text-gray-700">
                      Our unified Omni-Inbox lets multiple agents manage
                      conversations seamlessly from one dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-2xl p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-xl w-full">
                <div className="rounded-xl overflow-hidden w-full h-80">
                  <img
                    src="/New_Design/support.webp"
                    alt="Omni-Inbox Dashboard for Customer Support"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featurette 3: Automation & Scale */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
                <div className="rounded-xl overflow-hidden w-full h-80">
                  <img
                    src="/New_Design/automatetask.png"
                    alt="Automate & Scale Your Operations - Enterprise automation and task management"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                3. Automate & Scale Your Operations
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                As your business grows, your systems need to keep up. Automate
                the repetitive work and focus on what matters.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Automate Everything
                    </h4>
                    <p className="text-gray-700">
                      Send automatic appointment reminders, shipping
                      notifications, and order confirmations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Link className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Integrate Your Stack
                    </h4>
                    <p className="text-gray-700">
                      Connect the API directly to your CRM, e-commerce platform,
                      and other tools for a single source of truth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Infinity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Grow Without Limits
                    </h4>
                    <p className="text-gray-700">
                      The API is built for scale, whether you&apos;re sending
                      100 messages or 1 million.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: The "Closing Argument" CTA */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            The Bottom Line: Don&apos;t Just Talk <em>at</em> Your Customers.
            Talk <em>with</em> Them.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Businesses that make this shift see higher conversions, lower
            support costs, and customers who are more loyal because they feel
            heard. The WhatsApp API is the key.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-[#1E3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              see pricing
            </a>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
}
