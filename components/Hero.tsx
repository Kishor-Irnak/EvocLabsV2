import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-background min-h-screen flex flex-col items-center">
      {/* Background Pattern - subtle grid */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:2rem_2rem] md:bg-[size:3rem_3rem] opacity-[0.03] pointer-events-none" />
      
      {/* Ambient Glow - Responsive width/height */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[300px] md:w-[1000px] md:h-[400px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center w-full">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/60 text-xs font-medium text-text-secondary mb-6 md:mb-8 hover:border-border transition-colors cursor-default shadow-sm"
        >
          <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded">#1</span>
          <span>India's No.1 E-Commerce Lab</span>
        </motion.div>

        {/* Headline - Responsive Text Sizes */}
        <div className="mb-6 md:mb-8 max-w-5xl w-full">
          <BlurText
            text="Strategy into Profit Engines."
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.15] md:leading-[1.1] inline-block text-text-main break-words"
            delay={0.1}
          />
        </div>

        {/* Subhead */}
        <div className="mb-8 md:mb-12 max-w-2xl px-2 md:px-4">
          <BlurText
            text="We build data-driven performance systems for direct-to-consumer brands. Scale profitably with clarity, not guesswork."
            className="text-sm sm:text-base md:text-xl text-text-muted leading-relaxed text-center"
            delay={0.3}
          />
        </div>

        {/* Buttons - Stack on mobile, Row on tablet+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-24 w-full sm:w-auto px-2 sm:px-0"
        >
          <button className="px-6 md:px-8 py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group w-full sm:w-auto text-sm md:text-base">
            Start Project
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="px-6 md:px-8 py-3.5 rounded-lg bg-surface border border-border text-text-main font-medium hover:bg-surfaceHighlight transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <Play size={16} className="fill-current" />
            See How It Works
          </button>
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-6xl rounded-xl border border-border/40 bg-surface shadow-2xl overflow-hidden group mx-auto"
        >
          {/* Header Bar - Slightly smaller on mobile */}
          <div className="absolute top-0 left-0 right-0 h-8 md:h-10 bg-surface/50 border-b border-border/40 flex items-center px-3 md:px-4 gap-1.5 md:gap-2 backdrop-blur-sm z-10">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]" />
          </div>
          
          {/* Content Area */}
          <div className="pt-8 md:pt-10 bg-surface">
             <DashboardPreview />
          </div>
          
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;