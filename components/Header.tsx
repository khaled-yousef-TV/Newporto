"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-4 px-6 md:px-10" 
            : "py-6 px-6 md:py-10 md:px-10"
        }`}
      >
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-black/20" 
            : ""
        }`}>
          
          {/* Logo */}
          <Link href="/" className="group relative">
            <motion.span 
              className="text-lg md:text-xl font-bold tracking-tighter uppercase text-foreground"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative">
                K
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-pastel-purple origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <span className="text-pastel-purple">.</span>
              Yousef
            </motion.span>
          </Link>
          
          {/* Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="relative flex items-center gap-3 group"
          >
            <span className="text-sm uppercase tracking-widest font-medium group-hover:text-pastel-purple transition-colors">
              {isOpen ? "Close" : "Menu"}
            </span>
            
            {/* Hamburger Icon */}
            <div className="relative w-6 h-4 flex flex-col justify-between">
              <motion.span 
                animate={{ 
                  rotate: isOpen ? 45 : 0, 
                  y: isOpen ? 6 : 0,
                  backgroundColor: isOpen ? "var(--color-primary)" : "currentColor"
                }}
                className="w-full h-0.5 bg-current origin-left transition-colors"
              />
              <motion.span 
                animate={{ 
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1
                }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span 
                animate={{ 
                  rotate: isOpen ? -45 : 0, 
                  y: isOpen ? -6 : 0,
                  backgroundColor: isOpen ? "var(--color-primary)" : "currentColor"
                }}
                className="w-full h-0.5 bg-current origin-left transition-colors"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 60px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-background via-background to-pastel-purple/20"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>

            <nav className="h-full flex flex-col justify-center items-center gap-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <Link 
                    href={item.href} 
                    onClick={toggleMenu}
                    className="group relative block py-2"
                  >
                    <span className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-foreground group-hover:text-pastel-purple transition-colors duration-300">
                      {item.name}
                    </span>
                    
                    {/* Hover underline */}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-1 bg-pastel-purple origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Bottom Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-0 right-0 flex justify-between items-center px-10 text-sm"
            >
              <div className="flex gap-6 text-foreground/50">
                <a href="https://github.com/khaled-yousef-TV" target="_blank" className="hover:text-pastel-purple transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/khaled-yousef-b7281510b/" target="_blank" className="hover:text-pastel-purple transition-colors">LinkedIn</a>
              </div>
              <div className="text-foreground/50">
                Vienna (CET)
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
