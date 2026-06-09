"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: hidden ? -100 : 0
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/60 border-b border-white/5" : ""
      }`}
    >
      <div className="flex justify-between items-center px-6 py-5 md:px-10 md:py-6">
        
        {/* Logo - Just initials */}
        <Link 
          href="/" 
          className="text-xs tracking-[0.3em] text-foreground/40 hover:text-foreground transition-colors uppercase"
        >
          Khaled Yousef
        </Link>
        
        {/* Simple Navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-xs tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors uppercase"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="text-xs tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors uppercase"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-xs tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors uppercase"
          >
            Contact
          </Link>
          <a
            href="https://github.com/khaled-yousef-TV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/40 hover:text-pastel-green transition-colors"
          >
            <Github size={16} />
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
