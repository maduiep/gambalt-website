import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export const HowItWorksPage = ({ setPage }) => {
  const [open, setOpen] = useState(0);
  const steps = [
    { n: "01", title: "Initial Consultation", sub: "DISCOVERY & ALIGNMENT", desc: "We begin by understanding your project's fundamental requirements, scope, and constraints. Our senior engineers meet with stakeholders to establish clear objectives and identify potential red flags early in the process.", items: ["Needs assessment & site history review", "Preliminary budget & timeline discussions", "Stakeholder alignment workshops"], img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" },
    { n: "02", title: "Engineering Assessment", sub: "SITE ANALYSIS & FEASIBILITY", desc: "Our technical team conducts thorough site investigations including geotechnical surveys, soil analysis, and structural assessments to build a precise understanding of what your project demands.", items: ["Geotechnical site investigation", "Topographic & structural surveys", "Feasibility & risk analysis report"], img: "https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=500&q=80" },
    { n: "03", title: "Technical Planning", sub: "DESIGN & ENGINEERING", desc: "Our engineering team produces detailed design drawings, specifications, BOQs, and execution plans. All plans undergo rigorous internal QA review before client presentation.", items: ["Structural design & drafting", "Bill of Quantities preparation", "Regulatory pre-approval documentation"], img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80" },
    { n: "04", title: "Project Execution Support", sub: "DELIVERY & SUPERVISION", desc: "With plans approved, our machinery and site teams mobilize. A resident engineer supervises all works daily while weekly progress reports keep clients fully informed throughout construction.", items: ["Full mobilization & site setup", "Daily engineering supervision", "Weekly client progress reports"], img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80" },
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

  const accordionVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
  };

  return (
    <div>
      <PageHero tag="OUR PROCESS" title="HOW WE DELIVER" accent="EXCELLENCE" img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
        subtitle="A structured, hands-on approach to transforming complex engineering challenges into successfully delivered infrastructure projects." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>THE GAMBALT <span style={{ color: ORANGE }}>METHODOLOGY</span></h2>
              <p style={{ color: SUBTLE, marginTop: 12 }}>A transparent, 4-step framework designed to mitigate risk and ensure project success.</p>
            </div>
          </Reveal>

          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((s, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className={`process-step ${open === i ? "active" : ""}`} 
                  onClick={() => setOpen(open === i ? -1 : i)} 
                  style={{ background: open === i ? CARD : "transparent", border: `1px solid ${open === i ? BORDER : "transparent"}`, overflow: "hidden" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                      <motion.div 
                        style={{ width: 44, height: 44, background: open === i ? ORANGE : "rgba(232,84,26,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                        animate={{ backgroundColor: open === i ? ORANGE : "rgba(232,84,26,0.15)" }}
                      >
                        <span className="heading-font" style={{ fontSize: 16, fontWeight: 800, color: open === i ? "#fff" : ORANGE }}>{s.n}</span>
                      </motion.div>
                      <div>
                        <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>{s.title}</h3>
                        <span style={{ color: ORANGE, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.sub}</span>
                      </div>
                    </div>
                    <motion.span 
                      style={{ color: ORANGE, fontSize: 14, fontWeight: 700 }}
                      animate={{ rotate: open === i ? 180 : 0 }}
                    >
                      ▼
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div 
                        variants={accordionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}
                        className="grid-2"
                      >
                        <div>
                          <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                          {s.items.map(it => (
                            <div key={it} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                              <span style={{ color: ORANGE }}>✓</span>
                              <span style={{ fontSize: 13, color: MUTED }}>{it}</span>
                            </div>
                          ))}
                          <motion.button 
                            className="btn-orange" 
                            style={{ marginTop: 16 }} 
                            onClick={(e) => { e.stopPropagation(); setPage("contact"); }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            REQUEST A CONSULTATION
                          </motion.button>
                        </div>
                        <motion.img 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          src={s.img} alt={s.title} 
                          style={{ width: 180, height: 130, objectFit: "cover", flexShrink: 0 }} 
                          className="hide-mobile" 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>BUILT ON <span style={{ color: ORANGE }}>PRECISION</span></h2>
              <p style={{ color: SUBTLE, marginTop: 12 }}>Why clients trust our structured delivery methodology.</p>
            </div>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "⏱", title: "Time Efficiency", desc: "Early risk identification prevents costly delays during the construction phase." }, 
              { icon: "⚖️", title: "Budget Control", desc: "Accurate BOQs and rigorous senior management keep expenditures within approved limits." }, 
              { icon: "🛡", title: "Risk Mitigation", desc: "Strict adherence to ISO safety standards and environmental regulations at every step." }
            ].map(c => (
              <motion.div key={c.title} variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32, textAlign: "center" }} whileHover={{ y: -5 }}>
                <motion.div 
                  style={{ width: 60, height: 60, background: "rgba(232,84,26,0.15)", border: `1px solid rgba(232,84,26,0.3)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 24 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(232,84,26,0.3)" }}
                >
                  {c.icon}
                </motion.div>
                <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6 }}>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Reveal y={30}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO START YOUR PROJECT?</h2>
            <button className="btn-black" style={{ marginTop: 20 }} onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
