import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// --- Data ---
const data = [
  { name: "Strategy", value: 30, desc: "Market research & planning" },
  { name: "Creative", value: 25, desc: "High-conversion assets" },
  { name: "Media Buying", value: 30, desc: "Platform optimization" },
  { name: "Analysis", value: 15, desc: "Data-driven scaling" },
];

// Updated colors to match the Blue/Indigo theme
const COLORS = ["#3b82f6", "#6366f1", "#0ea5e9", "#2563eb"];

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

// --- Custom Active Shape ---
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8} // Subtle expansion
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        className="drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 6}
        outerRadius={innerRadius - 2}
        fill={fill}
      />
    </g>
  );
};

const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Window Resize for Responsive Chart Radii
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* --- Background Elements (Clean, No Grid) --- */}

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- Left Content --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-3 h-3" />
                Strategic Edge
              </motion.div>
            </div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-white leading-tight text-center lg:text-left"
            >
              Why brands choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Evoc Labs
              </span>
            </motion.h2>

            <div className="space-y-4">
              {[
                {
                  title: "Transparent Communication",
                  desc: "Weekly sprints and daily updates. You're never left guessing.",
                },
                {
                  title: "Custom Strategic Architectures",
                  desc: "No cookie-cutter packages. We build what your stage needs.",
                },
                {
                  title: "Outcome-Focused Metrics",
                  desc: "We track CPA, ROAS, and MER. Vanity metrics don't pay bills.",
                },
                {
                  title: "Data-Backed Creative",
                  desc: "Our design team iterates ads based on real-time buying data.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group flex gap-4 md:gap-5 p-4 rounded-xl bg-slate-900/50 border border-white/5 transition-all duration-300 hover:bg-slate-800/50 hover:border-blue-500/30 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Right Visual (Chart) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex justify-center items-center h-[350px] md:h-[500px] w-full"
          >
            {/* Chart Container */}
            <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-square">
              {/* Spinning Decorative Rings - Styled to Theme */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 md:inset-12 rounded-full border border-blue-500/10 animate-[spin_15s_linear_infinite_reverse]" />

              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    // Responsive Radii
                    innerRadius={isMobile ? 65 : 110}
                    outerRadius={isMobile ? 105 : 170}
                    dataKey="value"
                    onMouseEnter={onPieEnter} // For Desktop
                    onClick={onPieEnter} // For Mobile Tap
                    stroke="none"
                    paddingAngle={4}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        className="transition-all duration-300 outline-none focus:outline-none cursor-pointer"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Dynamic Center Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-full px-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="block text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      {data[activeIndex].value}%
                    </span>
                    <span className="text-xs md:text-sm font-medium text-blue-400 uppercase tracking-widest mt-2 block">
                      {data[activeIndex].name}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
