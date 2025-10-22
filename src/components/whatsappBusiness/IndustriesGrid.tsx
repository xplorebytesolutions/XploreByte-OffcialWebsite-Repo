// // import React from "react";

// // interface Industry {
// //   title: string;
// //   description: string;
// //   image: string;
// //   bg: string;
// //   accent: string; // gradient accent
// //   ctaUrl?: string;
// // }

// // const industries: Industry[] = [
// //   {
// //     title: "Beauty & Cosmetics",
// //     description:
// //       "Empower beauty brands to engage and convert shoppers on WhatsApp with personalized catalogs, instant support, and seamless product discovery.",
// //     image: "/whatsapp-business/industry/industry-beauty.png",
// //     bg: "bg-green-50",
// //     accent: "from-emerald-400 via-green-300 to-white",
// //     ctaUrl: "/industries/beauty-cosmetics",
// //   },
// //   {
// //     title: "Health & Wellness",
// //     description:
// //       "Enhance patient experiences by enabling easy appointment scheduling, reminders, and health updates through WhatsApp automation.",
// //     image: "/whatsapp-business/industry/industry-health.png",
// //     bg: "bg-blue-50",
// //     accent: "from-sky-400 via-blue-300 to-white",
// //     ctaUrl: "/industries/healthcare",
// //   },
// //   {
// //     title: "Home Decor & Furnishing",
// //     description:
// //       "Drive more sales and delight customers by sharing catalogs, confirming orders, and collecting feedback, all via WhatsApp conversations.",
// //     image: "/whatsapp-business/industry/industry-decor.png",
// //     bg: "bg-yellow-50",
// //     accent: "from-yellow-300 via-orange-200 to-white",
// //     ctaUrl: "/industries/real-estate",
// //   },
// //   {
// //     title: "Automotive Industry",
// //     description:
// //       "Streamline promotions, service bookings, and reminders—keeping customers informed and loyal through instant WhatsApp messaging.",
// //     image: "/whatsapp-business/industry/industry-automotive.png",
// //     bg: "bg-teal-50",
// //     accent: "from-teal-300 via-emerald-200 to-white",
// //     ctaUrl: "/industries/automotive",
// //   },
// //   {
// //     title: "Real Estate",
// //     description:
// //       "Connect with property seekers instantly, share listings and documents, and schedule site visits—all within WhatsApp’s secure chat.",
// //     image: "/whatsapp-business/industry/industry-realestate.png",
// //     bg: "bg-blue-50",
// //     accent: "from-blue-400 via-blue-200 to-white",
// //     ctaUrl: "/industries/real-estate",
// //   },
// //   {
// //     title: "Freelancer & Consultants",
// //     description:
// //       "Deliver a personal touch with automated responses, share service details, and nurture client relationships using WhatsApp for business.",
// //     image: "/whatsapp-business/industry/industry-freelancer.png",
// //     bg: "bg-teal-50",
// //     accent: "from-teal-400 via-green-200 to-white",
// //     ctaUrl: "/industries/freelancer",
// //   },
// //   {
// //     title: "Travel & Tourism",
// //     description:
// //       "Simplify trip bookings, itinerary updates, and customer inquiries with 24/7 WhatsApp support for every traveler’s journey.",
// //     image: "/whatsapp-business/industry/industry-travel.png",
// //     bg: "bg-green-50",
// //     accent: "from-emerald-400 via-sky-200 to-white",
// //     ctaUrl: "/industries/travel",
// //   },
// //   {
// //     title: "Education",
// //     description:
// //       "Boost student engagement with real-time notifications, schedule updates, and support—all easily delivered through WhatsApp.",
// //     image: "/whatsapp-business/industry/industry-education.png",
// //     bg: "bg-blue-50",
// //     accent: "from-indigo-400 via-cyan-200 to-white",
// //     ctaUrl: "/industries/education",
// //   },
// //   {
// //     title: "Spa & Salons",
// //     description:
// //       "Automate booking confirmations, payment links, and promotional offers to keep your clients coming back for more.",
// //     image: "/whatsapp-business/industry/industry-spa.png",
// //     bg: "bg-yellow-50",
// //     accent: "from-yellow-400 via-orange-200 to-white",
// //     ctaUrl: "/industries/spa",
// //   },
// //   {
// //     title: "E-commerce",
// //     description:
// //       "Increase conversions by sending order updates, product recommendations, and delivery alerts directly to your customers on WhatsApp.",
// //     image: "/whatsapp-business/industry/industry-ecommerce.png",
// //     bg: "bg-blue-50",
// //     accent: "from-sky-400 via-indigo-200 to-white",
// //     ctaUrl: "/industries/food",
// //   },
// //   {
// //     title: "Banking & Finance",
// //     description:
// //       "Build trust and improve customer retention with instant payment reminders, account updates, and secure service communagesication.",
// //     image: "/whatsapp-business/industry/industry-banking.png",
// //     bg: "bg-teal-50",
// //     accent: "from-teal-400 via-cyan-200 to-white",
// //     ctaUrl: "/contact",
// //   },
// //   {
// //     title: "Restaurants & Food Businesses",
// //     description:
// //       "Speed up orders, share menu options, and accept payments seamlessly—giving every customer a delightful experience via WhatsApp.",
// //     image: "/whatsapp-business/industry/industry-food.png",
// //     bg: "bg-yellow-50",
// //     accent: "from-yellow-300 via-orange-100 to-white",
// //     ctaUrl: "/industries/food",
// //   },
// // ];

