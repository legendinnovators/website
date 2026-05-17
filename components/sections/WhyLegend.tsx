"use client";

const results = [
  { number: "₹2.8 Cr", label: "Bank loan secured in 45 days", client: "Tech Startup, Kolkata" },
  { number: "40%", label: "Efficiency gains in 6 months", client: "Manufacturing Firm, Mumbai" },
];

export default function WhyLegend() {
  return (
    <section className="why-section">

      {/* Big Container Box */}
      <div className="why-container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#F5A623",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            Why Legend Innovators
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 3vw, 38px)",
            fontWeight: "800",
            color: "#1B2A6B",
            margin: 0,
            fontFamily: "var(--font-playfair)",
          }}>
            The Numbers That Matter
          </h2>
        </div>

        {/* Desktop Bento Grid */}
        <div className="why-desktop-grid">

          {/* Large navy card */}
          <div style={{
            background: "#1B2A6B",
            borderRadius: "16px",
            padding: "36px",
            gridRow: "span 2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "2px" }}>
                OUR MISSION
              </p>
              <h3 style={{
                fontSize: "20px",
                fontWeight: "800",
                color: "white",
                lineHeight: "1.4",
                margin: "0 0 12px 0",
                fontFamily: "var(--font-playfair)",
              }}>
                India's Most Trusted Business Advisory Partner
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7", margin: 0 }}>
                Empowering 150+ businesses with ethical, sustainable and results-driven advisory.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "52px", fontWeight: "900", color: "#F5A623", lineHeight: "1", marginBottom: "4px" }}>
                150+
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                Businesses served across India
              </div>
            </div>
          </div>

          {/* Top stat cards */}
          {[
            { value: "98%", label: "Success Rate", sub: "In funding & growth" },
            { value: "₹200Cr+", label: "Funding Raised", sub: "For startups & SMEs" },
          ].map((stat) => (
            <div
              key={stat.label}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(245,166,35,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#F5A623";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
              }}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px 24px",
                border: "1px solid #E5E7EB",
                textAlign: "center",
                transition: "all 0.3s",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "36px", fontWeight: "900", color: "#F5A623", marginBottom: "6px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "13px", fontWeight: "700", color: "#1B2A6B", marginBottom: "4px" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "11px", color: "#9CA3AF" }}>
                {stat.sub}
              </div>
            </div>
          ))}

          {/* Bottom result cards */}
          {results.map((result) => (
            <div key={result.number} style={{
              background: "#FFF8EC",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid #F5A623",
            }}>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#C17F24", marginBottom: "8px", letterSpacing: "1px" }}>
                LATEST RESULT
              </div>
              <div style={{ fontSize: "28px", fontWeight: "900", color: "#1B2A6B", marginBottom: "6px" }}>
                {result.number}
              </div>
              <div style={{ fontSize: "12px", color: "#6B7280", lineHeight: "1.5" }}>
                {result.label}<br />{result.client}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="why-mobile-grid">

          {/* Navy mission card */}
          <div style={{
            background: "#1B2A6B",
            borderRadius: "16px",
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            <div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "2px" }}>
                OUR MISSION
              </p>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "800",
                color: "white",
                lineHeight: "1.4",
                margin: "0 0 10px 0",
                fontFamily: "var(--font-playfair)",
              }}>
                India's Most Trusted Business Advisory Partner
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7", margin: 0 }}>
                Empowering 150+ businesses with ethical, sustainable and results-driven advisory.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "48px", fontWeight: "900", color: "#F5A623", lineHeight: "1", marginBottom: "4px" }}>
                150+
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                Businesses served across India
              </div>
            </div>
          </div>

          {/* Stats row — 2 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { value: "98%", label: "Success Rate", sub: "In funding & growth" },
              { value: "₹200Cr+", label: "Funding Raised", sub: "For startups & SMEs" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  border: "1px solid #E5E7EB",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px", fontWeight: "900", color: "#F5A623", marginBottom: "4px" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#1B2A6B", marginBottom: "3px" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "10px", color: "#9CA3AF" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Result cards — 2 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {results.map((result) => (
              <div key={result.number} style={{
                background: "#FFF8EC",
                borderRadius: "16px",
                padding: "18px 14px",
                border: "1px solid #F5A623",
              }}>
                <div style={{ fontSize: "9px", fontWeight: "700", color: "#C17F24", marginBottom: "6px", letterSpacing: "1px" }}>
                  LATEST RESULT
                </div>
                <div style={{ fontSize: "22px", fontWeight: "900", color: "#1B2A6B", marginBottom: "4px" }}>
                  {result.number}
                </div>
                <div style={{ fontSize: "11px", color: "#6B7280", lineHeight: "1.5" }}>
                  {result.label}<br />{result.client}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .why-section { background: white; padding: 40px 80px 80px 80px; }
        .why-container {
          max-width: 1280px;
          margin: 0 auto;
          background: white;
          borderRadius: 24px;
          border: 1px solid #E5E7EB;
          padding: 48px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10);
        }
        .why-desktop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .why-mobile-grid { display: none; }

        @media (max-width: 1023px) {
          .why-section { padding: 24px 16px 40px 16px; }
          .why-container { padding: 24px 16px; border-radius: 16px; }
          .why-desktop-grid { display: none; }
          .why-mobile-grid { display: flex; flex-direction: column; gap: 12px; }
        }
      `}</style>

    </section>
  );
}