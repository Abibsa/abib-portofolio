"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("hasLoaded", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-heading gradient-text">
              &lt;Ashab /&gt;
            </h1>
            
            <div className="w-64 h-1 bg-dark-300 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-primary rounded-full"
              />
            </div>

            <p className="text-sm text-slate-400 font-mono typing-effect">
              Initializing...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
