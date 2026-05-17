"use client";

import Link from "next/link";

const socials = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: "X",
        href: "https://x.com",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111B47" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        name: "Medium",
        href: "https://medium.com",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
        ),
    },
];

const serviceLinks = [
    { label: "Funding Advisory", href: "/services/funding-advisory" },
    { label: "Virtual CFO", href: "/services/virtual-cfo" },
    { label: "Business Advisory", href: "/services/business-advisory" },
    { label: "Startup Mentoring", href: "/services/startup-mentoring" },
    { label: "Business Setup", href: "/services/business-establishment" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "LICON Consortium", href: "/licon-consortium" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
];

const linkStyle = {
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    transition: "color 0.2s",
};

export default function Footer() {
    return (
        <footer style={{ background: "#111B47", borderTop: "3px solid #F5A623", width: "100%" }}>

            {/* ── DESKTOP layout ── */}
            <div className="footer-desktop">
                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 80px" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
                        gap: "40px",
                        marginBottom: "40px",
                    }}>

                        {/* Brand */}
                        <div>
                            <img
                                src="/logos/logo-web.png"
                                alt="Legend Innovators"
                                style={{ width: "auto", height: "61px", marginBottom: "2px", filter: "brightness(0) invert(1)", display: "block", marginLeft: "-20px" }}
                            />
                            <div style={{ fontSize: "11px", color: "#F5A623", letterSpacing: "2px", marginBottom: "14px" }}>
                                innovate. elevate. succeed.
                            </div>
                            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: "1.7", margin: "0 0 18px 0", maxWidth: "260px" }}>
                                Empowering Indian startups and SMEs with ethical, sustainable and results-driven advisory.
                            </p>
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                {socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            background: "rgba(255,255,255,0.08)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "rgba(255,255,255,0.6)",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <div style={{ fontSize: "11px", fontWeight: "700", color: "#F5A623", letterSpacing: "2px", marginBottom: "16px" }}>
                                SERVICES
                            </div>
                            {serviceLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={linkStyle}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Company */}
                        <div>
                            <div style={{ fontSize: "11px", fontWeight: "700", color: "#F5A623", letterSpacing: "2px", marginBottom: "16px" }}>
                                COMPANY
                            </div>
                            {companyLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={linkStyle}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact */}
                        <div>
                            <div style={{ fontSize: "11px", fontWeight: "700", color: "#F5A623", letterSpacing: "2px", marginBottom: "16px" }}>
                                GET IN TOUCH
                            </div>
                            {["info@legendinnovators.com", "+91 986-109-8610", "Bhubaneswar, Odisha, India"].map((item) => (
                                <div key={item} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "10px" }}>
                                    {item}
                                </div>
                            ))}
                            <Link
                                href="https://outlook.office.com/book/LegendInnovators@sktspeaking.com/?ismsaljsauthenabled"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    background: "linear-gradient(to right, #F5A623, #C17F24)",
                                    color: "white",
                                    padding: "10px 20px",
                                    borderRadius: "999px",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textDecoration: "none",
                                    marginTop: "12px",
                                }}
                            >
                                Book Consultation →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MOBILE layout ── */}
            <div className="footer-mobile">
                <div style={{ padding: "32px 20px 24px" }}>

                    {/* Brand */}
                    <div style={{ marginBottom: "24px" }}>
                        <img
                            src="/logos/logo-web.png"
                            alt="Legend Innovators"
                            style={{ width: "auto", height: "44px", marginBottom: "8px", filter: "brightness(0) invert(1)", display: "block", marginLeft: "-18px" }}
                        />
                        <div style={{ fontSize: "10px", color: "#F5A623", letterSpacing: "2px", marginBottom: "10px" }}>
                            innovate. elevate. succeed.
                        </div>
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: "1.7", margin: "0 0 16px 0" }}>
                            Empowering Indian startups and SMEs with ethical, sustainable and results-driven advisory.
                        </p>
                        {/* Social icons in a row */}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: "rgba(255,255,255,0.08)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.6)",
                                        textDecoration: "none",
                                    }}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "24px" }} />

                    {/* Services + Company in 2 columns */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                        <div>
                            <div style={{ fontSize: "10px", fontWeight: "700", color: "#F5A623", letterSpacing: "2px", marginBottom: "14px" }}>
                                SERVICES
                            </div>
                            {serviceLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={{ ...linkStyle, fontSize: "12px" }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div>
                            <div style={{ fontSize: "10px", fontWeight: "700", color: "#F5A623", letterSpacing: "2px", marginBottom: "14px" }}>
                                COMPANY
                            </div>
                            {companyLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={{ ...linkStyle, fontSize: "12px" }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "24px" }} />

                    {/* Get in Touch full width */}
                    <div style={{ marginBottom: "8px" }}>
                        <div style={{ fontSize: "10px", fontWeight: "700", color: "#F5A623", letterSpacing: "2px", marginBottom: "14px" }}>
                            GET IN TOUCH
                        </div>
                        {["info@legendinnovators.com", "+91 986-109-8610", "Bhubaneswar, Odisha, India"].map((item) => (
                            <div key={item} style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>
                                {item}
                            </div>
                        ))}
                        <div style={{ display: "flex", justifyContent: "center" }}></div>
                        <Link
                            href="https://outlook.office.com/book/LegendInnovators@sktspeaking.com/?ismsaljsauthenabled"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "linear-gradient(to right, #F5A623, #C17F24)",
                                color: "white",
                                padding: "8px 15px",
                                borderRadius: "999px",
                                fontSize: "13px",
                                fontWeight: "700",
                                textDecoration: "none",
                                marginTop: "14px",
                            }}
                        >
                            Book Consultation →
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom Bar — shared */}
            <div className="footer-bottom">
                <div style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                        © 2026 Legend Innovators Pvt. Ltd. All rights reserved.
                    </div>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                        {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .footer-desktop { display: block; }
        .footer-mobile { display: none; }
        .footer-bottom { background: rgba(0,0,0,0.2); padding: 16px 80px; }

        @media (max-width: 1023px) {
          .footer-desktop { display: none; }
          .footer-mobile { display: block; }
          .footer-bottom { padding: 16px 20px; }
          .footer-bottom > div { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>

        </footer>
    );
}