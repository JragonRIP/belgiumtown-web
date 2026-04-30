"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const easeLux = [0.22, 1, 0.36, 1] as const;

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px", amount: 0.12 }}
      transition={{ duration: 0.68, ease: easeLux }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
