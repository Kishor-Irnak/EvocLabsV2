import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import BlurText from "./BlurText";

// --- Data ---
const benefits = [
  {
    title: "No subscription or fixed service fees",
    desc: "Pay strictly for performance. Our model aligns perfectly with your growth—no hidden monthly retainers.",
  },
  {
    title: "Zero RTO fee",
    desc: "Stop losing money on returns. We waive RTO fees so you keep more of your hard-earned revenue.",
  },
  {
    title: "Single unified growth dashboard",
    desc: "All your metrics in one view. From ad spend to inventory, manage your entire growth operation seamlessly.",
  },
  {
    title: "Built for profitability, not vanity metrics",
    desc: "Real ROI over likes. We optimize for net profit, ensuring every rupee spent contributes to your bottom line.",
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="h-screen flex items-center bg-background relative overflow-hidden py-0"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center">
        {/* Compact grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* --- Left Content (Text) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6"
              >
                <Sparkles className="w-3 h-3" />
                <span>Strategic Edge</span>
              </motion.div>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <BlurText
                text="Why brands choose Evoc Labs"
                className="text-3xl md:text-5xl lg:text-6xl font-semibold text-text-main leading-[1.1]"
              />
            </div>

            <div className="space-y-4">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group flex gap-4 p-3 -ml-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-text-main mb-1 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-snug font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Right Visual (Clean Video Box) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 w-full flex items-center justify-center lg:h-auto"
          >
            <div className="relative w-full aspect-square max-w-[450px] lg:max-w-[550px]">
              {/* Ambient Background Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-30 pointer-events-none" />

              {/* Clean Video Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl ring-1 ring-white/5 group">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />

                <video
                  className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/rocket_video.mp4"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
