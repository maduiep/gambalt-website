import React, { useState, useEffect, useCallback } from "react";
import { ORANGE, BORDER } from "../theme";
import { Logo } from "../components/Logo";

export const Navbar = ({ page, setPage, theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for navbar background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close menu on Escape key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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

  // Handle nav link click: navigate and close mobile menu
  const handleNavClick = (linkName) => {
    setPage(pageMap[linkName]);
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={navStyle} className="fade-in">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Logo onClick={() => setPage("home")} />

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map((l, i) => (
              <span key={l} className={`nav-link ${page === pageMap[l] ? "active" : ""} slide-in-right delta-${i+1}`}
                style={{ animationDelay: `${0.2 + i * 0.1}s`, opacity: 0 }}
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

          {/* Animated Hamburger Button (mobile only) */}
          <button
            className={`hamburger ${mobileOpen ? "is-active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (backdrop) */}
      <div
        className={`mobile-overlay ${mobileOpen ? "is-visible" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "is-open" : ""}`}>
        {/* Drawer Header with theme toggle and close */}
        <div className="mobile-drawer__header">
          <Logo onClick={() => { setPage("home"); setMobileOpen(false); }} />
          <button
            className="mobile-drawer__theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Decorative orange accent line */}
        <div className="mobile-drawer__accent" />

        {/* Navigation Links */}
        <nav className="mobile-drawer__nav">
          {links.map((l, i) => (
            <a
              key={l}
              className={`mobile-drawer__link ${page === pageMap[l] ? "is-active" : ""}`}
              onClick={() => handleNavClick(l)}
              style={{ transitionDelay: mobileOpen ? `${0.1 + i * 0.05}s` : "0s" }}
            >
              <span className="mobile-drawer__link-index">0{i + 1}</span>
              <span className="mobile-drawer__link-text">{l}</span>
              {page === pageMap[l] && <span className="mobile-drawer__link-dot" />}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="mobile-drawer__footer">
          <button
            className="btn-orange mobile-drawer__cta"
            onClick={() => { setPage("quote"); setMobileOpen(false); }}
            style={{ transitionDelay: mobileOpen ? `${0.1 + links.length * 0.05}s` : "0s" }}
          >
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </>
  );
};
