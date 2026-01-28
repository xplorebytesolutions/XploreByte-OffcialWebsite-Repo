"use client";

import { FC, useState } from "react";
import SalesModal from "@/components/SalesModal";
import {
  Building2,
  Users,
  Shield,
  MessageSquare,
  BarChart3,
  Clock,
} from "lucide-react";

const PublicSectorPage: FC = () => {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

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
              WhatsApp for <span className="text-blue-600">Public Sector</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Enhance citizen services with WhatsApp Business API. Improve
              government communication, public engagement, and service delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Watch Demo
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
              Why Public Sector Organizations Choose WhatsApp
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Citizen Services
                </h3>
                <p className="text-base text-gray-600">
                  Provide instant access to government services, forms, and
                  information.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Public Engagement
                </h3>
                <p className="text-base text-gray-600">
                  Engage with citizens through surveys, feedback collection, and
                  community updates.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Emergency Alerts
                </h3>
                <p className="text-base text-gray-600">
                  Send critical emergency notifications and public safety alerts
                  to citizens.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Support Services
                </h3>
                <p className="text-base text-gray-600">
                  Provide 24/7 citizen support for inquiries, complaints, and
                  service requests.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Analytics & Reporting
                </h3>
                <p className="text-base text-gray-600">
                  Track citizen engagement, service usage, and satisfaction
                  metrics.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Appointment Booking
                </h3>
                <p className="text-base text-gray-600">
                  Enable citizens to book appointments for government services
                  and consultations.
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
              fontSize: "2rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Enhance Citizen Services?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Join government organizations using WhatsApp to improve citizen
            engagement and service delivery.
          </p>
          <button
            onClick={() => setIsSalesModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Talk to Sales
          </button>
        </div>
      </section>

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </main>
  );
};

export default PublicSectorPage;
