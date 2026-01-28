"use client";

import { FC, useState } from "react";


import DemoModal from "@/components/DemoModal";
import {
  Shield,
  CreditCard,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Clock,
} from "lucide-react";

const FinancePage: FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
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
              WhatsApp for <span className="text-green-600">Finance</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Secure, compliant, and efficient financial communication with
              WhatsApp Business API. Enhance customer service and streamline
              financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Book Demo
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold"
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
                fontSize: "2rem",
                lineHeight: "1.2",
              }}
            >
              Why Financial Institutions Choose WhatsApp
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Secure Communication
                </h3>
                <p className="text-base text-gray-600">
                  End-to-end encryption ensures secure transmission of sensitive
                  financial information.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Payment Processing
                </h3>
                <p className="text-base text-gray-600">
                  Enable secure payment collection and transaction confirmations
                  through WhatsApp.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Investment Updates
                </h3>
                <p className="text-base text-gray-600">
                  Send real-time portfolio updates, market alerts, and
                  investment recommendations.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Customer Support
                </h3>
                <p className="text-base text-gray-600">
                  Provide instant support for account inquiries, loan
                  applications, and financial advice.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Financial Reports
                </h3>
                <p className="text-base text-gray-600">
                  Deliver personalized financial statements and performance
                  reports to clients.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  24/7 Availability
                </h3>
                <p className="text-base text-gray-600">
                  Round-the-clock customer service with automated responses and
                  human support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="font-semibold text-white mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Enhance Your Financial Services?
          </h2>
          <p className="text-base text-green-100 mb-8">
            Join leading financial institutions using WhatsApp to improve
            customer engagement and operational efficiency.
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
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
    </div>
  );
};

export default FinancePage;
