import type { Metadata } from "next";


import WhatsAppLinkGenerator from "@/pages/Tools/WhatsAppLinkGenerator";

export const metadata: Metadata = {
  title: "Free WhatsApp Link Generator",
  description:
    "Drive users to WhatsApp in a click. Create WhatsApp links and QR codes in 3 simple steps.",
};

export default function WhatsAppLinkGeneratorPage() {
  return (
    <>
      <main className="bg-white">
        <WhatsAppLinkGenerator />
      </main>
    </>
  );
}
