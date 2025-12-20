"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-10 bg-pastel-pink/20 text-foreground mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        <div className="space-y-8 md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none"
          >
            Let&apos;s work <br /> together!
          </motion.h2>
          
          <div>
             <a 
               href="mailto:kyousefju@gmail.com" 
               className="text-xl md:text-2xl border-b border-foreground/30 pb-1 hover:border-pastel-green hover:text-pastel-green transition-colors"
             >
               kyousefju@gmail.com
             </a>
          </div>

          <p className="text-foreground/60 max-w-sm">
            QA Automation Expert | AI Student at JKU | LLM Enthusiast | Selenium & Ranorex Pro.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between space-y-10">
           <div className="flex gap-6">
              <Link href="https://github.com/khaled-yousef-TV" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-purple transition-colors"><Github /></Link>
              <Link href="https://www.linkedin.com/in/khaled-yousef-b7281510b/" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-purple transition-colors"><Linkedin /></Link>
           </div>

           <div className="grid grid-cols-2 gap-8 text-sm text-foreground/60 uppercase tracking-wider">
              <div>
                <h4 className="text-foreground mb-2">Version</h4>
                <p>2025 © Edition</p>
              </div>
              <div>
                <h4 className="text-foreground mb-2">Timezone</h4>
                <p>Vienna (CET/CEST)</p>
              </div>
           </div>
        </div>

      </div>
      
      <div className="mt-20 pt-8 border-t border-foreground/10 flex justify-between text-xs uppercase text-foreground/40">
        <span>© coded by Khaled Yousef</span>
      </div>
    </footer>
  );
}
