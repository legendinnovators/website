"use client";

import Link from "next/link";

const givePillars = [
  {
    number: "01",
    title: "Growth System",
    desc: "Integrating innovation, efficiency, productivity, and profitability with strong relationships across clients, vendors, and community.",
  },
  {
    number: "02",
    title: "Intelligence System",
    desc: "Connecting innovation, employees, startups, clients, and society to foster collaboration and knowledge sharing.",
  },
  {
    number: "03",
    title: "Value System",
    desc: "Built on transparency, honesty, integrity, accountability, and commitment to client and community well-being.",
  },
  {
    number: "04",
    title: "Ecosystem",
    desc: "Bringing together innovation, service, information, clients, products, and society for a mutually beneficial and sustainable business environment.",
  },
];

const craveValues = [
  {
    letter: "C",
    title: "Collaborative",
    desc: "We partner with efficient and specialized startups locally, regionally, and globally to deliver the best solutions for our clients.",
  },
  {
    letter: "R",
    title: "Responsible",
    desc: "We are accountable for our actions and prioritize ethical conduct and sustainable practices.",
  },
  {
    letter: "A",
    title: "Acceptance",
    desc: "We actively listen to understand and exceed our clients' expectations through adaptive strategies.",
  },
  {
    letter: "V",
    title: "Visionary & Victorious",
    desc: "We cultivate vision, drive, and a winning mindset to achieve consistent success.",
  },
  {
    letter: "E",
    title: "Efficient",
    desc: "We focus on transparency and operational efficiency to maximize benefits for clients and society.",
  },
];

const beliefs = [
  { title: "Innovation as the norm", desc: "not the exception" },
  { title: "Sustainable & ethical growth", desc: "always" },
  { title: "Profitability with social responsibility", desc: "in everything we do" },
];

