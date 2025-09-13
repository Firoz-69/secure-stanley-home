import React, { useEffect, useState } from "react";

const SIZE = 60; // px
const STROKE = 6; // px
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height ? Math.min(scrolled / height, 1) : 0;
      setScroll(percent);
      setVisible(scrolled > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        zIndex: 50,
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1e293b 60%, #64748b 100%)",
        width: SIZE,
        height: SIZE,
        transition: "box-shadow 0.2s",
      }}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <svg
        width={SIZE}
        height={SIZE}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#334155"
          strokeWidth={STROKE}
          fill="none"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#38bdf8"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - scroll)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s" }}
        />
      </svg>
      <span
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          fontSize: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M12 5l-7 7M12 5l7 7"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
