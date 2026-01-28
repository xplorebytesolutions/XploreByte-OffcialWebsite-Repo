"use client";

import {
  Star,
  TrendingUp,
  Users,
  MessageCircle,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function SuccessStories() {
  return (
    <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Success <span className="text-[#11A944]">Stories</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover how businesses are transforming their customer
                engagement with our WhatsApp Business solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our clients have achieved remarkable results with WhatsApp
                Business automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  300%
                </div>
                <p className="text-gray-600">Average ROI Increase</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  10K+
                </div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#EA1752] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  4.9/5
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Customer Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real stories from real businesses that have transformed their
                operations with our solutions.
              </p>
            </div>

            <div className="space-y-12">
              {/* Story 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Beauty & Cosmetics Brand
                        </h3>
                        <p className="text-gray-600">E-commerce</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      &quot;XploreByte&apos;s WhatsApp automation transformed
                      our customer service. We now handle 5x more inquiries with
                      90% faster response times. Our customer satisfaction
                      increased from 75% to 95% in just 3 months.&quot;
                    </blockquote>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        Sarah Johnson, CEO
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#11A944]/10 to-[#0296FE]/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-semibold text-[#11A944]">
                          90% faster
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Customer Satisfaction
                        </span>
                        <span className="font-semibold text-[#11A944]">
                          +20%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inquiry Volume</span>
                        <span className="font-semibold text-[#11A944]">
                          5x increase
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue Impact</span>
                        <span className="font-semibold text-[#11A944]">
                          +150%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#0296FE] rounded-lg flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Healthcare Clinic
                        </h3>
                        <p className="text-gray-600">Medical Services</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      &quot;The appointment booking automation has been a
                      game-changer. We reduced no-shows by 60% and our staff can
                      focus on patient care instead of scheduling. The ROI was
                      evident within the first month.&quot;
                    </blockquote>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        Dr. Michael Chen, Medical Director
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#0296FE]/10 to-[#FFB800]/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">No-shows Reduced</span>
                        <span className="font-semibold text-[#0296FE]">
                          60%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Staff Efficiency</span>
                        <span className="font-semibold text-[#0296FE]">
                          +40%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Patient Satisfaction
                        </span>
                        <span className="font-semibold text-[#0296FE]">
                          +25%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue Growth</span>
                        <span className="font-semibold text-[#0296FE]">
                          +80%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Real Estate Agency
                        </h3>
                        <p className="text-gray-600">Property Management</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      &quot;Our lead generation increased by 300% after
                      implementing WhatsApp automation. The personalized
                      follow-ups and instant property information sharing have
                      revolutionized our sales process.&quot;
                    </blockquote>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        Lisa Rodriguez, Sales Director
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFB800]/10 to-[#EA1752]/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lead Generation</span>
                        <span className="font-semibold text-[#FFB800]">
                          +300%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conversion Rate</span>
                        <span className="font-semibold text-[#FFB800]">
                          +150%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-semibold text-[#FFB800]">
                          Instant
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sales Growth</span>
                        <span className="font-semibold text-[#FFB800]">
                          +200%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about their experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &quot;The best investment we&apos;ve made for our business.
                  Customer engagement has never been this easy.&quot;
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Alex Thompson</p>
                  <p className="text-gray-600">Restaurant Owner</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &quot;Incredible results in just 30 days. Our team
                  productivity increased significantly.&quot;
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Maria Garcia</p>
                  <p className="text-gray-600">Spa Manager</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &quot;The automation features saved us hours every day. Highly
                  recommended!&quot;
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">David Kim</p>
                  <p className="text-gray-600">Travel Agency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of businesses that have transformed their customer
              engagement with our WhatsApp Business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}
