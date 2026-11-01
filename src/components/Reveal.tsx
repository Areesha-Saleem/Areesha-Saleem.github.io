import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  from?: "up" | "left" | "right";
  className?: string;
}

const offsets = {
  up: { x: 0, y: 32 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
} as const;

/** Fades + slides content in once when it scrolls into view. */
export default function Reveal({ children, delay = 0, from = "up", className }: Props) {
  const o = offsets[from];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
