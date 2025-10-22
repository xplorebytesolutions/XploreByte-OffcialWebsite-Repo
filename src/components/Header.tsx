"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
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
import DemoModal from "./DemoModal";
import ProductSpotlightCarousel from "./ProductSpotlightCarousel";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Industries", href: "/whatsapp-business" },
  { label: "Features", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Close mobile menu on window resize > lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="bg-white backdrop-blur-md border-b border-gray-200 fixed top-0 w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="XploreByte Solutions Home"
          >
            {/* SVG Logo */}
            {/* <img
            src="/assets/logo_7.svg"
            alt="XploreByte Logo"
            className="h-8 w-auto"
            style={{ display: "block" }}
          /> */}
            <Image
              src="/assets/logo_7.svg"
              alt="XploreByte Logo"
              width={40} // or whatever size you want (required)
              height={40} // or whatever size you want (required)
              style={{ display: "block" }}
              className="h-8 w-auto"
            />
            <span className="flex items-center space-x-3 group">
              <span className="text-gray-900 text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
                XploreByte
              </span>
              {/* <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl font-extrabold tracking-tight font-[Sora,sans-serif]">
              XploreByte
            </span> */}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex space-x-8"
            aria-label="Primary Navigation"
          >
            {navLinks.map(({ label, href }) => (
              <div key={label} className="relative">
                {label === "Industries" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors duration-200 font-sans ${
                        solutionsDropdownOpen
                          ? "text-emerald-600"
                          : "text-gray-900 hover:text-black"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          solutionsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                          solutionsDropdownOpen ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>

                    {/* Industries Mega Dropdown Menu */}
                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        <div className="grid grid-cols-3 gap-8">
                          {/* Left Column - HEALTHCARE & BEAUTY */}
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                              HEALTHCARE & BEAUTY
                            </h3>
                            <div className="space-y-4">
                              <Link
                                href="/industries/healthcare"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <Bot className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Healthcare
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Patient care & appointment management
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/industries/beauty-cosmetics"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                                  <Zap className="w-5 h-5 text-pink-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                    Beauty & Cosmetics
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Appointment booking & product catalogs
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/industries/spa"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                  <Settings className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                    Spa & Salons
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Service booking & customer care
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Middle Column - BUSINESS & SERVICES */}
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                              BUSINESS & SERVICES
                            </h3>
                            <div className="space-y-4">
                              <Link
                                href="/industries/real-estate"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                    Real Estate
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Property management & lead nurturing
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/industries/freelancer"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                  <Code className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    Freelancers
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Client communication & project updates
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/industries/education"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                                  <BookOpen className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    Education
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Student engagement & parent communication
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Right Column - LIFESTYLE & TRAVEL */}
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                              LIFESTYLE & TRAVEL
                            </h3>
                            <div className="space-y-4">
                              <Link
                                href="/industries/automotive"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                  <HelpCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                                    Automotive
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Service booking & maintenance alerts
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/industries/travel"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                                  <MessageCircle className="w-5 h-5 text-sky-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                                    Travel & Tourism
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Booking confirmations & travel updates
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/industries/food"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                                  <Megaphone className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                    Food & Restaurants
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Order management & delivery tracking
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                Ready to get started?
                              </h4>
                              <p className="text-sm text-gray-800">
                                Start your free 14-day trial today
                              </p>
                            </div>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                            >
                              <span className="text-sm font-medium">
                                Book a Demo
                              </span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : label === "Features" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors duration-200 font-sans ${
                        productDropdownOpen
                          ? "text-emerald-600"
                          : "text-gray-900 hover:text-black"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                          productDropdownOpen ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>

                    {/* Features Mega Dropdown Menu */}
                    {productDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        <div className="grid grid-cols-3 gap-8">
                          {/* Column 1 - CORE FEATURES */}
                          <div>
                            <h3 className="text-base font-bold text-gray-700 uppercase tracking-wider mb-4">
                              PLATFORM FEATURES
                            </h3>
                            <div className="space-y-4">
                              <Link
                                href="/features/ai-chatbots-flows"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <Bot className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    AI Chatbots & Flows
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    No-code bots & interactive flows.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/features/campaigns-broadcasting"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                  <Megaphone className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                    Campaigns & Broadcasting
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Bulk messaging & retargeting campaigns.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/features/sales-ecommerce-tools"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                  <BarChart3 className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                    Sales & E-commerce Tools
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Team management & in-chat catalogs.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/features/integrations-hub"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                  <Settings className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    Integrations Hub
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    CRM, Excel & third-party integrations.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/features/analytics-reporting"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                                    Analytics & Reporting
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Real-time ROI & performance tracking.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Column 2 - RESOURCES */}
                          <div>
                            <h3 className="text-base font-bold text-gray-700 uppercase tracking-wider mb-4">
                              RESOURCES
                            </h3>
                            <div className="space-y-4">
                              <Link
                                href="/api-documentation"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <Code className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Developer Docs
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Integration guides
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/support-center"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                  <HelpCircle className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                                    Help Center
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Usage guides & tutorials
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/product-updates"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                  <Megaphone className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                    Product Updates
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Latest feature updates
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href="/user-community"
                                className="flex items-start gap-3 group cursor-pointer"
                              >
                                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                                  <MessageCircle className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                                    User Community
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Community tips & support
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Column 3 - PRODUCT SPOTLIGHT */}
                          <div>
                            <h3 className="text-base font-bold text-gray-700 uppercase tracking-wider mb-4">
                              PRODUCT SPOTLIGHT
                            </h3>
                            <ProductSpotlightCarousel />
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                See the platform in action?
                              </h4>
                              <p className="text-sm text-gray-800">
                                Get a live, 1-on-1 walkthrough with our team.
                              </p>
                            </div>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                            >
                              <span className="text-sm font-medium">
                                Book a Free Demo
                              </span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : label === "Features" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setFeaturesDropdownOpen(true)}
                    onMouseLeave={() => setFeaturesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors duration-200 font-sans ${
                        featuresDropdownOpen
                          ? "text-emerald-600"
                          : "text-gray-900 hover:text-black"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          featuresDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                          featuresDropdownOpen ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>

                    {/* Features Mega Dropdown Menu */}
                    {featuresDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>

                        <div className="grid grid-cols-2 gap-8">
                          {/* Left Column - WHATSAPP FEATURES */}
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                              WHATSAPP FEATURES
                            </h3>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                  <Zap className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                    WhatsApp Broadcasting
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Retargeting, CRM & more
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <Bot className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    AI WhatsApp Chatbot
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Automate anything with AI
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                  <ArrowRight className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                    Click to WhatsApp Ads
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    3X Your Leads
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                  <Settings className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    WhatsApp Chatbots
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Drag & Drop Flow Builder
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Column - BUSINESS FEATURES */}
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                              BUSINESS FEATURES
                            </h3>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                  <FileText className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                    WhatsApp Catalog
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Sell Products on WhatsApp
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                                    WhatsApp Payments
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Collect Payments via UPI & Card
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                                  <BookOpen className="w-5 h-5 text-pink-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                    WhatsApp Forms
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Native Data Collection
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                                  <ToggleLeft className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    WhatsApp Webviews
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Web within WhatsApp
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                Explore All Features
                              </h4>
                              <p className="text-sm text-gray-800">
                                Discover powerful WhatsApp automation tools
                              </p>
                            </div>
                            <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                              <span className="text-sm font-medium">
                                View All Features
                              </span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={href}
                    className="relative text-gray-900 hover:text-black transition-colors duration-200 font-sans group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-gray-900 hover:text-black transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold font-sans text-sm hover:border-gray-400 hover:text-gray-900 transition duration-200 mr-3"
            >
              Login
            </Link>

            {/* Book a Demo Button */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
            >
              Book a Demo
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          id="mobile-menu"
          className={`lg:hidden bg-black border-t border-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
          aria-label="Mobile Navigation"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block px-3 py-2 rounded-md font-sans text-gray-900 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {/* Mobile Login */}
            <Link
              href="/login"
              className="block mt-3 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold text-center font-sans hover:border-gray-400 hover:text-gray-900 transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>

            {/* Mobile Book a Demo */}
            <button
              onClick={() => {
                setIsDemoModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-center font-sans shadow-lg hover:bg-emerald-600 transition duration-200 w-full"
            >
              Book a Demo
            </button>
          </div>
        </nav>
      </header>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Header;

// "use client";

// import { FC, useState, useEffect } from "react";

// const navLinks = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#" },
//   { label: "Services", href: "#" },
//   { label: "Case Studies", href: "#" },
//   { label: "Insights", href: "#" },
//   { label: "Contact", href: "#" },
// ];

// const Header: FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Close mobile menu on window resize > lg
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
//         {/* Logo */}
//         <a
//           href="#"
//           className="flex items-center space-x-2 group"
//           aria-label="XploreByte Solutions Home"
//         >
//           {/* Add your SVG logo here or replace with text */}
//           <span className="font-bold text-xl tracking-wide text-white font-sans">
//             XploreByte
//           </span>
//         </a>

//         {/* Desktop Nav */}
//         <nav
//           className="hidden lg:flex space-x-8"
//           aria-label="Primary Navigation"
//         >
//           {navLinks.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="relative text-gray-300 hover:text-white transition-colors duration-200 font-sans"
//             >
//               {label}
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center space-x-4">
//           {/* Mobile menu button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-controls="mobile-menu"
//             aria-expanded={mobileMenuOpen}
//             aria-label="Toggle mobile menu"
//             className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-gray-900 hover:text-black transition-colors duration-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {mobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Get Started Button */}
//           <a
//             href="#"
//             className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
//           >
//             Try Free
//           </a>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <nav
//         id="mobile-menu"
//         className={`lg:hidden bg-black border-t border-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
//           mobileMenuOpen ? "max-h-screen" : "max-h-0"
//         }`}
//         aria-label="Mobile Navigation"
//       >
//         <div className="px-4 pt-2 pb-4 space-y-1">
//           {navLinks.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="block px-3 py-2 rounded-md font-sans text-gray-900 hover:bg-gray-100 hover:text-black transition-colors duration-200"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {label}
//             </a>
//           ))}
//           {/* Mobile get started */}
//           <a
//             href="#"
//             className="block mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-center font-sans shadow-lg hover:bg-emerald-600 transition duration-200"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Try Free
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
