"use client";

import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 text-foreground">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          Khaled Yousef
        </Link>
        
        <button 
          onClick={toggleMenu} 
          className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-pastel-purple transition-colors"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-pastel-pink text-white flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 items-center">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    href={item.href} 
                    onClick={toggleMenu}
                    className="text-4xl md:text-6xl font-light uppercase tracking-tighter hover:text-pastel-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="absolute bottom-10 left-0 right-0 flex justify-between px-10 text-sm uppercase text-white/80">
               <span>Socials</span>
               <span>Timezone: GMT+1</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
