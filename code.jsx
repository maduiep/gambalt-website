import { useState, useEffect, useRef } from "react";

const ORANGE = "#E8541A";
const BLACK = "#0a0a0a";
const DARK = "#141414";
const CARD = "#1a1a1a";
const BORDER = "#2a2a2a";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background: ${BLACK};
    color: #fff;
    font-family: 'Barlow', sans-serif;
    overflow-x: hidden;
  }

  .heading-font { font-family: 'Barlow Condensed', sans-serif; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${BLACK}; }
  ::-webkit-scrollbar-thumb { background: ${ORANGE}; border-radius: 3px; }

  .nav-link {
    color: #ccc;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 4px 0;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
  }
  .nav-link:hover, .nav-link.active { color: #fff; border-bottom-color: ${ORANGE}; }
  .nav-link.orange { color: ${ORANGE}; border-bottom-color: ${ORANGE}; }

  .btn-orange {
    background: ${ORANGE};
    color: #fff;
    border: none;
    padding: 12px 28px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;
    text-decoration: none;
  }
  .btn-orange:hover { background: #d44510; transform: translateY(-1px); }

  .btn-outline {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    padding: 11px 28px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-outline:hover { background: rgba(255,255,255,0.1); }

  .btn-outline-orange {
    background: transparent;
    color: ${ORANGE};
    border: 2px solid ${ORANGE};
    padding: 11px 28px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-outline-orange:hover { background: ${ORANGE}; color: #fff; }

  .btn-black {
    background: #000;
    color: #fff;
    border: none;
    padding: 12px 28px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-black:hover { background: #222; }

  .section { padding: 80px 0; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

  .hero-bg {
    background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%),
    url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80') center/cover no-repeat;
    min-height: 85vh;
    display: flex;
    align-items: center;
    position: relative;
  }

  .stat-card {
    background: rgba(0,0,0,0.5);
    border-left: 3px solid ${ORANGE};
    padding: 20px 24px;
  }

  .service-card {
    background: ${CARD};
    border: 1px solid ${BORDER};
    padding: 32px;
    transition: all 0.3s;
    cursor: pointer;
  }
  .service-card:hover { border-color: ${ORANGE}; transform: translateY(-4px); }

  .project-card {
    background: ${CARD};
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s;
  }
  .project-card:hover { transform: translateY(-4px); }
  .project-card:hover .project-overlay { opacity: 1; }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(232,84,26,0.15);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .testimonial-card {
    background: ${CARD};
    border: 1px solid ${BORDER};
    padding: 28px;
    transition: border-color 0.3s;
  }
  .testimonial-card:hover { border-color: ${ORANGE}; }

  .form-group { margin-bottom: 16px; }
  .form-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 6px;
  }
  .form-input, .form-select, .form-textarea {
    width: 100%;
    background: #111;
    border: 1px solid ${BORDER};
    color: #fff;
    padding: 12px 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    appearance: none;
  }
  .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: ${ORANGE}; }
  .form-input::placeholder, .form-textarea::placeholder { color: #555; }
  .form-select option { background: #111; }
  .form-textarea { resize: vertical; min-height: 120px; }

  .orange-tag {
    background: ${ORANGE};
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 10px;
    display: inline-block;
  }

  .section-tag {
    color: ${ORANGE};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .accordion-item {
    border: 1px solid ${BORDER};
    margin-bottom: 8px;
    transition: border-color 0.2s;
  }
  .accordion-item.open { border-color: ${ORANGE}; }

  .filter-btn {
    padding: 8px 20px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid ${BORDER};
    background: transparent;
    color: #ccc;
    transition: all 0.2s;
  }
  .filter-btn:hover, .filter-btn.active { background: ${ORANGE}; border-color: ${ORANGE}; color: #fff; }

  .footer { background: #111; border-top: 1px solid ${BORDER}; }

  .process-step {
    background: ${CARD};
    border: 1px solid ${BORDER};
    padding: 28px 32px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .process-step.active { border-color: ${ORANGE}; }

  .contact-info-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 28px;
  }

  .icon-box {
    width: 44px;
    height: 44px;
    background: rgba(232,84,26,0.15);
    border: 1px solid rgba(232,84,26,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 18px;
  }

  .value-card {
    background: ${CARD};
    border: 1px solid ${BORDER};
    padding: 28px;
    transition: border-color 0.3s;
  }
  .value-card:hover { border-color: ${ORANGE}; }

  .team-card { overflow: hidden; }
  .team-img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s;
  }
  .team-card:hover .team-img { filter: grayscale(40%); }

  .orange-bar { 
    height: 4px; 
    background: ${ORANGE}; 
    margin-bottom: 16px;
    width: 48px;
  }

  .cta-section {
    background: ${ORANGE};
    padding: 80px 0;
    position: relative;
    overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .mobile-menu {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.98);
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 768px) {
    .hero-title { font-size: 52px !important; }
    .desktop-nav { display: none !important; }
    .mobile-toggle { display: block !important; }
    .grid-2 { grid-template-columns: 1fr !important; }
    .grid-3 { grid-template-columns: 1fr !important; }
    .grid-4 { grid-template-columns: 1fr 1fr !important; }
    .hide-mobile { display: none !important; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.6s ease forwards; }
  .fade-up-delay { animation: fadeUp 0.6s ease 0.2s forwards; opacity: 0; }
  .fade-up-delay2 { animation: fadeUp 0.6s ease 0.4s forwards; opacity: 0; }

  .industries-bar {
    background: ${ORANGE};
    padding: 16px 0;
  }

  .tag-green { background: rgba(34,197,94,0.2); color: #4ade80; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 3px 8px; }
  .tag-orange { background: rgba(232,84,26,0.2); color: ${ORANGE}; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 3px 8px; }
  .tag-blue { background: rgba(59,130,246,0.2); color: #60a5fa; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 3px 8px; }
`;

// ─── Logo ───────────────────────────────────────────────────────────────────
const Logo = ({ onClick }) => (
  <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
    <div style={{ width: 38, height: 38, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    </div>
    <span className="heading-font" style={{ fontSize: 22, fontWeight: 800, letterSpacing: 2, color: "#fff" }}>GAMBALT</span>
  </div>
);

// ─── Navbar ─────────────────────────────────────────────────────────────────
const Navbar = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Welcome", "About Us", "Services", "Projects", "How It Works", "Testimonials", "Contact"];
  const pageMap = { "Welcome": "home", "About Us": "about", "Services": "services", "Projects": "projects", "How It Works": "how-it-works", "Testimonials": "testimonials", "Contact": "contact" };

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent",
    transition: "all 0.3s",
  };

  return (
    <>
      <nav style={navStyle}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Logo onClick={() => setPage("home")} />
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map(l => (
              <span key={l} className={`nav-link ${page === pageMap[l] ? "active" : ""}`}
                onClick={() => setPage(pageMap[l])}>{l}</span>
            ))}
            <button className="btn-orange" style={{ padding: "10px 20px", fontSize: 12 }} onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
          </div>
          <button className="mobile-toggle" style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer" }}
            onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMobileOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>✕</button>
          {links.map(l => (
            <span key={l} style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Barlow Condensed'", letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", color: page === pageMap[l] ? ORANGE : "#fff" }}
              onClick={() => { setPage(pageMap[l]); setMobileOpen(false); }}>{l}</span>
          ))}
          <button className="btn-orange" onClick={() => { setPage("quote"); setMobileOpen(false); }}>REQUEST A QUOTE</button>
        </div>
      )}
    </>
  );
};

// ─── Footer ─────────────────────────────────────────────────────────────────
const Footer = ({ setPage }) => (
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

// ─── Page Hero ───────────────────────────────────────────────────────────────
const PageHero = ({ tag, title, accent, subtitle, img }) => (
  <div style={{
    background: `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100%), url('${img}') center/cover no-repeat`,
    minHeight: 420, paddingTop: 68, display: "flex", alignItems: "flex-end", paddingBottom: 64
  }}>
    <div className="container">
      {tag && <div className="orange-tag" style={{ marginBottom: 16 }}>{tag}</div>}
      <h1 className="heading-font fade-up" style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 16, textTransform: "uppercase" }}>
        {title} {accent && <span style={{ color: ORANGE }}>{accent}</span>}
      </h1>
      {subtitle && <p style={{ fontSize: 16, color: "#ccc", maxWidth: 560, lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  </div>
);

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
const HomePage = ({ setPage }) => {
  const stats = [{ n: "15+", l: "Years Experience" }, { n: "250+", l: "Projects Completed" }, { n: "50+", l: "Active Projects" }, { n: "100%", l: "Safety Record" }];

  const services = [
    { icon: "🛣", title: "Road & Highway Construction", desc: "High-durability road networks designed to withstand heavy industrial traffic and extreme weather conditions." },
    { icon: "🏗", title: "Commercial Structures", desc: "End-to-end construction of high-rise commercial buildings, industrial warehouses, and corporate facilities." },
    { icon: "🌉", title: "Bridge Engineering", desc: "Design and construction of robust bridges and overpasses, ensuring critical infrastructure connectivity." },
    { icon: "⚙️", title: "Earthworks & Excavation", desc: "Massive-scale land clearing, grading, and excavation utilizing our extensive fleet of heavy machinery." },
    { icon: "📋", title: "Project Management", desc: "Comprehensive oversight from initial planning through final handover with rigorous quality control." },
    { icon: "📊", title: "Drainage & Utilities", desc: "Advanced underground drainage networks and utility systems engineered for long-term resilience." },
  ];

  const projects = [
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Lagos-Ibadan Expressway Expansion", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", id: "project-lagos" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Victoria Island Tech Hub", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", id: "project-detail" },
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Ogun State Bridge Works", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", id: "project-detail" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Ogun State Manufacturing Plant", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", id: "project-detail" },
  ];

  const testimonials = [
    { text: "Gambalt's approach to the state highway expansion was exemplary. Their rigorous adherence to safety protocols and transparent communication throughout ensured we stayed within budget.", name: "Chief Engineer Adeyemi", role: "Ministry of Works & Infrastructure", cat: "GOVERNMENT" },
    { text: "Delivering a 15-story commercial complex in Victoria Island comes with logistical challenges. Gambalt's technical planning mitigated structural risks early on.", name: "Sarah Johnson", role: "Director, Hencel Developments", cat: "COMMERCIAL DEV" },
    { text: "We hired Gambalt for a custom industrial facility build. What impressed me most was their transparency. Every BOQ was detailed, every weekly report was accurate.", name: "David Okafor", role: "CEO, Prime Logistics Hub", cat: "PRIVATE OWNER" },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="hero-bg" style={{ paddingTop: 68 }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <div className="orange-tag fade-up" style={{ marginBottom: 20 }}>BUILDING NIGERIA'S INFRASTRUCTURE</div>
            <h1 className="heading-font fade-up-delay hero-title" style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 24 }}>
              BUILDING<br />NIGERIA'S<br /><span style={{ color: ORANGE }}>FUTURE TODAY</span>
            </h1>
            <p className="fade-up-delay2" style={{ fontSize: 16, color: "#ccc", maxWidth: 480, lineHeight: 1.7, marginBottom: 36 }}>
              Gambalt is a premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. We focus on long-term structural integrity and seamless project execution.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-orange" onClick={() => setPage("contact")}>CONSULTATION →</button>
              <button className="btn-outline" onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 60 }} className="grid-4">
            {stats.map(s => (
              <div key={s.n} className="stat-card">
                <div className="heading-font" style={{ fontSize: 40, fontWeight: 900, color: ORANGE }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About snippet */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <div>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="construction" style={{ width: "100%", height: 380, objectFit: "cover" }} />
            </div>
            <div>
              <div className="section-tag">ABOUT GAMBALT</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 24 }}>
                WE DELIVER INDUSTRIAL STRENGTH <span style={{ color: ORANGE }}>INFRASTRUCTURE</span>
              </h2>
              <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7, marginBottom: 20 }}>
                From the Lagos-Ibadan Expressway to the Lekki Peninsula flood control network, our portfolio demonstrates our capacity to handle large-scale, complex engineering projects on time and within budget.
              </p>
              {["End-to-end project management", "Heavy machinery deployment", "Strict adherence to national safety standards"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 20, height: 20, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: 14, color: "#ccc" }}>{p}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: 32, marginTop: 32 }}>
                <div><div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>15+</div><div style={{ fontSize: 12, color: "#777" }}>YEARS EXPERIENCE</div></div>
                <div><div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>250+</div><div style={{ fontSize: 12, color: "#777" }}>PROJECTS DONE</div></div>
              </div>
              <button className="btn-orange" style={{ marginTop: 28 }} onClick={() => setPage("about")}>VIEW FULL PROFILE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">OUR EXPERTISE</div>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>CORE <span style={{ color: ORANGE }}>SERVICES</span></h2>
            <p style={{ color: "#777", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              Comprehensive civil engineering solutions for commercial, industrial and government clients.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {services.map(s => (
              <div key={s.title} className="service-card" onClick={() => setPage("services")}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>LEARN MORE →</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-outline" onClick={() => setPage("services")}>VIEW ALL SERVICES</button>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
            <div>
              <div className="section-tag">THE GAMBALT ADVANTAGE</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 32 }}>
                WHY PARTNER WITH <span style={{ color: ORANGE }}>GAMBALT</span>
              </h2>
              {[
                { title: "Government-Ready Vendor", desc: "Fully registered with relevant government bodies, making us an ideal choice for municipal, state, and federal infrastructure contracts." },
                { title: "Heavy Machinery Fleet", desc: "Unlike firms that rely on rentals, Gambalt owns a massive fleet of heavy construction and infrastructure equipment." },
                { title: "Uncompromising Safety", desc: "Zero-incident culture: every site follows strict HSE standards and our project managers prioritize safety at every level." },
              ].map(r => (
                <div key={r.title} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                  <div style={{ width: 4, background: ORANGE, flexShrink: 0 }} />
                  <div>
                    <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>{r.title}</h4>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=700&q=80" alt="team" style={{ width: "100%", height: 420, objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, background: "rgba(0,0,0,0.9)", border: `1px solid ${BORDER}`, padding: "20px 24px", maxWidth: 320 }}>
                <div style={{ fontSize: 13, color: "#ccc", fontStyle: "italic", lineHeight: 1.6, marginBottom: 12 }}>
                  "We don't just build structures — we build the foundations the Nigerian economy depends on."
                </div>
                <div style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>ENGR. SAMUEL BJO — MANAGING DIRECTOR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <div className="section-tag">OUR PORTFOLIO</div>
              <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>RECENT <span style={{ color: ORANGE }}>PROJECTS</span></h2>
            </div>
            <button className="btn-outline" onClick={() => setPage("projects")} style={{ flexShrink: 0 }}>VIEW ALL PROJECTS</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
            {projects.map((p, i) => (
              <div key={i} className="project-card" onClick={() => setPage(p.id)}>
                <div className="project-overlay" />
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 240, objectFit: "cover" }} />
                <div style={{ padding: "20px 24px", background: CARD }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <span className="tag-orange">{p.cat}</span>
                    <span className="tag-green">{p.status}</span>
                  </div>
                  <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>{p.title}</h3>
                  <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>VIEW DETAILS →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">CLIENT SUCCESS</div>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>CLIENT <span style={{ color: ORANGE }}>TRUST</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="tag-orange" style={{ marginBottom: 16, display: "inline-block" }}>{t.cat}</span>
                <div style={{ color: ORANGE, fontSize: 32, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>
                    {t.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#777" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 className="heading-font" style={{ fontSize: 52, fontWeight: 900, textTransform: "uppercase", marginBottom: 16 }}>READY TO BREAK GROUND?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
            Our structural, transparent teams are ready for your next big project. Let's build together.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-black" onClick={() => setPage("contact")}>📞 +234 (0) 800 GAMBALT</button>
            <button style={{ background: "transparent", border: "2px solid rgba(0,0,0,0.4)", color: "#000", padding: "12px 28px", fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }} onClick={() => setPage("quote")}>SUBMIT AN ENQUIRY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
const AboutPage = ({ setPage }) => {
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
            <div>
              <div className="section-tag">COMPANY OVERVIEW</div>
              <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 24 }}>
                DELIVERING INDUSTRIAL STRENGTH <span style={{ color: ORANGE }}>SINCE DAY ONE</span>
              </h2>
              <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 16 }}>
                Gambalt is a premier civil engineering and infrastructure consultancy delivering industrial-strength solutions across Nigeria. We are not just contractors; we are builders deeply committed to the structural integrity and long-term viability of every project we touch.
              </p>
              <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 28 }}>
                Our mission is to spearhead and modernize infrastructure that drives economic growth and improves communities, while maintaining the highest standards of safety and technical excellence.
              </p>
              <div style={{ display: "flex", gap: 32 }}>
                {[["15+", "Years Experience"], ["250+", "Projects Done"], ["100%", "Safety Record"]].map(([n, l]) => (
                  <div key={n}>
                    <div className="heading-font" style={{ fontSize: 36, fontWeight: 900, color: ORANGE }}>{n}</div>
                    <div style={{ fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=700&q=80" alt="team" style={{ width: "100%", height: 400, objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">OUR FOUNDATION</div>
            <h2 className="heading-font" style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" }}>CORE <span style={{ color: ORANGE }}>VALUES</span></h2>
            <p style={{ color: "#777", marginTop: 12 }}>Five principles that drive our operations and define our culture on every job site.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{v.desc}</p>
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
            {team.map(t => (
              <div key={t.name} className="team-card">
                <img src={t.img} alt={t.name} className="team-img" />
                <div style={{ background: CARD, padding: "20px 24px", borderTop: `3px solid ${ORANGE}` }}>
                  <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase" }}>{t.name}</h3>
                  <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{t.role}</p>
                  <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{t.desc}</p>
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
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ color: ORANGE, fontSize: 60, lineHeight: 1, marginBottom: 20 }}>"</div>
              <p style={{ fontSize: 18, fontStyle: "italic", color: "#ccc", lineHeight: 1.7, marginBottom: 24 }}>
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

// ─── SERVICES PAGE ───────────────────────────────────────────────────────────
const ServicesPage = ({ setPage }) => {
  const [expanded, setExpanded] = useState(0);
  const services = [
    { icon: "🛣", title: "Road Construction & Paving", desc: "High-durability road networks designed to withstand heavy industrial traffic and extreme weather conditions. Focus on long-term structural integrity.", details: ["Asphalt concrete binder and wearing course", "Pavement marking & signage", "Drainage integration", "Traffic management systems"] },
    { icon: "🏗", title: "Commercial Structures", desc: "End-to-end construction of high-rise commercial buildings, industrial warehouses, and corporate facilities built to international standards.", details: ["Foundation engineering", "Structural steel framework", "MEP integration", "Project closeout & handover"] },
    { icon: "🌉", title: "Bridge Engineering", desc: "Design and construction of robust bridges and overpasses, ensuring critical infrastructure connectivity over challenging terrains and waterways.", details: ["Pre-stressed concrete design", "Geotechnical investigation", "Load analysis & fatigue testing", "Expansion joint systems"] },
    { icon: "⛏", title: "Earthworks & Excavation", desc: "Massive-scale land clearing, grading, and excavation utilizing our extensive fleet of heavy machinery to prepare sites for major developments.", details: ["Bulk earthworks", "Site leveling & compaction", "Dewatering systems", "Slope stabilization"] },
  ];

  return (
    <div>
      <PageHero tag="OUR EXPERTISE" title="INDUSTRIAL STRENGTH" accent="SERVICES" img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
        subtitle="Comprehensive civil engineering and construction solutions designed for maximum durability, efficiency, and compliance. We deliver outcomes, not just outputs." />

      {/* Industries bar */}
      <div className="industries-bar">
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.7)" }}>INDUSTRIES SERVED:</span>
          {["🏛 GOVERNMENT", "🏭 INDUSTRIAL", "🏢 COMMERCIAL", "🏗 INFRASTRUCTURE"].map(i => (
            <span key={i} style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: "#000" }}>{i}</span>
          ))}
        </div>
      </div>

      {/* Services accordion */}
      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          {services.map((s, i) => (
            <div key={i} className={`accordion-item ${expanded === i ? "open" : ""}`}>
              <div style={{ padding: "24px 32px", display: "flex", alignItems: "center", gap: 20, cursor: "pointer", background: expanded === i ? CARD : "transparent" }}
                onClick={() => setExpanded(expanded === i ? -1 : i)}>
                <div style={{ fontSize: 28, width: 48, textAlign: "center" }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 className="heading-font" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase" }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{s.desc}</p>
                </div>
                <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700, flexShrink: 0 }}>{expanded === i ? "−" : "+"}</span>
              </div>
              {expanded === i && (
                <div style={{ padding: "0 32px 28px 100px", background: CARD }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                    {s.details.map(d => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: ORANGE }}>✓</span>
                        <span style={{ fontSize: 13, color: "#ccc" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-orange" style={{ marginTop: 20 }} onClick={() => setPage("service-detail")}>VIEW FULL SERVICE →</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA form */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🦺</div>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase" }}>START YOUR NEXT PROJECT WITH GAMBALT</h2>
            <p style={{ color: "#888", marginTop: 12 }}>Whether you need comprehensive infrastructure build or specialized civil engineering services, our team is ready.</p>
          </div>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Company / Organization</label>
                <input className="form-input" placeholder="Acme Corp" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Service Required</label>
              <select className="form-select">
                <option>Road Construction & Paving</option>
                <option>Commercial Structures</option>
                <option>Bridge Engineering</option>
                <option>Earthworks & Excavation</option>
                <option>Project Management</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Project Brief</label>
              <textarea className="form-textarea" placeholder="Briefly describe your project needs..." />
            </div>
            <button className="btn-orange" style={{ width: "100%", textAlign: "center", padding: 16 }} onClick={() => setPage("quote")}>SUBMIT REQUEST</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── SERVICE DETAIL ───────────────────────────────────────────────────────────
const ServiceDetailPage = ({ setPage }) => (
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

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
const ProjectsPage = ({ setPage }) => {
  const [filter, setFilter] = useState("All Projects");
  const filters = ["All Projects", "Infrastructure / Roads", "Commercial", "Residential", "Drainage Systems", "Institutional"];

  const projects = [
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Lagos-Ibadan Expressway Section II", desc: "Major highway reconstruction spanning 45km, including heavy-duty asphalt paving and structural works.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tag: "Infrastructure / Roads", id: "project-lagos" },
    { cat: "COMMERCIAL", status: "ONGOING", title: "Victoria Island Tech Hub", desc: "A 12-story commercial complex featuring smart building management systems and green energy.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", tag: "Commercial", id: "project-detail" },
    { cat: "DRAINAGE SYSTEMS", status: "COMPLETED 2022", title: "Lekki Peninsula Flood Control", desc: "Extensive underground drainage network covering 15 sq km to mitigate seasonal flooding.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80", tag: "Drainage Systems", id: "project-detail" },
    { cat: "INSTITUTIONAL", status: "COMPLETED 2021", title: "Federal Medical Center Extension", desc: "Construction of a new 200-bed ward facility adhering strictly to WHO healthcare infrastructure standards.", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80", tag: "Institutional", id: "project-detail" },
    { cat: "RESIDENTIAL", status: "ONGOING", title: "Opal Luxury Estate", desc: "Development of 50 premium detached duplexes with complete internal road networks.", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80", tag: "Residential", id: "project-detail" },
    { cat: "INFRASTRUCTURE", status: "COMPLETED 2023", title: "Ogun State Interchange", desc: "Design and construction of a multi-level interchange to ease traffic congestion at major junction.", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", tag: "Infrastructure / Roads", id: "project-detail" },
  ];

  const visible = filter === "All Projects" ? projects : projects.filter(p => p.tag === filter);

  return (
    <div>
      <PageHero tag="OUR PORTFOLIO" title="DELIVERING" accent="EXCELLENCE ACROSS NIGERIA"
        img="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1600&q=80"
        subtitle="Explore our comprehensive track record of successful infrastructure, commercial, and residential projects." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {filters.map(f => (
              <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {visible.map((p, i) => (
              <div key={i} className="project-card" onClick={() => setPage(p.id)}>
                <div className="project-overlay" />
                <div style={{ position: "relative" }}>
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
                    <span className="tag-orange">{p.cat}</span>
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12 }}>
                    <span className="tag-green">{p.status}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 24px", background: CARD }}>
                  <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, color: "#777", lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</p>
                  <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700 }}>VIEW DETAILS →</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn-outline">LOAD MORE PROJECTS</button>
          </div>
        </div>
      </section>

      {/* Gov vendor bar */}
      <div style={{ background: ORANGE, padding: "24px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="heading-font" style={{ fontSize: 20, fontWeight: 800, textTransform: "uppercase", color: "#000" }}>🏛 GOVERNMENT-READY VENDOR</div>
            <p style={{ fontSize: 13, color: "rgba(0,0,0,0.7)" }}>Fully certified and compliant for municipal, state, and federal infrastructure contracts.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["FMWH CERTIFIED", "BPP REGISTERED"].map(b => (
              <span key={b} style={{ border: "2px solid rgba(0,0,0,0.4)", padding: "8px 16px", fontFamily: "'Barlow Condensed'", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#000" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Have a project */}
      <section style={{ background: DARK, padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div style={{ fontSize: 40, marginBottom: 16 }}>🦺</div>
          <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>HAVE A SIMILAR PROJECT IN MIND?</h2>
          <p style={{ color: "#888", marginBottom: 36, maxWidth: 500, margin: "12px auto 36px" }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button className="btn-orange" onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
            <button className="btn-outline" onClick={() => setPage("about")}>VIEW COMPANY PROFILE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── PROJECT DETAIL ───────────────────────────────────────────────────────────
const ProjectDetailPage = ({ setPage }) => (
  <div>
    <div style={{ background: `url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1600&q=80') center/cover`, height: 400, paddingTop: 68 }} />
    <section style={{ background: BLACK, padding: "60px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }} className="grid-2">
          <div>
            <span style={{ color: ORANGE, cursor: "pointer", fontSize: 13, fontWeight: 600 }} onClick={() => setPage("projects")}>← Back to Projects</span>
            <div style={{ marginTop: 16, marginBottom: 8 }}>
              <div className="orange-bar" />
            </div>
            <h2 className="heading-font" style={{ fontSize: 36, fontWeight: 900, textTransform: "uppercase", marginBottom: 16 }}>PROJECT OVERVIEW</h2>
            <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 16 }}>
              The reconstruction of Section II of the Lagos-Ibadan Expressway represents one of the most critical infrastructure upgrades in recent Nigerian history. This 45km stretch serves as the primary artery connecting the commercial hub of Lagos to the rest of the country, handling an estimated 250,000 vehicles daily.
            </p>
            <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 32 }}>
              Gambalt was contracted to deliver a comprehensive overhaul of the existing carriageway, including significant expansion works, structural reinforcements of aging bridges, and the implementation of modern drainage solutions to combat seasonal flooding issues that previously plagued the route.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 28, marginBottom: 32 }}>
              <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 20 }}>SCOPE OF WORK & CHALLENGES</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>🔧 KEY DELIVERABLES</p>
                  {["45km dual carriageway reconstruction", "3 new interchange bridges", "15km of reinforced concrete drainage", "Installation of smart traffic monitoring systems"].map(d => (
                    <div key={d} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                      <span style={{ color: "#4ade80", fontSize: 12 }}>✓</span>
                      <span style={{ fontSize: 12, color: "#ccc" }}>{d}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ color: "#60a5fa", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>⚠ MAJOR CONSTRAINTS</p>
                  {["Maintaining traffic flow during construction", "Severe rainy season interruptions", "Navigating heavily populated informal settlements"].map(d => (
                    <div key={d} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                      <span style={{ color: "#60a5fa", fontSize: 12 }}>●</span>
                      <span style={{ fontSize: 12, color: "#ccc" }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h4 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>CONSTRUCTION GALLERY</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" alt="construction" style={{ width: "100%", height: 160, objectFit: "cover" }} />
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80" alt="construction" style={{ width: "100%", height: 160, objectFit: "cover" }} />
            </div>
            <div className="orange-bar" />
            <h4 className="heading-font" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", marginBottom: 24 }}>OUTCOMES & IMPACT</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
              {[["40%", "Reduction in Travel Time"], ["0", "Major Safety Incidents"], ["3 MONTHS", "Delivered Ahead of Schedule"]].map(([n, l]) => (
                <div key={n} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 20, textAlign: "center" }}>
                  <div className="heading-font" style={{ fontSize: 28, fontWeight: 900, color: ORANGE }}>{n}</div>
                  <div style={{ fontSize: 11, color: "#777", textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ color: ORANGE, fontSize: 20 }}>🦺</span>
                <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase" }}>SAFETY & COMPLIANCE</h4>
              </div>
              <p style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>This project adhered strictly to ISO 45001 standards for occupational health and safety.</p>
              {["FMWH Standard Specifications", "Environmental Impact Assessment Passed", "1.2M Safe Man-Hours Achieved"].map(i => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span style={{ fontSize: 12, color: "#ccc" }}>{i}</span>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24, marginBottom: 20 }}>
              <div style={{ color: ORANGE, fontSize: 32 }}>"</div>
              <p style={{ fontSize: 13, color: "#ccc", fontStyle: "italic", lineHeight: 1.7, marginBottom: 16 }}>Gambalt's execution of Section II demonstrated exceptional engineering pedigree. Their ability to manage complex traffic diversions while maintaining high-quality construction standards was crucial to the project's success.</p>
              <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700 }}>ENGR. O. ADEYEMI</div>
              <div style={{ fontSize: 11, color: "#666" }}>Director of Highways, FMWH</div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 24 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>🦺</div>
              <h4 className="heading-font" style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>NEED SIMILAR INFRASTRUCTURE?</h4>
              <p style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>Our team is equipped to handle large-scale road and civil works.</p>
              <button className="btn-orange" style={{ width: "100%" }} onClick={() => setPage("quote")}>REQUEST A QUOTE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="cta-section">
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO START YOUR PROJECT?</h2>
        <p style={{ marginBottom: 28, opacity: 0.9 }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
        <button className="btn-black" onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
      </div>
    </div>
  </div>
);

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const HowItWorksPage = ({ setPage }) => {
  const [open, setOpen] = useState(0);
  const steps = [
    { n: "01", title: "Initial Consultation", sub: "DISCOVERY & ALIGNMENT", desc: "We begin by understanding your project's fundamental requirements, scope, and constraints. Our senior engineers meet with stakeholders to establish clear objectives and identify potential red flags early in the process.", items: ["Needs assessment & site history review", "Preliminary budget & timeline discussions", "Stakeholder alignment workshops"], img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" },
    { n: "02", title: "Engineering Assessment", sub: "SITE ANALYSIS & FEASIBILITY", desc: "Our technical team conducts thorough site investigations including geotechnical surveys, soil analysis, and structural assessments to build a precise understanding of what your project demands.", items: ["Geotechnical site investigation", "Topographic & structural surveys", "Feasibility & risk analysis report"], img: "https://images.unsplash.com/photo-1581094488379-6a10d4e6f5f3?w=500&q=80" },
    { n: "03", title: "Technical Planning", sub: "DESIGN & ENGINEERING", desc: "Our engineering team produces detailed design drawings, specifications, BOQs, and execution plans. All plans undergo rigorous internal QA review before client presentation.", items: ["Structural design & drafting", "Bill of Quantities preparation", "Regulatory pre-approval documentation"], img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80" },
    { n: "04", title: "Project Execution Support", sub: "DELIVERY & SUPERVISION", desc: "With plans approved, our machinery and site teams mobilize. A resident engineer supervises all works daily while weekly progress reports keep clients fully informed throughout construction.", items: ["Full mobilization & site setup", "Daily engineering supervision", "Weekly client progress reports"], img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80" },
  ];

  return (
    <div>
      <PageHero tag="OUR PROCESS" title="HOW WE DELIVER" accent="EXCELLENCE" img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
        subtitle="A structured, hands-on approach to transforming complex engineering challenges into successfully delivered infrastructure projects." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase" }}>THE GAMBALT <span style={{ color: ORANGE }}>METHODOLOGY</span></h2>
            <p style={{ color: "#777", marginTop: 12 }}>A transparent, 4-step framework designed to mitigate risk and ensure project success.</p>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {steps.map((s, i) => (
              <div key={i} className={`process-step ${open === i ? "active" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ width: 44, height: 44, background: open === i ? ORANGE : "rgba(232,84,26,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="heading-font" style={{ fontSize: 16, fontWeight: 800 }}>{s.n}</span>
                    </div>
                    <div>
                      <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase" }}>{s.title}</h3>
                      <span style={{ color: ORANGE, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.sub}</span>
                    </div>
                  </div>
                  <span style={{ color: ORANGE, fontSize: 20, fontWeight: 700 }}>{open === i ? "∧" : "∨"}</span>
                </div>
                {open === i && (
                  <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                    <div>
                      <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                      {s.items.map(it => (
                        <div key={it} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <span style={{ color: ORANGE }}>✓</span>
                          <span style={{ fontSize: 13, color: "#ccc" }}>{it}</span>
                        </div>
                      ))}
                      <button className="btn-orange" style={{ marginTop: 16 }} onClick={(e) => { e.stopPropagation(); setPage("contact"); }}>REQUEST A CONSULTATION</button>
                    </div>
                    <img src={s.img} alt={s.title} style={{ width: 180, height: 130, objectFit: "cover", flexShrink: 0 }} className="hide-mobile" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase" }}>BUILT ON <span style={{ color: ORANGE }}>PRECISION</span></h2>
            <p style={{ color: "#777", marginTop: 12 }}>Why clients trust our structured delivery methodology.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
            {[{ icon: "⏱", title: "Time Efficiency", desc: "Early risk identification prevents costly delays during the construction phase." }, { icon: "⚖️", title: "Budget Control", desc: "Accurate BOQs and rigorous senior management keep expenditures within approved limits." }, { icon: "🛡", title: "Risk Mitigation", desc: "Strict adherence to ISO safety standards and environmental regulations at every step." }].map(c => (
              <div key={c.title} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32, textAlign: "center" }}>
                <div style={{ width: 60, height: 60, background: "rgba(232,84,26,0.15)", border: `1px solid rgba(232,84,26,0.3)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 24 }}>{c.icon}</div>
                <h4 className="heading-font" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO START YOUR PROJECT?</h2>
          <button className="btn-black" style={{ marginTop: 20 }} onClick={() => setPage("contact")}>CONTACT OUR TEAM</button>
        </div>
      </div>
    </div>
  );
};

// ─── TESTIMONIALS PAGE ────────────────────────────────────────────────────────
const TestimonialsPage = ({ setPage }) => {
  const [filter, setFilter] = useState("All Clients");
  const filters = ["All Clients", "Government", "Commercial Developer", "Private Owner"];

  const testimonials = [
    { cat: "Government", name: "Chief Engineer Adeyemi", role: "Ministry of Works & Infrastructure", text: "Gambalt's approach to the state highway expansion was exemplary. Their rigorous adherence to safety protocols and transparent communication throughout the delays caused by weather ensured we stayed within budget. Highly recommended for public works." },
    { cat: "Commercial Developer", name: "Sarah Johnson", role: "Director, Hencel Developments", text: "Delivering a 15-story commercial complex in Victoria Island comes with immense logistical challenges. Gambalt's technical planning phase mitigated structural risks early on. Their on-site execution team was proactive, solving problems before they impacted the timeline." },
    { cat: "Private Owner", name: "David Okafor", role: "CEO, Prime Logistics Hub", text: "We hired Gambalt for a custom industrial facility build. What impressed me most was their transparency. Every BOQ was detailed, every weekly report was accurate. I never felt out of the loop, and the final structural quality exceeded our expectations." },
    { cat: "Commercial Developer", name: "Marcus Bello", role: "BT Engineering, Apex Structures", text: "The level of detail in their preliminary engineering assessment saved us millions. They identified a soil instability issue that two previous firms missed. Gambalt doesn't just build; they engineer solutions." },
    { cat: "Government", name: "Engr. Fatima Yusuf", role: "Municipal Planning Board", text: "For municipal drainage systems, precision is non-negotiable. Gambalt delivered the Phase 2 network exactly to spec. Their site supervisors are some of the most disciplined professionals I've encountered in the sector." },
    { cat: "Private Owner", name: "Emmanuel Peters", role: "Operations Director, SteelWorks Inc.", text: "Safety was our primary concern for the heavy manufacturing plant expansion. Gambalt's zero-incident record on our site speaks volumes about their operational standards. They are true partners in infrastructure." },
  ];

  const visible = filter === "All Clients" ? testimonials : testimonials.filter(t => t.cat === filter);

  return (
    <div>
      <PageHero tag="CLIENT SUCCESS" title="BUILT ON" accent="TRUST" img="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        subtitle="Hear from the government agencies, commercial developers, and private owners who rely on Gambalt for precision engineering and rigorous project delivery." />

      <section className="section" style={{ background: BLACK }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {visible.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="tag-orange" style={{ marginBottom: 16, display: "inline-block", textTransform: "uppercase" }}>{t.cat}</span>
                <div style={{ color: ORANGE, fontSize: 40, lineHeight: 1, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>
                    {t.name.split(" ").slice(-2).map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#666" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn-outline">LOAD MORE REVIEWS</button>
          </div>
        </div>
      </section>

      {/* Gambalt Difference */}
      <section style={{ background: DARK, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase" }}>THE GAMBALT DIFFERENCE</h2>
            <p style={{ color: "#777", marginTop: 12 }}>Consistent themes from our client feedback highlight our core operational values.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
            {[{ icon: "💬", title: "Transparent Communication", desc: "No hidden costs or surprise delays. We maintain open channels, providing detailed weekly reports and proactive issue resolution." }, { icon: "🦺", title: "Uncompromising Safety", desc: "Strict adherence to international HSE standards. We protect our workers, your site, and your investment with rigorous protocols." }, { icon: "🔬", title: "Engineering Precision", desc: "From initial geotechnical surveys to final structural sign-offs, our QA/QC processes ensure flawless execution." }].map(d => (
              <div key={d.title} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: 32, textAlign: "center" }}>
                <div style={{ width: 60, height: 60, background: "rgba(232,84,26,0.15)", border: `1px solid rgba(232,84,26,0.3)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>{d.icon}</div>
                <h4 className="heading-font" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>{d.title}</h4>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>READY TO JOIN OUR SUCCESS STORIES?</h2>
          <p style={{ marginBottom: 28, opacity: 0.9, maxWidth: 500, margin: "0 auto 28px" }}>Contact our engineering team to discuss your specific infrastructure or construction needs.</p>
          <button className="btn-black" onClick={() => setPage("contact")}>REQUEST A CONSULTATION</button>
        </div>
      </div>
    </div>
  );
};

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage = ({ setPage }) => (
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

// ─── REQUEST QUOTE PAGE ───────────────────────────────────────────────────────
const RequestQuotePage = ({ setPage }) => (
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

// ─── THANK YOU PAGE ───────────────────────────────────────────────────────────
const ThankYouPage = ({ setPage }) => (
  <div style={{ background: BLACK, minHeight: "100vh", paddingTop: 68, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: "60px 48px", borderRadius: 12, textAlign: "center", maxWidth: 520 }}>
      <div style={{ width: 72, height: 72, background: "rgba(232,84,26,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", fontSize: 28 }}>✓</div>
      <h1 className="heading-font" style={{ fontSize: 56, fontWeight: 900, marginBottom: 16 }}>Thank You!</h1>
      <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7, marginBottom: 32 }}>Your request has been received. We'll be in touch soon.</p>
      <button className="btn-orange" style={{ padding: "14px 36px" }} onClick={() => setPage("home")}>Back to Home</button>
    </div>
  </div>
);

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function GambaltWebsite() {
  const [page, setPage] = useState("home");
  const topRef = useRef(null);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{styles}</style>
      <div ref={topRef}>
        <Navbar page={page} setPage={navigate} />
        <main>
          {page === "home" && <HomePage setPage={navigate} />}
          {page === "about" && <AboutPage setPage={navigate} />}
          {page === "services" && <ServicesPage setPage={navigate} />}
          {page === "service-detail" && <ServiceDetailPage setPage={navigate} />}
          {page === "projects" && <ProjectsPage setPage={navigate} />}
          {page === "project-lagos" && <ProjectDetailPage setPage={navigate} />}
          {page === "project-detail" && <ProjectDetailPage setPage={navigate} />}
          {page === "how-it-works" && <HowItWorksPage setPage={navigate} />}
          {page === "testimonials" && <TestimonialsPage setPage={navigate} />}
          {page === "contact" && <ContactPage setPage={navigate} />}
          {page === "quote" && <RequestQuotePage setPage={navigate} />}
          {page === "thank-you" && <ThankYouPage setPage={navigate} />}
        </main>
        {page !== "thank-you" && <Footer setPage={navigate} />}
      </div>
    </>
  );
}
