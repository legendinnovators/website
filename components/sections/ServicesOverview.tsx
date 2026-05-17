"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    name: "Funding Advisory",
    title: "Secure the Right Capital — Faster & Smarter",
    description: "Expert guidance for bank loans, debt financing, credit enhancement, and strategic fundraising. We prepare compelling proposals and help secure the right capital efficiently.",
    result: "Faster funding with minimal hassle",
    cta: "Get Funding Support",
    href: "/services/funding-advisory",
    stat: { big: "₹200Cr+", label: "Funding facilitated for startups & SMEs", items: [{ value: "45", label: "Days avg. closure" }, { value: "98%", label: "Approval rate" }] },
  },
  {
    number: "02",
    name: "Virtual CFO",
    title: "World-Class Financial Leadership Without Full-Time Cost",
    description: "Cash flow management, budgeting, forecasting, tax planning, and performance reporting tailored for growing businesses.",
    result: "Strong financial control and smarter decisions",
    cta: "Get Your Virtual CFO",
    href: "/services/virtual-cfo",
    stat: { big: "CFO", label: "Professional leadership on a flexible basis", items: [{ value: "60%", label: "Cost savings" }, { value: "100+", label: "Clients served" }] },
  },
  {
    number: "03",
    name: "Business Advisory",
    title: "Plan Smarter, Operate Better, Grow Ethically",
    description: "Strategic planning, operational efficiency, market expansion, and sustainability advisory. We help optimize processes and drive ethical, profitable growth.",
    result: "A stronger, future-ready business",
    cta: "Get Strategic Guidance",
    href: "/services/business-advisory",
    stat: { big: "40%", label: "Avg. efficiency gains in 6 months", items: [{ value: "Pan-India", label: "Coverage" }, { value: "ESG", label: "Compliant" }] },
  },
  {
    number: "04",
    name: "Startup Mentoring",
    title: "From Idea to IPO — Your 10-Step Elevation Journey",
    description: "Proven 10-step program guiding you from idea to scaling and IPO readiness with mentoring in strategy, operations, branding, and fundraising.",
    result: "Build a scalable, investment-ready business faster",
    cta: "Start Your Elevation Journey",
    href: "/services/startup-mentoring",
    stat: { big: "10", label: "Steps from idea to IPO readiness", items: [{ value: "4mo", label: "Avg. to first revenue" }, { value: "IPO", label: "Ready" }] },
  },
  {
    number: "05",
    name: "Business Establishment",
    title: "Launch Legally, Professionally & with Confidence",
    description: "Complete setup support — company registration, IP protection, startup recognition, contracts, and brand development.",
    result: "Launch legally and professionally from day one",
    cta: "Launch Your Business Smoothly",
    href: "/services/business-establishment",
    stat: { big: "100%", label: "Compliant setup from day one", items: [{ value: "IP", label: "Protection" }, { value: "Fast", label: "Registration" }] },
  },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(services.length - 1, a + 1));

  return (
    <section style={{ background: "white" }} className="services-section">

      {/* Section Header */}
      <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }} className="services-header">
        <p style={{ fontSize: "20px", fontWeight: "700", color: "#F5A623", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
          What We Do
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 3vw, 40px)",
          fontWeight: "800",
          color: "#1B2A6B",
          margin: "0 0 16px 0",
          fontFamily: "var(--font-playfair)",
        }}>
          Our Services
        </h2>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.7", margin: 0,marginBottom: "15px" }}>
          From securing the right funding to running your finances like a Fortune 500 company We deliver the exact expertise Indian businesses need
        </p>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="services-desktop">
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          background: "#FAFAF8",
          borderRadius: "20px",
          padding: "40px",
          border: "1px solid #E5E7EB",
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "40px",
          minHeight: "420px",
        }}>
          {/* Left Sidebar */}
          <div style={{ borderRight: "1px solid #E5E7EB", paddingRight: "32px" }}>
            {services.map((service, index) => (
              <div
                key={service.number}
                onClick={() => setActive(index)}
                style={{
                  padding: "16px 20px",
                  cursor: "pointer",
                  borderRadius: "10px",
                  borderLeft: active === index ? "3px solid #F5A623" : "3px solid transparent",
                  background: active === index ? "#FFF8EC" : "transparent",
                  marginBottom: "4px",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: "11px", color: "#9CA3AF", marginBottom: "4px" }}>
                  {service.number}
                </div>
                <div style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: active === index ? "#C17F24" : "#6B7280",
                }}>
                  {service.name}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}>
            <div>
              <h3 style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: "800",
                color: "#1B2A6B",
                margin: "0 0 14px 0",
                lineHeight: "1.3",
                fontFamily: "var(--font-playfair)",
              }}>
                {services[active].title}
              </h3>
              <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.7", margin: "0 0 20px 0" }}>
                {services[active].description}
              </p>
              <div style={{
                background: "#FFF8EC",
                borderLeft: "3px solid #F5A623",
                padding: "10px 16px",
                borderRadius: "0 8px 8px 0",
                marginBottom: "24px",
              }}>
                <span style={{ fontSize: "12px", color: "#C17F24", fontWeight: "600" }}>
                  ✓ Result: {services[active].result}
                </span>
              </div>
              <Link
                href={services[active].href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(to right, #F5A623, #C17F24)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                {services[active].cta} →
              </Link>
            </div>

            <div style={{
              background: "#FFF8EC",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
              border: "1px solid #F5A623",
            }}>
              <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: "900", color: "#F5A623", lineHeight: "1" }}>
                {services[active].stat.big}
              </div>
              <div style={{ width: "32px", height: "2px", background: "#F5A623", margin: "10px auto 14px" }} />
              <div style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "20px" }}>
                {services[active].stat.label}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {services[active].stat.items.map((item) => (
                  <div key={item.label} style={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "14px",
                    border: "1px solid #E5E7EB",
                  }}>
                    <div style={{ fontSize: "18px", fontWeight: "800", color: "#1B2A6B" }}>{item.value}</div>
                    <div style={{ fontSize: "10px", color: "#9CA3AF", marginTop: "2px" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="services-mobile">

        {/* Carousel nav */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}>
          <button
            onClick={prev}
            disabled={active === 0}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid #E5E7EB",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: active === 0 ? "not-allowed" : "pointer",
              opacity: active === 0 ? 0.3 : 1,
              flexShrink: 0,
              transition: "opacity 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div style={{
            flex: 1,
            textAlign: "center",
            background: "#F5A623",
            color: "white",
            padding: "10px 20px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: "700",
          }}>
            {services[active].name}
          </div>

          <button
            onClick={next}
            disabled={active === services.length - 1}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid #E5E7EB",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: active === services.length - 1 ? "not-allowed" : "pointer",
              opacity: active === services.length - 1 ? 0.3 : 1,
              flexShrink: 0,
              transition: "opacity 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          marginTop: "12px",
          marginBottom: "16px",
        }}>
          {services.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? "16px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: active === i ? "#F5A623" : "#E5E7EB",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>

        {/* Content card */}
        <div style={{
          background: "#FAFAF8",
          borderRadius: "16px",
          padding: "24px 20px",
          border: "1px solid #E5E7EB",
          textAlign: "center",
        }}>
          <h3 style={{
            fontSize: "18px",
            fontWeight: "800",
            color: "#1B2A6B",
            margin: "0 0 12px 0",
            lineHeight: "1.3",
            fontFamily: "var(--font-playfair)",
          }}>
            {services[active].title}
          </h3>
          <p style={{
            fontSize: "13px",
            color: "#6B7280",
            lineHeight: "1.7",
            margin: "0 0 16px 0",
          }}>
            {services[active].description}
          </p>
          <div style={{
            background: "#FFF8EC",
            borderLeft: "3px solid #F5A623",
            padding: "8px 14px",
            borderRadius: "0 8px 8px 0",
            marginBottom: "16px",
            textAlign: "left",
          }}>
            <span style={{ fontSize: "12px", color: "#C17F24", fontWeight: "600" }}>
              ✓ Result: {services[active].result}
            </span>
          </div>
          <Link
            href={services[active].href}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to right, #F5A623, #C17F24)",
              color: "white",
              padding: "14px 24px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "700",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            {services[active].cta} →
          </Link>

          {/* Stat panel */}
          <div style={{
            background: "#FFF8EC",
            borderRadius: "14px",
            padding: "20px",
            textAlign: "center",
            border: "1px solid #F5A623",
          }}>
            <div style={{ fontSize: "40px", fontWeight: "900", color: "#F5A623", lineHeight: "1" }}>
              {services[active].stat.big}
            </div>
            <div style={{ width: "28px", height: "2px", background: "#F5A623", margin: "8px auto 10px" }} />
            <div style={{ fontSize: "11px", color: "#9CA3AF", marginBottom: "16px" }}>
              {services[active].stat.label}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {services[active].stat.items.map((item) => (
                <div key={item.label} style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid #E5E7EB",
                }}>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#1B2A6B" }}>{item.value}</div>
                  <div style={{ fontSize: "10px", color: "#9CA3AF", marginTop: "2px" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .services-section { padding: 40px 80px 60px 80px; }
        .services-header { margin-bottom: 60px; }
        .services-mobile { display: none; }
        .services-desktop { display: block; }

        @media (max-width: 1023px) {
          .services-section { padding: 40px 20px 40px 20px; }
          .services-header { margin-bottom: 32px; }
          .services-desktop { display: none; }
          .services-mobile { display: block; }
        }
      `}</style>

    </section>
  );
}