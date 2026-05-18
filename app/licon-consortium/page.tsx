import Link from "next/link";

const provides = [
  "Continuous mentoring and expert business guidance",
  "Access to real client projects and revenue opportunities",
  "Collaborative network with complementary service providers",
  "Knowledge sharing, peer learning, and joint growth initiatives",
  "Brand visibility as part of a trusted consortium",
  "Support in scaling, operations, and sustainable growth",
];

const whoFor = [
  "Early to mid-stage startups with strong potential and ethical business practices",
  "Specialized service providers looking for stable client flow and mentoring",
  "Entrepreneurs who want structured guidance beyond initial startup registration",
  "Businesses seeking vetted, reliable startup partners for project execution",
];

const process = [
  { title: "Application & Screening", desc: "Submit your startup details for quick review" },
  { title: "Onboarding & Assessment", desc: "Personalized evaluation of your strengths and needs" },
  { title: "Mentoring & Integration", desc: "Join the consortium with tailored guidance and network access" },
  { title: "Growth & Opportunities", desc: "Receive ongoing support, client projects, and collaboration" },
];

const stats = [
  { value: "300+", label: "Member Startups" },
  { value: "Pan-India", label: "Coverage" },
  { value: "100%", label: "Ethical Network" },
];

export default function LiconPage() {
  return (
    <main className="licon-page">

      {/* ── Hero ── */}
      <section className="licon-hero">
        <div className="licon-hero-grid" />
        <div className="licon-hero-glow" />
        <div className="licon-container">
          <div className="licon-logo-wrap">
            <img
              src="/licon/licon-logo.png"
              alt="LICON"
              className="licon-dark-img"
            />
          </div>
          <p className="licon-eyebrow">Legend Innovators Consortium</p>
          <h1 className="licon-hero-title">
            Building a Stronger Ecosystem for{" "}
            <span className="licon-gold">Efficient Indian Startups</span>
          </h1>
          <p className="licon-hero-desc">
            We connect promising startups with continuous mentoring, collaborative opportunities, and real business growth — creating a sustainable support system beyond government schemes.
          </p>
          <div className="licon-hero-btns">
            <Link href="/contact" className="licon-btn-primary">
              Join LICON as a Startup
            </Link>
            <Link href="/services" className="licon-btn-secondary">
              Explore Services through LICON
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="licon-stats-bar">
        {stats.map((stat) => (
          <div key={stat.label} className="licon-stat">
            <div className="licon-stat-num">{stat.value}</div>
            <div className="licon-stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── What We Provide ── */}
      <section className="licon-section licon-white">
        <div className="licon-container">
          <p className="licon-section-tag">What We Provide</p>
          <h2 className="licon-section-title">A Collaborative Platform for Real Growth</h2>
          <p className="licon-section-desc">
            LICON (Legend Innovators Consortium) is our initiative to nurture efficient and specialized startups in India. We bring them together under one collaborative platform to overcome the common challenge of premature closure due to lack of ongoing business support.
          </p>
          <div className="licon-provides">
            {provides.map((item) => (
              <div key={item} className="licon-provide-item">
                <div className="licon-provide-dot" />
                <div className="licon-provide-text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="licon-section licon-gray">
        <div className="licon-container">
          <p className="licon-section-tag">Who It&apos;s For</p>
          <h2 className="licon-section-title">Is LICON Right for You?</h2>
          <div className="licon-who-grid">
            {whoFor.map((item) => (
              <div key={item} className="licon-who-card">
                <div className="licon-who-check">✓</div>
                <div className="licon-who-text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="licon-process-section">
        <div className="licon-container">
          <p className="licon-section-tag licon-tag-light">Our Process</p>
          <h2 className="licon-section-title licon-title-light">How to Join LICON</h2>
          <div className="licon-process-list">
            {process.map((step, i) => (
              <div key={step.title} className="licon-process-step">
                <div className="licon-process-num">{i + 1}</div>
                <div className="licon-process-content">
                  <div className="licon-process-title">{step.title}</div>
                  <div className="licon-process-desc">{step.desc}</div>
                </div>
                {i < process.length - 1 && <div className="licon-process-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join Section ── */}
      <section className="licon-section licon-white">
        <div className="licon-container">
          <p className="licon-section-tag">Be Part of LICON</p>
          <h2 className="licon-section-title">Join a Growing Community</h2>
          <div className="licon-join-box">
            <p className="licon-join-desc">
              Join a growing community of efficient startups and service providers backed by Legend Innovators&apos; expertise. Gain continuous support, business opportunities, and the collective strength needed to scale sustainably and succeed responsibly.
            </p>
            <div className="licon-join-quote">
              &ldquo;Whether you are a startup seeking long-term guidance or a business looking for specialized partners, LICON offers a mutually beneficial ecosystem.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="licon-cta-section">
        <div className="licon-container">
          <div className="licon-cta-box">
            <div className="licon-cta-dot-overlay" />
            <div className="licon-cta-content">
              <p className="licon-cta-eyebrow">Ready to Join?</p>
              <h2 className="licon-cta-title">
                Be Part of India&apos;s Most Supportive Startup Consortium
              </h2>
              <p className="licon-cta-desc">
                Ready to be part of India&apos;s most supportive startup consortium? Book a free consultation or apply to join LICON today.
              </p>
              <div className="licon-cta-btns">
                <Link href="/contact" className="licon-cta-btn-primary">
                  Book Free LICON Consultation →
                </Link>
                <Link href="/contact" className="licon-cta-btn-secondary">
                  Apply to Join LICON
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .licon-page { background: #FDF8F3; }
        .licon-container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
        .licon-gold { color: #F5A623; }
        .licon-white { background: white; }
        .licon-gray { background: #FAFAF8; }

        /* Hero */
        .licon-hero {
          background: #1B2A6B;
          padding: 60px 0 40px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .licon-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .licon-hero-glow {
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.12), transparent 70%);
          pointer-events: none;
        }
        .licon-logo-wrap {
          display: flex; justify-content: center;
          margin-bottom: 8px; position: relative;
        }
        .licon-logo-img {
          width: 400px; height: 200px;
          object-fit: contain; border-radius: 0;
        }
        .licon-eyebrow {
          font-size: 20px; font-weight: 700; color: #F5A623;
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 16px; position: relative;
        }
        .licon-hero-title {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 800; color: white; line-height: 1.2;
          margin-bottom: 20px; font-family: var(--font-playfair);
          position: relative; max-width: 760px; margin-left: auto; margin-right: auto;
        }
        .licon-hero-desc {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(255,255,255,0.6); line-height: 1.8;
          max-width: 640px; margin: 0 auto 36px;
          position: relative;
        }
        .licon-hero-btns {
          display: flex; gap: 16px; justify-content: center;
          flex-wrap: wrap; position: relative;
        }
        .licon-btn-primary {
          display: inline-flex; align-items: center;
          background: linear-gradient(to right, #F5A623, #C17F24);
          color: white; padding: 14px 28px;
          border-radius: 999px; font-size: 14px; font-weight: 700;
          text-decoration: none; transition: opacity 0.2s;
        }
        .licon-btn-primary:hover { opacity: 0.9; }
        .licon-btn-secondary {
          display: inline-flex; align-items: center;
          background: transparent; color: white;
          padding: 14px 28px; border-radius: 999px;
          font-size: 14px; font-weight: 700;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.4);
          transition: border-color 0.2s;
        }
        .licon-btn-secondary:hover { border-color: white; }

        /* Stats */
        .licon-stats-bar {
          display: grid; grid-template-columns: repeat(3, 1fr);
          background: #F5A623;
        }
        .licon-stat {
          padding: 24px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.2);
        }
        .licon-stat:last-child { border-right: none; }
        .licon-stat-num {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 900; color: white; line-height: 1; margin-bottom: 6px;
        }
        .licon-stat-lbl { font-size: 13px; color: rgba(255,255,255,0.8); }

        /* Section shared */
        .licon-section { padding: 80px 0; border-top: 1px solid #E5E7EB; }
        .licon-section-tag {
          font-size: 20px; font-weight: 700; color: #F5A623;
          letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;
        }
        .licon-tag-light { color: #F5A623; }
        .licon-section-title {
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 800; color: #1B2A6B; margin-bottom: 16px;
          font-family: var(--font-playfair);
        }
        .licon-title-light { color: white; }
        .licon-section-desc {
          font-size: 15px; color: #6B7280; line-height: 1.7;
          max-width: 760px; margin-bottom: 40px;
        }

        /* Provides */
        .licon-provides { display: flex; flex-direction: column; gap: 16px; max-width: 760px; }
        .licon-provide-item { display: flex; align-items: flex-start; gap: 14px; }
        .licon-provide-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: #F5A623; flex-shrink: 0; margin-top: 5px;
        }
        .licon-provide-text { font-size: 15px; color: #1B2A6B; font-weight: 600; line-height: 1.6; }

        /* Who */
        .licon-who-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .licon-who-card {
          display: flex; align-items: flex-start; gap: 16px;
          background: white; border-radius: 14px; padding: 24px;
          border: 1px solid #E5E7EB;
        }
        .licon-who-check {
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(to right, #F5A623, #C17F24);
          color: white; font-size: 14px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .licon-who-text { font-size: 14px; color: #1B2A6B; font-weight: 600; line-height: 1.6; padding-top: 4px; }

        /* Process */
        .licon-process-section {
          background: #111B47; padding: 80px 0;
          border-top: 1px solid #E5E7EB;
        }
        .licon-process-list { display: flex; flex-direction: column; gap: 0; max-width: 760px; margin-top: 40px; }
        .licon-process-step { display: flex; align-items: flex-start; gap: 20px; position: relative; }
        .licon-process-num {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(245,166,35,0.2);
          border: 2px solid #F5A623;
          color: #F5A623; font-size: 18px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .licon-process-content { flex: 1; padding: 10px 0 40px; }
        .licon-process-title { font-size: 17px; font-weight: 800; color: white; margin-bottom: 6px; font-family: var(--font-playfair); }
        .licon-process-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.6; }
        .licon-process-line {
          position: absolute; left: 23px; top: 48px; bottom: 0;
          width: 2px; background: linear-gradient(to bottom, #F5A623, rgba(245,166,35,0.1));
        }

        /* Join */
        .licon-join-box {
          background: #FAFAF8; border-radius: 20px;
          padding: 40px; border: 1px solid #E5E7EB; max-width: 860px;
        }
        .licon-join-desc {
          font-size: 15px; color: #6B7280; line-height: 1.8; margin-bottom: 24px;
        }
        .licon-join-quote {
          background: #FFF8EC; border-left: 4px solid #F5A623;
          padding: 16px 20px; border-radius: 0 12px 12px 0;
          font-size: 15px; color: #C17F24; font-weight: 600;
          font-style: italic; line-height: 1.7;
        }

        /* CTA */
        .licon-cta-section { background: #FDF8F3; padding: 0 0 80px; }
        .licon-cta-box {
          background: linear-gradient(135deg, #F5A623 0%, #C17F24 100%);
          border-radius: 24px; overflow: hidden;
          position: relative; padding: 60px 80px; text-align: center;
        }
        .licon-cta-dot-overlay {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px; pointer-events: none;
        }
        .licon-cta-content { position: relative; }
        .licon-cta-eyebrow {
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.8);
          letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;
        }
        .licon-cta-title {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800; color: white; margin-bottom: 16px;
          font-family: var(--font-playfair);
        }
        .licon-cta-desc {
          font-size: 15px; color: rgba(255,255,255,0.85);
          margin-bottom: 32px; line-height: 1.7;
          max-width: 560px; margin-left: auto; margin-right: auto;
        }
        .licon-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .licon-cta-btn-primary {
          display: inline-flex; align-items: center;
          background: white; color: #C17F24;
          padding: 14px 32px; border-radius: 999px;
          font-size: 14px; font-weight: 800; text-decoration: none;
          transition: opacity 0.2s;
        }
        .licon-cta-btn-primary:hover { opacity: 0.9; }
        .licon-cta-btn-secondary {
          display: inline-flex; align-items: center;
          background: #111B47; color: white;
          padding: 14px 32px; border-radius: 999px;
          font-size: 14px; font-weight: 800; text-decoration: none;
          transition: opacity 0.2s;
        }
        .licon-cta-btn-secondary:hover { opacity: 0.9; }

        /* Mobile */
        @media (max-width: 1023px) {
          .licon-container { padding: 0 20px; }
          .licon-hero { padding: 100px 0 48px; }
          .licon-logo-img { width: 120px; height: 120px; }
          .licon-hero-btns { flex-direction: column; align-items: center; }
          .licon-btn-primary, .licon-btn-secondary { width: 100%; max-width: 320px; justify-content: center; }
          .licon-section { padding: 48px 0; }
          .licon-process-section { padding: 48px 0; }
          .licon-who-grid { grid-template-columns: 1fr; gap: 14px; }
          .licon-join-box { padding: 24px 20px; border-radius: 14px; }
          .licon-cta-section { padding: 0 0 48px; }
          .licon-cta-box { padding: 36px 24px; border-radius: 16px; }
          .licon-cta-btns { flex-direction: column; align-items: center; }
          .licon-cta-btn-primary, .licon-cta-btn-secondary { width: 100%; max-width: 320px; justify-content: center; }
        }
      `}</style>

    </main>
  );
}