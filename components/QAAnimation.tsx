"use client";

import { motion } from "framer-motion";
import { Check, Terminal, ShieldCheck, Bug } from "lucide-react";
import { useEffect, useState } from "react";

export default function QAAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const checks = [
    { label: "Unit Tests", icon: Terminal },
    { label: "Integration", icon: Bug },
    { label: "Performance", icon: ShieldCheck },
    { label: "Production Ready", icon: Check },
  ];

  return (
    <div className="flex gap-4 md:gap-8 mt-12 opacity-80">
      {checks.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === step;
        const isPassed = index < step;

        return (
          <motion.div
            key={item.label}
            animate={{
              scale: isActive ? 1.1 : 1,
              opacity: isActive || isPassed ? 1 : 0.3,
              color: isActive || isPassed ? "#B5EAD7" : "#4A4A4A" // Pastel Green for active/passed
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className={`p-3 rounded-full border-2 ${isActive || isPassed ? "border-pastel-green bg-pastel-green/20" : "border-foreground/20"}`}>
               <Icon size={24} />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

