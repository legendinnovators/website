import Link from "next/link";

const steps = [
  { phase: "Foundation & Strategy", items: ["Ideation & Market Validation", "Robust Business Plan Development", "Sustainable Business Model Design"] },
  { phase: "Product Development & Launch", items: ["Product/Service Creation", "Brand Activation & Market Promotion"] },
  { phase: "Operations & Scaling", items: ["Operational Infrastructure Setup", "Efficient Business Process Design", "Scaling Operations & Market Reach"] },
  { phase: "Growth & Funding", items: ["Project Finance & Fundraising Support", "Preparation for SME/Startup IPO"] },
];

const whoFor = [
  "First-time entrepreneurs",
  "Early-stage startups",
  "Founders looking to scale responsibly",
  "Teams preparing for investment or public listing",
];

const benefits = [
  "Avoid common pitfalls with expert guidance at every step",
  "Faster progress from idea to revenue-generating business",
  "Strong foundation for long-term success and funding readiness",
  "Access to our LICON Consortium network for collaboration",
];

const howItWorks = [
  "Personalized mentoring sessions (online/offline)",
  "Practical tools, templates, and resources",
  "Milestone-based progress tracking",
  "Ongoing support even after program completion",
];

export default function StartupMentoringPage() {
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
            <span>Startup Mentoring</span>
          </div>
          <p className="sp-eyebrow">Startup Mentoring</p>
          <h1 className="sp-hero-title">
            From Idea to IPO —{" "}
            <span className="sp-gold">Your Complete 10-Step Startup Elevation Journey</span>
          </h1>
          <p className="sp-hero-desc">
            Hands-on mentoring that guides entrepreneurs through every stage of building a sustainable, scalable, and investment-ready business.
          </p>
          <div className="sp-hero-btns">
            <Link href="/contact" className="sp-btn-primary">
              Start Your Elevation Journey
            </Link>
            <a href="#steps" className="sp-btn-secondary">
              Explore Our 10 Steps
            </a>
          </div>
        </div>
      </section>

      {/* ── 10 Step Program ── */}
      <section className="sp-section sp-white" id="steps">
        <div className="sp-container">
          <p className="sp-section-tag">The Program</p>
          <h2 className="sp-section-title">Our 10-Step Startup Elevation Program</h2>
          <p className="sp-section-desc">
            A proven, structured program that takes you from idea validation all the way to IPO readiness.
          </p>
          <div className="sm-steps-grid">
            {steps.map((phase, pi) => (
              <div key={phase.phase} className="sm-phase-card">
                <div className="sm-phase-tag">Phase {pi + 1}</div>
                <h3 className="sm-phase-title">{phase.phase}</h3>
                <div className="sm-phase-items">
                  {phase.items.map((item, ii) => (
                    <div key={item} className="sm-step-item">
                      <div className="sm-step-num">
                        {pi === 0 ? ii + 1 : pi === 1 ? ii + 4 : pi === 2 ? ii + 6 : ii + 9}
                      </div>
                      <div className="sm-step-text">{item}</div>
                    </div>
                  ))}
                </div>
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
          <h2 className="sp-section-title">Benefits of Our Mentoring</h2>
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

      {/* ── How It Works ── */}
      <section className="sp-section sp-gray" id="process">
        <div className="sp-container">
          <p className="sp-section-tag">How It Works</p>
          <h2 className="sp-section-title">The Program Experience</h2>
          <div className="sp-process-list">
            {howItWorks.map((step, i) => (
              <div key={step} className="sp-process-step">
                <div className="sp-process-num">{i + 1}</div>
                <div className="sp-process-content">
                  <div className="sp-process-text">{step}</div>
                </div>
                {i < howItWorks.length - 1 && <div className="sp-process-line" />}
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
                They are exceptional. They have a deep understanding of our industry and our customers, and they always go the extra mile to ensure our success.
              </p>
              <div className="sp-quote-divider" />
              <div className="sp-quote-author">Founder, IndusLives, Startup</div>
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
              <h2 className="sp-cta-title">Ready to Elevate Your Startup?</h2>
              <p className="sp-cta-desc">
                Don't navigate the startup journey alone. Book a free discovery call today and take the first step toward building something extraordinary.
              </p>
              <div className="sp-cta-buttons">
                <Link href="https://outlook.office.com/book/LegendInnovators@sktspeaking.com/?ismsaljsauthenabled"
                                target="_blank"
                                rel="noopener noreferrer" className="sp-cta-btn-primary">
                  Book Consultation
                </Link>
                <Link href="/contact" className="sp-cta-btn-secondary">
                  Enroll in Startup Elevation Program
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
        .sp-hero { background: #1B2A6B; padding: 120px 0 80px; position: relative; overflow: hidden; }
        .sp-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
        .sp-hero-glow { position: absolute; top: -80px; right: -100px; width: 500px; height: 500px; background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%); pointer-events: none; }
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

        /* ── 10 Steps ── */
        .sm-steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .sm-phase-card { background: #111B47; border-radius: 16px; padding: 28px 24px; border: 1px solid rgba(245,166,35,0.2); }
        .sm-phase-tag { font-size: 10px; font-weight: 700; color: #F5A623; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
        .sm-phase-title { font-size: 16px; font-weight: 800; color: white; margin-bottom: 20px; font-family: var(--font-playfair); }
        .sm-phase-items { display: flex; flex-direction: column; gap: 12px; }
        .sm-step-item { display: flex; align-items: flex-start; gap: 12px; }
        .sm-step-num { width: 28px; height: 28px; border-radius: 50%; background: rgba(245,166,35,0.2); color: #F5A623; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sm-step-text { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.5; padding-top: 4px; }

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
          .sm-steps-grid { grid-template-columns: 1fr; gap: 16px; }
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