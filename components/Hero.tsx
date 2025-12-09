"use client";

import { motion } from "framer-motion";

import QAAnimation from "./QAAnimation";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 md:px-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pastel-green/20 via-background to-background opacity-70" />
      
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-8 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground"
        >
          Quality <br />
          <span className="font-light italic text-pastel-green">is my craft</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl font-light tracking-wide max-w-2xl text-foreground/80"
        >
          Ensuring perfection in every release
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
        >
           <QAAnimation />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <span className="uppercase text-xs tracking-widest text-foreground/50">Scroll</span>
      </motion.div>
    </section>
  );
}
