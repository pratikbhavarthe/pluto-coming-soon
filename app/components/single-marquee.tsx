"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  text?: string;
  speed?: number;       // px/sec
  direction?: 1 | -1;   // -1 = left, 1 = right
};

export default function SingleMarquee({
  text = "COMING SOON \u00B7",
  speed = 55,
  direction = -1,
}: Props) {
  const x = useMotionValue(0);
  const aRef = useRef<HTMLSpanElement>(null);
  const [w, setW] = useState(0);

  // measure exact width of one copy
  useLayoutEffect(() => {
    if (!aRef.current) return;
    const measure = () => setW(aRef.current!.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(aRef.current);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    const base = direction * (speed * (delta / 1000));
    let next = x.get() + base;

    if (w > 0) {
      if (direction === -1 && next <= -w) next += w;
      if (direction === 1 && next >=  w) next -= w;
    }
    x.set(next);
  });

  // vertical gradient: bottom primary #373737 → top accent #F9BB00
  const textClass =
    "whitespace-nowrap leading-none font-medium tracking-tight " +
    "text-[clamp(44px,10vw,180px)] " +
    "bg-gradient-to-t from-[#373737] to-[#F9BB00] bg-clip-text text-transparent";

  const GAP = 64;

  // EXACT requested content line with middle dot U+00B7
  const content = new Array(8).fill("COMING SOON \u00B7").join("  ");

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ x }} className="flex will-change-transform" aria-hidden>
        <span ref={aRef} className={textClass} style={{ paddingRight: GAP }}>
          {content}
        </span>
        <span className={textClass} style={{ paddingRight: GAP }}>
          {content}
        </span>
      </motion.div>
    </div>
  );
}
