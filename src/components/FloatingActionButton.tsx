"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTimes, FaCommentDots } from "react-icons/fa";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      label: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/918826165727",
      color: "bg-[#25D366] hover:bg-[#1ea854]",
      delay: "delay-75",
    },
    {
      label: "Call",
      icon: <FaPhoneAlt className="w-4 h-4" />,
      href: "tel:+918826165727",
      color: "bg-blue-600 hover:bg-blue-700",
      delay: "delay-100",
    },
    {
      label: "Email",
      icon: <FaEnvelope className="w-4 h-4" />,
      href: "mailto:hello@xplorebyte.com",
      color: "bg-red-600 hover:bg-red-700",
      delay: "delay-150",
    },
  ];

  return (
    <div className="fixed bottom-6 right-0 z-50">
      {/* Contact Options */}
      <div
        className={`flex flex-col-reverse gap-3 mb-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {contactOptions.map((option, index) => (
          <a
            key={option.label}
            href={option.href}
            target={option.href.startsWith("http") ? "_blank" : "_self"}
            rel={option.href.startsWith("http") ? "noopener noreferrer" : ""}
            className={`flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transform transition-all duration-300 ${
              option.color
            } ${option.delay} ${
              isOpen ? "translate-x-0" : "translate-x-16"
            } hover:scale-105`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
            }}
          >
            {option.icon}
            <span className="font-medium text-sm whitespace-nowrap">
              {option.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700 rotate-90"
            : "bg-[#25D366] hover:bg-[#1ea854] hover:scale-110"
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 text-white" />
        ) : (
          <FaWhatsapp className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Chat with us
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
