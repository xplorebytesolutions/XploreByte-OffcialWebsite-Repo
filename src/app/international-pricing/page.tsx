"use client";

import DemoModal from "../../components/DemoModal";
import SalesModal from "../../components/SalesModal";
import {
  Search,
  ArrowUpDown,
  Filter,
  Download,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { useState, useMemo } from "react";

interface PricingData {
  market: string;
  currency: string;
  marketing: string;
  utility: string;
  authentication: string;
  authenticationInternational: string;
  service: string;
}

export default function InternationalPricing() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof PricingData>("market");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterRegion, setFilterRegion] = useState("all");

  // Pricing data from the CSV
  const pricingData: PricingData[] = [
    {
      market: "Argentina",
      currency: "₹",
      marketing: "4.5293",
      utility: "1.9062",
      authentication: "1.9062",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Brazil",
      currency: "₹",
      marketing: "4.5808",
      utility: "0.4984",
      authentication: "0.4984",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Chile",
      currency: "₹",
      marketing: "6.5135",
      utility: "1.4654",
      authentication: "1.4654",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Colombia",
      currency: "₹",
      marketing: "0.9161",
      utility: "0.0588",
      authentication: "0.0588",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Egypt",
      currency: "₹",
      marketing: "7.8651",
      utility: "0.2639",
      authentication: "0.2639",
      authenticationInternational: "4.7668",
      service: "n/a",
    },
    {
      market: "France",
      currency: "₹",
      marketing: "10.4984",
      utility: "2.1994",
      authentication: "2.1994",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Germany",
      currency: "₹",
      marketing: "10.0073",
      utility: "4.0322",
      authentication: "4.0322",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "India",
      currency: "₹",
      marketing: "0.7846",
      utility: "0.1150",
      authentication: "0.1150",
      authenticationInternational: "2.3000",
      service: "n/a",
    },
    {
      market: "Indonesia",
      currency: "₹",
      marketing: "3.0111",
      utility: "1.8316",
      authentication: "1.8316",
      authenticationInternational: "9.9638",
      service: "n/a",
    },
    {
      market: "Israel",
      currency: "₹",
      marketing: "2.5871",
      utility: "0.3885",
      authentication: "0.3885",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Italy",
      currency: "₹",
      marketing: "5.0614",
      utility: "2.1974",
      authentication: "2.1974",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Malaysia",
      currency: "₹",
      marketing: "6.3037",
      utility: "1.0262",
      authentication: "1.0262",
      authenticationInternational: "3.0639",
      service: "n/a",
    },
    {
      market: "Mexico",
      currency: "₹",
      marketing: "2.2357",
      utility: "0.6226",
      authentication: "0.6226",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Netherlands",
      currency: "₹",
      marketing: "11.7078",
      utility: "3.6656",
      authentication: "3.6656",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Nigeria",
      currency: "₹",
      marketing: "3.7851",
      utility: "0.4915",
      authentication: "0.4915",
      authenticationInternational: "5.5035",
      service: "n/a",
    },
    {
      market: "Pakistan",
      currency: "₹",
      marketing: "3.4683",
      utility: "0.3960",
      authentication: "0.3960",
      authenticationInternational: "5.5035",
      service: "n/a",
    },
    {
      market: "Peru",
      currency: "₹",
      marketing: "5.1536",
      utility: "1.4662",
      authentication: "1.4662",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Russia",
      currency: "₹",
      marketing: "5.8767",
      utility: "2.9311",
      authentication: "2.9311",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Saudi Arabia",
      currency: "₹",
      marketing: "3.3292",
      utility: "0.7834",
      authentication: "0.7834",
      authenticationInternational: "4.3871",
      service: "n/a",
    },
    {
      market: "South Africa",
      currency: "₹",
      marketing: "2.7821",
      utility: "0.5579",
      authentication: "0.5579",
      authenticationInternational: "1.4681",
      service: "n/a",
    },
    {
      market: "Spain",
      currency: "₹",
      marketing: "4.5044",
      utility: "1.4648",
      authentication: "1.4648",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Turkey",
      currency: "₹",
      marketing: "0.7989",
      utility: "0.3884",
      authentication: "0.3884",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "United Arab Emirates",
      currency: "₹",
      marketing: "3.6613",
      utility: "1.1509",
      authentication: "1.1509",
      authenticationInternational: "3.7342",
      service: "n/a",
    },
    {
      market: "United Kingdom",
      currency: "₹",
      marketing: "3.8747",
      utility: "1.6122",
      authentication: "1.6122",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "North America",
      currency: "₹",
      marketing: "1.8313",
      utility: "0.2930",
      authentication: "0.2930",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Rest of Africa",
      currency: "₹",
      marketing: "1.6497",
      utility: "0.2930",
      authentication: "0.2930",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Rest of Asia Pacific",
      currency: "₹",
      marketing: "5.3664",
      utility: "0.8282",
      authentication: "0.8282",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Rest of Central & Eastern Europe",
      currency: "₹",
      marketing: "6.2997",
      utility: "1.5496",
      authentication: "1.5496",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Rest of Latin America",
      currency: "₹",
      marketing: "5.4207",
      utility: "0.8278",
      authentication: "0.8278",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Rest of Middle East",
      currency: "₹",
      marketing: "2.4993",
      utility: "0.6665",
      authentication: "0.6665",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Rest of Western Europe",
      currency: "₹",
      marketing: "4.3378",
      utility: "1.2516",
      authentication: "1.2516",
      authenticationInternational: "n/a",
      service: "n/a",
    },
    {
      market: "Other",
      currency: "₹",
      marketing: "4.4248",
      utility: "0.5641",
      authentication: "0.5641",
      authenticationInternational: "n/a",
      service: "n/a",
    },
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "asia", label: "Asia Pacific" },
    { value: "europe", label: "Europe" },
    { value: "americas", label: "Americas" },
    { value: "africa", label: "Africa" },
    { value: "middle-east", label: "Middle East" },
    { value: "rest", label: "Rest of World" },
  ];

  const filteredAndSortedData = useMemo(() => {
    const filtered = pricingData.filter(item => {
      const matchesSearch = item.market
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      let matchesRegion = true;
      if (filterRegion !== "all") {
        const market = item.market.toLowerCase();
        switch (filterRegion) {
          case "asia":
            matchesRegion =
              market.includes("asia") ||
              market.includes("indonesia") ||
              market.includes("malaysia") ||
              market.includes("india");
            break;
          case "europe":
            matchesRegion =
              market.includes("europe") ||
              market.includes("france") ||
              market.includes("germany") ||
              market.includes("italy") ||
              market.includes("spain") ||
              market.includes("netherlands") ||
              market.includes("united kingdom");
            break;
          case "americas":
            matchesRegion =
              market.includes("america") ||
              market.includes("argentina") ||
              market.includes("brazil") ||
              market.includes("chile") ||
              market.includes("colombia") ||
              market.includes("mexico") ||
              market.includes("peru");
            break;
          case "africa":
            matchesRegion =
              market.includes("africa") ||
              market.includes("egypt") ||
              market.includes("nigeria") ||
              market.includes("south africa");
            break;
          case "middle-east":
            matchesRegion =
              market.includes("middle") ||
              market.includes("saudi") ||
              market.includes("uae") ||
              market.includes("israel") ||
              market.includes("turkey");
            break;
          case "rest":
            matchesRegion = market.includes("rest") || market.includes("other");
            break;
        }
      }

      return matchesSearch && matchesRegion;
    });

    return filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue === "n/a" && bValue === "n/a") return 0;
      if (aValue === "n/a") return 1;
      if (bValue === "n/a") return -1;

      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);

      if (isNaN(aNum) || isNaN(bNum)) {
        return (
          aValue.localeCompare(bValue) * (sortDirection === "asc" ? 1 : -1)
        );
      }

      return (aNum - bNum) * (sortDirection === "asc" ? 1 : -1);
    });
  }, [searchTerm, sortField, sortDirection, filterRegion, pricingData]);

  const handleSort = (field: keyof PricingData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      "Market,Currency,Marketing,Utility,Authentication,Authentication-International,Service",
      ...filteredAndSortedData.map(
        item =>
          `${item.market},${item.currency},${item.marketing},${item.utility},${item.authentication},${item.authenticationInternational},${item.service}`
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "whatsapp-pricing-international.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                International <span className="text-[#11A944]">Pricing</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Cost per message in INR on the WhatsApp Business Platform,
                effective October 1, 2025
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by country or region..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                />
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={filterRegion}
                  onChange={e => setFilterRegion(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                >
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Export Button */}
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-[#11A944] text-white rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>
        </section>

        {/* Data Table */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort("market")}
                      >
                        <div className="flex items-center gap-2">
                          Market
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort("marketing")}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Marketing (₹)
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort("utility")}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Utility (₹)
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort("authentication")}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Authentication (₹)
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          handleSort("authenticationInternational")
                        }
                      >
                        <div className="flex items-center justify-center gap-2">
                          Auth-International (₹)
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredAndSortedData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-gray-400" />
                            {item.market}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">
                          {item.marketing}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">
                          {item.utility}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">
                          {item.authentication}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">
                          {item.authenticationInternational}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
              <div>
                Showing {filteredAndSortedData.length} of {pricingData.length}{" "}
                countries/regions
              </div>
              <div>Data effective from October 1, 2025</div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important Information
              </h2>
              <p className="text-lg text-gray-600">
                Understanding WhatsApp Business Platform pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Message Types
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <strong>Marketing:</strong> Promotional messages sent to
                    customers
                  </li>
                  <li>
                    <strong>Utility:</strong> Transactional messages like
                    delivery updates
                  </li>
                  <li>
                    <strong>Authentication:</strong> Verification messages like
                    OTP
                  </li>
                  <li>
                    <strong>Service:</strong> User-initiated support messages
                    (Free)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Regional Coverage
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Individual countries with specific rates</li>
                  <li>• Regional groupings for broader coverage</li>
                  <li>
                    • &quot;Rest of&quot; categories for comprehensive coverage
                  </li>
                  <li>• International authentication rates where applicable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Choose the perfect plan for your international WhatsApp Business
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                View All Plans
              </a>
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
