"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MessageCircle,
  Users,
  Heart,
  ArrowRight,
  Star,
  ThumbsUp,
  Share2,
  BookOpen,
} from "lucide-react";

export default function UserCommunity() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                <span className="text-[#11A944]">User</span> Community
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Community tips & support. Connect with other XploreByte users,
                share experiences, and learn from the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors">
                  Join Community
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  Browse Discussions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Connect with thousands of users who are building amazing
                WhatsApp solutions with XploreByte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="text-4xl font-bold text-[#11A944] mb-2">
                  2,500+
                </div>
                <div className="text-lg text-gray-600">Active Members</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="text-4xl font-bold text-[#FFB800] mb-2">
                  15,000+
                </div>
                <div className="text-lg text-gray-600">Discussions</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="text-4xl font-bold text-[#0296FE] mb-2">
                  95%
                </div>
                <div className="text-lg text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Discussions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Discussions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join the conversation and learn from our community&apos;s best
                practices and experiences.
              </p>
            </div>

            <div className="space-y-6">
              {/* Discussion 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#11A944]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Best Practices for WhatsApp Campaign Optimization
                      </h3>
                      <span className="px-2 py-1 bg-[#11A944]/10 text-[#11A944] text-sm font-medium rounded-full">
                        Hot
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Share your tips and learn from others about optimizing
                      WhatsApp campaigns for better engagement and conversion
                      rates.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        24 replies
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        156 likes
                      </span>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discussion 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#FFB800]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        API Integration Success Stories
                      </h3>
                      <span className="px-2 py-1 bg-[#FFB800]/10 text-[#FFB800] text-sm font-medium rounded-full">
                        Popular
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Share your success stories and learn how others have
                      integrated XploreByte with their existing systems.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        18 replies
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        89 likes
                      </span>
                      <span>1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discussion 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0296FE]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#0296FE]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Creative Message Template Ideas
                      </h3>
                      <span className="px-2 py-1 bg-[#0296FE]/10 text-[#0296FE] text-sm font-medium rounded-full">
                        New
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Share creative message templates and get feedback from the
                      community on your WhatsApp marketing content.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        12 replies
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        67 likes
                      </span>
                      <span>3 days ago</span>
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
              Ready to Join the Community?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Connect with fellow users, share your experiences, and get help
              from our supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors">
                Join Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Browse Topics
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
