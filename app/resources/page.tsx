"use client";

import { useState } from "react";

const categories = ["All", "Funding", "Income Tax", "GST", "Compliance", "Guides", "Tips"];

const articles = [
  {
    id: 1,
    category: "Funding",
    title: "How Indian Startups Can Secure Bank Loans Faster in 2025",
    desc: "A complete guide to loan eligibility, documentation, and strategies to get approved faster with minimal rejection risk.",
    read: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Income Tax",
    title: "Income Tax Filing Guide for Startups FY 2024-25",
    desc: "Step-by-step guide to filing ITR for your startup with deductions you shouldn't miss.",
    read: "5 min read",
  },
  {
    id: 3,
    category: "GST",
    title: "GST Registration: Everything SMEs Need to Know",
    desc: "Complete walkthrough of GST registration process, documents required and compliance tips.",
    read: "6 min read",
  },
  {
    id: 4,
    category: "Guides",
    title: "Virtual CFO vs Full-Time CFO: What's Right for You?",
    desc: "A detailed comparison to help growing businesses make the right financial leadership decision.",
    read: "4 min read",
  },
  {
    id: 5,
    category: "Tips",
    title: "5 Cash Flow Mistakes Indian SMEs Make and How to Fix Them",
    desc: "Common cash flow pitfalls and practical solutions to keep your business financially healthy.",
    read: "3 min read",
  },
  {
    id: 6,
    category: "Compliance",
    title: "Startup India Registration: Step-by-Step Guide",
    desc: "Everything you need to know about registering under Startup India and availing government benefits.",
    read: "7 min read",
  },
  {
    id: 7,
    category: "Funding",
    title: "Equity vs Debt Funding: Which is Right for Your Startup?",
    desc: "A practical breakdown of funding options to help founders make the right capital decision.",
    read: "6 min read",
  },
  {
    id: 8,
    category: "GST",
    title: "GST Return Filing: Common Mistakes and How to Avoid Them",
    desc: "Avoid penalties and stay compliant with this practical guide to error-free GST filing.",
    read: "5 min read",
  },
  {
    id: 9,
    category: "Tips",
    title: "10 Financial KPIs Every Indian Startup Should Track",
    desc: "The key metrics that investors look for and how to build dashboards that drive smarter decisions.",
    read: "4 min read",
  },
  {
    id: 10,
    category: "Guides",
    title: "How to Build an Investor-Ready Pitch Deck in 2025",
    desc: "A proven framework for creating pitch decks that get funded — with real examples from Indian startups.",
    read: "9 min read",
  },
  {
    id: 11,
    category: "Income Tax",
    title: "Tax Planning Strategies for Indian SMEs in 2025",
    desc: "Legal tax-saving strategies that help small businesses reduce their tax burden and improve profitability.",
    read: "6 min read",
  },
  {
    id: 12,
    category: "Compliance",
    title: "Trademark Registration in India: Complete Guide for Startups",
    desc: "Protect your brand from day one with this step-by-step trademark registration guide.",
    read: "5 min read",
  },
];

