"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoModal from "../../components/DemoModal";
import SalesModal from "../../components/SalesModal";
import {
  Check,
  ArrowRight,
  Star,
  Zap,
  Users,
  Building,
  Globe,
  MessageCircle,
  CreditCard,
  HelpCircle,
  Clock,
  ShoppingCart,
  Lock,
  Megaphone,
  ArrowLeft,
} from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PricingOutsideIndia() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [addonBilling, setAddonBilling] = useState({
    chatbot: "monthly",
  });

  // CSV pricing data (USD rates)
  const pricingData = {
    Argentina: {
      marketing: "0.0618",
      utility: "0.0260",
      authentication: "0.0260",
      authenticationInternational: "n/a",
    },
    Brazil: {
      marketing: "0.0625",
      utility: "0.0068",
      authentication: "0.0068",
      authenticationInternational: "n/a",
    },
    Chile: {
      marketing: "0.0889",
      utility: "0.0200",
      authentication: "0.0200",
      authenticationInternational: "n/a",
    },
    Colombia: {
      marketing: "0.0125",
      utility: "0.0008",
      authentication: "0.0008",
      authenticationInternational: "n/a",
    },
    Egypt: {
      marketing: "0.1073",
      utility: "0.0036",
      authentication: "0.0036",
      authenticationInternational: "0.0650",
    },
    France: {
      marketing: "0.1432",
      utility: "0.0300",
      authentication: "0.0300",
      authenticationInternational: "n/a",
    },
    Germany: {
      marketing: "0.1365",
      utility: "0.0550",
      authentication: "0.0550",
      authenticationInternational: "n/a",
    },
    India: {
      marketing: "0.0107",
      utility: "0.0014",
      authentication: "0.0014",
      authenticationInternational: "0.0280",
    },
    Indonesia: {
      marketing: "0.0411",
      utility: "0.0250",
      authentication: "0.0250",
      authenticationInternational: "0.1360",
    },
    Israel: {
      marketing: "0.0353",
      utility: "0.0053",
      authentication: "0.0053",
      authenticationInternational: "n/a",
    },
    Italy: {
      marketing: "0.0691",
      utility: "0.0300",
      authentication: "0.0300",
      authenticationInternational: "n/a",
    },
    Malaysia: {
      marketing: "0.0860",
      utility: "0.0140",
      authentication: "0.0140",
      authenticationInternational: "0.0418",
    },
    Mexico: {
      marketing: "0.0305",
      utility: "0.0085",
      authentication: "0.0085",
      authenticationInternational: "n/a",
    },
    Netherlands: {
      marketing: "0.1597",
      utility: "0.0500",
      authentication: "0.0500",
      authenticationInternational: "n/a",
    },
    Nigeria: {
      marketing: "0.0516",
      utility: "0.0067",
      authentication: "0.0067",
      authenticationInternational: "0.0750",
    },
    Pakistan: {
      marketing: "0.0473",
      utility: "0.0054",
      authentication: "0.0054",
      authenticationInternational: "0.0750",
    },
    Peru: {
      marketing: "0.0703",
      utility: "0.0200",
      authentication: "0.0200",
      authenticationInternational: "n/a",
    },
    Russia: {
      marketing: "0.0802",
      utility: "0.0400",
      authentication: "0.0400",
      authenticationInternational: "n/a",
    },
    "Saudi Arabia": {
      marketing: "0.0455",
      utility: "0.0107",
      authentication: "0.0107",
      authenticationInternational: "0.0598",
    },
    "South Africa": {
      marketing: "0.0379",
      utility: "0.0076",
      authentication: "0.0076",
      authenticationInternational: "0.0200",
    },
    Spain: {
      marketing: "0.0615",
      utility: "0.0200",
      authentication: "0.0200",
      authenticationInternational: "n/a",
    },
    Turkey: {
      marketing: "0.0109",
      utility: "0.0053",
      authentication: "0.0053",
      authenticationInternational: "n/a",
    },
    "United Arab Emirates": {
      marketing: "0.0499",
      utility: "0.0157",
      authentication: "0.0157",
      authenticationInternational: "0.0510",
    },
    "United Kingdom": {
      marketing: "0.0529",
      utility: "0.0220",
      authentication: "0.0220",
      authenticationInternational: "n/a",
    },
    "North America": {
      marketing: "0.0250",
      utility: "0.0040",
      authentication: "0.0040",
      authenticationInternational: "n/a",
    },
    "Rest of Africa": {
      marketing: "0.0225",
      utility: "0.0040",
      authentication: "0.0040",
      authenticationInternational: "n/a",
    },
    "Rest of Asia Pacific": {
      marketing: "0.0732",
      utility: "0.0113",
      authentication: "0.0113",
      authenticationInternational: "n/a",
    },
    "Rest of Central & Eastern Europe": {
      marketing: "0.0860",
      utility: "0.0212",
      authentication: "0.0212",
      authenticationInternational: "n/a",
    },
    "Rest of Latin America": {
      marketing: "0.0740",
      utility: "0.0113",
      authentication: "0.0113",
      authenticationInternational: "n/a",
    },
    "Rest of Middle East": {
      marketing: "0.0341",
      utility: "0.0091",
      authentication: "0.0091",
      authenticationInternational: "n/a",
    },
    "Rest of Western Europe": {
      marketing: "0.0592",
      utility: "0.0171",
      authentication: "0.0171",
      authenticationInternational: "n/a",
    },
    Other: {
      marketing: "0.0604",
      utility: "0.0077",
      authentication: "0.0077",
      authenticationInternational: "n/a",
    },
  };

  const countries = Object.keys(pricingData);
  const currentPricing =
    pricingData[selectedCountry as keyof typeof pricingData];

  const plans = [
    {
      name: "Free Forever",
      description: "Get Started with WhatsApp Ads & WhatsApp API",
      price: "$0",
      period: "/month",
      buttonText: "Start for FREE",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "Unlimited Free Service Conversations/month",
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "$1 Free Conversation Credit",
        "Unlimited Free Service Conversations (Live chat Replies to user messages)",
        "Click to WhatsApp Ads Manager",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Upto 10 Tags",
        "Upto 5 Custom Attributes",
        "Create template messages",
        "Live Chat Dashboard",
      ],
      messageCharges: {
        marketing: currentPricing?.marketing || "View",
        utility: currentPricing?.utility || "View",
        authentication: currentPricing?.authentication || "View",
        service: "Unlimited Free Service Conversations",
      },
    },
    {
      name: "Starter",
      description: "Everything you need to get started with your business.",
      price: "$45",
      period: "/month",
      buttonText: "Get Started",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "All features in Free Plan",
        "Upto 10 Tags",
        "Upto 5 Custom Attributes",
        "1 Owner + 5 FREE Agents included (additional agents at $20/ month each)",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "Multi-Agent Live Chat",
        "Agent Transfer & Manager Monitoring",
        "2400 Messages/min",
        "Dialogflow Chatbot Integration",
        "Shared Team Inbox",
        "Click-to-WhatsApp Ads Manager",
      ],
      messageCharges: {
        marketing: currentPricing?.marketing || "View",
        utility: currentPricing?.utility || "View",
        authentication: currentPricing?.authentication || "View",
        service: "Unlimited Free Service Conversations",
      },
      chatbotFlows: "5 Chatbot Flows: $80 (charged separately)",
    },
    {
      name: "Pro",
      description:
        "Highly recommended plan to make the best use of Retargeting Campaigns",
      price: "$99",
      period: "/month",
      buttonText: "Get Started",
      buttonStyle: "bg-[#11A944] text-white hover:bg-[#0d8a3a]",
      features: [
        "All features in Basic Plan",
        "Upto 100 Tags",
        "Upto 20 Custom Attributes",
        "Campaign Scheduler",
        "Campaign Click Tracking",
        "Smart Agent Routing",
        "Campaign Budget Analytics",
        "Project APIs",
        "Carousel Template Click Tracking",
        "CSV Campaign Scheduler",
        "Google Sheets integration",
        "Birthday automation message",
        "User Access Control",
        "Automatic Failed Message Retry",
        "1 Owner + 5 FREE Agents included (additional agents at $20/month each)",
      ],
      messageCharges: {
        marketing: currentPricing?.marketing || "View",
        utility: currentPricing?.utility || "View",
        authentication: currentPricing?.authentication || "View",
        service: "Unlimited Free Service Conversations",
      },
      chatbotFlows: "5 Chatbot Flows: $80 (charged separately)",
    },
    {
      name: "Enterprise",
      description: "Recommended for 5 Lac+ Messages per month",
      price: "Custom",
      period: "",
      buttonText: "Get Connected",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "All features in Pro Plan",
        "Recommended for Brands with 5 Lac+ Users",
        "Unlimited Tags",
        "Unlimited Attributes",
        "Downloadable Reports",
        "Dedicated Account Manager",
        "Priority Customer Support",
        "Webhooks",
        "Higher Messaging Speed",
      ],
      messageCharges: {
        marketing: currentPricing?.marketing || "View",
        utility: currentPricing?.utility || "View",
        authentication: currentPricing?.authentication || "View",
        service: "Unlimited Free Service Conversations",
      },
    },
  ];

  const addons = [
    {
      name: "Chatbot Flows",
      description:
        "Build multiple WhatsApp Chatbots using a simple Drag & Drop function.",
      price: "$80",
      period: "Per Month",
      features: [
        "5 Chatbot Flows - Build 5 unique Chatbots",
        "Manage Catalogues",
        "Connect WhatsApp Payments with Chatbot",
        "Automate Sales & Support seamlessly",
      ],
    },
  ];

  const terminologies = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Customer Service Window",
      description:
        "24-hour support window that resets with each new user message. During this window, you can send free responses and utility templates without any charge.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "Unlimited Free Service Conversations",
      description:
        "User-initiated conversations that businesses receive unlimited free per month. You can reply to customer queries without any charges.",
    },
    {
      icon: <Megaphone className="w-6 h-6 text-purple-600" />,
      title: "Marketing messages",
      description:
        "Promotional messages, offers, and product updates. WhatsApp charges separately based on the user's country.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-orange-600" />,
      title: "Utility messages",
      description:
        "Transactional messages like delivery updates, receipts, and reminders. WhatsApp charges separately based on the user's country, but free if delivered within a customer service window.",
    },
    {
      icon: <Lock className="w-6 h-6 text-red-600" />,
      title: "Authentication messages",
      description:
        "Messages for verification purposes (OTP, account registration, recovery). WhatsApp charges separately based on the user's country.",
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-indigo-600" />,
      title: "Service messages",
      description:
        "User-initiated messages related to customer support, chatbot support, and queries. FREE for all businesses using AiSensy.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                XploreByte <span className="text-[#11A944]">Pricing Plans</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your WhatsApp Business needs. Start
                free and scale as you grow.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to India Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Billing Toggle & Country Selection */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Billing & Country Selection
              </h2>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Billing Toggle */}
                <div className="flex items-center gap-4">
                  <span
                    className={`text-lg ${
                      billingCycle === "monthly"
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    Monthly
                  </span>
                  <button
                    onClick={() =>
                      setBillingCycle(
                        billingCycle === "monthly" ? "yearly" : "monthly"
                      )
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      billingCycle === "yearly" ? "bg-[#11A944]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        billingCycle === "yearly"
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span
                    className={`text-lg ${
                      billingCycle === "yearly"
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    Yearly (10% Off)
                  </span>
                </div>

                {/* Country Selection */}
                <div className="flex flex-col items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Select Country:
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent text-sm font-medium min-w-[200px]"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-600">
                    Pricing shown in USD ($)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                    plan.name === "Pro"
                      ? "border-[#11A944] ring-2 ring-[#11A944]/20"
                      : "border-gray-200"
                  }`}
                >
                  {plan.name === "Pro" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#11A944] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>

                  {/* Message Charges */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Per Template Message Charges:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Marketing:</span>
                        <span className="font-medium text-[#11A944]">
                          ${plan.messageCharges.marketing}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utility:</span>
                        <span className="font-medium text-[#11A944]">
                          ${plan.messageCharges.utility}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Authentication:</span>
                        <span className="font-medium text-[#11A944]">
                          ${plan.messageCharges.authentication}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-medium">
                          {plan.messageCharges.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chatbot Flows */}
                  {plan.chatbotFlows && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">
                        {plan.chatbotFlows}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Add-Ons (View)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addons.map((addon, index) => (
                <div
                  key={addon.name}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{addon.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        {addon.price}
                      </span>
                      <span className="text-gray-600"> {addon.period}</span>
                    </div>
                    <button className="w-full py-3 px-6 bg-[#11A944] text-white rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors">
                      Buy Now →
                    </button>
                  </div>

                  <div className="space-y-3 mt-6">
                    {addon.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countrywise Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Countrywise WhatsApp Conversation Pricing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Messaging costs vary by your user&apos;s country. Check the
                exact per-message charges for sending WhatsApp messages to users
                in different regions.
              </p>
              <a
                href="/international-pricing"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Explore Pricing →
              </a>
            </div>
          </div>
        </section>

        {/* Important Pricing Terminologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important Pricing Terminologies
              </h2>
              <p className="text-lg text-gray-600">
                Let&apos;s make WhatsApp Conversational Pricing easy to
                understand for you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {terminologies.map((term, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{term.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {term.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {term.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Choose the perfect plan for your WhatsApp Business needs and start
              growing your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Talk to Sales
              </button>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                View India Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
