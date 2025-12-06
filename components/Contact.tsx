import React, { useState } from "react";
import { Mail, Clock, Video, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-950 to-[#020617] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
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
              Ready to ignite <br /> your growth?
            </h3>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
              Whether you're ready to scale aggressively or just need a second
              opinion on your current ad stack — we're here to help.
            </p>

            {/* Strategy Card */}
            <div className="glass-card p-8 rounded-2xl border border-brand-500/10 bg-slate-900/40">
              <h4 className="text-xl font-bold text-white mb-2">
                Book a Strategy Call
              </h4>
              <p className="text-slate-400 mb-6 text-sm">
                Directly schedule a 30-min discovery session with our
                strategist.
              </p>

              <div className="flex flex-col gap-3 mb-8">
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
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-500/10"
              >
                Schedule Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@evoclabs.com</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-slate-900/20">
              {!isSubmitted ? (
                <form
                  action="https://formsubmit.co/kishorirnak4u@gmail.com"
                  method="POST"
                  className="space-y-6"
                  onSubmit={() => setIsSubmitted(true)}
                >
                  {/* FormSubmit Settings */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Request - EvocLabs"
                  />

                  {/* Redirect after submit */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://evoclabs.com/success"
                  />

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-brand-500"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-brand-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Website + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-brand-500"
                        placeholder="https://"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Monthly Ad Budget
                      </label>
                      <select
                        name="budget"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-brand-500"
                      >
                        <option value="">Select Range</option>
                        <option value="<5k">Less than $5k</option>
                        <option value="5k-20k">$5k – $20k</option>
                        <option value="20k-50k">$20k – $50k</option>
                        <option value="50k+">$50k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-brand-500 resize-none"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-white text-slate-950 font-bold py-3.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    Send Request <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-4">
                    No commitment required — we respond within 24 hours.
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
                    Thanks! Your details have been successfully submitted.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm text-brand-400 underline"
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
