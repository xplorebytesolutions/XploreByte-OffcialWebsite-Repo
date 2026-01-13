"use client";

import React, { useState } from "react";
import DemoModal from "./DemoModal";

const CTASection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section
      className="text-black bg-cover bg-center pt-24 pb-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1673526759337-c4d4c4c8bc72?w=3840&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl sm:text-5xl mb-6 font-manrope">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-sans text-emerald-900">
            Join hundreds of companies who trust us to deliver exceptional
            digital solutions. Lets discuss how we can help you achieve your
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl font-sans bg-[#25D366] text-white hover:bg-[#1ea854]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Try Now
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all duration-200 font-sans shadow-lg hover:shadow-xl bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;
