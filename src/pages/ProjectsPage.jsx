import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";

export const ProjectsPage = ({ setPage }) => {
  const [filter, setFilter] = useState("All Projects");
  const filters = ["All Projects", "Infrastructure / Roads", "Commercial", "Residential", "Drainage Systems", "Institutional"];

  const projects = [
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Lagos-Ibadan Expressway Section II", desc: "Major highway reconstruction spanning 45km, including heavy-duty asphalt paving and structural works.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tag: "Infrastructure / Roads", id: "project-lagos" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Victoria Island Tech Hub", desc: "A 12-story commercial complex featuring smart building management systems and green energy.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", tag: "Commercial", id: "project-detail" },
    { cat: "DRAINAGE SYSTEMS", status: "COMPLETED 2022", title: "Lekki Peninsula Flood Control", desc: "Extensive underground drainage network covering 15 sq km to mitigate seasonal flooding.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80", tag: "Drainage Systems", id: "project-detail" },
    { cat: "INSTITUTIONAL", status: "COMPLETED 2021", title: "Federal Medical Center Extension", desc: "Construction of a new 200-bed ward facility adhering strictly to WHO healthcare infrastructure standards.", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80", tag: "Institutional", id: "project-detail" },
    { cat: "RESIDENTIAL", status: "ONGOING", title: "Opal Luxury Estate", desc: "Development of 50 premium detached duplexes with complete internal road networks.", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80", tag: "Residential", id: "project-detail" },
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Ogun State Interchange", desc: "Design and construction of a multi-level interchange to ease traffic congestion at major junction.", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", tag: "Infrastructure / Roads", id: "project-detail" },
  ];

  const visible = filter === "All Projects" ? projects : projects.filter(p => p.tag === filter);

  return (
    <div>
      <PageHero tag="OUR PORTFOLIO" title="DELIVERING" accent="EXCELLENCE ACROSS NIGERIA"
        img="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1600&q=80"
        subtitle="Explore our comprehensive track record of successful infrastructure, commercial, and residential projects." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }} className="fade-in">
            {filters.map((f, i) => (
              <button key={f} className={`filter-btn ${filter === f ? "active" : ""} slide-in-left delay-${(i % 5) + 1}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {visible.map((p, i) => (
              <div key={i} className={`project-card fade-up delay-${(i % 3) + 1}`} onClick={() => setPage(p.id)} style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <div className="project-overlay" />
                <div style={{ position: "relative" }} className="scale-in">
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
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn-outline">LOAD MORE PROJECTS</button>
          </div>
        </div>
      </section>

      {/* Gov vendor bar */}
      <div style={{ background: ORANGE, padding: "24px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="heading-font" style={{ fontSize: 20, fontWeight: 800, textTransform: "uppercase", color: "#000" }}>🏛 GOVERNMENT-READY VENDOR</div>
            <p style={{ fontSize: 13, color: "rgba(0,0,0,0.7)" }}>Fully certified and compliant for municipal, state, and federal infrastructure contracts.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["FMWH CERTIFIED", "BPP REGISTERED"].map(b => (
              <span key={b} style={{ border: "2px solid rgba(0,0,0,0.4)", padding: "8px 16px", fontFamily: "'Barlow Condensed'", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#000" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Have a project */}
      <section style={{ background: DARK, padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div style={{ fontSize: 40, marginBottom: 16 }}>🦺</div>
          <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12, color: TEXT }}>HAVE A SIMILAR PROJECT IN MIND?</h2>
          <p style={{ color: SUBTLE, marginBottom: 36, maxWidth: 500, margin: "12px auto 36px" }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button className="btn-orange" onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
            <button className="btn-outline" onClick={() => setPage("about")}>VIEW COMPANY PROFILE</button>
          </div>
        </div>
      </section>
    </div>
  );
};
