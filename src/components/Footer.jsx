import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";
import { Logo } from "../components/Logo";

export const Footer = ({ setPage }) => (
  <footer className="footer">
    <div className="container" style={{ padding: "60px 32px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 40, marginBottom: 48 }}
        className="grid-4">
        <div>
          <Logo onClick={() => setPage("home")} />
          <p style={{ marginTop: 16, fontSize: 13, color: "#888", lineHeight: 1.7, maxWidth: 260 }}>
            Premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. Built on precision, powered by heavy machinery.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {["in", "𝕏", "f"].map(s => (
              <div key={s} style={{ width: 34, height: 34, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#999", cursor: "pointer" }}>{s}</div>
            ))}
          </div>
        </div>
        <div>
          <p className="heading-font" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, color: "#fff" }}>Company</p>
          {[["About Us", "about"], ["Our Projects", "projects"], ["How It Works", "how-it-works"], ["Heavy Machinery Fleet", "about"], ["Contact Us", "contact"]].map(([l, p]) => (
            <p key={l} style={{ fontSize: 13, color: "#777", marginBottom: 10, cursor: "pointer" }}
              onClick={() => setPage(p)}>› {l}</p>
          ))}
        </div>
        <div>
          <p className="heading-font" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, color: "#fff" }}>Core Services</p>
          {["Road Construction", "Commercial Structures", "Earthworks & Excavation", "Bridge Engineering", "Project Management"].map(s => (
            <p key={s} style={{ fontSize: 13, color: "#777", marginBottom: 10, cursor: "pointer" }}
              onClick={() => setPage("services")}>› {s}</p>
          ))}
        </div>
        <div>
          <p className="heading-font" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, color: "#fff" }}>Head Office</p>
          <div style={{ fontSize: 13, color: "#777", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 8 }}>📍 15 Industrial Avenue, Victoria Island, Lagos, Nigeria</p>
            <p style={{ marginBottom: 8 }}>📞 +234 (0) 800 123 4567</p>
            <p style={{ marginBottom: 8 }}>📞 +234 (0) 901 234 5678</p>
            <p style={{ marginBottom: 4 }}>✉ info@gambalt.com</p>
            <p>✉ quotes@gambalt.com</p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: 12, color: "#555" }}>© 2025 Gambalt Civil Engineering Consultancy. All rights reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Service", "Safety Policy"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "#555", cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

