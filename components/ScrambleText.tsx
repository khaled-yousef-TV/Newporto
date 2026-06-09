"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#$%&01";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** ms per frame — lower is faster */
  speed?: number;
  /** letters revealed per frame */
  step?: number;
}

/**
 * Decrypts text from random glyphs when scrolled into view.
 * Renders the real text on the server / first paint, so SEO and
 * no-JS visitors are unaffected.
 */
export default function ScrambleText({
  text,
  className,
  speed = 28,
  step = 0.5,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let revealed = 0;
    const id = setInterval(() => {
      revealed += step;
      if (revealed >= text.length) {
        setDisplay(text);
        clearInterval(id);
        return;
      }
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " " || i < revealed) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed, step]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
