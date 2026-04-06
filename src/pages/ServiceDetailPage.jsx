import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";
import serviceDetailHero from "../assets/images/service-detail-hero.png";

export const ServiceDetailPage = ({ setPage, serviceKey }) => {
  const servicesData = {
    "service-road": {
      title: "Road Construction & Paving",
      heroTitle: "CIVIL ENGINEERING",
      heroAccent: "& INFRASTRUCTURE",
      desc: "From heavy-duty asphalt laying to complex road network planning, Gambalt delivers end-to-end highway solutions.",
      planningTitle: "Highway Assessment & Load Analysis",
      planningDesc: "We conduct in-depth assessments with municipal planners on structural load parameters, load assessment, and environmental factors.",
      metrics: [
        ["Land area regularization improvement through adherence to force calibration", "60%"],
        ["Market accessibility improvement for major transit hubs", "70%"],
        ["Project turnaround efficiency on large-scale paving", "56.6%"],
        ["Compliance with Ministry of Works engineering codes", "100%"]
      ],
      deliverables: [
        ["Site Preparation", ["Clearing & grubbing", "Soil survey & testing", "Subgrade preparation", "Compaction equipment"]],
        ["Construction", ["Asphalt mixing & laying", "Pavement marking", "Drainage channels", "Survey monitoring"]],
        ["Quality & Compliance", ["Load & fatigue testing", "Regulatory sign-off", "Documentation", "Final handover"]]
      ],
      cta: "START YOUR ROAD PROJECT WITH GAMBALT"
    },
    "service-commercial": {
      title: "Commercial Structures",
      heroTitle: "STRUCTURAL",
      heroAccent: "& VERTICAL BUILDS",
      desc: "Building high-rise corporate hubs, warehouses, and shopping complexes with international safety certifications.",
      planningTitle: "Structural Integrity & Safety Vetting",
      planningDesc: "Our architectural engineering team coordinates with urban planners to ensure vertical stability and MEP integration.",
      metrics: [
        ["Structural safety compliance for high-occupancy builds", "100%"],
        ["Energy efficiency optimization for corporate towers", "45%"],
        ["Space utilization improvements in industrial warehouses", "82%"],
        ["Project management scheduling accuracy", "94%"]
      ],
      deliverables: [
        ["Foundation", ["Deep piling works", "Reinforced concrete", "Structural steel", "Seismic analysis"]],
        ["Building Lifecycle", ["MEP systems integration", "Vertical transport", "Interior fit-out", "Safety system installation"]],
        ["Finalization", ["Fire safety certification", "HVAC optimization", "Occupancy walkthrough", "Handover"]]
      ],
      cta: "START YOUR BUILDING PROJECT WITH GAMBALT"
    },
    "service-bridge": {
      title: "Bridge Engineering",
      heroTitle: "BRIDGE",
      heroAccent: "& SPAN SOLUTIONS",
      desc: "Connecting communities with pre-stressed concrete overpasses and robust bridge designs built for the future.",
      planningTitle: "Geotechnical & Hydraulic Analysis",
      planningDesc: "Specialized load fatigue testing and geotechnical site surveys to ensure long-term structural viability over waterways.",
      metrics: [
        ["Structural load capacity optimization", "100%"],
        ["Connectivity improvement for rural-to-urban transit", "65%"],
        ["Material durability rating for river crossings", "98%"],
        ["Environmental impact mitigation score", "88%"]
      ],
      deliverables: [
        ["Phase 1", ["Underwater foundation", "Abutment construction", "Pier installation", "Surveying"]],
        ["Superstructure", ["Span placement", "Pre-stressed concrete", "Decking and asphalt", "Railing installation"]],
        ["Verification", ["Load testing", "Thermal stress analysis", "Final sign-off", "Maintenance plan"]]
      ],
      cta: "START YOUR BRIDGE PROJECT WITH GAMBALT"
    },
    "service-earthworks": {
      title: "Earthworks & Excavation",
      heroTitle: "MASSIVE-SCALE",
      heroAccent: "& SITE PREPARATION",
      desc: "Utilizing our heavy machinery fleet for bulk excavation, site leveling, and land clearing operations.",
      planningTitle: "Fleet Logistics & Mass Grading",
      planningDesc: "Precision grading and earth moving with industrial-scale machinery for mining or infrastructure preparation.",
      metrics: [
        ["Excavation accuracy within design tolerances", "99%"],
        ["Fleet deployment speed for rapid site clearing", "75%"],
        ["Land reclamation and soil stability scores", "92%"],
        ["Compliance with environmental disturbance codes", "100%"]
      ],
      deliverables: [
        ["Land Clearing", ["Tree & debris removal", "Demolition works", "Waste processing", "GIS mapping"]],
        ["Earthmoving", ["Bulk excavation", "Precision grading", "Trenching works", "Compaction"]],
        ["Logistics", ["Heavy equipment mobilization", "Fuel management", "Safety supervisor", "Site reporting"]]
      ],
      cta: "START YOUR EARTHWORKS PROJECT WITH GAMBALT"
    }
  };

  // Default to road construction if key not found (fallback)
  const currentService = servicesData[serviceKey] || servicesData["service-road"];

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
      <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${serviceDetailHero}) center/cover`, minHeight: 400, display: "flex", alignItems: "flex-end", paddingBottom: 48, paddingTop: 120 }} className="blur-in">
        <div className="container">
          <Reveal x={-20}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600 }} onClick={() => setPage("services")}>← Back to Services</span>
              <span style={{ color: MUTED }}>|</span>
              <span className="tag-orange">FULL SERVICE</span>
            </div>
            <h1 className="heading-font" style={{ fontSize: 64, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, color: "#fff" }}>
              {currentService.heroTitle}<br /><span style={{ color: ORANGE }}>{currentService.heroAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ marginTop: 16, fontSize: 15, color: "#ccc", maxWidth: 500 }}>{currentService.desc}</p>
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
              {currentService.planningTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 700 }}>{currentService.planningDesc}</p>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} 
            className="grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {currentService.metrics.map(([l, v]) => (
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
            <p style={{ color: SUBTLE, marginBottom: 40 }}>A comprehensive overview of our {currentService.title.toLowerCase()} services, managed by delivery phase.</p>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {currentService.deliverables.map(([title, items]) => (
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
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>{currentService.cta}</h2>
            <button className="btn-black" style={{ marginTop: 24 }} onClick={() => setPage("quote")}>SUBMIT A QUOTE REQUEST</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
