import React from "react";
import {
  Target,
  Search,
  ShoppingBag,
  BarChart3,
  Users,
  Zap,
  Layers,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Types ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Data ---
const services: ServiceItem[] = [
  {
    id: "1",
    title: "Performance Marketing",
    description:
      "Data-led media buying across major platforms to drive consistent ROAS.",
    icon: Target,
  },
  {
    id: "2",
    title: "Meta & Google Ads",
    description:
      "Expert campaign management optimized for lower CAC and higher conversions.",
    icon: Search,
  },
  {
    id: "3",
    title: "E-com Development",
    description:
      "High-conversion Shopify & Woo stores built for speed and sales.",
    icon: ShoppingBag,
  },
  {
    id: "4",
    title: "SEO & Organic Growth",
    description:
      "Dominate search results with technical SEO and content strategy.",
    icon: BarChart3,
  },
  {
    id: "5",
    title: "Lead Generation",
    description:
      "High-intent B2B and B2C lead pipelines that fuel your sales team.",
    icon: Users,
  },
  {
    id: "6",
    title: "UGC & Content",
    description:
      "Authentic creative assets that resonate and convert cold traffic.",
    icon: Zap,
  },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* --- Background Elements (Clean, No Grid) --- */}

      {/* Ambient Lighting Only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Center Blue Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        {/* Bottom Corners Indigo Glow */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6"
          >
            <Layers className="w-3 h-3" />
            Our Expertise
          </motion.div>

          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Everything you need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Scale Properly
            </span>
          </motion.h3>
        </div>

        {/* --- Grid Layout --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              variants={cardVariants}
              key={service.id}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] overflow-hidden backdrop-blur-sm"
            >
              {/* Hover Highlight Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <service.icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner Flash */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
