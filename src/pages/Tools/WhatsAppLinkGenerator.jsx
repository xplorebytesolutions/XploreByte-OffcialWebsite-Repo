"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { toast } from "react-toastify";
import {
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Link as LinkIcon,
  MessageSquareText,
  QrCode,
  ChevronDown,
} from "lucide-react";

const COUNTRY_OPTIONS = [
  { label: "India", callingCodeDisplay: "+91", callingCodeDigits: "91" },
  { label: "UAE", callingCodeDisplay: "+971", callingCodeDigits: "971" },
  { label: "USA", callingCodeDisplay: "+1", callingCodeDigits: "1" },
  { label: "UK", callingCodeDisplay: "+44", callingCodeDigits: "44" },
];

// Utility: builds a WhatsApp "wa.me" link (no "+" in path), with optional prefilled text.
function buildWhatsAppLink(countryCodeDigits, phoneDigits, message) {
  const fullDigits = `${countryCodeDigits || ""}${phoneDigits || ""}`.replace(
    /\D/g,
    ""
  );

  const base = `https://wa.me/${fullDigits}`;
  const trimmedMessage = (message || "").trim();

  if (!trimmedMessage) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

function formatE164Display(countryCodeDigits, phoneDigits) {
  const cc = (countryCodeDigits || "").replace(/\D/g, "");
  const ph = (phoneDigits || "").replace(/\D/g, "");
  if (!cc && !ph) return "";
  return `+${cc} ${ph}`.trim();
}

const FAQS = [
  {
    q: "What is a WhatsApp link?",
    a: (
      <p className="text-sm text-gray-600 leading-relaxed">
        A WhatsApp link is a shareable URL that opens a chat with your WhatsApp
        number. You can also prefill a message, so users can start a conversation
        in one click.
      </p>
    ),
  },
  {
    q: "Do I need to pay to create a WhatsApp link?",
    a: (
      <p className="text-sm text-gray-600 leading-relaxed">
        No. This tool is free, and WhatsApp links themselves are free to create.
        Your standard WhatsApp and data charges may apply.
      </p>
    ),
  },
  {
    q: "How do I add this WhatsApp link to Instagram?",
    a: (
      <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-2 leading-relaxed">
        <li>Open Instagram and go to your profile.</li>
        <li>Tap “Edit profile”.</li>
        <li>
          In the “Links” section, add your generated WhatsApp link and save.
        </li>
      </ol>
    ),
  },
  {
    q: "Can I create the link with an empty message?",
    a: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Yes. If you leave the message blank, the link will simply open the chat
        with your number without a prefilled message.
      </p>
    ),
  },
  {
    q: "Where can I use the WhatsApp link and QR code?",
    a: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Use it anywhere you want users to start a WhatsApp chat: your website,
        Google Business Profile, Instagram bio, Facebook page, ads, email
        signatures, flyers, posters, packaging, and more.
      </p>
    ),
  },
  {
    q: "Why is my phone number marked invalid?",
    a: (
      <p className="text-sm text-gray-600 leading-relaxed">
        The phone number must contain digits only (no spaces, no “+”, no
        special characters). Enter only the local number, and select the correct
        country code from the dropdown.
      </p>
    ),
  },
];

