import React from "react";
import { motion, Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = "",
  delay = 0,
}) => {


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Stagger per character
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Split logic: simpler character split might break wrapping if not careful.
  // Best approach for responsive wrapping: split by words, then wrap each word in a span (inline-block),
  // then split word into characters.
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline whitespace-nowrap mr-[0.25em]" // keep word together, add space
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={childVariants}
              className="inline-block"
              style={{ color: 'inherit' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default BlurText;
