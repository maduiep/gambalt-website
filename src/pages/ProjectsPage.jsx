import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import heroImg from "../assets/images/Projects Hero Image.png";
import imgLagosIbadan from "../assets/images/lagos-ibadan-expressway.png";
import imgTechHub from "../assets/images/victoria-island-techhub.png";
import imgFloodControl from "../assets/images/lekki-flood-control.png";
import imgMedicalCenter from "../assets/images/federal-medical-center.png";
import imgLuxuryEstate from "../assets/images/opal-luxury-estate.png";
import imgInterchange from "../assets/images/ogun-state-interchange.png";

export const ProjectsPage = ({ setPage }) => {
  const [filter, setFilter] = useState("All Projects");
  const filters = ["All Projects", "Infrastructure / Roads", "Commercial", "Residential", "Drainage Systems", "Institutional"];

  const projects = [
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Lagos-Ibadan Expressway Section II", desc: "Major highway reconstruction spanning 45km, including heavy-duty asphalt paving and structural works.", img: imgLagosIbadan, tag: "Infrastructure / Roads", id: "project-lagos" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Victoria Island Tech Hub", desc: "A 12-story commercial complex featuring smart building management systems and green energy.", img: imgTechHub, tag: "Commercial", id: "project-techhub" },
    { cat: "DRAINAGE SYSTEMS", status: "COMPLETED 2022", title: "Lekki Peninsula Flood Control", desc: "Extensive underground drainage network covering 15 sq km to mitigate seasonal flooding.", img: imgFloodControl, tag: "Drainage Systems", id: "project-flood" },
    { cat: "INSTITUTIONAL", status: "COMPLETED 2021", title: "Federal Medical Center Extension", desc: "Construction of a new 200-bed ward facility adhering strictly to WHO healthcare infrastructure standards.", img: imgMedicalCenter, tag: "Institutional", id: "project-medical" },
    { cat: "RESIDENTIAL", status: "ONGOING", title: "Opal Luxury Estate", desc: "Development of 50 premium detached duplexes with complete internal road networks.", img: imgLuxuryEstate, tag: "Residential", id: "project-opal" },
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Ogun State Interchange", desc: "Design and construction of a multi-level interchange to ease traffic congestion at major junction.", img: imgInterchange, tag: "Infrastructure / Roads", id: "project-interchange" },
  ];

  const visible = filter === "All Projects" ? projects : projects.filter(p => p.tag === filter);

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
      <PageHero tag="OUR PORTFOLIO" title="DELIVERING" accent="EXCELLENCE ACROSS NIGERIA"
        img={heroImg}
        subtitle="Explore our comprehensive track record of successful infrastructure, commercial, and residential projects." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <motion.div 
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filters.map((f, i) => (
              <motion.button 
                key={f} 
                variants={itemVariants}
                className={`filter-btn ${filter === f ? "active" : ""}`} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(f)}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            layout
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} 
            className="grid-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div 
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card" 
                  onClick={() => setPage(p.id)} 
                  style={{ background: CARD, border: `1px solid ${BORDER}` }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-overlay" />
                  <div style={{ position: "relative" }}>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
                      <span className="tag-orange">{p.cat}</span>
                    </div>
                    <div style={{ position: "absolute", top: 12, right: 12 }}>
                      <span className="tag-green">{p.status}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 8, color: TEXT }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: SUBTLE, lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</p>
                    <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>VIEW DETAILS →</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <Reveal delay={0.4} y={10}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button className="btn-outline">LOAD MORE PROJECTS</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gov vendor bar */}
      <Reveal y={20}>
        <div style={{ background: ORANGE, padding: "24px 0" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="heading-font" style={{ fontSize: 20, fontWeight: 800, textTransform: "uppercase", color: "#000" }}>🏛 GOVERNMENT-READY VENDOR</div>
              <p style={{ fontSize: 13, color: "rgba(0,0,0,0.7)" }}>Fully certified and compliant for municipal, state, and federal infrastructure contracts.</p>
            </div>
            <motion.div 
              style={{ display: "flex", gap: 12 }}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {["FMWH CERTIFIED", "BPP REGISTERED"].map(b => (
                <motion.span key={b} variants={itemVariants} style={{ border: "2px solid rgba(0,0,0,0.4)", padding: "8px 16px", fontFamily: "'Barlow Condensed'", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#000" }}>{b}</motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      {/* Have a project */}
      <section style={{ background: DARK, padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🦺</div>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12, color: TEXT }}>HAVE A SIMILAR PROJECT IN MIND?</h2>
            <p style={{ color: SUBTLE, marginBottom: 36, maxWidth: 500, margin: "12px auto 36px" }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
          </Reveal>
          <Reveal delay={0.3} y={10}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-orange" onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
              <button className="btn-outline" onClick={() => setPage("about")}>VIEW COMPANY PROFILE</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