export default function WhatsAppLinkGenerator() {
  const [countryCodeDigits, setCountryCodeDigits] = useState("91");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const qrWrapperRef = useRef(null);

  const previewNumber = useMemo(
    () => formatE164Display(countryCodeDigits, phoneDigits),
    [countryCodeDigits, phoneDigits]
  );

  const onGenerate = () => {
    const sanitizedPhone = (phoneDigits || "").replace(/\D/g, "");
    const isValid = /^[0-9]{6,15}$/.test(sanitizedPhone);

    if (!isValid) {
      toast.error("Please enter a valid WhatsApp number (digits only).");
      return;
    }

    const link = buildWhatsAppLink(countryCodeDigits, sanitizedPhone, message);
    setGeneratedLink(link);
    toast.success("WhatsApp link generated!");
  };

  const onCopy = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(generatedLink);
      toast.success("Link copied to clipboard!");
    } catch {
      try {
        const temp = document.createElement("textarea");
        temp.value = generatedLink;
        temp.setAttribute("readonly", "");
        temp.style.position = "absolute";
        temp.style.left = "-9999px";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        toast.success("Link copied to clipboard!");
      } catch {
        toast.error("Could not copy the link. Please copy manually.");
      }
    }
  };

  const onOpen = () => {
    if (!generatedLink) return;
    window.open(generatedLink, "_blank", "noopener,noreferrer");
  };

  const onDownloadQr = () => {
    if (!generatedLink) return;
    const wrapper = qrWrapperRef.current;
    const canvas = wrapper ? wrapper.querySelector("canvas") : null;

    if (!canvas) {
      toast.error("QR not ready yet. Please try again.");
      return;
    }

    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "whatsapp-link-qr.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
            Free WhatsApp Link Generator
          </h1>
          <p className="mt-2 text-gray-600">
            Drive users to WhatsApp in a click. Anyone can create WhatsApp links
            and QR codes in 3 simple steps.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                1
              </span>
              Add number
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                2
              </span>
              Add message
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                3
              </span>
              Generate & share
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Form + Output */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    value={countryCodeDigits}
                    onChange={(e) => setCountryCodeDigits(e.target.value)}
                    className="mt-2 w-full rounded-xl border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                  >
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.callingCodeDigits} value={c.callingCodeDigits}>
                        {c.label} ({c.callingCodeDisplay})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    WhatsApp phone number
                  </label>
                  <div className="mt-2 flex rounded-xl border border-gray-300 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 overflow-hidden">
                    <span className="px-3 py-2 bg-gray-50 text-gray-600 text-sm flex items-center border-r border-gray-200">
                      {
                        COUNTRY_OPTIONS.find(
                          (c) => c.callingCodeDigits === countryCodeDigits
                        )?.callingCodeDisplay
                      }
                    </span>
                    <input
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Your WhatsApp number"
                      value={phoneDigits}
                      onChange={(e) =>
                        setPhoneDigits(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full px-3 py-2 outline-none text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Digits only. No spaces or + sign.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700">
                  Custom message (optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here (emoji supported)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full rounded-xl border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                />
              </div>

              <button
                type="button"
                onClick={onGenerate}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
              >
                <LinkIcon className="w-4 h-4" />
                Generate Link
              </button>
            </div>

            {generatedLink ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-2 text-gray-900 font-semibold">
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  Output
                </div>

                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Generated WhatsApp link
                </label>
                <div className="mt-2 flex flex-col sm:flex-row gap-3">
                  <input
                    value={generatedLink}
                    readOnly
                    className="flex-1 rounded-xl border-gray-300 bg-gray-50 focus:border-emerald-600 focus:ring-emerald-600"
                  />
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={onCopy}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                    <button
                      type="button"
                      onClick={onOpen}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      QR code
                    </div>
                    <div
                      ref={qrWrapperRef}
                      className="w-fit rounded-2xl border border-gray-200 bg-white p-4"
                    >
                      <QRCodeCanvas
                        value={generatedLink}
                        size={180}
                        includeMargin
                        level="M"
                      />
                    </div>
                  </div>

                  <div className="sm:pt-6">
                    <button
                      type="button"
                      onClick={onDownloadQr}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download QR (PNG)
                    </button>
                    <p className="mt-2 text-xs text-gray-500">
                      Tip: Use this QR on posters, packaging, or website CTAs.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right: WhatsApp Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <MessageSquareText className="w-5 h-5 text-emerald-600" />
              WhatsApp Preview
            </div>

            <div className="mt-4 flex justify-center">
              {/* Phone Mock */}
              <div className="w-full max-w-[300px] sm:max-w-[320px]">
                <div className="relative aspect-[9/18] rounded-[2.9rem] bg-gradient-to-b from-slate-900 to-black p-[10px] shadow-2xl">
                  <div className="relative h-full w-full rounded-[2.4rem] overflow-hidden bg-[#EEF2F5]">
                    {/* Notch */}
                    <div className="absolute left-1/2 top-2 -translate-x-1/2 z-20">
                      <div className="h-6 w-32 rounded-full bg-black/85 shadow-sm" />
                      <div className="absolute left-1/2 top-2 -translate-x-1/2 h-1.5 w-14 rounded-full bg-white/10" />
                      <div className="absolute right-6 top-2.5 h-2 w-2 rounded-full bg-white/10" />
                    </div>

                    <div className="h-full flex flex-col">
                      {/* Status + Chat Header */}
                      <div className="relative px-5 pt-6 pb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
                        {/* Status bar */}
                        <div className="flex items-center justify-between text-[10px] opacity-90">
                          <span className="font-medium">9:41</span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                              <span className="h-2 w-2 rounded-full bg-white/70" />
                              <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                            </div>
                            <div className="h-2.5 w-5 rounded-[3px] border border-white/80 relative">
                              <div className="absolute left-[1px] top-[1px] bottom-[1px] w-3.5 rounded-[2px] bg-white/90" />
                              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 h-1.5 w-0.5 rounded bg-white/80" />
                            </div>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="text-[11px] opacity-90">Chat with</div>
                          <div className="font-semibold truncate">
                            {previewNumber || "+__ ________"}
                          </div>
                        </div>
                      </div>

                      {/* Chat area */}
                      <div className="relative flex-1 px-4 py-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/20" />
                        <div className="relative h-full flex flex-col justify-end pb-3">
                          <div className="flex justify-start">
                            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white border border-gray-200 shadow-sm px-3 py-2">
                              {message.trim() ? (
                                <p className="text-sm text-gray-900 whitespace-pre-wrap break-words">
                                  {message}
                                </p>
                              ) : (
                                <p className="text-sm text-gray-400">
                                  Type a message to preview
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Input bar mock */}
                      <div className="px-4 pb-5 pt-3 bg-white/70 backdrop-blur border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm text-gray-400">
                            Type a message
                          </div>
                          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M3 20V4L22 12L3 20Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        {/* Home indicator */}
                        <div className="mt-4 flex justify-center">
                          <div className="h-1.5 w-28 rounded-full bg-black/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              Preview updates live as you type. Click "Generate Link" to create the
              final WhatsApp link and QR.
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  WhatsApp Link FAQs
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Quick answers to common questions about WhatsApp links and QR
                  codes.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {FAQS.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
                >
                  <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4">
                    <span className="font-semibold text-gray-900">
                      {item.q}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8">
              <div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Get started with WhatsApp Business platform
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Broadcast & automate messages, enable multi-agent live chat
                  support, and install AI chatbots to grow faster on WhatsApp.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>Share your WhatsApp link & QR across channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>Capture leads and route to the right team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>Automate replies with flows and AI</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/start-free-trial"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/demo-request"
                    className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-100 via-cyan-100 to-white rounded-3xl blur-2xl opacity-70" />
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md">
                    <Image
                      src="/whatsapp-business/whatsapp-hero-illustration.png"
                      alt="WhatsApp platform illustration"
                      width={620}
                      height={420}
                      className="w-full h-auto rounded-2xl border border-gray-200 shadow-xl"
                      priority={false}
                    />
                    <div className="absolute left-6 -top-5 hidden sm:block pointer-events-none">
                      <div className="max-w-[240px] rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-gray-200 px-4 py-3">
                        <div className="text-xs font-semibold text-gray-900">
                          Click → Chat
                        </div>
                        <div className="mt-1 text-xs text-gray-600">
                          Turn visitors into WhatsApp leads
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-6 -bottom-5 hidden sm:block pointer-events-none">
                      <div className="max-w-[240px] rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-gray-200 px-4 py-3">
                        <div className="text-xs font-semibold text-gray-900">
                          QR → Scan
                        </div>
                        <div className="mt-1 text-xs text-gray-600">
                          Offline to online in seconds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