// // const IndustriesGrid: React.FC = () => (
// //   <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
// //     <div className="max-w-7xl mx-auto px-6">
// //       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
// //         Built for any <span className="text-emerald-500">Industry</span>
// //       </h2>
// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// //         {industries.map((ind, idx) => (
// //           <div
// //             key={ind.title}
// //             className={`
// //               group relative rounded-3xl shadow-xl flex flex-col p-8 ${ind.bg}
// //               transition hover:scale-[1.035] hover:shadow-2xl hover:z-20 duration-300
// //               border border-white/60 hover:border-emerald-400/70
// //               before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:rounded-t-3xl
// //               before:bg-gradient-to-r before:${ind.accent} before:opacity-90
// //               before:transition-all before:duration-300
// //               hover:before:opacity-100
// //               `}
// //             style={{ minHeight: 430, overflow: "hidden" }}
// //           >
// //             {/* Gradient Accent Bar (already in tailwind above, invisible on mobile if wanted) */}
// //             <img
// //               src={ind.image}
// //               alt={ind.title}
// //               className="w-full h-40 object-contain rounded-2xl mb-5 bg-white group-hover:shadow-lg transition"
// //             />
// //             <h3 className="text-xl font-extrabold text-slate-900 mb-2">
// //               {ind.title}
// //             </h3>
// //             <p className="text-slate-700 mb-4 flex-1">{ind.description}</p>
// //             <a
// //               href={ind.ctaUrl}
// //               className="font-semibold text-emerald-700 flex items-center gap-2 group-hover:underline group-hover:underline-offset-4"
// //             >
// //               Learn more
// //               <span className="group-hover:translate-x-1 transition">
// //                 <svg
// //                   className="w-5 h-5"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth={3}
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M5 12h14M12 5l7 7-7 7"></path>
// //                 </svg>
// //               </span>
// //             </a>
// //             {/* Soft background blob for more “wow” */}
// //             <span
// //               className={`
// //                 absolute -bottom-10 -right-16 w-56 h-28 rounded-full
// //                 blur-2xl opacity-30 group-hover:opacity-50
// //                 pointer-events-none
// //                 ${idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"}
// //               `}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default IndustriesGrid;
// "use client";
// import React from "react";

// interface Industry {
//   title: string;
//   description: string;
//   image: string;
//   bg: string;
//   accent: string;
//   ctaUrl?: string;
// }

