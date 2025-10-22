"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Bot,
  BarChart3,
  Users,
  Settings,
  Zap,
} from "lucide-react";

interface ProductSpotlightItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const ProductSpotlightCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const spotlightItems: ProductSpotlightItem[] = [
    {
      id: 1,
      title: "Unified Omni-Inbox",
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      color: "from-[#11A944] to-[#0296FE]",
    },
    {
      id: 2,
      title: "AI Chatbots & Flows",
      icon: <Bot className="w-6 h-6 text-white" />,
      color: "from-[#FFB800] to-[#EA1752]",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: "from-[#0296FE] to-[#7D47C4]",
    },
    {
      id: 4,
      title: "Team Management",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "from-[#11A944] to-[#FFB800]",
    },
    {
      id: 5,
      title: "Integrations Hub",
      icon: <Settings className="w-6 h-6 text-white" />,
      color: "from-[#7D47C4] to-[#EA1752]",
    },
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === spotlightItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [spotlightItems.length]);

  const currentItem = spotlightItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-xl p-6 border border-[#11A944]/10 relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative">
        {/* Image/Icon Area */}
        <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="text-center transition-all duration-500 ease-in-out">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${currentItem.color} rounded-lg mx-auto mb-2 flex items-center justify-center transition-all duration-500`}
            >
              {currentItem.icon}
            </div>
            <p className="text-xs text-gray-500 transition-all duration-500">
              {currentItem.title} Dashboard
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500 ease-in-out">
          <h4 className="font-semibold text-gray-900 mb-2 text-center">
            {currentItem.title}
          </h4>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {spotlightItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#11A944] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSpotlightCarousel;
