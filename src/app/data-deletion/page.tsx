"use client";


export default function DataDeletionPage() {
  // Keep date format consistent with Terms page (dd-mm-yyyy).
  // Update this whenever you update the content.
  const lastUpdated = "28-01-2026";

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section (matches Terms-of-Service style) */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="font-bold text-white mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                User Data <span className="text-[#11A944]">Deletion</span>
              </h1>

              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                This page explains how you can request deletion of your data
                from XploreByte, including WhatsApp integration data used to
                provide WhatsApp Business Platform features.
              </p>
            </div>
          </div>
        </section>

        {/* Last updated (right aligned, same style as Terms page) */}
        <section className="pt-6 pb-0 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-right text-sm font-semibold text-gray-700">
              Last updated&nbsp;&nbsp;01-10-2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pt-8 pb-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2
                className="font-semibold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.25rem",
                  lineHeight: "1.2",
                }}
              >
                1) What data can be deleted
              </h2>

              <p className="text-gray-700 leading-normal text-base mb-3">
                If you use WhatsApp features in XploreByte, we may store limited
                WhatsApp integration data required to provide functionality,
                such as:
              </p>

              <ul className="text-gray-700 leading-normal text-base">
                <li>WhatsApp Business Account identifiers (WABA ID)</li>
                <li>WhatsApp Phone Number identifiers (Phone Number ID)</li>
                <li>
                  Access tokens used to call WhatsApp Business Platform APIs
                </li>
                <li>
                  Configuration values required to enable/disable WhatsApp
                  features
                </li>
              </ul>

              <p className="text-gray-700 leading-normal text-base mt-3">
                We store this data only to enable WhatsApp messaging and related
                features requested by the business user.
              </p>

              <hr className="my-8" />

              <h2
                className="font-semibold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.25rem",
                  lineHeight: "1.2",
                }}
              >
                {/* 2) How to request deletion */}
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    2) How to request deletion
                  </h2>
                  <div className="mt-3 rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                    <p className="text-sm font-semibold text-emerald-900">
                      Option A (recommended): Delete from inside the app
                    </p>
                    <p className="mt-1 text-sm text-emerald-900/90">
                      Log in to your XploreByte account → go to{" "}
                      <span className="font-medium">
                        Settings → WhatsApp Api Integration
                      </span>{" "}
                      → click{" "}
                      <span className="font-medium">
                        DELETE WHATSAPP DATA (PERMANENT)
                      </span>
                      .
                    </p>
                    <p className="mt-2 text-xs text-emerald-900/80">
                      This permanently deletes WhatsApp onboarding configuration
                      and tokens stored in XploreByte. This cannot be undone.
                    </p>
                  </div>

                  <div className="mt-4 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-100">
                    <p className="text-sm font-semibold text-gray-900">
                      Option B: Request deletion by email
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Email us from your registered account email with the
                      subject{" "}
                      <span className="font-medium">Data Deletion Request</span>
                      .
                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200">
                      support@xplorebyte.com
                    </div>

                    <p className="mt-2 text-sm text-gray-700">
                      Include your business name, your login email, and a short
                      note requesting deletion.
                    </p>
                  </div>
                </div>
                {/* 2) How to request deletion
              </h2>

              <p className="text-gray-700 leading-normal text-base mb-3">
                You can request deletion in either of the following ways:
              </p>

              <h3 className="text-gray-900 font-semibold text-base mt-4 mb-2">
                Option A (recommended): Delete from inside the app
              </h3>

              <p className="text-gray-700 leading-normal text-base">
                Log in to your XploreByte account → go to{" "}
                <strong>Settings → WhatsApp Api Integration</strong> → click{" "}
                <strong>DELETE WHATSAPP DATA (PERMANENT)</strong>.
              </p>

              <p className="text-gray-700 leading-normal text-base mt-2">
                This permanently deletes WhatsApp onboarding configuration and
                tokens stored in XploreByte. This action cannot be undone.
              </p>

              <h3 className="text-gray-900 font-semibold text-base mt-5 mb-2">
                Option B: Request deletion by email
              </h3>

              <p className="text-gray-700 leading-normal text-base">
                Send an email from your registered account email with the
                subject <strong>Data Deletion Request</strong> to:
              </p>

              <p className="text-gray-900 font-semibold text-base mt-2 mb-0">
                support@xplorebyte.com
              </p>

              <p className="text-gray-700 leading-normal text-base mt-2">
                Include your business name, your login email, and a short note
                requesting deletion.
              </p>

              <hr className="my-8" />

              <h2
                className="font-semibold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.25rem",
                  lineHeight: "1.2",
                }}
              > */}
                3) What happens after deletion
              </h2>

              <ul className="text-gray-700 leading-normal text-base">
                <li>
                  We permanently remove WhatsApp integration configuration and
                  access tokens stored by XploreByte for your account.
                </li>
                <li>
                  WhatsApp messaging features in XploreByte are disabled after
                  deletion.
                </li>
                <li>
                  To use WhatsApp again, you must explicitly reconnect through a
                  new Meta Embedded Signup flow.
                </li>
              </ul>

              <p className="text-gray-700 leading-normal text-base mt-3">
                For email-based requests, we may ask for basic verification to
                prevent unauthorized deletion requests.
              </p>

              <hr className="my-8" />

              <h2
                className="font-semibold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.25rem",
                  lineHeight: "1.2",
                }}
              >
                4) Contact
              </h2>

              <p className="text-gray-700 leading-normal text-base">
                For privacy or deletion questions, contact:
              </p>

              <p className="text-gray-900 font-semibold text-base mt-2">
                support@xplorebyte.com
              </p>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}

