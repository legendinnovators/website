"use client";

import { useState, useRef, useEffect } from "react";
import { auth } from "@/lib/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

type Step = "form" | "modal" | "otp" | "success";

export default function ContactPage() {
  const bookingUrl = "https://outlook.office.com/book/LegendInnovators@sktspeaking.com/";

  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "",
    service: "", businessType: "", message: "",
  });

  const [phoneOtp, setPhoneOtp] = useState(["", "", "", "", "", ""]);
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [resendTimer, setResendTimer] = useState(30);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const phoneRefs = useRef<(HTMLInputElement | null)[]>([]);
  const emailRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step !== "otp") return;
    if (resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer(r => r - 1), 1000);
    return () => clearTimeout(t);
  }, [step, resendTimer]);

  function maskPhone(phone: string) {
    const digits = phone.replace(/\D/g, "");
    return "+91 " + digits.slice(0, 2) + "XXXXX" + digits.slice(-3);
  }

  function maskEmail(email: string) {
    const [user, domain] = email.split("@");
    return user.slice(0, 2) + "***@" + domain;
  }

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validateForm() {
    if (!formData.name.trim()) return "Full name is required.";
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 10) return "Valid phone number is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) return "Valid email is required.";
    if (!formData.service) return "Please select a service.";
    if (!formData.message.trim()) return "Message is required.";
    return "";
  }

  async function handleContinue() {
    const err = validateForm();
    if (err) { setError(err); return; }
    setError("");
    setStep("modal");
  }

  async function handleSendOtps() {
    setLoading(true);
    setError("");
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
        });
      }
      const phone = "+91" + formData.phone.replace(/\D/g, "").slice(-10);
      const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(result);

      const res = await fetch("/api/send-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      if (!res.ok) throw new Error("Failed to send email OTP");

      setResendTimer(30);
      setStep("otp");
    } catch (e: any) {
      setError(e.message || "Failed to send verification codes. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (resendTimer > 0) return;
    setResendTimer(30);
    await handleSendOtps();
  }

  function handleOtpInput(
    index: number,
    value: string,
    otpState: string[],
    setOtp: React.Dispatch<React.SetStateAction<string[]>>,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>
  ) {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otpState];
    updated[index] = value.slice(-1);
    setOtp(updated);
    if (value && index < 5) refs.current[index + 1]?.focus();
  }

  function handleOtpKeyDown(
    e: React.KeyboardEvent,
    index: number,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>
  ) {
    if (e.key === "Backspace" && index > 0) {
      refs.current[index - 1]?.focus();
    }
  }

  async function handleVerifyAndSubmit() {
    setLoading(true);
    setError("");
    try {
      const phoneFull = phoneOtp.join("");
      const emailFull = emailOtp.join("");

      if (phoneFull.length !== 6 || emailFull.length !== 6) {
        setError("Please enter both 6-digit codes.");
        setLoading(false);
        return;
      }

      if (!confirmationResult) throw new Error("Phone verification session expired.");
      await confirmationResult.confirm(phoneFull);
      setPhoneVerified(true);

      const res = await fetch("/api/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: emailFull }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Email OTP verification failed.");
      setEmailVerified(true);

      const submitRes = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!submitRes.ok) throw new Error("Failed to submit. Please try again.");

      setStep("success");
    } catch (e: any) {
      setError(e.message || "Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">
      <div id="recaptcha-container" ref={recaptchaRef} />

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
              <p className="contact-section-tag">Book a Consultation</p>
              <h2 className="contact-section-title">Get in Touch</h2>
              <div className="contact-form">
                <div className="contact-field">
                  <label className="contact-label">Full Name *</label>
                  <input name="name" type="text" className="contact-input" placeholder="Your full name" value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Company Name</label>
                  <input name="company" type="text" className="contact-input" placeholder="Your company (optional)" value={formData.company} onChange={handleFormChange} />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Mobile Number *</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input type="text" className="contact-input" value="+91" readOnly style={{ width: "60px", textAlign: "center" }} />
                    <input name="phone" type="tel" className="contact-input" placeholder="XXXXX XXXXX" value={formData.phone} onChange={handleFormChange} style={{ flex: 1 }} />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-label">Email Address *</label>
                  <input name="email" type="email" className="contact-input" placeholder="your@email.com" value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Service Required *</label>
                  <select name="service" className="contact-input" value={formData.service} onChange={handleFormChange}>
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
                  <label className="contact-label">Business Type</label>
                  <input name="businessType" type="text" className="contact-input" placeholder="Startup / SME / Enterprise (optional)" value={formData.businessType} onChange={handleFormChange} />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Message *</label>
                  <textarea name="message" className="contact-textarea" placeholder="Tell us about your business and how we can help..." value={formData.message} onChange={handleFormChange} />
                </div>
                {error && step === "form" && (
                  <p style={{ color: "#DC2626", fontSize: "13px", marginTop: "-8px" }}>{error}</p>
                )}
                <button className="contact-submit-btn" onClick={handleContinue}>
                  Get Expert Consultation
                </button>
                <p className="contact-micro-copy">
                  Your contact details will be verified to avoid spam and ensure faster assistance.
                </p>
              </div>
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
                  width="100%" height="200"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen loading="lazy"
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
            <p className="contact-booking-note">Opens Microsoft Bookings · Free · No credit card required</p>
          </div>
        </div>
      </section>

      {/* ── MODALS ── */}
      {(step === "modal" || step === "otp") && (
        <div className="otp-overlay">
          <div className="otp-modal">

            {step === "modal" && (
              <>
                <div className="otp-modal-header">
                  <h3 className="otp-modal-title">Verify Your Contact Details</h3>
                  <p className="otp-modal-sub">
                    To ensure secure communication and priority assistance, verify your mobile number and email address.
                  </p>
                </div>
                <div className="otp-detail-row">
                  <span className="otp-detail-icon">📱</span>
                  <span className="otp-detail-val">{maskPhone(formData.phone)}</span>
                  <button className="otp-edit-btn" onClick={() => setStep("form")}>Edit</button>
                </div>
                <div className="otp-detail-row">
                  <span className="otp-detail-icon">📧</span>
                  <span className="otp-detail-val">{maskEmail(formData.email)}</span>
                  <button className="otp-edit-btn" onClick={() => setStep("form")}>Edit</button>
                </div>
                <div className="otp-benefits">
                  <p>✓ Verified clients receive faster callbacks</p>
                  <p>✓ Secure document communication</p>
                  <p>✓ Accurate consultation support</p>
                </div>
                {error && <p className="otp-error">{error}</p>}
                <button className="otp-submit-btn" onClick={handleSendOtps} disabled={loading}>
                  {loading ? "Sending..." : "Send Verification Codes"}
                </button>
                <button className="otp-cancel-btn" onClick={() => { setStep("form"); setError(""); }}>
                  ← Back to Form
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <button className="otp-close-btn" onClick={() => { setStep("form"); setError(""); setPhoneOtp(["","","","","",""]); setEmailOtp(["","","","","",""]); }}>✕</button>

                <div className="otp-modal-header">
                  <h3 className="otp-modal-title">Enter Verification Codes</h3>
                  <p className="otp-modal-sub">Both codes sent simultaneously.</p>
                </div>

                {/* Phone OTP */}
                <div className="otp-section">
                  <div className="otp-section-top">
                    <p className="otp-section-label">📱 Mobile Code</p>
                  </div>
                  <p className="otp-section-sent">Sent to {maskPhone(formData.phone)}</p>
                  <div className="otp-boxes">
                    {phoneOtp.map((val, i) => (
                      <input
                        key={i}
                        ref={el => { phoneRefs.current[i] = el; }}
                        type="text" inputMode="numeric"
                        maxLength={1}
                        className={`otp-box ${val ? "otp-box-filled" : ""}`}
                        value={val}
                        onChange={e => handleOtpInput(i, e.target.value, phoneOtp, setPhoneOtp, phoneRefs)}
                        onKeyDown={e => handleOtpKeyDown(e, i, phoneRefs)}
                      />
                    ))}
                  </div>
                  <div className="otp-bottom-row">
                    <span className="otp-resend">
                      {resendTimer > 0
                        ? `Resend in 00:${String(resendTimer).padStart(2, "0")}`
                        : <span className="otp-resend-link" onClick={handleResend}>Resend</span>
                      }
                    </span>
                    <button className="otp-clear-btn" onClick={() => setPhoneOtp(["","","","","",""])}>Clear</button>
                  </div>
                </div>

                <div className="otp-divider" />

                {/* Email OTP */}
                <div className="otp-section">
                  <p className="otp-section-label">📧 Email Code</p>
                  <p className="otp-section-sent">Sent to {maskEmail(formData.email)}</p>
                  <div className="otp-boxes">
                    {emailOtp.map((val, i) => (
                      <input
                        key={i}
                        ref={el => { emailRefs.current[i] = el; }}
                        type="text" inputMode="numeric"
                        maxLength={1}
                        className={`otp-box ${val ? "otp-box-filled" : ""}`}
                        value={val}
                        onChange={e => handleOtpInput(i, e.target.value, emailOtp, setEmailOtp, emailRefs)}
                        onKeyDown={e => handleOtpKeyDown(e, i, emailRefs)}
                      />
                    ))}
                  </div>
                  <div className="otp-bottom-row">
                    <span className="otp-resend">
                      {resendTimer > 0
                        ? `Resend in 00:${String(resendTimer).padStart(2, "0")}`
                        : <span className="otp-resend-link" onClick={handleResend}>Resend</span>
                      }
                    </span>
                    <button className="otp-clear-btn" onClick={() => setEmailOtp(["","","","","",""])}>Clear</button>
                  </div>
                </div>

                <p className="otp-edit-link" onClick={() => { setStep("form"); setError(""); }}>
                  Wrong details? Edit Contact Info
                </p>

                {error && <p className="otp-error">{error}</p>}

                <button className="otp-submit-btn" onClick={handleVerifyAndSubmit} disabled={loading}>
                  {loading ? "Verifying..." : "Verify & Request Consultation"}
                </button>
              </>
            )}

          </div>
        </div>
      )}

      {/* ── SUCCESS ── */}
      {step === "success" && (
        <div className="otp-overlay">
          <div className="otp-modal" style={{ textAlign: "center" }}>
            <div className="success-icon-wrap">✅</div>
            <h3 className="otp-modal-title">Verification Successful</h3>
            <p className="otp-modal-sub">
              Your consultation request has been submitted.<br />
              One of our experts will contact you shortly.
            </p>
            <div className="success-pills">
              <span className="success-pill">📧 Confirmation email sent</span>
              <span className="success-pill">📋 Request logged</span>
            </div>
            <div className="success-download-card">
              <div className="success-download-icon">📄</div>
              <div className="success-download-text">
                <p className="success-download-title">Company Profile</p>
                <p className="success-download-desc">Services, case studies & client results</p>
              </div>
              <a href="/downloads/company-profile.pdf" download className="success-download-btn">
                Download
              </a>
            </div>
            <a href="/services" className="otp-submit-btn" style={{ display: "block", textDecoration: "none", marginTop: "16px" }}>
              Explore Our Services
            </a>
            <a href="/" className="otp-cancel-btn" style={{ display: "block", textDecoration: "none" }}>
              ← Back to Home
            </a>
          </div>
        </div>
      )}

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
        .contact-micro-copy { font-size: 12px; color: #9CA3AF; text-align: center; margin-top: -8px; line-height: 1.6; }
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
        .otp-overlay { position: fixed; inset: 0; background: rgba(27,42,107,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; backdrop-filter: blur(4px); }
        .otp-modal { background: white; border-radius: 20px; padding: 32px 28px; width: 100%; max-width: 420px; box-shadow: 0 24px 64px rgba(0,0,0,0.15); position: relative; }
        .otp-close-btn { position: absolute; top: 16px; right: 16px; width: 30px; height: 30px; border-radius: 50%; background: #F3F4F6; border: none; font-size: 14px; cursor: pointer; color: #6B7280; display: flex; align-items: center; justify-content: center; }
        .otp-close-btn:hover { background: #E5E7EB; }
        .otp-modal-header { margin-bottom: 20px; }
        .otp-modal-title { font-size: 20px; font-weight: 800; color: #1B2A6B; margin-bottom: 6px; font-family: var(--font-playfair); }
        .otp-modal-sub { font-size: 13px; color: #6B7280; line-height: 1.6; }
        .otp-detail-row { display: flex; align-items: center; gap: 12px; background: #F9FAFB; border-radius: 10px; padding: 12px 16px; margin-bottom: 10px; }
        .otp-detail-icon { font-size: 18px; }
        .otp-detail-val { flex: 1; font-size: 14px; font-weight: 600; color: #1B2A6B; }
        .otp-edit-btn { font-size: 12px; color: #1B2A6B; font-weight: 600; border: 1px solid #1B2A6B; background: transparent; padding: 4px 10px; border-radius: 6px; cursor: pointer; }
        .otp-benefits { background: #F0FDF4; border-radius: 10px; padding: 12px 16px; margin: 16px 0; }
        .otp-benefits p { font-size: 13px; color: #166534; margin-bottom: 4px; font-weight: 500; }
        .otp-benefits p:last-child { margin-bottom: 0; }
        .otp-section { margin-bottom: 16px; }
        .otp-section-label { font-size: 13px; font-weight: 700; color: #1B2A6B; margin-bottom: 2px; }
        .otp-section-sent { font-size: 12px; color: #9CA3AF; margin-bottom: 10px; }
        .otp-boxes { display: flex; gap: 8px; }
        .otp-box { width: 44px; height: 50px; border: 1.5px solid #E5E7EB; border-radius: 10px; text-align: center; font-size: 20px; font-weight: 700; color: #1B2A6B; background: #FAFAF8; outline: none; transition: border-color 0.2s; }
        .otp-box:focus { border-color: #F5A623; background: white; }
        .otp-box-filled { border-color: #F5A623; background: #FFF8EC; }
        .otp-bottom-row { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
        .otp-resend { font-size: 12px; color: #9CA3AF; }
        .otp-resend-link { color: #F5A623; font-weight: 600; cursor: pointer; }
        .otp-clear-btn { font-size: 11px; background: transparent; color: #F5A623; border: 1px solid #F5A623; padding: 3px 10px; border-radius: 999px; cursor: pointer; font-family: inherit; }
        .otp-divider { border: none; border-top: 1px solid #F3F4F6; margin: 16px 0; }
        .otp-edit-link { font-size: 12px; color: #6B7280; text-align: center; cursor: pointer; text-decoration: underline; margin-bottom: 16px; display: block; }
        .otp-error { font-size: 13px; color: #DC2626; background: #FEF2F2; border-radius: 8px; padding: 10px 14px; margin-bottom: 12px; }
        .otp-submit-btn { width: 100%; padding: 14px; background: linear-gradient(to right, #F5A623, #C17F24); color: white; border: none; border-radius: 999px; font-size: 15px; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
        .otp-submit-btn:hover { opacity: 0.9; }
        .otp-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .otp-cancel-btn { width: 100%; padding: 12px; background: transparent; color: #6B7280; border: none; font-size: 14px; cursor: pointer; margin-top: 8px; }
        .success-icon-wrap { font-size: 48px; margin-bottom: 16px; }
        .success-pills { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 16px 0; }
        .success-pill { background: #F0FDF4; color: #166534; border-radius: 999px; padding: 6px 14px; font-size: 12px; font-weight: 500; }
        .success-download-card { display: flex; align-items: center; gap: 12px; background: #FFF8EC; border: 1.5px solid #F5A623; border-radius: 12px; padding: 14px 16px; margin: 16px 0; text-align: left; }
        .success-download-icon { font-size: 28px; flex-shrink: 0; }
        .success-download-text { flex: 1; }
        .success-download-title { font-size: 14px; font-weight: 700; color: #1B2A6B; margin-bottom: 2px; }
        .success-download-desc { font-size: 12px; color: #9CA3AF; }
        .success-download-btn { background: #1B2A6B; color: white; padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: 700; text-decoration: none; white-space: nowrap; }
        @media (max-width: 1023px) {
          .contact-container { padding: 0 20px; }
          .contact-hero { padding: 100px 0 48px; }
          .contact-main-section { padding: 48px 0; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-booking-section { padding: 48px 0; }
          .contact-booking-btn { width: 100%; max-width: 320px; justify-content: center; }
          .otp-boxes { gap: 6px; }
          .otp-box { width: 38px; height: 44px; font-size: 18px; }
        }
      `}</style>
    </main>
  );
}