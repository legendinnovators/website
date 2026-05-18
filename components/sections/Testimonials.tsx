"use client";

import { useState } from "react";

const testimonials = [
  {
    image: "/testimonials/dibyaranjan.png",
    initials: "DR",
    quote: "They are more than consultants, they are mentors. They guided us through every step of the process and taught us how to think differently and strategically.",
    name: "Dibyaranjan Sahoo",
    designation: "Founder",
    company: "Vellow Motors",
  },
  {
    image: "/testimonials/dina-krishna.png",
    initials: "DK",
    quote: "They have a unique blend of skills and experience that make them stand out from other consultants. They are always ready to offer fresh and practical solutions to our challenges.",
    name: "Dina Krishna Mishra",
    company:"Kalpabata Foundation",
  },
  {
    image: "/testimonials/sundip.png",
    initials: "SM",
    quote: "Legend Innovators are not just consultants, they are partners. We were impressed by their professionalism, creativity and dedication. They delivered beyond our expectations and made us feel valued and supported.",
    name: "Sundip Mesra",
    company: "Srinav Ventures",
  },
    
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  const Avatar = ({ size }: { size: number }) => (
    <div style={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: "2px solid rgba(245,166,35,0.5)",
      overflow: "hidden",
      background: "rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      {!imgErrors[current] ? (
        <img
          src={t.image}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setImgErrors((prev) => ({ ...prev, [current]: true }))}
        />
      ) : (
        <div style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #F5A623, #C17F24)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.3,
          fontWeight: "900",
          color: "white",
        }}>
          {t.initials}
        </div>
      )}
    </div>
  );

  const NavArrows = ({ color = "white" }: { color?: string }) => (
    <>
      <button
        onClick={prev}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: `1px solid rgba(255,255,255,0.2)`,
          background: "rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
          transition: "background 0.2s",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: `1px solid rgba(255,255,255,0.2)`,
          background: "rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
          transition: "background 0.2s",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );

  const Dots = () => (
    <div style={{ display: "flex", gap: "5px", flex: 1, justifyContent: "center" }}>
      {testimonials.map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrent(index)}
          style={{
            height: "6px",
            borderRadius: "999px",
            background: current === index ? "#F5A623" : "rgba(255,255,255,0.3)",
            width: current === index ? "16px" : "6px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="testimonials-section">
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Main Box */}
        <div style={{
          background: "#1B2A6B",
          borderRadius: "24px",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* Grid pattern */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }} />

          {/* Gold glow */}
          <div style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "250px",
            background: "radial-gradient(ellipse, rgba(245,166,35,0.12), transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "28px", position: "relative" }} className="testimonials-header">
            <p style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#F5A623",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              What Clients Say
            </p>
            <h3 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: "800",
              color: "white",
              margin: 0,
              fontFamily: "var(--font-playfair)",
            }}>
              300+ Businesses Trust Us
            </h3>
          </div>

          {/* ── DESKTOP layout ── */}
          <div className="testimonials-desktop">
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              position: "relative",
            }}>
              {/* Left — avatar + name */}
              <div style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                minWidth: "140px",
              }}>
                <Avatar size={80} />
                <div style={{ fontSize: "15px", fontWeight: "800", color: "white", textAlign: "center" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                  {t.designation}{t.designation && t.company ? " · " : ""}{t.company}
                </div>
              </div>

              {/* Right — quote + nav */}
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: "1.8",
                  margin: "0 0 20px 0",
                  fontStyle: "italic",
                }}>
                  "{t.quote}"
                </p>
                <div style={{
                  width: "32px",
                  height: "2px",
                  background: "linear-gradient(to right, #F5A623, #C17F24)",
                  borderRadius: "999px",
                  marginBottom: "20px",
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <NavArrows />
                  <Dots />
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE layout ── */}
          <div className="testimonials-mobile">
            <Avatar size={60} />
            <p style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
              margin: "16px 0",
              fontStyle: "italic",
              textAlign: "center",
            }}>
              "{t.quote}"
            </p>
            <div style={{
              width: "28px",
              height: "2px",
              background: "#F5A623",
              borderRadius: "999px",
              margin: "0 auto 14px",
            }} />
            <div style={{ fontSize: "14px", fontWeight: "800", color: "white", textAlign: "center", marginBottom: "4px" }}>
              {t.name}
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: "20px" }}>
              {t.designation} · {t.company}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <NavArrows />
              <Dots />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .testimonials-section { background: white; padding: 0 80px 80px 80px; }
        .testimonials-header { padding: 40px 80px 0; }
        .testimonials-desktop { display: flex; padding: 28px 48px 40px; }
        .testimonials-mobile { display: none; }

        @media (max-width: 1023px) {
          .testimonials-section { padding: 0 16px 40px 16px; }
          .testimonials-header { padding: 24px 16px 0; }
          .testimonials-desktop { display: none; }
          .testimonials-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 16px 24px;
          }
        }
      `}</style>

    </section>
  );
}