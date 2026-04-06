import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";
import serviceRoadImg from "../assets/images/service_road_construction.png";
import serviceBridgeImg from "../assets/images/service_bridge_construction.png";
import serviceCommercialImg from "../assets/images/service_commercial_construction.png";
import serviceEarthworksImg from "../assets/images/service_earthworks_excavation.png";

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
      methodology: [
        { step: "01", title: "Site Surveying", desc: "Digital topographic mapping and geotechnical soil profiling." },
        { step: "02", title: "Subgrade Compaction", desc: "Heavy-duty mass grading and base layer stabilization." },
        { step: "03", title: "Binder Course", desc: "Application of high-density asphalt mix for load bearing." },
        { step: "04", title: "Asphalt Paving", desc: "Precision paving of the final high-friction wearing course." },
        { step: "05", title: "Post-Vetting", desc: "Thermoplastic marking and municipal structural sign-off." }
      ],
      deliverables: [
        ["Pre-Construction", ["Geotechnical soil testing", "Topographic site survey", "Environmental impact vetting", "Traffic management planning"]],
        ["Core Engineering", ["Asphalt concrete binder laying", "Wearing course application", "Reinforced drainage systems", "Culvert & bridge transition"]],
        ["Finalization", ["Pavement thermoplastic marking", "Safety signage & lighting", "Municipal sign-off", "Maintenance scheduling"]]
      ],
      cta: "START YOUR HIGHWAY PROJECT WITH GAMBALT",
      heroImg: serviceRoadImg
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
      methodology: [
        { step: "01", title: "Urban Analysis", desc: "Detailed feasibility study and municipal building vetting." },
        { step: "02", title: "Deep Piling", desc: "Subsurface structural piling to ensure vertical stability." },
        { step: "03", title: "Steel Framework", desc: "Precision assembly of the reinforced high-rise skeleton." },
        { step: "04", title: "MEP Fit-out", desc: "Electrical and mechanical mechanical systems integration." },
        { step: "05", title: "Certification", desc: "Quality auditing and fire safety compliance handover." }
      ],
      deliverables: [
        ["Substructure", ["High-capacity piling works", "Raft & pad foundation", "Subsurface waterproofing", "Seismic analysis"]],
        ["Superstructure", ["Reinforced concrete skeleton", "Structural steel framework", "Curtain wall & façade", "Lift & HVAC integration"]],
        ["Compliance", ["Fire safety engineering", "Occupancy certification", "Quality control reporting", "Handover package"]]
      ],
      cta: "BUILD YOUR COMMERCIAL VISION WITH GAMBALT",
      heroImg: serviceCommercialImg
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
      methodology: [
        { step: "01", title: "Hydro Survey", desc: "Detailed analysis of water flow and soil scouring." },
        { step: "02", title: "Abutment Build", desc: "Deep foundation and abutment structural piling." },
        { step: "03", title: "Girder Placement", desc: "Pre-stressed girder lift and pier seating." },
        { step: "04", title: "Deck Finishing", desc: "Asphalt decking and expansion joint sealing." },
        { step: "05", title: "Diagnostic Test", desc: "Static load testing and final structural certification." }
      ],
      deliverables: [
        ["Foundation Phase", ["Underwater cofferdam works", "Abutment construction", "Deep pier installation", "Geological vetting"]],
        ["Span Engineering", ["Pre-stressed girder placement", "Concrete slab reinforcement", "Expansion joint installation", "Waterproofing"]],
        ["Testing", ["Static & dynamic load testing", "Thermal stress analysis", "Final inspection", "Operational sign-off"]]
      ],
      cta: "ENGINEER YOUR CRITICAL SPAN WITH GAMBALT",
      heroImg: serviceBridgeImg
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
      methodology: [
        { step: "01", title: "Land Clearing", desc: "Massive debris and vegetation structural regularization." },
        { step: "02", title: "Bulk Earthwork", desc: "Large-scale excavation and material redistribution." },
        { step: "03", title: "Slope Grading", desc: "Precision site leveling to architectural specifications." },
        { step: "04", title: "Stability Vetting", desc: "Final compaction and erosion stability assessments." },
        { step: "05", title: "Ready-for-Build", desc: "Full site certification for follow-on development." }
      ],
      deliverables: [
        ["Site Clearing", ["Deformation & clearing", "Bulk earthmoving", "Demolition & waste removal", "Geological mapping"]],
        ["Precision Grading", ["Final surface leveling", "Compaction & stabilization", "Erosion control system", "Trenching works"]],
        ["Logistics", ["Fleet deployment & monitoring", "Fuel & safety coordination", "Site reporting", "Handover"]]
      ],
      cta: "PREPARE YOUR SITE WITH GAMBALT'S FLEET",
      heroImg: serviceEarthworksImg
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
      {/* Hero Section */}
      <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${currentService.heroImg}) center/cover`, minHeight: 600, display: "flex", alignItems: "flex-end", paddingBottom: 80, paddingTop: 120 }} className="blur-in">
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

      {/* Metrics Section */}
      <section style={{ background: BLACK, padding: "80px 0 60px" }}>
        <div className="container">
          <Reveal x={-20}>
            <h2 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 36, textTransform: "uppercase", color: TEXT, marginBottom: 24 }}>
              {currentService.planningTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, fontSize: 15, lineHeight: 1.7, marginBottom: 48, maxWidth: 700 }}>{currentService.planningDesc}</p>
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
              <motion.div key={l} style={{ background: DARK, padding: 24, border: `1px solid ${BORDER}`, borderRadius: 2 }} variants={itemVariants}>
                <p style={{ fontSize: 12, color: MUTED, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>{l}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                   <div style={{ flex: 1, height: 4, background: BORDER, borderRadius: 2 }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: v }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                      viewport={{ once: true }}
                      style={{ height: "100%", background: ORANGE, borderRadius: 2 }} 
                    />
                  </div>
                  <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, color: TEXT, fontSize: 18 }}>{v}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section (NEW) */}
      <section style={{ background: BLACK, padding: "40px 0 80px" }}>
        <div className="container">
          <Reveal x={-20}>
            <div className="section-tag" style={{ marginBottom: 12 }}>CRITICAL MILESTONES</div>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 48, color: TEXT }}>
              OUR <span style={{ color: ORANGE }}>PROCESS</span>
            </h2>
          </Reveal>
          
          <div className="methodology-timeline">
            {currentService.methodology.map((m, i) => (
              <Reveal key={m.step} delay={i * 0.1} y={20}>
                <div className="methodology-item">
                  <div className="methodology-node">
                    {m.step}
                  </div>
                  <h4 className="methodology-title">{m.title}</h4>
                  <p className="methodology-desc">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="section" style={{ background: DARK }}>
        <div className="container">
          <Reveal x={-20}>
            <div className="section-tag">SCOPE & DELIVERABLES</div>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 8, color: TEXT }}>
              PROJECT <span style={{ color: ORANGE }}>SCOPE</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p style={{ color: SUBTLE, marginBottom: 48, maxWidth: 600 }}>A detailed technical overview of our {currentService.title.toLowerCase()} operational milestones and deliverables.</p>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {currentService.deliverables.map(([title, items]) => (
              <motion.div key={title} variants={itemVariants} style={{ background: CARD, borderLeft: `4px solid ${ORANGE}`, borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: 32 }} whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 20, color: TEXT }}>{title}</h4>
                {items.map(i => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                    <span style={{ color: ORANGE, fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 13, color: MUTED, lineHeight: 1.4 }}>{i}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <Reveal y={30}>
        <div className="cta-section" style={{ background: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${currentService.heroImg}) center/cover fixed` }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "100px 0" }}>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", marginBottom: 16 }}>{currentService.cta}</h2>
            <p style={{ color: SUBTLE, fontSize: 16, marginBottom: 40, maxWidth: 600, margin: "0 auto" }}>Partner with Gambalt for industrial-grade civil engineering results. Our fleet is ready, our engineers represent precision.</p>
            <button className="btn-orange" style={{ padding: "18px 48px", fontSize: 14 }} onClick={() => setPage("quote")}>SECURE A PROJECT QUOTE</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