// const industries: Industry[] = [
//   {
//     title: "Beauty & Cosmetics",
//     description:
//       "Empower beauty brands to engage and convert shoppers on WhatsApp with personalized catalogs, instant support, and seamless product discovery.",
//     image: "/whatsapp-business/industry/industry-beauty.png",
//     bg: "bg-green-50",
//     accent: "from-emerald-400 via-green-300 to-white",
//     ctaUrl: "/industries/beauty-cosmetics",
//   },
//   {
//     title: "Health & Wellness",
//     description:
//       "Enhance patient experiences by enabling easy appointment scheduling, reminders, and health updates through WhatsApp automation.",
//     image: "/whatsapp-business/industry/industry-health.png",
//     bg: "bg-blue-50",
//     accent: "from-sky-400 via-blue-300 to-white",
//     ctaUrl: "/industries/healthcare",
//   },
//   {
//     title: "Home Decor & Furnishing",
//     description:
//       "Drive more sales and delight customers by sharing catalogs, confirming orders, and collecting feedback, all via WhatsApp conversations.",
//     image: "/whatsapp-business/industry/industry-decor.png",
//     bg: "bg-yellow-50",
//     accent: "from-yellow-300 via-orange-200 to-white",
//     ctaUrl: "/industries/real-estate",
//   },
//   {
//     title: "Automotive Industry",
//     description:
//       "Streamline promotions, service bookings, and reminders—keeping customers informed and loyal through instant WhatsApp messaging.",
//     image: "/whatsapp-business/industry/industry-automotive.png",
//     bg: "bg-teal-50",
//     accent: "from-teal-300 via-emerald-200 to-white",
//     ctaUrl: "/industries/automotive",
//   },
//   {
//     title: "Real Estate",
//     description:
//       "Connect with property seekers instantly, share listings and documents, and schedule site visits—all within WhatsApp’s secure chat.",
//     image: "/whatsapp-business/industry/industry-realestate.png",
//     bg: "bg-blue-50",
//     accent: "from-blue-400 via-blue-200 to-white",
//     ctaUrl: "/industries/real-estate",
//   },
//   {
//     title: "Freelancer & Consultants",
//     description:
//       "Deliver a personal touch with automated responses, share service details, and nurture client relationships using WhatsApp for business.",
//     image: "/whatsapp-business/industry/industry-freelancer.png",
//     bg: "bg-teal-50",
//     accent: "from-teal-400 via-green-200 to-white",
//     ctaUrl: "/industries/freelancer",
//   },
//   {
//     title: "Travel & Tourism",
//     description:
//       "Simplify trip bookings, itinerary updates, and customer inquiries with 24/7 WhatsApp support for every traveler’s journey.",
//     image: "/whatsapp-business/industry/industry-travel.png",
//     bg: "bg-green-50",
//     accent: "from-emerald-400 via-sky-200 to-white",
//     ctaUrl: "/industries/travel",
//   },
//   {
//     title: "Education",
//     description:
//       "Boost student engagement with real-time notifications, schedule updates, and support—all easily delivered through WhatsApp.",
//     image: "/whatsapp-business/industry/industry-education.png",
//     bg: "bg-blue-50",
//     accent: "from-indigo-400 via-cyan-200 to-white",
//     ctaUrl: "/industries/education",
//   },
//   {
//     title: "Spa & Salons",
//     description:
//       "Automate booking confirmations, payment links, and promotional offers to keep your clients coming back for more.",
//     image: "/whatsapp-business/industry/industry-spa.png",
//     bg: "bg-yellow-50",
//     accent: "from-yellow-400 via-orange-200 to-white",
//     ctaUrl: "/industries/spa",
//   },
//   {
//     title: "E-commerce",
//     description:
//       "Increase conversions by sending order updates, product recommendations, and delivery alerts directly to your customers on WhatsApp.",
//     image: "/whatsapp-business/industry/industry-ecommerce.png",
//     bg: "bg-blue-50",
//     accent: "from-sky-400 via-indigo-200 to-white",
//     ctaUrl: "/industries/food",
//   },
//   {
//     title: "Banking & Finance",
//     description:
//       "Build trust and improve customer retention with instant payment reminders, account updates, and secure service communagesication.",
//     image: "/whatsapp-business/industry/industry-banking.png",
//     bg: "bg-teal-50",
//     accent: "from-teal-400 via-cyan-200 to-white",
//     ctaUrl: "/contact",
//   },
//   {
//     title: "Restaurants & Food Businesses",
//     description:
//       "Speed up orders, share menu options, and accept payments seamlessly—giving every customer a delightful experience via WhatsApp.",
//     image: "/whatsapp-business/industry/industry-food.png",
//     bg: "bg-yellow-50",
//     accent: "from-yellow-300 via-orange-100 to-white",
//     ctaUrl: "/industries/food",
//   },
// ];

