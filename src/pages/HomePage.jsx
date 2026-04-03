import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";

export const HomePage = ({ setPage }) => {
  const stats = [{ n: "15+", l: "Years Experience" }, { n: "250+", l: "Projects Completed" }, { n: "50+", l: "Active Projects" }, { n: "100%", l: "Safety Record" }];

  const services = [
    { icon: "🛣", title: "Road & Highway Construction", desc: "High-durability road networks designed to withstand heavy industrial traffic and extreme weather conditions." },
    { icon: "🏗", title: "Commercial Structures", desc: "End-to-end construction of high-rise commercial buildings, industrial warehouses, and corporate facilities." },
    { icon: "🌉", title: "Bridge Engineering", desc: "Design and construction of robust bridges and overpasses, ensuring critical infrastructure connectivity." },
    { icon: "⚙️", title: "Earthworks & Excavation", desc: "Massive-scale land clearing, grading, and excavation utilizing our extensive fleet of heavy machinery." },
    { icon: "📋", title: "Project Management", desc: "Comprehensive oversight from initial planning through final handover with rigorous quality control." },
    { icon: "📊", title: "Drainage & Utilities", desc: "Advanced underground drainage networks and utility systems engineered for long-term resilience." },
  ];

  const projects = [
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Lagos-Ibadan Expressway Expansion", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", id: "project-lagos" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Victoria Island Tech Hub", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", id: "project-detail" },
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Ogun State Bridge Works", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", id: "project-detail" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Ogun State Manufacturing Plant", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", id: "project-detail" },
  ];

  const testimonials = [
    { text: "Gambalt's approach to the state highway expansion was exemplary. Their rigorous adherence to safety protocols and transparent communication throughout ensured we stayed within budget.", name: "Chief Engineer Adeyemi", role: "Ministry of Works & Infrastructure", cat: "GOVERNMENT" },
    { text: "Delivering a 15-story commercial complex in Victoria Island comes with logistical challenges. Gambalt's technical planning mitigated structural risks early on.", name: "Sarah Johnson", role: "Director, Hencel Developments", cat: "COMMERCIAL DEV" },
    { text: "We hired Gambalt for a custom industrial facility build. What impressed me most was their transparency. Every BOQ was detailed, every weekly report was accurate.", name: "David Okafor", role: "CEO, Prime Logistics Hub", cat: "PRIVATE OWNER" },
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
      {/* Hero */}
      <div className="hero-bg" style={{ paddingTop: 160, paddingBottom: 64 }}>
        <div className="hero-shape hero-shape-tr" />
        <div className="hero-shape hero-shape-br" />
        <div className="hero-shape hero-shape-left-orange" />
        <div className="hero-shape hero-shape-left-dark" />
        <div className="hero-ruler" />
        <div className="hero-circle"><div style={{width:4, height:4, borderRadius:'50%', background:ORANGE, margin:'auto', marginTop:3}}/></div>
        <div className="hero-scroll-btn" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 700 }}>
            <Reveal x={-30}>
              <div className="orange-tag" style={{ marginBottom: 20 }}>BUILDING NIGERIA'S INFRASTRUCTURE</div>
            </Reveal>
            <Reveal delay={0.2} x={-50}>
              <h1 className="heading-font hero-title" style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 24, color: "#fff" }}>
                BUILDING<br />NIGERIA'S<br /><span style={{ color: ORANGE }}>FUTURE TODAY</span>
              </h1>
            </Reveal>
            <Reveal delay={0.4} y={20}>
              <p className="hero-subtitle-fix" style={{ fontSize: 16, maxWidth: 480, lineHeight: 1.7, marginBottom: 36 }}>
                Gambalt is a premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. We focus on long-term structural integrity and seamless project execution.
              </p>
            </Reveal>
            <Reveal delay={0.6} y={10}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="btn-orange" onClick={() => setPage("contact")}>CONSULTATION →</button>
                <button className="btn-outline" onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
              </div>
            </Reveal>
          </div>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 60 }} 
            className="grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((s, i) => (
              <motion.div key={s.n} variants={itemVariants} className="stat-card" style={{ background: CARD, borderLeft: `3px solid ${ORANGE}` }}>
                <div className="heading-font" style={{ fontSize: 40, fontWeight: 900, color: ORANGE }}>{s.n}</div>
                <div style={{ fontSize: 12, color: MUTED, letterSpacing: 1, textTransform: "uppercase" }}>{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About snippet */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <Reveal scale={0.95}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="construction" style={{ width: "100%", height: 380, objectFit: "cover" }} />
            </Reveal>
            <div>
              <Reveal x={30}>
                <div className="section-tag">ABOUT GAMBALT</div>
                <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 24, color: TEXT }}>
                  WE DELIVER INDUSTRIAL STRENGTH <span style={{ color: ORANGE }}>INFRASTRUCTURE</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2} y={20}>
                <p style={{ fontSize: 15, color: SUBTLE, lineHeight: 1.7, marginBottom: 20 }}>
                  From the Lagos-Ibadan Expressway to the Lekki Peninsula flood control network, our portfolio demonstrates our capacity to handle large-scale, complex engineering projects on time and within budget.
                </p>
              </Reveal>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["End-to-end project management", "Heavy machinery deployment", "Strict adherence to national safety standards"].map((p, i) => (
                  <motion.div key={p} variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 20, height: 20, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: 14, color: MUTED }}>{p}</span>
                  </motion.div>
                ))}
              </motion.div>
              <Reveal delay={0.5} y={10}>
                <div style={{ display: "flex", gap: 32, marginTop: 32 }}>
                  <div><div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>15+</div><div style={{ fontSize: 12, color: SUBTLE }}>YEARS EXPERIENCE</div></div>
                  <div><div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>250+</div><div style={{ fontSize: 12, color: SUBTLE }}>PROJECTS DONE</div></div>
                </div>
                <button className="btn-orange" style={{ marginTop: 28 }} onClick={() => setPage("about")}>VIEW FULL PROFILE</button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-tag">OUR EXPERTISE</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>CORE <span style={{ color: ORANGE }}>SERVICES</span></h2>
              <p style={{ color: SUBTLE, marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
                Comprehensive civil engineering solutions for commercial, industrial and government clients.
              </p>
            </div>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((s, i) => (
              <motion.div 
                key={s.title} 
                className="service-card" 
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                onClick={() => setPage("services")} 
                style={{ background: CARD, border: `1px solid ${BORDER}` }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>LEARN MORE →</span>
              </motion.div>
            ))}
          </motion.div>
          <Reveal delay={0.3} y={10}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <button className="btn-outline" onClick={() => setPage("services")}>VIEW ALL SERVICES</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Partner */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <div>
              <Reveal x={-30}>
                <div className="section-tag">THE GAMBALT ADVANTAGE</div>
                <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 32, color: TEXT }}>
                  WHY PARTNER WITH <span style={{ color: ORANGE }}>GAMBALT</span>
                </h2>
              </Reveal>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: "Government-Ready Vendor", desc: "Fully registered with relevant government bodies, making us an ideal choice for municipal, state, and federal infrastructure contracts." },
                  { title: "Heavy Machinery Fleet", desc: "Unlike firms that rely on rentals, Gambalt owns a massive fleet of heavy construction and infrastructure equipment." },
                  { title: "Uncompromising Safety", desc: "Zero-incident culture: every site follows strict HSE standards and our project managers prioritize safety at every level." },
                ].map(r => (
                  <motion.div key={r.title} variants={itemVariants} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                    <div style={{ width: 4, background: ORANGE, flexShrink: 0 }} />
                    <div>
                      <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 6 }}>{r.title}</h4>
                      <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6 }}>{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Reveal scale={0.95}>
              <div style={{ position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=700&q=80" alt="team" style={{ width: "100%", height: 420, objectFit: "cover" }} />
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ position: "absolute", bottom: 24, left: 24, background: CARD, border: `1px solid ${BORDER}`, padding: "20px 24px", maxWidth: 320 }}
                >
                  <div style={{ fontSize: 13, color: MUTED, fontStyle: "italic", lineHeight: 1.6, marginBottom: 12 }}>
                    "We don't just build structures — we build the foundations the Nigerian economy depends on."
                  </div>
                  <div style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>ENGR. SAMUEL BJO — MANAGING DIRECTOR</div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <Reveal x={-20}>
              <div>
                <div className="section-tag">OUR PORTFOLIO</div>
                <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>RECENT <span style={{ color: ORANGE }}>PROJECTS</span></h2>
              </div>
            </Reveal>
            <Reveal x={20}>
              <button className="btn-outline" onClick={() => setPage("projects")} style={{ flexShrink: 0 }}>VIEW ALL PROJECTS</button>
            </Reveal>
          </div>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} 
            className="grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((p, i) => (
              <motion.div 
                key={i} 
                className="project-card" 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setPage(p.id)} 
                style={{ background: CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="project-overlay" />
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 240, objectFit: "cover" }} />
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <span className="tag-orange">{p.cat}</span>
                    <span className="tag-green">{p.status}</span>
                  </div>
                  <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 8 }}>{p.title}</h3>
                  <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>VIEW DETAILS →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-tag">CLIENT SUCCESS</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>CLIENT <span style={{ color: ORANGE }}>TRUST</span></h2>
            </div>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={itemVariants} className="testimonial-card" style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32 }}>
                <span className="tag-orange" style={{ marginBottom: 16, display: "inline-block" }}>{t.cat}</span>
                <div style={{ color: ORANGE, fontSize: 32, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff" }}>
                    {t.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <Reveal y={40}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 52, fontWeight: 900, textTransform: "uppercase", marginBottom: 16 }}>READY TO BREAK GROUND?</h2>
            <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
              Our structural, transparent teams are ready for your next big project. Let's build together.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-black" onClick={() => setPage("contact")}>📞 +234 (0) 800 GAMBALT</button>
              <button style={{ background: "transparent", border: "2px solid rgba(0,0,0,0.4)", color: "#000", padding: "12px 28px", fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }} onClick={() => setPage("quote")}>SUBMIT AN ENQUIRY</button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
