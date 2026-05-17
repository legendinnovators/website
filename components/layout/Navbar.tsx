"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Funding Advisory", href: "/services/funding-advisory" },
      { label: "Virtual CFO", href: "/services/virtual-cfo" },
      { label: "Business Advisory", href: "/services/business-advisory" },
      { label: "Startup Mentoring", href: "/services/startup-mentoring" },
      { label: "Business Establishment", href: "/services/business-establishment" },
    ],
  },
  { label: "LICON Consortium", href: "/licon-consortium" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header style={{ backgroundColor: "#FDF8F3", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 60px",
          width: "100%",
        }}>

          {/* Logo */}
          <Link href="/" onClick={closeMobile}>
            <Image
              src="/logos/logo-web.png"
              alt="Legend Innovators"
              width={180}
              height={50}
              style={{ width: "auto", height: "55px" }}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav — UNCHANGED */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[#1B2A6B] text-base font-semibold hover:text-[#F5A623] transition-colors duration-200">
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {desktopServicesOpen && (
                    <div className="absolute top-full left-0 mt-5 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 space-y-2 z-50">
                      {link.submenu.map((sub) => (
                        <div key={sub.href} className="mb-2 last:mb-0">
                          <Link
                            href={sub.href}
                            className="block px-6 py-4 text-sm font-medium text-[#1B2A6B] hover:bg-[#FDF8F3] hover:text-[#F5A623] hover:font-bold transition-all duration-150 border-b border-gray-100 mx-3 last:border-0"
                          >
                            {sub.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1B2A6B] text-base font-semibold hover:text-[#F5A623] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button — UNCHANGED */}
          <Link
            href="https://outlook.office.com/book/LegendInnovators@sktspeaking.com/?ismsaljsauthenabled"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block text-white font-medium text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              background: "linear-gradient(to right, #F5A623, #C17F24)",
              padding: "10px 24px",
              borderRadius: "999px",
            }}
          >
            Book Free Consultation
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            style={{ color: "#1B2A6B", padding: "8px", border: "none", background: "none", cursor: "pointer" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="lg:hidden"
          style={{
            overflow: "hidden",
            maxHeight: mobileOpen ? "100vh" : "0",
            opacity: mobileOpen ? 1 : 0,
            transition: "max-height 0.3s ease, opacity 0.3s ease",
          }}
        >
          <div style={{
            backgroundColor: "#FDF8F3",
            borderTop: "1px solid #fde9d5",
            padding: "12px 16px 20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}>

            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: servicesOpen ? "#F5A623" : "#1B2A6B",
                      backgroundColor: servicesOpen ? "#fff7ed" : "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      style={{
                        color: servicesOpen ? "#F5A623" : "#1B2A6B",
                        transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>

                  <div style={{
                    overflow: "hidden",
                    maxHeight: servicesOpen ? "400px" : "0",
                    opacity: servicesOpen ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                  }}>
                    <div style={{
                      marginLeft: "16px",
                      paddingLeft: "12px",
                      borderLeft: "2px solid #fde9d5",
                      marginBottom: "8px",
                      marginTop: "2px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={closeMobile}
                          style={{
                            display: "block",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#1B2A6B",
                            textDecoration: "none",
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1B2A6B",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}

            <div style={{ borderTop: "1px solid #fde9d5", margin: "10px 0" }} />

            <Link
              href="https://outlook.office.com/book/LegendInnovators@sktspeaking.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to right, #F5A623, #C17F24)",
                color: "white",
                fontWeight: "600",
                fontSize: "15px",
                padding: "16px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Book Free Consultation
            </Link>

            <p style={{ textAlign: "center", fontSize: "11px", color: "#bbb", paddingTop: "8px" }}>
              Trusted by 150+ Indian Startups & SMEs · 98% Success Rate
            </p>

          </div>
        </div>
      </header>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 lg:hidden"
          style={{ zIndex: 40, backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}