const badgeColors: Record<string, string> = {
  Funding: "res-badge-funding",
  "Income Tax": "res-badge-tax",
  GST: "res-badge-gst",
  Guides: "res-badge-guide",
  Tips: "res-badge-tip",
  Compliance: "res-badge-compliance",
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");

  const featured = articles.find((a) => a.featured);
  const filtered = articles
    .filter((a) => !a.featured)
    .filter((a) => activeCategory === "All" || a.category === activeCategory)
    .filter((a) =>
      search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.desc.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main className="res-page">

      {/* ── Hero ── */}
      <section className="res-hero">
        <div className="res-hero-grid" />
        <div className="res-hero-glow" />
        <div className="res-container">
          <p className="res-eyebrow">Resources</p>
          <h1 className="res-hero-title">
            Knowledge Hub for <span className="res-gold">Indian Businesses</span>
          </h1>
          <p className="res-hero-desc">
            Articles, guides and tips on funding, taxation, GST, compliance and business growth — all in one place.
          </p>
          <div className="res-search-bar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles, guides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="res-search-input"
            />
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="res-filter-wrap">
        <div className="res-container">
          <div className="res-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`res-tab ${activeCategory === cat ? "res-tab-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Article ── */}
      {featured && activeCategory === "All" && search === "" && (
        <section className="res-featured-section">
          <div className="res-container">
            <p className="res-section-tag">Featured Article</p>
            <div className="res-featured-card">
              <div className="res-featured-grid" />
              <div className="res-featured-glow" />
              <div className="res-featured-content">
                <span className={`res-badge ${badgeColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="res-featured-title">{featured.title}</h2>
                <p className="res-featured-desc">{featured.desc}</p>
                <div className="res-featured-footer">
                  <span className="res-featured-read">{featured.read} · Legend Innovators</span>
                  <button className="res-featured-btn">Read Now →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Articles Grid ── */}
      <section className="res-articles-section">
        <div className="res-container">
          <div className="res-articles-header">
            <h2 className="res-articles-title">
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
            <span className="res-articles-count">{filtered.length} articles</span>
          </div>

          {filtered.length === 0 ? (
            <div className="res-empty">
              <p>No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="res-articles-grid">
              {filtered.map((article) => (
                <div key={article.id} className="res-article-card">
                  <span className={`res-badge ${badgeColors[article.category]}`}>
                    {article.category}
                  </span>
                  <h3 className="res-article-title">{article.title}</h3>
                  <p className="res-article-desc">{article.desc}</p>
                  <div className="res-article-footer">
                    <span className="res-article-read">{article.read}</span>
                    <button className="res-article-btn">Read →</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="res-newsletter-section">
        <div className="res-container">
          <div className="res-newsletter-box">
            <div className="res-newsletter-dot-overlay" />
            <div className="res-newsletter-content">
              <p className="res-newsletter-eyebrow">Stay Updated</p>
              <h2 className="res-newsletter-title">Get Weekly Business Insights</h2>
              <p className="res-newsletter-desc">
                Latest articles, guides and business tips delivered to your inbox every week. No spam, ever.
              </p>
              <div className="res-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="res-newsletter-input"
                />
                <button className="res-newsletter-btn">Subscribe →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .res-page { background: #FDF8F3; }
        .res-container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
        .res-gold { color: #F5A623; }

        /* Hero */
        .res-hero {
          background: #1B2A6B;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .res-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .res-hero-glow {
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%);
          pointer-events: none;
        }
        .res-eyebrow {
          font-size: 11px; font-weight: 700; color: #F5A623;
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 16px; position: relative;
        }
        .res-hero-title {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 800; color: white; line-height: 1.2;
          margin-bottom: 20px; font-family: var(--font-playfair);
          position: relative;
        }
        .res-hero-desc {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(255,255,255,0.6); line-height: 1.8;
          max-width: 560px; margin: 0 auto 32px;
          position: relative;
        }
        .res-search-bar {
          display: flex; align-items: center; gap: 10px;
          background: white; border-radius: 999px;
          padding: 12px 20px;
          max-width: 480px; margin: 0 auto;
          position: relative;
        }
        .res-search-input {
          flex: 1; border: none; outline: none;
          font-size: 14px; color: #374151;
          background: transparent; font-family: inherit;
        }

        /* Filter */
        .res-filter-wrap { background: white; border-bottom: 1px solid #E5E7EB; padding: 16px 0; }
        .res-filter-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .res-tab {
          padding: 8px 18px; border-radius: 999px;
          font-size: 13px; font-weight: 600;
          cursor: pointer; border: 1px solid #E5E7EB;
          color: #6B7280; background: white;
          transition: all 0.2s;
        }
        .res-tab:hover { border-color: #F5A623; color: #F5A623; }
        .res-tab-active { background: #F5A623; color: white; border-color: #F5A623; }

        /* Badges */
        .res-badge {
          display: inline-block; font-size: 11px; font-weight: 700;
          padding: 3px 10px; border-radius: 4px; margin-bottom: 12px;
        }
        .res-badge-funding { background: #EFF6FF; color: #1D4ED8; }
        .res-badge-tax { background: #F0FDF4; color: #15803D; }
        .res-badge-gst { background: #FFF7ED; color: #C17F24; }
        .res-badge-guide { background: #F5F3FF; color: #6D28D9; }
        .res-badge-tip { background: #FFF1F2; color: #BE123C; }
        .res-badge-compliance { background: #F0FDFA; color: #0F766E; }

        /* Featured */
        .res-featured-section { background: white; padding: 60px 0 40px; }
        .res-section-tag {
          font-size: 11px; font-weight: 700; color: #F5A623;
          letter-spacing: 3px; text-transform: uppercase; margin-bottom: 20px;
        }
        .res-featured-card {
          background: #111B47; border-radius: 20px;
          padding: 48px; position: relative; overflow: hidden;
        }
        .res-featured-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 24px 24px; pointer-events: none;
        }
        .res-featured-glow {
          position: absolute; top: -60px; right: -60px;
          width: 300px; height: 300px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.12), transparent 70%);
          pointer-events: none;
        }
        .res-featured-content { position: relative; max-width: 720px; }
        .res-featured-title {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 800; color: white; line-height: 1.3;
          margin-bottom: 14px; font-family: var(--font-playfair);
        }
        .res-featured-desc {
          font-size: 15px; color: rgba(255,255,255,0.6);
          line-height: 1.7; margin-bottom: 24px;
        }
        .res-featured-footer { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .res-featured-read { font-size: 12px; color: rgba(255,255,255,0.4); }
        .res-featured-btn {
          background: linear-gradient(to right, #F5A623, #C17F24);
          color: white; font-size: 13px; font-weight: 700;
          padding: 10px 24px; border-radius: 999px;
          border: none; cursor: pointer; transition: opacity 0.2s;
          margin-left: auto;
        }
        .res-featured-btn:hover { opacity: 0.9; }

        /* Articles */
        .res-articles-section { background: #FAFAF8; padding: 60px 0; border-top: 1px solid #E5E7EB; }
        .res-articles-header {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 32px;
        }
        .res-articles-title {
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 800; color: #1B2A6B;
          font-family: var(--font-playfair);
        }
        .res-articles-count { font-size: 13px; color: #9CA3AF; font-weight: 500; }
        .res-articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .res-article-card {
          background: white; border-radius: 16px;
          padding: 24px; border: 1px solid #E5E7EB;
          display: flex; flex-direction: column;
          transition: all 0.2s;
        }
        .res-article-card:hover {
          border-color: #F5A623;
          box-shadow: 0 8px 24px rgba(245,166,35,0.1);
          transform: translateY(-2px);
        }
        .res-article-title {
          font-size: 15px; font-weight: 800; color: #1B2A6B;
          line-height: 1.4; margin-bottom: 10px;
          font-family: var(--font-playfair);
        }
        .res-article-desc {
          font-size: 13px; color: #6B7280;
          line-height: 1.6; margin-bottom: 16px; flex: 1;
        }
        .res-article-footer {
          display: flex; align-items: center;
          justify-content: space-between; margin-top: auto;
        }
        .res-article-read { font-size: 11px; color: #9CA3AF; }
        .res-article-btn {
          font-size: 12px; font-weight: 700; color: #F5A623;
          background: none; border: none; cursor: pointer;
          transition: opacity 0.2s;
        }
        .res-article-btn:hover { opacity: 0.7; }

        /* Empty */
        .res-empty {
          text-align: center; padding: 60px 0;
          font-size: 15px; color: #9CA3AF;
        }

        /* Newsletter */
        .res-newsletter-section { background: #FDF8F3; padding: 0 0 80px; }
        .res-newsletter-box {
          background: linear-gradient(135deg, #F5A623 0%, #C17F24 100%);
          border-radius: 24px; overflow: hidden;
          position: relative; padding: 60px 80px; text-align: center;
        }
        .res-newsletter-dot-overlay {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px; pointer-events: none;
        }
        .res-newsletter-content { position: relative; }
        .res-newsletter-eyebrow {
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.8);
          letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;
        }
        .res-newsletter-title {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800; color: white; margin-bottom: 12px;
          font-family: var(--font-playfair);
        }
        .res-newsletter-desc {
          font-size: 15px; color: rgba(255,255,255,0.85);
          margin-bottom: 32px; line-height: 1.7;
          max-width: 480px; margin-left: auto; margin-right: auto;
        }
        .res-newsletter-form {
          display: flex; gap: 12px; max-width: 480px;
          margin: 0 auto; flex-wrap: wrap;
        }
        .res-newsletter-input {
  flex: 1; padding: 14px 20px;
  border-radius: 999px; border: 2px solid rgba(255,255,255,0.4);
  font-size: 14px; outline: none;
  font-family: inherit; min-width: 200px;
  background: rgba(255,255,255,0.15);
  color: white;
}
.res-newsletter-input::placeholder { color: rgba(255,255,255,0.6); }
        .res-newsletter-btn {
          background: #111B47; color: white;
          font-size: 14px; font-weight: 700;
          padding: 14px 28px; border-radius: 999px;
          border: none; cursor: pointer; transition: opacity 0.2s;
          white-space: nowrap;
        }
        .res-newsletter-btn:hover { opacity: 0.9; }

        /* Mobile */
        @media (max-width: 1023px) {
          .res-container { padding: 0 20px; }
          .res-hero { padding: 100px 0 48px; }
          .res-featured-section { padding: 40px 0 24px; }
          .res-featured-card { padding: 28px 20px; border-radius: 16px; }
          .res-featured-btn { margin-left: 0; width: 100%; justify-content: center; }
          .res-articles-section { padding: 40px 0; }
          .res-articles-grid { grid-template-columns: 1fr; gap: 16px; }
          .res-article-card:hover { transform: none; }
          .res-newsletter-section { padding: 0 0 48px; }
          .res-newsletter-box { padding: 36px 24px; border-radius: 16px; }
          .res-newsletter-form { flex-direction: column; }
          .res-newsletter-input { width: 100%; }
          .res-newsletter-btn { width: 100%; }
        }
      `}</style>

    </main>
  );
}