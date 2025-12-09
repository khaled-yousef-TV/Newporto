"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-10 bg-neutral-900 text-neutral-200 mt-20">
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
               href="mailto:bettinasosarohl@gmail.com" 
               className="text-xl md:text-2xl border-b border-neutral-600 pb-1 hover:border-white transition-colors"
             >
               bettinasosarohl@gmail.com
             </a>
          </div>

          <p className="text-neutral-500 max-w-sm">
            AI/LLM enthusiast | Cutting-edge tech advocate | Web3 builder | Passionate about using technology to make the world a better place.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between space-y-10">
           <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors"><Twitter /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Github /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin /></Link>
           </div>

           <div className="grid grid-cols-2 gap-8 text-sm text-neutral-500 uppercase tracking-wider">
              <div>
                <h4 className="text-white mb-2">Version</h4>
                <p>2025 © Edition</p>
              </div>
              <div>
                <h4 className="text-white mb-2">Timezone</h4>
                <p>5:2 UK (GMT+1)</p>
              </div>
           </div>
        </div>

      </div>
      
      <div className="mt-20 pt-8 border-t border-neutral-800 flex justify-between text-xs uppercase text-neutral-600">
        <span>Bettina's logo © coded by BettinaSosa</span>
      </div>
    </footer>
  );
}

