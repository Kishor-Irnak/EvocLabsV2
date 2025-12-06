import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Cursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // CHANGED:
  // Stiffness 400 makes it fast (Original was 150)
  // Damping 28 kills the vibration/jitter, making it feel "liquid"
  const springConfig = { damping: 28, stiffness: 400 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-brand-400 rounded-full pointer-events-none z-[9999] mix-blend-screen opacity-80 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
