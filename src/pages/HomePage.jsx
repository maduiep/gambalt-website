import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";
import aboutWorkersImg from "../assets/images/about-workers.jpg";
import partnerWorkersImg from "../assets/images/partner-workers.jpg";
import gambaltHeroImg from "../assets/images/gambalt-hero.jpg";
import imgLagosIbadan from "../assets/images/lagos-ibadan-expressway.png";
import imgTechHub from "../assets/images/victoria-island-techhub.png";
import imgBridgeWorks from "../assets/images/ogun-bridge-works.png";
import imgManufacturing from "../assets/images/ogun-manufacturing-plant.png";

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
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Lagos-Ibadan Expressway Expansion", img: imgLagosIbadan, id: "project-lagos" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Victoria Island Tech Hub", img: imgTechHub, id: "project-techhub" },
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Ogun State Bridge Works", img: imgBridgeWorks, id: "project-bridge" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Ogun State Manufacturing Plant", img: imgManufacturing, id: "project-manufacturing" },
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
      <div className="hero-bg" style={{ paddingTop: 160, paddingBottom: 64, backgroundColor: "#000" }}>
        {/* Animated Background Image */}
        <div 
          className="hero-ken-burns" 
          style={{ 
            position: "absolute", 
            inset: -20, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundImage: `url(${gambaltHeroImg})`, 
            zIndex: 0 
          }} 
        />

        {/* Left side text background dark gradient - fades before crossing the black line */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 40%, transparent 60%)", zIndex: 1 }} />
        
        {/* Solid Black chevron line (no overlay/transparency effect) */}
        <div style={{ position: "absolute", inset: 0, background: "#111", clipPath: "polygon(58% 0, 62% 0, 49% 50%, 62% 100%, 58% 100%, 45% 50%)", zIndex: 1 }} />
        
        {/* Orange right-hand side overlay (Primary Color - transparent overlay effect) */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(232, 84, 26, 0.3)", clipPath: "polygon(100% 0, 62% 0, 49% 50%, 62% 100%, 100% 100%)", zIndex: 1 }} />

        <div className="hero-scroll-btn" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})} style={{ zIndex: 2 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 640 }}>
            <Reveal x={-30}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", border: `1px solid rgba(232,84,26,0.3)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <div style={{ width: 6, height: 6, borderRadius: "50%", background: ORANGE }}></div>
                </div>
                <div style={{ color: "#FFF", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                  GREAT EXPERIENCE IN BUILDING
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} x={-50}>
              <h1 className="heading-font hero-title" style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: "#fff", textTransform: "uppercase" }}>
                We Building<br />For A Better<br />Futures
              </h1>
            </Reveal>
            <Reveal delay={0.4} y={20}>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 36, maxWidth: 500 }}>
                Gambalt is a premier civil engineering and infrastructure consultancy delivering industrial-strength solutions and future-ready developments with uncompromising precision.
              </p>
            </Reveal>
            <Reveal delay={0.6} y={10}>
              <button className="btn-orange" onClick={() => setPage("contact")} style={{ padding: "16px 36px", fontSize: 14 }}>
                LET'S GET STARTED <span style={{ marginLeft: 8 }}>→</span>
              </button>
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
      <section className="about-section" style={{ background: DARK, padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="grid-2">
            {/* Left: Image with decorative elements */}
            <Reveal scale={0.95}>
              <div className="about-image-wrapper">
                {/* Decorative accent rectangle */}
                <div className="about-accent-rect" />
                {/* Main image */}
                <img
                  src={aboutWorkersImg}
                  alt="Gambalt construction workers reviewing project blueprints"
                  className="about-main-img"
                />
                {/* Government Ready Vendor badge */}
                <motion.div
                  className="about-vendor-badge"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="heading-font about-vendor-title">GOVERNMENT</div>
                  <div className="about-vendor-subtitle">READY VENDOR</div>
                </motion.div>
              </div>
            </Reveal>

            {/* Right: Content */}
            <div>
              <Reveal x={30}>
                <div className="about-tag-wrapper">
                  <span className="about-tag-line" />
                  <span className="section-tag" style={{ marginBottom: 0 }}>ABOUT GAMBALT</span>
                </div>
                <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 28, color: TEXT }}>
                  WE DELIVER INDUSTRIAL STRENGTH<br />
                  <span style={{ color: ORANGE, fontStyle: "italic" }}>INFRASTRUCTURE</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2} y={20}>
                <p style={{ fontSize: 15, color: SUBTLE, lineHeight: 1.75, marginBottom: 24 }}>
                  Gambalt is not just another consultancy. We are hands-on builders, deeply rooted in the Nigerian landscape. Our project-delivery focus ensures that from initial survey to final concrete pour, your infrastructure stands the test of time.
                </p>
              </Reveal>
              <Reveal delay={0.3} y={20}>
                <p style={{ fontSize: 15, color: SUBTLE, lineHeight: 1.75, marginBottom: 32 }}>
                  With a fleet of modern machinery and a team of seasoned civil engineers, we tackle complex structural challenges with industrial precision and unwavering commitment to safety.
                </p>
              </Reveal>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ marginBottom: 36 }}
              >
                {["End-to-end project management", "Heavy machinery deployment", "Strict adherence to national safety codes"].map((p, i) => (
                  <motion.div key={p} variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M3 9.5L7 13.5L15 4.5" stroke="#E8541A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 15, fontWeight: 600, color: TEXT }}>{p}</span>
                  </motion.div>
                ))}
              </motion.div>
              <Reveal delay={0.5} y={10}>
                <button className="btn-read-story" onClick={() => setPage("about")}>READ OUR FULL STORY</button>
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
      <section style={{ background: DARK, padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "center" }} className="grid-2">
            <div>
              <Reveal x={-30}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>
                  <div style={{ width: 40, height: 2, background: ORANGE }} />
                  THE GAMBALT ADVANTAGE
                </div>
                <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, textTransform: "uppercase", marginBottom: 40, color: TEXT }}>
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
                  { 
                    title: "GOVERNMENT-READY VENDOR", 
                    desc: "Fully compliant, licensed, and vetted to handle large-scale municipal, state, and federal infrastructure contracts with complete transparency.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    )
                  },
                  { 
                    title: "HEAVY MACHINERY FLEET", 
                    desc: "We own and operate a massive fleet of modern excavators, cranes, graders, and loaders, eliminating rental delays and cutting costs.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    )
                  },
                  { 
                    title: "UNCOMPROMISING SAFETY", 
                    desc: "Industrial-grade safety protocols enforced on every site. Zero compromises when it comes to the wellbeing of our workers and the structural integrity of the build.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 18v-3c0-4.4-3.6-8-8-8s-8 3.6-8 8v3"/>
                        <path d="M12 7V3"/>
                        <path d="M3 18h18"/>
                        <path d="M21 18v2H3v-2"/>
                      </svg>
                    )
                  },
                ].map((r, i) => (
                  <motion.div key={r.title} variants={itemVariants} style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                    <div style={{ width: 64, height: 64, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {r.icon}
                    </div>
                    <div>
                      <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 8 }}>{r.title}</h4>
                      <p style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.6 }}>{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Reveal scale={0.95}>
              <div style={{ position: "relative" }}>
                {/* Decorative subtle circle behind the quote box */}
                <div style={{ position: "absolute", bottom: -60, left: -80, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.02)", zIndex: 0 }} />
                
                <img src={partnerWorkersImg} alt="Gambalt partners" style={{ width: "100%", height: 500, objectFit: "cover", position: "relative", zIndex: 1, border: `1px solid ${BORDER}` }} />
                
                <motion.div 
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ position: "absolute", bottom: -24, left: -40, background: ORANGE, padding: "32px", maxWidth: 360, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                >
                  <div style={{ fontSize: 64, color: "rgba(255,255,255,0.2)", lineHeight: 0.5, marginBottom: 12, fontWeight: 900, fontFamily: "serif" }}>"</div>
                  <div style={{ fontSize: 16, color: "#FFF", fontWeight: 500, lineHeight: 1.6, marginBottom: 24 }}>
                    "We don't just build structures; we build the foundations for Nigeria's economic growth."
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: BLACK, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: 16 }}>
                      CE
                    </div>
                    <div>
                      <div style={{ color: "#FFF", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>CHIEF ENGINEER</div>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, textTransform: "uppercase", marginTop: 4 }}>GAMBALT CONSULT</div>
                    </div>
                  </div>
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
            <Reveal x={-20} width="auto">
              <div>
                <div className="section-tag">OUR PORTFOLIO</div>
                <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>RECENT <span style={{ color: ORANGE }}>PROJECTS</span></h2>
              </div>
            </Reveal>
            <Reveal x={20} width="auto">
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
            <p style={{ fontSize: 16, color: "#fff", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
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
