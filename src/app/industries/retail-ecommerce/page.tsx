"use client";

import { FC, useState } from "react";
import DemoModal from "@/components/DemoModal";
import {
  ShoppingCart,
  Users,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Zap,
} from "lucide-react";

export default function RetailEcommerce() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2.5rem",
                lineHeight: "1.2",
              }}
            >
              WhatsApp for{" "}
              <span className="text-blue-600">Retail & E-commerce</span>
            </h1>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Transform your retail business with WhatsApp Business API. Boost
              sales, improve customer service, and create seamless shopping
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Book Demo
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-semibold text-center text-gray-900 mb-16"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Why Retail & E-commerce Businesses Choose WhatsApp
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <ShoppingCart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Catalogs
                </h3>
                <p className="text-base text-gray-600">
                  Showcase your products directly in WhatsApp with rich media
                  catalogs and instant ordering.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Customer Support
                </h3>
                <p className="text-base text-gray-600">
                  Provide instant support for order inquiries, returns, and
                  product questions.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Sales Growth
                </h3>
                <p className="text-base text-gray-600">
                  Increase conversion rates with personalized shopping
                  experiences and targeted promotions.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Order Management
                </h3>
                <p className="text-base text-gray-600">
                  Handle order confirmations, tracking updates, and delivery
                  notifications seamlessly.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Analytics
                </h3>
                <p className="text-base text-gray-600">
                  Track customer interactions, sales performance, and campaign
                  effectiveness.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Automation
                </h3>
                <p className="text-base text-gray-600">
                  Automate order processing, inventory updates, and customer
                  follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="font-semibold text-white mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Join thousands of retail businesses using WhatsApp to boost sales
            and customer satisfaction.
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Book Demo
          </button>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  );
};
