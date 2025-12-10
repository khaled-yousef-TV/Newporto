"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Bug, Crosshair } from "lucide-react";

export default function HeroText() {
  const [currentTest, setCurrentTest] = useState(-1);
  const [allPassed, setAllPassed] = useState(false);
  const [bugShot, setBugShot] = useState(false);
  
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
            // Bug gets shot on Y
            setTimeout(() => setBugShot(true), 300);
            setTimeout(() => setAllPassed(true), 800);
            return prev;
          }
          return prev + 1;
        });
      }, 400);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center overflow-visible">
        
        {/* QUALITY */}
        <div className="flex relative">
          {letters.map((letter, index) => (
            <div key={index} className="relative">
              <motion.span
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
              
              {/* Bug appears above each letter as it lights up */}
              <AnimatePresence>
                {currentTest === index && !bugShot && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotate: [0, -10, 10, -5, 5, 0]
                    }}
                    exit={{ opacity: 0, scale: 0.5, y: -10 }}
                    transition={{ 
                      duration: 0.3,
                      rotate: { duration: 0.4, ease: "easeInOut" }
                    }}
                    className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 text-red-500"
                  >
                    <Bug size={20} className="md:w-7 md:h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Crosshair and shot effect on Y (last letter) */}
              <AnimatePresence>
                {index === letters.length - 1 && currentTest === index && !bugShot && (
                  <motion.div
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                    className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 text-pastel-green"
                  >
                    <Crosshair size={28} className="md:w-10 md:h-10" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Bug explosion on Y */}
              <AnimatePresence>
                {index === letters.length - 1 && bugShot && !allPassed && (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ 
                      opacity: 0,
                      scale: [1, 1.5, 2],
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2"
                  >
                    <div className="relative">
                      {/* Explosion particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: 0, y: 0, opacity: 1 }}
                          animate={{ 
                            x: Math.cos(i * 60 * Math.PI / 180) * 30,
                            y: Math.sin(i * 60 * Math.PI / 180) * 30,
                            opacity: 0
                          }}
                          transition={{ duration: 0.4 }}
                          className="absolute w-2 h-2 bg-red-500 rounded-full"
                          style={{ left: '50%', top: '50%' }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
