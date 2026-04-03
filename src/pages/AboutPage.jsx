import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";

export const AboutPage = ({ setPage }) => {
  const values = [
    { icon: "🎯", title: "Integrity", desc: "Unwavering honesty in our business processes, transparent communication with stakeholders, and ethical practices at all our worksites." },
    { icon: "⚙️", title: "Technical Excellence", desc: "Applying disciplined engineering principles and leveraging modern machinery to overcome complex structural challenges." },
    { icon: "🦺", title: "Safety & Compliance", desc: "Zero compromise on site safety. Strict adherence to national building codes and international safety standards." },
    { icon: "🤝", title: "Client Collaboration", desc: "Working hand-in-hand with government agencies and private clients to ensure visions are realized exactly as planned." },
    { icon: "🌿", title: "Sustainable Development", desc: "Building infrastructure that respects the environment and provides long-lasting value for future generations." },
  ];

  const team = [
    { name: "Engr. Samuel Bjo", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", desc: "15+ years experience in large-scale civil works and infrastructure engineering since arrival." },
    { name: "Aisha Mohammed", role: "Chief Operations Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", desc: "Responsible for heavy machinery logistics, site operations, and management of project portfolios." },
    { name: "Engr. David Nwachukwu", role: "Head of Safety & Compliance", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", desc: "Ensures all project documentation meets government regulations and ISO standards company-wide." },
  ];

  return (
    <div>
      <PageHero tag="WHO WE ARE" title="WE" accent="BUILD." img="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" />

      {/* Company overview */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <div className="fade-in">
              <div className="section-tag slide-in-left">COMPANY OVERVIEW</div>
              <h2 className="heading-font slide-in-left delay-1" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 24 }}>
                DELIVERING INDUSTRIAL STRENGTH <span style={{ color: ORANGE }}>SINCE DAY ONE</span>
              </h2>
              <p className="fade-in delay-2" style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 16 }}>
                Gambalt is a premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. We are not just contractors; we are builders deeply committed to the structural integrity and long-term viability of every project we touch.
              </p>
              <p className="fade-in delay-3" style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 28 }}>
                Our mission is to spearhead and modernize infrastructure that drives economic growth and improves communities, while maintaining the highest standards of safety and technical excellence.
              </p>
              <div style={{ display: "flex", gap: 32 }} className="fade-up delay-4">
                {[["15+", "Years Experience"], ["250+", "Projects Done"], ["100%", "Safety Record"]].map(([n, l]) => (
                  <div key={n}>
                    <div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>{n}</div>
                    <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: 1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=700&q=80" alt="team" className="blur-in delay-2" style={{ width: "100%", height: 400, objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">OUR FOUNDATION</div>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>CORE <span style={{ color: ORANGE }}>VALUES</span></h2>
            <p style={{ color: SUBTLE, marginTop: 12 }}>Five principles that drive our operations and define our culture on every job site.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {values.map((v, i) => (
              <div key={v.title} className={`value-card fade-up delay-${(i % 3) + 1}`}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-section">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 24 }}>READY TO DISCUSS YOUR NEXT INFRASTRUCTURE PROJECT?</h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button className="btn-black" onClick={() => setPage("contact")}>REQUEST A CONSULTATION</button>
            <button style={{ background: "transparent", border: "2px solid rgba(0,0,0,0.4)", color: "#000", padding: "12px 28px", fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }} onClick={() => setPage("services")}>VIEW OUR SERVICES</button>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <section style={{ background: BLACK, padding: "80px 0" }}>
        <div className="container">
          <div className="section-tag">THE EXPERTS</div>
          <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", marginBottom: 48 }}>LEADERSHIP <span style={{ color: ORANGE }}>TEAM</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
            {team.map((t, i) => (
              <div key={t.name} className={`team-card fade-up delay-${i+1}`}>
                <img src={t.img} alt={t.name} className="team-img" />
                <div style={{ background: CARD, padding: "20px 24px", borderTop: `3px solid ${ORANGE}` }}>
                  <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase" }}>{t.name}</h3>
                  <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{t.role}</p>
                  <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.5 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="grid-2">
            <div>
              <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 32 }}>
                CREDENTIALS & <span style={{ color: ORANGE }}>APPROACH</span>
              </h2>
              {[
                { n: "01", title: "Government-Vetted Vendor", desc: "Fully registered with national procurement boards, making us an ideal partner for infrastructure contracts at any scale." },
                { n: "02", title: "Owned Machinery Fleet", desc: "Unlike firms that rely on rentals, Gambalt owns a massive fleet of heavy equipment to ensure speed on every project." },
                { n: "03", title: "Hands-on Project Delivery", desc: "Our leadership visits each site in rotation. We provide hands-on feedback to site managers from consultation to final handover." },
              ].map(c => (
                <div key={c.n} style={{ display: "flex", gap: 20, marginBottom: 24 }}>
                  <div className="heading-font" style={{ fontSize: 24, fontWeight: 900, color: ORANGE, flexShrink: 0 }}>{c.n}</div>
                  <div>
                    <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>{c.title}</h4>
                    <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ color: ORANGE, fontSize: 60, lineHeight: 1, marginBottom: 20 }}>"</div>
              <p style={{ fontSize: 18, fontStyle: "italic", color: MUTED, lineHeight: 1.7, marginBottom: 24 }}>
                "When developers and government agencies need absolute certainty that an infrastructure project will be delivered on time, within budget, and to exact specifications, they call Gambalt."
              </p>
              <button className="btn-outline-orange" style={{ alignSelf: "flex-start" }} onClick={() => setPage("about")}>CREDIBILITY STATEMENT</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
