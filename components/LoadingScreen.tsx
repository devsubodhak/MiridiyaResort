"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest-dark"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl text-white font-playfair tracking-[0.2em] uppercase">
                Miridiya
              </h1>
              <div className="h-px w-full bg-gold-primary mt-2 origin-left scale-x-0 animate-[scaleX_1.5s_ease-in-out_forwards]" />
              <h2 className="text-sm md:text-base text-gold-primary tracking-[0.4em] uppercase mt-4">
                Holiday Resort
              </h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
