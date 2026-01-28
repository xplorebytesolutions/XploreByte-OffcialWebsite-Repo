"use client";

import { FC, useState } from "react";
import SalesModal from "@/components/SalesModal";
import {
  Truck,
  MapPin,
  Clock,
  MessageSquare,
  BarChart3,
  Zap,
} from "lucide-react";

const TransportationLogisticsPage: FC = () => {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
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
              <span className="text-orange-600">
                Transportation & Logistics
              </span>
            </h1>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Streamline your logistics operations with WhatsApp Business API.
              Enhance delivery tracking, driver communication, and customer
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
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
                fontSize: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Why Transportation & Logistics Companies Choose WhatsApp
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <Truck className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Delivery Tracking
                </h3>
                <p className="text-base text-gray-600">
                  Provide real-time delivery updates and tracking information to
                  customers.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Route Optimization
                </h3>
                <p className="text-base text-gray-600">
                  Send optimized routes to drivers and coordinate pickup and
                  delivery schedules.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Time Management
                </h3>
                <p className="text-base text-gray-600">
                  Schedule deliveries, send arrival notifications, and manage
                  appointment bookings.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <MessageSquare className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Driver Communication
                </h3>
                <p className="text-base text-gray-600">
                  Enable seamless communication between dispatchers, drivers,
                  and customers.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <BarChart3 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Performance Analytics
                </h3>
                <p className="text-base text-gray-600">
                  Track delivery performance, driver efficiency, and customer
                  satisfaction metrics.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Automation
                </h3>
                <p className="text-base text-gray-600">
                  Automate dispatch notifications, delivery confirmations, and
                  customer updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="font-semibold text-white mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Optimize Your Logistics Operations?
          </h2>
          <p className="text-base text-orange-100 mb-8">
            Join leading transportation companies using WhatsApp to improve
            efficiency and customer satisfaction.
          </p>
          <button
            onClick={() => setIsSalesModalOpen(true)}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
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
    </div>
  );
};

export default TransportationLogisticsPage;
