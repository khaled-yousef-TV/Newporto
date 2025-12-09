"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Project One", category: "DeFi Platform", color: "bg-pastel-pink" },
  { id: 2, title: "Project Two", category: "Interactive Art", color: "bg-pastel-green" },
  { id: 3, title: "Project Three", category: "Web3 Integration", color: "bg-pastel-purple" },
  { id: 4, title: "Project Four", category: "Experimental UI", color: "bg-pastel-lime" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground">Selected Work</h2>
        <Link href="#gallery" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-pastel-purple transition-colors text-foreground/70">
          View All <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-video ${project.color} rounded-lg overflow-hidden relative mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
               <div className="absolute inset-0 flex items-center justify-center text-foreground/60">
                  Project Image
               </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-medium text-foreground">{project.title}</h3>
                <p className="text-foreground/60">{project.category}</p>
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 md:hidden flex justify-center">
         <Link href="#gallery" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-pastel-purple transition-colors text-foreground/70">
          View All <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
