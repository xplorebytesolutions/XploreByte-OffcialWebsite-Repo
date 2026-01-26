// import "../styles/globals.css";
// import { Montserrat } from "next/font/google";
// import GoogleAnalytics from "@/components/GoogleAnalytics";
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["200", "300", "300"],
//   variable: "--font-montserrat",
//   display: "swap",
// });
// export const metadata = {
//   title: "XploreByte Solutions",
//   description: "Elite SaaS and digital solutions for ambitious businesses.",
//   icons: [
//     { rel: "icon", url: "/assets/logo_7.svg", type: "image/svg+xml" },
//     { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "32x32" },
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {children} <GoogleAnalytics />
//       </body>
//     </html>
//   );
// }

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingActionButton from "@/components/FloatingActionButton";
import { AnalyticsRouteTracker } from "@/components/AnalyticsRouteTracker";
import ToastProvider from "@/components/ToastProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Added weights for bold fonts
  variable: "--font-montserrat",
  display: "swap",
});

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
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pt-14 md:pt-14 no-scrollbar" suppressHydrationWarning>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
        {children}
        <ToastProvider />
        <FloatingActionButton />
      </body>
    </html>
  );
}
