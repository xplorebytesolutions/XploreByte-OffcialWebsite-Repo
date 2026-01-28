"use client";
import Link from "next/link";
import Image from "next/image";

// Social Media Icons
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xplorebyte/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-blue-500",
    hover: "hover:bg-blue-500 hover:text-white",
  },
  {
    label: "Twitter/X",
    href: "https://twitter.com/xplorebyte",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-gray-300",
    hover: "hover:bg-gray-300 hover:text-gray-900",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xplorebytesolutions/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "text-pink-400",
    hover:
      "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/XploreByte-Solutions/61574410757958/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "text-blue-400",
    hover: "hover:bg-blue-600 hover:text-white",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-200 relative overflow-hidden border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center space-x-3 mb-2">
              <Image
                src="/xplorebyte_logo.svg"
                alt="XploreByte Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-gray-200 text-xl font-bold tracking-tight">
                XploreByte{" "}
                <span className="font-light text-blue-400 text-lg">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="max-w-md font-sans text-gray-300 text-sm leading-relaxed">
              XploreByte is a WhatsApp-first CRM built to help teams move faster
              with a Team Inbox, automation, and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/start-free-trial"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors whitespace-nowrap"
              >
                Free Trial
              </Link>
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-2.5 font-semibold text-gray-100 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Book Demo
              </Link>
            </div>
            <p className="text-xs text-gray-400">
              No credit card required for the trial.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-emerald-400 transition-colors duration-300"
                  // Enforce single line display for "Terms and Conditions"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/acceptable-use-policy"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">
              Tools
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/tools/whatsapp-link"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  WhatsApp Link Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/demo-request"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/api-documentation"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Developer Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/support-center"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/product-updates"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Product Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-white text-sm">Email</p>
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    support@xplorebyte.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-white text-sm">Phone</p>
                  <a
                    href="tel:+918826165727"
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    +91 88261 65727
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-t border-slate-700/50 pt-8 gap-6">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <span className="text-sm font-sans text-gray-400">
              © 2018-2025 XploreByte Solutions. All rights reserved.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon, color, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`rounded-xl transition-all duration-300 p-3 bg-white/10 hover:bg-white/15 hover:scale-105 ${color} ${hover} backdrop-blur-sm border border-white/15 hover:border-white/25 shadow-md hover:shadow-lg`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 bottom-6 rounded-full p-2 bg-black/70 hover:bg-emerald-500 transition"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
