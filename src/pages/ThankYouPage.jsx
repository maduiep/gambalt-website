import React, { useState, useEffect, useRef } from "react";
import { ORANGE, BLACK, DARK, CARD, BORDER } from "../theme";

export const ThankYouPage = ({ setPage }) => (
  <div style={{ background: BLACK, minHeight: "100vh", paddingTop: 68, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, padding: "60px 48px", borderRadius: 12, textAlign: "center", maxWidth: 520 }}>
      <div style={{ width: 72, height: 72, background: "rgba(232,84,26,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", fontSize: 28 }}>✓</div>
      <h1 className="heading-font" style={{ fontSize: 56, fontWeight: 900, marginBottom: 16 }}>Thank You!</h1>
      <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7, marginBottom: 32 }}>Your request has been received. We'll be in touch soon.</p>
      <button className="btn-orange" style={{ padding: "14px 36px" }} onClick={() => setPage("home")}>Back to Home</button>
    </div>
  </div>
);

