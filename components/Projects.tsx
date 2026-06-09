"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Star, GitBranch, Globe } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/lib/projects";
import { useGitHubStats, LANGUAGE_COLORS, timeAgo } from "@/lib/useGitHubStats";

export default function Projects() {
  const stats = useGitHubStats("khaled-yousef-TV");

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-pastel-green tracking-widest uppercase">
          $ git log --author=khaled
        </span>
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-3">
          Selected <span className="text-pastel-purple">Work</span>
        </h2>
        <p className="text-foreground/50 mt-4 max-w-xl">
          Real projects, live from GitHub — where QA discipline meets AI engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => {
          const repoStats = project.repo ? stats[project.repo] : undefined;
          const repoName = project.repo?.split("/")[1];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <Link href={`/projects/${project.id}`} className="group block h-full">
                <div
                  className="glass rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1"
                  style={{ ["--card-accent" as string]: project.accent }}
                >
                  {/* Visual */}
                  <div
                    className={`relative overflow-hidden ${
                      project.featured ? "aspect-[21/9]" : "aspect-[16/9]"
                    }`}
                  >
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]">
                      <ProjectCard
                        title={project.title}
                        iconName={project.iconName}
                        gradient={project.gradient}
                        accent={project.accent}
                        repoName={repoName}
                        tagline={project.tagline}
                      />
                    </div>
                    {project.live && (
                      <span className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-green/15 border border-pastel-green/30 text-pastel-green text-[11px] font-mono">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-green opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pastel-green" />
                        </span>
                        LIVE
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="card-title text-xl md:text-2xl font-semibold transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-foreground/50 text-sm">{project.category}</p>
                      </div>
                      <ArrowUpRight
                        className="shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                        style={{ color: project.accent }}
                      />
                    </div>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[11px] text-foreground/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Live GitHub stats footer */}
                    <div className="mt-auto pt-3 border-t border-white/5 flex items-center gap-4 font-mono text-[11px] text-foreground/40">
                      {repoStats?.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: LANGUAGE_COLORS[repoStats.language] ?? "#888",
                            }}
                          />
                          {repoStats.language}
                        </span>
                      )}
                      {repoStats && repoStats.stars > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={11} /> {repoStats.stars}
                        </span>
                      )}
                      {repoStats && (
                        <span className="flex items-center gap-1">
                          <GitBranch size={11} /> pushed {timeAgo(repoStats.pushedAt)}
                        </span>
                      )}
                      {project.live && (
                        <span className="flex items-center gap-1 text-pastel-green/70 ml-auto">
                          <Globe size={11} /> fplai.nl
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* All repos link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/khaled-yousef-TV?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-foreground/40 hover:text-pastel-green transition-colors"
        >
          <span className="text-pastel-green">$</span> ls -la github.com/khaled-yousef-TV
          <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}
