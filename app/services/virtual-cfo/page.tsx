import Link from "next/link";

const offers = [
  {
    title: "Financial Planning & Forecasting",
    points: [
      "Comprehensive financial plans, budgeting, and performance forecasting",
      "Profit & loss analysis, balance sheet management, and KPI dashboards",
    ],
  },
  {
    title: "Cash Management & Liquidity",
    points: [
      "Daily cash flow monitoring and optimization",
      "Ensuring liquidity to meet obligations while supporting growth",
    ],
  },
  {
    title: "Compliance & Reporting",
    points: [
      "Tax planning, return preparation, and regulatory compliance",
      "Accurate financial reporting, internal audits, and stakeholder-ready statements",
    ],
  },
  {
    title: "Risk Mitigation & Strategic Guidance",
    points: [
      "Identification and mitigation of financial risks",
      "Support for major decisions including investments, acquisitions, and investor relations",
      "System implementation for operational efficiency",
    ],
  },
];

const whoFor = [
  "Startups scaling operations",
  "SMEs needing professional finance oversight",
  "Businesses preparing for funding or IPO",
  "Founders who want to focus on growth instead of numbers",
];

const benefits = [
  "Stronger financial control and data-driven decisions",
  "Improved profitability and cash flow",
  "Investor-ready financials that build credibility",
  "Significant cost savings compared to a full-time CFO",
];

const process = [
  "Discovery Call & Current Financial Review",
  "Customized Financial Roadmap Creation",
  "Monthly/Quarterly Support & Reporting",
  "Ongoing Strategic Advisory & Adjustments",
];

