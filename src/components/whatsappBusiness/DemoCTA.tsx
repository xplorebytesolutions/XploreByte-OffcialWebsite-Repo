"use client";

import React, { useState } from "react";
import DemoModal from "../DemoModal";

const DemoCTA: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white border-t border-b border-slate-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Ready to See xChatByte in Action?
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Discover how hundreds of businesses grow with our platform.
          <br />
          Schedule a free demo or chat with our experts today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-lg font-semibold shadow transition text-lg"
          >
            Book a Demo
          </button>
          <a
            href="tel:+911234567890"
            className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-3 rounded-lg font-semibold shadow transition text-lg"
          >
            Call Us
          </a>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-7 py-3 rounded-lg font-semibold shadow transition text-lg"
          >
            WhatsApp Us
          </a>
        </div>
        <div className="mt-5 text-sm text-slate-500">
          500+ businesses onboarded • Fast onboarding • No obligation
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

export default DemoCTA;