// const IndustriesGrid: React.FC = () => (
//   <section className="py-14 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
//     <div className="max-w-7xl mx-auto px-3 md:px-8">
//       <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-8 md:mb-12">
//         Built for any <span className="text-emerald-500">Industry</span>
//       </h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
//         {industries.map((ind, idx) => (
//           <div
//             key={ind.title}
//             className={`
//               group relative rounded-3xl shadow-lg flex flex-col px-4 py-6 md:px-7 md:py-9 ${ind.bg}
//               transition hover:scale-[1.03] hover:shadow-2xl hover:z-20 duration-300
//               border border-white/70 hover:border-emerald-400/60
//               min-h-[390px] md:min-h-[420px]
//               overflow-visible
//             `}
//           >
//             {/* Glow/Blob Behind Image */}
//             <span
//               className="absolute left-1/2 -top-6 -translate-x-1/2 z-0 blur-2xl rounded-full w-40 h-16"
//               style={{
//                 background:
//                   "radial-gradient(ellipse at 50% 60%, #a7f3d0 0%, #fff 80%)",
//                 opacity: 0.5,
//               }}
//             />
//             {/* IMAGE */}
//             <div className="flex justify-center relative z-10 mb-3 mt-[-32px]">
//               <img
//                 src={ind.image}
//                 alt={ind.title}
//                 className="..." // your classes
//                 onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//                   e.currentTarget.src = "/images/industry-placeholder.png";
//                 }}
//               />
//             </div>
//             {/* TITLE & DESCRIPTION */}
//             <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-1 md:mb-2">
//               {ind.title}
//             </h3>
//             <p className="text-slate-700 mb-3 md:mb-4 text-sm md:text-base flex-1 leading-relaxed">
//               {ind.description}
//             </p>
//             <a
//               href={ind.ctaUrl}
//               className="font-semibold text-emerald-700 flex items-center gap-2 group-hover:underline group-hover:underline-offset-4 text-sm md:text-base"
//             >
//               Learn more
//               <span className="group-hover:translate-x-1 transition">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={3}
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </span>
//             </a>
//             {/* Soft background blob for more “wow” */}
//             <span
//               className={`
//                 absolute -bottom-10 -right-16 w-40 h-16 rounded-full
//                 blur-2xl opacity-25 group-hover:opacity-40
//                 pointer-events-none
//                 ${idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"}
//               `}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default IndustriesGrid;

"use client";
import React, { useState, useEffect } from "react";

interface Industry {
  title: string;
  description: string;
  image: string;
  bg: string;
  accent: string; // Not used in this design, but kept for data structure consistency
  ctaUrl?: string;
}

