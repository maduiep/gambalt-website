import serviceDetailHero from "../assets/images/service-detail-hero.png";
import roadImg from "../assets/images/road-construction-paving.png";
import bridgeImg from "../assets/images/ogun-bridge-works.png";
import commercialImg from "../assets/images/ogun-manufacturing-plant.png";

export const servicesData = {
  "service-road": {
    title: "Road Construction & Paving",
    heroTitle: "HIGH-DURABILITY",
    heroAccent: "HIGHWAY NETWORKS",
    desc: "Engineering high-traffic infrastructure with advanced asphalt binder courses, precision pavement marking, and integrated drainage solutions for industrial-scale load bearing.",
    planningTitle: "Topographic & Traffic Load Engineering",
    planningDesc: "Every project begins with comprehensive GIS mapping and geotechnical investigations to ensure subgrade stability and long-term structural integrity under extreme conditions.",
    metrics: [
      ["Structural load capacity optimization against heavy industrial traffic", "98.5%"],
      ["Asphalt concrete durability rating in extreme weather conditions", "92%"],
      ["Project delivery efficiency through standardized civil workflows", "94.2%"],
      ["Compliance with Federal Ministry of Works & Housing standards", "100%"]
    ],
    methodology: [
      { step: "01", title: "Site Surveying", desc: "Digital topographic mapping and geotechnical soil profiling." },
      { step: "02", title: "Subgrade Compaction", desc: "Heavy-duty mass grading and base layer stabilization." },
      { step: "03", title: "Binder Course", desc: "Application of high-density asphalt mix for load bearing." },
      { step: "04", title: "Asphalt Paving", desc: "Precision paving of the final high-friction wearing course." },
      { step: "05", title: "Post-Vetting", desc: "Thermoplastic marking and municipal structural sign-off." }
    ],
    deliverables: [
      ["Pre-Construction", ["Geotechnical soil testing", "Topographic site survey", "Environmental impact vetting", "Traffic management planning"]],
      ["Core Engineering", ["Asphalt concrete binder laying", "Wearing course application", "Reinforced drainage systems", "Culvert & bridge transition"]],
      ["Technical Specs", ["ISO-compliant safety signage", "Thermoplastic marking", "Retro-reflective signage", "Vibration analysis"]],
      ["Finalization", ["Municipal sign-off", "Maintenance scheduling", "Drainage inspection", "Surface-leveling audit"]]
    ],
    cta: "START YOUR HIGHWAY PROJECT WITH GAMBALT",
    heroImg: roadImg
  },
  "service-commercial": {
    title: "Commercial Structures",
    heroTitle: "INDUSTRIAL &",
    heroAccent: "VERTICAL BUILDS",
    desc: "Designing and constructing massive commercial hubs, from specialized industrial warehouses to corporate high-rises, built for maximum structural safety and aesthetic impact.",
    planningTitle: "Architectural & MEP Systems Integration",
    planningDesc: "Our engineering team specializes in complex vertical development, ensuring seamless integration of structural steel, mechanical, electrical, and plumbing systems.",
    metrics: [
      ["Structural safety & vertical expansion feasibility", "100%"],
      ["Energy efficiency through specialized MEP optimization", "78%"],
      ["Operational space utilization for industrial workflows", "95%"],
      ["Zero-incident safety rating during build phase", "100%"]
    ],
    methodology: [
      { step: "01", title: "Urban Analysis", desc: "Detailed feasibility study and municipal building vetting." },
      { step: "02", title: "Deep Piling", desc: "Subsurface structural piling to ensure vertical stability." },
      { step: "03", title: "Steel Framework", desc: "Precision assembly of the reinforced high-rise skeleton." },
      { step: "04", title: "MEP Fit-out", desc: "Electrical and mechanical mechanical systems integration." },
      { step: "05", title: "Certification", desc: "Quality auditing and fire safety compliance handover." }
    ],
    deliverables: [
      ["Substructure", ["High-capacity piling works", "Raft & pad foundation", "Subsurface waterproofing", "Seismic analysis"]],
      ["Superstructure", ["Reinforced concrete skeleton", "Structural steel framework", "Curtain wall & façade", "Lift & HVAC integration"]],
      ["Infrastructure", ["Electrical sub-station build", "Industrial wastewater treatment", "Back-up power grid", "Smart access control"]],
      ["Compliance", ["Fire safety engineering", "Occupancy certification", "Quality control reporting", "Handover package"]]
    ],
    cta: "BUILD YOUR COMMERCIAL VISION WITH GAMBALT",
    heroImg: commercialImg
  },
  "service-bridge": {
    title: "Bridge Engineering",
    heroTitle: "PRECISION BRIDGE",
    heroAccent: "& OVERPASS ENG.",
    desc: "Delivering critical infrastructure connectivity through pre-stressed concrete bridge design, hydraulic load analysis, and seismic-resistant overpass solutions.",
    planningTitle: "Hydraulic & Geotechnical Site Evaluation",
    planningDesc: "Specialized analysis of waterway flow, soil load-bearing capacity, and structural fatigue to ensure centuries-long durability of bridge abutments and piers.",
    metrics: [
      ["Structural resistance to environmental fatigue", "99.8%"],
      ["Connectivity improvement for commercial transit links", "86%"],
      ["Material durability for river-crossing spans", "96.5%"],
      ["Environmental preservation during construction", "100%"]
    ],
    methodology: [
      { step: "01", title: "Hydro Survey", desc: "Detailed analysis of water flow and soil scouring." },
      { step: "02", title: "Abutment Build", desc: "Deep foundation and abutment structural piling." },
      { step: "03", title: "Girder Placement", desc: "Pre-stressed girder lift and pier seating." },
      { step: "04", title: "Deck Finishing", desc: "Asphalt decking and expansion joint sealing." },
      { step: "05", title: "Diagnostic Test", desc: "Static load testing and final structural certification." }
    ],
    deliverables: [
      ["Foundation Phase", ["Underwater cofferdam works", "Abutment construction", "Deep pier installation", "Geological vetting"]],
      ["Span Engineering", ["Pre-stressed girder placement", "Concrete slab reinforcement", "Expansion joint installation", "Waterproofing"]],
      ["Hydraulic Works", ["Waterway flow analysis", "Scour protection systems", "Channel dredging", "Environmental monitors"]],
      ["Testing", ["Static & dynamic load testing", "Thermal stress analysis", "Final inspection", "Operational sign-off"]]
    ],
    cta: "ENGINEER YOUR CRITICAL SPAN WITH GAMBALT",
    heroImg: bridgeImg
  },
  "service-earthworks": {
    title: "Earthworks & Excavation",
    heroTitle: "MASSIVE-SCALE",
    heroAccent: "& SITE PREPARATION",
    desc: "Utilizing modern heavy machinery for large-scale land clearing, bulk excavation, and precision site grading for major infrastructure and mining sectors.",
    planningTitle: "Fleet Logistics & Geological Stability",
    planningDesc: "Comprehensive site preparation utilizing our multi-ton equipment fleet, managed through GIS precision to ensure perfect grading and slope stabilization.",
    metrics: [
      ["Grading accuracy within millimetric design tolerances", "99.5%"],
      ["Earthmoving volume capacity per operational cycle", "88%"],
      ["Soil stability & compaction compliance rating", "97%"],
      ["Environmental reclamation & remediation status", "100%"]
    ],
    methodology: [
      { step: "01", title: "Land Clearing", desc: "Massive debris and vegetation structural regularization." },
      { step: "02", title: "Bulk Earthwork", desc: "Large-scale excavation and material redistribution." },
      { step: "03", title: "Slope Grading", desc: "Precision site leveling to architectural specifications." },
      { step: "04", title: "Stability Vetting", desc: "Final compaction and erosion stability assessments." },
      { step: "05", title: "Ready-for-Build", desc: "Full site certification for follow-on development." }
    ],
    deliverables: [
      ["Site Clearing", ["Deformation & clearing", "Bulk earthmoving", "Demolition & waste removal", "Geological mapping"]],
      ["Precision Grading", ["Final surface leveling", "Compaction & stabilization", "Erosion control system", "Trenching works"]],
      ["Safety Systems", ["Soil erosion monitoring", "Drainage channel build", "Retention basin creation", "Dust control measures"]],
      ["Logistics", ["Fleet deployment & monitoring", "Fuel & safety coordination", "Site reporting", "Handover"]]
    ],
    cta: "PREPARE YOUR SITE WITH GAMBALT'S FLEET",
    heroImg: serviceDetailHero
  },
  "service-management": {
    title: "Project Management",
    heroTitle: "FULL SPECTRUM",
    heroAccent: "CONSTRUCTION MGMT",
    desc: "Overseeing the technical and logistical lifecycle of massive civil builds, ensuring every stage meets regulatory standards, budget constraints, and industrial quality benchmarks.",
    planningTitle: "Integrated Resource & Risk Orchestration",
    planningDesc: "Our project managers utilize BIM and advanced scheduling to minimize downtime and maximize productivity across multi-stakeholder construction environments.",
    metrics: [
      ["Project delivery timeline adherence vs projected budget", "96.5%"],
      ["Supply chain efficiency & material procurement speed", "84%"],
      ["Stakeholder communication & reporting transparency", "100%"],
      ["Risk mitigation & safety compliance benchmarks", "98%"]
    ],
    methodology: [
      { step: "01", title: "Chartering", desc: "Project scope definition and strategic stakeholder alignment." },
      { step: "02", title: "Procurement", desc: "Global supply chain logistics and material vetting." },
      { step: "03", title: "Execution", desc: "On-site resource orchestration and tactical oversite." },
      { step: "04", title: "Quality Audit", desc: "Rigorous ISO-standard engineering and safety vetting." },
      { step: "05", title: "Commissioning", desc: "Final handover, certification, and post-build support." }
    ],
    deliverables: [
      ["Phase Planning", ["WBS & schedule development", "Risk management matrix", "Budgeting and cash flow", "Stakeholder map"]],
      ["Logistics", ["Vendor & subcontractor mgmt", "On-site material tracking", "Equipment fleet deployment", "Safety coordination"]],
      ["Reporting", ["Real-time digital build tracking", "Executive summary dashboards", "Compliance documentation", "Incident reporting"]],
      ["Closeout", ["Final site certification", "Equipment decommissioning", "Maintenance manuals", "Financial auditing"]]
    ],
    cta: "MANAGE YOUR BUILD WITH GAMBALT EXPERTISE",
    heroImg: serviceDetailHero
  }
};
