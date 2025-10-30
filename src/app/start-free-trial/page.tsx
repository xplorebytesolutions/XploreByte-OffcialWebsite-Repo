"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Megaphone,
  CheckCircle,
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
    await new Promise<void>(resolve => setTimeout(resolve, 2000));

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
      title: "₹50 Free Credits",
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
      <main
        className="bg-white m-0 p-0 overflow-hidden"
        style={{ marginTop: "-56px", minHeight: "100vh" }}
      >
        <div
          className="flex m-0 p-0 overflow-hidden"
          style={{ minHeight: "100vh" }}
        >
          {/* Left Panel - Information */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 w-1/2 p-10 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-lg">
              {/* Logo */}
              <div className="mb-8">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/assets/logo_7.svg"
                    alt="XploreByte Logo"
                    width={40}
                    height={40}
                    style={{ display: "block" }}
                    className="h-8 w-auto"
                  />
                  <span className="text-white text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
                    XploreByte
                  </span>
                </Link>
              </div>

              {/* Main Headline */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 leading-tight text-white">
                  Experience the future of{" "}
                  <span className="text-emerald-400">WhatsApp Marketing</span>
                </h1>
              </div>

              {/* Offer Box */}
              <div className="bg-emerald-500 rounded-xl p-4 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-white font-bold text-lg">
                    ₹50 FREE Credits
                  </h2>
                  <p className="text-white/90 text-xs">
                    Run WhatsApp campaigns & grow your business
                  </p>
                </div>
              </div>

              {/* Section Header */}
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                YOUR FREE FOREVER PLAN INCLUDES
              </h3>

              {/* Free Plan Features */}
              <div className="space-y-3 mb-8">
                {/* Feature 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-slate-300/10 flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">
                      FREE WhatsApp Business API
                    </h4>
                    <p className="text-slate-300 text-xs">
                      Instant verification & setup with Meta
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-slate-300/10 flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">
                      Advanced AI Tools
                    </h4>
                    <p className="text-slate-300 text-xs">
                      AI-powered campaign optimization & automation
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-slate-300/10 flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">
                      FREE Green Tick Application
                    </h4>
                    <p className="text-slate-300 text-xs">
                      Apply for verified WhatsApp Business Account
                    </p>
                  </div>
                </div>
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

                {/* Social Login */}
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                </div>

                {/* Separator */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

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

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
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

                  {/* WhatsApp Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Personal WhatsApp Number{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="col-span-1 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent bg-white"
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
                        className="col-span-3 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Enter WhatsApp number"
                      />
                      <div className="col-span-4 flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>
                          This number will be used for WhatsApp Business API
                          setup
                        </span>
                      </div>
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
                        Start Your Free Forever Plan
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
                  Welcome to XploreByte! We&apos;ve sent a verification email to
                  your inbox. Please check your email and click the verification
                  link to activate your account.
                </p>
                <div className="bg-[#11A944]/10 border border-[#11A944]/20 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-[#11A944] mb-2">
                    What&apos;s Next?
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    <li>• Check your email for verification link</li>
                    <li>• Complete your profile setup</li>
                    <li>• Explore our tutorials and documentation</li>
                    <li>• Start building with ₹50 in free credits</li>
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
    </>
  );
}
