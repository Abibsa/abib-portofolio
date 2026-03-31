"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const loadingTexts = [
  "Initializing...",
  "Loading portfolio data...",
  "Preparing assets...",
  "Almost ready..."
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 1200);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, []);

  // Word typing animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-8 font-heading gradient-text"
            >
              &lt;Ashab /&gt;
            </motion.h1>
            
            <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden mb-6 relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>

            <motion.div
              key={textIndex}
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-sm text-slate-400 font-mono flex gap-[2px]"
            >
              {loadingTexts[textIndex].split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
