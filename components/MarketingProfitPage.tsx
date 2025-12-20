import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, TrendingUp, Layers, Users, Zap } from "lucide-react";
import BlurText from "./BlurText";

const CountUp = ({ 
  to, 
  prefix = "", 
  suffix = "", 
  delay = 0,
  decimals = 0,
  duration = 2.5
}: { 
  to: number; 
  prefix?: string; 
  suffix?: string; 
  delay?: number;
  decimals?: number;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      
      const controls = animate(0, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (value) => {
          const formatted = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          node.textContent = `${prefix}${formatted}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, to, delay, duration, decimals, prefix, suffix]);

  return <span ref={ref} className="tabular-nums tracking-tight">0</span>;
};

// --- Advanced Component: Spotlight Card ---
const SpotlightCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  title?: string; 
  sub?: string;
  icon?: React.ReactNode;
}> = ({ children, className = "", title, sub, icon }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      // Added p-6 for mobile, keeping md:p-8 for desktop
      className={`relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* The Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {(title || icon) && (
          <div className="mb-6 flex items-start justify-between">
            <div>
                {title && <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>}
                {sub && <p className="text-sm text-white/50 mt-1 font-medium">{sub}</p>}
            </div>
            {icon && (
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400">
                    {icon}
                </div>
            )}
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>

      {/* Border Highlight on Hover */}
      <div
        className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-white/20 transition-all duration-300"
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  );
};

// --- Component: Dynamic Graph ---
const GrowthGraph = () => (
  <div className="flex items-end h-full w-full gap-1.5 pt-6 pb-2">
    {[30, 45, 35, 60, 50, 75, 65, 85, 80, 100].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ delay: i * 0.05, duration: 0.8, type: "spring", bounce: 0 }}
        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/20 to-blue-500 hover:to-blue-400 transition-colors duration-300 opacity-80 hover:opacity-100"
        style={{ minHeight: "10px" }}
      />
    ))}
  </div>
);

// --- Main Layout ---
export default function BentoGrid() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Adjusted padding: py-16 for mobile, py-32 for desktop
    <div className="min-h-screen bg-background text-text-main font-sans flex flex-col items-center relative overflow-hidden py-16 md:py-32">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 blur-[128px] rounded-full pointer-events-none" />

      {/* Adjusted padding: px-4 for mobile */}
      <div className="max-w-6xl w-full px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6">
             <Zap className="w-3 h-3" />
             <span>Performance Data</span>
          </div>
          
          <div className="mb-6">
             <BlurText
              text="Turn Spend Into Profit."
              // Adjusted font sizes: text-4xl mobile, text-6xl desktop
              className="text-4xl md:text-6xl font-bold leading-tight text-white tracking-tighter"
            />
          </div>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
             We don't just run ads; we engineer growth systems. <br className="hidden md:block"/> Here is the impact we have generated for our partners.
          </p>
        </div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Main Stat (Wide) */}
          <SpotlightCard
            className="md:col-span-2 lg:col-span-2 min-h-[220px]"
            title="Total Ad Spend Managed"
            icon={<Layers className="w-5 h-5" />}
          >
            <div className="flex flex-col h-full justify-end pb-2">
              <div className="flex items-baseline gap-2 md:gap-4 flex-wrap">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter">
                  <CountUp to={2.4} prefix="₹" suffix=" Cr+" decimals={1} delay={0.2} />
                </span>
                <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md text-sm font-semibold border border-emerald-400/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+24% ROI</span>
                </div>
              </div>
              <p className="mt-4 text-white/50 text-sm font-medium">
                Optimized across Meta, Google, and LinkedIn for maximum efficiency.
              </p>
            </div>
          </SpotlightCard>

          {/* 2. Graph (Tall) */}
          <SpotlightCard
            className="lg:row-span-2 min-h-[300px]"
            title="Growth Trajectory"
            sub="Consistent month-over-month scaling."
          >
            <GrowthGraph />
          </SpotlightCard>

          {/* 3. Expertise (Compact) */}
          <SpotlightCard title="Core Expertise" icon={<Zap className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mt-2">
              {["PPC", "Creative Strategy", "CRO", "Data Analytics", "Attribution"].map((tag) => (
                <span 
                  key={tag}
                  className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-end gap-2">
              <div className="text-4xl font-bold text-white tracking-tighter">
                <CountUp to={4} suffix="+" delay={0.3} />
              </div>
              <div className="text-white/50 text-sm mb-1.5 font-medium">
                Years of Excellence
              </div>
            </div>
          </SpotlightCard>

          {/* 4. Clients (Compact) */}
          <SpotlightCard title="Brands Scaled" icon={<Users className="w-5 h-5" />}>
             <div className="h-full flex flex-col justify-end pb-2">
               <div className="text-5xl font-bold text-white tracking-tighter">
                 <CountUp to={150} suffix="+" delay={0.4} />
               </div>
               <div className="text-white/50 text-sm mt-2 font-medium">
                 Global Partners across 12 industries.
               </div>
             </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}