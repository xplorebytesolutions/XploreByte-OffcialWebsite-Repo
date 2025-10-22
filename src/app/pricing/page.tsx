"use client";

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
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [region, setRegion] = useState("india");
  const [addonBilling, setAddonBilling] = useState({
    virtualNumber: "monthly",
    chatbot: "monthly",
  });

  useEffect(() => {
    if (region === "outside-india") {
      router.push("/pricing-outside-india");
    }
  }, [region, router]);

  const plans = [
    {
      name: "Free Forever",
      description: "Get Started with WhatsApp Ads & WhatsApp API",
      price: "₹0",
      period: "Forever",
      buttonText: "Get Started",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "₹50 Free Conversation Credits",
        "Unlimited Free Service Conversations",
        "Click to WhatsApp Ads Manager",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Upto 10 Tags",
        "Upto 5 Custom Attributes",
        "Create template messages",
        "Live Chat Dashboard",
      ],
      messageCharges: {
        marketing: "₹0.88",
        utility: "₹0.125",
        authentication: "₹0.125",
        service: "Unlimited Free",
      },
    },
    {
      name: "Starter",
      description: "Everything you need to get started with your business.",
      price: "₹1350",
      period: "month",
      buttonText: "Get Started",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "All Features of Free Forever",
        "1 Owner + 5 FREE Agents included. Additional Agents at ₹750/ month each",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "Multi-Agent Live Chat",
        "2400 Messages/min",
        "Dialogflow Chatbot Integration",
        "Shared Team Inbox",
        "Click-to-WhatsApp Ads Manager",
      ],
      messageCharges: {
        marketing: "₹0.88",
        utility: "₹0.125",
        authentication: "₹0.125",
        service: "Unlimited Free",
      },
      chatbotFlows: "5 Chatbot Flows: ₹2500 (charged separately)",
    },
    {
      name: "Pro",
      description:
        "Highly recommended plan to make the best use of Retargeting Campaigns",
      price: "₹2880",
      period: "month",
      buttonText: "Get Started",
      buttonStyle: "bg-[#11A944] text-white hover:bg-[#0d8a3a]",
      popular: true,
      features: [
        "All features in Starter Plan",
        "Upto 100 Tags",
        "Upto 20 Custom Attributes",
        "Campaign Scheduler",
        "Campaign Click Tracking",
        "Campaign Budget Analytics",
        "Carousel Template Click Tracking",
        "CSV Campaign Scheduler",
        "User Access Control",
        "Automatic Failed Message Retry",
        "1 Owner + 5 FREE Agents included. Additional Agents at ₹750/ month each",
      ],
      messageCharges: {
        marketing: "₹0.88",
        utility: "₹0.125",
        authentication: "₹0.125",
        service: "Unlimited Free",
      },
      chatbotFlows: "5 Chatbot Flows: ₹2500 (charged separately)",
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
        marketing: "Custom",
        utility: "₹0.125",
        authentication: "₹0.125",
        service: "Unlimited Free",
      },
    },
  ];

  const addons = [
    {
      name: "Indian Virtual Number",
      description:
        "Buy Indian Virtual Number for WhatsApp Business API (Requires GST/MSME for KYC)",
      price: "₹199",
      period: "Per Month",
      features: [
        "Indian Number (Eg. +9186XXXX1234, +9186XXXX7891)",
        "No Need to maintain SIM Card",
        "Use this Number to get WhatsApp Business API via AiSensy",
        "Free Onboarding Call",
      ],
      billingOptions: ["monthly", "quarterly"],
    },
    {
      name: "WhatsApp Chatbot Flow Builder",
      description: "Get Started with Drag & Drop Chatbot Flow Builder",
      price: "₹2500",
      period: "Per Month",
      features: [
        "5 WhatsApp Chatbots per month",
        "5 Chatbot Flows - Build 5 unique Chatbots",
        "Manage Catalogues",
        "Connect WhatsApp Payments with Chatbot",
        "Automate Sales & Support seamlessly",
      ],
      billingOptions: ["monthly", "yearly"],
    },
  ];

  const terminology = [
    {
      title: "Customer Service Window",
      description:
        "24-hour window for free responses to customer messages. After 24 hours, you need to use template messages.",
    },
    {
      title: "Unlimited Free Service messages",
      description:
        "Free service messages received by AiSensy businesses from users who initiate conversations.",
    },
    {
      title: "Marketing messages",
      description:
        "Promotional messages sent to customers. Cost: ₹0.88/message for Indian users.",
    },
    {
      title: "Utility Messages",
      description:
        "Transactional messages like delivery updates, order confirmations. Cost: ₹0.125/message for Indian users.",
    },
    {
      title: "Authentication Messages",
      description:
        "Verification messages like OTP, password reset. Cost: ₹0.125/message for Indian users.",
    },
    {
      title: "Service Messages",
      description:
        "User-initiated support messages. Free for AiSensy businesses.",
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
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose the perfect plan for your business. Transparent pricing
                with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Monthly / Yearly Subscription | Unlimited Users Plan
              </h2>
              <div className="flex items-center justify-center gap-4">
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
            </div>
          </div>
        </section>

        {/* Region Toggle */}
        <section className="py-4 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <span
                  className={`text-lg ${
                    region === "india"
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  India
                </span>
                <button
                  onClick={() =>
                    setRegion(region === "india" ? "outside-india" : "india")
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    region === "outside-india" ? "bg-[#11A944]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      region === "outside-india"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-lg ${
                    region === "outside-india"
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  Outside India
                </span>
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
                  className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-[#11A944] scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#11A944] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {plan.description}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>

                  {/* Message Charges */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Per Template Message Charges:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Marketing:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.marketing}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utility:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.utility}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Authentication:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.authentication}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.chatbotFlows && (
                    <div className="mb-6 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800 font-medium">
                        {plan.chatbotFlows}
                      </p>
                    </div>
                  )}

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Country-wise Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Countrywise per WhatsApp message Pricing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Messaging costs vary by your user's country. Check the exact
                per-message charges for sending WhatsApp messages to users in
                different regions.
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

        {/* Add-Ons */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Add-Ons (Charged separately)
              </h2>
              <p className="text-lg text-gray-600">
                Get Started with Virtual Number & Drag & Drop Flow Builder
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{addon.description}</p>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-4 mb-4">
                      {addon.billingOptions.map(option => (
                        <button
                          key={option}
                          onClick={() =>
                            setAddonBilling(prev => ({
                              ...prev,
                              [addon.name.toLowerCase().replace(/\s+/g, "")]:
                                option,
                            }))
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            addonBilling[
                              addon.name.toLowerCase().replace(/\s+/g, "")
                            ] === option
                              ? "bg-[#11A944] text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {option === "monthly"
                            ? "Bill Monthly"
                            : option === "quarterly"
                            ? "Billed Quarterly"
                            : "Billed Yearly"}
                        </button>
                      ))}
                    </div>

                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {addon.price} {addon.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-[#11A944] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors">
                    Buy Now →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Terminologies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important Pricing Terminologies
              </h2>
              <p className="text-lg text-gray-600">
                Let's make WhatsApp API Pricing easy to understand for you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {terminology.map((term, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {term.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{term.description}</p>
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
              Join hundreds of businesses already using our WhatsApp API
              platform to transform their business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/start-free-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
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
