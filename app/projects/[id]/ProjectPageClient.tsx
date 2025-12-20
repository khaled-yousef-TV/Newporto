"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  iconName: string;
  tech: string[];
  github?: string;
  live?: string;
  features: string[];
}

interface Props {
  project: Project;
}

export default function ProjectPageClient({ project }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-pastel-purple transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-pastel-purple uppercase tracking-widest text-sm mb-4">{project.category}</p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">{project.title}</h1>
          <p className="text-xl text-foreground/70 max-w-2xl">{project.description}</p>
        </motion.div>
      </section>

      {/* Project Visual */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="aspect-video rounded-2xl overflow-hidden relative"
        >
          <ProjectCard 
            title={project.title}
            iconName={project.iconName}
            gradient={project.gradient}
          />
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5"
              >
                <span className="text-pastel-green mt-1">●</span>
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Links */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 flex-wrap"
        >
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-pastel-purple text-black rounded-full font-medium hover:bg-pastel-purple/90 transition-colors"
            >
              <Globe size={20} />
              Live Site
            </Link>
          )}
          {project.github && (
            <Link 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </Link>
          )}
        </motion.div>
      </section>
    </main>
  );
}
