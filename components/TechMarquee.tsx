"use client";

const TECH = [
  "Python",
  "TypeScript",
  "Selenium",
  "FastAPI",
  "React",
  "Claude API",
  "Gemini",
  "LangChain",
  "DeepEval",
  "PostgreSQL",
  "Java",
  "Pytest",
  "Ranorex",
  "GitLab CI",
  "Next.js",
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-5 group select-none">
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...TECH, ...TECH].map((t, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-sm text-foreground/40 hover:text-pastel-green transition-colors"
          >
            <span className="text-pastel-green/50 mx-6">▮</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
