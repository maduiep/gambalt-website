const fs = require('fs');

// 1. Update theme.js
const themePath = 'src/theme.js';
let theme = fs.readFileSync(themePath, 'utf-8');
theme = theme.replace('export const BLACK = "#0a0a0a";', 'export const BLACK = "#ffffff";');
theme = theme.replace('export const DARK = "#141414";', 'export const DARK = "#f9f9f9";');
theme = theme.replace('export const CARD = "#1a1a1a";', 'export const CARD = "#ffffff";');
theme = theme.replace('export const BORDER = "#2a2a2a";', 'export const BORDER = "#e5e5e5";');
fs.writeFileSync(themePath, theme);

// 2. Update index.css
const cssPath = 'src/index.css';
let css = fs.readFileSync(cssPath, 'utf-8');
css = css.replace(/background: #0a0a0a;/g, 'background: #ffffff;');
css = css.replace(/color: #fff;/g, 'color: #111;');
css = css.replace(/::-webkit-scrollbar-track \{ background: #0a0a0a; \}/g, '::-webkit-scrollbar-track { background: #f0f0f0; }');
css = css.replace(/color: #ccc;/g, 'color: #555;');
css = css.replace(/\.nav-link:hover, \.nav-link\.active \{ color: #fff;/g, '.nav-link:hover, .nav-link.active { color: #111;');
css = css.replace(/\.btn-orange \{([\s\S]*?)color: #fff;/g, '.btn-orange {$1color: #fff;'); // Keep orange buttons white text
css = css.replace(/\.btn-outline \{([\s\S]*?)color: #fff;\n    border: 2px solid #fff;/g, '.btn-outline {$1color: #111;\n    border: 2px solid #111;');
css = css.replace(/\.btn-outline:hover \{ background: rgba\(255,255,255,0\.1\); \}/g, '.btn-outline:hover { background: rgba(0,0,0,0.05); }');
css = css.replace(/\.btn-outline-orange:hover \{ background: #E8541A; color: #fff; \}/g, '.btn-outline-orange:hover { background: #E8541A; color: #fff; }');
css = css.replace(/\.btn-black \{([\s\S]*?)background: #000;\n    color: #fff;/g, '.btn-black {$1background: #111;\n    color: #fff;');
css = css.replace(/background: rgba\(0,0,0,0\.5\);/g, 'background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.05);');
css = css.replace(/background: #1a1a1a;/g, 'background: #ffffff;');
css = css.replace(/border: 1px solid #2a2a2a;/g, 'border: 1px solid #e5e5e5;');
css = css.replace(/color: #999;/g, 'color: #666;');
css = css.replace(/background: #111;/g, 'background: #f5f5f5;');
css = css.replace(/color: #555;/g, 'color: #888;');
css = css.replace(/background: rgba\(0,0,0,0\.98\);/g, 'background: rgba(255,255,255,0.98);');
css = css.replace(/color: #888;/g, 'color: #444;');
// Fix mobile menu text
css = css.replace(/color: #fff, fontSize: 24/g, 'color: #111, fontSize: 24');

fs.writeFileSync(cssPath, css);

// 3. Update padding on hero sections
const homePath = 'src/pages/HomePage.jsx';
let home = fs.readFileSync(homePath, 'utf-8');
home = home.replace('<div style={{ maxWidth: 700 }}>', '<div style={{ maxWidth: 700, paddingLeft: 48 }}>');
// Update dark texts in HomePage to be legible on white
home = home.replace(/color: "#ccc"/g, 'color: "#555"');
home = home.replace(/color: "#aaa"/g, 'color: "#444"');
home = home.replace(/color: "#fff"/g, 'color: "#111"');
fs.writeFileSync(homePath, home);

const pageHeroPath = 'src/components/PageHero.jsx';
let pageHero = fs.readFileSync(pageHeroPath, 'utf-8');
pageHero = pageHero.replace('<div className="container">', '<div className="container" style={{ paddingLeft: "80px" }}>'); 
// 80px = 32px standard container padding + 48px offset
pageHero = pageHero.replace(/color: "#ccc"/g, 'color: "#eee"'); // since it has a dark overlay, text should stay light
fs.writeFileSync(pageHeroPath, pageHero);

// 4. Update Navbar.jsx
const navPath = 'src/components/Navbar.jsx';
let nav = fs.readFileSync(navPath, 'utf-8');
nav = nav.replace('background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)"', 'background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)"');
nav = nav.replace('color: "#fff"', 'color: "#111"'); // Mobile toggle
nav = nav.replace('color: page === pageMap[l] ? ORANGE : "#fff"', 'color: page === pageMap[l] ? ORANGE : "#111"');
fs.writeFileSync(navPath, nav);

// 5. Update Logo.jsx
const logoPath = 'src/components/Logo.jsx';
let logo = fs.readFileSync(logoPath, 'utf-8');
logo = logo.replace('color: "#fff"', 'color: "#111"');
fs.writeFileSync(logoPath, logo);
