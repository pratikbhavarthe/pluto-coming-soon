"use client";

import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

type Props = {
  text?: string;
  speed?: number;
  direction?: 1 | -1;
};

export default function SingleMarquee({
  text = "COMING SOON ·",
  speed = 95,
  direction = -1,
}: Props) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const v = useVelocity(scrollY);
  const smooth = useSpring(v, { damping: 40, stiffness: 400, mass: 0.6 });
  const factor = useTransform(smooth, [-1000, 0, 1000], [-2, 0, 2]);

  const dirRef = useRef(direction);

  useAnimationFrame((_, delta) => {
    let moveBy = dirRef.current * (speed * (delta / 1000));
    moveBy += dirRef.current * moveBy * factor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v / 10)}%`);

  // ✅ Using your exact line
  const content = new Array(8).fill("COMING SOON ·").join("  ");

  return (
    <div className="relative w-full overflow-hidden flex items-center">
      <motion.div
        style={{ x }}
        className="whitespace-nowrap will-change-transform"
        aria-hidden
      >
        <span
          className="
            align-middle
            text-[14vw] sm:text-[12vw] md:text-[10vw]
            font-semibold tracking-[-0.035em]
            bg-gradient-to-b from-[#F9BB00] to-[#373737]
            bg-clip-text text-transparent
          "
        >
          {content}
        </span>
      </motion.div>
    </div>
  );
}
