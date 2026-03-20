import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";
import { Logo } from "../components/Logo";

export const Navbar = ({ page, setPage, theme, setTheme }) => {
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
    background: scrolled ? "var(--nav-bg-scrolled, rgba(10,10,10,0.97))" : "var(--nav-bg, rgba(10,10,10,0.85))",
    backdropFilter: "blur(12px)",
    borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent",
    transition: "all 0.3s",
  };

  const toggleTheme = () => {
    if (setTheme) setTheme(theme === 'dark' ? 'light' : 'dark');
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
            <button 
              className="btn-outline" 
              style={{ padding: "8px", fontSize: 16, border: "1px solid var(--border-color, #2a2a2a)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px" }} 
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          <button className="mobile-toggle" style={{ display: "none", background: "none", border: "none", color: "var(--text-color, #fff)", fontSize: 24, cursor: "pointer" }}
            onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu" style={{ background: "var(--nav-bg-scrolled, rgba(0,0,0,0.98))" }}>
          <div style={{ position: "absolute", top: 20, right: 24, display: "flex", gap: "16px", alignItems: "center" }}>
            <button 
              style={{ background: "none", border: "1px solid var(--border-color, #2a2a2a)", color: "var(--text-color, #fff)", fontSize: 20, cursor: "pointer", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", color: "var(--text-color, #fff)", fontSize: 28, cursor: "pointer" }}>✕</button>
          </div>
          {links.map(l => (
            <span key={l} style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Barlow Condensed'", letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", color: page === pageMap[l] ? ORANGE : "var(--text-color, #fff)" }}
              onClick={() => { setPage(pageMap[l]); setMobileOpen(false); }}>{l}</span>
          ))}
          <button className="btn-orange" onClick={() => { setPage("quote"); setMobileOpen(false); }}>REQUEST A QUOTE</button>
        </div>
      )}
    </>
  );
};