// // src/app/data-deletion/page.tsx
// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "User Data Deletion | XploreByte",
//   description:
//     "Instructions to request deletion of WhatsApp integration data from XploreByte.",
//   robots: { index: true, follow: true },
// };

// export default function DataDeletionPage() {
//   const lastUpdated = new Date().toISOString().slice(0, 10);

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Top Bar */}
//       <header className="border-b bg-white">
//         <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
//           <div>
//             <p className="text-sm text-gray-500">XploreByte</p>
//             <h1 className="text-xl font-semibold text-gray-900">
//               User Data Deletion
//             </h1>
//           </div>

//           <Link
//             href="/"
//             className="rounded-lg border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Back to Home
//           </Link>
//         </div>
//       </header>

//       {/* Body */}
//       <section className="mx-auto max-w-5xl px-6 py-10">
//         <div className="rounded-2xl border bg-white p-6 shadow-sm">
//           <p className="text-sm text-gray-700">
//             This page explains how you can request deletion of your data from
//             XploreByte. These instructions are provided to meet platform and
//             privacy requirements.
//           </p>

//           {/* Key sections */}
//           <div className="mt-8 space-y-8">
//             {/* 1) What data */}
//             <div>
//               <h2 className="text-base font-semibold text-gray-900">
//                 1) What data can be deleted
//               </h2>
//               <p className="mt-2 text-sm text-gray-700">
//                 If you use WhatsApp features, XploreByte may store limited
//                 WhatsApp integration data required to provide functionality,
//                 such as:
//               </p>

//               <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
//                 <li>WhatsApp Business Account identifiers (WABA ID)</li>
//                 <li>WhatsApp Phone Number identifiers (Phone Number ID)</li>
//                 <li>
//                   Access tokens used to call WhatsApp Business Platform APIs
//                 </li>
//                 <li>
//                   Configuration settings required to enable/disable WhatsApp
//                   features
//                 </li>
//               </ul>

//               <p className="mt-3 text-sm text-gray-700">
//                 We store this data only to enable WhatsApp messaging and related
//                 features requested by the business user.
//               </p>
//             </div>

//             {/* 2) How to request deletion */}
//             <div>
//               <h2 className="text-base font-semibold text-gray-900">
//                 2) How to request deletion
//               </h2>

//               <div className="mt-3 rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
//                 <p className="text-sm font-semibold text-emerald-900">
//                   Option A (recommended): Delete from inside the app
//                 </p>
//                 <p className="mt-1 text-sm text-emerald-900/90">
//                   Log in to your XploreByte account → go to{" "}
//                   <span className="font-medium">
//                     Settings → WhatsApp Api Integration
//                   </span>{" "}
//                   → click{" "}
//                   <span className="font-medium">
//                     DELETE WHATSAPP DATA (PERMANENT)
//                   </span>
//                   .
//                 </p>
//                 <p className="mt-2 text-xs text-emerald-900/80">
//                   This permanently deletes WhatsApp onboarding configuration and
//                   tokens stored in XploreByte. This cannot be undone.
//                 </p>
//               </div>

//               <div className="mt-4 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-100">
//                 <p className="text-sm font-semibold text-gray-900">
//                   Option B: Request deletion by email
//                 </p>
//                 <p className="mt-1 text-sm text-gray-700">
//                   Email us from your registered account email with the subject{" "}
//                   <span className="font-medium">Data Deletion Request</span>.
//                 </p>

//                 <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200">
//                   support@xplorebyte.com
//                 </div>

//                 <p className="mt-2 text-sm text-gray-700">
//                   Include your business name, your login email, and a short note
//                   requesting deletion.
//                 </p>
//               </div>
//             </div>

//             {/* 3) What happens after */}
//             <div>
//               <h2 className="text-base font-semibold text-gray-900">
//                 3) What happens after deletion
//               </h2>

//               <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
//                 <li>
//                   We permanently remove WhatsApp integration configuration and
//                   access tokens stored by XploreByte for your account.
//                 </li>
//                 <li>
//                   WhatsApp messaging features in XploreByte are disabled after
//                   deletion.
//                 </li>
//                 <li>
//                   To use WhatsApp again, you must explicitly reconnect through a
//                   new Meta Embedded Signup flow.
//                 </li>
//               </ul>

//               <p className="mt-3 text-sm text-gray-700">
//                 For email requests, we may ask for basic verification to prevent
//                 unauthorized deletion requests.
//               </p>
//             </div>

//             {/* 4) Contact */}
//             <div className="border-t pt-6">
//               <h2 className="text-base font-semibold text-gray-900">
//                 4) Contact
//               </h2>
//               <p className="mt-2 text-sm text-gray-700">
//                 For privacy or deletion questions, contact:
//               </p>
//               <p className="mt-2 text-sm font-medium text-gray-900">
//                 support@xplorebyte.com
//               </p>
//               <p className="mt-1 text-xs text-gray-500">
//                 Last updated: {lastUpdated}
//               </p>
//             </div>
//           </div>
//         </div>

//         <p className="mt-6 text-center text-xs text-gray-500">
//           XploreByte Solutions • User Data Deletion Instructions
//         </p>
//       </section>
//     </main>
//   );
// }
