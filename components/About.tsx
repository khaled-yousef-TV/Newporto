"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
             <Image 
               src="/profile.jpg"
               alt="Khaled Yousef"
               fill
               className="object-cover"
               priority
             />
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
              A QA Team Lead with a passion for automation, reliability, and seamless user experiences.
            </p>
            <p>
              Particularly interested in the intersection of development and quality assurance.
              I believe that robust testing strategies are the backbone of any successful product.
            </p>
            <p className="text-pastel-green font-medium">
              Currently working as a QA Lead at Teamviewer, ensuring robust software quality and efficient testing cycles.
            </p>
            <p>
              My team has delivered award-winning quality in the past, and I am always looking for new ways to optimize testing pipelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
