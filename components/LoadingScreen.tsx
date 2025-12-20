import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";
import EvocLogo from "../assets/EvocLab_Logo.png";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start animation loop
    if (progress === 0) {
      // Initial delay before starting
      const timer = setTimeout(() => setProgress(1), 500);
      return () => clearTimeout(timer);
    }

    if (progress >= 100) {
      // Finished
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }

    // Calculate next increment and delay based on current progress to simulate realism
    const calculateNextStep = () => {
      let increment = 0;
      let delay = 0;
      const random = Math.random();

      if (progress < 30) {
        // Fast start
        increment = random * 15 + 5;
        delay = random * 200 + 50;
      } else if (progress < 50) {
        // Simulate "heavy asset" loading (potential stalls)
        if (random > 0.8) {
          increment = 0.5; // MUST be > 0 to trigger re-render and effect loop
          delay = 800;
        } else {
          increment = random * 5 + 1; // Slow crawl
          delay = random * 500 + 200;
        }
      } else if (progress < 80) {
        // Rapid burst
        increment = random * 20 + 10;
        delay = random * 150 + 50;
      } else {
        // Slow finish (90-99%)
        increment = random * 2 + 0.5;
        delay = random * 400 + 100;
      }

      return { increment, delay };
    };

    const { increment, delay } = calculateNextStep();

    const timer = setTimeout(() => {
      setProgress((prev) => Math.min(prev + increment, 100));
    }, delay);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-brand-900/10 blur-[100px] rounded-full pointer-events-none transform scale-150 animate-pulse-slow"></div>

      <div className="relative z-10 w-full max-w-md px-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-2xl shadow-brand-500/20">
            <img src={EvocLogo} alt="Evoc Labs Logo" className="w-12 h-12" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-display font-bold text-white mb-2"
        >
          Evoc Labs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-sm text-slate-400 mb-8 uppercase tracking-[0.2em]"
        >
          Initializing Profit Engine
        </motion.p>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm relative">
          {/* Animated Bar */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          />
          {/* Glow Head */}
          <motion.div
            className="absolute top-0 h-full w-20 bg-white/50 blur-[5px]"
            style={{
              left: `${progress}%`,
              transform: "translateX(-50%)",
              opacity: progress < 100 ? 1 : 0,
            }}
          />
        </div>

        {/* Percentage */}
        <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
          <span>{progress < 100 ? "LOADING ASSETS" : "READY"}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
