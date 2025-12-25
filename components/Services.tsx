import React from "react";
import { Layers, Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";
import BlurText from "./BlurText";

// --- Types ---
interface ReviewItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
}

// --- Data ---
const reviews: ReviewItem[] = [
  {
    id: "1",
    quote:
      "Evoc Labz completely changed how we scale. No fixed cost, no stress. We finally see real profits instead of just revenue.",
    name: "Rohit Verma",
    designation: "Founder, D2C Brand",
  },
  {
    id: "2",
    quote:
      "What I liked most is the transparency. Every order, every rupee is visible on one dashboard.",
    name: "Ankit Sharma",
    designation: "Co-Founder, Shopify Store",
  },
  {
    id: "3",
    quote:
      "RTO was killing our margins earlier. After using Evoc Labz, our delivered order quality improved massively.",
    name: "Sandeep Patel",
    designation: "Founder, Ecommerce Brand",
  },
  {
    id: "4",
    quote:
      "Paying only on delivered orders makes complete sense. Evoc Labz feels more like a partner than a service provider.",
    name: "Amit Gupta",
    designation: "Brand Owner",
  },
  {
    id: "5",
    quote:
      "We stopped wasting money on multiple tools. Everything is now managed from a single platform.",
    name: "Neha Agarwal",
    designation: "Founder, Lifestyle Brand",
  },
  {
    id: "6",
    quote:
      "Finally a system that focuses on profit, not just ROAS screenshots. Evoc Labz shows the real picture.",
    name: "Vikas Mehta",
    designation: "D2C Entrepreneur",
  },
  {
    id: "7",
    quote:
      "The onboarding was smooth and the team actually understands Indian ecommerce problems like COD and RTO.",
    name: "Rahul Singh",
    designation: "Online Seller",
  },
  {
    id: "8",
    quote:
      "Our operations became more structured within weeks. Less chaos, better decisions.",
    name: "Pooja Malhotra",
    designation: "Operations Head",
  },
  {
    id: "9",
    quote:
      "Evoc Labz helped us scale without hiring a big internal team. That saved us a lot of cost.",
    name: "Karan Jain",
    designation: "Founder, Growing D2C Brand",
  },
  {
    id: "10",
    quote:
      "This is not another agency or software. It’s a complete growth system built for real ecommerce.",
    name: "Nikhil Bansal",
    designation: "Brand Founder",
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
    <section id="services" className="py-24 md:py-32 bg-background relative">
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
            Client Reviews
          </motion.div>

          <div className="max-w-3xl">
            <BlurText
              text="WHAT OUR CLIENTS SAYS."
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
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-[300px] md:w-[350px] flex-shrink-0 group relative p-8 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors duration-300 flex flex-col justify-between"
              >
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 text-text-secondary group-hover:text-primary transition-colors">
                    <Quote strokeWidth={1.5} className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <p className="text-text-muted leading-relaxed text-sm md:text-base mb-6 italic">
                    &quot;{review.quote}&quot;
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-text-main">
                      {review.name}
                    </h4>
                    <p className="text-xs text-text-secondary uppercase tracking-wide font-medium">
                      {review.designation}
                    </p>
                  </div>
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
