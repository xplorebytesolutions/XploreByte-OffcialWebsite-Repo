"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  Plane,
  MapPin,
  Users,
  MessageCircle,
  Calendar,
  Star,
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";

export default function Travel() {
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
                  <span className="text-[#11A944]">Travel & Tourism</span>
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Transform your travel business with WhatsApp automation.
                  Streamline bookings, customer service, and travel management.
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
                        70%
                      </div>
                      <div className="text-white/80 text-sm">
                        Faster Bookings
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0296FE]">
                        95%
                      </div>
                      <div className="text-white/80 text-sm">
                        Customer Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FFB800]">
                        50%
                      </div>
                      <div className="text-white/80 text-sm">More Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#EA1752]">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm">
                        Travel Support
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
                Travel Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive WhatsApp automation designed specifically for
                travel and tourism businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Booking Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated travel bookings with real-time availability and
                  instant confirmations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Flight bookings</li>
                  <li>• Hotel reservations</li>
                  <li>• Package deals</li>
                  <li>• Travel confirmations</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Travel Updates
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-time travel updates, itinerary changes, and destination
                  information.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Flight status updates</li>
                  <li>• Weather alerts</li>
                  <li>• Itinerary changes</li>
                  <li>• Local information</li>
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
                  AI-powered support for travel queries, emergencies, and
                  assistance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 travel support</li>
                  <li>• Emergency assistance</li>
                  <li>• Travel advice</li>
                  <li>• Booking modifications</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#EA1752] rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trip Planning
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated trip planning with recommendations and itinerary
                  management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Itinerary creation</li>
                  <li>• Activity recommendations</li>
                  <li>• Restaurant bookings</li>
                  <li>• Tour scheduling</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#7D47C4] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Engagement
                </h3>
                <p className="text-gray-600 mb-4">
                  Build customer loyalty with personalized offers and travel
                  recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Loyalty programs</li>
                  <li>• Special offers</li>
                  <li>• Travel reminders</li>
                  <li>• Feedback collection</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Reviews & Feedback
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated feedback collection and review management system.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Post-trip surveys</li>
                  <li>• Review collection</li>
                  <li>• Rating systems</li>
                  <li>• Experience improvement</li>
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
                Our WhatsApp solutions work for all types of travel and tourism
                businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Travel Agencies
                </h3>
                <p className="text-gray-600 text-sm">
                  Streamline bookings and customer service with automation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hotels
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage reservations and guest communication efficiently.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tour Operators
                </h3>
                <p className="text-gray-600 text-sm">
                  Automate tour bookings and customer support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Airlines
                </h3>
                <p className="text-gray-600 text-sm">
                  Provide real-time updates and customer service.
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
                    "XploreByte's WhatsApp automation transformed our travel
                    agency operations. We've seen a 70% increase in booking
                    efficiency and 95% customer satisfaction."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">MJ</span>
                    </div>
                    <div>
                      <div className="font-semibold">Michael Johnson</div>
                      <div className="text-white/80">
                        Owner, Adventure Travel Co.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">70%</div>
                    <div className="text-white/80 text-sm">Faster Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-white/80 text-sm">
                      Customer Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50%</div>
                    <div className="text-white/80 text-sm">More Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">Travel Support</div>
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
              Ready to Transform Your Travel Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join leading travel businesses using WhatsApp automation to
              enhance customer experience and increase bookings.
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
