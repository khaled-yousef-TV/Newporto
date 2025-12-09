"use client";

import { motion } from "framer-motion";
import { Check, Terminal, ShieldCheck, Bug } from "lucide-react";
import { useEffect, useState } from "react";

export default function QAAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1200);
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
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className={`p-3 rounded-full border-2 ${isActive || isPassed ? "border-pastel-purple bg-pastel-purple/20" : "border-foreground/20"}`}>
               <Icon size={24} />
            </div>
            <span className={`text-xs uppercase tracking-widest font-bold ${isActive || isPassed ? "text-pastel-purple" : "text-foreground/50"}`}>{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

