"use client";

import { useState } from "react";


import DemoModal from "../../../components/DemoModal";
import SalesModal from "../../../components/SalesModal";
import {
  Zap,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Code,
  Bot,
  Play,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AIChatbotsFlows() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#11A944]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-2xl"
              >
                <h1
                  className="font-extrabold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "3.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Build <span className="text-emerald-700">Intelligent</span>{" "}
                  Conversations
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create chatbots and interactive flows with a No-Code Chatbot
                  Builder that understands context, engages customers, and
                  automates sales 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-700 text-white font-semibold font-sans shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-200 group"
                  >
                    Start Building Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsSalesModalOpen(true)}
                    className="inline-flex items-center px-8 py-4 rounded-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition-colors font-sans"
                  >
                    View Live Examples
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> No
                    coding required
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />{" "}
                    Drag-and-drop builder
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <div className="absolute top-0 w-full h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="pt-12 bg-gray-50/50">
                    <Image
                      src="/New_Design/whatApi_integration.webp"
                      alt="No-Code Chatbot Builder Interface"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">3x Higher</p>
                    <p className="text-xs text-gray-500">Conversion Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                Everything You Need to Automate
              </h2>
              <p className="text-lg text-gray-600">
                Powerful tools to design, deploy, and manage intelligent
                conversations at scale.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Code className="w-6 h-6 text-emerald-700" />,
                  title: "Visual Flow Builder",
                  desc: "Drag, drop, and connect blocks to design complex conversational paths in minutes. No coding needed.",
                },
                {
                  icon: <Zap className="w-6 h-6 text-emerald-700" />,
                  title: "AI-Powered NLP",
                  desc: "Understand customer intent instantly with built-in natural language processing engine.",
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-emerald-700" />,
                  title: "Rich Messaging",
                  desc: "Use buttons, lists, carousels, and media to create engaging, app-like experiences within WhatsApp.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-Montserrat">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefit Deep Dive */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-6">
                  Why It Matters
                </div>
                <h2
                  className="font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Turn Conversations Into Revenue
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Don't just chat - convert. XploreByte's flows are designed to
                  guide users to the next best action, whether it's booking a
                  demo, making a purchase, or resolving a support ticket.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "24/7 Instant Responses",
                      desc: "Never miss a lead. Your bot works while you sleep, capturing and qualifying every opportunity.",
                    },
                    {
                      title: "Seamless Handoff",
                      desc: "Intelligent routing ensures complex queries are instantly passed to the right human agent with full context.",
                    },
                    {
                      title: "Personalized Journeys",
                      desc: "Use customer data to tailor the conversation path, increasing engagement and satisfaction.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-emerald-50 rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
                <div className="relative bg-white border border-gray-200 shadow-2xl rounded-3xl p-8">
                  <div className="flex flex-col gap-4">
                    {/* Mock Chat Interface */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm text-gray-800">
                          Hi there! How can I help you grow your business today?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-sm">
                          I'm looking to automate my customer support.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm text-gray-800 mb-3">
                          Great choice! We can help reduce ticket volume by up
                          to 70%. Would you like to see a quick demo?
                        </p>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-emerald-700 text-xs font-bold shadow-sm">
                            Yes, show me
                          </button>
                          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-xs font-bold shadow-sm">
                            Pricing first
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2.5rem",
                lineHeight: "1.2",
              }}
            >
              Start Automating in Minutes
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of businesses using XploreByte to scale their
              conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-700 text-white font-semibold font-sans shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-200"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition-colors font-sans"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
