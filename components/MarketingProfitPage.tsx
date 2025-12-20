import React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useInView } from "framer-motion";
import BlurText from "./BlurText";

// --- CountUp Component ---
const CountUp = ({ 
  to, 
  prefix = "", 
  suffix = "", 
  delay = 0,
  formatter 
}: { 
  to: number; 
  prefix?: string; 
  suffix?: string; 
  delay?: number;
  formatter?: (val: number) => string;
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, to, motionValue, delay]);

  React.useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        if (formatter) {
           ref.current.textContent = formatter(latest);
        } else {
           ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
        }
      }
    });
  }, [springValue, prefix, suffix, formatter]);

  return <span ref={ref}>0</span>;
};

const BentoCard: React.FC<{ children: React.ReactNode; className?: string; title?: string; sub?: string }> = ({
  children,
  className = "",
  title,
  sub,
}) => {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl bg-surface border border-border flex flex-col overflow-hidden transition-colors hover:border-primary/50 group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative z-10 flex flex-col h-full">
        {title && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-text-main">{title}</h3>
            {sub && <p className="text-sm text-text-muted mt-1">{sub}</p>}
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
      {/* Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

// 2. Graph Component
const GrowthGraph = () => (
  <div className="flex items-end h-full w-full gap-2 pt-4">
    {[35, 60, 45, 70, 50, 80, 100].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ delay: i * 0.1, duration: 1, type: "spring" }}
        className={`flex-1 rounded-sm transition-colors duration-300 ${
          i === 6 ? "bg-primary" : "bg-white/10 hover:bg-primary"
        }`}
        style={{ minHeight: "10px" }}
      />
    ))}
  </div>
);

// --- Icons ---
const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const TrendingUp = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

// --- Main Layout ---
export default function ProfessionalBentoGrid() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Formatter for Spend (0 -> 200 Lakhs -> 2Cr)
  const spendFormatter = React.useCallback((val: number) => {
     const v = Math.floor(val);
     if (v >= 100) {
        const cr = v / 100;
        // Clean format: 1.50 -> 1.5, 2.00 -> 2
        const formatted = cr.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
        return `₹${formatted}Cr+`;
     }
     return `₹${v} Lakhs`;
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-main font-sans py-16 md:py-24 flex justify-center overflow-x-hidden relative">
      <div className="max-w-7xl w-full px-6 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold tracking-tight text-text-main">
            EVOC LABS<span className="text-primary">.</span>
          </div>
        </header>

        {/* Hero Text */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <BlurText
              text="Turn Spend Into Profit."
              className="text-4xl md:text-6xl font-semibold leading-tight text-text-main tracking-tight"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Data-driven marketing strategies for modern brands.
          </motion.p>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* 1. Main Stat (Wide) */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            title="Total Ad Spend Managed"
          >
            <div className="flex flex-col h-full justify-end">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-5xl md:text-6xl font-bold text-text-main tracking-tighter">
                  <CountUp to={200} formatter={spendFormatter} delay={0.2} />
                </span>
                <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-1 rounded-md text-sm font-semibold">
                  <TrendingUp /> <CountUp to={24} suffix="%" delay={0.4} />
                </div>
              </div>
              <p className="mt-4 text-text-muted text-sm md:text-base">
                Optimized across Meta, Google, and LinkedIn.
              </p>
            </div>
          </BentoCard>

          {/* 2. Graph (Tall) */}
          <BentoCard
            className="lg:row-span-2 min-h-[300px]"
            title="Growth Trajectory"
            sub="Consistent scaling."
          >
            <GrowthGraph />
          </BentoCard>

          {/* 3. Expertise (Standard) */}
          <BentoCard title="Our Expertise">
            <div className="flex flex-wrap gap-2">
              {["PPC", "Creative", "CRO", "Analytics"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-text-main"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <div className="text-3xl font-bold text-text-main">
                <CountUp to={4} suffix="+" delay={0.3} />
              </div>
              <div className="text-text-muted text-sm">
                Years Exp.
              </div>
            </div>
          </BentoCard>

          {/* 4. Clients (Standard) */}
          <BentoCard title="Brands Scaled">
            <div className="h-full flex flex-col items-center justify-center pt-4">
              <div className="text-5xl font-bold text-text-main tracking-tighter">
                <CountUp to={150} suffix="+" delay={0.4} />
              </div>
              <div className="text-text-muted text-sm mt-2">
                Global Partners
              </div>
            </div>
          </BentoCard>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToContact}
            className="md:col-span-2 lg:col-span-3 w-full h-24 bg-surface border border-border hover:bg-primary-hover rounded-2xl px-8 flex items-center justify-between text-white cursor-pointer transition-colors shadow-lg shadow-primary/20 group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-left">
              <div className="text-xl font-bold">
                Ready to scale?
              </div>
              <div className="text-sm opacity-90">
                Book your free strategy audit.
              </div>
            </div>

            <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRightIcon />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
