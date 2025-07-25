"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { Menu, X, Code2 } from "lucide-react"
import { Link } from "react-router-dom" // Assuming react-router-dom is installed

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Define the color palette based on the provided image
  const colors = {
    headerBg: "#2C2F33", // Dark charcoal gray
    accentGreen: "#8BC34A", // Vibrant green
    darkerGreen: "#7CB342", // Darker green for hover
    whiteText: "#FFFFFF", // White
    grayText: "#A0A0A0", // Medium gray for nav links
    mobileMenuBorderColor: "rgba(71, 75, 79, 0.3)", // Transparent gray for mobile menu border
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

  // Function to handle smooth scrolling for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking a link
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? colors.headerBg : "transparent",
        backdropFilter: isScrolled ? "blur(4px)" : "none",
        boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div
        className="header-container-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px", // px-4
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px", // h-16
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px", // space-x-2
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                padding: "8px", // p-2
                borderRadius: "8px", // rounded-lg
              }}
            >
              <Code2 style={{ height: "24px", width: "24px", color: colors.whiteText }} /> {/* h-6 w-6 text-white */}
            </div>
            <span
              style={{
                fontSize: "1.5rem", // text-2xl
                fontWeight: "bold",
                color: colors.whiteText,
              }}
            >
              Systoid
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav-container"
            style={{
              display: "none", // hidden
              alignItems: "center",
              gap: "32px", // space-x-8
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link-item" // Custom class for pseudo-element
                style={{
                  color: colors.grayText, // text-[#6B6E70]
                  transition: "all 0.2s ease",
                  fontWeight: "500", // font-medium
                  textDecoration: "none", // Remove default underline
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.accentGreen)} // hover:text-[#86C232]
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.grayText)}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div
            className="desktop-cta-container"
            style={{
              display: "none", // hidden
            }}
          >
            <Button
              sx={{
                backgroundColor: colors.accentGreen, // bg-[#86C232]
                color: colors.whiteText, // text-white
                fontWeight: "600", // font-semibold
                padding: "8px 24px", // px-6 py-2
                borderRadius: "8px", // rounded-lg
                transition: "all 0.2s ease", // transition-all duration-200
                transform: "scale(1)", // transform
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // shadow-md
                "&:hover": {
                  backgroundColor: colors.darkerGreen, // hover:bg-[#61892F]
                  transform: "scale(1.05)", // hover:scale-105
                  boxShadow: "0 6px 12px rgba(0,0,0,0.2)", // hover:shadow-lg
                },
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button-container"
            style={{
              background: "none",
              border: "none",
              color: colors.whiteText, // text-white
              cursor: "pointer",
              padding: "0", // Remove default button padding
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X style={{ height: "24px", width: "24px" }} />
            ) : (
              <Menu style={{ height: "24px", width: "24px" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mobile-menu-container" // Custom class for animation
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "100%",
              backgroundColor: colors.headerBg, // bg-[#222629]/98
              backdropFilter: "blur(4px)", // backdrop-blur-sm
              borderTop: `1px solid ${colors.mobileMenuBorderColor}`, // border-t border-[#474B4F]
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)", // shadow-lg
            }}
          >
            <div
              style={{
                padding: "8px 0", // px-2 pt-2 pb-3
                display: "flex",
                flexDirection: "column",
                gap: "4px", // space-y-1
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    display: "block",
                    padding: "12px 16px", // px-3 py-2
                    color: colors.grayText, // text-[#6B6E70]
                    textDecoration: "none",
                    transition: "all 0.2s ease", // transition-all duration-200
                    fontWeight: "500", // font-medium
                    borderRadius: "6px", // rounded-md
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accentGreen
                    e.currentTarget.style.backgroundColor = "rgba(71, 75, 79, 0.2)" // hover:bg-[#474B4F]/20
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.grayText
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}
              <div style={{ padding: "8px 12px" }}>
                {" "}
                {/* px-3 py-2 */}
                <Button
                  sx={{
                    width: "100%", // w-full
                    backgroundColor: colors.accentGreen, // bg-[#86C232]
                    color: colors.whiteText, // text-white
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // shadow-md
                    "&:hover": {
                      backgroundColor: colors.darkerGreen, // hover:bg-[#61892F]
                    },
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Global styles for pseudo-elements and media queries */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .header-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .header-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Desktop Navigation Link Hover Underline */
          .nav-link-item {
            position: relative;
            display: inline-block;
            text-decoration: none;
          }
          .nav-link-item::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background-color: ${colors.accentGreen};
            left: 0;
            bottom: -4px; /* Adjust position as needed */
            transition: width 0.2s ease-in-out;
          }
          .nav-link-item:hover::after {
            width: 100%;
          }

          /* Mobile Menu Animation */
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mobile-menu-container {
            animation: slideDown 0.3s ease-out forwards;
          }

          /* Responsive display for desktop/mobile elements */
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
    </header>
  )
}
