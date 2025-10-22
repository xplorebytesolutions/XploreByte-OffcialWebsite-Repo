"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Play } from "@phosphor-icons/react";
import DemoModal from "./DemoModal";

const trustedCompanies = [
  { name: "Marketing", icon: "megaphone" },
  { name: "Sales", icon: "handshake" },
  { name: "Support", icon: "headset" },
  { name: "E-commerce", icon: "shopping-cart" },
];

const iconMap: { [key: string]: React.ReactNode } = {
  megaphone: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-emerald-400"
      viewBox="0 0 24 24"
    >
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  handshake: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-blue-400"
      viewBox="0 0 24 24"
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="M7 18h1a2 2 0 0 0 2-2v-5" />
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="M7 18h1a2 2 0 0 0 2-2v-5" />
    </svg>
  ),
  headset: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-purple-400"
      viewBox="0 0 24 24"
    >
      <path d="M3 14v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      <path d="M17 14v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z" />
      <path d="M9 14v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2z" />
    </svg>
  ),
  "shopping-cart": (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-orange-400"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const Hero: FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative bg-white pt-8 md:pt-12 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#11A944]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#1E3A8A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#11A944]/5 to-[#1E3A8A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#11A944]/10 border border-[#11A944]/20 rounded-full px-4 py-2 mb-4"
            variants={fadeUp}
          >
            <svg
              className="w-4 h-4 text-[#11A944]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            <span className="text-sm font-semibold text-[#11A944]">
              Trusted by 10,000+ Businesses Worldwide
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-balance sm:text-4xl lg:text-5xl text-3xl font-extrabold tracking-tight text-gray-900 mb-4 font-manrope leading-tight"
            variants={fadeUp}
          >
            Grow 20x Faster with
            <span className="text-[#11A944] font-manrope">
              {" "}
              AI-Powered
            </span>{" "}
            <span className="text-[#25D366]">WhatsApp Business API</span>{" "}
            Automation
          </motion.h1>

          {/* Description */}
          <motion.p
            className="sm:text-lg leading-relaxed text-base text-gray-600 mb-6 font-sans"
            variants={fadeUp}
          >
            Scale your customer communication, boost engagement, and drive sales
            with our enterprise-grade WhatsApp Business API platform. Start your
            free trial today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-6"
            variants={fadeUp}
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl bg-[#1E3A8A] text-white hover:bg-[#1E40AF] transition duration-200 group"
              aria-label="Start Free Trial"
            >
              <ArrowRight
                size={20}
                weight="bold"
                className="mr-2 group-hover:translate-x-1 transition-transform"
              />
              Start Free Trial
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-200 group"
              aria-label="Watch Demo"
            >
              <Play
                size={20}
                weight="bold"
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Watch Demo
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={fadeUp}
          >
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">
                ★★★★★ 4.9/5
              </span>
            </div>
            <div className="text-sm text-[#11A944] font-semibold">
              10,000+ businesses
            </div>
          </motion.div>

          {/* Feature Cards removed as requested */}
        </motion.div>

        {/* Right Content - Enhanced Visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {/* AI-Powered Badge */}
          <motion.div
            className="absolute -top-4 -right-4 z-20 inline-flex items-center gap-2 bg-[#11A944] text-white rounded-full px-4 py-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            </svg>
            <span className="text-sm font-semibold">AI-Powered</span>
          </motion.div>

          {/* Main Image Container */}
          <div className="relative max-w-[380px] md:max-w-[420px] mx-auto">
            <Image
              src="/herosection.png"
              alt="WhatsApp Business Automation Dashboard"
              width={420}
              height={280}
              className="w-full h-auto"
              priority
            />

            {/* Floating Elements */}
            <motion.div
              className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-8 right-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <span className="text-white font-bold text-sm">%</span>
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute -z-10 inset-0">
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-[#11A944]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-[#1E3A8A]/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-400/20 rounded-full blur-lg"></div>
          </div>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