export default function VirtualCFOPage() {
  return (
    <main className="sp-page">

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid" />
        <div className="sp-hero-glow" />
        <div className="sp-container">
          <div className="sp-breadcrumb">
            <Link href="/services" className="sp-breadcrumb-link">Services</Link>
            <span className="sp-breadcrumb-sep">→</span>
            <span>Virtual CFO</span>
          </div>
          <p className="sp-eyebrow">Virtual CFO</p>
          <h1 className="sp-hero-title">
            World-Class Financial Leadership{" "}
            <span className="sp-gold">Without the Full-Time Cost</span>
          </h1>
          <p className="sp-hero-desc">
            Access expert financial strategy, cash flow management, forecasting, and compliance through our Virtual CFO services – designed for growing Indian businesses.
          </p>
          <div className="sp-hero-btns">
            <Link href="/contact" className="sp-btn-primary">
              Get Your Virtual CFO Today
            </Link>
            <a href="#process" className="sp-btn-secondary">
              See What's Included
            </a>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="sp-section sp-white">
        <div className="sp-container">
          <p className="sp-section-tag">What We Offer</p>
          <h2 className="sp-section-title">Our Services Include</h2>
          <p className="sp-section-desc">
            Our Virtual CFO services give you the strategic financial expertise of a seasoned CFO on a flexible, cost-effective basis.
          </p>
          <div className="sp-offer-grid">
            {offers.map((offer) => (
              <div key={offer.title} className="sp-offer-card">
                <h3 className="sp-offer-title">{offer.title}</h3>
                <ul className="sp-offer-list">
                  {offer.points.map((point) => (
                    <li key={point} className="sp-offer-item">
                      <span className="sp-offer-dot" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="sp-section sp-gray">
        <div className="sp-container">
          <p className="sp-section-tag">Who It's For</p>
          <h2 className="sp-section-title">Is This Right for You?</h2>
          <div className="sp-who-grid">
            {whoFor.map((item) => (
              <div key={item} className="sp-who-card">
                <div className="sp-who-check">✓</div>
                <div className="sp-who-text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="sp-section sp-white">
        <div className="sp-container">
          <p className="sp-section-tag">Key Benefits</p>
          <h2 className="sp-section-title">Benefits You'll Experience</h2>
          <div className="sp-benefits-grid">
            {benefits.map((benefit, i) => (
              <div key={benefit} className="sp-benefit-card">
                <div className="sp-benefit-num">0{i + 1}</div>
                <div className="sp-benefit-text">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sp-section sp-gray" id="process">
        <div className="sp-container">
          <p className="sp-section-tag">Our Approach</p>
          <h2 className="sp-section-title">How We Work With You</h2>
          <div className="sp-process-list">
            {process.map((step, i) => (
              <div key={step} className="sp-process-step">
                <div className="sp-process-num">{i + 1}</div>
                <div className="sp-process-content">
                  <div className="sp-process-text">{step}</div>
                </div>
                {i < process.length - 1 && <div className="sp-process-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="sp-testimonial-section">
        <div className="sp-container">
          <div className="sp-testimonial-box">
            <div className="sp-testimonial-grid" />
            <div className="sp-testimonial-glow" />
            <div className="sp-testimonial-content">
              <p className="sp-section-tag">Client Success Story</p>
              <div className="sp-quote-mark">"</div>
              <p className="sp-quote-text">
                Thanks to Legend Innovators' Virtual CFO, we improved our cash flow visibility and successfully raised our next funding round.
              </p>
              <div className="sp-quote-divider" />
              <div className="sp-quote-author">CEO, E-commerce SME, Mumbai</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="sp-cta-section">
        <div className="sp-container">
          <div className="sp-cta-box">
            <div className="sp-cta-dot-overlay" />
            <div className="sp-cta-content">
              <h2 className="sp-cta-title">Take Control of Your Finances</h2>
              <p className="sp-cta-desc">
                Book a free consultation today and experience professional financial leadership tailored to your business needs.
              </p>
              <div className="sp-cta-buttons">
                <Link href="/contact" className="sp-cta-btn-primary">
                  Book Free Consultation →
                </Link>
                <Link href="/dashboard" className="sp-cta-btn-secondary">
                  Subscribe to Virtual CFO Retainer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sp-page { background: #FDF8F3; }
        .sp-container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
        .sp-gold { color: #F5A623; }
        .sp-white { background: white; }
        .sp-gray { background: #FAFAF8; }
        .sp-hero {
          background: #1B2A6B;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .sp-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .sp-hero-glow {
          position: absolute; top: -80px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%);
          pointer-events: none;
        }
        .sp-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; position: relative; }
        .sp-breadcrumb-link { font-size: 12px; color: rgba(255,255,255,0.5); text-decoration: none; }
        .sp-breadcrumb-link:hover { color: #F5A623; }
        .sp-breadcrumb-sep { font-size: 12px; color: rgba(255,255,255,0.3); }
        .sp-breadcrumb span:last-child { font-size: 12px; color: #F5A623; font-weight: 600; }
        .sp-eyebrow { font-size: 11px; font-weight: 700; color: #F5A623; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; position: relative; }
        .sp-hero-title { font-size: clamp(28px, 3.5vw, 48px); font-weight: 800; color: white; line-height: 1.2; margin-bottom: 20px; font-family: var(--font-playfair); position: relative; max-width: 760px; }
        .sp-hero-desc { font-size: clamp(14px, 1.2vw, 16px); color: rgba(255,255,255,0.6); line-height: 1.8; max-width: 640px; margin-bottom: 36px; position: relative; }
        .sp-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; position: relative; }
        .sp-btn-primary { display: inline-flex; align-items: center; background: linear-gradient(to right, #F5A623, #C17F24); color: white; padding: 14px 28px; border-radius: 999px; font-size: 14px; font-weight: 700; text-decoration: none; }
        .sp-btn-primary:hover { opacity: 0.9; }
        .sp-btn-secondary { display: inline-flex; align-items: center; background: transparent; color: white; padding: 14px 28px; border-radius: 999px; font-size: 14px; font-weight: 700; text-decoration: none; border: 2px solid rgba(255,255,255,0.4); }
        .sp-btn-secondary:hover { border-color: white; }
        .sp-section { padding: 80px 0; border-top: 1px solid #E5E7EB; }
        .sp-section-tag { font-size: 15px; font-weight: 700; color: #F5A623; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px; }
        .sp-section-title { font-size: clamp(24px, 2.5vw, 36px); font-weight: 800; color: #1B2A6B; margin-bottom: 16px; font-family: var(--font-playfair); }
        .sp-section-desc { font-size: 15px; color: #6B7280; line-height: 1.7; max-width: 640px; margin-bottom: 40px; }
        .sp-offer-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .sp-offer-card { background: #FAFAF8; border-radius: 16px; padding: 28px 24px; border: 1px solid #E5E7EB; border-top: 3px solid #F5A623; transition: all 0.2s; }
        .sp-offer-card:hover { box-shadow: 0 8px 24px rgba(245,166,35,0.1); transform: translateY(-2px); }
        .sp-offer-title { font-size: 16px; font-weight: 800; color: #1B2A6B; margin-bottom: 16px; font-family: var(--font-playfair); }
        .sp-offer-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .sp-offer-item { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #6B7280; line-height: 1.6; }
        .sp-offer-dot { width: 6px; height: 6px; border-radius: 50%; background: #F5A623; flex-shrink: 0; margin-top: 6px; }
        .sp-who-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .sp-who-card { display: flex; align-items: flex-start; gap: 14px; background: white; border-radius: 12px; padding: 20px; border: 1px solid #E5E7EB; }
        .sp-who-check { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(to right, #F5A623, #C17F24); color: white; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sp-who-text { font-size: 14px; color: #1B2A6B; font-weight: 600; line-height: 1.5; padding-top: 4px; }
        .sp-benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .sp-benefit-card { background: #FAFAF8; border-radius: 14px; padding: 24px; border: 1px solid #E5E7EB; display: flex; align-items: flex-start; gap: 16px; }
        .sp-benefit-num { font-size: 32px; font-weight: 900; color: rgba(245,166,35,0.2); line-height: 1; flex-shrink: 0; }
        .sp-benefit-text { font-size: 14px; color: #1B2A6B; font-weight: 600; line-height: 1.6; padding-top: 6px; }
        .sp-process-list { display: flex; flex-direction: column; gap: 0; max-width: 760px; }
        .sp-process-step { display: flex; align-items: flex-start; gap: 20px; position: relative; }
        .sp-process-num { width: 44px; height: 44px; border-radius: 50%; background: #1B2A6B; color: white; font-size: 16px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; z-index: 1; }
        .sp-process-content { flex: 1; padding: 10px 0 32px; }
        .sp-process-text { font-size: 15px; color: #1B2A6B; font-weight: 600; line-height: 1.5; }
        .sp-process-line { position: absolute; left: 22px; top: 44px; bottom: 0; width: 2px; background: linear-gradient(to bottom, #F5A623, rgba(245,166,35,0.1)); }
        .sp-testimonial-section { background: #FDF8F3; padding: 80px 0; }
        .sp-testimonial-box { background: #1B2A6B; border-radius: 24px; padding: 56px 64px; position: relative; overflow: hidden; text-align: center; }
        .sp-testimonial-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
        .sp-testimonial-glow { position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 500px; height: 250px; background: radial-gradient(ellipse, rgba(245,166,35,0.12), transparent 70%); pointer-events: none; }
        .sp-testimonial-content { position: relative; max-width: 680px; margin: 0 auto; }
        .sp-quote-mark { font-size: 80px; color: #F5A623; line-height: 0.8; margin-bottom: 16px; font-family: var(--font-playfair); }
        .sp-quote-text { font-size: clamp(16px, 1.5vw, 20px); color: rgba(255,255,255,0.85); line-height: 1.8; font-style: italic; margin-bottom: 24px; font-family: var(--font-playfair); }
        .sp-quote-divider { width: 40px; height: 2px; background: #F5A623; border-radius: 999px; margin: 0 auto 16px; }
        .sp-quote-author { font-size: 14px; color: rgba(255,255,255,0.5); font-weight: 600; }
        .sp-cta-section { background: #FDF8F3; padding: 0 0 80px; }
        .sp-cta-box { background: linear-gradient(135deg, #F5A623 0%, #C17F24 100%); border-radius: 24px; overflow: hidden; position: relative; padding: 60px 80px; text-align: center; }
        .sp-cta-dot-overlay { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 24px 24px; pointer-events: none; }
        .sp-cta-content { position: relative; }
        .sp-cta-title { font-size: clamp(24px, 3vw, 36px); font-weight: 800; color: white; margin-bottom: 12px; font-family: var(--font-playfair); }
        .sp-cta-desc { font-size: 15px; color: rgba(255,255,255,0.85); margin-bottom: 32px; line-height: 1.7; max-width: 560px; margin-left: auto; margin-right: auto; }
        .sp-cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .sp-cta-btn-primary { display: inline-flex; align-items: center; background: white; color: #C17F24; padding: 14px 32px; border-radius: 999px; font-size: 14px; font-weight: 800; text-decoration: none; }
        .sp-cta-btn-primary:hover { opacity: 0.9; }
        .sp-cta-btn-secondary { display: inline-flex; align-items: center; background: transparent; color: white; padding: 14px 32px; border-radius: 999px; font-size: 14px; font-weight: 800; text-decoration: none; border: 2px solid rgba(255,255,255,0.6); }
        .sp-cta-btn-secondary:hover { border-color: white; }

        @media (max-width: 1023px) {
          .sp-container { padding: 0 20px; }
          .sp-hero { padding: 100px 0 48px; }
          .sp-hero-btns { flex-direction: column; }
          .sp-btn-primary, .sp-btn-secondary { width: 100%; justify-content: center; }
          .sp-section { padding: 48px 0; }
          .sp-section-desc { margin-bottom: 24px; }
          .sp-offer-grid { grid-template-columns: 1fr; gap: 16px; }
          .sp-offer-card:hover { transform: none; }
          .sp-who-grid { grid-template-columns: 1fr; gap: 12px; }
          .sp-benefits-grid { grid-template-columns: 1fr; gap: 14px; }
          .sp-testimonial-section { padding: 48px 0; }
          .sp-testimonial-box { padding: 32px 20px; border-radius: 16px; }
          .sp-cta-section { padding: 0 0 48px; }
          .sp-cta-box { padding: 36px 24px; border-radius: 16px; }
          .sp-cta-buttons { flex-direction: column; align-items: center; }
          .sp-cta-btn-primary, .sp-cta-btn-secondary { width: 100%; max-width: 320px; justify-content: center; }
        }
      `}</style>

    </main>
  );
}