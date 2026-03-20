import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";

export const ServiceDetailPage = ({ setPage }) => (
  <div>
    <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80') center/cover`, minHeight: 400, display: "flex", alignItems: "flex-end", paddingBottom: 48, paddingTop: 68 }}>
      <div className="container">
        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600 }} onClick={() => setPage("services")}>← Back to Services</span>
          <span style={{ color: "#555" }}>|</span>
          <span className="tag-orange">INFRASTRUCTURE</span>
        </div>
        <h1 className="heading-font" style={{ fontSize: 64, fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}>
          ROAD CONSTRUCTION<br /><span style={{ color: ORANGE }}>& PAVING</span>
        </h1>
        <p style={{ marginTop: 16, fontSize: 15, color: "#ccc", maxWidth: 500 }}>Delivering high-durability road networks designed to withstand heavy industrial traffic and extreme weather conditions. We focus on long-term structural integrity and seamless project execution.</p>
        <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
          <button className="btn-orange" onClick={() => setPage("quote")}>REQUEST A CONSULTATION</button>
          <button className="btn-outline">VIEW DELIVERABLES</button>
        </div>
      </div>
    </div>
    <section style={{ background: "#fff", padding: "60px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 36, textTransform: "uppercase", color: "#111", marginBottom: 24 }}>
          Engineering Assessment & Planning
        </h2>
        <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 700 }}>We conduct in-depth assessments with GIS managers and municipal planners on structural load parameters, load assessment, compliance needs, and environmental factors, including an in-depth analysis on quality controls and vetting requirements.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {[["Land area regularization improvement through adherence to force calibration", "60%"], ["The market opens to follow-on quote information partner or a third new project", "70%"], ["Preparation in hours needed to take the incremental start-up time", "56.6%"], ["Compliance with licensed Ministry of Public Maintaining government vessel to main projects", "100%"]].map(([l, v]) => (
            <div key={l} style={{ background: "#f5f5f5", padding: 20 }}>
              <p style={{ fontSize: 13, color: "#555", marginBottom: 12 }}>{l}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ flex: 1, height: 6, background: "#ddd", borderRadius: 3 }}>
                  <div style={{ width: v, height: "100%", background: ORANGE, borderRadius: 3 }} />
                </div>
                <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, color: "#111", fontSize: 16 }}>{v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="section" style={{ background: BLACK }}>
      <div className="container">
        <div className="section-tag">SCOPE & DELIVERABLES</div>
        <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 8 }}>
          SCOPE & <span style={{ color: ORANGE }}>DELIVERABLES</span>
        </h2>
        <p style={{ color: "#777", marginBottom: 40 }}>A comprehensive overview of our road construction services, managed by delivery phase.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
          {[["Site Preparation", ["Clearing & grubbing", "Soil survey & testing", "Subgrade preparation", "Compaction equipment"]], ["Construction", ["Asphalt mixing & laying", "Pavement marking", "Drainage channels", "Survey monitoring"]], ["Quality & Compliance", ["Load & fatigue testing", "Regulatory sign-off", "Documentation", "Final handover"]]].map(([title, items]) => (
            <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24 }}>
              <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 16, color: ORANGE }}>{title}</h4>
              {items.map(i => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <span style={{ color: ORANGE, fontSize: 12 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#ccc" }}>{i}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="cta-section">
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>START YOUR ROAD PROJECT WITH GAMBALT</h2>
        <button className="btn-black" style={{ marginTop: 24 }} onClick={() => setPage("quote")}>SUBMIT A QUOTE REQUEST</button>
      </div>
    </div>
  </div>
);

