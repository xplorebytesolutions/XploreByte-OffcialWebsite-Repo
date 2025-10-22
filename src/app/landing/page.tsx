"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Bot,
  Users,
  Clock,
  Play,
  Phone,
  Building2,
  ShoppingCart,
  Rocket,
  ChevronRight,
  Gift,
  X,
  Settings,
  Link,
  Infinity,
} from "lucide-react";
import DemoModal from "@/components/DemoModal";
import SalesModal from "@/components/SalesModal";

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeFeatureModal, setActiveFeatureModal] = useState<string | null>(
    null
  );
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % 12); // 12 slides total
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 12) % 12); // 12 slides total
  };

  // Modal cooldown functionality
  const handleModalClose = () => {
    setShowExitIntent(false);
    // Store cooldown timestamp in localStorage
    localStorage.setItem("modalCooldown", Date.now().toString());
  };

  // Check if modal should be shown (not in cooldown)
  const shouldShowModal = () => {
    const cooldownTime = localStorage.getItem("modalCooldown");
    if (!cooldownTime) return true;

    const timeSinceClose = Date.now() - parseInt(cooldownTime);
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

    return timeSinceClose > fiveMinutes;
  };

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && shouldShowModal()) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 12); // 12 slides total
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Social proof data
  const testimonials = [
    {
      name: "Priya Singh",
      role: "CEO, RetailMart",
      avatar: "PS",
      quote:
        "XploreByte doubled our WhatsApp sales in just 2 months! The ROI was immediate.",
      rating: 5,
      company: "RetailMart",
      result: "2x Sales Increase",
    },
    {
      name: "Amit Verma",
      role: "Founder, GrowBiz",
      avatar: "AV",
      quote:
        "Saved 20 hours per week with automation. Our team is more productive than ever.",
      rating: 5,
      company: "GrowBiz",
      result: "20hrs/week Saved",
    },
    {
      name: "Anjali Mehra",
      role: "Marketing Director, FoodBasket",
      avatar: "AM",
      quote:
        "98% open rate vs 20% email. WhatsApp is a game-changer for customer engagement.",
      rating: 5,
      company: "FoodBasket",
      result: "98% Open Rate",
    },
  ];

  const benefits = [
    "98% WhatsApp open rate vs 20% email",
    "24/7 automated customer support",
    "2x faster sales conversion",
    "50% reduction in support costs",
    "Enterprise-grade security & compliance",
  ];

  return (
    <div className="min-h-screen bg-white" style={{ margin: 0, padding: 0 }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <Image
                  src="/assets/logo_7.svg"
                  alt="XploreByte Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-gray-900 text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
                  XploreByte
                </span>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-[#10B981] transition-colors duration-200 font-medium"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-[#10B981] transition-colors duration-200 font-medium"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-[#10B981] transition-colors duration-200 font-medium"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-[#10B981] transition-colors duration-200 font-medium"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#10B981] transition-colors duration-200 font-medium"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </a>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#10B981] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#059669] transition-colors duration-200"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-white text-gray-900 overflow-hidden pt-8"
        style={{ marginTop: 0 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#11A944]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#1E3A8A]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#11A944]/5 to-[#1E3A8A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Vector Art Background Elements - Removed for white background */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Grow 20x your Business with{" "}
                <span className="text-[#25D366]">WhatsApp Business API</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The modern customer doesn&apos;t want forms, buttons, or call
                queues. They want to <em>talk</em>. Join 10,000+ businesses
                using xByteChat to move from cold communication to warm
                conversation — and that&apos;s where revenue lives.
              </p>

              {/* Benefits List */}
              <div className="mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group text-lg"
                  style={{
                    color: "#10B981",
                  }}
                >
                  <Rocket className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Book Demo
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setIsSalesModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0F172A] font-semibold rounded-xl transition-all duration-200 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch 2-Min Demo
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold ml-2 text-gray-700">
                    4.9/5 (500+ reviews)
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  ⚡ Setup in 5 minutes
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative max-w-lg mx-auto">
                <div className="relative">
                  <Image
                    src="/herosection.png"
                    alt="WhatsApp Business API Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />

                  {/* Background Decorative Elements */}
                  <div className="absolute -z-10 inset-0">
                    <div className="absolute top-1/4 -left-8 w-16 h-16 bg-[#11A944]/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-[#1E3A8A]/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-400/20 rounded-full blur-lg"></div>
                  </div>
                </div>

                {/* Floating elements removed for white background */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Client Bar */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-lg">
            Trusted by 500+ businesses including:
          </p>

          {/* Scrolling Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos - 30+ brands */}
              <div className="flex items-center gap-8 flex-shrink-0">
                {/* E-commerce & Business */}
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/shopify.svg"
                    alt="Shopify"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/salesforce.svg"
                    alt="Salesforce"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/hubspot.svg"
                    alt="HubSpot"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/zendesk.svg"
                    alt="Zendesk"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/intercom.svg"
                    alt="Intercom"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/helpscout.svg"
                    alt="HelpScout"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/livechat.svg"
                    alt="LiveChat"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>

                {/* Productivity & Collaboration */}
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/notion.svg"
                    alt="Notion"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/slack.svg"
                    alt="Slack"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/trello.svg"
                    alt="Trello"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/asana.svg"
                    alt="Asana"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/monday.svg"
                    alt="Monday.com"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/clickup.svg"
                    alt="ClickUp"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/airtable.svg"
                    alt="Airtable"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/figma.svg"
                    alt="Figma"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>

                {/* Additional Tech Brands */}
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/microsoft.svg"
                    alt="Microsoft"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/google.svg"
                    alt="Google"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/amazon.svg"
                    alt="Amazon"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/zoom.svg"
                    alt="Zoom"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/dropbox.svg"
                    alt="Dropbox"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/spotify.svg"
                    alt="Spotify"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/netflix.svg"
                    alt="Netflix"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/uber.svg"
                    alt="Uber"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/airbnb.svg"
                    alt="Airbnb"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/twitter.svg"
                    alt="Twitter"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/instagram.svg"
                    alt="Instagram"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/facebook.svg"
                    alt="Facebook"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/youtube.svg"
                    alt="YouTube"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/tiktok.svg"
                    alt="TikTok"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/discord.svg"
                    alt="Discord"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/telegram.svg"
                    alt="Telegram"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/whatsapp.svg"
                    alt="WhatsApp"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop - 30+ brands */}
              <div className="flex items-center gap-8 flex-shrink-0">
                {/* E-commerce & Business */}
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/shopify.svg"
                    alt="Shopify"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/salesforce.svg"
                    alt="Salesforce"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/hubspot.svg"
                    alt="HubSpot"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/zendesk.svg"
                    alt="Zendesk"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/intercom.svg"
                    alt="Intercom"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/helpscout.svg"
                    alt="HelpScout"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/livechat.svg"
                    alt="LiveChat"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>

                {/* Productivity & Collaboration */}
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/notion.svg"
                    alt="Notion"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/slack.svg"
                    alt="Slack"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/trello.svg"
                    alt="Trello"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/asana.svg"
                    alt="Asana"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/monday.svg"
                    alt="Monday.com"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/clickup.svg"
                    alt="ClickUp"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/airtable.svg"
                    alt="Airtable"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/figma.svg"
                    alt="Figma"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>

                {/* Additional Tech Brands */}
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/microsoft.svg"
                    alt="Microsoft"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/google.svg"
                    alt="Google"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/amazon.svg"
                    alt="Amazon"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/zoom.svg"
                    alt="Zoom"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/dropbox.svg"
                    alt="Dropbox"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/spotify.svg"
                    alt="Spotify"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/netflix.svg"
                    alt="Netflix"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/uber.svg"
                    alt="Uber"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/airbnb.svg"
                    alt="Airbnb"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/twitter.svg"
                    alt="Twitter"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/instagram.svg"
                    alt="Instagram"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/facebook.svg"
                    alt="Facebook"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/youtube.svg"
                    alt="YouTube"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/tiktok.svg"
                    alt="TikTok"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/discord.svg"
                    alt="Discord"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/telegram.svg"
                    alt="Telegram"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/whatsapp.svg"
                    alt="WhatsApp"
                    className="h-8 w-auto hover:scale-110 transition-all duration-300"
                    style={{ filter: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One WhatsApp Business Solutions Section */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-6 md:mb-8">
            All-in-One{" "}
            <span className="text-emerald-500">
              WhatsApp Business Solutions
            </span>{" "}
            for Growing Brands
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            From AI chatbots and automated campaigns to WhatsApp Flows and
            auto-replies, we provide comprehensive WhatsApp Business API
            services including marketing campaigns, customer support automation,
            and advanced integrations for every industry.
          </p>

          {/* Carousel Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Industry Cards */}
                {[
                  {
                    title: "Beauty & Cosmetics",
                    description:
                      "Transform your beauty business with WhatsApp automation. Key benefits include:\n• Personalized product catalogs and instant support\n• Seamless appointment booking and reminders\n• Automated follow-ups and customer retention\n• Real-time order tracking and delivery updates",
                    image: "/whatsapp-business/industry/industry-beauty.png",
                    bg: "bg-green-50",
                    ctaUrl: "/industries/beauty-cosmetics",
                  },
                  {
                    title: "Health & Wellness",
                    description:
                      "Enhance patient care with intelligent WhatsApp solutions. Features include:\n• Automated appointment scheduling and reminders\n• Health check-in notifications and updates\n• Prescription refill alerts and medication tracking\n• Secure patient communication and data protection",
                    image: "/whatsapp-business/industry/industry-health.png",
                    bg: "bg-blue-50",
                    ctaUrl: "/industries/healthcare",
                  },
                  {
                    title: "E-commerce",
                    description:
                      "Increase conversions with WhatsApp e-commerce automation. Includes:\n• Automated order confirmations and shipping updates\n• Product recommendations and upselling\n• Cart abandonment recovery and re-engagement\n• Customer support and return processing",
                    image: "/whatsapp-business/industry/industry-ecommerce.png",
                    bg: "bg-blue-50",
                    ctaUrl: "/industries/food",
                  },
                  {
                    title: "Real Estate",
                    description:
                      "Connect with property seekers through WhatsApp automation. Features include:\n• Instant property listings and virtual tours\n• Automated appointment scheduling for viewings\n• Document sharing and contract management\n• Lead nurturing and follow-up automation",
                    image:
                      "/whatsapp-business/industry/industry-realestate.png",
                    bg: "bg-blue-50",
                    ctaUrl: "/industries/real-estate",
                  },
                  {
                    title: "Home Decor & Furnishing",
                    description:
                      "Drive sales growth with WhatsApp business automation. Capabilities include:\n• Interactive product catalogs and virtual showrooms\n• Automated order confirmations and shipping updates\n• Customer feedback collection and review management\n• Personalized recommendations and upselling",
                    image: "/whatsapp-business/industry/industry-decor.png",
                    bg: "bg-yellow-50",
                    ctaUrl: "/industries/real-estate",
                  },
                  {
                    title: "Automotive Industry",
                    description:
                      "Streamline automotive services with WhatsApp automation. Benefits include:\n• Service appointment booking and reminders\n• Vehicle maintenance alerts and service history\n• Parts availability notifications and ordering\n• Customer satisfaction surveys and feedback",
                    image:
                      "/whatsapp-business/industry/industry-automotive.png",
                    bg: "bg-teal-50",
                    ctaUrl: "/industries/automotive",
                  },
                  {
                    title: "Freelancer & Consultants",
                    description:
                      "Deliver exceptional client experiences with WhatsApp automation. Includes:\n• Automated project updates and milestone notifications\n• Client onboarding and service delivery automation\n• Invoice reminders and payment processing\n• Knowledge base and FAQ automation",
                    image:
                      "/whatsapp-business/industry/industry-freelancer.png",
                    bg: "bg-teal-50",
                    ctaUrl: "/industries/freelancer",
                  },
                  {
                    title: "Travel & Tourism",
                    description:
                      "Enhance traveler experiences with WhatsApp automation. Capabilities include:\n• Automated booking confirmations and itinerary updates\n• Real-time travel alerts and weather notifications\n• Customer support and emergency assistance\n• Post-trip feedback and review collection",
                    image: "/whatsapp-business/industry/industry-travel.png",
                    bg: "bg-green-50",
                    ctaUrl: "/industries/travel",
                  },
                  {
                    title: "Education",
                    description:
                      "Boost student engagement with WhatsApp automation. Features include:\n• Automated class reminders and schedule updates\n• Assignment notifications and deadline alerts\n• Parent communication and progress reports\n• Emergency notifications and campus updates",
                    image: "/whatsapp-business/industry/industry-education.png",
                    bg: "bg-blue-50",
                    ctaUrl: "/industries/education",
                  },
                  {
                    title: "Spa & Salons",
                    description:
                      "Automate your spa and salon operations with WhatsApp. Benefits include:\n• Automated booking confirmations and payment processing\n• Service reminders and promotional offers\n• Customer feedback collection and review management\n• Loyalty program automation and rewards",
                    image: "/whatsapp-business/industry/industry-spa.png",
                    bg: "bg-yellow-50",
                    ctaUrl: "/industries/spa",
                  },
                  {
                    title: "Banking & Finance",
                    description:
                      "Build trust with secure WhatsApp automation. Features include:\n• Automated payment reminders and account updates\n• Transaction notifications and fraud alerts\n• Loan application status and document requests\n• Customer support and financial education",
                    image: "/whatsapp-business/industry/industry-banking.png",
                    bg: "bg-teal-50",
                    ctaUrl: "/contact",
                  },
                  {
                    title: "Restaurants & Food Businesses",
                    description:
                      "Speed up operations with WhatsApp food service automation. Includes:\n• Automated order taking and menu updates\n• Delivery tracking and customer notifications\n• Table reservations and waitlist management\n• Customer feedback and review collection",
                    image: "/whatsapp-business/industry/industry-food.png",
                    bg: "bg-yellow-50",
                    ctaUrl: "/industries/food",
                  },
                ].map((ind, idx) => (
                  <div key={ind.title} className="w-full flex-shrink-0">
                    <div className="px-4 md:px-8">
                      <a
                        href={ind.ctaUrl}
                        className={`
                          group relative shadow-lg flex flex-row items-center px-4 py-6 md:px-6 md:py-8 ${ind.bg}
                          transition hover:scale-[1.02] hover:shadow-2xl hover:z-20 duration-300
                          border border-white/70 hover:border-emerald-400/60
                          min-h-[160px] md:min-h-[180px]
                          overflow-visible block cursor-pointer
                        `}
                      >
                        {/* Left Side - Image */}
                        <div className="flex-shrink-0 w-2/5 h-full pr-4 md:pr-6">
                          <div className="relative h-full w-full">
                            {/* Glow/Blob Behind Image */}
                            <span
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 blur-2xl rounded-full w-40 h-24"
                              style={{
                                background:
                                  "radial-gradient(ellipse at 50% 50%, #a7f3d0 0%, #fff 80%)",
                                opacity: 0.4,
                              }}
                            />
                            {/* IMAGE */}
                            <div className="relative z-10 w-full h-full">
                              <img
                                src={ind.image}
                                alt={ind.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={e => {
                                  e.currentTarget.src =
                                    "/images/industry-placeholder.png";
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="flex-1 w-3/5 pl-3 md:pl-4">
                          <div className="flex flex-col h-full justify-center">
                            {/* INDUSTRY TITLE */}
                            <div className="mb-3">
                              <div className="flex items-center gap-3 mb-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    ind.bg === "bg-green-50"
                                      ? "bg-green-100 text-green-700"
                                      : ind.bg === "bg-blue-50"
                                      ? "bg-blue-100 text-blue-700"
                                      : "bg-emerald-100 text-emerald-700"
                                  }`}
                                >
                                  Industry
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                  {ind.title}
                                </h3>
                              </div>
                              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="text-slate-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                              {ind.description
                                .split("\n")
                                .map((line, index) => (
                                  <div key={index} className="mb-2">
                                    {line.startsWith("•") ? (
                                      <div className="flex items-start">
                                        <div
                                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mr-4 mt-0.5 shadow-sm ${
                                            ind.bg === "bg-green-50"
                                              ? "bg-gradient-to-br from-green-400 to-green-600"
                                              : ind.bg === "bg-blue-50"
                                              ? "bg-gradient-to-br from-blue-400 to-blue-600"
                                              : "bg-gradient-to-br from-emerald-400 to-emerald-600"
                                          }`}
                                        >
                                          <svg
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        </div>
                                        <span className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                          {line.substring(1).trim()}
                                        </span>
                                      </div>
                                    ) : (
                                      <span className="text-slate-700 font-bold text-lg md:text-xl">
                                        {line}
                                      </span>
                                    )}
                                  </div>
                                ))}
                            </div>
                            <div
                              className={`inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200 text-sm md:text-base w-fit group-hover:shadow-md ${
                                ind.bg === "bg-green-50"
                                  ? "bg-green-100 text-green-700"
                                  : ind.bg === "bg-blue-50"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-emerald-100 text-emerald-700"
                              }`}
                            >
                              Explore
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Soft background blob for more "wow" */}
                        <span
                          className={`
                            absolute -bottom-10 -right-16 w-40 h-16 rounded-full
                            blur-2xl opacity-25 group-hover:opacity-40
                            pointer-events-none
                            ${
                              idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"
                            }
                          `}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3].map(idx => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    idx === 0
                      ? "bg-emerald-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why WhatsApp Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: The "Problem & Promise" Hero */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
              Why Your Business Can&apos;t Afford to Ignore WhatsApp
            </h2>
            <p className="text-xl text-[#333] mb-12 max-w-4xl mx-auto">
              While your competitors are still using outdated email and phone
              systems, smart businesses are already winning customers with
              WhatsApp&apos;s 98% open rate and instant engagement.
            </p>

            {/* Visual Element - Strip Banner */}
            <div className="max-w-4xl mx-auto relative">
              <div className="rounded-2xl overflow-hidden w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gray-50 border border-gray-200">
                <img
                  src="/landing-page/why_api.webp"
                  alt="Why WhatsApp API for Business - Growth and Communication Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Features Section - Image-First Impact Design */}
          <div id="features" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                All the features you need, all in one place
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to turn WhatsApp into your most powerful
                business tool. From intelligent campaigns to automated
                conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Click to WhatsApp Ads */}
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeatureModal("click-to-ads")}
              >
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <Image
                    src="/landing-page/Click-to-WhatsApp-Ads.png"
                    alt="Click to WhatsApp Ads - Mobile ad to chat flow"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-gray-900 text-xl font-bold mb-2">
                    Click to WhatsApp Ads
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Turn ad clicks into revenue-driving conversations
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
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
              </motion.div>

              {/* Broadcast & Bulk Messages */}
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeatureModal("broadcast")}
              >
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <Image
                    src="/landing-page/bluk-messaging.png"
                    alt="Broadcast & Bulk Messages - Mass messaging interface"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-gray-800 text-xl font-bold mb-2">
                    Broadcast & Bulk Messages
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Drive higher engagement than email & SMS
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
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
              </motion.div>

              {/* WhatsApp Flows */}
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeatureModal("flows")}
              >
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <Image
                    src="/landing-page/WhatsApp-Flows.png"
                    alt="WhatsApp Flows - Interactive flow examples"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-gray-800 text-xl font-bold mb-2">
                    WhatsApp Flows
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Create frictionless surveys and interactive experiences
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
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
              </motion.div>

              {/* WhatsApp Catalog */}
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeatureModal("catalog")}
              >
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <Image
                    src="/landing-page/catalog.png"
                    alt="WhatsApp Catalog - Product catalog interface"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-gray-800 text-xl font-bold mb-2">
                    WhatsApp Catalog
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Browse, ask and buy right inside WhatsApp
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
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
              </motion.div>

              {/* No-code Chatbot */}
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeatureModal("chatbot")}
              >
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <Image
                    src="/landing-page/noCodeChatbuilder.png"
                    alt="No-code Chatbot - Chatbot flow builder"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-gray-800 text-xl font-bold mb-2">
                    No-code Chatbot
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Build flows in minutes, not hours
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
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
              </motion.div>

              {/* Analytics & Reporting */}
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeatureModal("analytics")}
              >
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <Image
                    src="/landing-page/analytics.png"
                    alt="Analytics & Reporting - Performance tracking dashboard"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-gray-800 text-xl font-bold mb-2">
                    Analytics & Reporting
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Track performance with detailed analytics
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
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
              </motion.div>
            </div>

            {/* Success Story */}
            <div className="mt-20 bg-gradient-to-r from-[#10B981]/10 to-[#1E3A8A]/10 rounded-xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
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

          {/* Section 2: The "Solution" Featurettes */}
          <div id="how-it-works" className="mb-20">
            <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-6">
              Transform Your Business with WhatsApp API
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
              Three powerful ways to revolutionize your customer engagement,
              boost revenue, and scale operations
            </p>

            {/* Featurette 1: Marketing & Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
                        Launch Campaigns
                      </h4>
                      <p className="text-[#333]">
                        Send bulk messages and promotional content to thousands
                        instantly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
                        Build Your Brand
                      </h4>
                      <p className="text-[#333]">
                        Create memorable experiences that keep customers coming
                        back.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg">
                  <div className="rounded-xl overflow-hidden w-full h-80">
                    <img
                      src="/landing-page/roi.png"
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
                      src="/landing-page/support.png"
                      alt="Deliver 24/7, World-Class Support - Support Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center h-80">
                <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">
                  3. Automate & Scale Seamlessly
                </h3>
                <p className="text-lg text-[#333] mb-6">
                  Scale your business without limits. Automate repetitive tasks,
                  integrate with your existing tools, and grow efficiently.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">
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
                      src="/landing-page/automation.png"
                      alt="Automate & Scale Your Operations - Automation Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-[#333] max-w-3xl mx-auto">
              See how businesses like yours are using XploreByte to drive growth
              and save time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-[#333] mb-6 italic text-lg">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <h4 className="font-semibold text-[#1E3A8A]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#333]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  What is the difference between WhatsApp Business and the API?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                WhatsApp Business is the free app for small businesses, while
                the WhatsApp Business API is a powerful solution for larger
                businesses that need advanced features like bulk messaging,
                automation, and team management.
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  Is WhatsApp Business API Free?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                You can get the WhatsApp Business API for Free with XploreByte
                but you still need to pay the platform fees & for messages
                charged per message (every 24-hours) in the WhatsApp
                template-based pricing model.
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  How do I get a Green Tick on WhatsApp?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                The green tick (verified badge) is granted by WhatsApp to
                businesses that meet their verification criteria. We help you
                through the verification process and maintain compliance.
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  What is your pricing?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                Our pricing starts at $99/month for up to 10,000 messages. We
                offer flexible plans based on your message volume and feature
                requirements. Contact us for a custom quote.
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  Can I send bulk messages? Are there limitations?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                Yes, you can send bulk messages to your opted-in contacts. There
                are rate limits to prevent spam, but we help you optimize your
                messaging strategy within these limits.
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  How long does it take to get approved?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                The approval process typically takes 1-3 business days. We
                provide full support throughout the process to ensure quick
                approval and setup.
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  What is the WhatsApp Business API Pricing in India?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                The pricing can vary depending on the region, the country code
                of a user and the type of conversation. For Indian Users,
                you&apos;ll be charged ₹0.88/ Marketing message, & ₹0.125 for
                Utility/ Authentication messages.
              </div>
            </div>

            {/* FAQ Item 8 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  Can I use WhatsApp Apps & WhatsApp Business API on the same
                  number?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                Yes, you can now have the WhatsApp Business app and the WhatsApp
                Business API on the same number with the help of WhatsApp
                coexistence. If you want to keep your WhatsApp API and WhatsApp
                Business account to coexist on the same number, reach out to our
                support team.
              </div>
            </div>

            {/* FAQ Item 9 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  Can I access WhatsApp on multiple devices with WhatsApp
                  Business API?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                Yes, you can access WhatsApp Business API on as many devices as
                you want using XploreByte. Unlike WhatsApp Business, WhatsApp
                Business API can be used on multiple devices. You can log in to
                XploreByte on the go using a Mobile device, PC & tablets.
              </div>
            </div>

            {/* FAQ Item 10 */}
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-semibold text-[#1E3A8A]">
                  What are the prerequisites for applying to WhatsApp Business
                  API?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4 text-[#333]">
                You must have a business website, facebook business manager
                account and a fresh phone number not previously linked to any
                WhatsApp account. If you want to apply for WhatsApp API on your
                existing WhatsApp number, you can do this too but you&apos;ll
                either need to delete your WhatsApp account or ask the
                XploreByte team to onboard you on coexistence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-12 bg-[#10B981] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow? Get Your Free WhatsApp API Access Now
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              No credit card required. Get onboarded in 10 minutes and send your
              first campaign today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#10B981] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 group text-base min-w-[180px]"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#10B981] font-semibold rounded-lg transition-all duration-200 group min-w-[180px]"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Book a 15-Min Demo
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-[#10B981]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-1">
                No Credit Card Required
              </h3>
              <p className="text-white/80 text-xs">
                Start your free trial without any payment information
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-[#10B981]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-1">
                14-Day Free Trial
              </h3>
              <p className="text-white/80 text-xs">
                Full access to all features with no limitations
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-[#10B981]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-1">Cancel Anytime</h3>
              <p className="text-white/80 text-xs">
                No long-term commitments or hidden fees
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/70 text-sm mb-2">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex items-center justify-center gap-6 opacity-60">
              <div className="text-xs font-medium">✓ Enterprise Security</div>
              <div className="text-xs font-medium">✓ 99.9% Uptime</div>
              <div className="text-xs font-medium">✓ 24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent{" "}
              <span className="text-[#11A944]">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no
              surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Free Forever Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Free Forever
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get Started with WhatsApp API
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-2">₹0</div>
                <div className="text-gray-600">Forever</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Free WhatsApp Business API
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Free WhatsApp Blue Tick Application
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    ₹50 Free Conversation Credits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Unlimited Free Service Conversations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Click to WhatsApp Ads Manager
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Upload & Manage Contacts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Create tags & attributes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">Upto 10 Tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Upto 5 Custom Attributes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Create template messages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Live Chat Dashboard
                  </span>
                </li>
              </ul>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 px-6 rounded-lg font-semibold bg-white text-black border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Book Demo
              </button>
            </div>

            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Everything you need to get started
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ₹1,350
                </div>
                <div className="text-gray-600">per month</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    All Features of Free Forever
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    1 Owner + 5 FREE Agents included. Additional Agents at ₹750/
                    month each
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Smart Audience Segregation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Broadcasting & Retargeting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Template Message APIs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Multi-Agent Live Chat
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    2400 Messages/min
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Dialogflow Chatbot Integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Shared Team Inbox
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Click-to-WhatsApp Ads Manager
                  </span>
                </li>
              </ul>

              <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  5 Chatbot Flows: ₹2500 (charged separately)
                </p>
              </div>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 px-6 rounded-lg font-semibold bg-white text-black border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Book Demo
              </button>
            </div>

            {/* Pro Plan - Most Popular */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-[#11A944] hover:shadow-xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#11A944] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <span className="w-4 h-4">⭐</span>
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Best for growing businesses
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ₹2,880
                </div>
                <div className="text-gray-600">per month</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    All features in Starter Plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">Upto 100 Tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Upto 20 Custom Attributes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Campaign Scheduler
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Campaign Click Tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Campaign Budget Analytics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Carousel Template Click Tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    CSV Campaign Scheduler
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    User Access Control
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Automatic Failed Message Retry
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    1 Owner + 5 FREE Agents included. Additional Agents at ₹750/
                    month each
                  </span>
                </li>
              </ul>

              <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  5 Chatbot Flows: ₹2500 (charged separately)
                </p>
              </div>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 px-6 rounded-lg font-semibold bg-[#11A944] text-white hover:bg-[#0d8a3a] transition-colors"
              >
                Book Demo
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  For large businesses
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  Custom
                </div>
                <div className="text-gray-600">pricing</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    All features in Pro Plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Recommended for Brands with 5 Lac+ Users
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">Unlimited Tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Unlimited Attributes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Downloadable Reports
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Dedicated Account Manager
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Priority Customer Support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">Webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-600">
                    Higher Messaging Speed
                  </span>
                </li>
              </ul>

              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="w-full py-3 px-6 rounded-lg font-semibold bg-white text-black border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* Message Pricing Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Per Message Pricing
              </h3>
              <p className="text-gray-600">
                Transparent pricing for every message type
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#11A944] mb-2">
                  ₹0.88
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Marketing
                </div>
                <div className="text-xs text-gray-600">
                  Promotional messages
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#11A944] mb-2">
                  ₹0.125
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Utility
                </div>
                <div className="text-xs text-gray-600">
                  Order updates, delivery
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#11A944] mb-2">
                  ₹0.125
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Authentication
                </div>
                <div className="text-xs text-gray-600">OTP, verification</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#11A944] mb-2">
                  Free
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Service
                </div>
                <div className="text-xs text-gray-600">Customer initiated</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                View Full Pricing Details
                <span className="ml-2">→</span>
              </a>
              <a
                href="/start-free-trial"
                className="inline-flex items-center px-8 py-3 border-2 border-[#11A944] text-[#11A944] font-semibold rounded-lg hover:bg-[#11A944] hover:text-white transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/logo_7.svg"
                  alt="XploreByte Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-white text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
                  XploreByte
                </span>
              </div>
              <p className="text-[#F9FAFB] mb-4">
                Transform your business communication with AI-powered WhatsApp
                automation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-[#F9FAFB]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-[#F9FAFB]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-[#F9FAFB]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Book Demo CTA Section */}
          <div className="border-t border-[#F9FAFB]/20 mt-8 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-[#F9FAFB] mb-6">
                See how our WhatsApp Business solution can help you grow
              </p>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#10B981] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#059669] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Demo
              </button>
            </div>
          </div>

          <div className="border-t border-[#F9FAFB]/20 mt-6 pt-6 text-center text-[#F9FAFB]">
            <p>&copy; 2024 XploreByte. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
          >
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wait! Don&apos;t Miss Out
              </h3>
              <p className="text-gray-600">
                Get 50% OFF your first 3 months + Free Setup (Worth ₹4,500)
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold hover:bg-[#059669] transition-colors"
              >
                Yes, I Want 50% OFF
              </button>
              <button
                onClick={handleModalClose}
                className="w-full text-gray-500 hover:text-gray-700"
              >
                No thanks, I&apos;ll pay full price
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />

      {/* Premium Feature Modal */}
      {activeFeatureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeFeatureModal === "click-to-ads" &&
                  "Turn Ad Clicks Directly Into Revenue"}
                {activeFeatureModal === "broadcast" &&
                  "Reach Thousands Instantly"}
                {activeFeatureModal === "flows" &&
                  "Create Interactive Experiences"}
                {activeFeatureModal === "catalog" &&
                  "Turn WhatsApp Into Your Store"}
                {activeFeatureModal === "chatbot" &&
                  "Automate Customer Service 24/7"}
                {activeFeatureModal === "analytics" && "Analytics & Reporting"}
              </h2>
              <button
                onClick={() => setActiveFeatureModal(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Large Feature Image */}
              <div className="mb-8">
                <div className="relative h-96 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={
                      (activeFeatureModal === "click-to-ads" &&
                        "/landing-page/Click-to-WhatsApp-Ads.png") ||
                      (activeFeatureModal === "broadcast" &&
                        "/landing-page/bluk-messaging.png") ||
                      (activeFeatureModal === "flows" &&
                        "/landing-page/WhatsApp-Flows.png") ||
                      (activeFeatureModal === "catalog" &&
                        "/landing-page/catalog.png") ||
                      (activeFeatureModal === "chatbot" &&
                        "/landing-page/noCodeChatbuilder.png") ||
                      (activeFeatureModal === "analytics" &&
                        "/landing-page/analytics.png") ||
                      "/landing-page/Click-to-WhatsApp-Ads.png"
                    }
                    alt={`${activeFeatureModal} feature`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Feature Description */}
              <div className="space-y-8">
                {/* What is this feature? */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What is this feature?
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    {activeFeatureModal === "click-to-ads" && (
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Connect your Meta and Google Ads straight to your
                          WhatsApp inbox. One click on your ad skips the website
                          form and instantly starts a sales conversation with
                          your team.
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            How This Drives Your Growth
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Stop Wasting Ad Spend:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Capture the high-intent leads you pay for
                                  instead of losing them to abandoned website
                                  forms.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Engage Buyers Instantly:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Connect with customers the{" "}
                                  <em>exact moment</em> their interest is
                                  highest, not hours or days later.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Shorten Your Sales Cycle:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Answer questions, share your catalog, and
                                  close the deal in a single, real-time chat.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Maximize Ad ROI:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Convert more of your ad budget directly into
                                  paying customers and build a qualified
                                  pipeline for future marketing.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeFeatureModal === "broadcast" && (
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Send personalized messages to thousands of customers
                          simultaneously. Create message templates, segment your
                          audience, and deliver targeted communications that
                          drive higher engagement than traditional email and SMS
                          marketing.
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            How This Drives Your Growth
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Maximize Message Reach:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Achieve 98% open rates compared to 20% for
                                  email, ensuring your messages actually get
                                  seen and read by your customers.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Scale Personal Communication:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Send thousands of personalized messages
                                  instantly while maintaining the personal touch
                                  that builds customer relationships.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Drive Immediate Action:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Announce promotions, product launches, and
                                  special offers directly to customers&apos;
                                  most-used platform for instant engagement.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Build Customer Loyalty:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Maintain consistent communication with your
                                  customer base, driving repeat purchases and
                                  creating stronger brand relationships.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeFeatureModal === "flows" && (
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Build interactive forms, surveys, and multi-step
                          processes directly within WhatsApp conversations.
                          Create frictionless experiences that capture customer
                          information, preferences, and drive conversions
                          without customers ever leaving the chat.
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            How This Drives Your Growth
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Capture More Qualified Leads:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Collect detailed customer information through
                                  interactive forms, ensuring you get complete
                                  contact details and preferences before they
                                  lose interest.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Reduce Customer Friction:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Eliminate the need for customers to visit
                                  external websites or fill out complex forms,
                                  keeping them engaged within their preferred
                                  messaging platform.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Automate Data Collection:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Gather customer preferences, service
                                  requirements, and booking details
                                  automatically, reducing manual data entry and
                                  improving accuracy.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Increase Conversion Rates:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Guide customers through complex processes
                                  step-by-step, reducing abandonment rates and
                                  converting more prospects into paying
                                  customers.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeFeatureModal === "catalog" && (
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Transform your WhatsApp Business account into a
                          complete shopping platform. Display your products with
                          photos, descriptions, and prices directly in
                          conversations, allowing customers to browse, ask
                          questions, and make purchases without ever leaving
                          WhatsApp.
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            How This Drives Your Growth
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Eliminate Shopping Friction:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Keep customers in their preferred messaging
                                  app instead of redirecting them to external
                                  websites, reducing abandonment rates and
                                  increasing conversions.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Provide Instant Product Support:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Answer product questions, provide
                                  recommendations, and share detailed
                                  information in real-time, building trust and
                                  confidence in purchases.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Increase Average Order Value:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Showcase related products, upsell
                                  complementary items, and create personalized
                                  shopping experiences that drive higher
                                  transaction values.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Build Customer Relationships:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Create a personal shopping experience where
                                  customers feel valued and supported, leading
                                  to repeat purchases and brand loyalty.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeFeatureModal === "chatbot" && (
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Build intelligent automated conversations without any
                          programming knowledge. Create sophisticated customer
                          service flows, lead qualification systems, and sales
                          funnels using a visual drag-and-drop interface that
                          works 24/7.
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            How This Drives Your Growth
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Never Miss a Customer:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Provide instant responses to customer queries
                                  even when your team is unavailable, ensuring
                                  no potential customer is lost due to timing or
                                  availability.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Qualify Leads Automatically:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Pre-qualify prospects by asking the right
                                  questions, collecting contact information, and
                                  routing qualified leads to your sales team for
                                  immediate follow-up.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Reduce Operational Costs:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Handle routine inquiries, FAQs, and basic
                                  support requests automatically, freeing up
                                  your human agents to focus on high-value
                                  interactions and complex sales.
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-blue-600 font-bold">•</span>
                              <div>
                                <span className="font-semibold text-gray-900">
                                  Scale Customer Support:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  Provide consistent, high-quality customer
                                  service to unlimited customers simultaneously
                                  without hiring additional staff or increasing
                                  operational overhead.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeFeatureModal === "analytics" && (
                      <div className="space-y-3">
                        <p className="font-medium">
                          See exactly how your WhatsApp marketing is performing.
                        </p>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>Track message delivery and read rates</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>See which campaigns bring most sales</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>Understand customer behavior</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Demo Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setActiveFeatureModal(null);
                      setIsDemoModalOpen(true);
                    }}
                    className="w-full bg-[#10B981] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#059669] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
