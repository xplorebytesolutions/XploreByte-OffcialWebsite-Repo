"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Play } from "@phosphor-icons/react";
import DemoModal from "./DemoModal";
import SalesModal from "./SalesModal";

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
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

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
          {/* Trust Badge - Hidden until client logos are available */}
          {/* <motion.div
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
          </motion.div> */}

          {/* Breadcrumbs */}
          <motion.div
            className="text-xs font-medium uppercase tracking-widest text-gray-600 mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1.5px",
            }}
            variants={fadeUp}
          >
            WhatsApp Business API
          </motion.div>

          {/* Main Headline - MARKETING TEAM: Update this headline as needed */}
          <motion.h1
            className="font-bold text-gray-900 mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2.5rem",
              lineHeight: "1.2",
            }}
            variants={fadeUp}
          >
            Elevate experiences with <br />
            <span style={{ color: "#25D366" }}>WhatsApp Business API</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-700 mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "55ch",
            }}
            variants={fadeUp}
          >
            Send notifications, customer service messages, and essential
            information your customers need on WhatsApp — even through a
            WhatsApp chatbot.
          </motion.p>

          <motion.p
            className="text-gray-700 mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "55ch",
            }}
            variants={fadeUp}
          >
            XploreByte APIs hide the complexity of hosting and scaling WhatsApp
            software so that you can focus on elevating customer experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-6"
            variants={fadeUp}
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-md font-semibold border-2 border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800 hover:border-emerald-800 transition duration-200 group"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
              }}
              aria-label="Book Demo"
            >
              <ArrowRight
                size={20}
                weight="bold"
                className="mr-2 group-hover:translate-x-1 transition-transform"
              />
              Book Demo
            </button>
            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-md font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition duration-200 group"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
              }}
              aria-label="Talk to expert"
            >
              <Play
                size={20}
                weight="bold"
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Talk to expert
            </button>
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
          <div className="relative max-w-[300px] mx-auto">
            <Image
              src="/New_Design/mobile-wrapper.avif"
              alt="WhatsApp Business Automation Dashboard"
              width={300}
              height={400}
              className="w-full h-auto max-w-[300px] mx-auto"
              priority
            />

            {/* Floating Elements */}

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

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
