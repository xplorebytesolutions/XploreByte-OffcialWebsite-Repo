// "use client";

// import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react";
// import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

// export default function Home() {
//   return (
//     <div className="hero-bg min-h-screen flex flex-col">
//       {/* NAVBAR */}
//       <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-90 shadow-sm sticky top-0 z-30">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           {/* Insert your SVG logo here! */}
//           <svg width="40" height="40" viewBox="0 0 400 400" fill="none">
//             {/* X */}
//             <rect
//               x="50"
//               y="75"
//               width="40"
//               height="250"
//               rx="20"
//               transform="rotate(-45 50 75)"
//               fill="#FFB800"
//             />
//             <rect
//               x="95"
//               y="270"
//               width="40"
//               height="250"
//               rx="20"
//               transform="rotate(-135 95 270)"
//               fill="#2196F3"
//             />
//             <rect
//               x="137"
//               y="137"
//               width="50"
//               height="50"
//               transform="rotate(-45 137 137)"
//               fill="#FF8000"
//               opacity="0.9"
//             />
//             {/* B */}
//             <path
//               d="M200,90 Q315,90 315,200 Q315,310 200,310"
//               stroke="#EB222B"
//               strokeWidth="40"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M200,200 Q300,200 300,300 Q300,360 200,360"
//               stroke="#6F42C1"
//               strokeWidth="40"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M200,310 Q270,310 270,360 Q270,360 200,360"
//               stroke="#21A366"
//               strokeWidth="40"
//               fill="none"
//               strokeLinecap="round"
//             />
//           </svg>
//           <span className="text-white font-extrabold text-xl tracking-tight">
//             XploreByte
//           </span>
//         </div>
//         {/* Menu */}
//         <ul className="hidden md:flex gap-8 text-white/90 font-medium">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Case Studies</a>
//           </li>
//           <li>
//             <a href="#">Insights</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//         <button className="bg-white px-5 py-2 rounded-lg font-semibold text-black shadow hover:bg-[#c8f3eb] transition text-base">
//           <span className="flex items-center gap-2">
//             <ArrowRightIcon size={22} /> Get Started
//           </span>
//         </button>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-7xl mx-auto px-8 py-20 md:py-32">
//         {/* Left: Headline, CTA */}
//         <div className="flex-1 flex flex-col items-start max-w-xl">
//           <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
//             <span>Home</span>
//             <span className="mx-2 text-gray-400">›</span>
//             <span>About Us</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
//             Empowering Your
//             <br />
//             <span className="text-black/90">Vision</span> with Digital
//             <br />
//             Excellence
//           </h1>
//           <p className="text-lg text-white/80 mb-8">
//             Empowering businesses by leveraging technology to optimize
//             workflows, accelerate growth, and maintain a competitive edge in
//             today’s fast-paced digital world.
//           </p>
//           <div className="flex gap-4 mb-8">
//             <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:bg-gray-100 transition">
//               <ArrowRightIcon size={22} /> Let’s Work Together
//             </button>
//             <button className="border border-white/50 text-white font-semibold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:bg-white/10 transition">
//               <PlayIcon size={22} /> Watch Demo
//             </button>
//           </div>
//           {/* TRUSTED LOGOS */}
//           <div>
//             <div className="mb-2 text-xs font-medium text-gray-400 tracking-widest flex items-center gap-2">
//               TRUSTED BY INDUSTRY LEADERS{" "}
//               <span className="text-[#FFB800] text-lg">★</span>
//             </div>
//             <div className="flex gap-4">
//               {[
//                 "TechCorp",
//                 "SecureVault",
//                 "Innovate",
//                 "GlobalTech",
//                 "GrowthFlow",
//               ].map(name => (
//                 <div
//                   key={name}
//                   className="bg-[#111827]/70 rounded-xl px-4 py-3 flex flex-col items-center shadow text-white/80 text-xs font-medium gap-1"
//                 >
//                   <BuildingOffice2Icon className="w-6 h-6 text-[#FFB800] mb-1" />
//                   {name}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Right: Image + Floating Stats Badges */}
//         <div className="flex-1 flex flex-col items-end w-full max-w-lg relative">
//           {/* HERO IMAGE Placeholder */}
//           <div className="rounded-3xl overflow-hidden bg-black/80 shadow-xl w-[370px] h-[250px] flex items-center justify-center">
//             {/* Replace below with your preferred SaaS graphic */}
//             <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
//               <ellipse
//                 cx="90"
//                 cy="70"
//                 rx="70"
//                 ry="30"
//                 fill="#eee"
//                 fillOpacity="0.10"
//               />
//               <path
//                 d="M40,110 Q90,20 140,110"
//                 stroke="#fff"
//                 strokeWidth="8"
//                 fill="none"
//                 opacity="0.4"
//               />
//               <path
//                 d="M60,100 Q90,50 120,100"
//                 stroke="#ddd"
//                 strokeWidth="6"
//                 fill="none"
//                 opacity="0.7"
//               />
//               <circle cx="90" cy="85" r="10" fill="#fff" opacity="0.2" />
//             </svg>
//           </div>
//           {/* Floating Badges */}
//           <div className="absolute top-2 right-4 bg-black rounded-xl px-5 py-2 shadow-xl flex items-center gap-3 text-white text-sm font-semibold">
//             <span className="bg-[#0236A1] rounded-full px-2 py-1 text-xs mr-2">
//               98% Success Rate
//             </span>
//             Client Satisfaction
//           </div>
//           <div className="absolute bottom-4 left-0 bg-black rounded-xl px-5 py-2 shadow-xl flex items-center gap-3 text-white text-sm font-semibold">
//             <span className="bg-[#07c38f] rounded-full px-2 py-1 text-xs mr-2">
//               500+ Projects
//             </span>
//             Successfully Delivered
//           </div>
//         </div>
//       </section>
//       {/* STATS & TRUST BAR */}
//       <section className="w-full flex justify-center px-2 pb-4">
//         <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg py-7 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* STATS */}
//           <div className="flex flex-col sm:flex-row gap-6 md:gap-14">
//             {/* Clients */}
//             <div className="flex flex-col items-center sm:items-start">
//               <span className="text-3xl md:text-4xl font-bold text-primary">
//                 500+
//               </span>
//               <span className="text-sm md:text-base text-white/80 mt-1">
//                 Clients Served
//               </span>
//             </div>
//             {/* Satisfaction */}
//             <div className="flex flex-col items-center sm:items-start">
//               <span className="text-3xl md:text-4xl font-bold text-accent">
//                 98%
//               </span>
//               <span className="text-sm md:text-base text-white/80 mt-1">
//                 Client Satisfaction
//               </span>
//             </div>
//             {/* Industries */}
//             <div className="flex flex-col items-center sm:items-start">
//               <span className="text-3xl md:text-4xl font-bold text-[#FFB800]">
//                 15+
//               </span>
//               <span className="text-sm md:text-base text-white/80 mt-1">
//                 Industries Covered
//               </span>
//             </div>
//           </div>
//           {/* TRUSTED BY */}
//           <div className="flex flex-col gap-2 md:gap-0 md:items-end">
//             <span className="text-xs text-white/60 mb-1 md:mb-2 flex items-center gap-1">
//               Trusted by
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 20 20"
//                 className="inline"
//                 fill="#FFB800"
//               >
//                 <polygon points="10,1.5 12.5,7.5 19,7.5 13.5,11.5 15.5,17.5 10,13.5 4.5,17.5 6.5,11.5 1,7.5 7.5,7.5" />
//               </svg>
//             </span>
//             <div className="flex flex-wrap gap-2">
//               {["TechCorp", "GlobalTech", "GrowthFlow"].map(c => (
//                 <span
//                   key={c}
//                   className="bg-[#1e293b]/80 rounded px-3 py-1 text-white/80 text-xs font-medium"
//                 >
//                   {c}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* SERVICES SECTION */}
//       <section className="w-full flex justify-center py-16 px-4">
//         <div className="w-full max-w-6xl">
//           <h2 className="text-2xl md:text-4xl font-bold mb-10 text-white text-center">
//             Our Services
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
//             {/* SERVICE CARD */}
//             {[
//               {
//                 title: "Website Development",
//                 desc: "Elite web & app experiences for growth.",
//                 icon: (
//                   <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
//                     <rect
//                       x="3"
//                       y="5"
//                       width="18"
//                       height="14"
//                       rx="3"
//                       fill="#0296FE"
//                       fillOpacity="0.1"
//                     />
//                     <rect
//                       x="3"
//                       y="5"
//                       width="18"
//                       height="3"
//                       rx="1.5"
//                       fill="#0296FE"
//                     />
//                     <rect
//                       x="6"
//                       y="11"
//                       width="12"
//                       height="2"
//                       rx="1"
//                       fill="#11A944"
//                     />
//                   </svg>
//                 ),
//               },
//               {
//                 title: "ERP & Automation",
//                 desc: "Custom ERP, automation & process tools.",
//                 icon: (
//                   <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       fill="#11A944"
//                       fillOpacity="0.12"
//                     />
//                     <path
//                       d="M12 8v8M8 12h8"
//                       stroke="#11A944"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 ),
//               },
//               {
//                 title: "Invoice & GST Software",
//                 desc: "Simplify billing, compliance & finances.",
//                 icon: (
//                   <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
//                     <rect
//                       x="4"
//                       y="4"
//                       width="16"
//                       height="16"
//                       rx="3"
//                       fill="#FFB800"
//                       fillOpacity="0.14"
//                     />
//                     <path
//                       d="M8 8h8M8 12h8M8 16h4"
//                       stroke="#FFB800"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 ),
//               },
//               {
//                 title: "Custom Solutions",
//                 desc: "API, integration & SaaS innovation.",
//                 icon: (
//                   <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       fill="#7D47C4"
//                       fillOpacity="0.14"
//                     />
//                     <path
//                       d="M8 16l8-8M16 16l-8-8"
//                       stroke="#7D47C4"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 ),
//               },
//             ].map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-[#181B32]/80 rounded-2xl p-7 flex flex-col items-center shadow-lg border border-white/10 hover:scale-105 hover:bg-gradient-to-br from-[#0296FE]/30 to-[#11A944]/30 transition-all cursor-pointer"
//               >
//                 <div className="mb-4">{s.icon}</div>
//                 <div className="font-bold text-lg text-white mb-2">
//                   {s.title}
//                 </div>
//                 <div className="text-white/70 text-center text-sm">
//                   {s.desc}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* WHY CHOOSE US SECTION */}
//       <section className="w-full flex justify-center py-14 px-4 bg-[#101426]/90">
//         <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 md:gap-20 items-center">
//           {/* Left: Reasons */}
//           <div className="flex-1 space-y-6">
//             <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
//               Why XploreByte?
//             </h3>
//             <ul className="space-y-3 text-white/80 text-base">
//               <li className="flex items-center gap-2">
//                 <span className="inline-block w-4 h-4 bg-[#11A944] rounded-full mr-1"></span>
//                 Enterprise-Grade Security & Reliability
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="inline-block w-4 h-4 bg-[#0296FE] rounded-full mr-1"></span>
//                 Trusted by 500+ Indian & Global Businesses
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="inline-block w-4 h-4 bg-[#FFB800] rounded-full mr-1"></span>
//                 Lightning-Fast Delivery & Support
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="inline-block w-4 h-4 bg-[#EA1752] rounded-full mr-1"></span>
//                 Compliant, Scalable, Future-Ready SaaS
//               </li>
//             </ul>
//           </div>
//           {/* Right: Trust Badges */}
//           <div className="flex-1 grid grid-cols-2 gap-6">
//             <div className="rounded-xl bg-[#11A944]/10 p-4 text-center font-semibold text-[#11A944] border border-[#11A944]/40">
//               ISO Secure
//             </div>
//             <div className="rounded-xl bg-[#0296FE]/10 p-4 text-center font-semibold text-[#0296FE] border border-[#0296FE]/40">
//               GDPR Compliant
//             </div>
//             <div className="rounded-xl bg-[#FFB800]/10 p-4 text-center font-semibold text-[#FFB800] border border-[#FFB800]/40">
//               500+ Clients
//             </div>
//             <div className="rounded-xl bg-[#EA1752]/10 p-4 text-center font-semibold text-[#EA1752] border border-[#EA1752]/40">
//               Award-Winning
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* TESTIMONIALS SECTION */}
//       <section className="w-full flex justify-center py-20 px-4 bg-gradient-to-b from-[#0A0E23]/40 via-transparent to-[#0A0E23]/70">
//         <div className="w-full max-w-4xl mx-auto">
//           <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
//             Clients Thrive With Our Tools
//           </h3>
//           <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
//             {[
//               {
//                 name: "Sanjay P.",
//                 text: "XploreByte delivered a robust ERP that transformed our operations. Fast, secure, and super responsive support.",
//                 company: "Techwave Solutions",
//               },
//               {
//                 name: "Nikita D.",
//                 text: "The automation suite was a game changer—cut our processing time by 60%! Highly recommend their team.",
//                 company: "UrbanWorks",
//               },
//               {
//                 name: "Rajesh K.",
//                 text: "Loved the GST billing app—easy onboarding, compliant and user-friendly.",
//                 company: "StartupNest",
//               },
//             ].map((t, i) => (
//               <div
//                 key={i}
//                 className="min-w-[320px] bg-[#181B32]/90 rounded-2xl border border-white/10 shadow-xl px-7 py-8 flex flex-col justify-between"
//               >
//                 <div className="mb-3 text-white/90 text-base leading-relaxed">
//                   “{t.text}”
//                 </div>
//                 <div className="text-white/60 text-sm mt-6">
//                   — {t.name}, <span className="font-semibold">{t.company}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* FOOTER */}
//       <footer className="bg-gradient-to-r from-[#0A0E23] to-[#181B32] px-6 py-12 text-white/80">
//         <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
//           {/* Brand + Socials */}
//           <div>
//             <div className="mb-3 font-bold text-2xl text-white flex items-center gap-2">
//               <svg width="30" height="30" viewBox="0 0 400 400" fill="none">
//                 {/* Your SVG logo */}
//                 <rect
//                   x="50"
//                   y="75"
//                   width="40"
//                   height="250"
//                   rx="20"
//                   transform="rotate(-45 50 75)"
//                   fill="#FFB800"
//                 />
//                 <rect
//                   x="95"
//                   y="270"
//                   width="40"
//                   height="250"
//                   rx="20"
//                   transform="rotate(-135 95 270)"
//                   fill="#2196F3"
//                 />
//                 <rect
//                   x="137"
//                   y="137"
//                   width="50"
//                   height="50"
//                   transform="rotate(-45 137 137)"
//                   fill="#FF8000"
//                   opacity="0.9"
//                 />
//                 <path
//                   d="M200,90 Q315,90 315,200 Q315,310 200,310"
//                   stroke="#EB222B"
//                   strokeWidth="40"
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M200,200 Q300,200 300,300 Q300,360 200,360"
//                   stroke="#6F42C1"
//                   strokeWidth="40"
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M200,310 Q270,310 270,360 Q270,360 200,360"
//                   stroke="#21A366"
//                   strokeWidth="40"
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//               </svg>
//               XploreByte Solutions
//             </div>
//             <div className="mb-4 text-sm">
//               SaaS & Digital Solutions | Est. 2024
//             </div>
//             <div className="flex gap-3 mt-3">
//               <a href="#" className="hover:text-[#0296FE] transition">
//                 LinkedIn
//               </a>
//               <a href="#" className="hover:text-[#11A944] transition">
//                 X
//               </a>
//               <a href="#" className="hover:text-[#EA1752] transition">
//                 Instagram
//               </a>
//               <a href="#" className="hover:text-[#25D366] transition">
//                 WhatsApp
//               </a>
//               <a href="#" className="hover:text-[#FFB800] transition">
//                 YouTube
//               </a>
//             </div>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <div className="font-semibold mb-2 text-white">Explore</div>
//             <ul className="text-sm space-y-1">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   BusiOrbitX
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Contact */}
//           <div>
//             <div className="font-semibold mb-2 text-white">Contact</div>
//             <div className="text-sm">hello@xplorebyte.com</div>
//             <div className="text-sm">+91-XXXXXXXXXX</div>
//             <div className="mt-4">
//               <span className="text-xs">
//                 &copy; 2024 XploreByte Solutions. All rights reserved.
//               </span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // "use client";

