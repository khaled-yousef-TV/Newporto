"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Project One", category: "DeFi Platform" },
  { id: 2, title: "Project Two", category: "Interactive Art" },
  { id: 3, title: "Project Three", category: "Web3 Integration" },
  { id: 4, title: "Project Four", category: "Experimental UI" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Selected Work</h2>
        <Link href="#gallery" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-neutral-400 transition-colors">
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
            <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden relative mb-4">
               <div className="absolute inset-0 bg-neutral-800 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-neutral-600">
                  Project Image
               </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-medium">{project.title}</h3>
                <p className="text-neutral-500">{project.category}</p>
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 md:hidden flex justify-center">
         <Link href="#gallery" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-neutral-400 transition-colors">
          View All <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

