import React from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "./BlurText";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [0.85, 1]);
  const opacity = useTransform(scrollY, [0, 300], [0.8, 1]);

  return (
    <section className="relative pt-20 pb-8 md:pt-36 md:pb-32 overflow-hidden bg-background min-h-screen flex flex-col items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

      {/* Animated Vertical Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_80%)]">
        {/* 1. Ambient Sweep - Soft Purple/Neutral Glow (No Blue) */}
        <motion.div
          className="absolute -top-[20%] -bottom-[20%] w-[200px] md:w-[400px] opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168, 162, 158, 0.2), rgba(214, 211, 209, 0.2), transparent)",
            filter: "blur(60px)",
            transform: "skewX(-20deg)",
          }}
          animate={{
            left: ["-20%", "120%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* 2. The "Piercing" Beam - White/Silver */}
        <motion.div
          className="absolute top-0 bottom-0 w-[6px]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0) 10%, #d4d4d8 40%, #ffffff 50%, #d4d4d8 60%, rgba(255,255,255,0) 90%, transparent 100%)",
            boxShadow: "0 0 40px 5px rgba(255,255,255,0.4)",
            filter: "blur(8px)",
          }}
          animate={{
            left: ["10%", "90%"],
            opacity: [0, 0.8, 0],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />

        {/* 3. Fast Tracer - Ghostly Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-[4px] bg-white/30"
          style={{ filter: "blur(5px)" }}
          animate={{
            left: ["0%", "100%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        />

        {/* 4. Central Pulse - Soft Core */}
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "4px",
            background:
              "linear-gradient(180deg, transparent, #e5e5e5, transparent)",
            boxShadow: "0 0 100px 30px rgba(255, 255, 255, 0.1)",
            filter: "blur(6px)",
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            height: ["80%", "100%", "80%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 5. Diagonal Drift - Soft Violet/Grey */}
        <motion.div
          className="absolute -top-[10%] -bottom-[10%] w-[8px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(167, 139, 250, 0.3), transparent)",
            boxShadow: "0 0 30px 5px rgba(167, 139, 250, 0.2)",
            transform: "rotate(5deg)",
            filter: "blur(12px)",
          }}
          animate={{
            left: ["100%", "-20%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* 6. Wide Slow Beam - Thick & Blurred */}
        <motion.div
          className="absolute top-0 bottom-0 w-[15px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
            boxShadow: "0 0 50px 10px rgba(255, 255, 255, 0.1)",
            filter: "blur(20px)",
          }}
          animate={{
            left: ["80%", "20%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />

        {/* 7. Extra Thick Ambient Beam */}
        <motion.div
          className="absolute top-0 bottom-0 w-[30px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(200, 200, 200, 0.15), transparent)",
            filter: "blur(30px)",
          }}
          animate={{
            left: ["30%", "70%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* 8. Super Thick Sheer Beam - Foreground Overlay */}
        <motion.div
          className="absolute -top-[50%] -bottom-[50%] w-[200px] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)",
            filter: "blur(50px)",
            transform: "rotate(20deg)",
          }}
          animate={{
            left: ["-50%", "120%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[300px] md:w-[1200px] md:h-[500px] bg-primary/5 blur-[90px] md:blur-[140px] rounded-full pointer-events-none mix-blend-screen" />

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

          {/* Shimmering Title Effect */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative inline-block px-6 py-2"
          >
            <motion.span
              className="text-4xl p-2 sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] block italic text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #9ca3af 0%, #ffffff 25%, #9ca3af 50%, #ffffff 75%, #9ca3af 100%)",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: ["0% center", "-200% center"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Profit Engine
            </motion.span>
          </motion.div>
        </div>

        {/* Subhead */}
        <div className="mb-8 md:mb-14 max-w-2xl px-2">
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
          <motion.a
            href="#contact"
            className="group relative px-6 py-3 rounded-lg bg-white text-background font-medium text-sm overflow-hidden w-full sm:w-auto inline-flex items-center justify-center"
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
          </motion.a>
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          style={{ scale, opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="pt-8 md:pt-12 bg-surface relative min-h-[250px] md:min-h-[400px]">
            {/* Gradient Overlay for subtle depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-10 pointer-events-none opacity-50" />

            {/* The Dashboard Component */}
            <div className="w-full h-full overflow-hidden">
              <DashboardPreview />
            </div>

            {/* Mobile Only Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-20 md:hidden" />
          </div>
          {/* Hover glass removed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