// // import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react";
// // import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
// // export default function Home() {
// //   return (
// //     <div className="hero-bg min-h-screen flex flex-col">
// //       {/* NAVBAR */}
// //       <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-90 shadow-sm sticky top-0 z-30">
// //         {/* Logo */}
// //         <div className="flex items-center gap-3">
// //           {/* Insert your SVG logo here! */}
// //           <svg width="40" height="40" viewBox="0 0 400 400" fill="none">
// //             <rect
// //               x="50"
// //               y="75"
// //               width="40"
// //               height="250"
// //               rx="20"
// //               transform="rotate(-45 50 75)"
// //               fill="#FFB800"
// //             />
// //             <rect
// //               x="95"
// //               y="270"
// //               width="40"
// //               height="250"
// //               rx="20"
// //               transform="rotate(-135 95 270)"
// //               fill="#2196F3"
// //             />
// //             <rect
// //               x="137"
// //               y="137"
// //               width="50"
// //               height="50"
// //               transform="rotate(-45 137 137)"
// //               fill="#FF8000"
// //               opacity="0.9"
// //             />
// //             <path
// //               d="M200,90 Q315,90 315,200 Q315,310 200,310"
// //               stroke="#EB222B"
// //               strokeWidth="40"
// //               fill="none"
// //               strokeLinecap="round"
// //             />
// //             <path
// //               d="M200,200 Q300,200 300,300 Q300,360 200,360"
// //               stroke="#6F42C1"
// //               strokeWidth="40"
// //               fill="none"
// //               strokeLinecap="round"
// //             />
// //             <path
// //               d="M200,310 Q270,310 270,360 Q270,360 200,360"
// //               stroke="#21A366"
// //               strokeWidth="40"
// //               fill="none"
// //               strokeLinecap="round"
// //             />
// //           </svg>
// //           <span className="text-white font-extrabold text-xl tracking-tight">
// //             XploreByte
// //           </span>
// //         </div>
// //         {/* Menu */}
// //         <ul className="hidden md:flex gap-8 text-white/90 font-medium">
// //           <li>
// //             <a href="#">Home</a>
// //           </li>
// //           <li>
// //             <a href="#">About</a>
// //           </li>
// //           <li>
// //             <a href="#">Services</a>
// //           </li>
// //           <li>
// //             <a href="#">Case Studies</a>
// //           </li>
// //           <li>
// //             <a href="#">Insights</a>
// //           </li>
// //           <li>
// //             <a href="#">Contact</a>
// //           </li>
// //         </ul>
// //         <button className="bg-white px-5 py-2 rounded-lg font-semibold text-black shadow hover:bg-[#c8f3eb] transition text-base">
// //           <span className="flex items-center gap-2">
// //             <ArrowRightIcon size={22} /> Get Started
// //           </span>
// //         </button>
// //       </nav>

