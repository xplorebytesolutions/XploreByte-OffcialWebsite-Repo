"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Clock,
  Calendar,
  User,
  PlayCircle,
} from "lucide-react";

export default function ApplyWhatsAppAPIPage() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tableOfContents = [
    { id: "intro", label: "Introduction" },
    { id: "step1", label: "1. Experience the Future of WhatsApp Business API" },
    { id: "step2", label: "2. Fill your details and click Continue Signup" },
    { id: "step3", label: "3. Select your XploreByte Plan" },
    { id: "step4", label: "4. Get Started with Facebook" },
    { id: "step5", label: "5. Click Continue" },
    { id: "step6", label: "6. Click Get Started" },
    { id: "step7", label: "7. Select your Facebook Business Manager Account" },
    { id: "step8", label: "8. Create a new WhatsApp Business Profile" },
    { id: "step9", label: "9. Enter your phone number and verify it" },
    { id: "step10", label: "10. Application under review" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <>
      <main className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-emerald-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-emerald-600">
                Guides
              </Link>
              <span>/</span>
              <span className="text-gray-900">
                How to apply for WhatsApp Business API
              </span>
            </div>
          </nav>

          <div className="flex gap-8">
            {/* Main Content - Left Side */}
            <div className="flex-1 max-w-4xl">
              {/* Title */}
              <h1
                className="text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                How to apply for WhatsApp Business API
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By XploreByte Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Updated on: 20th March 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </div>

              {/* Introduction */}
              <section
                id="intro"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 mb-4">
                  WhatsApp Business API is a powerful tool that allows
                  businesses to communicate with their customers on WhatsApp at
                  scale. With XploreByte, you can easily apply for and get
                  approved for WhatsApp Business API in just a few simple steps.
                </p>
                <p className="text-gray-700 mb-4">
                  This comprehensive guide will walk you through the entire
                  process, from creating your account to getting your WhatsApp
                  Business API approved. Let&apos;s get started!
                </p>
              </section>

              {/* Video Section */}
              <section className="mb-12">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500 aspect-video flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white font-bold text-2xl mb-2">
                        GET FREE WhatsApp API
                      </div>
                      <div className="text-white font-semibold text-lg">
                        in 10 MINS
                      </div>
                    </div>
                  </div>
                  {/* Placeholder: Replace with actual video */}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  You can watch our video on how to apply for WhatsApp Business
                  API for free.{" "}
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover:underline"
                  >
                    Contact us
                  </Link>{" "}
                  to get the video link.
                </p>
              </section>

              {/* Step 1 */}
              <section
                id="step1"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  1. Experience the Future of WhatsApp Business API
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Experience the Future of WhatsApp Business API
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Free WhatsApp Business API
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Free WhatsApp Business API Setup
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Free WhatsApp Business API Hosting
                        </span>
                      </li>
                    </ul>
                    <button className="mt-6 w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                      Get Started for Free
                    </button>
                  </div>
                  <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Get Started for Free
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="url"
                        placeholder="Website URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="terms" className="mt-1" />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          I agree to the Terms & Conditions and Privacy Policy.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  You can also reach us on our free plan.{" "}
                  <Link
                    href="https://app.xplorebyte.com/signup-for-trial"
                    className="text-emerald-600 hover:underline"
                  >
                    Click here
                  </Link>{" "}
                  to apply for the free plan.
                </p>
              </section>

              {/* Step 2 */}
              <section
                id="step2"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  2. Fill your details and click &quot;Continue Signup&quot;
                </h2>
                <p className="text-gray-700 mb-6">
                  After providing your initial details, you&apos;ll be prompted
                  to continue with the signup process. Fill in all required
                  fields and click &quot;Continue Signup&quot;.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Continue Signup form]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  You can also reach us on our free plan.{" "}
                  <Link
                    href="https://app.xplorebyte.com/signup-for-trial"
                    className="text-emerald-600 hover:underline"
                  >
                    Click here
                  </Link>{" "}
                  to apply for the free plan.
                </p>
              </section>

              {/* Step 3 */}
              <section
                id="step3"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  3. Select your XploreByte Plan
                </h2>
                <p className="text-gray-700 mb-6">
                  Choose the plan that best fits your business needs. You can
                  start with the Free Plan to get started, or select any of our
                  premium plans for additional features.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Plan selection page with Free, Basic, Pro, and
                    Enterprise plans]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  You can also reach us on our free plan.{" "}
                  <Link
                    href="https://app.xplorebyte.com/signup-for-trial"
                    className="text-emerald-600 hover:underline"
                  >
                    Click here
                  </Link>{" "}
                  to apply for the free plan.
                </p>
              </section>

              {/* Step 4 */}
              <section
                id="step4"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4. Click &quot;Get Started with Facebook&quot; to apply for
                  FREE WhatsApp Business API
                </h2>
                <p className="text-gray-700 mb-4">
                  To apply for WhatsApp Business API, you need to connect your
                  Facebook Business Manager account:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>
                    Make sure you have a Facebook Business Manager account.
                  </li>
                  <li>
                    If you don&apos;t have one, you can create one{" "}
                    <a
                      href="https://business.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      here
                    </a>
                    .
                  </li>
                </ul>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Connect your Facebook account dialog with
                    &quot;Continue with Facebook&quot; button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Click on &apos;Continue with Facebook&apos; to connect your
                  Facebook Business Manager account.
                </p>
              </section>

              {/* Step 5 */}
              <section
                id="step5"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  5. Click Continue
                </h2>
                <p className="text-gray-700 mb-6">
                  Review the permissions XploreByte Solutions will receive and
                  click &quot;Continue&quot; to proceed.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Connect your Facebook account permissions
                    dialog]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Click on &apos;Continue&apos; to connect your Facebook
                  Business Manager account.
                </p>
              </section>

              {/* Step 6 */}
              <section
                id="step6"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  6. Click Get Started
                </h2>
                <p className="text-gray-700 mb-6">
                  On the next screen, you will be prompted to click &quot;Get
                  Started&quot; to connect your business to XploreByte.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Get Started dialog with permissions list]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  On the next screen, you will be prompted to click &apos;Get
                  Started&apos; to connect your business to XploreByte.
                </p>
              </section>

              {/* Step 7 */}
              <section
                id="step7"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  7. Select your Facebook Business Manager Account
                </h2>
                <p className="text-gray-700 mb-6">
                  Choose the Facebook Business Manager account you want to use
                  for your WhatsApp Business API from the dropdown menu.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Select your Facebook Business Manager Account
                    dialog with dropdown and Continue button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Select your Facebook Business Manager account from the
                  dropdown and click &apos;Continue&apos;.
                </p>
              </section>

              {/* Step 8 */}
              <section
                id="step8"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  8. Create a new WhatsApp Business Profile
                </h2>
                <p className="text-gray-700 mb-6">
                  Fill in the details for your WhatsApp Business Profile. This
                  information will be displayed to your customers.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Create a new WhatsApp Business Profile form
                    with fields for Account Name, Profile Name, Time Zone,
                    Category, Business Description, and Continue button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Fill in the details for your new WhatsApp Business Profile and
                  click &apos;Continue&apos;.
                </p>
              </section>

              {/* Step 9 */}
              <section
                id="step9"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  9. Enter your phone number and verify it
                </h2>
                <p className="text-gray-700 mb-6">
                  Enter the phone number you want to use for your WhatsApp
                  Business API. Make sure this number is not already connected
                  to a WhatsApp account.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Enter your phone number and verify it dialog
                    with phone number field, country code dropdown, and Send
                    Code button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Enter your phone number and click &apos;Send Code&apos; to
                  receive a verification code. Enter the code to verify your
                  number.
                </p>
              </section>

              {/* Step 10 */}
              <section
                id="step10"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  10. Your WhatsApp Business API Application is now under review
                </h2>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Congratulations!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You have successfully applied for the WhatsApp Business API.
                    Your application is now under review and will be processed
                    within 24-48 hours.
                  </p>
                  <ul className="space-y-2 list-disc pl-6 text-gray-700 mb-6">
                    <li>
                      You will receive an email notification once your
                      application is approved.
                    </li>
                    <li>
                      You can check the status of your application in your
                      XploreByte dashboard.
                    </li>
                    <li>
                      Once approved, you can start sending messages to your
                      customers.
                    </li>
                  </ul>
                  <button className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                    Go to Dashboard
                  </button>
                </div>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Application submitted confirmation page]
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" data-section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
                <FAQAccordion />
              </section>

              {/* Related Articles */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Articles
                </h2>
                <div className="space-y-4">
                  {[
                    "How to create a WhatsApp Business Account?",
                    "How to send WhatsApp API Messages?",
                    "How to apply for WhatsApp Business API free?",
                    "How to setup a WhatsApp Business API?",
                    "WhatsApp Business API Pricing",
                  ].map(article => (
                    <Link
                      key={article}
                      href="/guides"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-emerald-600">
                        {article}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/guides"
                  className="inline-flex mt-6 px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  View All
                </Link>
              </section>

              {/* Feedback Section */}
              <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Did this article answer your question?
                </h3>
                <div className="flex items-center gap-4">
                  <button className="text-4xl hover:scale-110 transition-transform">
                    😊
                  </button>
                  <button className="text-4xl hover:scale-110 transition-transform">
                    😐
                  </button>
                  <button className="text-4xl hover:scale-110 transition-transform">
                    😞
                  </button>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar - Right Side */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          activeSection === item.id
                            ? "bg-emerald-50 text-emerald-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

    </>
  );
}

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "Q. How many messages can be sent per day on WhatsApp Business API?",
      answer:
        "The number of messages you can send per day depends on your account tier and quality rating. New accounts typically start with 1,000 conversations per day, which can increase to up to unlimited conversations based on your usage and message quality.",
    },
    {
      question: "Q. What if the 'Get Started' button is not working?",
      answer:
        "If the 'Get Started' button is not working, try clearing your browser cache and cookies, or use an incognito/private browsing window. Make sure you have a stable internet connection and that JavaScript is enabled in your browser.",
    },
    {
      question:
        "Q. Why should I apply for WhatsApp Business API with XploreByte?",
      answer:
        "XploreByte offers a completely free WhatsApp Business API setup with no hidden costs. We provide free hosting, dedicated support, and a user-friendly dashboard to manage your WhatsApp communications. Plus, our platform is designed to help you scale your business communications efficiently.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
