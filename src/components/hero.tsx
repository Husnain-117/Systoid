"use client"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { ArrowRight, Play } from 'lucide-react'
import MarketingImg from "../assets/marketing.jpg"
import AppImg from "../assets/app.jpg"

//

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  // Professional color scheme
  const colors = {
    bgLight: "#FFFFFF",
    bgGradientStart: "#F5F7FB",
    bgGradientEnd: "#F7FAFC",
    heading: "#0F172A",
    paragraph: "#334155",
    primary: "#1E40AF",
    primaryLight: "#60A5FA",
    primarySoft: "#EAF2FF",
    pillText: "#0F172A",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E7EB",
    shadow: "0 15px 45px rgba(15, 23, 42, 0.1)",
    subtleShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
    accentMint: "#A7F3D0",
    accentGreen: "#10B981",
    accentOrange: "#10B981",
    textDark: "#0F172A",
    textLight: "#64748B"
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services")
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }


  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: `linear-gradient(120deg, ${colors.bgGradientStart}, ${colors.bgGradientEnd})`,
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Subtle background decorations */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(30,64,175,0.14), transparent)" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-60px", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(16,185,129,0.16), transparent)" }} />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 5vw",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-container-inner"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* Left: Heading, text, buttons, rating */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity .6s ease, transform .6s ease'
          }}>
            <h1 style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif', fontSize: "clamp(40px, 5.3vw, 66px)", lineHeight: 1.08, fontWeight: 800, color: colors.heading, marginBottom: 16, letterSpacing: "-0.6px" }}>
              Transform Ideas Into
              
              Innovative Solutions
            </h1>

            <p style={{ fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: colors.paragraph, fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
              We transform your idea into innovative software solutions that propel business growth. Our knowledgeable staff blends technology and creativity.
            </p>

            <div className="cta-buttons-container" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
              <Button onClick={scrollToContact} sx={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                color: "#FFFFFF",
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: '15px',
                px: 4,
                py: 1.5,
                boxShadow: `0 4px 14px ${colors.primary}33`,
                transition: "all 0.3s ease",
                '&:hover': { 
                  transform: 'translateY(-2px)', 
                  boxShadow: `0 6px 20px ${colors.primary}4D`,
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 90%)`
                },
                '&:active': { 
                  transform: 'translateY(0)',
                  boxShadow: `0 2px 10px ${colors.primary}33`
                }
              }}>
                Get Started
              </Button>

              <Button variant="outlined" onClick={scrollToServices} sx={{
                color: colors.primary,
                borderColor: colors.primary,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
                px: 3.5,
                py: 1.5,
                fontSize: '15px',
                transition: "all 0.3s ease",
                '&:hover': { 
                  background: `${colors.primary}0F`,
                  borderColor: colors.primary,
                  transform: 'translateY(-2px)'
                }
              }}>
                Learn More
                <ArrowRight className="arrow-icon" style={{ 
                  width: 18, 
                  height: 18, 
                  marginLeft: 8, 
                  transition: 'transform 0.3s ease' 
                }} />
              </Button>
            </div>

            {/* Trust indicators */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 24, 
              paddingTop: 24,
              flexWrap: 'wrap'
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: colors.primaryLight + '1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  New
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: colors.heading, fontSize: 14 }}>New Company</div>
                  <div style={{ color: colors.paragraph, fontSize: 13 }}>Focused on quality</div>
                </div>
              </div>
              
              <div style={{ 
                height: 24, 
                width: 1, 
                background: '#E5E7EB',
                display: 'inline-block'
              }} />
              
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: colors.primaryLight + '1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  Open
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: colors.heading, fontSize: 14 }}>Portfolio In Progress</div>
                  <div style={{ color: colors.paragraph, fontSize: 13 }}>Open to collaborations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Overlapping cards and play badge */}
          <div style={{ position: "relative", minHeight: 420, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity .7s ease .1s, transform .7s ease .1s' }}>
            {/* Decorative crosses */}
            <div style={{ position: "absolute", left: 52, top: 94, display: "grid", gridTemplateColumns: "repeat(3, 10px)", gap: 6 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} style={{ width: 10, height: 10, color: colors.primary, opacity: 0.45, fontWeight: 900 }}>x</div>
              ))}
            </div>

            {/* Top card */}
            <div style={{ position: "absolute", right: -147, top: -22, background: colors.cardBg, border: `1px solid ${colors.cardBorder}`, boxShadow: colors.shadow, borderRadius: 24, width: "min(540px, 44vw)", padding: 20 }}>
              <img src={MarketingImg} alt="Digital Marketing" style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 16 }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 6px 4px" }}>
                <div>
                  <div style={{ fontWeight: 800, color: colors.heading }}>Digital Marketing</div>
                  <div style={{ fontSize: 13, color: colors.paragraph }}>Modern tactics to accelerate growth.</div>
                </div>
                <Button size="small" sx={{ textTransform: "none", borderRadius: 999, background: "#EAF3FF", color: colors.primary, px: 1.6, py: 0.6, fontWeight: 700, "&:hover": { background: "#E0ECFF" } }}>Read More</Button>
              </div>
            </div>

            {/* Bottom card */}
            <div style={{ position: "absolute", left: -22, bottom: -65, background: colors.cardBg, border: `1px solid ${colors.cardBorder}`, boxShadow: colors.subtleShadow, borderRadius: 24, width: "min(460px, 40vw)", padding: 20 }}>
              <img src={AppImg} alt="Programming" style={{ width: "100%", height: 190, objectFit: "cover", borderRadius: 16 }} />
              <div style={{ padding: "14px 6px 0" }}>
                <div style={{ fontWeight: 800, color: colors.heading }}>Development</div>
                <div style={{ fontSize: 13, color: colors.paragraph }}>Crafting robust applications.</div>
              </div>
            </div>

            

            {/* Circular play badge with rotating text */}
            <div style={{ position: "absolute", right: 327, top: -70, width: 120, height: 120 }}>
              <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0 }}>
                <defs>
                  <path id="circlePath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                </defs>
                <text fill={colors.primary} fontSize="6" fontWeight={700} letterSpacing="2">
                  <textPath href="#circlePath"> THE INTELLIGENCE REVOLUTION WITH AI •</textPath>
                </text>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="play-pulse" style={{ width: 56, height: 56, borderRadius: "50%", background: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: colors.shadow, cursor: "pointer", transition: "transform .2s ease", position: 'relative' }}
                  onMouseEnter={(e)=>{ (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)'}}
                  onMouseLeave={(e)=>{ (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'}}>
                  <span className="play-ring" />
                  <Play color="#fff" style={{ width: 22, height: 22, marginLeft: 2 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local styles */}
      <style>
        {`
          .hero-container-inner svg textPath {
            animation: rotateText 16s linear infinite;
          }
          @keyframes rotateText {
            from { transform: rotate(0deg); transform-origin: 50% 50%; }
            to { transform: rotate(360deg); transform-origin: 50% 50%; }
          }

          /* Play button pulse ring */
          .play-pulse .play-ring {
            position: absolute;
            inset: -6px;
            border-radius: 50%;
            border: 2px solid rgba(30,64,175,.35);
            animation: ringPulse 1.8s ease-out infinite;
          }
          @keyframes ringPulse {
            0% { transform: scale(0.9); opacity: .9; }
            70% { transform: scale(1.25); opacity: 0; }
            100% { transform: scale(1.25); opacity: 0; }
          }

          /* Secondary arrow hover nudge */
          .cta-buttons-container button:hover .arrow-icon { transform: translateX(4px); }

          @media (max-width: 980px) {
            .hero-container-inner > div { grid-template-columns: 1fr !important; }
          }
        `}
      </style>
    </section>
  )
}
