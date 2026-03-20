import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";
import { PageHero } from "../components/PageHero";

export const HowItWorksPage = ({ setPage }) => {
  const [open, setOpen] = useState(0);
  const steps = [
    { n: "01", title: "Initial Consultation", sub: "DISCOVERY & ALIGNMENT", desc: "We begin by understanding your project's fundamental requirements, scope, and constraints. Our senior engineers meet with stakeholders to establish clear objectives and identify potential red flags early in the process.", items: ["Needs assessment & site history review", "Preliminary budget & timeline discussions", "Stakeholder alignment workshops"], img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" },
    { n: "02", title: "Engineering Assessment", sub: "SITE ANALYSIS & FEASIBILITY", desc: "Our technical team conducts thorough site investigations including geotechnical surveys, soil analysis, and structural assessments to build a precise understanding of what your project demands.", items: ["Geotechnical site investigation", "Topographic & structural surveys", "Feasibility & risk analysis report"], img: "https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=500&q=80" },
    { n: "03", title: "Technical Planning", sub: "DESIGN & ENGINEERING", desc: "Our engineering team produces detailed design drawings, specifications, BOQs, and execution plans. All plans undergo rigorous internal QA review before client presentation.", items: ["Structural design & drafting", "Bill of Quantities preparation", "Regulatory pre-approval documentation"], img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80" },
    { n: "04", title: "Project Execution Support", sub: "DELIVERY & SUPERVISION", desc: "With plans approved, our machinery and site teams mobilize. A resident engineer supervises all works daily while weekly progress reports keep clients fully informed throughout construction.", items: ["Full mobilization & site setup", "Daily engineering supervision", "Weekly client progress reports"], img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80" },
  ];

  return (
    <div>
      <PageHero tag="OUR PROCESS" title="HOW WE DELIVER" accent="EXCELLENCE" img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
        subtitle="A structured, hands-on approach to transforming complex engineering challenges into successfully delivered infrastructure projects." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase" }}>THE GAMBALT <span style={{ color: ORANGE }}>METHODOLOGY</span></h2>
            <p style={{ color: "#777", marginTop: 12 }}>A transparent, 4-step framework designed to mitigate risk and ensure project success.</p>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {steps.map((s, i) => (
              <div key={i} className={`process-step ${open === i ? "active" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ width: 44, height: 44, background: open === i ? ORANGE : "rgba(232,84,26,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="heading-font" style={{ fontSize: 16, fontWeight: 800 }}>{s.n}</span>
                    </div>
                    <div>
                      <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase" }}>{s.title}</h3>
                      <span style={{ color: ORANGE, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.sub}</span>
                    </div>
                  </div>
                  <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700 }}>{open === i ? "∧" : "∨"}</span>
                </div>
                {open === i && (
                  <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                    <div>
                      <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                      {s.items.map(it => (
                        <div key={it} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <span style={{ color: ORANGE }}>✓</span>
                          <span style={{ fontSize: 13, color: "#ccc" }}>{it}</span>
                        </div>
                      ))}
                      <button className="btn-orange" style={{ marginTop: 16 }} onClick={(e) => { e.stopPropagation(); setPage("contact"); }}>REQUEST A CONSULTATION</button>
                    </div>
                    <img src={s.img} alt={s.title} style={{ width: 180, height: 130, objectFit: "cover", flexShrink: 0 }} className="hide-mobile" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase" }}>BUILT ON <span style={{ color: ORANGE }}>PRECISION</span></h2>
            <p style={{ color: "#777", marginTop: 12 }}>Why clients trust our structured delivery methodology.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
            {[{ icon: "⏱", title: "Time Efficiency", desc: "Early risk identification prevents costly delays during the construction phase." }, { icon: "⚖️", title: "Budget Control", desc: "Accurate BOQs and rigorous senior management keep expenditures within approved limits." }, { icon: "🛡", title: "Risk Mitigation", desc: "Strict adherence to ISO safety standards and environmental regulations at every step." }].map(c => (
              <div key={c.title} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32, textAlign: "center" }}>
                <div style={{ width: 60, height: 60, background: "rgba(232,84,26,0.15)", border: `1px solid rgba(232,84,26,0.3)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 24 }}>{c.icon}</div>
                <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO START YOUR PROJECT?</h2>
          <button className="btn-black" style={{ marginTop: 20 }} onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
        </div>
      </div>
    </div>
  );
};

