import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";

export const RequestQuotePage = ({ setPage }) => (
  <div style={{ background: BLACK, minHeight: "100vh", paddingTop: 68 }}>
    <div className="container" style={{ padding: "60px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }} className="grid-2">
        <div>
          <h1 className="heading-font" style={{ fontSize: 60, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>
            REQUEST A <span style={{ color: ORANGE }}>QUOTE</span>
          </h1>
          <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 32 }}>
            Provide us with the details of your upcoming project. Our estimation team will review your requirements and deliver a comprehensive preliminary quote within 48 hours.
          </p>
          {[{ icon: "⚡", text: "Fast 48-hour response time" }, { icon: "🔒", text: "100% secure and private data handling" }, { icon: "🦺", text: "Safety-first compliance on all estimates" }].map(f => (
            <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, background: "rgba(232,84,26,0.2)", border: `1px solid rgba(232,84,26,0.4)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{f.icon}</div>
              <span style={{ fontSize: 14, color: "#ccc" }}>{f.text}</span>
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20 }}>
              <h4 className="heading-font" style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>REQUIRED INFO</h4>
              <p style={{ fontSize: 12, color: "#777", marginBottom: 10 }}>To provide an accurate quote, we need:</p>
              {["Project Scope", "Estimated Budget", "Desired Timeline"].map(i => (
                <p key={i} style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>· {i}</p>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20 }}>
              <h4 className="heading-font" style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>WHAT HAPPENS NEXT?</h4>
              <p style={{ fontSize: 12, color: "#777", marginBottom: 10 }}>After submission, an engineer will contact you to verify details.</p>
              <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700, cursor: "pointer" }} onClick={() => setPage("how-it-works")}>See How It Works →</span>
            </div>
          </div>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 36 }}>
          <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>PROJECT DETAILS FORM</h3>
          <p style={{ fontSize: 12, color: "#666", marginBottom: 24 }}>Please fill out all required fields marked with an asterisk (*).</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="form-group">
              <label className="form-label">First name *</label>
              <input className="form-input" placeholder="John" />
            </div>
            <div className="form-group">
              <label className="form-label">Last name *</label>
              <input className="form-input" placeholder="Doe" />
            </div>
            <div className="form-group">
              <label className="form-label">Email address *</label>
              <input className="form-input" placeholder="john.doe@company.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone number *</label>
              <input className="form-input" placeholder="+234 800 000 0000" />
            </div>
            <div className="form-group">
              <label className="form-label">Project Type *</label>
              <select className="form-select">
                <option>Select category</option>
                <option>Road Construction</option>
                <option>Commercial</option>
                <option>Bridge Engineering</option>
                <option>Earthworks</option>
                <option>Residential</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Estimated Budget *</label>
              <select className="form-select">
                <option>Select budget range</option>
                <option>₦10M – ₦50M</option>
                <option>₦50M – ₦200M</option>
                <option>₦200M – ₦1B</option>
                <option>₦1B+</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Project Timeline *</label>
            <select className="form-select">
              <option>When do you plan to start?</option>
              <option>Immediately</option>
              <option>Within 3 months</option>
              <option>Within 6 months</option>
              <option>Planning phase</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Project Details *</label>
            <textarea className="form-textarea" placeholder="Tell us more about your project scope, location, and specific requirements..." />
          </div>
          <div style={{ border: `2px dashed ${BORDER}`, padding: 24, textAlign: "center", marginBottom: 20, cursor: "pointer" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>☁</div>
            <p style={{ fontSize: 13, color: "#777" }}>Upload blueprints or RFP documents (Optional)</p>
            <p style={{ fontSize: 11, color: "#555" }}>PDF, DOCX, JPG up to 10MB</p>
          </div>
          <button className="btn-orange" style={{ width: "100%", padding: 16, fontSize: 15 }} onClick={() => setPage("thank-you")}>SUBMIT QUOTE REQUEST</button>
          <p style={{ fontSize: 11, color: "#555", textAlign: "center", marginTop: 12 }}>By submitting this form, you agree to our privacy policy and terms of service.</p>
        </div>
      </div>
    </div>
  </div>
);

