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
  Building2,
  Heart,
  Car,
  GraduationCap,
  Headphones,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import DemoModal from "./DemoModal";

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
                      <div
                        className="absolute top-full mt-2 w-[1100px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50"
                        style={{ left: "80%", transform: "translateX(-50%)" }}
                      >
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Section - Solutions Overview */}
                          <div className="col-span-1 pr-4">
                            <h2
                              className="font-bold text-slate-800 mb-3 leading-tight"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.25rem",
                                lineHeight: "1.2",
                              }}
                            >
                              Solutions That Drive Business Outcomes
                            </h2>
                            <p className="text-slate-600 mb-4 leading-normal text-sm">
                              Transform your customer communication with
                              WhatsApp Business API. Join 10,000+ businesses
                              using our platform to move from cold communication
                              to warm conversation — and that&apos;s where
                              revenue lives.
                            </p>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-sm"
                            >
                              Request a Demo
                            </button>
                          </div>

                          {/* Middle-Left Section - By Industry */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              BY INDUSTRY
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/industries/healthcare"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Heart className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Healthcare
                              </Link>
                              <Link
                                href="/industries/education"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <GraduationCap className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Education
                              </Link>
                              <Link
                                href="/industries/retail-ecommerce"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Building2 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Retail & Ecommerce
                              </Link>
                              <Link
                                href="/industries/finance"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Finance
                              </Link>
                              <Link
                                href="/industries/transportation-logistics"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Car className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Transportation and Logistics
                              </Link>
                              <Link
                                href="/industries/manufacturing"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Settings className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Manufacturing
                              </Link>
                              <Link
                                href="/industries/public-sector"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Building2 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Public Sector
                              </Link>
                            </div>
                          </div>

                          {/* Middle-Right Section - By Function */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              BY FUNCTION
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/features/ai-chatbots-flows"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Headphones className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Customer Support
                              </Link>
                              <Link
                                href="/features/sales-ecommerce-tools"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <TrendingUp className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Sales & Lead Conversion
                              </Link>
                              <Link
                                href="/features/campaigns-broadcasting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <MessageSquare className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Marketing
                              </Link>
                              <Link
                                href="/features/analytics-reporting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Analytics & Reporting
                              </Link>
                            </div>
                          </div>

                          {/* Right Section - Featured Content */}
                          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6">
                            <div className="text-center">
                              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-3 block">
                                EBOOK
                              </span>
                              <h3
                                className="font-bold text-slate-800 mb-4"
                                style={{
                                  fontFamily: "Montserrat, sans-serif",
                                  fontSize: "1.125rem",
                                  lineHeight: "1.2",
                                }}
                              >
                                Delivering a 360° Customer Experience
                              </h3>
                              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-10 h-10 text-cyan-600" />
                              </div>
                              <button
                                onClick={() => setIsDemoModalOpen(true)}
                                className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium"
                              >
                                Read Now
                              </button>
                            </div>
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
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1100px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Section - Features Overview */}
                          <div className="col-span-1 pr-4">
                            <h2
                              className="font-bold text-slate-800 mb-3 leading-tight"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.25rem",
                                lineHeight: "1.2",
                              }}
                            >
                              Powerful Features for Business Growth
                            </h2>
                            <p className="text-slate-600 mb-4 leading-normal text-xs">
                              Discover our comprehensive suite of WhatsApp
                              Business API features designed to streamline your
                              communication, boost engagement, and drive revenue
                              growth.
                            </p>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-sm"
                            >
                              Request a Demo
                            </button>
                          </div>

                          {/* Middle-Left Section - CORE FEATURES */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              CORE FEATURES
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/features/ai-chatbots-flows"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Bot className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                AI Chatbots & Flows
                              </Link>
                              <Link
                                href="/features/campaigns-broadcasting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Megaphone className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Campaigns & Broadcasting
                              </Link>
                              <Link
                                href="/features/sales-ecommerce-tools"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Sales & E-commerce Tools
                              </Link>
                              <Link
                                href="/features/integrations-hub"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Settings className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Integrations Hub
                              </Link>
                              <Link
                                href="/features/analytics-reporting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Analytics & Reporting
                              </Link>
                            </div>
                          </div>

                          {/* Middle-Right Section - RESOURCES */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              RESOURCES
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/api-documentation"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Code className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Developer Docs
                              </Link>
                              <Link
                                href="/support-center"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <HelpCircle className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Help Center
                              </Link>
                              <Link
                                href="/product-updates"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Megaphone className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Product Updates
                              </Link>
                              <Link
                                href="/user-community"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <MessageCircle className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                User Community
                              </Link>
                            </div>
                          </div>

                          {/* Right Section - Featured Content */}
                          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">
                              EBOOK
                            </span>
                            <h3
                              className="font-bold text-slate-800 mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.125rem",
                                lineHeight: "1.2",
                              }}
                            >
                              WhatsApp Business API Guide
                            </h3>
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FileText className="w-10 h-10 text-emerald-600" />
                            </div>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors text-sm font-medium"
                            >
                              Download Now
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
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1100px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>

                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Section - Features Overview */}
                          <div className="col-span-1 pr-4">
                            <h2
                              className="font-bold text-slate-800 mb-3 leading-tight"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.25rem",
                                lineHeight: "1.2",
                              }}
                            >
                              Powerful Features for Business Growth
                            </h2>
                            <p className="text-slate-600 mb-4 leading-normal text-xs">
                              Discover our comprehensive suite of WhatsApp
                              Business API features designed to streamline your
                              communication, boost engagement, and drive revenue
                              growth.
                            </p>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-sm"
                            >
                              Request a Demo
                            </button>
                          </div>

                          {/* Middle-Left Section - CORE FEATURES */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              CORE FEATURES
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
                            <h3
                              className="font-bold text-gray-500 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
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

            {/* Book Demo Button */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold font-sans text-sm shadow-lg hover:bg-emerald-800 transition duration-200"
            >
              Book Demo
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

            {/* Mobile Book Demo */}
            <button
              onClick={() => {
                setIsDemoModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block mt-3 px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold text-center font-sans shadow-lg hover:bg-emerald-800 transition duration-200 w-full"
            >
              Book Demo
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
