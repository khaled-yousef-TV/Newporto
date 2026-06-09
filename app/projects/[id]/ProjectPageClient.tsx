"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, Globe, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import ScrambleText from "@/components/ScrambleText";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

export default function ProjectPageClient({ project }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-15 -z-10"
        style={{ background: project.accent }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 md:px-10 backdrop-blur-md bg-background/60 border-b border-white/5">
        <Link
          href="/#projects"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          cd ..
        </Link>
        <span className="font-mono text-xs text-foreground/30">
          ~/{project.repo?.split("/")[1] ?? project.id}
        </span>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono uppercase tracking-widest text-xs mb-4"
            style={{ color: project.accent }}
          >
            {project.category}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 crt-glow">
            <ScrambleText text={project.title} speed={22} />
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 flex-wrap mt-8"
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-black transition-transform hover:scale-105"
              style={{ background: project.accent }}
            >
              <Globe size={18} />
              Visit Live Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
              View Source
            </a>
          )}
        </motion.div>
      </section>

      {/* Project Visual */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="aspect-video rounded-2xl overflow-hidden relative border border-white/10"
        >
          <ProjectCard
            title={project.title}
            iconName={project.iconName}
            gradient={project.gradient}
            accent={project.accent}
            repoName={project.repo?.split("/")[1]}
            tagline={project.tagline}
          />
        </motion.div>
      </section>

      <div className="px-6 md:px-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 pb-24">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="lg:col-span-2"
        >
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-6">
            ## Key Features
          </h2>
          <div className="space-y-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.06 }}
                className="flex items-start gap-3 p-4 glass rounded-xl"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: project.accent }}
                />
                <span className="text-foreground/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-6">
            ## Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 glass rounded-lg font-mono text-sm text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
