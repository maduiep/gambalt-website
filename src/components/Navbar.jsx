import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";
import { Logo } from "../components/Logo";

export const Navbar = ({ page, setPage }) => {
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

