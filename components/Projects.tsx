"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground">
          Selected <span className="text-pastel-purple">Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Link href={`/projects/${project.id}`} className="group block">
              <div className="aspect-video rounded-lg overflow-hidden relative mb-4">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <ProjectCard 
                    title={project.title}
                    iconName={project.iconName}
                    gradient={project.gradient}
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium text-foreground group-hover:text-pastel-purple transition-colors">{project.title}</h3>
                  <p className="text-foreground/60">{project.category}</p>
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-pastel-purple" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
