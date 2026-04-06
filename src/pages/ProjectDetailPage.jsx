import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";
import { Reveal } from "../components/Reveal";

import imgLagosIbadan from "../assets/images/lagos-ibadan-expressway.png";
import imgTechHub from "../assets/images/victoria-island-techhub.png";
import imgFloodControl from "../assets/images/lekki-flood-control.png";
import imgMedicalCenter from "../assets/images/federal-medical-center.png";
import imgLuxuryEstate from "../assets/images/opal-luxury-estate.png";
import imgInterchange from "../assets/images/ogun-state-interchange.png";
import imgBridgeWorks from "../assets/images/ogun-bridge-works.png";
import imgManufacturing from "../assets/images/ogun-manufacturing-plant.png";

export const ProjectDetailPage = ({ setPage, projectKey }) => {
  const images = {
    "project-lagos": imgLagosIbadan,
    "project-techhub": imgTechHub,
    "project-flood": imgFloodControl,
    "project-medical": imgMedicalCenter,
    "project-opal": imgLuxuryEstate,
    "project-interchange": imgInterchange,
    "project-bridge": imgBridgeWorks,
    "project-manufacturing": imgManufacturing,
  };
  
  const projectsData = {
    "project-lagos": {
      title: "Lagos-Ibadan Expressway Section II",
      overview1: "The reconstruction of Section II of the Lagos-Ibadan Expressway represents one of the most critical infrastructure upgrades in recent Nigerian history. This 45km stretch serves as the primary artery connecting the commercial hub of Lagos to the rest of the country, handling an estimated 250,000 vehicles daily.",
      overview2: "Gambalt was contracted to deliver a comprehensive overhaul of the existing carriageway, including significant expansion works, structural reinforcements of aging bridges, and the implementation of modern drainage solutions to combat seasonal flooding issues that previously plagued the route.",
      deliverables: ["45km dual carriageway reconstruction", "3 new interchange bridges", "15km of reinforced concrete drainage", "Installation of smart traffic monitoring systems"],
      constraints: ["Maintaining traffic flow during construction", "Severe rainy season interruptions", "Navigating heavily populated informal settlements"],
      outcomes: [["40%", "Reduction in Travel Time"], ["0", "Major Safety Incidents"], ["3 MONTHS", "Delivered Ahead of Schedule"]]
    },
    "project-techhub": {
      title: "Victoria Island Tech Hub",
      overview1: "The Victoria Island Tech Hub is a state-of-the-art 12-story commercial complex designed to house leading international tech firms operating in Nigeria. It sets a new benchmark for sustainable commercial real estate in Lagos.",
      overview2: "Gambalt successfully executed the entire structural build and MEP integration from the ground up, utilizing advanced post-tensioning techniques to maximize open floor spaces and natural lighting according to the architect's ambitious vision.",
      deliverables: ["Deep foundation pile driving (45m)", "12 stories of post-tensioned concrete structural frame", "LEED-certified HVAC and energy systems", "Smart building automated management system"],
      constraints: ["Tight urban site logistics", "High water table foundation challenges", "Procurement delays during global supply chain crisis"],
      outcomes: [["100%", "Space Pre-leased"], ["LEED", "Gold Certification"], ["0", "Neighbors Disrupted"]]
    },
    "project-flood": {
      title: "Lekki Peninsula Flood Control",
      overview1: "The Lekki Peninsula Flood Control project was initiated to mitigate the severe seasonal flooding that routinely impacted residential areas and disrupted business operations in one of Lagos's most affluent districts.",
      overview2: "Gambalt engineered and deployed an extensive underground drainage network covering 15 sq km, featuring high-capacity reinforced concrete channels and automated pumping stations designed to handle 50-year storm events.",
      deliverables: ["15 sq km underground drainage network", "3 automated high-capacity pumping stations", "Dredging of outfall canals", "Community flood warning system"],
      constraints: ["Working in highly populated suburban areas", "Tidal influence on outfall construction", "Existing unmapped utilities"],
      outcomes: [["85%", "Reduction in Flood Reports"], ["10+", "Lives Saved Annually"], ["ON TIME", "Delivered on Schedule"]]
    },
    "project-medical": {
      title: "Federal Medical Center Extension",
      overview1: "The Federal Medical Center Extension project involved the construction of a new 200-bed ward facility adhering strictly to World Health Organization (WHO) healthcare infrastructure standards. The facility is equipped with modern medical gas piping and isolation units.",
      overview2: "Our team worked closely with medical consultants to ensure that materials and construction methods met rigorous hygiene and operational requirements, delivering an environment optimized for patient care and staff efficiency.",
      deliverables: ["200-bed modern medical ward", "Medical gas piping infrastructure", "Positive/negative pressure HVAC for isolation rooms", "Emergency power backup systems"],
      constraints: ["Construction adjacent to active hospital", "Strict vibration and noise limits", "Specialized material sourcing"],
      outcomes: [["100%", "WHO Standards Met"], ["0", "Hospital Operations Disrupted"], ["500+", "Patients Served Daily"]]
    },
    "project-opal": {
      title: "Opal Luxury Estate",
      overview1: "Opal Luxury Estate is an exclusive development comprising 50 premium detached duplexes tailored for high-net-worth individuals. The project emphasizes superior craftsmanship, security, and community amenities.",
      overview2: "Gambalt served as the primary civil works contractor, delivering complete internal road networks, perimeter security fencing, and all subsurface utility infrastructure before vertical construction commenced.",
      deliverables: ["Internal asphalt road network with curbs", "Perimeter security wall with anti-climb features", "Underground power and fiber optic ducting", "Common area landscaping preparation"],
      constraints: ["High client quality expectations", "Coordination with multiple luxury homebuilders", "Strict site access controls"],
      outcomes: [["50", "Lots Fully Serviced"], ["0", "Rework on Utilities"], ["ON BUDGET", "Financial Target Achieved"]]
    },
    "project-interchange": {
      title: "Ogun State Interchange",
      overview1: "The Ogun State Interchange was designed to ease chronic traffic congestion at a major highway junction, improving freight movement and passenger travel safety across the state.",
      overview2: "Our scope included the design and construction of a multi-level interchange, featuring pre-stressed concrete overpasses, dedicated slip roads, and comprehensive traffic safety installations.",
      deliverables: ["2-level grade-separated interchange", "Pre-stressed concrete bridge decks", "High-mast LED solar lighting", "Extensive guide signs and road markings"],
      constraints: ["Massive traffic diversion requirements", "Relocation of high-voltage transmission lines", "Complex geotechnical soil conditions"],
      outcomes: [["60%", "Traffic Flow Improved"], ["0", "Fatal Accidents Post-Completion"], ["12 MONTHS", "Project Duration"]]
    },
    "project-bridge": {
      title: "Ogun Bridge Works",
      overview1: "The Ogun Bridge Works involved the critical rehabilitation and expansion of a major river crossing that serves as a vital economic link for agricultural transport in the region.",
      overview2: "Gambalt implemented state-of-the-art structural reinforcement techniques to extend the bridge's lifespan by 50 years, while simultaneously widening the deck to accommodate a new dedicated heavy-duty vehicle lane.",
      deliverables: ["Bridge deck expansion & resurfacing", "Pier jacket reinforcement", "Replacement of elastomeric bearings", "Installation of new crash barriers"],
      constraints: ["Working over active waterways", "Maintaining single-lane traffic", "Limited working window due to river levels"],
      outcomes: [["50 YEARS", "Added Lifespan"], ["30%", "Capacity Increase"], ["ZERO", "Environmental Incidents"]]
    },
    "project-manufacturing": {
      title: "Ogun State Manufacturing Plant",
      overview1: "The Ogun State Manufacturing Plant is a sprawling 100,000 sqm industrial facility built for a leading consumer goods company, designed for high-capacity production and logistics efficiency.",
      overview2: "Gambalt's end-to-end delivery included heavy-duty industrial flooring capable of withstanding extreme dynamic loads, massive structural steel roof spans, and an integrated industrial wastewater treatment plant.",
      deliverables: ["Heavy-duty reinforced concrete flooring", "Clear-span structural steel warehousing", "Industrial wastewater treatment facility", "High-voltage electrical substation"],
      constraints: ["Aggressive fast-track schedule", "Coordination with overseas equipment vendors", "Strict flatness tolerances for flooring"],
      outcomes: [["100,000", "SQM Delivered"], ["ON TIME", "Fast-Track Target Met"], ["100%", "Quality Pass on First Inspection"]]
    }
  };

  const project = projectsData[projectKey] || projectsData["project-lagos"];
  const heroImage = images[projectKey] || imgLagosIbadan;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('${heroImage}') center/cover`, height: 400, paddingTop: 120 }} 
      />
      <section style={{ background: BLACK, padding: "60px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }} className="grid-2">
            <div>
              <Reveal x={-20}>
                <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600 }} onClick={() => setPage("projects")}>← Back to Projects</span>
                <div style={{ marginTop: 16, marginBottom: 8 }}>
                  <div className="orange-bar" />
                </div>
                <h2 className="heading-font" style={{ fontSize: 36, fontWeight: 900, textTransform: "uppercase", marginBottom: 16, color: TEXT }}>PROJECT OVERVIEW</h2>
              </Reveal>
              <Reveal delay={0.2} y={20}>
                <p style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 16 }}>
                  {project.overview1}
                </p>
                <p style={{ fontSize: 14, color: SUBTLE, lineHeight: 1.7, marginBottom: 32 }}>
                  {project.overview2}
                </p>
              </Reveal>
              
              <Reveal y={30} delay={0.4}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 28, marginBottom: 32 }}>
                  <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 20, color: TEXT }}>SCOPE OF WORK & CHALLENGES</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
                    <div>
                      <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>🔧 KEY DELIVERABLES</p>
                      {project.deliverables.map(d => (
                        <div key={d} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <span style={{ color: "#4ade80", fontSize: 12 }}>✓</span>
                          <span style={{ fontSize: 12, color: MUTED }}>{d}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ color: "#60a5fa", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>⚠ MAJOR CONSTRAINTS</p>
                      {project.constraints.map(d => (
                        <div key={d} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <span style={{ color: "#60a5fa", fontSize: 12 }}>●</span>
                          <span style={{ fontSize: 12, color: MUTED }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal x={-20}>
                <h4 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 16, color: TEXT }}>CONSTRUCTION GALLERY</h4>
              </Reveal>
              <motion.div 
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }} 
                className="grid-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" alt="construction" style={{ width: "100%", height: 160, objectFit: "cover" }} 
                />
                <motion.img 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80" alt="construction" style={{ width: "100%", height: 160, objectFit: "cover" }} 
                />
              </motion.div>

              <Reveal x={-20}>
                <div className="orange-bar" />
                <h4 className="heading-font" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", marginBottom: 24, color: TEXT }}>OUTCOMES & IMPACT</h4>
              </Reveal>
              <motion.div 
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }} 
                className="grid-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.outcomes.map(([n, l]) => (
                  <motion.div key={n} variants={itemVariants} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20, textAlign: "center" }} whileHover={{ y: -5 }}>
                    <div className="heading-font" style={{ fontSize: 28, fontWeight: 900, color: ORANGE }}>{n}</div>
                    <div style={{ fontSize: 11, color: SUBTLE, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{l}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ color: ORANGE, fontSize: 20 }}>🦺</span>
                  <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", color: TEXT }}>SAFETY & COMPLIANCE</h4>
                </div>
                <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 16 }}>This project adhered strictly to ISO 45001 standards for occupational health and safety.</p>
                {["FMWH Standard Specifications", "Environmental Impact Assessment Passed", "1.2M Safe Man-Hours Achieved"].map(i => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: "#4ade80" }}>✓</span>
                    <span style={{ fontSize: 12, color: MUTED }}>{i}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24, marginBottom: 20 }}>
                <div style={{ color: ORANGE, fontSize: 32 }}>"</div>
                <p style={{ fontSize: 13, color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: 16 }}>Gambalt's execution of {project.title} demonstrated exceptional engineering pedigree. Their ability to manage complex traffic and logistics while maintaining high-quality construction standards was crucial to the project's success.</p>
                <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700 }}>ENGR. O. ADEYEMI</div>
                <div style={{ fontSize: 11, color: SUBTLE }}>Director of Infrastructure</div>
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24 }}>
                <div style={{ fontSize: 20, marginBottom: 12 }}>🦺</div>
                <h4 className="heading-font" style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", marginBottom: 8, color: TEXT }}>NEED SIMILAR INFRASTRUCTURE?</h4>
                <p style={{ fontSize: 12, color: SUBTLE, marginBottom: 16 }}>Our team is equipped to handle large-scale road and civil works.</p>
                <motion.button 
                  className="btn-orange" 
                  style={{ width: "100%" }} 
                  onClick={() => setPage("quote")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  REQUEST A QUOTE
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Reveal y={30}>
        <div className="cta-section">
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO START YOUR PROJECT?</h2>
            <p style={{ marginBottom: 28, opacity: 0.9 }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
            <button className="btn-black" onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
