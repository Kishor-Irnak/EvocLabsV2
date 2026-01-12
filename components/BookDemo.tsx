import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Mail, Globe, DollarSign, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "./Testimonials";
import Services from "./Services";

interface BookDemoProps {
  onBack: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    website: '',
    budget: '',
    goals: ''
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
      const apiUrl = typeof window !== 'undefined' && window.location.hostname !== 'localhost' 
        ? 'https://evoc-labz-backend.onrender.com/api/book-demo' // Your actual Render URL
        : '/api/book-demo';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          workEmail: formData.workEmail,
          website: formData.website,
          budget: formData.budget,
          goals: formData.goals
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

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      title: "Grow Your Business",
      subtitle: "Data-driven strategies designed for scale.",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      title: "Expert Marketing",
      subtitle: "Performance-driven campaigns that convert.",
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      title: "Scale with Confidence",
      subtitle: "End-to-end solutions for D2C success.",
    },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background animate-fade-in min-h-screen pt-20 md:pt-24 pb-10">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-subtle-grid bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[calc(100vh-180px)]">
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            {!isSubmitted ? (
              <div className="space-y-3.5">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main tracking-tight leading-[1.1]">
                    Ready to ignite your growth?
                  </h1>
                  <p className="text-text-muted mt-3 max-w-lg">
                    Whether you're ready to scale aggressively or just need a second opinion on your current ad stack — we're here to help.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/40"
                        placeholder="John Doe"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main flex items-center gap-2">
                      <span className="text-red-500">*</span>
                      Work Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/40"
                        placeholder="john@company.com"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main flex items-center gap-2">
                      <span className="text-red-500">*</span>
                      Website
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/40"
                        placeholder="https://..."
                      />
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main flex items-center gap-2">
                      <span className="text-red-500">*</span>
                      Budget
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg pl-10 pr-8 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
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

                  {/* Goals */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main flex items-center gap-2">
                      <span className="text-red-500">*</span>
                      Goals
                    </label>
                    <div className="relative">
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-surface border border-border rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/40 resize-none"
                        placeholder="Tell us about your goals..."
                      />
                      <Target className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                    </div>
                  </div>



                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-text-main hover:bg-text-secondary text-background font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Request'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <p className="text-xs text-text-muted text-center pt-2">
                    We usually respond within 24 hours.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-3">
                  Request Received!
                </h3>
                <p className="text-text-muted max-w-[280px] mx-auto mb-8">
                  We'll be in touch shortly to schedule your demo.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-medium text-primary hover:text-primary-hover underline decoration-2 underline-offset-4"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl h-[580px]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselImages[currentSlide].url}
                    alt={carouselImages[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

                  {/* Overlay Text */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {carouselImages[currentSlide].title}
                    </h3>
                    <p className="text-white/80 text-base">
                      {carouselImages[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-8 right-8 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      index === currentSlide
                        ? "bg-primary w-6"
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Official Business Partners */}
      <div className="mt-16 lg:mt-24">
        <Testimonials />
      </div>

      {/* Client Reviews */}
      <div className="mt-12">
        <Services />
      </div>
    </div>
  );
};

export default BookDemo;