const stats = [
  { value: "300+", label: "Businesses Served" },
  { value: "98%", label: "Success Rate" },
  { value: "100%", label: "Ethical" },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── Section 1: Hero ── */}
      <section className="about-hero">
        <div className="about-hero-grid-overlay" />
        <div className="about-hero-glow" />
        <div className="about-container">
          <p className="about-eyebrow">About Legend Innovators</p>
          <h1 className="about-hero-title">
            We <span className="about-gold">Empower</span> Businesses<br />
            to Innovate & Succeed
          </h1>
          <p className="about-hero-desc">
            A dynamic Indian business advisory firm dedicated to empowering businesses of all sizes with high-quality, accessible, and ethical advice.
          </p>
          <div className="about-hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <div className="about-stat-num">{stat.value}</div>
                <div className="about-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Philosophy ── */}
      <section className="about-section about-white">
        <div className="about-container">
          <p className="about-section-tag">Our Philosophy</p>
          <h2 className="about-section-title">Why We Exist</h2>
          <div className="about-why-box">
            <div className="about-why-title">Our "why" is simple: Empowerment.</div>
            <div className="about-why-desc">
              We believe every business deserves access to world-class advisory — ethically, sustainably, and responsibly delivered.
            </div>
          </div>
          <div className="about-beliefs">
            {beliefs.map((belief) => (
              <div key={belief.title} className="about-belief">
                <div className="about-belief-dot" />
                <div className="about-belief-text">
                  <strong>{belief.title}</strong> — {belief.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Vision ── */}
      <section className="about-section about-gray">
        <div className="about-container">
          <p className="about-section-tag">Our Vision</p>
          <div className="about-vision-card">
            <p className="about-vision-tag">WHAT WE STAND FOR</p>
            <p className="about-vision-quote">
              "Driving growth while upholding ethical standards and social responsibility."
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: G.I.V.E ── */}
      <section className="about-section about-white">
        <div className="about-container">
          <p className="about-section-tag">G  I  V  E</p>
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-section-desc">
            We operate under a powerful four-pillar mission to create lasting impact for our clients and society.
          </p>
          <div className="about-give-grid">
            {givePillars.map((item) => (
              <div key={item.number} className="about-give-card">
                <div className="about-give-num">{item.number}</div>
                <h3 className="about-give-title">{item.title}</h3>
                <p className="about-give-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: C.R.A.V.E ── */}
      <section className="about-section about-gray">
        <div className="about-container">
          <p className="about-section-tag">C  R  A  V  E</p>
          <h2 className="about-section-title">Our Core Values</h2>
          <p className="about-section-desc">
            We live by these five guiding values in everything we do.
          </p>
          <div className="about-crave-list">
            {craveValues.map((item) => (
              <div key={item.letter} className="about-crave-item">
                <div className="about-crave-letter">{item.letter}</div>
                <div className="about-crave-content">
                  <div className="about-crave-name">{item.title}</div>
                  <div className="about-crave-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="about-cta-section">
        <div className="about-container about-cta-inner">
          <div className="about-cta-dot-overlay" />
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Work With Us?</h2>
            <p className="about-cta-desc">
              Join 150+ businesses that trust Legend Innovators for ethical, results-driven advisory.
            </p>
            <div className="about-cta-buttons">
              <Link href="/contact" className="about-cta-btn-primary">
                Book Free Consultation →
              </Link>
              <Link href="/services" className="about-cta-btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Base ── */
        .about-page { background: #FDF8F3; }
        .about-container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
        .about-white { background: white; }
        .about-gray { background: #FAFAF8; }
        .about-gold { color: #F5A623; }

        /* ── Hero ── */
        .about-hero {
          background: #1B2A6B;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .about-hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .about-hero-glow {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%);
          pointer-events: none;
        }
        .about-eyebrow {
          font-size: 11px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
        }
        .about-hero-title {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: var(--font-playfair);
          position: relative;
        }
        .about-hero-desc {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 40px;
          position: relative;
        }
        .about-hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          position: relative;
        }
        .about-stat { text-align: center; }
        .about-stat-num {
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 900;
          color: #F5A623;
          line-height: 1;
          margin-bottom: 6px;
        }
        .about-stat-lbl {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }

        /* ── Section shared ── */
        .about-section { padding: 80px 0; border-top: 1px solid #E5E7EB; }
        .about-section-tag {
          font-size: 20px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 12px;
          text-align: center;
        }
        .about-section-title {
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 800;
          color: #1B2A6B;
          margin-bottom: 16px;
          font-family: var(--font-playfair);
        }
        .about-section-desc {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.7;
          max-width: 560px;
          margin-bottom: 40px;
        }

        /* ── Philosophy ── */
        .about-why-box {
          background: #FFF8EC;
          border-left: 4px solid #F5A623;
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin-bottom: 32px;
          max-width: 680px;
        }
        .about-why-title {
          font-size: 16px;
          font-weight: 800;
          color: #1B2A6B;
          margin-bottom: 8px;
          font-family: var(--font-playfair);
        }
        .about-why-desc {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.7;
        }
        .about-beliefs { display: flex; flex-direction: column; gap: 16px; }
        .about-belief { display: flex; align-items: flex-start; gap: 14px; }
        .about-belief-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #F5A623;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .about-belief-text {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
        }
        .about-belief-text strong { color: #1B2A6B; }

        /* ── Vision ── */
        .about-vision-card {
          background: #1B2A6B;
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        .about-vision-tag {
          font-size: 10px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .about-vision-quote {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700;
          color: white;
          line-height: 1.6;
          font-style: italic;
          font-family: var(--font-playfair);
        }

        /* ── GIVE ── */
        .about-give-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .about-give-card {
          background: #111B47;
          border-radius: 16px;
          padding: 28px 24px;
          border: 1px solid rgba(245,166,35,0.2);
          transition: all 0.3s;
        }
        .about-give-card:hover {
          border-color: rgba(245,166,35,0.5);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(245,166,35,0.15);
        }
        .about-give-num {
          font-size: 11px;
          color: #F5A623;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .about-give-title {
          font-size: 17px;
          font-weight: 800;
          color: white;
          margin-bottom: 10px;
          font-family: var(--font-playfair);
        }
        .about-give-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }

        /* ── CRAVE ── */
        .about-crave-list { display: flex; flex-direction: column; gap: 14px; }
        .about-crave-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: white;
          border-radius: 14px;
          padding: 20px 24px;
          border: 1px solid #E5E7EB;
          transition: all 0.2s;
        }
        .about-crave-item:hover {
          border-color: #F5A623;
          box-shadow: 0 8px 24px rgba(245,166,35,0.1);
        }
        .about-crave-letter {
          font-size: 36px;
          font-weight: 900;
          color: #F5A623;
          line-height: 1;
          flex-shrink: 0;
          width: 36px;
        }
        .about-crave-content { flex: 1; }
        .about-crave-name {
          font-size: 15px;
          font-weight: 800;
          color: #1B2A6B;
          margin-bottom: 6px;
          font-family: var(--font-playfair);
        }
        .about-crave-desc {
          font-size: 13px;
          color: #6B7280;
          line-height: 1.6;
        }

        /* ── CTA ── */
        .about-cta-section {
          padding: 0 80px 80px;
          background: #FDF8F3;
        }
        .about-cta-inner {
          background: linear-gradient(135deg, #F5A623 0%, #C17F24 100%);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          padding: 60px 80px !important;
        }
        .about-cta-dot-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .about-cta-content {
          position: relative;
          text-align: center;
        }
        .about-cta-title {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          font-family: var(--font-playfair);
        }
        .about-cta-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 32px;
          line-height: 1.7;
        }
        .about-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .about-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          background: white;
          color: #C17F24;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .about-cta-btn-primary:hover { opacity: 0.9; }
        .about-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: white;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.6);
          transition: border-color 0.2s;
        }
        .about-cta-btn-secondary:hover { border-color: white; }

        /* ── MOBILE ── */
        @media (max-width: 1023px) {
          .about-container { padding: 0 20px; }

          .about-hero { padding: 100px 0 48px; }
          .about-hero-stats { gap: 24px; }

          .about-section { padding: 48px 0; }
          .about-section-desc { margin-bottom: 28px; }

          .about-why-box { padding: 16px 18px; }
          .about-why-title { font-size: 15px; }

          .about-vision-card { padding: 28px 20px; border-radius: 14px; }

          .about-give-grid { grid-template-columns: 1fr; gap: 14px; }
          .about-give-card { padding: 20px 18px; }
          .about-give-card:hover { transform: none; }

          .about-crave-item { padding: 16px 18px; gap: 14px; }
          .about-crave-item:hover { box-shadow: none; }
          .about-crave-letter { font-size: 28px; width: 28px; }

          .about-cta-section { padding: 0 16px 48px; }
          .about-cta-inner { padding: 36px 24px !important; border-radius: 16px; }
          .about-cta-buttons { flex-direction: column; align-items: center; }
          .about-cta-btn-primary,
          .about-cta-btn-secondary { width: 100%; max-width: 320px; justify-content: center; }
        }
      `}</style>

    </main>
  );
}