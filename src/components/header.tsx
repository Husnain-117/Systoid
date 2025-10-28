"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { Menu, X } from 'lucide-react'
import Logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Header palette aligned with professional blue/green/neutral theme
  const colors = {
    deepNavy: "#FFFFFF",          // used as CTA text color -> white
    pureWhite: "#0F172A",         // used as logo/nav text -> dark slate
    warmGray: "#334155",          // muted nav text
    electricCyan: "#1E40AF",      // primary blue
    vibrantGreen: "#10B981",      // accent green
    glassDark: "rgba(255, 255, 255, 0.85)", // light glass background
    borderColor: "#E5E7EB",       // neutral border
    accentGlow: "rgba(30, 64, 175, 0.12)", // subtle blue glow
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollToHome = () => {
    const homeElement = document.getElementById("home")
    if (homeElement) {
      homeElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)`,
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? `0 8px 24px ${colors.accentGlow}` : "none",
        borderBottom: `1px solid ${colors.borderColor}`,
      }}
    >
      <div
        className="header-container-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Fixed Logo with Proper Systoid Branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "scale(1)",
            }}
            onClick={scrollToHome}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
            }}
          >
            {/* Simple logo (no boxed tile) */}
            <img
              src={Logo}
              alt="Systoid Logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />
            <span
              className="logo-text"
              style={{
                fontSize: "1.4rem",
                color: colors.pureWhite,
                marginLeft: "10px",
                fontFamily: '"Poppins", sans-serif',
                letterSpacing: "-0.3px",
                fontWeight: 700
              }}
            >
              Systoid
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav
            className="desktop-nav-container"
            style={{
              display: "none",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link-item"
                style={{
                  color: colors.warmGray,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontWeight: "600",
                  textDecoration: "none",
                  position: "relative",
                  padding: "12px 0",
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.electricCyan
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.textShadow = `0 0 10px ${colors.electricCyan}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.warmGray
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.textShadow = "none"
                }}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div
            className="desktop-cta-container"
            style={{
              display: "none",
            }}
          >
            <Button
              onClick={scrollToContact}
              sx={{
                backgroundColor: colors.electricCyan,
                color: "#FFFFFF",
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: "8px",
                transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                boxShadow: `0 2px 8px ${colors.electricCyan}30`,
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "#1B3796",
                  boxShadow: `0 4px 12px ${colors.electricCyan}35`,
                },
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="mobile-menu-button-container"
            style={{
              background: "none",
              border: "none",
              color: colors.pureWhite,
              cursor: "pointer",
              padding: "12px",
              borderRadius: "12px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.glassDark
              e.currentTarget.style.transform = "scale(1.1)"
              e.currentTarget.style.boxShadow = `0 0 20px ${colors.electricCyan}40`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {isMenuOpen ? (
              <X style={{ height: "24px", width: "24px" }} />
            ) : (
              <Menu style={{ height: "24px", width: "24px" }} />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mobile-menu-container"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "100%",
              backgroundColor: colors.glassDark,
              backdropFilter: "blur(12px)",
              border: `1px solid ${colors.borderColor}`,
              boxShadow: `0 20px 40px ${colors.accentGlow}`,
              borderRadius: "0 0 20px 20px",
            }}
          >
            <div
              style={{
                padding: "20px 0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "16px 20px",
                    color: colors.warmGray,
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontWeight: "600",
                    borderRadius: "12px",
                    margin: "0 12px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.electricCyan
                    e.currentTarget.style.backgroundColor = colors.glassDark
                    e.currentTarget.style.transform = "translateX(8px)"
                    e.currentTarget.style.textShadow = `0 0 10px ${colors.electricCyan}60`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.warmGray
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.textShadow = "none"
                  }}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div style={{ padding: "12px 20px" }}>
                <Button
                  onClick={scrollToContact}
                  sx={{
                    width: "100%",
                    backgroundColor: colors.electricCyan,
                    color: "#FFFFFF",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textTransform: "none",
                    paddingY: "10px",
                    boxShadow: `0 2px 8px ${colors.electricCyan}30`,
                    "&:hover": {
                      backgroundColor: "#1B3796",
                      boxShadow: `0 4px 12px ${colors.electricCyan}35`,
                    },
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Animations */}
        <style>
          {`
          .nav-link-item::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            background: linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen});
            left: 0;
            bottom: 0;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 2px;
          }
          .nav-link-item:hover::after {
            width: 100%;
          }

          .mobile-menu-container {
            animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Animated halo around logo */
          .logo-glow {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: conic-gradient(from 0deg, ${colors.electricCyan}40, ${colors.vibrantGreen}40, ${colors.electricCyan}40);
            filter: blur(8px);
            opacity: 0.55;
            animation: rotateGlow 10s linear infinite, pulseGlow 4s ease-in-out infinite alternate;
            z-index: 1;
          }

          @keyframes rotateGlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes pulseGlow {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }

          @media (min-width: 768px) {
            .desktop-nav-container {
              display: flex !important;
            }
            .desktop-cta-container {
              display: block !important;
            }
            .mobile-menu-button-container {
              display: none !important;
            }
            .mobile-menu-container {
              display: none !important;
            }
          }
        `}
        </style>
      </div>
    </header>
  )
}
