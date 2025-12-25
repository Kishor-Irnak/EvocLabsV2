import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EvocLogo from "../assets/EvocLab_Logo.png";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 0) {
      const timer = setTimeout(() => setProgress(1), 500);
      return () => clearTimeout(timer);
    }

    if (progress >= 100) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }

    const calculateNextStep = () => {
      let increment = 0;
      let delay = 0;
      const random = Math.random();

      if (progress < 30) {
        increment = random * 15 + 5;
        delay = random * 200 + 50;
      } else if (progress < 50) {
        if (random > 0.8) {
          increment = 0.5;
          delay = 800;
        } else {
          increment = random * 5 + 1;
          delay = random * 500 + 200;
        }
      } else if (progress < 80) {
        increment = random * 20 + 10;
        delay = random * 150 + 50;
      } else {
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
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 bg-blue-950/10 pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-sm px-8 text-center">
        {/* Premium Logo Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center relative"
        >
          {/* Subtle logo pulse glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"
          />

          <div className="w-24 h-24 rounded-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pr-2 pt-2" />
            <img
              src={EvocLogo}
              alt="Evoc Labs Logo"
              className="w-16 h-16 p-2 relative z-10"
            />
          </div>
        </motion.div>

        {/* Text Styling */}
        <div className="mb-10 space-y-3">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold tracking-tight text-white"
          >
            Evoc Labs
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="h-[1px] w-4 bg-blue-500/50" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-400">
              Initializing Profit Engine
            </span>
            <div className="h-[1px] w-4 bg-blue-500/50" />
          </motion.div>
        </div>

        {/* Ultra-Premium Progress Bar */}
        <div className="relative px-2">
          <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
            {/* Progress fill */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-blue-400 to-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />

            {/* Shimmer overlay */}
            <motion.div
              className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                left: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Glowing head of the progress bar */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400/50 blur-lg rounded-full"
            style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
            animate={{ opacity: progress > 0 && progress < 100 ? 1 : 0 }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] rounded-full z-20"
            style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
            animate={{ opacity: progress > 0 && progress < 100 ? 1 : 0 }}
          />
        </div>

        {/* Status Percentage */}
        <div className="mt-6 flex justify-between items-center px-2">
          <span className="text-[9px] font-black text-white/20 tracking-widest uppercase">
            System Check
          </span>
          <span className="text-[10px] font-mono font-bold text-blue-400">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
