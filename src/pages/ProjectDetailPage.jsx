import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";

export const ProjectDetailPage = ({ setPage }) => {
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
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ background: `url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1600&q=80') center/cover`, height: 400, paddingTop: 68 }} 
      />
      <section style={{ background: BLACK, padding: "60px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }} className="grid-2">
            <div>
              <Reveal x={-20}>
                <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600 }} onClick={() => setPage("projects")}>← Back to Projects</span>
                <div style={{ marginTop: 16, marginBottom: 8 }}>
                  <div className="orange-bar" />
                </div>
                <h2 className="heading-font" style={{ fontSize: 36, fontWeight: 900, textTransform: "uppercase", marginBottom: 16, color: TEXT }}>PROJECT OVERVIEW</h2>
              </Reveal>
              <Reveal delay={0.2} y={20}>
                <p style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 16 }}>
                  The reconstruction of Section II of the Lagos-Ibadan Expressway represents one of the most critical infrastructure upgrades in recent Nigerian history. This 45km stretch serves as the primary artery connecting the commercial hub of Lagos to the rest of the country, handling an estimated 250,000 vehicles daily.
                </p>
                <p style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 32 }}>
                  Gambalt was contracted to deliver a comprehensive overhaul of the existing carriageway, including significant expansion works, structural reinforcements of aging bridges, and the implementation of modern drainage solutions to combat seasonal flooding issues that previously plagued the route.
                </p>
              </Reveal>
              
              <Reveal y={30} delay={0.4}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 28, marginBottom: 32 }}>
                  <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 20, color: TEXT }}>SCOPE OF WORK & CHALLENGES</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
                    <div>
                      <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>🔧 KEY DELIVERABLES</p>
                      {["45km dual carriageway reconstruction", "3 new interchange bridges", "15km of reinforced concrete drainage", "Installation of smart traffic monitoring systems"].map(d => (
                        <div key={d} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <span style={{ color: "#4ade80", fontSize: 12 }}>✓</span>
                          <span style={{ fontSize: 12, color: MUTED }}>{d}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ color: "#60a5fa", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>⚠ MAJOR CONSTRAINTS</p>
                      {["Maintaining traffic flow during construction", "Severe rainy season interruptions", "Navigating heavily populated informal settlements"].map(d => (
                        <div key={d} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <span style={{ color: "#60a5fa", fontSize: 12 }}>●</span>
                          <span style={{ fontSize: 12, color: MUTED }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal x={-20}>
                <h4 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 16, color: TEXT }}>CONSTRUCTION GALLERY</h4>
              </Reveal>
              <motion.div 
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }} 
                className="grid-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" alt="construction" style={{ width: "100%", height: 160, objectFit: "cover" }} 
                />
                <motion.img 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80" alt="construction" style={{ width: "100%", height: 160, objectFit: "cover" }} 
                />
              </motion.div>

              <Reveal x={-20}>
                <div className="orange-bar" />
                <h4 className="heading-font" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", marginBottom: 24, color: TEXT }}>OUTCOMES & IMPACT</h4>
              </Reveal>
              <motion.div 
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }} 
                className="grid-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[["40%", "Reduction in Travel Time"], ["0", "Major Safety Incidents"], ["3 MONTHS", "Delivered Ahead of Schedule"]].map(([n, l]) => (
                  <motion.div key={n} variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20, textAlign: "center" }} whileHover={{ y: -5 }}>
                    <div className="heading-font" style={{ fontSize: 28, fontWeight: 900, color: ORANGE }}>{n}</div>
                    <div style={{ fontSize: 11, color: SUBTLE, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{l}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ color: ORANGE, fontSize: 20 }}>🦺</span>
                  <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>SAFETY & COMPLIANCE</h4>
                </div>
                <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 16 }}>This project adhered strictly to ISO 45001 standards for occupational health and safety.</p>
                {["FMWH Standard Specifications", "Environmental Impact Assessment Passed", "1.2M Safe Man-Hours Achieved"].map(i => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: "#4ade80" }}>✓</span>
                    <span style={{ fontSize: 12, color: MUTED }}>{i}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24, marginBottom: 20 }}>
                <div style={{ color: ORANGE, fontSize: 32 }}>"</div>
                <p style={{ fontSize: 13, color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: 16 }}>Gambalt's execution of Section II demonstrated exceptional engineering pedigree. Their ability to manage complex traffic diversions while maintaining high-quality construction standards was crucial to the project's success.</p>
                <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700 }}>ENGR. O. ADEYEMI</div>
                <div style={{ fontSize: 11, color: SUBTLE }}>Director of Highways, FMWH</div>
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24 }}>
                <div style={{ fontSize: 20, marginBottom: 12 }}>🦺</div>
                <h4 className="heading-font" style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", marginBottom: 8, color: TEXT }}>NEED SIMILAR INFRASTRUCTURE?</h4>
                <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 16 }}>Our team is equipped to handle large-scale road and civil works.</p>
                <motion.button 
                  className="btn-orange" 
                  style={{ width: "100%" }} 
                  onClick={() => setPage("quote")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  REQUEST A QUOTE
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Reveal y={30}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO START YOUR PROJECT?</h2>
            <p style={{ marginBottom: 28, opacity: 0.9 }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
            <button className="btn-black" onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
