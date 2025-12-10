"use client";

import { motion } from "framer-motion";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 md:px-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pastel-purple/10 via-background to-background" />
      
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-10 z-10">
        
        <HeroText />

        {/* Tagline with elegant styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="relative"
        >
          {/* Decorative line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-pastel-purple/50 to-transparent"
          />
          
          <p className="text-lg md:text-2xl italic text-foreground/60 tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ensuring perfection in every release
          </p>
          
          {/* Decorative line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.4, duration: 0.6 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-pastel-purple/50 to-transparent"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-foreground/30"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
