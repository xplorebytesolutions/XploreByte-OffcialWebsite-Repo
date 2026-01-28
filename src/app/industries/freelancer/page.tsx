"use client";

import { useState } from "react";


import SalesModal from "../../../components/SalesModal";
import DemoModal from "../../../components/DemoModal";
import {
  Briefcase,
  Clock,
  Users,
  MessageCircle,
  DollarSign,
  Star,
  ArrowRight,
  Check,
  Calendar,
} from "lucide-react";

export default function Freelancer() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                  WhatsApp for{" "}
                  <span className="text-[#11A944]">Freelancers</span>
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Streamline your freelance business with WhatsApp automation.
                  Manage clients, projects, and payments efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsSalesModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
                  >
                    Talk to Sales
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#11A944]">
                        60%
                      </div>
                      <div className="text-white/80 text-sm">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0296FE]">
                        90%
                      </div>
                      <div className="text-white/80 text-sm">
                        Client Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FFB800]">
                        40%
                      </div>
                      <div className="text-white/80 text-sm">More Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#EA1752]">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm">
                        Client Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Freelancer Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive WhatsApp automation designed specifically for
                freelancers and independent professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Project Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated project updates, milestone tracking, and client
                  communication.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Project status updates</li>
                  <li>• Milestone notifications</li>
                  <li>• Deadline reminders</li>
                  <li>• Progress reports</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Payment Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated invoicing, payment reminders, and financial
                  tracking.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Invoice generation</li>
                  <li>• Payment reminders</li>
                  <li>• Payment confirmations</li>
                  <li>• Financial reports</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Client Communication
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-powered client support and automated responses for common
                  queries.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 client support</li>
                  <li>• FAQ automation</li>
                  <li>• Service inquiries</li>
                  <li>• Availability updates</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#EA1752] rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Appointment Booking
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated scheduling system for client meetings and
                  consultations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Meeting scheduling</li>
                  <li>• Calendar integration</li>
                  <li>• Reminder notifications</li>
                  <li>• Rescheduling handling</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#7D47C4] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Client Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive client database with project history and
                  preferences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Client profiles</li>
                  <li>• Project history</li>
                  <li>• Communication logs</li>
                  <li>• Preference tracking</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Feedback & Reviews
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated feedback collection and review management system.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Post-project surveys</li>
                  <li>• Review collection</li>
                  <li>• Rating systems</li>
                  <li>• Testimonial management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perfect For
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our WhatsApp solutions work for all types of freelancers and
                independent professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consultants
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage client relationships and project communications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Freelancers
                </h3>
                <p className="text-gray-600 text-sm">
                  Streamline project management and client communication.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Coaches
                </h3>
                <p className="text-gray-600 text-sm">
                  Schedule sessions and manage client relationships.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Service Providers
                </h3>
                <p className="text-gray-600 text-sm">
                  Automate bookings and customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#11A944] to-[#0296FE] rounded-2xl p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Success Story</h2>
                  <blockquote className="text-lg mb-6">
                    &quot;XploreByte&apos;s WhatsApp automation transformed my
                    freelance business. I&apos;ve saved 60% of my time and
                    increased client satisfaction by 90%.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Miller</div>
                      <div className="text-white/80">
                        Freelance Marketing Consultant
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">60%</div>
                    <div className="text-white/80 text-sm">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">90%</div>
                    <div className="text-white/80 text-sm">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-white/80 text-sm">More Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">Client Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Freelance Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join successful freelancers using WhatsApp automation to enhance
              client relationships and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Talk to Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
