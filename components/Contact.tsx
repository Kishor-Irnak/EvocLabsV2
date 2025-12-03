import React, { useState } from "react";
import {
  Mail,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-950 to-[#020617] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Context & Direct Booking */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">
              Get Started
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Ready to ignite <br />
              your growth?
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
              Whether you're ready to scale aggressive or just need a second
              opinion on your current ad stack, we're here to help.
            </p>

            {/* Direct Booking Card */}
            <div className="glass-card p-8 rounded-2xl border border-brand-500/10 relative overflow-hidden group hover:border-brand-500/30 transition-colors bg-slate-900/40">
              {/* Subtle Background Icon */}

              <h4 className="text-xl font-bold text-white mb-2 relative z-10">
                Book a Strategy Call
              </h4>
              <p className="text-slate-400 mb-6 text-sm relative z-10">
                Directly schedule a 30-min discovery session with our
                specialized strategist.
              </p>

              <div className="flex flex-col gap-3 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <Clock className="w-4 h-4 text-brand-400" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <Video className="w-4 h-4 text-brand-400" />
                  <span>Google Meet</span>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()} // Placeholder logic
                className="inline-flex items-center justify-center w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-500/10 relative z-10"
              >
                Schedule Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@evoclabs.com</span>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-slate-900/20">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Monthly Ad Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      >
                        <option
                          value=""
                          className="bg-slate-900 text-slate-400"
                        >
                          Select Range
                        </option>
                        <option value="<1k" className="bg-slate-900 text-white">
                          &lt; $5,000
                        </option>
                        <option
                          value="1k-5k"
                          className="bg-slate-900 text-white"
                        >
                          $5,000 - $20,000
                        </option>
                        <option
                          value="5k-10k"
                          className="bg-slate-900 text-white"
                        >
                          $20,000 - $50,000
                        </option>
                        <option
                          value="10k+"
                          className="bg-slate-900 text-white"
                        >
                          $50,000+
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600 resize-none"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-slate-950 font-bold py-3.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Request <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    No commitment required. We usually respond within 24 hours.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-brand-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Request Received!
                  </h3>
                  <p className="text-slate-400 max-w-xs">
                    Thanks {formState.name.split(" ")[0]}. We've received your
                    details and will be in touch shortly to schedule your call.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm text-brand-400 hover:text-brand-300 underline"
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
