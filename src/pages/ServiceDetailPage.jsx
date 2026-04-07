import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";
import { servicesData } from "../data/servicesData";

export const ServiceDetailPage = ({ setPage, serviceKey }) => {
  // Default to road construction if key not found (fallback)
  const currentService = servicesData[serviceKey] || servicesData["service-road"];

  const deliverablesRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (customWidth) => ({
      width: customWidth,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.4 }
    })
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        style={{ 
          background: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${currentService.heroImg}) center/cover`, 
          minHeight: 650, 
          display: "flex", 
          alignItems: "flex-end", 
          paddingBottom: 100, 
          paddingTop: 120 
        }} 
        className="blur-in"
      >
        <div className="container">
          <Reveal x={-20}>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600, letterSpacing: 1 }} onClick={() => setPage("services")}>← BACK TO SERVICES</span>
              <span style={{ color: MUTED }}>|</span>
              <span className="tag-orange" style={{ padding: "4px 12px", fontSize: 10 }}>INDUSTRIAL SERVICE</span>
            </div>
            <h1 
              className="heading-font" 
              style={{ 
                fontSize: 68, 
                fontWeight: 900, 
                textTransform: "uppercase", 
                lineHeight: 0.95, 
                color: "#fff",
                textShadow: "0 4px 20px rgba(0,0,0,0.6)"
              }}
            >
              {currentService.heroTitle}<br />
              <span style={{ color: ORANGE }}>{currentService.heroAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ marginTop: 20, fontSize: 16, color: "rgba(255,255,255,0.9)", maxWidth: 550, lineHeight: 1.6, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>{currentService.desc}</p>

            <div style={{ display: "flex", gap: 20, marginTop: 44, flexWrap: "wrap" }}>
              <button className="btn-orange" style={{ padding: "18px 40px" }} onClick={() => setPage("quote")}>REQUEST A CONSULTATION</button>
              <button className="btn-white" style={{ padding: "18px 40px" }} onClick={() => deliverablesRef.current?.scrollIntoView({ behavior: 'smooth' })}>VIEW DELIVERABLES</button>

            </div>
          </Reveal>
        </div>
      </div>

      {/* Metrics Section */}
      <section style={{ background: BLACK, padding: "100px 0 80px" }}>
        <div className="container">
          <Reveal x={-20}>
            <div className="section-tag">ANALYTICS & PLANNING</div>
            <h2 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 44, textTransform: "uppercase", color: TEXT, marginBottom: 24 }}>
              {currentService.planningTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, fontSize: 16, lineHeight: 1.8, marginBottom: 60, maxWidth: 800 }}>{currentService.planningDesc}</p>
          </Reveal>
          
          <motion.div 
            className="grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            {currentService.metrics.map(([l, v]) => (
              <motion.div key={l} style={{ background: DARK, padding: 32, border: `1px solid ${BORDER}`, borderRadius: 2 }} variants={itemVariants}>
                <p style={{ fontSize: 12, color: MUTED, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>{l}</p>
                <div className="mobile-stack-left" style={{ gap: 20 }}>
                   <div style={{ flex: 1, height: 6, background: BORDER, borderRadius: 3, overflow: "hidden" }}>
                    <motion.div 
                      variants={barVariants}
                      custom={v}
                      style={{ height: "100%", background: ORANGE, borderRadius: 3 }} 
                    />
                  </div>
                  <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, color: TEXT, fontSize: 22, minWidth: 50, textAlign: "right" }}>{v}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section style={{ background: BLACK, padding: "40px 0 100px" }}>
        <div className="container">
          <Reveal x={-20}>
            <div className="section-tag" style={{ marginBottom: 12 }}>CRITICAL MILESTONES</div>
            <h2 className="heading-font" style={{ fontSize: 52, fontWeight: 900, textTransform: "uppercase", marginBottom: 60, color: TEXT }}>
              OUR <span style={{ color: ORANGE }}>PROCESS</span>
            </h2>
          </Reveal>
          
          <div className="methodology-timeline">
            {currentService.methodology.map((m, i) => (
              <Reveal key={m.step} delay={i * 0.1} y={20}>
                <div className="methodology-item">
                  <div className="methodology-node" style={{ color: ORANGE, borderColor: ORANGE }}>
                    {m.step}
                  </div>
                  <h4 className="methodology-title" style={{ fontSize: 18, marginBottom: 12 }}>{m.title}</h4>
                  <p className="methodology-desc" style={{ fontSize: 14 }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="section" style={{ background: DARK, padding: "100px 0" }} ref={deliverablesRef}>
        <div className="container">
          <Reveal x={-20}>
            <div className="section-tag">SCOPE & DELIVERABLES</div>
            <h2 className="heading-font" style={{ fontSize: 52, fontWeight: 900, textTransform: "uppercase", marginBottom: 12, color: TEXT }}>
              PROJECT <span style={{ color: ORANGE }}>SCOPE</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, fontSize: 16, marginBottom: 60, maxWidth: 650 }}>A detailed technical overview of our {currentService.title.toLowerCase()} operational milestones and deliverables.</p>
          </Reveal>
          
          <motion.div 
            className="grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            {currentService.deliverables.map(([title, items]) => (
              <motion.div key={title} variants={itemVariants} style={{ background: CARD, borderLeft: `6px solid ${ORANGE}`, borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: 40 }} whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.5)", borderColor: ORANGE }}>
                <h4 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 24, color: TEXT, letterSpacing: 1 }}>{title}</h4>
                {items.map(i => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                    <span style={{ color: ORANGE, fontSize: 16, fontWeight: 900 }}>✓</span>
                    <span style={{ fontSize: 14, color: MUTED, lineHeight: 1.5 }}>{i}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <Reveal y={40}>
        <div className="cta-section" style={{ background: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${currentService.heroImg}) center/cover fixed`, minHeight: 450, display: "flex", alignItems: "center" }}>
          <div className="container text-center-tp-left" style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
            <h2 className="heading-font" style={{ fontSize: 56, fontWeight: 900, textTransform: "uppercase", marginBottom: 20, color: "#fff" }}>{currentService.cta}</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, marginBottom: 48, maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>Partner with Gambalt for industrial-grade civil engineering results. Our fleet is ready, our engineers represent precision.</p>

            <button className="btn-orange" style={{ padding: "20px 60px", fontSize: 15, fontWeight: 800, marginTop: 44, boxShadow: "0 10px 30px rgba(232,84,26,0.4)" }} onClick={() => setPage("quote")}>SECURE A PROJECT QUOTE</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
