"use client";

import { useRouter } from "next/navigation";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { CheckCircle, ArrowLeft, Mail, Phone, Calendar } from "lucide-react";

export default function ApplicationSuccess() {
  const router = useRouter();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for your interest in joining XploreByte. We&#39;ve received
              your application and will review it carefully.
            </p>

            {/* Next Steps */}
            <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What happens next?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#11A944] text-white text-sm font-semibold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Application Review
                    </h3>
                    <p className="text-gray-600">
                      Our HR team will review your application and CV within 3-5
                      business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#11A944] text-white text-sm font-semibold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Initial Screening
                    </h3>
                    <p className="text-gray-600">
                      If your profile matches our requirements, we&#39;ll contact
                      you for an initial phone screening.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#11A944] text-white text-sm font-semibold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Interview Process
                    </h3>
                    <p className="text-gray-600">
                      Selected candidates will be invited for technical and
                      cultural fit interviews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#11A944] text-white text-sm font-semibold">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Final Decision
                    </h3>
                    <p className="text-gray-600">
                      We&#39;ll notify you of our decision and discuss next steps if
                      you&#39;re selected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Questions? Get in touch
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#11A944]/10 mb-4">
                    <Mail className="h-6 w-6 text-[#11A944]" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Email Us</h3>
                  <a
                    href="mailto:careers@xplorebyte.com"
                    className="text-[#11A944] hover:text-[#0d8a3a] transition-colors"
                  >
                    careers@xplorebyte.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#11A944]/10 mb-4">
                    <Phone className="h-6 w-6 text-[#11A944]" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Call Us</h3>
                  <a
                    href="tel:+918826165727"
                    className="text-[#11A944] hover:text-[#0d8a3a] transition-colors"
                  >
                    +91 88261 65727
                  </a>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#11A944]/10 mb-4">
                    <Calendar className="h-6 w-6 text-[#11A944]" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-600">3-5 business days</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/careers")}
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Careers
              </button>
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center px-8 py-3 border-2 border-[#11A944] text-[#11A944] font-semibold rounded-lg hover:bg-[#11A944] hover:text-white transition-colors"
              >
                Visit Our Website
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
