"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoModal from "../../components/DemoModal";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Lightbulb,
  Target,
  Globe,
  Zap,
} from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Delhi, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "We're looking for a passionate full-stack developer to join our engineering team and help build scalable WhatsApp Business solutions.",
    requirements: [
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Knowledge of microservices architecture",
      "Strong problem-solving skills",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Flexible working hours",
      "Professional development budget",
    ],
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Delhi, India",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "Lead product strategy and roadmap for our WhatsApp Business API platform, working closely with engineering and design teams.",
    requirements: [
      "Experience in B2B SaaS products",
      "Strong analytical and communication skills",
      "Background in API or messaging platforms",
      "MBA or equivalent experience preferred",
    ],
    benefits: [
      "Equity participation",
      "Annual performance bonus",
      "Learning and development opportunities",
      "Work from home flexibility",
    ],
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Help our clients maximize the value of our WhatsApp Business solutions and ensure their success.",
    requirements: [
      "Experience in customer success or account management",
      "Strong communication and relationship-building skills",
      "Technical aptitude for SaaS products",
      "Customer-centric mindset",
    ],
    benefits: [
      "Performance-based incentives",
      "Career growth opportunities",
      "Client interaction experience",
      "Team collaboration environment",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Create intuitive and engaging user experiences for our WhatsApp Business platform and client-facing applications.",
    requirements: [
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Experience with design systems",
      "Understanding of user research methods",
      "Portfolio demonstrating B2B SaaS design experience",
    ],
    benefits: [
      "Creative freedom and ownership",
      "Latest design tools and software",
      "Collaboration with cross-functional teams",
      "Design conference attendance",
    ],
  },
];

const companyValues = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Passion",
    description:
      "We're passionate about solving real business problems with innovative technology solutions.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Innovation",
    description:
      "We encourage creative thinking and embrace new ideas to stay ahead of the curve.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code quality to customer service.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-500" />,
    title: "Impact",
    description:
      "We're building solutions that make a real difference in how businesses communicate.",
  },
];

const perks = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "Flexible working hours and remote work",
  "Professional development budget",
  "Latest tech equipment and tools",
  "Team building activities and events",
  "Unlimited vacation policy",
  "Learning and conference opportunities",
];

export default function Careers() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Join Our <span className="text-[#11A944]">Team</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Be part of a dynamic team that&#39;s revolutionizing business
                communication with cutting-edge WhatsApp Business solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#jobs"
                  className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/careers/apply"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Learn About Our Culture
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work at XploreByte?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We&#39;re not just building software—we&#39;re creating the future of
                business communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks & Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team members with comprehensive
                benefits and perks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-[#11A944] flex-shrink-0" />
                  <span className="text-gray-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="jobs" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for
                you.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map(job => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() =>
                          setSelectedJob(selectedJob === job.id ? null : job.id)
                        }
                        className="inline-flex items-center px-6 py-3 border-2 border-[#11A944] text-[#11A944] font-semibold rounded-lg hover:bg-[#11A944] hover:text-white transition-colors"
                      >
                        {selectedJob === job.id
                          ? "Hide Details"
                          : "View Details"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <a
                        href={`/careers/apply?job=${job.id}`}
                        className="inline-flex items-center px-6 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{job.description}</p>

                  {selectedJob === job.id && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 pt-6 border-t border-gray-200">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#11A944] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section
          id="culture"
          className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We foster a collaborative, innovative, and inclusive environment
                where everyone can thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Fast-Paced Growth
                </h3>
                <p className="text-white/80">
                  Join a rapidly growing company where your contributions make a
                  real impact.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0296FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Collaborative Team
                </h3>
                <p className="text-white/80">
                  Work with talented, passionate people who support and
                  challenge each other.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Innovation First
                </h3>
                <p className="text-white/80">
                  We encourage experimentation and reward creative
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don&#39;t see a position that matches your skills? We&#39;re always
              looking for talented individuals. Send us your resume and let&#39;s
              start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers/apply"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:careers@xplorebyte.com"
                className="inline-flex items-center px-8 py-3 border-2 border-[#11A944] text-[#11A944] font-semibold rounded-lg hover:bg-[#11A944] hover:text-white transition-colors"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
