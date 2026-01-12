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
import { Montserrat } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingActionButton from "@/components/FloatingActionButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "XploreByte Solutions",
  description: "Elite SaaS and digital solutions for ambitious businesses.",
  icons: [
    { rel: "icon", url: "/assets/logo_7.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "32x32" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="pt-14 md:pt-14 no-scrollbar" suppressHydrationWarning>
        {children}
        <FloatingActionButton />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
