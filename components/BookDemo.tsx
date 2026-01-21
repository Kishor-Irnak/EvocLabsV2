import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Testimonials from "./Testimonials";
import Services from "./Services";

interface BookDemoProps {
  onBack: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    category: "",
    revenueRange: "",
    agreedToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      setError("Please agree to T&C and Privacy Policy");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Save to Firebase Firestore
      const formSubmissionData = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        category: formData.category,
        revenueRange: formData.revenueRange,
        formType: "book-demo",
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "formSubmissions"), formSubmissionData);

      // Track Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Book Demo Form",
          content_category: formData.category,
          value: 0,
          currency: "INR",
        });
      }

      // Also send to existing API endpoint
      const apiBase =
        (import.meta as any)?.env?.VITE_API_BASE_URL ||
        (typeof window !== "undefined" &&
        window.location.hostname !== "localhost"
          ? "https://evoc-labz-backend.onrender.com"
          : "http://localhost:5000");
      const apiUrl = `${apiBase.replace(/\/+$/, "")}/api/book-demo`;

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formSubmissionData),
        });

        if (!response.ok) {
          const result = await response.json();
          console.warn("API submission failed:", result.error);
        }
      } catch (apiErr) {
        console.warn("API submission error:", apiErr);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again.");
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center min-h-[calc(100vh-180px)]">
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            {!isSubmitted ? (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-[1.1]">
                    Powering Online <br />
                    Growth for D2C <br />
                    Brands
                  </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main flex items-center gap-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-main focus:border-text-main focus:ring-0 outline-none transition-all placeholder:text-text-muted/60"
                      placeholder="Select Your Name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main flex items-center gap-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <div className="bg-surface border border-border rounded-lg px-3 py-3 text-sm text-text-main font-medium min-w-[60px] flex items-center justify-center">
                        +91
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-main focus:border-text-main focus:ring-0 outline-none transition-all placeholder:text-text-muted/60"
                        placeholder="Enter 10 Digit Phone Number"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main flex items-center gap-1">
                      Category of products you sell?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-main focus:border-text-main focus:ring-0 outline-none transition-all appearance-none cursor-pointer placeholder:text-text-muted/60"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="fashion">Fashion & Apparel</option>
                        <option value="beauty">Beauty & Personal Care</option>
                        <option value="electronics">
                          Electronics & Gadgets
                        </option>
                        <option value="home">Home & Living</option>
                        <option value="food">Food & Beverage</option>
                        <option value="wholesaler">Wholesaler</option>
                        <option value="dropshipping">Dropshipping</option>
                        <option value="other">Other</option>
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
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Range */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main flex items-center gap-1">
                      Monthly revenue range{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="revenueRange"
                        value={formData.revenueRange}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-main focus:border-text-main focus:ring-0 outline-none transition-all appearance-none cursor-pointer placeholder:text-text-muted/60"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="20000-30000">₹20,000 – ₹30,000</option>
                        <option value="30000-50000">₹30,000 – ₹50,000</option>
                        <option value="50000-70000">₹50,000 – ₹70,000</option>
                        <option value="70000-100000">
                          ₹70,000 – ₹1,00,000
                        </option>
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
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleInputChange}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-border bg-surface checked:bg-text-main checked:border-text-main transition-all"
                      />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-background opacity-0 peer-checked:opacity-100">
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <label
                      className="text-sm text-text-muted cursor-pointer select-none"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          agreedToTerms: !prev.agreedToTerms,
                        }))
                      }
                    >
                      I've read the T&C & Privacy Policy
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white hover:bg-white/90 text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99] text-base mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Request a Call"}
                    <ArrowRight className="w-5 h-5" />
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
                <h3 className="text-3xl font-bold text-text-main mb-3">
                  Request Received!
                </h3>
                <p className="text-text-muted max-w-[280px] mx-auto mb-8 text-lg">
                  We'll call you shortly to discuss your growth.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-base font-medium text-white hover:text-white/80 underline decoration-2 underline-offset-4"
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
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl h-[640px]">
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
                    className="absolute bottom-10 left-10 right-10"
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
                    <p className="text-white/80 text-lg">
                      {carouselImages[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-10 right-10 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      index === currentSlide
                        ? "bg-white w-8"
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
      <div className="mt-20 lg:mt-32">
        <Testimonials />
      </div>

      {/* Client Reviews */}
      <div className="mt-16">
        <Services />
      </div>
    </div>
  );
};

export default BookDemo;
