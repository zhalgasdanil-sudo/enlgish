import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface GlowTextProps {
  children: string;
  className?: string;
  intensity?: number;
}

export function GlowText({ children, className = '', intensity = 0.3 }: GlowTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const textShadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      '0 0 0px rgba(34, 211, 238, 0)',
      `0 0 20px rgba(34, 211, 238, ${intensity}), 0 0 40px rgba(59, 130, 246, ${intensity * 0.5})`,
      '0 0 0px rgba(34, 211, 238, 0)'
    ]
  );

  return (
    <motion.div
      ref={ref}
      style={{ textShadow }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
