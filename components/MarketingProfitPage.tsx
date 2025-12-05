import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// --- Theme Configuration ---
const theme = {
  bg: "#030712", // Deep Dark Blue/Black
  primary: "#3b82f6",
  accent: "#8b5cf6",
  text: {
    main: "#f8fafc",
    muted: "#94a3b8",
  },
};

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// --- CSS Styles (Responsive Grid Logic) ---
const styles = `
  /* Global Reset */
  * {
    box-sizing: border-box;
  }

  /* Base Container */
  .container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* Grid Layout - Mobile First (1 Column) */
  .bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem 0;
  }

  /* Card Heights */
  .card-min-h {
    min-height: 200px;
  }

  /* Tablet (2 Columns) */
  @media (min-width: 768px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    
    /* Utility classes for tablet placement */
    .md-col-span-2 { grid-column: span 2; }
  }

  /* Desktop (3 Columns) */
  @media (min-width: 1024px) {
    .bento-grid {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(180px, auto);
    }
    
    /* Specific Desktop Layout */
    .lg-col-span-2 { grid-column: span 2; }
    .lg-col-span-3 { grid-column: span 3; }
    .lg-row-span-2 { grid-row: span 2; }
  }
`;

// --- Components ---

// 1. Spotlight Card
const BentoCard = ({ children, className = "", title, sub }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`card-min-h ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        borderRadius: "24px",
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "1.75rem",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Spotlight Effect */}
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: -1,
          opacity: 0,
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
          zIndex: 0,
        }}
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {title && (
          <div style={{ marginBottom: "1rem" }}>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: theme.text.main,
                margin: 0,
              }}
            >
              {title}
            </h3>
            {sub && (
              <p
                style={{
                  fontSize: "0.85rem",
                  color: theme.text.muted,
                  marginTop: "4px",
                }}
              >
                {sub}
              </p>
            )}
          </div>
        )}
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </motion.div>
  );
};

// 2. Graph Component
const GrowthGraph = () => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      height: "100%",
      width: "100%",
      gap: "8px",
      paddingTop: "1rem",
    }}
  >
    {[35, 60, 45, 70, 50, 80, 100].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ delay: i * 0.1, duration: 1, type: "spring" }}
        style={{
          flex: 1,
          background:
            i === 6
              ? `linear-gradient(to top, ${theme.primary}, ${theme.accent})`
              : "rgba(255,255,255,0.05)",
          borderRadius: "4px",
          minHeight: "10px",
        }}
      />
    ))}
  </div>
);

// --- Icons ---
const ArrowRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const TrendingUp = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

// --- Main Layout ---
export default function ProfessionalBentoGrid() {
  return (
    <>
      <style>{styles}</style>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme.bg,
          color: theme.text.main,
          fontFamily: "'Inter', system-ui, sans-serif",
          padding: "2rem 0",
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden", // Prevent horizontal scroll on mobile
        }}
      >
        {/* Soft Ambient Glow (No Grid) */}
        <div
          style={{
            position: "fixed",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: theme.primary,
            filter: "blur(250px)",
            opacity: 0.15,
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "fixed",
            bottom: "-20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: theme.accent,
            filter: "blur(250px)",
            opacity: 0.1,
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div className="container">
          {/* Header */}
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              EVOC LABS<span style={{ color: theme.primary }}>.</span>
            </div>
          </header>

          {/* Hero Text */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Turn <span style={{ color: theme.primary }}>Spend</span> Into
              Profit.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "1.1rem",
                color: theme.text.muted,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Data-driven marketing strategies for modern brands.
            </motion.p>
          </div>

          {/* THE GRID */}
          <div className="bento-grid">
            {/* 1. Main Stat (Wide) */}
            {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 2 cols */}
            <BentoCard
              className="md-col-span-2 lg-col-span-2"
              title="Total Ad Spend Managed"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(2.5rem, 4vw, 3rem)",
                      fontWeight: "700",
                      lineHeight: 1,
                    }}
                  >
                    ₹2Cr+
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "#10b981",
                      padding: "4px 8px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <TrendingUp /> 24%
                  </div>
                </div>
                <p
                  style={{
                    marginTop: "1rem",
                    color: theme.text.muted,
                    fontSize: "0.9rem",
                  }}
                >
                  Optimized across Meta, Google, and LinkedIn.
                </p>
              </div>
            </BentoCard>

            {/* 2. Graph (Tall) */}
            {/* Mobile: 1 col, Tablet: 1 col, Desktop: 1 col (Row Span 2) */}
            <BentoCard
              className="lg-row-span-2"
              title="Growth Trajectory"
              sub="Consistent scaling."
            >
              <GrowthGraph />
            </BentoCard>

            {/* 3. Expertise (Standard) */}
            <BentoCard title="Our Expertise">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["PPC", "Creative", "CRO", "Analytics"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      color: theme.text.main,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>4+</div>
                <div style={{ color: theme.text.muted, fontSize: "0.8rem" }}>
                  Years Exp.
                </div>
              </div>
            </BentoCard>

            {/* 4. Clients (Standard) */}
            <BentoCard title="Brands Scaled">
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: theme.text.main,
                  }}
                >
                  150+
                </div>
                <div style={{ color: theme.text.muted, fontSize: "0.9rem" }}>
                  Global Partners
                </div>
              </div>
            </BentoCard>

            {/* CTA Button */}
            {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols (Full Width Bottom) */}
            <motion.button
              onClick={scrollToContact}
              className="md-col-span-2 lg-col-span-3"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%",
                height: "100px",
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
                border: "none",
                borderRadius: "24px",
                padding: "0 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                color: "white",
                boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.4)",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                  Ready to scale?
                </div>
                <div style={{ opacity: 0.9, fontSize: "0.9rem" }}>
                  Book your free strategy audit.
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "1rem",
                }}
              >
                <ArrowRight />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
