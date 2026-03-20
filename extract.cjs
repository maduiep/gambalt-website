const fs = require('fs');

const code = fs.readFileSync('code.jsx', 'utf-8');

fs.mkdirSync('src/components', { recursive: true });
fs.mkdirSync('src/pages', { recursive: true });

// 1. Extract theme constants
const themeMatch = code.match(/const ORANGE.*?BORDER = "#2a2a2a";/s);
let themeJs = "";
if (themeMatch) {
  themeJs = themeMatch[0].replace(/const /g, 'export const ');
  fs.writeFileSync('src/theme.js', themeJs);
}

// 2. Extract CSS
const { ORANGE, BLACK, DARK, CARD, BORDER } = {
  ORANGE: "#E8541A", BLACK: "#0a0a0a", DARK: "#141414", CARD: "#1a1a1a", BORDER: "#2a2a2a"
};

let stylesMatch = code.match(/const styles = `([\s\S]*?)`;/);
if (stylesMatch) {
  let css = stylesMatch[1]
    .replace(/\$\{ORANGE\}/g, ORANGE)
    .replace(/\$\{BLACK\}/g, BLACK)
    .replace(/\$\{DARK\}/g, DARK)
    .replace(/\$\{CARD\}/g, CARD)
    .replace(/\$\{BORDER\}/g, BORDER);
  fs.writeFileSync('src/index.css', css);
}

// 3. Extract components and pages
const sections = code.split(/\/\/ ─── (.*?) ───+/);
for (let i = 1; i < sections.length; i += 2) {
  const nameStr = sections[i].trim();
  let content = sections[i+1];
  
  if (nameStr === "MAIN APP") {
    // Write App.jsx
    let appContent = `import React, { useState, useRef, useEffect } from "react";\n` +
      `import './index.css';\n` +
      `import { Navbar, Footer, PageHero, Logo } from './components';\n` +
      `import { HomePage, AboutPage, ServicesPage, ServiceDetailPage, ProjectsPage, ProjectDetailPage, HowItWorksPage, TestimonialsPage, ContactPage, RequestQuotePage, ThankYouPage } from './pages';\n\n` +
      content.replace(/<style>\{styles\}<\/style>/, '');

    fs.writeFileSync('src/App.jsx', appContent);
  } else {
    const reactImports = `import React, { useState, useEffect, useRef } from "react";\n`;
    let themeImports = "";
    if (content.includes("ORANGE") || content.includes("BLACK") || content.includes("DARK") || content.includes("CARD") || content.includes("BORDER")) {
      themeImports = `import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";\n`;
    }
    
    let compImports = "";
    // Special components
    if (nameStr !== "Logo" && content.includes("<Logo")) compImports += `import { Logo } from "../components/Logo";\n`;
    if (nameStr !== "Page Hero" && content.includes("<PageHero")) compImports += `import { PageHero } from "../components/PageHero";\n`;
    
    content = content.replace(/^const (\w+)/m, "export const $1");
    
    const finalContent = reactImports + themeImports + compImports + content;
    
    let isPage = nameStr.includes("PAGE");
    // Some pages might not have "PAGE" in the name like "HOME PAGE", oh wait, they all do in code.jsx.
    // "HOW IT WORKS" doesn't have "PAGE" in the marker. "SERVICE DETAIL", "PROJECT DETAIL".
    let filename = "";
    if (nameStr === "HOME PAGE") filename = "HomePage.jsx";
    else if (nameStr === "ABOUT PAGE") filename = "AboutPage.jsx";
    else if (nameStr === "SERVICES PAGE") filename = "ServicesPage.jsx";
    else if (nameStr === "SERVICE DETAIL") { filename = "ServiceDetailPage.jsx"; isPage = true; }
    else if (nameStr === "PROJECTS PAGE") filename = "ProjectsPage.jsx";
    else if (nameStr === "PROJECT DETAIL") { filename = "ProjectDetailPage.jsx"; isPage = true; }
    else if (nameStr === "HOW IT WORKS") { filename = "HowItWorksPage.jsx"; isPage = true; }
    else if (nameStr === "TESTIMONIALS PAGE") filename = "TestimonialsPage.jsx";
    else if (nameStr === "CONTACT PAGE") filename = "ContactPage.jsx";
    else if (nameStr === "REQUEST QUOTE PAGE") filename = "RequestQuotePage.jsx";
    else if (nameStr === "THANK YOU PAGE") filename = "ThankYouPage.jsx";
    else if (nameStr === "Logo") { filename = "Logo.jsx"; isPage = false; }
    else if (nameStr === "Navbar") { filename = "Navbar.jsx"; isPage = false; }
    else if (nameStr === "Footer") { filename = "Footer.jsx"; isPage = false; }
    else if (nameStr === "Page Hero") { filename = "PageHero.jsx"; isPage = false; }
    else { filename = nameStr.replace(/ /g, "") + ".jsx"; }
    
    if (isPage) {
      fs.writeFileSync('src/pages/' + filename, finalContent);
    } else {
      fs.writeFileSync('src/components/' + filename, finalContent);
    }
  }
}

// Ensure index.js for exports
const compFiles = fs.readdirSync('src/components').filter(f => f.endsWith('.jsx'));
let compIndex = compFiles.map(f => `export * from './${f.replace('.jsx', '')}';`).join('\n');
fs.writeFileSync('src/components/index.js', compIndex);

const pageFiles = fs.readdirSync('src/pages').filter(f => f.endsWith('.jsx'));
let pageIndex = pageFiles.map(f => `export * from './${f.replace('.jsx', '')}';`).join('\n');
fs.writeFileSync('src/pages/index.js', pageIndex);
