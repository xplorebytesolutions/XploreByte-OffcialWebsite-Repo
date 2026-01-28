"use client";

import { useState } from "react";


import DemoModal from "../../components/DemoModal";
import SalesModal from "../../components/SalesModal";
import CTAForm from "../../components/CTAForm";
import { Calendar, Users, Shield, Zap } from "lucide-react";

export default function DemoRequest() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Request a <span className="text-[#11A944]">Demo</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                See how XploreByte can transform your WhatsApp Business
                communication. Get a personalized demo tailored to your
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You&apos;ll See in Your Demo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our personalized demos show you exactly how our solutions can
                work for your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Live Setup
                </h3>
                <p className="text-gray-600">
                  See how to set up your WhatsApp Business automation in
                  real-time
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Team Collaboration
                </h3>
                <p className="text-gray-600">
                  Learn how your team can manage conversations from one
                  dashboard
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Security & Compliance
                </h3>
                <p className="text-gray-600">
                  Understand our security measures and compliance features
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Automation Features
                </h3>
                <p className="text-gray-600">
                  Explore chatbots, flows, and campaign automation capabilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTAForm
              title="Schedule Your Demo"
              subtitle="Get a personalized 30-minute demo of our WhatsApp Business solutions tailored to your industry and needs."
              showCompany={true}
              showPhone={true}
              showMessage={true}
              buttonText="Schedule Demo"
            />
          </div>
        </section>

        {/* Why Choose Our Demo */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Book a Demo?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our demos are designed to show you real value, not just
                features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Industry-Specific Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  We tailor our demo to your specific industry, showing relevant
                  use cases and workflows that matter to your business.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Beauty & Cosmetics workflows</li>
                  <li>• Healthcare appointment automation</li>
                  <li>• Real estate lead management</li>
                  <li>• E-commerce customer support</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ROI-Focused Approach
                </h3>
                <p className="text-gray-600 mb-4">
                  We show you exactly how our solutions can improve your metrics
                  and drive measurable business results.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Increase response rates by 90%</li>
                  <li>• Reduce support costs by 60%</li>
                  <li>• Boost customer satisfaction</li>
                  <li>• Generate more qualified leads</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 mb-4">
                  Our WhatsApp Business experts guide you through best practices
                  and help you plan your implementation strategy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Implementation roadmap</li>
                  <li>• Best practices for your industry</li>
                  <li>• Integration recommendations</li>
                  <li>• Ongoing support options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about their demo experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-yellow-400 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &quot;The demo was incredibly insightful. They showed us
                  exactly how to automate our customer support and the results
                  have been amazing.&quot;
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">CEO, Beauty Brand</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-yellow-400 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &quot;The personalized demo helped us understand how to
                  implement WhatsApp automation in our healthcare practice.
                  Highly recommended!&quot;
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    Dr. Michael Chen
                  </p>
                  <p className="text-gray-600">Medical Director</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-yellow-400 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &quot;The demo exceeded our expectations. We saw immediate
                  value and signed up right after the session.&quot;
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Lisa Rodriguez</p>
                  <p className="text-gray-600">Sales Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join hundreds of companies who have transformed their customer
              communication with our WhatsApp Business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo-form"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Schedule Your Demo
              </a>
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
