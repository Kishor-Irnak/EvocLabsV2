import React, { useRef } from "react";
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { AnimatedBeam } from "./AnimatedBeam";

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "We meet to understand your vision, goals, and brand voice.",
      icon: <MessageSquare size={18} />,
      ref: step1Ref,
    },
    {
      id: 2,
      title: "Strategy & Design",
      description: "Our team crafts a tailored roadmap and visual assets.",
      icon: <PenTool size={18} />,
      ref: step2Ref,
    },
    {
      id: 3,
      title: "Launch & Scale",
      description: "We execute the plan and optimize for continuous growth.",
      icon: <Rocket size={18} />,
      ref: step3Ref,
    },
  ];

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="mb-4">
            <BlurText
              text="Get Set Up in Minutes"
              className="text-3xl md:text-4xl font-semibold text-text-main"
            />
          </div>
          <BlurText
            text="Quickly onboard your team and start managing projects with ease."
            className="text-text-muted max-w-lg mx-auto inline-block text-sm md:text-base"
          />
        </div>

        {/* Process Container */}
        {/* REF GOES HERE: This establishes the coordinate system */}
        <div className="relative w-full max-w-5xl mx-auto" ref={containerRef}>
          
          {/* 1. Beam Layer */}
          {/* Changed to 'inset-0' and 'flex items-center justify-center' is NOT needed for the beam itself, just full width/height */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
             <AnimatedBeam
              containerRef={containerRef}
              fromRef={step1Ref}
              toRef={step2Ref}
              curvature={0} 
              duration={3}
              delay={0}
              pathColor="rgba(255, 255, 255, 0.1)"
              gradientStartColor="#3b82f6"
              gradientStopColor="#60a5fa"
              pathWidth={2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={step2Ref}
              toRef={step3Ref}
              curvature={0}
              duration={3}
              delay={1.5}
              pathColor="rgba(255, 255, 255, 0.1)"
              gradientStartColor="#3b82f6"
              gradientStopColor="#60a5fa"
              pathWidth={2}
            />
          </div>

          {/* 2. Steps Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Container */}
                {/* The Ref is attached here so the beam connects to THIS element's center */}
                <motion.div 
                  ref={step.ref}
                  animate={{
                    backgroundColor: ["#1a1a1a", "#1e293b", "#1a1a1a"], 
                    borderColor: ["rgba(255,255,255,0.1)", "rgba(59, 130, 246, 0.5)", "rgba(255,255,255,0.1)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 1.5,
                    ease: "easeInOut",
                  }}
                  className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center relative shadow-lg z-20"
                >
                  <motion.div 
                    animate={{
                      color: ["#94a3b8", "#3b82f6", "#94a3b8"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 1.5 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white ring-4 ring-background">
                    {step.id}
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-text-main mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-[250px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;