import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";

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

  return (
    <div>
      {/* Hero */}
      <div className="hero-bg" style={{ paddingTop: 68 }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <div className="orange-tag fade-up" style={{ marginBottom: 20 }}>BUILDING NIGERIA'S INFRASTRUCTURE</div>
            <h1 className="heading-font fade-up-delay hero-title" style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 24 }}>
              BUILDING<br />NIGERIA'S<br /><span style={{ color: ORANGE }}>FUTURE TODAY</span>
            </h1>
            <p className="fade-up-delay2" style={{ fontSize: 16, color: "#ccc", maxWidth: 480, lineHeight: 1.7, marginBottom: 36 }}>
              Gambalt is a premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. We focus on long-term structural integrity and seamless project execution.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-orange" onClick={() => setPage("contact")}>CONSULTATION →</button>
              <button className="btn-outline" onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 60 }} className="grid-4">
            {stats.map(s => (
              <div key={s.n} className="stat-card">
                <div className="heading-font" style={{ fontSize: 40, fontWeight: 900, color: ORANGE }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About snippet */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <div>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="construction" style={{ width: "100%", height: 380, objectFit: "cover" }} />
            </div>
            <div>
              <div className="section-tag">ABOUT GAMBALT</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 24 }}>
                WE DELIVER INDUSTRIAL STRENGTH <span style={{ color: ORANGE }}>INFRASTRUCTURE</span>
              </h2>
              <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7, marginBottom: 20 }}>
                From the Lagos-Ibadan Expressway to the Lekki Peninsula flood control network, our portfolio demonstrates our capacity to handle large-scale, complex engineering projects on time and within budget.
              </p>
              {["End-to-end project management", "Heavy machinery deployment", "Strict adherence to national safety standards"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 20, height: 20, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: 14, color: "#ccc" }}>{p}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: 32, marginTop: 32 }}>
                <div><div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>15+</div><div style={{ fontSize: 12, color: "#777" }}>YEARS EXPERIENCE</div></div>
                <div><div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>250+</div><div style={{ fontSize: 12, color: "#777" }}>PROJECTS DONE</div></div>
              </div>
              <button className="btn-orange" style={{ marginTop: 28 }} onClick={() => setPage("about")}>VIEW FULL PROFILE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">OUR EXPERTISE</div>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>CORE <span style={{ color: ORANGE }}>SERVICES</span></h2>
            <p style={{ color: "#777", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              Comprehensive civil engineering solutions for commercial, industrial and government clients.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {services.map(s => (
              <div key={s.title} className="service-card" onClick={() => setPage("services")}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>LEARN MORE →</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-outline" onClick={() => setPage("services")}>VIEW ALL SERVICES</button>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <div>
              <div className="section-tag">THE GAMBALT ADVANTAGE</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 32 }}>
                WHY PARTNER WITH <span style={{ color: ORANGE }}>GAMBALT</span>
              </h2>
              {[
                { title: "Government-Ready Vendor", desc: "Fully registered with relevant government bodies, making us an ideal choice for municipal, state, and federal infrastructure contracts." },
                { title: "Heavy Machinery Fleet", desc: "Unlike firms that rely on rentals, Gambalt owns a massive fleet of heavy construction and infrastructure equipment." },
                { title: "Uncompromising Safety", desc: "Zero-incident culture: every site follows strict HSE standards and our project managers prioritize safety at every level." },
              ].map(r => (
                <div key={r.title} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                  <div style={{ width: 4, background: ORANGE, flexShrink: 0 }} />
                  <div>
                    <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>{r.title}</h4>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=700&q=80" alt="team" style={{ width: "100%", height: 420, objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, background: "rgba(0,0,0,0.9)", border: `1px solid ${BORDER}`, padding: "20px 24px", maxWidth: 320 }}>
                <div style={{ fontSize: 13, color: "#ccc", fontStyle: "italic", lineHeight: 1.6, marginBottom: 12 }}>
                  "We don't just build structures — we build the foundations the Nigerian economy depends on."
                </div>
                <div style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>ENGR. SAMUEL BJO — MANAGING DIRECTOR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <div className="section-tag">OUR PORTFOLIO</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>RECENT <span style={{ color: ORANGE }}>PROJECTS</span></h2>
            </div>
            <button className="btn-outline" onClick={() => setPage("projects")} style={{ flexShrink: 0 }}>VIEW ALL PROJECTS</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
            {projects.map((p, i) => (
              <div key={i} className="project-card" onClick={() => setPage(p.id)}>
                <div className="project-overlay" />
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 240, objectFit: "cover" }} />
                <div style={{ padding: "20px 24px", background: CARD }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <span className="tag-orange">{p.cat}</span>
                    <span className="tag-green">{p.status}</span>
                  </div>
                  <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>{p.title}</h3>
                  <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>VIEW DETAILS →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">CLIENT SUCCESS</div>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>CLIENT <span style={{ color: ORANGE }}>TRUST</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="tag-orange" style={{ marginBottom: 16, display: "inline-block" }}>{t.cat}</span>
                <div style={{ color: ORANGE, fontSize: 32, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>
                    {t.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#777" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </div>
  );
};

