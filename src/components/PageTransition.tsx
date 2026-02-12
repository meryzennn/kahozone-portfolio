"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

// Wraps route segments with AnimatePresence for smooth page transitions (App Router).
export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <LayoutGroup id="route">
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className={className}
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : -10 }}
          transition={{
            duration: reduce ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </LayoutGroup>
  );
}
