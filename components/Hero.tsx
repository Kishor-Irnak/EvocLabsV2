import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-8 md:pt-36 md:pb-32 overflow-hidden bg-background min-h-screen flex flex-col items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

      {/* Animated Vertical Light Beams 
        FIX: Added mask-image for mobile only to fade beams out at the bottom
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] md:[mask-image:none]">
        {/* Top Fade Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-10" />

        {/* Beam 1 - Bright white center */}
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] md:w-[3px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 15%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.9) 85%, transparent 100%)",
            boxShadow:
              "0 0 50px 10px rgba(255, 255, 255, 0.7), 0 0 100px 20px rgba(59, 130, 246, 0.4)",
            filter: "blur(0.5px)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
          animate={{
            left: ["-10%", "110%"],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Beam 2 - White with blue tint */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] md:w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.7) 20%, rgba(191, 219, 254, 0.8) 50%, rgba(255, 255, 255, 0.7) 80%, transparent 100%)",
            boxShadow:
              "0 0 40px 8px rgba(255, 255, 255, 0.6), 0 0 80px 16px rgba(96, 165, 250, 0.3)",
            filter: "blur(1px)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          }}
          animate={{
            left: ["-10%", "110%"],
            top: ["0%", "-5%", "0%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Beam 3 - Subtle white streak */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] md:w-[1.5px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 25%, rgba(147, 197, 253, 0.6) 50%, rgba(255, 255, 255, 0.5) 75%, transparent 100%)",
            boxShadow:
              "0 0 30px 6px rgba(255, 255, 255, 0.5), 0 0 60px 12px rgba(147, 197, 253, 0.25)",
            filter: "blur(1.5px)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
          animate={{
            left: ["-10%", "110%"],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Beam 4 - Fast bright white */}
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] md:w-[2.5px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.8) 80%, transparent 100%)",
            boxShadow:
              "0 0 45px 9px rgba(255, 255, 255, 0.65), 0 0 90px 18px rgba(59, 130, 246, 0.35)",
            filter: "blur(0.8px)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          }}
          animate={{
            left: ["-10%", "110%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />

        {/* Beam 5 - Diagonal movement */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] md:w-[1.5px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.6) 30%, rgba(191, 219, 254, 0.7) 50%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)",
            boxShadow:
              "0 0 35px 7px rgba(255, 255, 255, 0.55), 0 0 70px 14px rgba(191, 219, 254, 0.3)",
            filter: "blur(1.2px)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 48%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 48%, transparent 100%)",
          }}
          animate={{
            left: ["-10%", "110%"],
            top: ["0%", "5%", "0%"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
            delay: 7,
          }}
        />

        {/* Beam 6 - Slow glowing white */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1.5px] md:w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.75) 75%, transparent 100%)",
            boxShadow:
              "0 0 40px 8px rgba(255, 255, 255, 0.6), 0 0 80px 16px rgba(255, 255, 255, 0.3)",
            filter: "blur(1px)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 52%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 52%, transparent 100%)",
          }}
          animate={{
            left: ["-10%", "110%"],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9,
          }}
        />
      </div>

      {/* Ambient Glow - Responsive width/height */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[300px] md:w-[1200px] md:h-[500px] bg-primary/10 blur-[90px] md:blur-[140px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 border border-border text-xs font-medium text-text-secondary mb-6 md:mb-8 hover:border-primary/30 transition-colors cursor-default shadow-sm backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span>India's No.1 E-Commerce Lab</span>
        </motion.div>

        {/* Headline - Responsive Sizes */}
        <div className="mb-6 md:mb-10 max-w-5xl w-full space-y-2">
          <BlurText
            text="Turn Strategy into"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] block !text-text-main"
            delay={0.1}
          />
          <BlurText
            text="Profit Engine"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] block !text-main italic"
            delay={0.2}
          />
        </div>

        {/* Subhead */}
        <div className="mb-8  md:mb-14 max-w-2xl px-2">
          <BlurText
            text="We build data-driven performance systems for direct-to-consumer brands. Scale profitably with clarity, not guesswork."
            className="text-sm sm:text-base md:text-xl text-text-secondary leading-relaxed text-center font-light"
            delay={0.3}
          />
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 mb-12 md:mb-24 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Primary Button */}
          <motion.button
            className="group relative px-6 py-3 rounded-lg bg-white text-background font-medium text-sm overflow-hidden w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span>Book a demo</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          // FIX: Added px-0 sm:px-0 to ensure full width on mobile within container
          className="relative w-full max-w-6xl rounded-t-2xl md:rounded-2xl border-x border-t md:border border-border bg-surface shadow-2xl overflow-hidden group mx-auto"
        >
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-surface/90 border-b border-border flex items-center px-4 gap-2 backdrop-blur-md z-20">
            <div className="flex gap-1.5 md:gap-2 opacity-80">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]" />
            </div>
          </div>

          {/* Content Area */}
          {/* FIX: Reduced padding on mobile (pt-8) vs desktop (pt-12) */}
          <div className="pt-8 md:pt-12 bg-surface relative min-h-[250px] md:min-h-[400px]">
            {/* Gradient Overlay for subtle depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-10 pointer-events-none opacity-50" />

            {/* The Dashboard Component */}
            <div className="w-full h-full overflow-hidden">
              <DashboardPreview />
            </div>

            {/* Mobile Only Bottom Fade on Dashboard 
               If the dashboard is very long, this fades it out on mobile so it doesn't take up 3 screens 
             */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-20 md:hidden" />
          </div>

          {/* Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
