import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";
import serviceDetailHero from "../assets/images/service-detail-hero.png";

export const ServiceDetailPage = ({ setPage, serviceKey }) => {
  const servicesData = {
    "service-road": {
      title: "Road Construction & Paving",
      heroTitle: "HIGH-DURABILITY",
      heroAccent: "HIGHWAY NETWORKS",
      desc: "Engineering high-traffic infrastructure with advanced asphalt binder courses, precision pavement marking, and integrated drainage solutions for industrial-scale load bearing.",
      planningTitle: "Topographic & Traffic Load Engineering",
      planningDesc: "Every project begins with comprehensive GIS mapping and geotechnical investigations to ensure subgrade stability and long-term structural integrity under extreme conditions.",
      metrics: [
        ["Structural load capacity optimization against heavy industrial traffic", "98.5%"],
        ["Asphalt concrete durability rating in extreme weather conditions", "92%"],
        ["Project delivery efficiency through standardized civil workflows", "94.2%"],
        ["Compliance with Federal Ministry of Works & Housing standards", "100%"]
      ],
      deliverables: [
        ["Pre-Construction", ["Geotechnical soil testing", "Topographic site survey", "Environmental impact vetting", "Traffic management planning"]],
        ["Core Engineering", ["Asphalt concrete binder laying", "Wearing course application", "Reinforced drainage systems", "Culvert & bridge transition"]],
        ["Finalization", ["Pavement thermoplastic marking", "Safety signage & lighting", "Municipal sign-off", "Maintenance scheduling"]]
      ],
      cta: "START YOUR HIGHWAY PROJECT WITH GAMBALT"
    },
    "service-commercial": {
      title: "Commercial Structures",
      heroTitle: "INDUSTRIAL &",
      heroAccent: "VERTICAL BUILDS",
      desc: "Designing and constructing massive commercial hubs, from specialized industrial warehouses to corporate high-rises, built for maximum structural safety and aesthetic impact.",
      planningTitle: "Architectural & MEP Systems Integration",
      planningDesc: "Our engineering team specializes in complex vertical development, ensuring seamless integration of structural steel, mechanical, electrical, and plumbing systems.",
      metrics: [
        ["Structural safety & vertical expansion feasibility", "100%"],
        ["Energy efficiency through specialized MEP optimization", "78%"],
        ["Operational space utilization for industrial workflows", "95%"],
        ["Zero-incident safety rating during build phase", "100%"]
      ],
      deliverables: [
        ["Substructure", ["High-capacity piling works", "Raft & pad foundation", "Subsurface waterproofing", "Seismic analysis"]],
        ["Superstructure", ["Reinforced concrete skeleton", "Structural steel framework", "Curtain wall & façade", "Lift & HVAC integration"]],
        ["Compliance", ["Fire safety engineering", "Occupancy certification", "Quality control reporting", "Handover package"]]
      ],
      cta: "BUILD YOUR COMMERCIAL VISION WITH GAMBALT"
    },
    "service-bridge": {
      title: "Bridge Engineering",
      heroTitle: "PRECISION BRIDGE",
      heroAccent: "& OVERPASS ENG.",
      desc: "Delivering critical infrastructure connectivity through pre-stressed concrete bridge design, hydraulic load analysis, and seismic-resistant overpass solutions.",
      planningTitle: "Hydraulic & Geotechnical Site Evaluation",
      planningDesc: "Specialized analysis of waterway flow, soil load-bearing capacity, and structural fatigue to ensure centuries-long durability of bridge abutments and piers.",
      metrics: [
        ["Structural resistance to environmental fatigue", "99.8%"],
        ["Connectivity improvement for commercial transit links", "86%"],
        ["Material durability for river-crossing spans", "96.5%"],
        ["Environmental preservation during construction", "100%"]
      ],
      deliverables: [
        ["Foundation Phase", ["Underwater cofferdam works", "Abutment construction", "Deep pier installation", "Geological vetting"]],
        ["Span Engineering", ["Pre-stressed girder placement", "Concrete slab reinforcement", "Expansion joint installation", "Waterproofing"]],
        ["Testing", ["Static & dynamic load testing", "Thermal stress analysis", "Final inspection", "Operational sign-off"]]
      ],
      cta: "ENGINEER YOUR CRITICAL SPAN WITH GAMBALT"
    },
    "service-earthworks": {
      title: "Earthworks & Excavation",
      heroTitle: "MASSIVE-SCALE",
      heroAccent: "& SITE PREPARATION",
      desc: "Utilizing modern heavy machinery for large-scale land clearing, bulk excavation, and precision site grading for major infrastructure and mining sectors.",
      planningTitle: "Fleet Logistics & Geological Stability",
      planningDesc: "Comprehensive site preparation utilizing our multi-ton equipment fleet, managed through GIS precision to ensure perfect grading and slope stabilization.",
      metrics: [
        ["Grading accuracy within millimetric design tolerances", "99.5%"],
        ["Earthmoving volume capacity per operational cycle", "88%"],
        ["Soil stability & compaction compliance rating", "97%"],
        ["Environmental reclamation & remediation status", "100%"]
      ],
      deliverables: [
        ["Site Clearing", ["Deformation & clearing", "Bulk earthmoving", "Demolition & waste removal", "Geological mapping"]],
        ["Precision Grading", ["Final surface leveling", "Compaction & stabilization", "Erosion control system", "Trenching works"]],
        ["Logistics", ["Fleet deployment & monitoring", "Fuel & safety coordination", "Site reporting", "Handover"]]
      ],
      cta: "PREPARE YOUR SITE WITH GAMBALT'S FLEET"
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
