"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Check,
  CreditCard,
  DollarSign,
  Code,
  Headphones,
  Shield,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Phone,
  Mail,
  MapPin,
  Building,
  Users,
  Zap,
  BarChart3,
  MessageCircle,
  Settings,
  Globe,
  Star,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";

export default function StartFreeTrial() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    countryCode: "+91",
    phoneNumber: "",
    company: "",
    industry: "",
    useCase: "",
    teamSize: "",
    twoFactorMethod: "sms",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        countryCode: "+91",
        phoneNumber: "",
        company: "",
        industry: "",
        useCase: "",
        teamSize: "",
        twoFactorMethod: "sms",
      });
    }, 5000);
  };

  const benefits = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "No Credit Card Required",
      description: "Start instantly without payment information",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "$50 Free Credits",
      description: "Test our platform with complimentary credits",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Developer Resources",
      description: "Tutorials, docs, and sample code included",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Expert Support",
      description: "24/7 technical assistance from our team",
    },
  ];

  const features = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "WhatsApp Business API for SMS, WhatsApp and more",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "Voice API for automated voice interactions",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Video API for real-time interactive video",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Verify API for two-factor authentication (2FA)",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "AI Studio for low code/no code solutions",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <div className="flex min-h-screen">
          {/* Left Panel - Information */}
          <div className="bg-gradient-to-br from-[#0A0E23] via-[#1E3A8A] to-[#11A944] w-1/2 p-16 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#11A944] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-lg">
              {/* Welcome Message */}
              <div className="mb-16">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                  <Sparkles className="w-4 h-4 text-[#11A944]" />
                  <span className="text-sm font-medium">
                    Start your free trial
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Build Amazing WhatsApp
                  <span className="text-[#11A944]"> Experiences</span>
                </h1>
                <p className="text-white/90 text-xl leading-relaxed">
                  Transform your business communication with our powerful
                  WhatsApp Business API platform. Start building amazing
                  customer experiences today.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-6 mb-16">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-[#11A944]/20 rounded-xl flex items-center justify-center">
                        <div className="text-[#11A944]">{benefit.icon}</div>
                      </div>
                      <h3 className="font-semibold text-base">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">
                  Everything you need to succeed:
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 bg-[#11A944]/20 rounded-lg flex items-center justify-center group-hover:bg-[#11A944]/30 transition-colors">
                        <div className="text-[#11A944]">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                      <span className="text-white/90 text-lg">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#11A944] mb-1">
                    10K+
                  </div>
                  <div className="text-white/70 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#11A944] mb-1">
                    99.9%
                  </div>
                  <div className="text-white/70 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#11A944] mb-1">
                    24/7
                  </div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-1/2 p-12 flex flex-col justify-center">
            {!isSubmitted ? (
              <div className="max-w-md mx-auto w-full">
                {/* Progress Indicator */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          1
                        </span>
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        Create account
                      </span>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        Verify email
                      </span>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        Verify number
                      </span>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Sign up for a XploreByte account
                </h2>
                <p className="text-gray-600 mb-8">
                  No credit card required. Already have an account?
                  <a
                    href="/login"
                    className="text-[#11A944] hover:underline ml-1"
                  >
                    Log in
                  </a>
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Confirm password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="col-span-2 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="beauty-cosmetics">
                        Beauty & Cosmetics
                      </option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="spa">Spa & Wellness</option>
                      <option value="automotive">Automotive</option>
                      <option value="travel">Travel & Tourism</option>
                      <option value="food">Food & Restaurant</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Use two-factor authentication (2FA)
                    </h3>
                    <div className="space-y-3">
                      <select
                        name="twoFactorMethod"
                        value={formData.twoFactorMethod}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      >
                        <option value="sms">SMS / WhatsApp</option>
                        <option value="email">Email</option>
                        <option value="authenticator">Authenticator App</option>
                      </select>
                      <p className="text-sm text-gray-600">
                        Any time you log in from an unusual device or location,
                        we'll send an extra security code to your phone or
                        verify with your authenticator app that you can use to
                        login.
                      </p>
                    </div>
                  </div>

                  {/* Terms and Privacy */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 h-4 w-4 text-[#11A944] border-gray-300 rounded focus:ring-[#11A944]"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I confirm I have read and agree to the XploreByte{" "}
                      <a
                        href="/terms-of-service"
                        className="text-[#11A944] hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and the{" "}
                      <a
                        href="/acceptable-use-policy"
                        className="text-[#11A944] hover:underline"
                      >
                        Acceptable Use Policy
                      </a>
                      . Read our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-[#11A944] hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      to understand how XploreByte handles personal data.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#11A944] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create my free account
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                {/* Footer Links */}
                <div className="mt-8 flex justify-end space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>Legal & Privacy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>Privacy - Terms</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Account Created Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Welcome to XploreByte! We've sent a verification email to your
                  inbox. Please check your email and click the verification link
                  to activate your account.
                </p>
                <div className="bg-[#11A944]/10 border border-[#11A944]/20 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-[#11A944] mb-2">
                    What's Next?
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    <li>• Check your email for verification link</li>
                    <li>• Complete your profile setup</li>
                    <li>• Explore our tutorials and documentation</li>
                    <li>• Start building with $50 in free credits</li>
                  </ul>
                </div>
                <a
                  href="/login"
                  className="inline-flex items-center px-6 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
                >
                  Go to Login
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
