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
import BlurText from "./BlurText";

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
      className="py-24 md:py-32 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header Section --- */}
        <div className="mb-20">
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-text-secondary text-xs font-medium uppercase tracking-wider mb-6"
          >
            <Layers className="w-3 h-3" />
            Our Expertise
          </motion.div>

          <div className="max-w-3xl">
            <BlurText
              text="Comprehensive solutions to scale your revenue."
              className="text-3xl md:text-5xl font-semibold text-text-main tracking-tight"
            />
          </div>
        </div>

        {/* --- Grid Layout --- */}
        {/* --- Carousel Layout --- */}
        <div className="relative w-full overflow-hidden mask-gradient-sides">
           {/* Add a gradient mask for smooth fade in/out at edges if supported, usually requires simple mask-image in css or just gradients overlay */}
           {/* Gradient Overlays for Fade Effect */}
           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Adjust speed here
            }}
          >
            {/* Render items twice for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="w-[300px] md:w-[350px] flex-shrink-0 group relative p-8 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 text-text-secondary group-hover:text-primary transition-colors">
                    <service.icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold mb-3 text-text-main">
                    {service.title}
                  </h4>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
