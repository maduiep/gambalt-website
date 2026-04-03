import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";

export const ServiceDetailPage = ({ setPage }) => {
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
      <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80') center/cover`, minHeight: 400, display: "flex", alignItems: "flex-end", paddingBottom: 48, paddingTop: 68 }} className="blur-in">
        <div className="container">
          <Reveal x={-20}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600 }} onClick={() => setPage("services")}>← Back to Services</span>
              <span style={{ color: MUTED }}>|</span>
              <span className="tag-orange">INFRASTRUCTURE</span>
            </div>
            <h1 className="heading-font" style={{ fontSize: 64, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, color: "#fff" }}>
              ROAD CONSTRUCTION<br /><span style={{ color: ORANGE }}>& PAVING</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ marginTop: 16, fontSize: 15, color: "#ccc", maxWidth: 500 }}>Delivering high-durability road networks designed to withstand heavy industrial traffic and extreme weather conditions. We focus on long-term structural integrity and seamless project execution.</p>
            <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
              <button className="btn-orange" onClick={() => setPage("quote")}>REQUEST A CONSULTATION</button>
              <button className="btn-outline">VIEW DELIVERABLES</button>
            </div>
          </Reveal>
        </div>
      </div>

      <section style={{ background: BLACK, padding: "60px 0" }}>
        <div className="container">
          <Reveal x={-20}>
            <h2 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 36, textTransform: "uppercase", color: TEXT, marginBottom: 24 }}>
              Engineering Assessment & Planning
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 700 }}>We conduct in-depth assessments with GIS managers and municipal planners on structural load parameters, load assessment, compliance needs, and environmental factors, including an in-depth analysis on quality controls and vetting requirements.</p>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} 
            className="grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              ["Land area regularization improvement through adherence to force calibration", "60%"], 
              ["The market opens to follow-on quote information partner or a third new project", "70%"], 
              ["Preparation in hours needed to take the incremental start-up time", "56.6%"], 
              ["Compliance with licensed Ministry of Public Maintaining government vessel to main projects", "100%"]
            ].map(([l, v]) => (
              <motion.div key={l} style={{ background: DARK, padding: 20, border: `1px solid ${BORDER}` }} variants={itemVariants}>
                <p style={{ fontSize: 13, color: SUBTLE, marginBottom: 12 }}>{l}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, height: 6, background: BORDER, borderRadius: 3 }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: v }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                      viewport={{ once: true }}
                      style={{ height: "100%", background: ORANGE, borderRadius: 3 }} 
                    />
                  </div>
                  <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, color: TEXT, fontSize: 16 }}>{v}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: DARK }}>
        <div className="container">
          <Reveal x={-20}>
            <div className="section-tag">SCOPE & DELIVERABLES</div>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 8, color: TEXT }}>
              SCOPE & <span style={{ color: ORANGE }}>DELIVERABLES</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, marginBottom: 40 }}>A comprehensive overview of our road construction services, managed by delivery phase.</p>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              ["Site Preparation", ["Clearing & grubbing", "Soil survey & testing", "Subgrade preparation", "Compaction equipment"]], 
              ["Construction", ["Asphalt mixing & laying", "Pavement marking", "Drainage channels", "Survey monitoring"]], 
              ["Quality & Compliance", ["Load & fatigue testing", "Regulatory sign-off", "Documentation", "Final handover"]]
            ].map(([title, items]) => (
              <motion.div key={title} variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24 }} whileHover={{ y: -5 }}>
                <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 16, color: ORANGE }}>{title}</h4>
                {items.map(i => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <span style={{ color: ORANGE, fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 13, color: MUTED }}>{i}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Reveal y={30}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>START YOUR ROAD PROJECT WITH GAMBALT</h2>
            <button className="btn-black" style={{ marginTop: 24 }} onClick={() => setPage("quote")}>SUBMIT A QUOTE REQUEST</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
