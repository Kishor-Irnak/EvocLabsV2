import React, { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

interface CareersProps {
  onBack: () => void;
}

const Careers: React.FC<CareersProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Job Data
  const jobs = [
    {
      id: "299015",
      title: "Content Creator",
      department: "Creative & Content",
      type: "In-Office",
      location: "Bengaluru, Karnataka, India",
      experience: "1-3 years",
    },
    // Adding a dummy second one to make it look populated like the image implies a list
    {
      id: "298865",
      title: "Performance Marketer",
      department: "Growth & Marketing",
      type: "In-Office",
      location: "Bengaluru, Karnataka, India",
      experience: "2-4 years",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Home</span>
        </button>

        {/* Header Section */}
        <div className="mb-16">
          <BlurText
            text="Careers at Evoc Labs"
            className="text-4xl md:text-5xl font-bold text-text-main mb-6"
          />
          <p className="text-text-muted max-w-3xl text-lg leading-relaxed">
            Evoc Labs is democratising D2C for every merchant who sells online.
            We help brands scale with clarity, not guesswork. Join us in
            building data-driven performance systems.
          </p>

          <div className="mt-8 flex flex-col gap-2 text-text-secondary text-sm">
            <p className="font-semibold text-text-main">Contact info:</p>
            <a
              href="mailto:careers@evoclabs.com"
              className="hover:text-primary transition-colors"
            >
              careers@evoclabs.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-text-main mb-6">
            Open Positions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-surface border border-border rounded-lg py-3 pl-10 pr-4 text-text-main focus:outline-none focus:border-primary/50 transition-colors placeholder:text-text-muted/50"
              />
            </div>

            {/* Department Dropdown (Visual only) */}
            <div className="md:col-span-3 relative">
              <div className="w-full bg-surface border border-border rounded-lg py-3 px-4 text-text-muted flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
                <span>Select department</span>
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Location Dropdown (Visual only) */}
            <div className="md:col-span-3 relative">
              <div className="w-full bg-surface border border-border rounded-lg py-3 px-4 text-text-muted flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
                <span>Select location</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/30 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-bold text-text-main">
                    {job.title}
                  </h4>
                  <span className="text-xs bg-white/5 text-text-secondary px-2 py-1 rounded border border-white/5">
                    Job ID: {job.id}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-text-secondary" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-text-secondary" />
                    <span>{job.type}</span>
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
                  <span>{job.location}</span>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-text-secondary" />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>

              <div>
                <button className="w-full md:w-auto px-8 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-blue-500/20">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
