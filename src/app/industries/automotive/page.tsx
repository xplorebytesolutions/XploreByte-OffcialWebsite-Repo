"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  Car,
  Wrench,
  Clock,
  Users,
  MessageCircle,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";

export default function Automotive() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                  WhatsApp for{" "}
                  <span className="text-[#11A944]">Automotive</span>
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Transform your automotive business with WhatsApp automation.
                  Streamline service bookings, maintenance alerts, and customer
                  communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/whatsapp-business"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    View Demo
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#11A944]">
                        40%
                      </div>
                      <div className="text-white/80 text-sm">
                        Faster Bookings
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0296FE]">
                        85%
                      </div>
                      <div className="text-white/80 text-sm">
                        Customer Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FFB800]">
                        60%
                      </div>
                      <div className="text-white/80 text-sm">
                        Reduced No-shows
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#EA1752]">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm">
                        Service Availability
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
                Automotive Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive WhatsApp automation designed specifically for
                automotive businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Service Booking
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated service appointment booking with real-time
                  availability and instant confirmations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Online appointment scheduling</li>
                  <li>• Service type selection</li>
                  <li>• Preferred time slot booking</li>
                  <li>• Automatic reminders</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Maintenance Alerts
                </h3>
                <p className="text-gray-600 mb-4">
                  Proactive maintenance reminders and service notifications to
                  keep vehicles in top condition.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mileage-based reminders</li>
                  <li>• Service due notifications</li>
                  <li>• Recall information</li>
                  <li>• Warranty updates</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Support
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-powered customer support for instant responses to common
                  automotive queries.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 automated support</li>
                  <li>• Service status updates</li>
                  <li>• Parts availability</li>
                  <li>• Emergency assistance</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#EA1752] rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Service Updates
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-time service progress updates and completion
                  notifications.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Service progress tracking</li>
                  <li>• Completion notifications</li>
                  <li>• Pickup reminders</li>
                  <li>• Quality feedback</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#7D47C4] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive customer database with service history and
                  preferences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Service history tracking</li>
                  <li>• Vehicle information</li>
                  <li>• Preference management</li>
                  <li>• Loyalty programs</li>
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
                  <li>• Post-service surveys</li>
                  <li>• Review collection</li>
                  <li>• Rating systems</li>
                  <li>• Improvement insights</li>
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
                Our WhatsApp solutions work for all types of automotive
                businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Service Centers
                </h3>
                <p className="text-gray-600 text-sm">
                  Streamline service appointments and customer communication.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Repair Shops
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage repair orders and provide real-time updates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Car Dealerships
                </h3>
                <p className="text-gray-600 text-sm">
                  Enhance sales and service with automated follow-ups.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fleet Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitor and maintain vehicle fleets efficiently.
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
                    &quot;XploreByte&apos;s WhatsApp automation transformed our
                    service center operations. We&apos;ve seen a 40% increase in
                    booking efficiency and 85% customer satisfaction rate.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">AS</span>
                    </div>
                    <div>
                      <div className="font-semibold">Amit Sharma</div>
                      <div className="text-white/80">
                        Owner, AutoCare Service Center
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-white/80 text-sm">Faster Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-white/80 text-sm">
                      Customer Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">60%</div>
                    <div className="text-white/80 text-sm">
                      Reduced No-shows
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">
                      Service Availability
                    </div>
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
              Ready to Transform Your Automotive Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join leading automotive businesses using WhatsApp automation to
              enhance customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/whatsapp-business"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
