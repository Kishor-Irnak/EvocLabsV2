import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "./Testimonials";
import Services from "./Services";

interface BookDemoProps {
  onBack: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
                    Powering Online Growth for D2C Brands
                  </h1>
                </div>

                <form
                  action="https://formsubmit.co/kishorirnak4u@gmail.com"
                  method="POST"
                  className="space-y-3"
                  onSubmit={() => setIsSubmitted(true)}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Demo Request - EvocLabs"
                  />

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/40"
                      placeholder="Select Your Name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2.5">
                      <div className="w-14 bg-surface border border-border rounded-lg flex items-center justify-center text-text-secondary text-sm font-medium">
                        +91
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="flex-1 bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/40"
                        placeholder="Enter 10 Digit Phone Number"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-text-main">
                      Category of products you sell?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        required
                        className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="D2c brand">D2C Brand</option>
                        <option value="Dropshipper">Dropshipper</option>
                        <option value="Wholesaler / supplier">
                          Wholesaler / Supplier
                        </option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
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

                  {/* Terms */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-5 h-5 rounded-md border-2 border-border bg-surface text-primary focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer transition-all duration-200 hover:border-primary/50"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-text-muted cursor-pointer leading-relaxed hover:text-text-secondary transition-colors"
                    >
                      I've read the T&C & Privacy Policy
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-text-main hover:bg-text-secondary text-background font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] text-sm mt-2"
                  >
                    Request a Call
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
