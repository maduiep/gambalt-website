import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";
import heroImg from "../assets/images/Contact Hero Image.png";

export const ContactPage = ({ setPage }) => {
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
    <div>
      <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${heroImg}) center/cover`, minHeight: 480, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: 140 }} className="blur-in">
        <div className="container">
          <Reveal x={-30}>
            <div className="orange-tag" style={{ marginBottom: 20 }}>GET IN TOUCH</div>
            <h1 className="heading-font" style={{ fontSize: 68, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, color: "#fff" }}>LET'S BUILD <span style={{ color: ORANGE }}>TOGETHER</span></h1>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p className="hero-subtitle-fix" style={{ fontSize: 15, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.6 }}>Ready to start your next infrastructure project? Contact our team of experts for a comprehensive consultation and precise execution strategy.</p>
          </Reveal>
        </div>
      </div>

      <section style={{ background: BLACK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }} className="grid-2">
            <div>
              <Reveal x={-20}>
                <div className="orange-bar" />
                <h2 className="heading-font" style={{ fontSize: 32, fontWeight: 800, textTransform: "uppercase", marginBottom: 36, color: TEXT }}>CONTACT INFORMATION</h2>
              </Reveal>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: "📍", title: "HEAD OFFICE", lines: ["No. 4 Bama Close, off Gwari Avenue,", "2nd Floor, Suite A8, Barnawa,", "Kaduna State, Nigeria"] }, 
                  { icon: "📞", title: "PHONE", lines: ["08028542972"] }, 
                  { icon: "✉", title: "EMAIL", lines: ["gambalt.partnersltd@yahoo.com"] }, 
                  { icon: "🕐", title: "BUSINESS HOURS", lines: ["Monday – Friday", "8:00 AM – 5:00 PM"] }
                ].map((c, i) => (
                  <motion.div key={c.title} className="contact-info-item" variants={itemVariants}>
                    <motion.div 
                      className="icon-box" 
                      style={{ background: CARD, border: `1px solid ${BORDER}` }}
                      whileHover={{ scale: 1.1, background: "rgba(255,102,0,0.1)" }}
                    >
                      {c.icon}
                    </motion.div>
                    <div>
                      <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6, color: ORANGE }}>{c.title}</h4>
                      {c.lines.map(l => <p key={l} style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6 }}>{l}</p>)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <Reveal scale={0.95} delay={0.4}>
                <div style={{ marginTop: 8, height: 260, border: `1px solid ${BORDER}`, overflow: "hidden", background: CARD }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1961.734887498753!2d7.424755088556!3d10.463583797416716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%204%20Bama%20Close%2C%20off%20Gwari%20Avenue%2C%202nd%20Floor%2C%20Suite%20A8%2C%20Barnawa%2C%20Kaduna%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1775474238129!5m2!1sen!2sng" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal y={30} delay={0.2}>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                formData.append("FormSource", "Contact Us");
                
                const btn = e.target.querySelector('button[type="submit"]');
                const origText = btn.innerText;
                btn.innerText = "SENDING...";
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
                <h3 className="heading-font" style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", marginBottom: 8, color: TEXT }}>REQUEST A CONSULTATION</h3>
                <p style={{ fontSize: 13, color: SUBTLE, marginBottom: 28 }}>Fill out the form below and our engineering team will get back to you within 24 hours.</p>
                <div className="form-group">
                  <label className="form-label" style={{ color: MUTED }}>Full Name *</label>
                  <input name="Name" required className="form-input" placeholder="John Doe" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
                  <div className="form-group">
                    <label className="form-label" style={{ color: MUTED }}>Phone Number *</label>
                    <input name="Phone" required className="form-input" placeholder="+234 800 000 0000" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: MUTED }}>Email Address *</label>
                    <input type="email" name="Email" required className="form-input" placeholder="john@company.com" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: MUTED }}>Project Type *</label>
                  <select name="ProjectType" required className="form-select" style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }}>
                    <option value="">Select a project category</option>
                    <option>Road Construction</option>
                    <option>Commercial Structure</option>
                    <option>Bridge Engineering</option>
                    <option>Earthworks & Excavation</option>
                    <option>Drainage Systems</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: MUTED }}>Project Details *</label>
                  <textarea name="ProjectDetails" required className="form-textarea" placeholder="Briefly describe your project requirements, timeline, and any specific engineering challenges..." style={{ background: BLACK, border: `1px solid ${BORDER}`, color: TEXT }} />
                </div>
                <motion.button 
                  type="submit"
                  className="btn-orange" 
                  style={{ width: "100%", padding: 16, fontSize: 15 }} 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Have a budget */}
      <Reveal y={30}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>HAVE A BUDGETED PROJECT?</h2>
            <p style={{ marginBottom: 28, opacity: 0.9 }}>If you already have a defined scope and budget, skip the general consultation and request a detailed preliminary quote from our estimating team.</p>
            <button className="btn-black" onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
