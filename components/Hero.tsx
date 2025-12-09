"use client";

import { motion } from "framer-motion";
import QAAnimation from "./QAAnimation";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 md:px-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pastel-purple/20 via-background to-background" />
      
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-8 z-10">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground flex flex-col items-center">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Quality
          </motion.span>
          <motion.span 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-light italic text-pastel-purple"
          >
            is my craft
          </motion.span>
        </h1>

        <motion.p 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-xl md:text-3xl font-light tracking-wide max-w-2xl text-foreground/80"
        >
          Ensuring perfection in every release
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 0.5 }}
        >
           <QAAnimation />
        </motion.div>
      </div>
    </section>
  );
}
