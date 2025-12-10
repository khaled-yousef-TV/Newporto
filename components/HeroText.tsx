"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Bug } from "lucide-react";

export default function HeroText() {
  const [currentTest, setCurrentTest] = useState(-1);
  const [allPassed, setAllPassed] = useState(false);
  const [bugVisible, setBugVisible] = useState(false);
  const [bugFalling, setBugFalling] = useState(false);
  
  const letters = "QUALITY".split("");
  const testNames = [
    "linting",
    "type_check", 
    "unit_tests",
    "integration_tests",
    "api_tests",
    "ui_tests",
    "load_tests"
  ];

  // Calculate "is my craft" opacity based on progress (0.05 to 1)
  const craftOpacity = Math.max(0.05, (currentTest + 1) / letters.length);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentTest(prev => {
          if (prev >= letters.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setAllPassed(true);
              setBugVisible(true);
              // Bug crawls for 1.2s, then falls
              setTimeout(() => setBugFalling(true), 1200);
              // Hide bug after falling animation
              setTimeout(() => setBugVisible(false), 1800);
            }, 500);
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
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center overflow-hidden">
        
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

        {/* IS MY CRAFT - brightness tied to progress + flicker when complete */}
        <div className="relative">
          <motion.div 
            animate={{ 
              opacity: allPassed 
                ? [1, 0.6, 1, 1, 0.7, 1, 1, 1, 0.8, 1]
                : craftOpacity,
              filter: allPassed ? "blur(0px)" : `blur(${Math.max(0, 2 - (currentTest + 1) * 0.3)}px)`
            }}
            transition={allPassed 
              ? { duration: 1.5, times: [0, 0.05, 0.1, 0.3, 0.35, 0.4, 0.6, 0.8, 0.85, 1], ease: "linear" }
              : { duration: 0.3 }
            }
            className="font-light italic text-pastel-purple pr-4"
          >
            is my craft
          </motion.div>
          
          {/* Bug crawling through during flicker, then falling off */}
          <AnimatePresence>
            {bugVisible && (
              <motion.div
                initial={{ left: "-5%", opacity: 0, rotate: 0, y: 0 }}
                animate={bugFalling ? {
                  y: [0, 20, 80, 200],
                  rotate: [0, 45, 120, 200],
                  opacity: [1, 1, 0.5, 0],
                  left: "105%"
                } : { 
                  left: ["0%", "35%", "70%", "105%"],
                  opacity: [0, 1, 1, 1],
                  rotate: [0, 8, -8, 0],
                  y: [0, -3, 3, 0]
                }}
                transition={bugFalling ? {
                  duration: 0.5,
                  ease: "easeIn"
                } : { 
                  duration: 1.2,
                  times: [0, 0.3, 0.6, 1],
                  ease: "linear"
                }}
                className="absolute top-1/2 -translate-y-1/2 text-red-500"
              >
                <Bug size={18} className="md:w-5 md:h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </h1>

      {/* 7 Test Steps - synced with letters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 font-mono text-xs space-y-1"
      >
        {testNames.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: currentTest >= index ? 1 : 0.2,
              x: currentTest >= index ? 0 : -10
            }}
            transition={{ duration: 0.2 }}
            className={`flex items-center gap-3 ${currentTest >= index ? 'text-pastel-green' : 'text-foreground/20'}`}
          >
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
              currentTest >= index 
                ? 'border-pastel-green bg-pastel-green/20' 
                : 'border-foreground/20'
            }`}>
              {currentTest >= index && <Check size={10} strokeWidth={3} />}
            </div>
            <span className="text-foreground/50 w-32">{name}</span>
            {currentTest >= index && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-pastel-green text-[10px] font-bold"
              >
                PASS
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
