"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function HeroText() {
  const [currentTest, setCurrentTest] = useState(-1);
  const [allPassed, setAllPassed] = useState(false);
  
  const letters = "QUALITY".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentTest(prev => {
          if (prev >= letters.length - 1) {
            clearInterval(interval);
            setTimeout(() => setAllPassed(true), 500);
            return prev;
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      
      {/* Terminal header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: allPassed ? 0 : 1 }}
        className="flex items-center gap-2 text-xs font-mono text-foreground/40 mb-4 h-6"
      >
        <Terminal size={14} />
        <span>running tests...</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          █
        </motion.span>
      </motion.div>

      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center">
        
        {/* QUALITY */}
        <div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.15 }}
              animate={{ 
                opacity: currentTest >= index ? 1 : 0.15,
                color: currentTest >= index ? "var(--color-primary)" : "currentColor"
              }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* IS MY CRAFT - hidden until all tests pass */}
        <AnimatePresence>
          {allPassed && (
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-light italic text-pastel-purple"
            >
              is my craft
            </motion.span>
          )}
        </AnimatePresence>
      </h1>

      {/* Success indicator */}
      <AnimatePresence>
        {allPassed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-pastel-green animate-pulse" />
            <span className="text-pastel-green text-xs font-mono">all systems go</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
