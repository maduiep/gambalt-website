import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export const TestimonialsPage = ({ setPage }) => {
  const [filter, setFilter] = useState("All Clients");
  const filters = ["All Clients", "Government", "Commercial Developer", "Private Owner"];

  const [displayLimit, setDisplayLimit] = useState(6);

  // Reset display limit when filter changes
  useEffect(() => {
    setDisplayLimit(6);
  }, [filter]);

  const testimonials = [
    { cat: "Government", name: "Chief Engineer Adeyemi", role: "Ministry of Works & Infrastructure", text: "Gambalt's approach to the state highway expansion was exemplary. Their rigorous adherence to safety protocols and transparent communication throughout the delays caused by weather ensured we stayed within budget. Highly recommended for public works." },
    { cat: "Commercial Developer", name: "Sarah Johnson", role: "Director, Hencel Developments", text: "Delivering a 15-story commercial complex in Victoria Island comes with immense logistical challenges. Gambalt's technical planning phase mitigated structural risks early on. Their on-site execution team was proactive, solving problems before they impacted the timeline." },
    { cat: "Private Owner", name: "David Okafor", role: "CEO, Prime Logistics Hub", text: "We hired Gambalt for a custom industrial facility build. What impressed me most was their transparency. Every BOQ was detailed, every weekly report was accurate. I never felt out of the loop, and the final structural quality exceeded our expectations." },
    { cat: "Commercial Developer", name: "Marcus Bello", role: "BT Engineering, Apex Structures", text: "The level of detail in their preliminary engineering assessment saved us millions. They identified a soil instability issue that two previous firms missed. Gambalt doesn't just build; they engineer solutions." },
    { cat: "Government", name: "Engr. Fatima Yusuf", role: "Municipal Planning Board", text: "For municipal drainage systems, precision is non-negotiable. Gambalt delivered the Phase 2 network exactly to spec. Their site supervisors are some of the most disciplined professionals I've encountered in the sector." },
    { cat: "Private Owner", name: "Emmanuel Peters", role: "Operations Director, SteelWorks Inc.", text: "Safety was our primary concern for the heavy manufacturing plant expansion. Gambalt's zero-incident record on our site speaks volumes about their operational standards. They are true partners in infrastructure." },
    { cat: "Government", name: "Engr. Abubakar Musa", role: "Federal Ministry of Transport", text: "Gambalt's execution of the inter-state bridge reinforcement project was flawless. Their commitment to structural integrity sets them completely apart from other contractors." },
    { cat: "Commercial Developer", name: "Chika Nwosu", role: "Skyline Developments", text: "Their heavy machinery fleet is unmatched. Having direct access to their own equipment meant zero third-party rental delays on our high-rise project." },
    { cat: "Private Owner", name: "Hassan Ibrahim", role: "Greenfield Estates", text: "From complex soil stabilization to the final pour, Gambalt's engineering team operated with pinpoint accuracy and professionalism." },
    { cat: "Commercial Developer", name: "Tolu Olatunji", role: "Retail Plaza Corp", text: "We experienced a major design pivot mid-project, and Gambalt's agile engineering team adapted instantly without compromising our grand opening timeline." },
  ];

  const filtered = filter === "All Clients" ? testimonials : testimonials.filter(t => t.cat === filter);
  const visible = filtered.slice(0, displayLimit);
  const hasMore = visible.length < filtered.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <div>
      <PageHero tag="CLIENT SUCCESS" title="BUILT ON" accent="TRUST" img="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        subtitle="Hear from the government agencies, commercial developers, and private owners who rely on Gambalt for precision engineering and rigorous project delivery." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <Reveal x={-20}>
            <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
              {filters.map(f => (
                <motion.button 
                  key={f} 
                  className={`filter-btn ${filter === f ? "active" : ""}`} 
                  onClick={() => setFilter(f)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </Reveal>

          <motion.div 
            layout
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div 
                  layout
                  key={t.name} 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="testimonial-card" 
                  style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="tag-orange" style={{ marginBottom: 16, display: "inline-block", textTransform: "uppercase" }}>{t.cat}</span>
                  <div style={{ color: ORANGE, fontSize: 40, lineHeight: 1, marginBottom: 12 }}>"</div>
                  <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                      {t.name.split(" ").slice(-2).map(w => w[0]).join("")}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: MUTED }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {hasMore && (
            <Reveal y={20} delay={0.4}>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <motion.button 
                  className="btn-outline"
                  onClick={() => setDisplayLimit(prev => prev + 4)}
                  whileHover={{ scale: 1.05, borderColor: ORANGE, color: ORANGE }}
                  whileTap={{ scale: 0.95 }}
                >
                  LOAD MORE REVIEWS
                </motion.button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Gambalt Difference */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <Reveal y={20}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", color: TEXT }}>THE GAMBALT DIFFERENCE</h2>
              <p style={{ color: SUBTLE, marginTop: 12 }}>Consistent themes from our client feedback highlight our core operational values.</p>
            </div>
          </Reveal>
          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "💬", title: "Transparent Communication", desc: "No hidden costs or surprise delays. We maintain open channels, providing detailed weekly reports and proactive issue resolution." }, 
              { icon: "🦺", title: "Uncompromising Safety", desc: "Strict adherence to international HSE standards. We protect our workers, your site, and your investment with rigorous protocols." }, 
              { icon: "🔬", title: "Engineering Precision", desc: "From initial geotechnical surveys to final structural sign-offs, our QA/QC processes ensure flawless execution." }
            ].map(d => (
              <motion.div key={d.title} variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32, textAlign: "center" }} whileHover={{ y: -5 }}>
                <motion.div 
                  style={{ width: 60, height: 60, background: "rgba(232,84,26,0.15)", border: `1px solid rgba(232,84,26,0.3)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(232,84,26,0.3)" }}
                >
                  {d.icon}
                </motion.div>
                <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>{d.title}</h4>
                <p style={{ fontSize: 13, color: SUBTLE, lineHeight: 1.6 }}>{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Reveal y={30}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO JOIN OUR SUCCESS STORIES?</h2>
            <p style={{ marginBottom: 28, opacity: 0.9, maxWidth: 500, margin: "0 auto 28px" }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
            <button className="btn-black" onClick={() => setPage("contact")}>REQUEST A CONSULTATION</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
