import React, { useState } from "react";
import { Mail, Clock, Video, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-24 bg-background relative border-t border-border"
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
            <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-3">
              Get Started
            </h2>

            <div className="mb-6">
              <BlurText
                text="Ready to ignite your growth?"
                className="text-4xl md:text-6xl font-semibold text-text-main tracking-tight"
              />
            </div>

            <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-md">
              Whether you're ready to scale aggressively or just need a second
              opinion on your current ad stack — we're here to help.
            </p>

            {/* Strategy Card */}
            <div className="p-8 rounded-xl border border-border bg-surface">
              <h4 className="text-xl font-semibold text-text-main mb-2">
                Book a Strategy Call
              </h4>
              <p className="text-text-muted mb-6 text-sm">
                Directly schedule a 30-min discovery session with our
                strategist.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3 text-text-main text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-3 text-text-main text-sm">
                  <Video className="w-4 h-4 text-primary" />
                  <span>Google Meet</span>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-lg transition-all"
              >
                Schedule Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-text-muted text-sm">
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
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-surface">
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
                  <input
                    type="hidden"
                    name="_next"
                    value="https://evoclabs.com/success"
                  />

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Website + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50"
                        placeholder="https://"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-main mb-2">
                        Monthly Ad Budget
                      </label>
                      <select
                        name="budget"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                      >
                        <option value="" className="bg-surface">Select Range</option>
                        <option value="<5k" className="bg-surface">Less than $5k</option>
                        <option value="5k-20k" className="bg-surface">$5k – $20k</option>
                        <option value="20k-50k" className="bg-surface">$20k – $50k</option>
                        <option value="50k+" className="bg-surface">$50k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-text-muted/50"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-text-main text-background font-semibold py-3.5 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Request <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-text-muted mt-4">
                    No commitment required — we respond within 24 hours.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold text-text-main mb-2">
                    Request Received!
                  </h3>

                  <p className="text-text-muted max-w-xs">
                    Thanks! Your details have been successfully submitted.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm text-primary hover:text-primary-hover underline"
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
