"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroText() {
  const [currentTest, setCurrentTest] = useState(-1);
  const [allPassed, setAllPassed] = useState(false);
  
  const letters = "QUALITY".split("");

  // Calculate "is my craft" opacity based on progress (0.05 to 1)
  const craftOpacity = Math.max(0.05, (currentTest + 1) / letters.length);

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

        {/* IS MY CRAFT - brightness tied to progress + flicker when complete */}
        <motion.span 
          animate={{ 
            opacity: allPassed 
              ? [1, 0.7, 1, 0.85, 1] // Flicker effect
              : craftOpacity,
            filter: allPassed ? "blur(0px)" : `blur(${Math.max(0, 2 - (currentTest + 1) * 0.3)}px)`
          }}
          transition={allPassed 
            ? { duration: 0.3, times: [0, 0.2, 0.4, 0.7, 1] }
            : { duration: 0.3 }
          }
          className="font-light italic text-pastel-purple"
        >
          is my craft
        </motion.span>
      </h1>
    </div>
  );
}
