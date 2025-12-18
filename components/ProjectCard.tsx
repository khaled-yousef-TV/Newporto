"use client";

import { motion } from "framer-motion";
import { Bug, Workflow, TestTube, Sparkles, TrendingUp, LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  iconName: string;
  gradient: string;
}

const iconMap: Record<string, LucideIcon> = {
  TestTube,
  Sparkles,
  Bug,
  Workflow,
  TrendingUp,
};

export function ProjectCard({ title, iconName, gradient }: ProjectCardProps) {
  const Icon = iconMap[iconName] || TestTube;
  
  return (
    <div className={`relative w-full h-full ${gradient} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80"
      >
        <Icon size={80} />
      </motion.div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Corner Accent */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute top-4 right-8 w-1 h-1 bg-white/60 rounded-full" />
    </div>
  );
}
