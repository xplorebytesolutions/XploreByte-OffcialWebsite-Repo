"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
interface IndustryCard {
  title: string;
  description: string;
  image: string;
  ctaUrl?: string;
}

const industries: IndustryCard[] = [
  {
    title: "Beauty & Cosmetics",
    description:
      "Empower beauty brands to engage and convert shoppers on WhatsApp with personalized catalogs, instant support, and seamless product discovery.",
    image: "/whatsapp-business/industry/industry-beauty.png",
    ctaUrl: "/industries/beauty-cosmetics",
  },
  {
    title: "Health & Wellness",
    description:
      "Enhance patient experiences by enabling easy appointment scheduling, reminders, and health updates through WhatsApp automation.",
    image: "/whatsapp-business/industry/industry-health.png",
    ctaUrl: "/industries/healthcare",
  },
  {
    title: "Home Decor & Furnishing",
    description:
      "Drive more sales and delight customers by sharing catalogs, confirming orders, and collecting feedback, all via WhatsApp conversations.",
    image: "/whatsapp-business/industry/industry-decor.png",
    ctaUrl: "/industries/real-estate",
  },
  {
    title: "Automotive Industry",
    description:
      "Streamline promotions, service bookings, and reminders—keeping customers informed and loyal through instant WhatsApp messaging.",
    image: "/whatsapp-business/industry/industry-automotive.png",
    ctaUrl: "/industries/automotive",
  },
  {
    title: "Real Estate",
    description:
      "Connect with property seekers instantly, share listings and documents, and schedule site visits—all within WhatsApp's secure chat.",
    image: "/whatsapp-business/industry/industry-realestate.png",
    ctaUrl: "/industries/real-estate",
  },
  {
    title: "Freelancer & Consultants",
    description:
      "Deliver a personal touch with automated responses, share service details, and nurture client relationships using WhatsApp for business.",
    image: "/whatsapp-business/industry/industry-freelancer.png",
    ctaUrl: "/industries/freelancer",
  },
  {
    title: "Travel & Tourism",
    description:
      "Simplify trip bookings, itinerary updates, and customer inquiries with 24/7 WhatsApp support for every traveler's journey.",
    image: "/whatsapp-business/industry/industry-travel.png",
    ctaUrl: "/industries/travel",
  },
  {
    title: "Education",
    description:
      "Boost student engagement with real-time notifications, schedule updates, and support—all easily delivered through WhatsApp.",
    image: "/whatsapp-business/industry/industry-education.png",
    ctaUrl: "/industries/education",
  },
  {
    title: "Spa & Salons",
    description:
      "Automate booking confirmations, payment links, and promotional offers to keep your clients coming back for more.",
    image: "/whatsapp-business/industry/industry-spa.png",
    ctaUrl: "/industries/spa",
  },
  {
    title: "E-commerce",
    description:
      "Increase conversions by sending order updates, product recommendations, and delivery alerts directly to your customers on WhatsApp.",
    image: "/whatsapp-business/industry/industry-ecommerce.png",
    ctaUrl: "/industries/food",
  },
  {
    title: "Banking & Finance",
    description:
      "Build trust and improve customer retention with instant payment reminders, account updates, and secure service communication.",
    image: "/whatsapp-business/industry/industry-banking.png",
    ctaUrl: "/contact",
  },
  {
    title: "Restaurants & Food Businesses",
    description:
      "Speed up orders, share menu options, and accept payments seamlessly—giving every customer a delightful experience via WhatsApp.",
    image: "/whatsapp-business/industry/industry-food.png",
    ctaUrl: "/industries/food",
  },
];

export default function IndustriesCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1280px)": { slides: { perView: 3, spacing: 32 } },
    },
    loop: true,
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (!instanceRef.current) return;
    // This attaches the listener and does NOT need cleanup
    instanceRef.current.on("slideChanged", slider => {
      setCurrentSlide(slider.track.details.rel);
    });
  }, [instanceRef]);

  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for Your <span className="text-emerald-400">Industry</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Powering conversations across every sector with intelligent WhatsApp
            automation.
          </p>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {industries.map(item => (
              <div key={item.title} className="keen-slider__slide">
                <div
                  className={`
                    group flex flex-col h-full rounded-2xl
                    bg-slate-800/50 border border-slate-700
                    transition-all duration-300
                    hover:border-emerald-500/80 hover:-translate-y-2
                  `}
                >
                  {/* --- IMAGE, STRETCHED FULL WIDTH, ASPECT RATIO --- */}
                  <div className="w-full mb-6 px-6 pt-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400} // set actual width/height if possible
                      height={400}
                      className="w-full ..."
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  {/* --- TEXT SECTION --- */}
                  <div className="flex flex-col flex-1 px-8 pb-8 text-center">
                    <h3 className="text-xl font-extrabold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-base flex-1 mb-6">
                      {item.description}
                    </p>
                    <a
                      href={item.ctaUrl}
                      className="font-semibold text-emerald-400 flex items-center justify-center gap-2 group-hover:text-emerald-300"
                    >
                      Learn more
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {instanceRef.current && (
            <div className="flex justify-center gap-3 mt-10">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map(idx => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      currentSlide === idx
                        ? "bg-emerald-500 w-6"
                        : "bg-slate-600 hover:bg-slate-500"
                    }
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
