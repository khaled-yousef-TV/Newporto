"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Code, Terminal, Brain, Cpu } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skills = [
    { icon: Terminal, label: "QA Automation", color: "text-pastel-green" },
    { icon: Brain, label: "AI & LLMs", color: "text-pastel-purple" },
    { icon: Code, label: "Selenium / Ranorex", color: "text-pastel-pink" },
    { icon: Cpu, label: "JKU Student", color: "text-pastel-lime" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section with "Glitch" or "Tech" Border Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
           <div className="absolute -inset-1 bg-gradient-to-r from-pastel-green to-pastel-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
           <div className="aspect-[3/4] bg-dark-surface rounded-lg overflow-hidden relative border border-white/10">
             {/* Using standard img tag as fallback if Next.js Image fails, but keeping Next.js Image for optimization */}
             <div className="relative w-full h-full">
               <Image 
                 src="/Newporto/profile.jpg" // Try with base path if on GitHub Pages project site
                 alt="Khaled Yousef"
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                 onError={(e) => {
                   // Fallback for local dev or if path is different
                   const target = e.target as HTMLImageElement;
                   if (target.src.indexOf('Newporto') > -1) {
                      target.src = "/profile.jpg";
                   }
                 }}
                 priority
               />
             </div>
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
             
             <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 text-xs uppercase tracking-widest text-pastel-green font-bold">
                  <span>● Available for work</span>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Text Section - Animated & Styled */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground">
            About <span className="text-pastel-green">Me</span>
          </motion.h2>
          
          <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
            <motion.p variants={itemVariants} className="border-l-2 border-pastel-green pl-4">
              <span className="text-white font-medium">QA Lead @ Teamviewer</span> by day, <span className="text-pastel-purple font-medium">AI Student @ JKU</span> at other parts of the day.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              I bridge the gap between <strong>software quality</strong> and <strong>artificial intelligence</strong>. My obsession? Building systems that are not just bug-free, but intelligent.
            </motion.p>

            <motion.p variants={itemVariants}>
               Currently diving deep into <strong>Large Language Models</strong> while ensuring award-winning quality for enterprise software.
            </motion.p>
          </div>

          {/* Tech Stack Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
            {skills.map((skill) => (
              <div key={skill.label} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <skill.icon size={20} className={skill.color} />
                <span className="text-sm uppercase tracking-wider font-medium">{skill.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
