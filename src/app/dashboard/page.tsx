"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageCircle,
  Clock,
  Users,
  Megaphone,
  Facebook,
  Workflow,
  Wallet,
  Settings,
  FolderOpen,
  Menu,
  Play,
  Calendar,
  Gift,
  Smartphone,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  DollarSign,
  Code,
  Link as LinkIcon,
  Globe,
  RotateCcw,
} from "lucide-react";

export default function Dashboard() {
  const [expandedFeatures, setExpandedFeatures] = useState(true);
  const [expandedSetup, setExpandedSetup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-900 to-slate-900 text-white flex-shrink-0">
        {/* Logo */}
        <div className="p-6 border-b border-blue-800">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo_7.svg"
              alt="XploreByte Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold font-[Poppins,Montserrat,sans-serif]">
              XploreByte
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-lg text-white"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Live Chat</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Clock className="w-5 h-5" />
            <span>History</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Users className="w-5 h-5" />
            <span>Contacts</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Megaphone className="w-5 h-5" />
            <span>Campaigns</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Facebook className="w-5 h-5" />
            <span>Ads Manager</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Workflow className="w-5 h-5" />
            <span>Flows</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Wallet className="w-5 h-5" />
            <span>WA Pay</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <Settings className="w-5 h-5" />
            <span>Manage</span>
          </Link>

          <div className="my-4 border-t border-blue-800"></div>

          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"
          >
            <FolderOpen className="w-5 h-5" />
            <span>All Projects</span>
          </Link>
        </nav>

        {/* User Profile at Bottom */}
        <div className="absolute bottom-4 left-4 w-56">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">M</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">
                WhatsApp Business API Status:{" "}
                <span className="text-red-600 font-semibold">PENDING</span>
              </span>
              <button className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-lg flex items-center gap-2 hover:bg-emerald-600">
                <Play className="w-4 h-4" />
                Apply Now
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">
                Current Plan:{" "}
                <span className="text-emerald-600 font-semibold">
                  FREE FOREVER
                </span>
              </span>
              <button className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-lg flex items-center gap-2 hover:bg-emerald-600">
                <Sparkles className="w-4 h-4" />
                Explore Plans
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-gray-900">
              Hey Mohit, Welcome to XploreByte!
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
              >
                <Calendar className="w-4 h-4" />
                Schedule Live Demo
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
              >
                <Play className="w-4 h-4" />
                Setup Guide
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
              >
                <Play className="w-4 h-4" />
                Watch Tutorials
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="p-6 space-y-6">
          {/* Top Section - Two Columns */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left: Unlock Banner */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-6 border-2 border-emerald-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Unlock Everything for 14 Days—Free!
                  </h2>
                  <p className="text-gray-700 text-sm mb-4">
                    Join 10,000+ satisfied users today
                  </p>
                  <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-emerald-600 mb-4">
                    Start Free Trial Now
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-gray-700 font-semibold mb-2">
                    Get full access to all features across the platform
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      Experience a complete 14-day free trial of the entire
                      platform
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      Access all Pro + Flow plan features and capabilities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Mobile App */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                Scan to download the Mobile app
              </h3>
              <div className="flex gap-4">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center text-xs text-gray-500">
                    [QR Code Placeholder]
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800">
                      GET IT ON Google Play
                    </button>
                    <button className="w-full px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800">
                      Download on the App Store
                    </button>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Real-time notifications
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Live Chat
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Ads Management
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Analytics Dashboard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Three Columns */}
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1: Left - Offer Code & Setup */}
            <div className="col-span-2 space-y-6">
              {/* Offer Access Code */}
              <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold mb-3">
                      Got any offer access code? Activate your special
                      discounted offer now!
                    </p>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter access code"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-orange-600">
                        Activate <RotateCcw className="w-4 h-4" />
                      </button>
                      <button className="px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg border-2 border-orange-500 hover:bg-orange-50">
                        View Offers
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Setup WhatsApp Business Account */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Setup FREE WhatsApp Business Account
                  </h3>
                  <button className="text-sm text-gray-600 hover:text-emerald-600">
                    All Steps
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-2">3 steps left</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">
                        Apply for WhatsApp Business API
                      </p>
                      <p className="text-gray-600 text-xs mt-1">
                        Click on Continue With Facebook to apply for WhatsApp
                        Business API
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      A Registered Business & Working Website.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      How to apply for WhatsApp Business API?{" "}
                      <Link
                        href="/guides/getting-started/apply-whatsapp-api"
                        className="text-emerald-600 hover:underline"
                      >
                        Click here
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Video Thumbnail */}
                <div className="bg-gray-100 rounded-xl p-8 text-center mb-4">
                  <div className="text-gray-500 text-sm">
                    [Video: How to get FREE WhatsApp API in 10 Mins]
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200">
                    <Calendar className="w-4 h-4" />
                    Schedule Meetings
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
                    <Facebook className="w-4 h-4" />
                    Continue With Facebook
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Right - Credits Cards */}
            <div className="space-y-6">
              {/* AI Credits */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium opacity-90">
                    AI Credits
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">₹ 500.00</div>
                <button className="w-full px-4 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30">
                  Buy Credits
                </button>
              </div>

              {/* Advertisement Credits */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium opacity-90">
                    Advertisement Credits
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">₹ 0</div>
                <button className="w-full px-4 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30">
                  Buy Credits
                </button>
              </div>

              {/* WhatsApp Conversation Credits */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium opacity-90">
                    WhatsApp Conversation Credits (WCC)
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs opacity-90 mb-1">
                    <span>0</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">₹ 50.00</div>
                <button className="w-full px-4 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30">
                  Buy More
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Customize WhatsApp Link */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900">
                  Customize WhatsApp Link
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Create shareable links & QR for your WA business number
              </p>
            </div>

            {/* WhatsApp Website Button */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900">
                  WhatsApp Website Button
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Drive WhatsApp sales with personalised CTAs
              </p>
            </div>

            {/* Unlock Premium Features */}
            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">
                  Unlock All Premium Features
                </h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">Free for 14 Days!</p>
              <button className="w-full px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-600">
                Start Free Trial Now <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Platform Walkthrough & Tutorials */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Platform Walkthrough & Tutorials
              </h3>
              <Link
                href="#"
                className="text-emerald-600 hover:underline font-medium text-sm"
              >
                Read Platform Guide
              </Link>
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="text-gray-500 text-sm">
                  [Video: XploreByte Platform Demo - HINDI]
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="text-gray-500 text-sm">
                  [Video: XploreByte Smartest WhatsApp Engagement Platform]
                </div>
              </div>
            </div>

            {/* Feature Lists */}
            <div className="grid grid-cols-4 gap-6">
              {/* Template */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Template</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• How to Create WhatsApp Template Message?</li>
                  <li>• Use chatbot parameters for leads</li>
                  <li>• Add Quick Reply to WhatsApp Template</li>
                  <li>• Message formatting guideline</li>
                </ul>
              </div>

              {/* Campaign */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Campaign</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audience segregation for WhatsApp Broadcast</li>
                  <li>• Upgrade WhatsApp Tier Limit</li>
                  <li>• Import upto 2 lakh contacts in one go</li>
                </ul>
              </div>

              {/* Live Chat & Attribute */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Live Chat & Attribute
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Add user attributes manually</li>
                  <li>• Add/Remove Tag & update attribute</li>
                  <li>• Send & Generate media link</li>
                  <li>• Chat Profile & First Message Tag</li>
                </ul>
              </div>

              {/* Chatbot & Integration */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Chatbot & Integration
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Setup Welcome WhatsApp Chatbot</li>
                  <li>• Create WhatsApp Button for Free</li>
                  <li>• Create WhatsApp Link for Free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}




