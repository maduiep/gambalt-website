import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";

export const ThankYouPage = ({ setPage }) => (
  <div style={{ background: BLACK, minHeight: "100vh", paddingTop: 68, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ background: CARD, border: `1px solid ${BORDER}`, padding: "60px 48px", borderRadius: 12, textAlign: "center", maxWidth: 520 }}
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        style={{ width: 72, height: 72, background: "rgba(232,84,26,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", fontSize: 28 }}
      >
        ✓
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="heading-font" style={{ fontSize: 56, fontWeight: 900, marginBottom: 16, color: TEXT }}
      >
        Thank You!
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: 15, color: SUBTLE, lineHeight: 1.7, marginBottom: 32 }}
      >
        Your request has been received. We'll be in touch soon.
      </motion.p>
      <motion.button 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="btn-orange" 
        style={{ padding: "14px 36px" }} 
        onClick={() => setPage("home")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>
    </motion.div>
  </div>
);
