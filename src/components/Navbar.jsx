import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const dropdowns = {
    "Services": [
      { label: "Road Construction & Paving", pageKey: "service-road" },
      { label: "Commercial Structures", pageKey: "service-commercial" },
      { label: "Bridge Engineering", pageKey: "service-bridge" },
      { label: "Earthworks & Excavation", pageKey: "service-earthworks" }
    ],
    "Projects": [
      { label: "Lagos-Ibadan Expressway Expansion", pageKey: "project-lagos" },
      { label: "Victoria Island Tech Hub", pageKey: "project-techhub" },
      { label: "Ogun State Bridge Works", pageKey: "project-bridge" },
      { label: "Ogun State Manufacturing Plant", pageKey: "project-manufacturing" }
    ]
  };

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
      <motion.nav 
        style={navStyle} 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Logo onClick={() => setPage("home")} />

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map((l, i) => (
              <div key={l} className="nav-item-container">
                <motion.span 
                  className={`nav-link ${page === pageMap[l] ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  onClick={() => setPage(pageMap[l])}
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  {l} {dropdowns[l] && <span style={{ fontSize: 9, opacity: 0.7 }}>▼</span>}
                </motion.span>
                
                {dropdowns[l] && (
                  <div className="nav-dropdown">
                    {dropdowns[l].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="nav-dropdown-item"
                        onClick={() => setPage(item.pageKey)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <motion.button 
              className="btn-orange" 
              style={{ padding: "10px 20px", fontSize: 12 }} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setPage("quote")}
            >
              REQUEST A QUOTE
            </motion.button>
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
      </motion.nav>

      {/* Mobile Menu AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Mobile Menu Overlay (backdrop) */}
            <motion.div
              key="overlay"
              className="mobile-overlay is-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Slide-in Drawer */}
            <motion.div 
              key="drawer"
              className="mobile-drawer is-open"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
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
                  <motion.a
                    key={l}
                    className={`mobile-drawer__link ${page === pageMap[l] ? "is-active" : ""}`}
                    onClick={() => handleNavClick(l)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <span className="mobile-drawer__link-index">0{i + 1}</span>
                    <span className="mobile-drawer__link-text">{l}</span>
                    {page === pageMap[l] && <span className="mobile-drawer__link-dot" />}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mobile-drawer__footer">
                <motion.button
                  className="btn-orange mobile-drawer__cta"
                  onClick={() => { setPage("quote"); setMobileOpen(false); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + links.length * 0.05 }}
                >
                  REQUEST A QUOTE
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
