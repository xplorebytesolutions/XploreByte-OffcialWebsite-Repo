"use client";

import { useState } from "react";


import SalesModal from "../../../components/SalesModal";
import DemoModal from "../../../components/DemoModal";
import {
  BookOpen,
  Users,
  MessageCircle,
  Calendar,
  Award,
  GraduationCap,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";

export default function Education() {
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
                <h1
                  className="font-bold text-white mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  WhatsApp for <span className="text-[#11A944]">Education</span>
                </h1>
                <p className="text-base text-white/80 mb-8">
                  Enhance student engagement and parent communication with
                  WhatsApp automation. Streamline admissions, attendance, and
                  academic updates.
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
                        90%
                      </div>
                      <div className="text-white/80 text-sm">
                        Parent Engagement
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0296FE]">
                        75%
                      </div>
                      <div className="text-white/80 text-sm">
                        Faster Communication
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FFB800]">
                        95%
                      </div>
                      <div className="text-white/80 text-sm">
                        Message Delivery
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#EA1752]">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm">
                        Student Support
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
              <h2
                className="font-semibold text-gray-900 mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                Education Solutions
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Comprehensive WhatsApp automation designed specifically for
                educational institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Student Communication
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Direct communication with students for assignments,
                  announcements, and academic updates.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• Assignment notifications</li>
                  <li>• Exam schedules</li>
                  <li>• Grade announcements</li>
                  <li>• Academic reminders</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#0296FE] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Parent Engagement
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Keep parents informed about their child&apos;s progress and
                  school activities.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• Progress reports</li>
                  <li>• Attendance updates</li>
                  <li>• Event notifications</li>
                  <li>• Fee reminders</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FFB800] rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Admission Management
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Streamline the admission process with automated applications
                  and follow-ups.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• Application forms</li>
                  <li>• Document collection</li>
                  <li>• Interview scheduling</li>
                  <li>• Admission confirmations</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#EA1752] rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Student Support
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  AI-powered support for student queries and academic
                  assistance.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• 24/7 academic support</li>
                  <li>• Course information</li>
                  <li>• Library services</li>
                  <li>• Career guidance</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#7D47C4] rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Event Management
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Organize and manage school events with automated invitations
                  and updates.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• Event invitations</li>
                  <li>• RSVP management</li>
                  <li>• Reminder notifications</li>
                  <li>• Feedback collection</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#11A944] rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Alumni Engagement
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Maintain connections with alumni through automated newsletters
                  and updates.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• Alumni newsletters</li>
                  <li>• Reunion invitations</li>
                  <li>• Career opportunities</li>
                  <li>• Donation campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="font-semibold text-gray-900 mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                Perfect For
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Our WhatsApp solutions work for all types of educational
                institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Schools
                </h3>
                <p className="text-base text-gray-600">
                  Enhance parent-teacher communication and student engagement.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Colleges
                </h3>
                <p className="text-base text-gray-600">
                  Streamline admissions and student services with automation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Coaching Centers
                </h3>
                <p className="text-base text-gray-600">
                  Manage student enrollment and course updates efficiently.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Universities
                </h3>
                <p className="text-base text-gray-600">
                  Comprehensive student lifecycle management and support.
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
                  <h2
                    className="font-semibold mb-6"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.5rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Success Story
                  </h2>
                  <blockquote className="text-base mb-6">
                    &quot;XploreByte&apos;s WhatsApp automation revolutionized
                    our parent communication. We&apos;ve achieved 90% parent
                    engagement and 75% faster communication.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">DP</span>
                    </div>
                    <div>
                      <div className="font-semibold">Dr. Priya Sharma</div>
                      <div className="text-white/80">
                        Principal, Delhi Public School
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">90%</div>
                    <div className="text-white/80 text-sm">
                      Parent Engagement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">75%</div>
                    <div className="text-white/80 text-sm">
                      Faster Communication
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-white/80 text-sm">
                      Message Delivery
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">Student Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-semibold text-white mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-base text-white/80 mb-8">
              Join leading educational institutions using WhatsApp automation to
              enhance student and parent engagement.
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
