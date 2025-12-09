"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <div className="aspect-[3/4] bg-pastel-green/30 rounded-lg overflow-hidden relative border border-pastel-green/50">
             {/* Placeholder for About Image */}
             <div className="absolute inset-0 flex items-center justify-center text-foreground/50">
                Image Placeholder
             </div>
           </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">About Me</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            <p>
              A software engineer with a passion for innovation and cutting-edge technology.
            </p>
            <p>
              Particularly interested in the intersection of art, design, and software. 
              I believe that these disciplines can be combined to create truly transformative experiences.
            </p>
            <p className="text-pastel-purple font-medium">
              Currently the founding full stack software engineer @Catapult a DeFi startup.
            </p>
            <p>
              My projects have received multiple awards in the past, and I am always looking for new and innovative ways to use my skills to make a positive impact on the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
