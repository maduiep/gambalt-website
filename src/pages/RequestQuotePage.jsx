import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";

export const RequestQuotePage = ({ setPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div style={{ background: BLACK, minHeight: "100vh", paddingTop: 68 }}>
      <div className="container" style={{ padding: "60px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }} className="grid-2">
          <div>
            <Reveal x={-30}>
              <h1 className="heading-font" style={{ fontSize: 60, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, marginBottom: 24, color: TEXT }}>
                REQUEST A <span style={{ color: ORANGE }}>QUOTE</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2} y={20}>
              <p style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 32 }}>
                Provide us with the details of your upcoming project. Our estimation team will review your requirements and deliver a comprehensive preliminary quote within 48 hours.
              </p>
            </Reveal>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: "⚡", text: "Fast 48-hour response time" }, 
                { icon: "🔒", text: "100% secure and private data handling" }, 
                { icon: "🦺", text: "Safety-first compliance on all estimates" }
              ].map((f, i) => (
                <motion.div key={f.text} variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <motion.div 
                    style={{ width: 28, height: 28, background: "rgba(232,84,26,0.2)", border: `1px solid rgba(232,84,26,0.4)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(232,84,26,0.3)" }}
                  >
                    {f.icon}
                  </motion.div>
                  <span style={{ fontSize: 14, color: MUTED }}>{f.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }} 
              className="grid-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20 }}>
                <h4 className="heading-font" style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 12 }}>REQUIRED INFO</h4>
                <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 10 }}>To provide an accurate quote, we need:</p>
                {["Project Scope", "Estimated Budget", "Desired Timeline"].map(i => (
                  <p key={i} style={{ fontSize: 12, color: MUTED, marginBottom: 4 }}>· {i}</p>
                ))}
              </motion.div>
              <motion.div variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20 }}>
                <h4 className="heading-font" style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 12 }}>WHAT HAPPENS NEXT?</h4>
                <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 10 }}>After submission, an engineer will contact you to verify details.</p>
                <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700, cursor: "pointer" }} onClick={() => setPage("how-it-works")}>See How It Works →</span>
              </motion.div>
            </motion.div>
          </div>

          <Reveal y={30} delay={0.2}>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              // Combine First and Last name into Name for the sheet
              const firstName = formData.get("FirstName");
              const lastName = formData.get("LastName");
              formData.delete("FirstName");
              formData.delete("LastName");
              formData.append("Name", `${firstName} ${lastName}`.trim());
              formData.append("FormSource", "Request a Quote");

              const btn = e.target.querySelector('button[type="submit"]');
              const origText = btn.innerText;
              btn.innerText = "SUBMITTING...";
              btn.disabled = true;

              try {
                await fetch(import.meta.env.VITE_GOOGLE_WEBHOOK_URL, {
                  method: "POST",
                  body: formData,
                  mode: "no-cors"
                });
                setPage("thank-you");
              } catch (err) {
                console.error(err);
                alert("Failed to deliver message. Please try again.");
              } finally {
                if(btn) {
                  btn.innerText = origText;
                  btn.disabled = false;
                }
              }
            }} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 36 }}>
              <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: TEXT, marginBottom: 6 }}>PROJECT DETAILS FORM</h3>
              <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 24 }}>Please fill out all required fields marked with an asterisk (*).</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
                <div className="form-group">
                  <label className="form-label">First name *</label>
                  <input name="FirstName" required className="form-input" placeholder="John" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last name *</label>
                  <input name="LastName" required className="form-input" placeholder="Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email address *</label>
                  <input type="email" name="Email" required className="form-input" placeholder="john.doe@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone number *</label>
                  <input name="Phone" required className="form-input" placeholder="+234 800 000 0000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Project Type *</label>
                  <select name="ProjectType" required className="form-select">
                    <option value="">Select category</option>
                    <option>Road Construction</option>
                    <option>Commercial</option>
                    <option>Bridge Engineering</option>
                    <option>Earthworks</option>
                    <option>Residential</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Estimated Budget *</label>
                  <select name="Budget" required className="form-select">
                    <option value="">Select budget range</option>
                    <option>₦10M – ₦50M</option>
                    <option>₦50M – ₦200M</option>
                    <option>₦200M – ₦1B</option>
                    <option>₦1B+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Timeline *</label>
                <select name="Timeline" required className="form-select">
                  <option value="">When do you plan to start?</option>
                  <option>Immediately</option>
                  <option>Within 3 months</option>
                  <option>Within 6 months</option>
                  <option>Planning phase</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Project Details *</label>
                <textarea name="ProjectDetails" required className="form-textarea" placeholder="Tell us more about your project scope, location, and specific requirements..." />
              </div>
              <motion.div 
                style={{ border: `2px dashed ${BORDER}`, padding: 24, textAlign: "center", marginBottom: 20, cursor: "pointer" }}
                whileHover={{ borderColor: ORANGE, backgroundColor: "rgba(255,102,0,0.02)" }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>☁</div>
                <p style={{ fontSize: 13, color: SUBTLE }}>Upload blueprints or RFP documents (Optional)</p>
                <p style={{ fontSize: 11, color: MUTED }}>PDF, DOCX, JPG up to 10MB</p>
              </motion.div>
              <motion.button 
                type="submit"
                className="btn-orange" 
                style={{ width: "100%", padding: 16, fontSize: 15 }} 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                SUBMIT QUOTE REQUEST
              </motion.button>
              <p style={{ fontSize: 11, color: MUTED, textAlign: "center", marginTop: 12 }}>By submitting this form, you agree to our privacy policy and terms of service.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
