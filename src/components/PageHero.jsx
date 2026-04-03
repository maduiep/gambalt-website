import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORANGE, TEXT, MUTED } from "../theme";

export const PageHero = ({ tag, title, accent, subtitle, img }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoUrl = "https://videos.pexels.com/video-files/5854128/5854128-hd_1920_1080_24fps.mp4";

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 420, backgroundColor: "#000" }}>
      {/* Background Image (Fallback/Initial) */}
      <motion.div 
        initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
        animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background: `url('${img}') center/cover no-repeat`,
          zIndex: 0
        }}
      />

      {/* Video Background */}
      <motion.video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1
        }}
      />

      {/* Dark Overlay */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)`,
          zIndex: 2
        }}
      />

      {/* Content */}
      <div 
        style={{
          position: "relative",
          zIndex: 3,
          paddingTop: 136,
          paddingBottom: 64,
          display: "flex",
          alignItems: "flex-end",
          minHeight: 420
        }}
      >
        <div className="container">
          {tag && (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="orange-tag" 
              style={{ marginBottom: 16 }}
            >
              {tag}
            </motion.div>
          )}
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-font" 
            style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 16, textTransform: "uppercase", color: "#fff" }}
          >
            {title} {accent && <span style={{ color: ORANGE }}>{accent}</span>}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-subtitle-fix"
              style={{ fontSize: 16, maxWidth: 560, lineHeight: 1.6 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};
