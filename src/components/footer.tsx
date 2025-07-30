"use client"

import type React from "react"
import {  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Enhanced professional color palette
  const colors = {
    deepNavy: "#1A1D29",
    electricCyan: "#00D9FF",
    vibrantGreen: "#00FF88",
    pureWhite: "#FFFFFF",
    warmGray: "#8B9DC3",
    glassMorphism: "rgba(26, 29, 41, 0.85)",
    cardBg: "rgba(139, 157, 195, 0.08)",
    cardBorder: "rgba(0, 217, 255, 0.2)",
    accentGlow: "rgba(0, 217, 255, 0.2)",
    borderColor: "rgba(139, 157, 195, 0.2)",
  }

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Desktop Apps", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Consulting", href: "#contact" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#contact" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <footer
      style={{
        background: `linear-gradient(135deg, ${colors.deepNavy} 0%, #0F1419 50%, ${colors.deepNavy} 100%)`,
        borderTop: `1px solid ${colors.borderColor}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Enhanced Galaxy Background */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 30%, ${colors.electricCyan}08 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, ${colors.vibrantGreen}06 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, ${colors.electricCyan}04 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px, 150px 150px, 100px 100px",
            animation: "footerGalaxy 25s linear infinite",
            opacity: 0.3,
          }}
        />
        
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "15%",
            width: "120px",
            height: "120px",
            background: `radial-gradient(circle, ${colors.electricCyan}12, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(30px)",
            animation: "footerFloat 12s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40%",
            right: "20%",
            width: "150px",
            height: "150px",
            background: `radial-gradient(circle, ${colors.vibrantGreen}10, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "footerFloat 16s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 2,
        }}
        className="footer-container"
      >
        {/* Main Footer Content */}
        <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
              gap: "32px",
            }}
            className="footer-main-grid"
          >
            {/* Enhanced Company Info */}
            <div className="lg:col-span-2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => {
                  const homeElement = document.getElementById("home")
                  if (homeElement) {
                    homeElement.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  const iconDiv = e.currentTarget.querySelector(".footer-logo-icon") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "rotate(360deg)"
                    iconDiv.style.boxShadow = `0 0 20px ${colors.electricCyan}60`
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  const iconDiv = e.currentTarget.querySelector(".footer-logo-icon") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "rotate(0deg)"
                    iconDiv.style.boxShadow = `0 0 10px ${colors.electricCyan}40`
                  }
                }}
              >
                <div
                  className="footer-logo-icon"
                  style={{
                    background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                    padding: "10px",
                    borderRadius: "12px",
                    transition: "all 0.5s ease",
                    boxShadow: `0 0 10px ${colors.electricCyan}40`,
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color: colors.pureWhite }}
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: colors.pureWhite,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Systoid
                </span>
              </div>
              <p
                style={{
                  color: colors.warmGray,
                  marginBottom: "24px",
                  lineHeight: "1.6",
                  maxWidth: "400px",
                  fontSize: "1rem",
                }}
              >
                We are a passionate team of developers, designers, and digital strategists committed to delivering
                innovative solutions that drive business success.
              </p>

              {/* Enhanced Contact Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: colors.warmGray,
                    transition: "all 0.3s ease",
                    padding: "8px 0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.electricCyan
                    e.currentTarget.style.transform = "translateX(5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.warmGray
                    e.currentTarget.style.transform = "translateX(0)"
                  }}
                >
                  <Mail style={{ height: "16px", width: "16px", color: colors.electricCyan }} />
                  <span>hello@systoid.com</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: colors.warmGray,
                    transition: "all 0.3s ease",
                    padding: "8px 0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.electricCyan
                    e.currentTarget.style.transform = "translateX(5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.warmGray
                    e.currentTarget.style.transform = "translateX(0)"
                  }}
                >
                  <Phone style={{ height: "16px", width: "16px", color: colors.electricCyan }} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: colors.warmGray,
                    transition: "all 0.3s ease",
                    padding: "8px 0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.electricCyan
                    e.currentTarget.style.transform = "translateX(5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.warmGray
                    e.currentTarget.style.transform = "translateX(0)"
                  }}
                >
                  <MapPin style={{ height: "16px", width: "16px", color: colors.electricCyan }} />
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            {/* Enhanced Services */}
            <div>
              <h3
                style={{
                  color: colors.pureWhite,
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Services
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      style={{
                        color: colors.warmGray,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        display: "block",
                        padding: "4px 0",
                        fontSize: "0.95rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = colors.electricCyan
                        e.currentTarget.style.transform = "translateX(5px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = colors.warmGray
                        e.currentTarget.style.transform = "translateX(0)"
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Company */}
            <div>
              <h3
                style={{
                  color: colors.pureWhite,
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Company
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      style={{
                        color: colors.warmGray,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        display: "block",
                        padding: "4px 0",
                        fontSize: "0.95rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = colors.electricCyan
                        e.currentTarget.style.transform = "translateX(5px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = colors.warmGray
                        e.currentTarget.style.transform = "translateX(0)"
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Resources */}
            <div>
              <h3
                style={{
                  color: colors.pureWhite,
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Resources
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      style={{
                        color: colors.warmGray,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        display: "block",
                        padding: "4px 0",
                        fontSize: "0.95rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = colors.electricCyan
                        e.currentTarget.style.transform = "translateX(5px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = colors.warmGray
                        e.currentTarget.style.transform = "translateX(0)"
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div
          style={{
            paddingTop: "32px",
            paddingBottom: "32px",
            borderTop: `1px solid ${colors.borderColor}`,
          }}
        >
          <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
            <h3
              style={{
                color: colors.pureWhite,
                fontWeight: "800",
                fontSize: "1.2rem",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Stay Updated
            </h3>
            <p
              style={{
                color: colors.warmGray,
                marginBottom: "24px",
                lineHeight: "1.6",
                fontSize: "1rem",
              }}
            >
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.borderColor}`,
                  color: colors.pureWhite,
                  padding: "12px 16px",
                  borderRadius: "12px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontSize: "0.95rem",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.electricCyan
                  e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.accentGlow}`
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = colors.borderColor
                  e.currentTarget.style.boxShadow = "none"
                }}
              />
              <button
                style={{
                  background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                  color: colors.deepNavy,
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.vibrantGreen}, ${colors.electricCyan})`
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Footer */}
        <div
          style={{
            paddingTop: "32px",
            paddingBottom: "32px",
            borderTop: `1px solid ${colors.borderColor}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
            className="footer-bottom-flex"
          >
            {/* Copyright */}
            <div
              style={{
                color: colors.warmGray,
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              © {currentYear} Systoid. All rights reserved.
            </div>

            {/* Enhanced Social Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: colors.cardBg,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    border: `1px solid ${colors.borderColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`
                    e.currentTarget.style.transform = "scale(1.1) translateY(-2px)"
                    e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}40`
                    const icon = e.currentTarget.querySelector("svg") as SVGElement
                    if (icon) icon.style.color = colors.pureWhite
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.cardBg
                    e.currentTarget.style.transform = "scale(1) translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                    const icon = e.currentTarget.querySelector("svg") as SVGElement
                    if (icon) icon.style.color = colors.warmGray
                  }}
                >
                  <social.icon
                    style={{
                      height: "18px",
                      width: "18px",
                      color: colors.warmGray,
                      transition: "color 0.3s ease",
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                fontSize: "0.85rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                href="#"
                style={{
                  color: colors.warmGray,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.electricCyan)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.warmGray)}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  color: colors.warmGray,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.electricCyan)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.warmGray)}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes footerGalaxy {
            0% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-5px) translateX(3px); }
            66% { transform: translateY(-10px) translateX(-2px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes footerFloat {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.4;
            }
            50% { 
              transform: translateY(-10px) translateX(5px); 
              opacity: 0.6;
            }
          }

          @media (min-width: 640px) {
            .footer-container {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .footer-container {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 768px) {
            .footer-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) {
            .footer-main-grid {
              grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
            }
          }

          @media (min-width: 768px) {
            .footer-bottom-flex {
              flex-direction: row !important;
            }
          }
        `}
      </style>
    </footer>
  )
}
