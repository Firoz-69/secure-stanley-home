import React, { useEffect, useState } from "react";

export default function AnimatedLogoTagline() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation: logo moves up and shrinks, tagline fades out
  // Calculate logo position for animation
  const logoStyle: React.CSSProperties =
    scrolled < 120
      ? {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${1 - scrolled / 400})`,
          transition:
            "top 0.4s cubic-bezier(.4,0,.2,1), left 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)",
          width: "160px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          zIndex: 10,
        }
      : {
          position: "absolute",
          left: "32px",
          top: "16px",
          transform: "scale(0.7)",
          transition:
            "top 0.4s cubic-bezier(.4,0,.2,1), left 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)",
          width: "80px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          zIndex: 10,
        };
  const taglineStyle: React.CSSProperties = {
    opacity: scrolled < 80 ? 1 - scrolled / 80 : 0,
    transition: "opacity 0.6s, background 2s linear, box-shadow 0.6s",
    fontSize: "1.7rem",
    color: "#fff",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textShadow: "0 4px 24px rgba(56,189,248,0.18), 0 2px 12px rgba(0,0,0,0.18)",
    marginTop: "2rem",
    textAlign: "center",
    background:
      "linear-gradient(120deg, rgba(30,41,59,0.85) 40%, rgba(56,189,248,0.45) 100%)",
    padding: "1.2rem 3rem",
    borderRadius: "2.5rem",
    boxShadow:
      "0 8px 32px 0 rgba(56,189,248,0.18), 0 2px 8px rgba(30,41,59,0.18)",
    backdropFilter: "blur(12px)",
    border: "2px solid rgba(56,189,248,0.18)",
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    animation: "gradientMove 6s ease-in-out infinite alternate",
  };

  // Add keyframes for animated gradient
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }`;
  if (!document.head.querySelector("#animated-gradient-keyframes")) {
    styleSheet.id = "animated-gradient-keyframes";
    document.head.appendChild(styleSheet);
  }

  // Hide logo when it reaches navbar
  if (scrolled >= 120) return null;
  return (
    <div style={{ position: "relative", height: "60vh" }}>
      <img
        src={`${import.meta.env.BASE_URL}logo.jpg`}
        alt="Stanley Safety Products Logo"
        style={{
          ...logoStyle,
          boxShadow:
            "0 8px 32px 0 rgba(56,189,248,0.18), 0 2px 8px rgba(30,41,59,0.18)",
          borderRadius: "1.5rem",
        }}
      />
      <div style={taglineStyle}>
        {/* Decorative SVG icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginRight: "1rem" }}
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="#38bdf8"
            strokeWidth="3"
            fill="rgba(56,189,248,0.08)"
          />
          <path
            d="M16 10v8"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="22" r="1.5" fill="#38bdf8" />
        </svg>
        <span
          style={{
            animation: "fadeInText 1.2s cubic-bezier(.4,0,.2,1)",
            display: "inline-block",
          }}
        >
          "Protecting Lives, Empowering Safety"
        </span>
        <button
          style={{
            marginLeft: "2rem",
            padding: "0.6rem 1.6rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff",
            background: "linear-gradient(90deg, #38bdf8 60%, #64748b 100%)",
            border: "none",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 12px rgba(56,189,248,0.18)",
            cursor: "pointer",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
          onClick={() => {
            const el = document.getElementById("product-categories");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Learn More
        </button>
        {/* Animated text keyframes */}
        <style>{`
          @keyframes fadeInText {
            0% { opacity: 0; letter-spacing: 0.2em; }
            100% { opacity: 1; letter-spacing: 0.08em; }
          }
        `}</style>
      </div>
    </div>
  );
}
