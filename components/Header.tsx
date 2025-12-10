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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className={`flex justify-between items-center max-w-7xl mx-auto transition-all duration-300 ${
          scrolled 
            ? "bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/5" 
            : ""
        }`}>
          
          {/* Logo - Simple initials */}
          <Link href="/" className="group">
            <span className="text-sm font-medium tracking-wider text-foreground/70 hover:text-foreground transition-colors">
              KY
            </span>
          </Link>
          
          {/* Menu Button - Minimal */}
          <button 
            onClick={toggleMenu} 
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <div className="flex gap-1">
              <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-1 h-1 rounded-full bg-current"
              />
              <motion.span 
                className="w-1 h-1 rounded-full bg-current"
              />
              <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-1 h-1 rounded-full bg-current"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background border-l border-white/10"
            >
              {/* Close Button */}
              <button 
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <nav className="h-full flex flex-col justify-center px-10">
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link 
                        href={item.href} 
                        onClick={toggleMenu}
                        className="block py-3 text-3xl font-light text-foreground/70 hover:text-foreground hover:pl-2 transition-all"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-16 pt-8 border-t border-white/10 space-y-4"
                >
                  <div className="flex gap-4 text-sm text-foreground/40">
                    <a href="https://github.com/khaled-yousef-TV" target="_blank" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/khaled-yousef-b7281510b/" target="_blank" className="hover:text-foreground transition-colors">LinkedIn</a>
                  </div>
                  <p className="text-xs text-foreground/30">
                    kyousefju@gmail.com
                  </p>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