// //       {/* HERO SECTION */}
// //       <section className="flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-7xl mx-auto px-8 py-20 md:py-32">
// //         {/* Left: Headline, CTA */}
// //         <div className="flex-1 flex flex-col items-start max-w-xl">
// //           <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
// //             <span>Home</span>
// //             <span className="mx-2 text-gray-400">›</span>
// //             <span>About Us</span>
// //           </div>
// //           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
// //             Empowering Your
// //             <br />
// //             <span className="text-black/90">Vision</span> with Digital
// //             <br />
// //             Excellence
// //           </h1>
// //           <p className="text-lg text-white/80 mb-8">
// //             Empowering businesses by leveraging technology to optimize
// //             workflows, accelerate growth, and maintain a competitive edge in
// //             today’s fast-paced digital world.
// //           </p>
// //           <div className="flex gap-4 mb-8">
// //             <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:bg-gray-100 transition">
// //               <ArrowRightIcon size={22} /> Let’s Work Together
// //             </button>
// //             <button className="border border-white/50 text-white font-semibold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:bg-white/10 transition">
// //               <PlayIcon size={22} /> Watch Demo
// //             </button>
// //           </div>
// //           {/* TRUSTED LOGOS */}
// //           <div>
// //             <div className="mb-2 text-xs font-semibold text-gray-400 tracking-widest flex items-center gap-2">
// //               TRUSTED BY INDUSTRY LEADERS{" "}
// //               <span className="text-[#FFB800] text-lg">★</span>
// //             </div>
// //             <div className="flex gap-4">
// //               {[
// //                 "TechCorp",
// //                 "SecureVault",
// //                 "Innovate",
// //                 "GlobalTech",
// //                 "GrowthFlow",
// //               ].map(name => (
// //                 <div
// //                   key={name}
// //                   className="bg-[#111827]/70 rounded-xl px-4 py-3 flex flex-col items-center shadow text-white/80 text-xs font-medium gap-1"
// //                 >
// //                   <span className="text-lg">⬛</span>
// //                   {name}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //         {/* Right: Image + Floating Stats Badges */}
// //         <div className="flex-1 flex flex-col items-end w-full max-w-lg relative">
// //           {/* HERO IMAGE Placeholder */}
// //           <div className="rounded-3xl overflow-hidden bg-black/80 shadow-xl w-[370px] h-[250px] flex items-center justify-center">
// //             {/* Replace below with your preferred SaaS graphic */}
// //             <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
// //               <ellipse
// //                 cx="90"
// //                 cy="70"
// //                 rx="70"
// //                 ry="30"
// //                 fill="#eee"
// //                 fillOpacity="0.10"
// //               />
// //               <path
// //                 d="M40,110 Q90,20 140,110"
// //                 stroke="#fff"
// //                 strokeWidth="8"
// //                 fill="none"
// //                 opacity="0.4"
// //               />
// //               <path
// //                 d="M60,100 Q90,50 120,100"
// //                 stroke="#ddd"
// //                 strokeWidth="6"
// //                 fill="none"
// //                 opacity="0.7"
// //               />
// //               <circle cx="90" cy="85" r="10" fill="#fff" opacity="0.2" />
// //             </svg>
// //           </div>
// //           {/* Floating Badges */}
// //           <div className="absolute top-2 right-4 bg-black rounded-xl px-5 py-2 shadow-xl flex items-center gap-3 text-white text-sm font-semibold">
// //             <span className="bg-[#0236A1] rounded-full px-2 py-1 text-xs mr-2">
// //               98% Success Rate
// //             </span>
// //             Client Satisfaction
// //           </div>
// //           <div className="absolute bottom-4 left-0 bg-black rounded-xl px-5 py-2 shadow-xl flex items-center gap-3 text-white text-sm font-semibold">
// //             <span className="bg-[#07c38f] rounded-full px-2 py-1 text-xs mr-2">
// //               500+ Projects
// //             </span>
// //             Successfully Delivered
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 flex items-center justify-center">
// //       <div className="max-w-3xl w-full mx-auto py-24 px-6 text-center">
// //         {/* XBS LOGO ICON */}
// //         <div className="flex justify-center mb-8">
// //           <svg width="80" height="80" viewBox="0 0 256 256" fill="none">
// //             <g>
// //               <rect
// //                 x="40"
// //                 y="35"
// //                 width="35"
// //                 height="185"
// //                 rx="14"
// //                 transform="rotate(35 40 35)"
// //                 fill="#FFB800"
// //               />
// //               <rect
// //                 x="181"
// //                 y="35"
// //                 width="35"
// //                 height="185"
// //                 rx="14"
// //                 transform="rotate(145 181 35)"
// //                 fill="#0296FE"
// //               />
// //               <path
// //                 d="M135,70 C180,70 180,125 135,125"
// //                 stroke="#EA1752"
// //                 strokeWidth="30"
// //                 fill="none"
// //               />
// //               <path
// //                 d="M135,130 C180,130 180,185 135,185"
// //                 stroke="#7D47C4"
// //                 strokeWidth="30"
// //                 fill="none"
// //               />
// //               <rect
// //                 x="120"
// //                 y="70"
// //                 width="20"
// //                 height="115"
// //                 rx="10"
// //                 fill="#11A944"
// //               />
// //             </g>
// //           </svg>
// //         </div>
// //         <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-4">
// //           XploreByte Solutions
// //         </h1>
// //         <p className="text-lg md:text-2xl text-white/80 mb-10">
// //           Empowering business growth with elite SaaS, automation,
// //           <br /> and digital innovation.
// //         </p>
// //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //           <a
// //             href="#contact"
// //             className="px-7 py-3 rounded-2xl font-semibold bg-primary hover:bg-accent transition text-white shadow-lg"
// //           >
// //             Get Free Consult
// //           </a>
// //           <a
// //             href="#demo"
// //             className="px-7 py-3 rounded-2xl font-semibold border border-white/30 bg-white/10 hover:bg-white/20 transition text-white"
// //           >
// //             Request Demo
// //           </a>
// //           <a
// //             href="https://wa.me/919999999999"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-7 py-3 rounded-2xl font-semibold bg-[#25D366] text-[#0A0E23] hover:bg-[#19c85b] flex items-center gap-2 shadow-md"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="22"
// //               height="22"
// //               fill="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.888-9.885.002-5.462-4.415-9.89-9.881-9.892-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.743-.965zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413z" />
// //             </svg>
// //             WhatsApp Us
// //           </a>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroFeatureStrip from "../components/HeroFeatureStrip";
import IndustriesGrid from "../components/whatsappBusiness/IndustriesGrid";
import WhyWhatsAppSection from "../components/WhyWhatsAppSection";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";

// import DigitalSerenity from "../components/DigitalSerenity";

export default function Home() {
  return (
    <>
      <Header />

      <main className="hero-bg min-h-screen flex flex-col">
        <Hero />
        <HeroFeatureStrip />
        <IndustriesGrid />
        <WhyWhatsAppSection />
        <StatsSection />
        <CTASection />

        {/* <DigitalSerenity /> */}
      </main>
      <Footer />
    </>
  );
}
