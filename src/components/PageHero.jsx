import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER, TEXT, MUTED, SUBTLE } from "../theme";

export const PageHero = ({ tag, title, accent, subtitle, img }) => (
  <div style={{
    background: `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100%), url('${img}') center/cover no-repeat`,
    minHeight: 420, paddingTop: 68, display: "flex", alignItems: "flex-end", paddingBottom: 64
  }} className="blur-in">
    <div className="container">
      {tag && <div className="orange-tag slide-in-left" style={{ marginBottom: 16 }}>{tag}</div>}
      <h1 className="heading-font slide-in-left delay-1" style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 16, textTransform: "uppercase", color: "#fff" }}>
        {title} {accent && <span style={{ color: ORANGE }}>{accent}</span>}
      </h1>
      {subtitle && <p className="fade-in delay-2" style={{ fontSize: 16, color: MUTED, maxWidth: 560, lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  </div>
);
