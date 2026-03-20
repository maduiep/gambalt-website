import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";

export const ContactPage = ({ setPage }) => (
  <div>
    <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80') center/cover`, minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: 68 }}>
      <div>
        <div className="orange-tag" style={{ marginBottom: 20 }}>GET IN TOUCH</div>
        <h1 className="heading-font" style={{ fontSize: 68, fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}>LET'S BUILD <span style={{ color: ORANGE }}>TOGETHER</span></h1>
        <p style={{ fontSize: 15, color: "#ccc", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.6 }}>Ready to start your next infrastructure project? Contact our team of experts for a comprehensive consultation and precise execution strategy.</p>
      </div>
    </div>

    <section style={{ background: BLACK, padding: "80px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }} className="grid-2">
          <div>
            <div className="orange-bar" />
            <h2 className="heading-font" style={{ fontSize: 32, fontWeight: 800, textTransform: "uppercase", marginBottom: 36 }}>CONTACT INFORMATION</h2>
            {[{ icon: "📍", title: "HEAD OFFICE", lines: ["15 Industrial Avenue,", "Victoria Island,", "Lagos, Nigeria"] }, { icon: "📞", title: "PHONE", lines: ["08028542972"] }, { icon: "✉", title: "EMAIL", lines: ["gambalt.partnersltd@yahoo.com"] }, { icon: "🕐", title: "BUSINESS HOURS", lines: ["Monday – Friday", "8:00 AM – 5:00 PM"] }].map(c => (
              <div key={c.title} className="contact-info-item">
                <div className="icon-box">{c.icon}</div>
                <div>
                  <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6, color: ORANGE }}>{c.title}</h4>
                  {c.lines.map(l => <p key={l} style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{l}</p>)}
                </div>
              </div>
            ))}
            <div style={{ background: "#1a1a1a", height: 200, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${BORDER}`, marginTop: 8 }}>
              <div style={{ textAlign: "center", color: "#555" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🗺</div>
                <p style={{ fontSize: 13 }}>Victoria Island, Lagos</p>
                <p style={{ fontSize: 11 }}>Map embed available in production</p>
              </div>
            </div>
          </div>

          <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 36 }}>
            <h3 className="heading-font" style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", marginBottom: 8 }}>REQUEST A CONSULTATION</h3>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 28 }}>Fill out the form below and our engineering team will get back to you within 24 hours.</p>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input className="form-input" placeholder="John Doe" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input className="form-input" placeholder="+234 800 000 0000" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-input" placeholder="john@company.com" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Project Type *</label>
              <select className="form-select">
                <option>Select a project category</option>
                <option>Road Construction</option>
                <option>Commercial Structure</option>
                <option>Bridge Engineering</option>
                <option>Earthworks & Excavation</option>
                <option>Drainage Systems</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Project Details *</label>
              <textarea className="form-textarea" placeholder="Briefly describe your project requirements, timeline, and any specific engineering challenges..." />
            </div>
            <button className="btn-orange" style={{ width: "100%", padding: 16, fontSize: 15 }} onClick={() => setPage("thank-you")}>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </section>

    {/* Have a budget */}
    <div className="cta-section">
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>HAVE A BUDGETED PROJECT?</h2>
        <p style={{ marginBottom: 28, opacity: 0.9 }}>If you already have a defined scope and budget, skip the general consultation and request a detailed preliminary quote from our estimating team.</p>
        <button className="btn-black" onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
      </div>
    </div>
  </div>
);

