import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";

export const Logo = ({ onClick }) => (
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

