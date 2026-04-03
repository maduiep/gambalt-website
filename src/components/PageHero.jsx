import React from "react";
import { motion } from "framer-motion";
import { ORANGE, TEXT, MUTED } from "../theme";

export const PageHero = ({ tag, title, accent, subtitle, img }) => (
  <section style={{ position: "relative", overflow: "hidden" }}>
    <motion.div 
      initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
      animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100%), url('${img}') center/cover no-repeat`,
        minHeight: 420, paddingTop: 68, display: "flex", alignItems: "flex-end", paddingBottom: 64
      }}
    >
      <div className="container">
        {tag && (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="orange-tag" 
            style={{ marginBottom: 16 }}
          >
            {tag}
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-font" 
          style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 16, textTransform: "uppercase", color: "#fff" }}
        >
          {title} {accent && <span style={{ color: ORANGE }}>{accent}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontSize: 16, color: MUTED, maxWidth: 560, lineHeight: 1.6 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  </section>
);
