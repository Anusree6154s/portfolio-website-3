"use client"; // For Next.js 13+ App Router

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

const SmoothScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 10,
  });

  const yTransform = useTransform(smoothScroll, [0, 1], ["0%", "-5%"]); // Adjust easing effect

  return (
    <motion.div style={{ y: yTransform, willChange: "transform" }}>
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
