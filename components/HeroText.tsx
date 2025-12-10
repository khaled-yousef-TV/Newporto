"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Play, Terminal } from "lucide-react";

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
    // Start the "test run" sequence
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
      
      {/* Terminal-style test runner header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-xs font-mono text-foreground/40 mb-4"
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

      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center relative">
        
        {/* The Word QUALITY - Each letter is a "test" */}
        <div className="relative flex">
          {letters.map((letter, index) => (
            <div key={index} className="relative">
              {/* The Letter */}
              <motion.span
                initial={{ opacity: 0.2, y: 20 }}
                animate={{ 
                  opacity: currentTest >= index ? 1 : 0.2,
                  y: currentTest >= index ? 0 : 20,
                  color: currentTest >= index ? "var(--color-primary)" : "currentColor"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative inline-block"
              >
                {letter}
                
                {/* Pass indicator above letter */}
                <AnimatePresence>
                  {currentTest >= index && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2"
                    >
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-pastel-green flex items-center justify-center">
                        <Check className="w-2 h-2 md:w-3 md:h-3 text-black" strokeWidth={3} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.span>
            </div>
          ))}
        </div>

        {/* Subtitle - appears after all tests pass */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: allPassed ? 1 : 0, 
            y: allPassed ? 0 : 20 
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-light italic text-pastel-purple mt-2"
        >
          is my craft
        </motion.span>
      </h1>

      {/* Test Results Panel */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ delay: 0.5 }}
        className="mt-8 font-mono text-xs md:text-sm space-y-1"
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: currentTest >= index ? 1 : 0.3,
              x: currentTest >= index ? 0 : -20
            }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-2 ${currentTest >= index ? 'text-pastel-green' : 'text-foreground/30'}`}
          >
            {currentTest >= index ? (
              <Check size={12} />
            ) : currentTest === index - 1 ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <Play size={12} className="text-pastel-purple" />
              </motion.div>
            ) : (
              <AlertCircle size={12} className="opacity-30" />
            )}
            <span className="text-foreground/50">{testNames[index]}</span>
            {currentTest >= index && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-pastel-green"
              >
                PASS
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Final Status Badge */}
      <AnimatePresence>
        {allPassed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mt-6 px-4 py-2 bg-pastel-green/20 border border-pastel-green/50 rounded-full flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-pastel-green animate-pulse" />
            <span className="text-pastel-green text-sm font-mono uppercase tracking-wider">
              All Tests Passed • 7/7
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
