import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import heroImg from "../assets/images/Services Hero Image.png";

export const ServicesPage = ({ setPage }) => {
  const [expanded, setExpanded] = useState(0);
  const services = [
    { key: "service-road", icon: "🛣", title: "Road Construction & Paving", desc: "Heavy-duty infrastructure engineering for highways and industrial networks, utilizing advanced asphalt technology for maximum multi-ton load bearing and weather resilience.", details: ["Asphalt concrete binder and wearing course", "Pavement marking & signage", "Drainage integration", "Traffic management systems"] },
    { key: "service-commercial", icon: "🏗", title: "Commercial Structures", desc: "Sophisticated vertical development for corporate headquarters, high-capacity warehouses, and industrial complexes, ensuring structural integrity and MEP compliance.", details: ["Foundation engineering", "Structural steel framework", "MEP integration", "Project closeout & handover"] },
    { key: "service-bridge", icon: "🌉", title: "Bridge Engineering", desc: "Precision-engineered span solutions using pre-stressed concrete and seismic-resistant abutments to deliver critical connectivity across water and complex terrain.", details: ["Pre-stressed concrete design", "Geotechnical investigation", "Load analysis & fatigue testing", "Expansion joint systems"] },
    { key: "service-earthworks", icon: "⛏", title: "Earthworks & Excavation", desc: "Industrial-scale land clearing, bulk excavation, and GIS-mapped precision grading facilitated by our robust fleet of multi-ton heavy machinery.", details: ["Bulk earthworks", "Site leveling & compaction", "Dewatering systems", "Slope stabilization"] },
    { key: "service-management", icon: "📋", title: "Project Management", desc: "End-to-end oversight of complex industrial builds, utilizing BIM and advanced logistics to ensure on-time, on-budget delivery of critical infrastructure.", details: ["Resource orchestration", "Risk mitigation & safety", "Budget & timeline control", "Stakeholder communications"] },
  ];

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
      <PageHero tag="OUR EXPERTISE" title="INDUSTRIAL STRENGTH" accent="SERVICES" img={heroImg}
        subtitle="Comprehensive civil engineering and construction solutions designed for maximum durability, efficiency, and compliance. We deliver outcomes, not just outputs." />

      {/* Industries bar */}
      <div className="industries-bar" style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, overflow: "hidden" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          <Reveal x={-20}>
            <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: MUTED }}>INDUSTRIES SERVED:</span>
          </Reveal>
          <motion.div 
            style={{ display: "flex", gap: 32, flexWrap: "wrap" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["🏛 GOVERNMENT", "🏭 INDUSTRIAL", "🏢 COMMERCIAL", "🏗 INFRASTRUCTURE"].map((i, idx) => (
              <motion.span key={i} variants={itemVariants} style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: TEXT }}>{i}</motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services accordion */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={itemVariants} style={{ borderBottom: `1px solid ${BORDER}`, overflow: "hidden" }}>
                <motion.div 
                  style={{ padding: "24px 32px", display: "flex", alignItems: "center", gap: 20, cursor: "pointer", background: expanded === i ? CARD : "transparent" }}
                  whileHover={{ background: "rgba(255,102,0,0.03)" }}
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                >
                  <motion.div 
                    style={{ fontSize: 28, width: 48, textAlign: "center" }}
                    animate={{ scale: expanded === i ? 1.2 : 1 }}
                  >
                    {s.icon}
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h3 className="heading-font" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: SUBTLE, marginTop: 4 }}>{s.desc}</p>
                  </div>
                  <motion.span 
                    style={{ color: ORANGE, fontSize: 20, fontWeight: 700, flexShrink: 0 }}
                    animate={{ rotate: expanded === i ? 0 : 90 }}
                  >
                    {expanded === i ? "−" : "+"}
                  </motion.span>
                </motion.div>
                
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden", background: CARD }}
                    >
                      <div style={{ padding: "0 32px 28px 100px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                          {s.details.map(d => (
                            <div key={d} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <span style={{ color: ORANGE }}>✓</span>
                              <span style={{ fontSize: 13, color: MUTED }}>{d}</span>
                            </div>
                          ))}
                        </div>
                        <button className="btn-orange" style={{ marginTop: 20 }} onClick={() => setPage(s.key)}>VIEW FULL SERVICE →</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA form */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>🦺</div>
              <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>START YOUR NEXT PROJECT WITH GAMBALT</h2>
              <p style={{ color: SUBTLE, marginTop: 12 }}>Whether you need comprehensive infrastructure build or specialized civil engineering services, our team is ready.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2} y={30}>
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: MUTED }}>Full Name</label>
                  <input className="form-input" placeholder="John Doe" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: MUTED }}>Company / Organization</label>
                  <input className="form-input" placeholder="Acme Corp" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: MUTED }}>Service Required</label>
                <select className="form-select" style={{ backgroundColor: BLACK, border: `1px solid ${BORDER}`, color: TEXT }}>
                  <option>Road Construction & Paving</option>
                  <option>Commercial Structures</option>
                  <option>Bridge Engineering</option>
                  <option>Earthworks & Excavation</option>
                  <option>Project Management</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: MUTED }}>Project Brief</label>
                <textarea className="form-textarea" placeholder="Briefly describe your project needs..." style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
              </div>
              <motion.button 
                className="btn-orange" 
                style={{ width: "100%", textAlign: "center", padding: 16 }} 
                onClick={() => setPage("quote")}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                SUBMIT REQUEST
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
