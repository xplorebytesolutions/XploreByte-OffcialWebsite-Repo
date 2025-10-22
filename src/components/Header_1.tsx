"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu on window resize > lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 group"
          aria-label="XploreByte Solutions Home"
        >
          <Image
            src="/assets/logo_7.svg"
            alt="XploreByte Logo"
            width={40}
            height={40}
            style={{ display: "block" }}
            className="h-8 w-auto"
          />
          <span className="flex items-center space-x-3 group">
            <span className="text-gray-900 text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
              XploreByte
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex space-x-8"
          aria-label="Primary Navigation"
        >
          {/* Home */}
          <Link
            href="/"
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* About */}
          <Link
            href="/about-us"
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("solutions")}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
            >
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeDropdown === "solutions" && (
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 py-6">
                <div className="px-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* WhatsApp Features Section */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        WHATSAPP FEATURES
                      </h3>
                      <div className="space-y-4">
                        <Link
                          href="/features/whatsapp-broadcasting"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              WhatsApp Broadcasting
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Retargeting, CRM & more
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/features/ai-chatbot"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              AI WhatsApp Chatbot
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Automate anything with AI
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/features/click-to-whatsapp-ads"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-purple-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              Click to WhatsApp Ads
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              3X Your Leads
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/features/whatsapp-chatbots"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-orange-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              WhatsApp Chatbots
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Drag & Drop Flow Builder
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Business Features Section */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        BUSINESS FEATURES
                      </h3>
                      <div className="space-y-4">
                        <Link
                          href="/features/whatsapp-catalog"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm2 4a2 2 0 100-4 2 2 0 000 4zm4-4a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              WhatsApp Catalog
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Sell Products on WhatsApp
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/features/whatsapp-payments"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              WhatsApp Payments
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Collect Payments via UPI & Card
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/features/whatsapp-forms"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-pink-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              WhatsApp Forms
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Native Data Collection
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/features/whatsapp-webviews"
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-purple-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              WhatsApp Webviews
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Web within WhatsApp
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          Explore All Features
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Discover powerful WhatsApp automation tools
                        </p>
                      </div>
                      <Link
                        href="/features"
                        className="flex items-center space-x-2 px-6 py-3 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                      >
                        <span>View All Features</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("product")}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
            >
              <span>Product</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeDropdown === "product" && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                <div className="px-6 py-2">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    WhatsApp Business API
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/pricing"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>💰</span>
                      <span>Pricing</span>
                    </Link>
                    <Link
                      href="/api-documentation"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>📚</span>
                      <span>API Documentation</span>
                    </Link>
                    <Link
                      href="/success-stories"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>📈</span>
                      <span>Success Stories</span>
                    </Link>
                    <Link
                      href="/best-practices"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>⭐</span>
                      <span>Best Practices</span>
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-emerald-600 hover:bg-emerald-50 rounded-md"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enterprise Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("enterprise")}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
            >
              <span>Enterprise</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeDropdown === "enterprise" && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                <div className="px-6 py-2">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Enterprise Solutions
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/enterprise/advanced-security"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>🔒</span>
                      <span>Advanced Security</span>
                    </Link>
                    <Link
                      href="/enterprise/scalable-platform"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>⚡</span>
                      <span>Scalable Platform</span>
                    </Link>
                    <Link
                      href="/enterprise/custom-setup"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>🛠️</span>
                      <span>Custom Setup</span>
                    </Link>
                    <Link
                      href="/enterprise/training-support"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>🎯</span>
                      <span>Training & Support</span>
                    </Link>
                    <Link
                      href="/enterprise/dedicated-account-manager"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>👨‍💼</span>
                      <span>Dedicated Account Manager</span>
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-emerald-600 hover:bg-emerald-50 rounded-md"
                    >
                      <span>Contact Enterprise Sales</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Support */}
          <Link
            href="/support-center"
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
          >
            Support
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 font-sans group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Try Now Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
          >
            Try Now
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden bg-white border-t border-gray-200 transition-max-height duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md font-sans text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="block px-3 py-2 rounded-md font-sans text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/support-center"
            className="block px-3 py-2 rounded-md font-sans text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Support
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md font-sans text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {/* Mobile Try Now */}
          <Link
            href="/contact"
            className="block mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold text-center font-sans shadow-lg hover:bg-emerald-600 transition duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
