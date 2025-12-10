"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Terminal } from "lucide-react";

export default function HeroText() {
  const [currentTest, setCurrentTest] = useState(-1);
  const [allPassed, setAllPassed] = useState(false);
  
  const letters = "QUALITY".split("");
  const testNames = [
    "unit_test",
    "ui_check", 
    "api_test",
    "load_test",
    "integration",
    "type_check",
    "yaml_lint"
  ];

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
      }, 400);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      
      {/* Terminal header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-xs font-mono text-foreground/40 mb-6"
      >
        <Terminal size={14} />
        <span>running test suite...</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          █
        </motion.span>
      </motion.div>

      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center">
        
        {/* QUALITY text */}
        <div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.2 }}
              animate={{ 
                opacity: currentTest >= index ? 1 : 0.2,
                color: currentTest >= index ? "var(--color-primary)" : "currentColor"
              }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* IS MY CRAFT */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: allPassed ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-light italic text-pastel-purple"
        >
          is my craft
        </motion.span>
      </h1>

      {/* Test Results - compact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 font-mono text-xs space-y-0.5"
      >
        {testNames.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentTest >= index ? 1 : 0.2 }}
            className={`flex items-center gap-2 ${currentTest >= index ? 'text-pastel-green' : 'text-foreground/20'}`}
          >
            <Check size={10} className={currentTest >= index ? 'opacity-100' : 'opacity-0'} />
            <span className="text-foreground/40 w-20">{name}</span>
            {currentTest >= index && <span className="text-pastel-green text-[10px]">PASS</span>}
          </motion.div>
        ))}
      </motion.div>

      {/* Final badge */}
      <AnimatePresence>
        {allPassed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 px-3 py-1.5 bg-pastel-green/10 border border-pastel-green/30 rounded-full flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-pastel-green animate-pulse" />
            <span className="text-pastel-green text-xs font-mono">7/7 passed</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
