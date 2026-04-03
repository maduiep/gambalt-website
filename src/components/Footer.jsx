import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Logo } from "../components/Logo";
import { Reveal } from "../components/Reveal";

export const Footer = ({ setPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="footer">
      <div className="container" style={{ padding: "60px 32px 32px" }}>
        <motion.div 
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 40, marginBottom: 48 }}
          className="grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Logo onClick={() => setPage("home")} />
            <p style={{ marginTop: 16, fontSize: 13, color: SUBTLE, lineHeight: 1.7, maxWidth: 260 }}>
              Premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. Built on precision, powered by heavy machinery.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["in", "𝕏", "f"].map(s => (
                <motion.div 
                  key={s} 
                  style={{ width: 34, height: 34, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: MUTED, cursor: "pointer" }}
                  whileHover={{ scale: 1.1, borderColor: ORANGE, color: ORANGE }}
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="heading-font" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, color: TEXT }}>Company</p>
            {[["About Us", "about"], ["Our Projects", "projects"], ["How It Works", "how-it-works"], ["Heavy Machinery Fleet", "about"], ["Contact Us", "contact"]].map(([l, p]) => (
              <motion.p 
                key={l} 
                style={{ fontSize: 13, color: SUBTLE, marginBottom: 10, cursor: "pointer" }}
                whileHover={{ x: 5, color: ORANGE }}
                onClick={() => setPage(p)}
              >
                › {l}
              </motion.p>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="heading-font" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, color: TEXT }}>Core Services</p>
            {["Road Construction", "Commercial Structures", "Earthworks & Excavation", "Bridge Engineering", "Project Management"].map(s => (
              <motion.p 
                key={s} 
                style={{ fontSize: 13, color: SUBTLE, marginBottom: 10, cursor: "pointer" }}
                whileHover={{ x: 5, color: ORANGE }}
                onClick={() => setPage("services")}
              >
                › {s}
              </motion.p>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="heading-font" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, color: TEXT }}>Head Office</p>
            <div style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 8 }}>📍 No. 4 Bama Close, off Gwari Avenue,<br/>2nd Floor, Suite A8, Barnawa,<br/>Kaduna State, Nigeria</p>
              <p style={{ marginBottom: 8 }}>📞 +234 (0) 802 854 2972</p>
              <p style={{ marginBottom: 8 }}>📞 +234 (0) 901 234 5678</p>
              <p style={{ marginBottom: 4 }}>✉ info@gambalt.com</p>
              <p>✉ quotes@gambalt.com</p>
            </div>
          </motion.div>
        </motion.div>
        
        <Reveal y={10} delay={0.4}>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontSize: 12, color: SUBTLE }}>© 2025 Gambalt Civil Engineering Consultancy. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy Policy", "Terms of Service", "Safety Policy"].map(t => (
                <span key={t} style={{ fontSize: 12, color: SUBTLE, cursor: "pointer" }}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
