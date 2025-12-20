import React from "react";
import { Linkedin, Quote, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import founderPfp from "../assets/founderPfp.jpg";

const Founder: React.FC = () => {
  return (
    <section
      id="founder"
      className="py-16 md:py-32 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-text-secondary text-xs font-medium uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Leadership
          </motion.div>
          <div className="flex justify-center">
            <BlurText
              text="Meet the Strategist"
              className="text-3xl md:text-5xl font-semibold text-text-main tracking-tight"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* --- Column 1: Image (Optimized for Mobile) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface group max-w-sm mx-auto lg:max-w-none">
              {/* Image Aspect Ratio: Square on Mobile, Portrait on Desktop */}
              <div className="relative aspect-square lg:aspect-[3/4] w-full bg-surfaceHighlight">
                <img
                  src={founderPfp}
                  alt="Nishant Raj"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Name Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-background/90 border border-border p-4 rounded-lg backdrop-blur-sm">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-1 font-semibold">
                  Founder & Lead Strategist
                </p>
                <p className="text-text-main font-semibold text-xl">Nishant Raj</p>
              </div>
            </div>
          </motion.div>

          {/* --- Column 2: Content --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 order-2 text-center lg:text-left"
          >
            {/* Quote */}
            <div className="relative inline-block lg:block">
              <Quote className="hidden lg:block absolute -top-4 -left-6 w-8 h-8 text-border fill-border" />
              <h3 className="text-xl md:text-3xl font-medium text-text-main italic leading-relaxed">
                "Marketing isn't about guessing; it's about aligning your
                product with a{" "}
                <span className="text-text-secondary font-semibold not-italic">
                  performance culture
                </span>
                ."
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-4 md:space-y-6 text-text-muted text-base md:text-lg leading-relaxed">
              <p>
                At Evoc Labs, we treat your budget like our own capital. There
                is no room for vanity metrics or "fluff" campaigns.
              </p>
              <p>
                With over{" "}
                <strong className="text-text-main font-medium">
                  4 years of hands-on experience
                </strong>{" "}
                managing ₹2Cr+ in ad spend, we've identified the specific
                patterns that separate scaling brands from stagnant ones. Our
                approach combines aggressive creative testing with conservative
                financial modeling.
              </p>
            </div>

            {/* Signature & Socials Block */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row gap-6 items-center lg:justify-between">
              {/* Straightened Signature (Serif Font) */}
              <div className="text-3xl md:text-4xl text-text-main font-serif italic tracking-wide">
                Nishant Raj
              </div>

              {/* Connect Button */}
              <a
                href="https://linkedin.com/in/nishant-raj-1ab9a9341"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-text-main text-background font-semibold hover:opacity-90 transition-colors duration-300 w-full md:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
