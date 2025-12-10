"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Terminal, Brain, Cpu, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const stats = [
    { value: "5+", label: "Years QA" },
    { value: "∞", label: "Bugs Caught" },
    { value: "AI", label: "@ JKU" },
  ];

  const skills = [
    { icon: Terminal, label: "QA Automation", description: "Selenium, Ranorex" },
    { icon: Brain, label: "AI & LLMs", description: "GPT, LangChain" },
    { icon: Code, label: "Test Frameworks", description: "Java, Python" },
    { icon: Cpu, label: "CI/CD", description: "GitHub Actions" },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-pastel-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pastel-green/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-pastel-purple text-sm uppercase tracking-widest">Get to know me</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-2">
            About
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Image Container */}
            <div className="relative group mb-8">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10" />
              <div className="absolute -inset-8 border border-white/5 rounded-3xl -z-20" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 z-20 bg-pastel-green text-black text-xs font-bold px-3 py-1.5 rounded-full"
              >
                <span className="flex items-center gap-1">
                  <Zap size={12} /> Available
                </span>
              </motion.div>

              {/* Main Image */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <Image 
                  src="/profile.jpg"
                  alt="Khaled Yousef"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/5"
                >
                  <div className="text-2xl md:text-3xl font-bold text-pastel-purple">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Bio Text */}
            <div className="space-y-6 mb-12">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
                <span className="text-pastel-green font-medium">QA Lead</span> at TeamViewer by day,{" "}
                <span className="text-pastel-purple font-medium">AI Student</span> at JKU at other parts of the day.
              </p>
              
              <p className="text-lg text-foreground/60 leading-relaxed">
                I bridge the gap between software quality and artificial intelligence. 
                My obsession? Building systems that are not just bug-free, but intelligent.
                Currently diving deep into Large Language Models while ensuring 
                top-notch quality for enterprise software.
              </p>

              {/* Highlighted Quote */}
              <div className="relative pl-6 border-l-2 border-pastel-purple/50">
                <p className="text-foreground/70 italic">
                  "The best bug is the one that never reaches production."
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pastel-purple/30 hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pastel-purple/20 rounded-lg group-hover:bg-pastel-purple/30 transition-colors">
                      <skill.icon size={20} className="text-pastel-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{skill.label}</h4>
                      <p className="text-sm text-foreground/50">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-pastel-purple hover:gap-4 transition-all group"
              >
                <span className="text-sm uppercase tracking-widest font-medium">Let's work together</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
