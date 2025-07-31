"use client"
import { useEffect, useState, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Github, Linkedin, Twitter, Mail, Users, Facebook } from "lucide-react"
import husnain from "../assets/husnian.jpg"
import azeem from "../assets/azeem.jpg"
import arham from "../assets/arham.jpg"
import arshad from "../assets/arsahd.jpg"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, inView] as const
}

export default function Team() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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
    greenGlow: "rgba(0, 255, 136, 0.2)",
  }

  const teamMembers = [
    {
      name: "MUHAMMAD ARSHAD",
      role: "Founder, CEO",
      bio: "Visionary leader with 10+ years in business strategy.",
      image: arshad, // Changed from imageQuery to image
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "systoid.pk@gmail.com",
      },
    },
    {
      name: "Husnain Akram",
      role: "Co-Founder, CTO",
      bio: "Technical architect specializing in scalable systems and emerging technologies.",
      image: husnain, // Changed from imageQuery to image
      social: {
        linkedin: "",
        twitter: "#",
        github: "https://github.com/Husnain-117",
        email: "husnainn.akram@gmail.com",
      },
    },
    {
      name: "Muhammad Azeem",
      role: "Director Software & RND",
      bio: "Creating elegant solutions to complex problems.",
      image: azeem, // Changed from imageQuery to image
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "azeemjee@gmail.com",
      },
    },
    {
      name: "Muhammad Arham",
      role: "Director Digital Marketing",
      bio: "Great marketing strategist with proven track record in digital campaigns and brand growth.",
      image: arham, // Changed from imageQuery to image
      social: {
        linkedin: "#",
        facebook: "https://www.facebook.com/profile.php?id=61564974240513", // Fixed capitalization
        github: "#",
        email: "marhamahmad25@gmail.com",
      },
    },
  ]

  const nextMember = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
      setIsAnimating(false)
    }, 500) // Match this duration with the CSS animation duration
  }

  const prevMember = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentMemberIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
      setIsAnimating(false)
    }, 500) // Match this duration with the CSS animation duration
  }

  useEffect(() => {
    const autoSlide = setInterval(nextMember, 5000) // Auto-shift every 5 seconds
    return () => clearInterval(autoSlide)
  }, [teamMembers.length])

  const [headerRef, headerInView] = useInView()
  const [teamCarouselRef, teamCarouselInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  const currentMember = teamMembers[currentMemberIndex]

  return (
    <section
      id="team"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        background: `linear-gradient(135deg, ${colors.deepNavy} 0%, #0F1419 50%, ${colors.deepNavy} 100%)`,
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
              radial-gradient(circle at 15% 35%, ${colors.electricCyan}12 1px, transparent 1px),
              radial-gradient(circle at 85% 15%, ${colors.vibrantGreen}10 1px, transparent 1px),
              radial-gradient(circle at 45% 85%, ${colors.electricCyan}08 1px, transparent 1px)
            `,
            backgroundSize: "200px 200px, 180px 180px, 240px 240px",
            animation: "teamGalaxy 18s linear infinite",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "12%",
            width: "180px",
            height: "180px",
            background: `radial-gradient(circle, ${colors.electricCyan}18, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            animation: "teamFloat1 14s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "35%",
            right: "15%",
            width: "220px",
            height: "220px",
            background: `radial-gradient(circle, ${colors.vibrantGreen}15, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "teamFloat2 18s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className="team-container-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Enhanced Section Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "60px",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.1s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: colors.glassMorphism,
              backdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "9999px",
              padding: "12px 24px",
              marginBottom: "24px",
              boxShadow: `0 8px 32px ${colors.accentGlow}`,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                borderRadius: "50%",
                padding: "6px",
                animation: "iconPulse 3s ease-in-out infinite",
              }}
            >
              <Users style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.warmGray,
                fontWeight: "600",
              }}
            >
              Our Team
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "900",
              color: colors.pureWhite,
              marginBottom: "24px",
              textShadow: `0 0 40px ${colors.electricCyan}30`,
              letterSpacing: "-0.02em",
            }}
          >
            Meet the Experts Behind Systoid
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: colors.warmGray,
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            Our diverse team of talented professionals brings together years of experience, creativity, and passion to
            deliver exceptional results for our clients.
          </p>
        </div>

        {/* Enhanced Team Slideshow */}
        <div
          ref={teamCarouselRef}
          style={{
            position: "relative",
            maxWidth: "400px", // Max width for a single portrait card
            margin: "0 auto",
            opacity: teamCarouselInView ? 1 : 0,
            transform: teamCarouselInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.3s",
          }}
        >
          <Card
            key={currentMemberIndex} // Key to force re-render and trigger transition
            style={{
              backgroundColor: colors.cardBg,
              backdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.cardBorder}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              animation: isAnimating ? "slideOut 0.5s forwards" : "slideIn 0.5s forwards",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.electricCyan
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.25), 0 0 0 1px ${colors.electricCyan}60`
              const image = e.currentTarget.querySelector(".member-image") as HTMLElement
              if (image) image.style.transform = "scale(1.08)"
              const overlay = e.currentTarget.querySelector(".member-overlay") as HTMLElement
              if (overlay) overlay.style.opacity = "1"
              const socialLinks = e.currentTarget.querySelector(".social-links") as HTMLElement
              if (socialLinks) socialLinks.style.opacity = "1"
              const name = e.currentTarget.querySelector(".member-name") as HTMLElement
              if (name) name.style.color = colors.electricCyan
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.cardBorder
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)"
              const image = e.currentTarget.querySelector(".member-image") as HTMLElement
              if (image) image.style.transform = "scale(1)"
              const overlay = e.currentTarget.querySelector(".member-overlay") as HTMLElement
              if (overlay) overlay.style.opacity = "0"
              const socialLinks = e.currentTarget.querySelector(".social-links") as HTMLElement
              if (socialLinks) socialLinks.style.opacity = "0"
              const name = e.currentTarget.querySelector(".member-name") as HTMLElement
              if (name) name.style.color = colors.pureWhite
            }}
          >
            <CardContent style={{ padding: "0", flexGrow: 1 }}>
              {/* Member Image - Portrait View */}
              <div style={{ position: "relative", overflow: "hidden", height: "380px" }}>
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="member-image"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: `linear-gradient(45deg, ${colors.deepNavy}cc, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="member-overlay"
                />

                {/* Social Links */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                    opacity: 0,
                    transition: "all 0.4s ease",
                  }}
                  className="social-links"
                >
                  <a
                    href={currentMember.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: `0 4px 15px ${colors.electricCyan}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.1)"
                      e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}60`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)"
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.electricCyan}40`
                    }}
                  >
                    <Linkedin style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
                  </a>
                  <a
                    href={currentMember.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: `0 4px 15px ${colors.electricCyan}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.1)"
                      e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}60`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)"
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.electricCyan}40`
                    }}
                  >
                    <Twitter style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
                  </a>
                  <a
                    href={currentMember.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: `0 4px 15px ${colors.electricCyan}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.1)"
                      e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}60`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)"
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.electricCyan}40`
                    }}
                  >
                    <Github style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
                  </a>
                  <a
                    href={`mailto:${currentMember.social.email}`}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: `0 4px 15px ${colors.electricCyan}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.1)"
                      e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}60`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)"
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.electricCyan}40`
                    }}
                  >
                    <Mail style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <h3
                  className="member-name"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "800",
                    color: colors.pureWhite,
                    marginBottom: "6px",
                    transition: "color 0.3s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {currentMember.name}
                </h3>
                <div
                  style={{
                    color: colors.electricCyan,
                    fontWeight: "600",
                    marginBottom: "10px",
                    fontSize: "0.9rem",
                  }}
                >
                  {currentMember.role}
                </div>
                <p
                  style={{
                    color: colors.warmGray,
                    fontSize: "0.85rem",
                    lineHeight: "1.6",
                  }}
                >
                  {currentMember.bio}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevMember}
            style={{
              position: "absolute",
              top: "50%",
              left: "-70px", // More spacing from card
              transform: "translateY(-50%)",
              background: `linear-gradient(135deg, ${colors.electricCyan}20, ${colors.vibrantGreen}20)`,
              backdropFilter: "blur(15px) saturate(180%)",
              border: `2px solid ${colors.electricCyan}`,
              borderRadius: "12px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: `0 6px 20px ${colors.electricCyan}40`,
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05) translateX(-2px)"
              e.currentTarget.style.boxShadow = `0 8px 30px ${colors.electricCyan}60`
              const arrow = e.currentTarget.querySelector("div")
              if (arrow) arrow.style.borderRightColor = colors.deepNavy
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}20, ${colors.vibrantGreen}20)`
              e.currentTarget.style.transform = "translateY(-50%) scale(1)"
              e.currentTarget.style.boxShadow = `0 6px 20px ${colors.electricCyan}40`
              const arrow = e.currentTarget.querySelector("div")
              if (arrow) arrow.style.borderRightColor = colors.electricCyan
            }}
          >
            {/* CSS Arrow pointing left */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderRight: `12px solid ${colors.electricCyan}`,
                transition: "border-right-color 0.3s ease",
              }}
            />
          </button>
          <button
            onClick={nextMember}
            style={{
              position: "absolute",
              top: "50%",
              right: "-70px", // More spacing from card
              transform: "translateY(-50%)",
              background: `linear-gradient(135deg, ${colors.electricCyan}20, ${colors.vibrantGreen}20)`,
              backdropFilter: "blur(15px) saturate(180%)",
              border: `2px solid ${colors.electricCyan}`,
              borderRadius: "12px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: `0 6px 20px ${colors.electricCyan}40`,
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05) translateX(2px)"
              e.currentTarget.style.boxShadow = `0 8px 30px ${colors.electricCyan}60`
              const arrow = e.currentTarget.querySelector("div")
              if (arrow) arrow.style.borderLeftColor = colors.deepNavy
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}20, ${colors.vibrantGreen}20)`
              e.currentTarget.style.transform = "translateY(-50%) scale(1)"
              e.currentTarget.style.boxShadow = `0 6px 20px ${colors.electricCyan}40`
              const arrow = e.currentTarget.querySelector("div")
              if (arrow) arrow.style.borderLeftColor = colors.electricCyan
            }}
          >
            {/* CSS Arrow pointing right */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: `12px solid ${colors.electricCyan}`,
                transition: "border-left-color 0.3s ease",
              }}
            />
          </button>

          {/* Team Member Progress Indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
            {teamMembers.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentMemberIndex(index)
                    setIsAnimating(false)
                  }, 500)
                }}
                style={{
                  position: "relative",
                  height: "4px",
                  width: "60px",
                  backgroundColor: colors.warmGray + "30",
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: index === currentMemberIndex ? "100%" : "0%",
                    background: `linear-gradient(90deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                    borderRadius: "2px",
                    transition: "width 0.5s ease",
                    boxShadow: index === currentMemberIndex ? `0 0 8px ${colors.electricCyan}60` : "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div
          ref={ctaRef}
          style={{
            textAlign: "center",
            marginTop: "60px",
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.5s",
          }}
        >
          <div
            style={{
              background: colors.glassMorphism,
              backdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "24px",
              padding: "40px 32px",
              maxWidth: "800px",
              margin: "0 auto",
              boxShadow: `0 20px 40px rgba(0,0,0,0.2)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `conic-gradient(from 0deg, ${colors.electricCyan}08, ${colors.vibrantGreen}08, transparent)`,
                animation: "ctaRotate 20s linear infinite",
                opacity: 0.3,
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "900",
                  color: colors.pureWhite,
                  marginBottom: "16px",
                  textShadow: `0 0 30px ${colors.electricCyan}40`,
                }}
              >
                Join Our Growing Team
              </h3>
              <p
                style={{
                  color: colors.warmGray,
                  marginBottom: "32px",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                  maxWidth: "500px",
                  margin: "0 auto 32px auto",
                }}
              >
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <button
                style={{
                  background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                  color: colors.deepNavy,
                  fontWeight: "800",
                  padding: "16px 40px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "scale(1)",
                  boxShadow: `0 8px 25px ${colors.electricCyan}40`,
                  fontSize: "1.1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.vibrantGreen}, ${colors.electricCyan})`
                  e.currentTarget.style.transform = "scale(1.05) translateY(-2px)"
                  e.currentTarget.style.boxShadow = `0 15px 35px ${colors.electricCyan}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}40`
                }}
              >
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes teamGalaxy {
            0% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-10px) translateX(6px); }
            66% { transform: translateY(-20px) translateX(-4px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes teamFloat1 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-18px) translateX(10px); 
              opacity: 0.8;
            }
          }

          @keyframes teamFloat2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.5;
            }
            50% { 
              transform: translateY(15px) translateX(-12px); 
              opacity: 0.7;
            }
          }

          @keyframes iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          @keyframes ctaRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes slideIn {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-100%); }
          }

          @media (min-width: 640px) {
            .team-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .team-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Adjust arrow positioning for smaller screens */
          @media (max-width: 600px) {
            .team-carousel-container button {
              left: -20px !important;
              right: -20px !important;
            }
          }
        `}
      </style>
    </section>
  )
}
