"use client";

import { FC, useState } from "react";
import SalesModal from "@/components/SalesModal";
import {
  Settings,
  Users,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Zap,
} from "lucide-react";

const ManufacturingPage: FC = () => {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 py-20">
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
              WhatsApp for <span className="text-gray-600">Manufacturing</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Optimize your manufacturing operations with WhatsApp Business API.
              Improve supply chain communication, quality control, and customer
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-600 text-gray-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
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
              Why Manufacturing Companies Choose WhatsApp
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Production Updates
                </h3>
                <p className="text-base text-gray-600">
                  Send real-time production status updates to stakeholders and
                  customers.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Team Coordination
                </h3>
                <p className="text-base text-gray-600">
                  Coordinate between production teams, quality control, and
                  management.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <TrendingUp className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Supply Chain
                </h3>
                <p className="text-base text-gray-600">
                  Manage supplier communications, inventory updates, and
                  procurement processes.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quality Control
                </h3>
                <p className="text-base text-gray-600">
                  Report quality issues, send inspection results, and coordinate
                  corrective actions.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Performance Metrics
                </h3>
                <p className="text-base text-gray-600">
                  Track production KPIs, efficiency metrics, and operational
                  performance.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <Zap className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Automation
                </h3>
                <p className="text-base text-gray-600">
                  Automate alerts for equipment maintenance, safety protocols,
                  and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-600">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="font-semibold text-white mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Optimize Your Manufacturing Operations?
          </h2>
          <p className="text-base text-gray-100 mb-8">
            Join leading manufacturing companies using WhatsApp to improve
            efficiency and communication.
          </p>
          <button
            onClick={() => setIsSalesModalOpen(true)}
            className="bg-white text-gray-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
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

export default ManufacturingPage;
