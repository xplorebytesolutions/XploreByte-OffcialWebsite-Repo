"use client";


import {
  BookOpen,
  ArrowRight,
  UserPlus,
  MessageSquare,
  DollarSign,
  Zap,
  CheckCircle,
  Search,
} from "lucide-react";
import Link from "next/link";

const guides = [
  {
    category: "Getting Started",
    icon: <UserPlus className="w-6 h-6" />,
    color: "from-emerald-400 to-cyan-400",
    bgColor: "from-emerald-400/10 to-cyan-400/10",
    borderColor: "border-emerald-400/20",
    items: [
      {
        title: "How to Create an Account on XploreByte",
        description:
          "Step-by-step guide to create your XploreByte account and get started with WhatsApp Business API.",
        url: "/guides/getting-started/create-account",
        readTime: "5 min read",
      },
      {
        title: "How to Apply for WhatsApp Business API",
        description:
          "Complete guide on applying for WhatsApp Business API verification through XploreByte.",
        url: "/guides/getting-started/apply-whatsapp-api",
        readTime: "10 min read",
      },
      {
        title: "Create Your First Campaign",
        description:
          "Learn how to set up and launch your first WhatsApp marketing campaign.",
        url: "/guides/getting-started/first-campaign",
        readTime: "8 min read",
      },
    ],
  },
  {
    category: "Understanding Features",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-blue-400 to-purple-400",
    bgColor: "from-blue-400/10 to-purple-400/10",
    borderColor: "border-blue-400/20",
    items: [
      {
        title: "Templates vs Flows: Key Differences",
        description:
          "Understanding the difference between WhatsApp templates and flows, and when to use each.",
        url: "/guides/understanding-features/templates-vs-flows",
        readTime: "7 min read",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    icon: <DollarSign className="w-6 h-6" />,
    color: "from-orange-400 to-pink-400",
    bgColor: "from-orange-400/10 to-pink-400/10",
    borderColor: "border-orange-400/20",
    items: [
      {
        title: "How Pricing Works Country-wise",
        description:
          "Understanding how XploreByte pricing varies by country and region.",
        url: "/guides/pricing-billing/country-pricing",
        readTime: "6 min read",
      },
    ],
  },
];

export default function Guides() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1
                className="font-extrabold text-white mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "3rem",
                  lineHeight: "1.2",
                }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Guides
                </span>{" "}
                & Tutorials
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Everything you need to know to get the most out of XploreByte.
                Step-by-step guides, feature explanations, and best practices.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides by Category */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {guides.map((category, index) => (
              <div key={category.category} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <h2
                    className="font-bold text-gray-900"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map(guide => (
                    <Link
                      key={guide.title}
                      href={guide.url}
                      className="group block bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${category.bgColor} border ${category.borderColor} rounded-lg flex items-center justify-center`}
                        >
                          {category.icon}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {guide.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-base text-gray-600 mb-4">
                        {guide.description}
                      </p>
                      <div className="flex items-center text-emerald-600 font-medium">
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Need Help Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Still Need Help?
              </h2>
              <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our support
                team is ready to help you get the most out of XploreByte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/support-center"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  Visit Support Center
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
