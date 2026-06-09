"use client";

import { useEffect, useRef } from "react";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノ01<>/{}[]=+*#$";

/**
 * Classic Matrix digital rain on a canvas. Runs at ~18fps for that
 * chunky terminal feel, pauses when offscreen, and respects
 * prefers-reduced-motion.
 */
export default function MatrixRain({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 14;
    let drops: number[] = [];
    let raf = 0;
    let last = 0;
    let visible = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.floor(canvas.offsetWidth / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -60);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || t - last < 55) return; // ~18fps
      last = t;

      // fade trail
      ctx.fillStyle = "rgba(5, 8, 5, 0.12)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // head glyph brighter, trail dimmer
        ctx.fillStyle = Math.random() > 0.95 ? "#aaffd4" : "rgba(0, 255, 136, 0.55)";
        ctx.fillText(ch, x, y);

        if (y > canvas.offsetHeight && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
        }
        drops[i]++;
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
