"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  Search,
  Filter,
  Download,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  User,
  Briefcase,
  X,
} from "lucide-react";

// Mock data - in real app, this would come from your backend
const mockApplications = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Delhi, India",
    currentCompany: "Tech Corp",
    currentPosition: "Senior Developer",
    experience: "5-7 years",
    expectedSalary: "12,00,000 - 15,00,000",
    noticePeriod: "2 months",
    jobId: 1,
    jobTitle: "Senior Full Stack Developer",
    appliedDate: "2024-01-15",
    status: "pending",
    cvFileName: "john_doe_resume.pdf",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "+91 98765 43211",
    location: "Mumbai, India",
    currentCompany: "Design Studio",
    currentPosition: "UI/UX Designer",
    experience: "3-5 years",
    expectedSalary: "8,00,000 - 10,00,000",
    noticePeriod: "1 month",
    jobId: 4,
    jobTitle: "UI/UX Designer",
    appliedDate: "2024-01-14",
    status: "reviewed",
    cvFileName: "jane_smith_portfolio.pdf",
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    email: "mike.johnson@example.com",
    phone: "+91 98765 43212",
    location: "Bangalore, India",
    currentCompany: "Product Inc",
    currentPosition: "Product Manager",
    experience: "4-6 years",
    expectedSalary: "15,00,000 - 18,00,000",
    noticePeriod: "1 month",
    jobId: 2,
    jobTitle: "Product Manager",
    appliedDate: "2024-01-13",
    status: "interviewed",
    cvFileName: "mike_johnson_cv.pdf",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewed: "bg-blue-100 text-blue-800",
  interviewed: "bg-purple-100 text-purple-800",
  rejected: "bg-red-100 text-red-800",
  hired: "bg-green-100 text-green-800",
};

export default function ApplicationsAdmin() {
  const [applications, setApplications] = useState(mockApplications);
  const [filteredApplications, setFilteredApplications] =
    useState(mockApplications);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [jobFilter, setJobFilter] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState(null);

  const jobTitles = [...new Set(applications.map(app => app.jobTitle))];

  useEffect(() => {
    let filtered = applications;

    if (searchTerm) {
      filtered = filtered.filter(
        app =>
          app.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(app => app.status === statusFilter);
    }

    if (jobFilter !== "all") {
      filtered = filtered.filter(app => app.jobTitle === jobFilter);
    }

    setFilteredApplications(filtered);
  }, [searchTerm, statusFilter, jobFilter, applications]);

  const updateApplicationStatus = (id: number, newStatus: string) => {
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Job Applications
            </h1>
            <p className="text-gray-600">
              Manage and review job applications from candidates
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search applications..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="interviewed">Interviewed</option>
                  <option value="rejected">Rejected</option>
                  <option value="hired">Hired</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <select
                  value={jobFilter}
                  onChange={e => setJobFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                >
                  <option value="all">All Positions</option>
                  {jobTitles.map(title => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full px-4 py-2 bg-[#11A944] text-white rounded-lg hover:bg-[#0d8a3a] transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Applications Table */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApplications.map(application => (
                    <tr key={application.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-[#11A944] flex items-center justify-center">
                              <User className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {application.firstName} {application.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {application.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {application.jobTitle}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {application.experience}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {application.appliedDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            statusColors[application.status]
                          }`}
                        >
                          {application.status.charAt(0).toUpperCase() +
                            application.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedApplication(application)}
                            className="text-[#11A944] hover:text-[#0d8a3a]"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <select
                            value={application.status}
                            onChange={e =>
                              updateApplicationStatus(
                                application.id,
                                e.target.value
                              )
                            }
                            className="text-xs border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="interviewed">Interviewed</option>
                            <option value="rejected">Rejected</option>
                            <option value="hired">Hired</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Application Details Modal */}
          {selectedApplication && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Details
                  </h3>
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Personal Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {selectedApplication.firstName}{" "}
                          {selectedApplication.lastName}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {selectedApplication.email}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {selectedApplication.phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {selectedApplication.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Professional Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {selectedApplication.currentPosition}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {selectedApplication.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm text-gray-600">
                        Current Company: {selectedApplication.currentCompany}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm text-gray-600">
                        Expected Salary: {selectedApplication.expectedSalary}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm text-gray-600">
                        Notice Period: {selectedApplication.noticePeriod}
                      </span>
                    </div>
                  </div>

                  {/* CV Download */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Documents
                    </h4>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-gray-400 mr-2" />
                      <a
                        href="#"
                        className="text-[#11A944] hover:text-[#0d8a3a] text-sm"
                      >
                        {selectedApplication.cvFileName}
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-3 pt-4 border-t">
                    <button
                      onClick={() => setSelectedApplication(null)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 bg-[#11A944] text-white rounded-lg hover:bg-[#0d8a3a]">
                      Contact Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
