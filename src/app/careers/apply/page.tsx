"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, Upload, FileText, User, Briefcase, Calendar, CheckCircle, AlertCircle, X } from "lucide-react";

const jobPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Delhi, India",
    type: "Full-time",
    experience: "3-5 years",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Delhi, India",
    type: "Full-time",
    experience: "4-6 years",
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-4 years",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-4 years",
  },
];

export default function JobApplication() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get("job");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    currentCompany: "",
    currentPosition: "",
    experience: "",
    expectedSalary: "",
    noticePeriod: "",
    coverLetter: "",
    linkedinProfile: "",
    portfolio: "",
    jobId: jobId || "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  const selectedJob =
    jobPositions.find(job => job.id.toString() === jobId) || jobPositions[0];

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          cvFile: "Please upload a PDF or Word document",
        }));
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          cvFile: "File size must be less than 5MB",
        }));
        return;
      }

      setCvFile(file);
      setErrors(prev => ({
        ...prev,
        cvFile: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.jobId) newErrors.jobId = "Please select a position";
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    if (!cvFile) newErrors.cvFile = "CV/Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Application submitted:", { formData, cvFile });

      setSubmitStatus("success");

      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push("/careers/apply/success");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Application submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeFile = () => {
    setCvFile(null);
    setErrors(prev => ({
      ...prev,
      cvFile: "",
    }));
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </button>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Apply for {selectedJob.title}
                </h1>
                <p className="text-gray-600 mt-2">
                  {selectedJob.department} • {selectedJob.location} •{" "}
                  {selectedJob.type}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Experience Required</div>
                <div className="font-semibold text-gray-900">
                  {selectedJob.experience}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <h3 className="text-green-800 font-semibold">
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for your interest. We'll review your application and
                  get back to you soon.
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
              <div>
                <h3 className="text-red-800 font-semibold">
                  Submission Failed
                </h3>
                <p className="text-red-700">
                  There was an error submitting your application. Please try
                  again.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Job Selection */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-[#11A944]" />
                Position Applied For
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Position *
                </label>
                <select
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                    errors.jobId ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Choose a position</option>
                  {jobPositions.map(job => (
                    <option key={job.id} value={job.id}>
                      {job.title} - {job.department} ({job.experience})
                    </option>
                  ))}
                </select>
                {errors.jobId && (
                  <p className="text-red-500 text-sm mt-1">{errors.jobId}</p>
                )}
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-[#11A944]" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                      errors.location ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your current location"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-[#11A944]" />
                Professional Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Company
                  </label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="Enter your current company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Position
                  </label>
                  <input
                    type="text"
                    name="currentPosition"
                    value={formData.currentPosition}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="Enter your current position"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent ${
                      errors.experience ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.experience}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary (INR)
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="e.g., 8,00,000 - 12,00,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Period
                  </label>
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                  >
                    <option value="">Select notice period</option>
                    <option value="immediate">Immediate</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CV Upload */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-[#11A944]" />
                Resume/CV Upload
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume/CV *
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="cv-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#11A944] hover:text-[#0d8a3a] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#11A944]"
                        >
                          <span>Upload a file</span>
                          <input
                            id="cv-upload"
                            name="cv-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                  </div>

                  {cvFile && (
                    <div className="mt-4 flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm text-green-700">
                          {cvFile.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {errors.cvFile && (
                    <p className="text-red-500 text-sm mt-1">{errors.cvFile}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#11A944]" />
                Additional Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="Tell us why you&#39;re interested in this position and what makes you a great fit..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#11A944] text-white rounded-lg hover:bg-[#0d8a3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
