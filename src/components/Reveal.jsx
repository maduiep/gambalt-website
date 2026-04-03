import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({ children, width = "100%", delay = 0, y = 30, x = 0, scale = 1, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ width, position: "relative" }}
    >
      {children}
    </motion.div>
  );
};
