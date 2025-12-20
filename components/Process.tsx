import React from "react";
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "We meet to understand your vision, goals, and brand voice.",
      icon: <MessageSquare size={20} />,
    },
    {
      id: 2,
      title: "Strategy & Design",
      description: "Our team crafts a tailored roadmap and visual assets.",
      icon: <PenTool size={20} />,
    },
    {
      id: 3,
      title: "Launch & Scale",
      description: "We execute the plan and optimize for continuous growth.",
      icon: <Rocket size={20} />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">

          <div className="mb-4">
            <BlurText
              text="Get Set Up in Minutes, Start Moving Fast"
              className="text-3xl md:text-4xl font-semibold text-text-main"
            />
          </div>
          <BlurText
            text="Quickly onboard your team and start managing projects with ease."
            className="text-text-muted max-w-lg mx-auto inline-block"
          />
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          {/* Connecting Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="hidden md:block absolute top-[2rem] left-[15%] right-[15%] h-px bg-border z-0 origin-left" 
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "backOut" } }
                }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center relative z-10 group-hover:border-primary/50 transition-colors duration-300">
                  <div className="text-text-secondary group-hover:text-primary transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white ring-4 ring-background">
                    {step.id}
                  </div>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-text-main mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
