"use client";
import React, { useState } from "react";
import StarRating from "./StarRating";
import DemoModal from "../DemoModal";

const HeroSection: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-500/10 via-purple-900/40 to-slate-950 text-white overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute left-[-10%] top-[-20%] w-[60vw] h-[60vw] bg-gradient-to-tr from-green-400 via-emerald-400 to-cyan-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute right-[-15%] bottom-[-20%] w-[60vw] h-[60vw] bg-gradient-to-tr from-purple-400 via-indigo-400 to-fuchsia-500 opacity-15 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text & CTA */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
            <span className="text-emerald-400">WhatsApp Marketing,</span>{" "}
            Reimagined.
            <br />
            <span className="text-white">
              Engage, Automate & Grow with{" "}
              <span className="text-emerald-300">xChatByte</span>
            </span>
          </h1>
          <p className="text-xl mb-7 max-w-lg text-slate-200">
            The next-gen WhatsApp marketing & automation platform.
            <br />
            Capture leads, automate conversations, boost conversions—all from a
            single, beautiful dashboard.
          </p>
          <StarRating rating={4.9} count={182} />
          {/* Interactive CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3 rounded-xl font-bold shadow-xl text-lg transition"
            >
              Book a Demo
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-7 py-3 rounded-xl font-bold shadow-xl text-lg transition"
            >
              Book a Demo
            </button>
          </div>
        </div>
        {/* Right: Hero Illustration (no buttons in image) */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/whatsapp-business/whats_hero.png"
            alt="WhatsApp Marketing Automation Product"
            className="w-[340px] h-[440px] object-contain rounded-3xl shadow-2xl border-4 border-emerald-400/10 bg-slate-900"
          />
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

export default HeroSection;
