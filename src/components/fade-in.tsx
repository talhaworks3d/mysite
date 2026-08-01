"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  yOffset = 16,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Crisp linear/cubic ease
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
