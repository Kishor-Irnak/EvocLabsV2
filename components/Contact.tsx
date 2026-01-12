import React, { useState } from "react";
import {
  Mail,
  Clock,
  Video,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const apiBase =
        (import.meta as any)?.env?.VITE_API_BASE_URL ||
        (typeof window !== 'undefined' && window.location.hostname !== 'localhost'
          ? 'https://evoc-labz-backend.onrender.com'
          : 'http://localhost:5000');
      const apiUrl = `${apiBase.replace(/\/+$/, '')}/api/book-demo`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          workEmail: formData.email,
          website: formData.website,
          budget: formData.budget,
          goals: formData.message
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const result = await response.json();
        setError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      // Added min-h-screen and flex items-center to center content vertically on desktop
      className="relative min-h-screen flex items-center py-12 lg:py-0 bg-background overflow-hidden"
    >
      {/* Optional: Subtle Background Gradient Blob for Premium feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                Get Started
              </span>
            </div>

            <div className="mb-6">
              <BlurText
                text="Ready to ignite your growth?"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-[1.1]"
              />
            </div>

            <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-md">
              Whether you're ready to scale aggressively or just need a second
              opinion on your current ad stack — we're here to help.
            </p>

            {/* Premium Strategy Card */}
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-text-main">
                    Book a Strategy Call
                  </h4>
                  <p className="text-text-muted text-sm mt-1">
                    30-min discovery session with a strategist.
                  </p>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-text-main text-sm bg-background px-3 py-1.5 rounded-md border border-border">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-text-main text-sm bg-background px-3 py-1.5 rounded-md border border-border">
                  <Video className="w-4 h-4 text-primary" />
                  <span>Google Meet</span>
                </div>
              </div>

              <a
                href="https://calendly.com/connect-sociodesk/evoc-labz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-text-main hover:bg-text-main/90 text-background font-medium py-3 rounded-xl transition-all active:scale-[0.98]"
              >
                Schedule Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-text-muted text-sm font-medium">
              <Mail className="w-4 h-4" />
              <span>hello@evoclabs.com</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="p-6 md:p-8 lg:p-10 rounded-3xl border border-border bg-surface shadow-2xl shadow-black/5">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/30 focus:scale-[1.01]"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/30 focus:scale-[1.01]"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Website & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/30 focus:scale-[1.01]"
                        placeholder="https://..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Budget
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="text-text-muted">
                            Select Range
                          </option>
                          <option value="<1L">Less than ₹1L</option>
                          <option value="1L-3L">₹1L – ₹3L</option>
                          <option value="3L-5L">₹3L – ₹5L</option>
                          <option value="5L+">₹5L+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                      Goals
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3} // Reduced rows slightly to fit desktop better
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-text-muted/30 focus:scale-[1.01]"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full bg-text-main hover:bg-text-secondary text-border font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Request'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-text-muted/70">
                    We usually respond within 24 hours.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[480px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-text-main mb-2">
                    Request Received!
                  </h3>

                  <p className="text-text-muted max-w-[250px] mx-auto mb-8">
                    Thanks! We've received your details and will be in touch
                    shortly.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-medium text-primary hover:text-primary-hover underline decoration-2 underline-offset-4"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
