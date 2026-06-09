"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin phosphor progress bar pinned to the top — like a test run filling up. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-pastel-green via-pastel-lime to-pastel-purple"
    />
  );
}
