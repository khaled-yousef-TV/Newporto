"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroText from "./HeroText";
import MatrixRain from "./MatrixRain";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // content drifts up and fades as you scroll past the hero
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rainOpacity = useTransform(scrollYProgress, [0, 0.6], [0.16, 0]);

  return (
    <section ref={ref} className="h-screen w-full flex flex-col justify-center items-center px-6 md:px-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-background" />
      {/* Matrix digital rain */}
      <motion.div style={{ opacity: rainOpacity }} className="absolute inset-0 -z-10">
        <MatrixRain className="w-full h-full" />
        {/* keep the center readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_var(--background)_0%,_transparent_100%)]" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_var(--tw-gradient-stops))] from-pastel-green/8 via-transparent to-transparent" />
      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pastel-green/8 rounded-full blur-[120px] -z-10 animate-float-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pastel-purple/8 rounded-full blur-[120px] -z-10 animate-float-slow" style={{ animationDelay: "-6s" }} />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex flex-col items-center text-center space-y-6 md:space-y-10 z-10">
        
        <HeroText />

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 4.7, duration: 0.8 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-pastel-purple/50 to-transparent"
          />
          
          <p className="text-lg md:text-2xl italic text-foreground/60 tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
            I build AI products — and the frameworks that test them
          </p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 4.9, duration: 0.8 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-pastel-purple/50 to-transparent"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5 }}
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
      </motion.div>
    </section>
  );
}
