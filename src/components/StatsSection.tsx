"use client";

import { FC } from "react";

const statsData = [
  {
    label: "Active Users",
    value: "500+",
    subtitle: "Businesses",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    label: "Messages",
    value: "1M+",
    subtitle: "Monthly",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path d="M13 8H7"></path>
        <path d="M17 12H7"></path>
      </svg>
    ),
  },
  {
    label: "Response Time",
    value: "< 1s",
    subtitle: "Average",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12,6 12,12 16,14"></polyline>
      </svg>
    ),
  },
  {
    label: "Uptime",
    value: "99.9%",
    subtitle: "Reliability",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
  },
];

const StatsSection: FC = () => {
  return (
    <section className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map(({ label, value, subtitle, icon }, idx) => (
            <div
              key={label}
              className="group text-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors duration-300">
                  {icon}
                </div>
              </div>

              <div className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                {value}
              </div>

              <p className="text-sm font-semibold text-gray-700 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                {label}
              </p>

              <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
