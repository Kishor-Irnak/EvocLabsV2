import React from "react";
import { Linkedin, Quote, Sparkles, ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import founderPfp from "../assets/founderPfp.jpg";

const Founder: React.FC = () => {
  return (
    <>
      {/* 1. Import the Handwriting Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        `}
      </style>

      <section
        id="founder"
        // 2. 'min-h-screen' + 'flex items-center' ensures full height without cropping
        // 'lg:py-0' removes padding on desktop so it centers perfectly in the available space
        className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-12 lg:py-0"
      >
        {/* Background Gradients for Depth */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          
          {/* Reduced gap slightly (gap-16) to ensure it fits on standard laptop screens */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* --- Column 1: Image (Profile Widget) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 order-1 flex justify-center lg:block"
            >
              {/* Glassy Card Container - Max width constrained for better fit */}
              <div className="group relative p-3 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:bg-white/10 max-w-[400px] w-full">
                
                {/* Image */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900">
                  <img
                    src={founderPfp}
                    alt="Nishant Raj"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-2xl tracking-tight">Nishant Raj</p>
                    <p className="text-white/60 text-sm font-medium tracking-wide">Founder & Lead Strategist</p>
                  </div>
                </div>

                {/* Details Below Image */}
                <div className="flex items-center px-4 py-4">
                  <div className="flex items-center gap-2 text-xs text-white/50 font-mono uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>IIT Madras</span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* --- Column 2: Content --- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-8 order-2"
            >
              {/* Header Block - Flex Column for strict left alignment */}
              <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>The Vision</span>
                </motion.div>
                
                <BlurText
                  text="Marketing isn't about guessing."
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tighter leading-[1.1]"
                />
              </div>

              {/* Quote Block */}
              <div className="relative pl-6 md:pl-8 border-l-2 border-white/10 my-6 text-left">
                 <Quote className="absolute -top-2 left-6 md:left-8 w-6 h-6 text-white/20 fill-white/10" />
                 <p className="text-xl md:text-2xl text-text-muted italic leading-relaxed font-light">
                    "It's about aligning your product with a <span className="text-white font-medium not-italic">performance culture</span>. At Evoc Labs, we treat your budget like our own capital."
                 </p>
              </div>

              {/* Description */}
              <div className="text-text-muted text-base md:text-lg leading-relaxed space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <p>
                  With over <strong className="text-text-main font-semibold">4 years of hands-on experience</strong> managing ₹2Cr+ in ad spend, we've identified the specific patterns that separate scaling brands from stagnant ones.
                </p>
                <p>
                  There is no room for vanity metrics or "fluff" campaigns here. Our approach combines aggressive creative testing with conservative financial modeling.
                </p>
              </div>

              {/* CTA / Signature Block */}
              <div className="pt-6 flex flex-col sm:flex-row gap-8 items-center lg:justify-start">
                
                <a
                  href="https://linkedin.com/in/nishant-raj-1ab9a9341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5] fill-current" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* 3. Authentic Signature */}
                <div 
                    className="text-4xl md:text-5xl text-white/60 -rotate-2"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  Nishant Raj
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;