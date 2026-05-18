"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section style={{
      width: "100%",
      background: "linear-gradient(135deg, #FDF8F3 60%, #E8F5E9 100%)",
    }}>

      {/* Mobile Image with floating cards — hidden on desktop */}
      <div className="hero-mobile-image">
        <div style={{
          position: "relative",
          height: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
          {/* Blob */}
          <svg viewBox="0 0 420 420" style={{
            position: "absolute",
            width: "75%",
            height: "75%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}>
            <defs>
              <linearGradient id="blobGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#F5A623" }} />
                <stop offset="100%" style={{ stopColor: "#C17F24" }} />
              </linearGradient>
              <pattern id="gridPatternMob" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <line x1="6" y1="0" x2="6" y2="12" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
                <line x1="0" y1="6" x2="12" y2="6" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
              </pattern>
            </defs>
            <path
              d="M180,20 C260,0 370,40 400,130 C430,220 390,340 300,390 C210,440 80,410 30,320 C-20,230 20,100 100,50 C130,30 150,25 180,20Z"
              fill="url(#blobGradMob)"
            />
            <path
              d="M180,20 C260,0 370,40 400,130 C430,220 390,340 300,390 C210,440 80,410 30,320 C-20,230 20,100 100,50 C130,30 150,25 180,20Z"
              fill="url(#gridPatternMob)"
            />
          </svg>

          {/* Person */}
          <img
            src="/hero/hero-person-9.png"
            alt="Hero Person"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              height: "95%",
              width: "auto",
              objectFit: "contain",
            }}
          />

          {/* Card — top right */}
          <div style={{ position: "absolute", top: "12%", right: "20%", background: "white", border: "1px solid #E5E7EB", borderRight: "2px solid #F5A623", borderRadius: "5px", padding: "3px 6px", zIndex: 4, boxShadow: "0 2px 6px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#1B2A6B" }}>150+</div>
            <div style={{ fontSize: "8px", color: "#6B7280" }}>Startups & SMEs</div>
          </div>

          {/* Card — middle right */}
          <div style={{ position: "absolute", top: "45%", right: "15%", background: "white", border: "1px solid #E5E7EB", borderRight: "2px solid #F5A623", borderRadius: "5px", padding: "3px 6px", zIndex: 4, boxShadow: "0 2px 6px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#1B2A6B" }}>98%</div>
            <div style={{ fontSize: "8px", color: "#6B7280" }}>Success Rate</div>
          </div>

          {/* Card — bottom right */}
          <div style={{ position: "absolute", bottom: "8%", right: "25%", background: "white", border: "1px solid #E5E7EB", borderRight: "2px solid #F5A623", borderRadius: "5px", padding: "3px 6px", zIndex: 4, boxShadow: "0 2px 6px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#F5A623" }}>Startup India</div>
            <div style={{ fontSize: "8px", color: "#6B7280" }}>Aligned</div>
          </div>

          {/* Card — bottom left */}
          <div style={{ position: "absolute", bottom: "15%", left: "20%", background: "white", border: "1px solid #E5E7EB", borderLeft: "2px solid #F5A623", borderRadius: "5px", padding: "3px 6px", zIndex: 4, boxShadow: "0 2px 6px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#1B2A6B" }}>Pan-India</div>
            <div style={{ fontSize: "8px", color: "#6B7280" }}>Coverage</div>
          </div>

          {/* Card — middle left */}
          <div style={{ position: "absolute", top: "35%", left: "15%", background: "white", border: "1px solid #E5E7EB", borderLeft: "2px solid #F5A623", borderRadius: "5px", padding: "3px 6px", zIndex: 4, boxShadow: "0 2px 6px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#1B2A6B" }}>100%</div>
            <div style={{ fontSize: "8px", color: "#6B7280" }}>Ethical</div>
          </div>
        </div>
      </div>

      {/* Main Row — desktop two column / mobile text only */}
      <div style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 80px 0px 80px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
        minHeight: "85vh",
      }}
      className="hero-layout"
      >

        {/* Left — Text */}
        <div style={{ flex: "0 0 50%", maxWidth: "50%" }} className="hero-left">
          <h1 style={{
            fontSize: "clamp(32px, 3vw, 52px)",
            fontWeight: "800",
            color: "#1B2A6B",
            lineHeight: "1.2",
            marginBottom: "24px",
            fontFamily: "var(--font-playfair)",
          }}>
            Empower Your Business to{" "}
            <span style={{ color: "#F5A623" }}>Innovate, Elevate & Succeed.</span>
          </h1>

          <p style={{
            fontSize: "clamp(14px, 1.2vw, 16px)",
            color: "#6B7280",
            lineHeight: "1.8",
            marginBottom: "36px",
            maxWidth: "440px",
          }}>
            Expert Funding, Virtual CFO, Strategic Growth Advisory & more designed for Indian startups and SMEs. Ethical. Sustainable. Results-Driven.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "460px",
          }}
          className="hero-cta"
          >
            <Link
              href="/services"
              style={{
                background: "linear-gradient(to right, #F5A623, #C17F24)",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "999px",
                fontWeight: "600",
                fontSize: "14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right — Desktop image + cards */}
        <div style={{
          flex: "0 0 50%",
          maxWidth: "50%",
          position: "relative",
          height: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="hero-right"
        >
          <svg viewBox="0 0 420 420" style={{
            position: "absolute",
            width: "90%",
            height: "90%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}>
            <defs>
              <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#F5A623" }} />
                <stop offset="100%" style={{ stopColor: "#C17F24" }} />
              </linearGradient>
              <pattern id="gridPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <line x1="6" y1="0" x2="6" y2="12" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
                <line x1="0" y1="6" x2="12" y2="6" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
              </pattern>
            </defs>
            <path
              d="M180,20 C260,0 370,40 400,130 C430,220 390,340 300,390 C210,440 80,410 30,320 C-20,230 20,100 100,50 C130,30 150,25 180,20Z"
              fill="url(#blobGrad)"
            />
            <path
              d="M180,20 C260,0 370,40 400,130 C430,220 390,340 300,390 C210,440 80,410 30,320 C-20,230 20,100 100,50 C130,30 150,25 180,20Z"
              fill="url(#gridPattern)"
            />
          </svg>

          <img
            src="/hero/hero-person-9.png"
            alt="Hero Person"
            style={{
              position: "relative",
              zIndex: 1,
              height: "95%",
              width: "auto",
              objectFit: "contain",
              marginTop: "-40px",
            }}
          />

          <div style={{ position: "absolute", top: "2%", left: "70%", transform: "translateX(-50%)", background: "white", border: "1px solid #E5E7EB", borderRight: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>300+</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Startups & SMEs</div>
          </div>
          <div style={{ position: "absolute", top: "35%", right: "3%", background: "white", border: "1px solid #E5E7EB", borderRight: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>98%</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Success Rate</div>
          </div>
          <div style={{ position: "absolute", bottom: "15%", right: "8%", background: "white", border: "1px solid #E5E7EB", borderRight: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#F5A623" }}>Startup India</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Aligned</div>
          </div>
          <div style={{ position: "absolute", bottom: "15%", left: "10%", background: "white", border: "1px solid #E5E7EB", borderLeft: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>Pan-India</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Coverage</div>
          </div>
          <div style={{ position: "absolute", top: "25%", left: "10%", background: "white", border: "1px solid #E5E7EB", borderLeft: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>100%</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Ethical</div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,50 C180,0 360,60 540,20 C720,0 900,60 1080,10 C1260,0 1380,50 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      <style>{`
        .hero-mobile-image { display: none; }

        @media (max-width: 1023px) {
          .hero-mobile-image { display: block; }
          .hero-layout {
            flex-direction: column !important;
            padding: 24px 20px 0px 20px !important;
            gap: 24px !important;
            min-height: unset !important;
          }
          .hero-left {
            flex: unset !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .hero-left h1 {
            font-size: 28px !important;
          }
          .hero-left p {
            font-size: 14px !important;
            max-width: 100% !important;
            margin-bottom: 24px !important;
          }
          .hero-cta {
            flex-direction: column !important;
            max-width: 100% !important;
            gap: 10px !important;
          }
          .hero-cta > div {
            width: 100% !important;
          }
          .hero-cta a {
            width: 100% !important;
            text-align: center !important;
            display: flex !important;
            justify-content: center !important;
          }
          .hero-right { display: none !important; }
        }
      `}</style>

    </section>
  );
}