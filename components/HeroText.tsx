"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, Crosshair, Check } from "lucide-react";

export default function HeroText() {
  const [bugCaught, setBugCaught] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center relative">
        
        {/* The Word QUALITY */}
        <div className="relative">
            {/* The Bug */}
            <AnimatePresence>
                {!bugCaught && (
                    <motion.div
                        initial={{ left: "0%", opacity: 0 }}
                        animate={{ 
                            left: ["10%", "60%", "40%", "80%"], 
                            opacity: 1,
                            y: [0, -5, 0, -5] // Wiggle effect
                        }}
                        exit={{ scale: 0, opacity: 0, rotate: 180 }}
                        transition={{ duration: 3, times: [0, 0.4, 0.7, 1] }}
                        className="absolute -top-6 md:-top-10 text-red-500 z-20"
                    >
                        <Bug className="w-8 h-8 md:w-12 md:h-12" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Crosshair Hunter */}
            <AnimatePresence>
                {!bugCaught && (
                    <motion.div
                        initial={{ left: "0%", opacity: 0, scale: 0.5 }}
                        animate={{ 
                            left: "80%", 
                            opacity: [0, 1, 1], 
                            scale: 1 
                        }}
                        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
                        onAnimationComplete={() => setBugCaught(true)}
                        className="absolute -top-8 md:-top-12 text-pastel-green z-30 pointer-events-none"
                    >
                        <Crosshair className="w-12 h-12 md:w-16 md:h-16" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Text */}
            <motion.span
                initial={{ color: "#ededed" }}
                animate={{ 
                    color: bugCaught ? "var(--color-primary)" : "#ededed", // Neon Green when caught
                }}
                className="relative z-10 block"
            >
                Quality
            </motion.span>
            
            {/* Glitch Effect when bug is present */}
            {!bugCaught && (
                <motion.span 
                    animate={{ opacity: [0, 0.5, 0], x: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                    className="absolute inset-0 text-red-500 z-0 opacity-0 mix-blend-difference"
                >
                    Quality
                </motion.span>
            )}
        </div>

        {/* Subtitle */}
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-light italic text-pastel-purple mt-2"
        >
            is my craft
        </motion.span>
      </h1>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: bugCaught ? 1 : 0, scale: bugCaught ? 1 : 0.8 }}
        className="mt-4 flex items-center gap-2 text-pastel-green text-sm font-mono tracking-widest uppercase"
      >
        <Check size={16} />
        <span>No Bugs Found</span>
      </motion.div>
    </div>
  );
}

