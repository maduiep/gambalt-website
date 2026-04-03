import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";

export const ServicesPage = ({ setPage }) => {
  const [expanded, setExpanded] = useState(0);
  const services = [
    { icon: "🛣", title: "Road Construction & Paving", desc: "High-durability road networks designed to withstand heavy industrial traffic and extreme weather conditions. Focus on long-term structural integrity.", details: ["Asphalt concrete binder and wearing course", "Pavement marking & signage", "Drainage integration", "Traffic management systems"] },
    { icon: "🏗", title: "Commercial Structures", desc: "End-to-end construction of high-rise commercial buildings, industrial warehouses, and corporate facilities built to international standards.", details: ["Foundation engineering", "Structural steel framework", "MEP integration", "Project closeout & handover"] },
    { icon: "🌉", title: "Bridge Engineering", desc: "Design and construction of robust bridges and overpasses, ensuring critical infrastructure connectivity over challenging terrains and waterways.", details: ["Pre-stressed concrete design", "Geotechnical investigation", "Load analysis & fatigue testing", "Expansion joint systems"] },
    { icon: "⛏", title: "Earthworks & Excavation", desc: "Massive-scale land clearing, grading, and excavation utilizing our extensive fleet of heavy machinery to prepare sites for major developments.", details: ["Bulk earthworks", "Site leveling & compaction", "Dewatering systems", "Slope stabilization"] },
  ];

  return (
    <div>
      <PageHero tag="OUR EXPERTISE" title="INDUSTRIAL STRENGTH" accent="SERVICES" img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
        subtitle="Comprehensive civil engineering and construction solutions designed for maximum durability, efficiency, and compliance. We deliver outcomes, not just outputs." />

      {/* Industries bar */}
      <div className="industries-bar fade-in" style={{ background: CARD, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          <span className="slide-in-left" style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: MUTED }}>INDUSTRIES SERVED:</span>
          {["🏛 GOVERNMENT", "🏭 INDUSTRIAL", "🏢 COMMERCIAL", "🏗 INFRASTRUCTURE"].map((i, idx) => (
            <span key={i} className={`fade-in delay-${idx+1}`} style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: TEXT }}>{i}</span>
          ))}
        </div>
      </div>

      {/* Services accordion */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          {services.map((s, i) => (
            <div key={i} className={`accordion-item ${expanded === i ? "open" : ""} fade-up delay-${(i % 4) + 1}`} style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div style={{ padding: "24px 32px", display: "flex", alignItems: "center", gap: 20, cursor: "pointer", background: expanded === i ? CARD : "transparent" }}
                onClick={() => setExpanded(expanded === i ? -1 : i)}>
                <div style={{ fontSize: 28, width: 48, textAlign: "center" }} className="scale-in">{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 className="heading-font" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: SUBTLE, marginTop: 4 }}>{s.desc}</p>
                </div>
                <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700, flexShrink: 0 }}>{expanded === i ? "−" : "+"}</span>
              </div>
              {expanded === i && (
                <div style={{ padding: "0 32px 28px 100px", background: CARD }} className="fade-in">
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                    {s.details.map(d => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: ORANGE }}>✓</span>
                        <span style={{ fontSize: 13, color: MUTED }}>{d}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-orange fade-up" style={{ marginTop: 20 }} onClick={() => setPage("service-detail")}>VIEW FULL SERVICE →</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA form */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🦺</div>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>START YOUR NEXT PROJECT WITH GAMBALT</h2>
            <p style={{ color: SUBTLE, marginTop: 12 }}>Whether you need comprehensive infrastructure build or specialized civil engineering services, our team is ready.</p>
          </div>
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
              <select className="form-select" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }}>
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
            <button className="btn-orange" style={{ width: "100%", textAlign: "center", padding: 16 }} onClick={() => setPage("quote")}>SUBMIT REQUEST</button>
          </div>
        </div>
      </section>
    </div>
  );
};
