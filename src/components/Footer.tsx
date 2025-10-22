"use client";
import React from "react";

// Socials Array (add or update icons easily)
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xplorebyte/",
    icon: (
      <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.29V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    hover: "hover:bg-[#0077b5] hover:text-white",
  },
  {
    label: "Twitter/X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    hover: "hover:bg-black hover:text-white",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xplorebytesolutions/",
    icon: (
      <svg className="w-5 h-5" fill="#E4405F" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    hover:
      "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="#333333" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0-1.008-.322-3.301 1.23a11.509 11.509 0 0 0-3.006.404c-2.291-1.552-3.297-1.23-3.297-1.23-.653 1.653-.242 2.874-.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    hover: "hover:bg-gray-800 hover:text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/xxxxxxxxxx",
    icon: (
      <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
      </svg>
    ),
    hover: "hover:bg-[#25D366] hover:text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/XploreByte-Solutions/61574410757958/",
    icon: (
      <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    hover: "hover:bg-[#1877F2] hover:text-white",
  },
];

const Footer = () => (
  <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-gray-200 relative overflow-hidden border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
        {/* Brand & Socials */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center space-x-3 mb-2">
            <img
              src="/assets/logo_7.svg"
              alt="XploreByte Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl bg-gradient-to-br from-white via-emerald-400 to-sky-400 bg-clip-text text-transparent tracking-tight">
              XploreByte{" "}
              <span className="font-light text-gray-300">Solutions</span>
            </span>
          </div>
          <p className="max-w-md font-sans text-gray-400">
            Your trusted partner in digital innovation—empowering your growth
            with next-gen technology, strategy, and talent.
          </p>
          <div className="flex space-x-2 mt-3">
            {socials.map(({ label, href, icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className={`rounded-full transition-colors duration-200 p-2 ${
                  label === "Twitter/X" || label === "GitHub"
                    ? "bg-white/90 text-gray-800 hover:bg-white"
                    : "bg-gray-900/80 text-gray-300 hover:bg-gray-800"
                } ${hover || ""}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4 font-sans tracking-wide text-gray-100">
            Legal
          </h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>
              <a
                href="/terms-of-service"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 font-sans tracking-wide text-gray-100">
            Company
          </h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Call To Action & Legal */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-800 pt-8 gap-3">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-xs font-sans text-gray-400">
            © 2018-2025 XploreByte Solutions. All rights reserved.
          </span>
        </div>
        {/* Quick Contact or CTA */}
        <a
          href="/contact"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 rounded-full p-2 bg-black/70 hover:bg-emerald-500 transition"
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

export default Footer;