const industries: Industry[] = [
  {
    title: "Beauty & Cosmetics",
    description:
      "Transform your beauty business with WhatsApp automation. Key benefits include:\n• Personalized product catalogs and instant support\n• Seamless appointment booking and reminders\n• Automated follow-ups and customer retention\n• Real-time order tracking and delivery updates",
    image: "/whatsapp-business/industry/industry-beauty.png",
    bg: "bg-green-50",
    accent: "from-emerald-400 via-green-300 to-white",
    ctaUrl: "/industries/beauty-cosmetics",
  },
  {
    title: "Health & Wellness",
    description:
      "Enhance patient care with intelligent WhatsApp solutions. Features include:\n• Automated appointment scheduling and reminders\n• Health check-in notifications and updates\n• Prescription refill alerts and medication tracking\n• Secure patient communication and data protection",
    image: "/whatsapp-business/industry/industry-health.png",
    bg: "bg-blue-50",
    accent: "from-sky-400 via-blue-300 to-white",
    ctaUrl: "/industries/healthcare",
  },
  {
    title: "Home Decor & Furnishing",
    description:
      "Drive sales growth with WhatsApp business automation. Capabilities include:\n• Interactive product catalogs and virtual showrooms\n• Automated order confirmations and shipping updates\n• Customer feedback collection and review management\n• Personalized recommendations and upselling",
    image: "/whatsapp-business/industry/industry-decor.png",
    bg: "bg-yellow-50",
    accent: "from-yellow-300 via-orange-200 to-white",
    ctaUrl: "/industries/real-estate",
  },
  {
    title: "Automotive Industry",
    description:
      "Streamline automotive services with WhatsApp automation. Benefits include:\n• Service appointment booking and reminders\n• Vehicle maintenance alerts and service history\n• Parts availability notifications and ordering\n• Customer satisfaction surveys and feedback",
    image: "/whatsapp-business/industry/industry-automotive.png",
    bg: "bg-teal-50",
    accent: "from-teal-300 via-emerald-200 to-white",
    ctaUrl: "/industries/automotive",
  },
  {
    title: "Real Estate",
    description:
      "Connect with property seekers through WhatsApp automation. Features include:\n• Instant property listings and virtual tours\n• Automated appointment scheduling for viewings\n• Document sharing and contract management\n• Lead nurturing and follow-up automation",
    image: "/whatsapp-business/industry/industry-realestate.png",
    bg: "bg-blue-50",
    accent: "from-blue-400 via-blue-200 to-white",
    ctaUrl: "/industries/real-estate",
  },
  {
    title: "Freelancer & Consultants",
    description:
      "Deliver exceptional client experiences with WhatsApp automation. Includes:\n• Automated project updates and milestone notifications\n• Client onboarding and service delivery automation\n• Invoice reminders and payment processing\n• Knowledge base and FAQ automation",
    image: "/whatsapp-business/industry/industry-freelancer.png",
    bg: "bg-teal-50",
    accent: "from-teal-400 via-green-200 to-white",
    ctaUrl: "/industries/freelancer",
  },
  {
    title: "Travel & Tourism",
    description:
      "Enhance traveler experiences with WhatsApp automation. Capabilities include:\n• Automated booking confirmations and itinerary updates\n• Real-time travel alerts and weather notifications\n• Customer support and emergency assistance\n• Post-trip feedback and review collection",
    image: "/whatsapp-business/industry/industry-travel.png",
    bg: "bg-green-50",
    accent: "from-emerald-400 via-sky-200 to-white",
    ctaUrl: "/industries/travel",
  },
  {
    title: "Education",
    description:
      "Boost student engagement with WhatsApp automation. Features include:\n• Automated class reminders and schedule updates\n• Assignment notifications and deadline alerts\n• Parent communication and progress reports\n• Emergency notifications and campus updates",
    image: "/whatsapp-business/industry/industry-education.png",
    bg: "bg-blue-50",
    accent: "from-indigo-400 via-cyan-200 to-white",
    ctaUrl: "/industries/education",
  },
  {
    title: "Spa & Salons",
    description:
      "Automate your spa and salon operations with WhatsApp. Benefits include:\n• Automated booking confirmations and payment processing\n• Service reminders and promotional offers\n• Customer feedback collection and review management\n• Loyalty program automation and rewards",
    image: "/whatsapp-business/industry/industry-spa.png",
    bg: "bg-yellow-50",
    accent: "from-yellow-400 via-orange-200 to-white",
    ctaUrl: "/industries/spa",
  },
  {
    title: "E-commerce",
    description:
      "Increase conversions with WhatsApp e-commerce automation. Includes:\n• Automated order confirmations and shipping updates\n• Product recommendations and upselling\n• Cart abandonment recovery and re-engagement\n• Customer support and return processing",
    image: "/whatsapp-business/industry/industry-ecommerce.png",
    bg: "bg-blue-50",
    accent: "from-sky-400 via-indigo-200 to-white",
    ctaUrl: "/industries/food",
  },
  {
    title: "Banking & Finance",
    description:
      "Build trust with secure WhatsApp automation. Features include:\n• Automated payment reminders and account updates\n• Transaction notifications and fraud alerts\n• Loan application status and document requests\n• Customer support and financial education",
    image: "/whatsapp-business/industry/industry-banking.png",
    bg: "bg-teal-50",
    accent: "from-teal-400 via-cyan-200 to-white",
    ctaUrl: "/contact",
  },
  {
    title: "Restaurants & Food Businesses",
    description:
      "Speed up operations with WhatsApp food service automation. Includes:\n• Automated order taking and menu updates\n• Delivery tracking and customer notifications\n• Table reservations and waitlist management\n• Customer feedback and review collection",
    image: "/whatsapp-business/industry/industry-food.png",
    bg: "bg-yellow-50",
    accent: "from-yellow-300 via-orange-100 to-white",
    ctaUrl: "/industries/food",
  },
];

const IndustriesGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === industries.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-6 md:mb-8">
          All-in-One{" "}
          <span className="text-emerald-500">WhatsApp Business Solutions</span>{" "}
          for Growing Brands
        </h2>
        <p className="text-lg md:text-xl text-slate-600 text-center mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
          From AI chatbots and automated campaigns to WhatsApp Flows and
          auto-replies, we provide comprehensive WhatsApp Business API services
          including marketing campaigns, customer support automation, and
          advanced integrations for every industry.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {industries.map((ind, idx) => (
                <div key={ind.title} className="w-full flex-shrink-0">
                  <div className="px-4 md:px-8">
                    <a
                      href={ind.ctaUrl}
                      className={`
                        group relative shadow-lg flex flex-row items-center px-4 py-6 md:px-6 md:py-8 ${ind.bg}
                        transition hover:scale-[1.02] hover:shadow-2xl hover:z-20 duration-300
              border border-white/70 hover:border-emerald-400/60
                        min-h-[196px] md:min-h-[224px]
                        overflow-visible block cursor-pointer
            `}
                    >
                      {/* Left Side - Image */}
                      <div className="flex-shrink-0 w-2/5 h-full pr-4 md:pr-6">
                        <div className="relative h-full w-full">
                          {/* Glow/Blob Behind Image */}
                          <span
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 blur-2xl rounded-full w-40 h-24"
                            style={{
                              background:
                                "radial-gradient(ellipse at 50% 50%, #a7f3d0 0%, #fff 80%)",
                              opacity: 0.4,
                            }}
                          />
                          {/* IMAGE */}
                          <div className="relative z-10 w-full h-full">
                            <img
                              src={ind.image}
                              alt={ind.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(
                                e: React.SyntheticEvent<HTMLImageElement, Event>
                              ) => {
                                e.currentTarget.src =
                                  "/images/industry-placeholder.png";
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 w-3/5 pl-3 md:pl-4">
                        <div className="flex flex-col h-full justify-center">
                          {/* INDUSTRY TITLE */}
                          <div className="mb-3">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  ind.bg === "bg-green-50"
                                    ? "bg-green-100 text-green-700"
                                    : ind.bg === "bg-blue-50"
                                    ? "bg-blue-100 text-blue-700"
                                    : ind.bg === "bg-yellow-50"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : ind.bg === "bg-teal-50"
                                    ? "bg-teal-100 text-teal-700"
                                    : "bg-emerald-100 text-emerald-700"
                                }`}
                              >
                                Industry
                              </span>
                              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                {ind.title}
                              </h3>
                            </div>
                            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                          </div>

                          {/* DESCRIPTION */}
                          <div className="text-slate-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                            {ind.description.split("\n").map((line, index) => (
                              <div key={index} className="mb-2">
                                {line.startsWith("•") ? (
                                  <div className="flex items-start">
                                    <div
                                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mr-4 mt-0.5 shadow-sm ${
                                        ind.bg === "bg-green-50"
                                          ? "bg-gradient-to-br from-green-400 to-green-600"
                                          : ind.bg === "bg-blue-50"
                                          ? "bg-gradient-to-br from-blue-400 to-blue-600"
                                          : ind.bg === "bg-yellow-50"
                                          ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                                          : ind.bg === "bg-teal-50"
                                          ? "bg-gradient-to-br from-teal-400 to-teal-600"
                                          : "bg-gradient-to-br from-emerald-400 to-emerald-600"
                                      }`}
                                    >
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <span className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                      {line.substring(1).trim()}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-slate-700 font-bold text-lg md:text-xl">
                                    {line}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200 text-sm md:text-base w-fit group-hover:shadow-md ${
                              ind.bg === "bg-green-50"
                                ? "bg-green-100 text-green-700"
                                : ind.bg === "bg-blue-50"
                                ? "bg-blue-100 text-blue-700"
                                : ind.bg === "bg-yellow-50"
                                ? "bg-yellow-100 text-yellow-700"
                                : ind.bg === "bg-teal-50"
                                ? "bg-teal-100 text-teal-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            Explore
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Soft background blob for more "wow" */}
                      <span
                        className={`
                absolute -bottom-10 -right-16 w-40 h-16 rounded-full
                blur-2xl opacity-25 group-hover:opacity-40
                pointer-events-none
                ${idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"}
              `}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {industries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? "bg-emerald-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
