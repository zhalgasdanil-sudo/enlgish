import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxTextProps {
  children: string;
  baseVelocity?: number;
}

export function ParallaxText({ children, baseVelocity = 1 }: ParallaxTextProps) {
  const baseX = useTransform(useScroll().scrollY, [0, 1000], [0, baseVelocity * 1000]);

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x: baseX }}
      >
        <span className="block mr-8 text-6xl md:text-8xl font-bold text-slate-800/50">
          {children} {children} {children} {children}
        </span>
      </motion.div>
    </div>
  );
}
