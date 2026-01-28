import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ToastProvider from "@/components/ToastProvider";
import GoogleTagManager from "@/components/GoogleTagManager";
import type { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    template: "%s | XploreByte",
  },
  description:
    "XploreByte is a WhatsApp First CRM built for small businesses, with Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, WhatsApp Business API integration, and Advanced Analytics reports to turn chats into customers.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    description:
      "XploreByte is a WhatsApp First CRM built for small businesses, with Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, WhatsApp Business API integration, and Advanced Analytics reports to turn chats into customers.",
    url: SITE_URL,
    siteName: "XploreByte",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "XploreByte - WhatsApp First CRM + No-Code Chatbot Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    description:
      "XploreByte is a WhatsApp First CRM built for small businesses, with Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, WhatsApp Business API integration, and Advanced Analytics reports to turn chats into customers.",
    images: ["/herosection.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "XploreByte",
        url: SITE_URL,
        logo: `${SITE_URL}/apple-touch-icon.png`,
        description:
          "XploreByte is a WhatsApp First CRM built for small businesses, with Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, WhatsApp Business API integration, and Advanced Analytics reports to turn chats into customers.",
        sameAs: [] as string[],
      },
      {
        "@type": "WebSite",
        name: "XploreByte",
        url: SITE_URL,
      },
      {
        "@type": "SoftwareApplication",
        name: "XploreByte",
        applicationCategory: "CRM",
        operatingSystem: "Web",
        url: SITE_URL,
        description:
          "XploreByte is a WhatsApp First CRM built for small businesses, with Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, WhatsApp Business API integration, and Advanced Analytics reports to turn chats into customers.",
      },
    ],
  };

  return (
    <html lang="en" className={montserrat.className}>
      <head>
        {/*
          Warning: If GA4 is later added inside GTM, disable the direct GoogleAnalytics component
          below to avoid double counting.
        */}
        <GoogleAnalytics />
        <GoogleTagManager gtmId={GTM_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pt-14 md:pt-14 no-scrollbar" suppressHydrationWarning>
        {/* GTM Noscript iframe */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        <ToastProvider>
          <Header />
          {children}
          <Footer />
          <FloatingActionButton />
        </ToastProvider>
      </body>
    </html>
  );
}
