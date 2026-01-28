"use client";

import { useState } from "react";


import SalesModal from "../../components/SalesModal";
import {
  Code,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Copy,
  ExternalLink,
  Zap,
} from "lucide-react";

export default function ApiDocumentation() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                <span className="text-[#11A944]">Developer</span> Docs
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Integration guides and API documentation to help you build
                powerful WhatsApp solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSalesModalOpen(true)}
                  className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors"
                >
                  Talk to Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View API Reference
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Start Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get up and running with our API in minutes with our
                comprehensive guides and examples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quick Setup
                </h3>
                <p className="text-gray-600">
                  Get your API key and start sending messages in under 5
                  minutes.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Code Examples
                </h3>
                <p className="text-gray-600">
                  Ready-to-use code examples in Python, Node.js, PHP, and more.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Full Documentation
                </h3>
                <p className="text-gray-600">
                  Comprehensive guides covering all API endpoints and features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Send Your First Message
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Here&apos;s a simple example to get you started with our
                  WhatsApp API.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944]" />
                    <span className="text-gray-700">Easy to integrate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944]" />
                    <span className="text-gray-700">
                      Multiple language support
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#11A944]" />
                    <span className="text-gray-700">
                      Comprehensive error handling
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`import requests

# Send WhatsApp message
url = "https://api.xplorebyte.com/v1/messages"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "to": "+1234567890",
    "message": "Hello from XploreByte!",
    "type": "text"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Access our complete API documentation and start building powerful
              WhatsApp integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors">
                Get API Key
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                View Full Docs
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
