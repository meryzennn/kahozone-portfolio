"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMemo, useRef } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  y?: number;
  layoutId?: string;
};

// Reveals a section on scroll using in-view detection (opacity/transform only).
export function SectionReveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  y = 18,
  layoutId,
}: SectionRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount });

  const variants = useMemo(() => {
    // Shared element transitions dislike extra transform offsets; keep it clean when layoutId is used.
    if (layoutId) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }
    return {
      hidden: { opacity: 0, y: reduce ? 0 : y },
      visible: { opacity: 1, y: 0 },
    };
  }, [layoutId, reduce, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      layoutId={layoutId}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: reduce ? 0 : 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
