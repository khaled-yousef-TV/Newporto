"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Workflow,
  TestTube,
  Sparkles,
  TrendingUp,
  BookOpen,
  LucideIcon,
} from "lucide-react";

interface ProjectCardProps {
  title?: string;
  iconName: string;
  gradient: string; // tailwind gradient stops, e.g. "from-emerald-500/20 ..."
  accent: string; // hex accent color
  repoName?: string; // e.g. "AIFPL"
  tagline?: string;
}

const iconMap: Record<string, LucideIcon> = {
  TestTube,
  Sparkles,
  Bug,
  Workflow,
  TrendingUp,
  BookOpen,
};

export function ProjectCard({ iconName, gradient, accent, repoName, tagline }: ProjectCardProps) {
  const Icon = iconMap[iconName] || TestTube;

  return (
    <div className="relative w-full h-full bg-surface overflow-hidden flex flex-col">
      {/* Accent gradient wash */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Dot matrix pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(${accent} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Terminal title bar */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        {repoName && (
          <span className="ml-3 font-mono text-[11px] text-white/40 truncate">
            ~/{repoName}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-4 p-6">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-5 rounded-2xl"
          style={{ background: `${accent}1a`, color: accent }}
        >
          <Icon size={52} strokeWidth={1.5} />
        </motion.div>
        {tagline && (
          <p className="font-mono text-xs text-white/50 text-center max-w-xs leading-relaxed">
            <span style={{ color: accent }}>$</span> {tagline}
            <span className="cursor-blink" style={{ color: accent }}>▌</span>
          </p>
        )}
      </div>

      {/* Bottom glow */}
      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2/3 h-32 rounded-full blur-3xl opacity-30"
        style={{ background: accent }}
      />
    </div>
  );
}
