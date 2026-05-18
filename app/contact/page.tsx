"use client";

export default function ContactPage() {
  const bookingUrl = "https://outlook.office.com/book/LegendInnovators@sktspeaking.com/";

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-hero-grid" />
        <div className="contact-hero-glow" />
        <div className="contact-container">
          <p className="contact-eyebrow">Contact Us</p>
          <h1 className="contact-hero-title">
            Let&apos;s Start a <span className="contact-gold">Conversation</span>
          </h1>
          <p className="contact-hero-desc">
            Have a question or ready to grow? Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-grid">

            <div className="contact-form-side">
              <p className="contact-section-tag">Send a Message</p>
              <h2 className="contact-section-title">Get in Touch</h2>
              <form className="contact-form">
                <div className="contact-field">
                  <label className="contact-label">Full Name *</label>
                  <input type="text" className="contact-input" placeholder="Your full name" required />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Email Address *</label>
                  <input type="email" className="contact-input" placeholder="your@email.com" required />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Phone Number</label>
                  <input type="tel" className="contact-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Service Interested In</label>
                  <select className="contact-input">
                    <option value="">Select a service</option>
                    <option>Funding Advisory</option>
                    <option>Virtual CFO</option>
                    <option>Business Advisory</option>
                    <option>Startup Mentoring</option>
                    <option>Business Establishment</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="contact-field">
                  <label className="contact-label">Message *</label>
                  <textarea className="contact-textarea" placeholder="Tell us about your business and how we can help..." required />
                </div>
                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-side">
              <p className="contact-section-tag">Our Details</p>
              <h2 className="contact-section-title">Contact Info</h2>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18C1.6 2.1 2.34 1.16 3.42 1H6.5a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.38a16 16 0 0 0 6 6l.44-.44a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-value">+91-919-919-2055</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">connect@legendinnovators.com</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">Bhubaneswar, Odisha, India</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Business Hours</div>
                    <div className="contact-info-value">Mon–Sat: 9AM – 6PM IST</div>
                  </div>
                </div>
              </div>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.54649754598!2d85.75041!3d20.29608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="contact-booking-section">
        <div className="contact-booking-grid" />
        <div className="contact-booking-glow" />
        <div className="contact-container">
          <div className="contact-booking-content">
            <p className="contact-booking-eyebrow">Free Consultation</p>
            <h2 className="contact-booking-title">Book Your Free 30-Min Call</h2>
            <p className="contact-booking-desc">
              Skip the back-and-forth. Pick a time that works for you and our team will be ready to help you grow.
            </p>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="contact-booking-btn">
              Schedule Online
            </a>
            <p className="contact-booking-note">
              Opens Microsoft Bookings · Free · No credit card required
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page { background: #FDF8F3; }
        .contact-container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
        .contact-gold { color: #F5A623; }
        .contact-hero { background: #1B2A6B; padding: 120px 0 80px; position: relative; overflow: hidden; text-align: center; }
        .contact-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
        .contact-hero-glow { position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 600px; height: 300px; background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%); pointer-events: none; }
        .contact-eyebrow { font-size: 11px; font-weight: 700; color: #F5A623; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; position: relative; }
        .contact-hero-title { font-size: clamp(28px, 4vw, 52px); font-weight: 800; color: white; line-height: 1.2; margin-bottom: 20px; font-family: var(--font-playfair); position: relative; }
        .contact-hero-desc { font-size: clamp(14px, 1.2vw, 16px); color: rgba(255,255,255,0.6); line-height: 1.8; max-width: 500px; margin: 0 auto; position: relative; }
        .contact-main-section { background: white; padding: 80px 0; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .contact-section-tag { font-size: 11px; font-weight: 700; color: #F5A623; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px; }
        .contact-section-title { font-size: clamp(22px, 2vw, 30px); font-weight: 800; color: #1B2A6B; margin-bottom: 28px; font-family: var(--font-playfair); }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .contact-field { display: flex; flex-direction: column; gap: 6px; }
        .contact-label { font-size: 13px; font-weight: 600; color: #374151; }
        .contact-input { width: 100%; padding: 12px 16px; border: 1.5px solid #E5E7EB; border-radius: 10px; font-size: 14px; color: #374151; background: #FAFAF8; outline: none; transition: border-color 0.2s; font-family: inherit; }
        .contact-input:focus { border-color: #F5A623; background: white; }
        .contact-textarea { width: 100%; padding: 12px 16px; border: 1.5px solid #E5E7EB; border-radius: 10px; font-size: 14px; color: #374151; background: #FAFAF8; outline: none; transition: border-color 0.2s; font-family: inherit; resize: vertical; min-height: 120px; }
        .contact-textarea:focus { border-color: #F5A623; background: white; }
        .contact-submit-btn { display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #F5A623, #C17F24); color: white; padding: 14px 32px; border-radius: 999px; font-size: 15px; font-weight: 700; border: none; cursor: pointer; transition: opacity 0.2s; width: 100%; }
        .contact-submit-btn:hover { opacity: 0.9; }
        .contact-info-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 28px; }
        .contact-info-item { display: flex; align-items: flex-start; gap: 16px; }
        .contact-info-icon { width: 44px; height: 44px; border-radius: 10px; background: #FFF8EC; border: 1px solid #F5A623; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-info-label { font-size: 11px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .contact-info-value { font-size: 14px; font-weight: 600; color: #1B2A6B; }
        .contact-map { border-radius: 12px; overflow: hidden; border: 1px solid #E5E7EB; }
        .contact-booking-section { background: #1B2A6B; padding: 80px 0; position: relative; overflow: hidden; text-align: center; }
        .contact-booking-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
        .contact-booking-glow { position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 500px; height: 250px; background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%); pointer-events: none; }
        .contact-booking-content { position: relative; }
        .contact-booking-eyebrow { font-size: 11px; font-weight: 700; color: #F5A623; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px; }
        .contact-booking-title { font-size: clamp(24px, 3vw, 38px); font-weight: 800; color: white; margin-bottom: 16px; font-family: var(--font-playfair); }
        .contact-booking-desc { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.8; max-width: 480px; margin: 0 auto 32px; }
        .contact-booking-btn { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(to right, #F5A623, #C17F24); color: white; padding: 16px 36px; border-radius: 999px; font-size: 15px; font-weight: 700; text-decoration: none; transition: opacity 0.2s; }
        .contact-booking-btn:hover { opacity: 0.9; }
        .contact-booking-note { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 16px; }
        @media (max-width: 1023px) {
          .contact-container { padding: 0 20px; }
          .contact-hero { padding: 100px 0 48px; }
          .contact-main-section { padding: 48px 0; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-booking-section { padding: 48px 0; }
          .contact-booking-btn { width: 100%; max-width: 320px; justify-content: center; }
        }
      `}</style>

    </main>
  );
}