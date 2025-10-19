"use client"
import { useEffect, useState, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Target, Eye, Award, Users, Clock, Shield, TrendingUp, Heart } from "lucide-react"

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

export default function About() {
  // Light professional palette aligned with Hero
  const colors = {
    bgLight: "#FFFFFF",
    bgGradientStart: "#F0F9F7",
    bgGradientEnd: "#F4FCFA",
    heading: "#143c3c",
    paragraph: "#2D4A4A",
    primary: "#0D716C",
    primaryLight: "#83C7AF",
    primarySoft: "#E6F4F0",
    cardBg: "#FFFFFF",
    cardBorder: "#D0E0DF",
    shadow: "0 15px 45px rgba(20, 60, 60, 0.1)",
    subtleShadow: "0 8px 24px rgba(20, 60, 60, 0.08)",
    accentMint: "#83C7AF",
    accentGreen: "#0D716C",
    accentOrange: "#E6A15C",
    textDark: "#143c3c",
    textLight: "#5D7A7A",
  }

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "To empower businesses with innovative digital solutions that drive growth and success.",
    },
    {
      icon: Eye,
      title: "Visionary",
      description: "To be the leading software house that transforms ideas into digital reality.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and close collaboration with our clients.",
    },
  ]

  const stats = [
    { icon: TrendingUp, number: "500+", label: "Projects Completed", color: colors.primary },
    { icon: Users, number: "50+", label: "Happy Clients", color: colors.primaryLight },
    { icon: Clock, number: "5+", label: "Years Experience", color: colors.primary },
    { icon: Shield, number: "99%", label: "Success Rate", color: colors.primaryLight },
  ]

  const [headerRef, headerInView] = useInView()
  const [contentRef, contentInView] = useInView()
  const [valuesRef, valuesInView] = useInView()

  return (
    <section
      id="about"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        background: `linear-gradient(120deg, ${colors.bgGradientStart}, ${colors.bgGradientEnd})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decorations */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "260px",
            height: "260px",
            background: `radial-gradient(closest-side, ${colors.primaryLight}26, transparent)`,
            borderRadius: "50%",
            filter: "blur(0px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            background: `radial-gradient(closest-side, ${colors.primary}22, transparent)`,
            borderRadius: "50%",
            filter: "blur(0px)",
          }}
        />
      </div>

      <div
        className="about-container-inner"
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
            marginBottom: "80px",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: colors.primarySoft,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "9999px",
              padding: "12px 24px",
              marginBottom: "32px",
              boxShadow: colors.subtleShadow,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                borderRadius: "50%",
                padding: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.primaryLight}60`,
              }}
            >
              <Heart style={{ height: "16px", width: "16px", color: "#FFFFFF" }} />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.textDark,
                fontWeight: "600",
              }}
            >
              About Systoid
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "900",
              color: colors.heading,
              marginBottom: "32px",
              letterSpacing: "-0.02em",
            }}
          >
            Crafting Digital Excellence Since 2019
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: colors.paragraph,
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            We are a passionate team of developers, designers, and digital strategists committed to delivering
            innovative solutions that drive business success.
          </p>
        </div>

        {/* Enhanced Content Section */}
        <div
          ref={contentRef}
          className="about-content-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "80px",
            alignItems: "center",
            marginBottom: "100px",
            opacity: contentInView ? 1 : 0,
            transform: contentInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.3s",
          }}
        >
          {/* Left Content */}
          <div
            style={{
              transform: contentInView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.5s",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: "900",
                color: colors.heading,
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              Building Tomorrow's Digital Solutions Today
            </h3>
            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  color: colors.paragraph,
                  lineHeight: "1.8",
                  marginBottom: "24px",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.heading
                  e.currentTarget.style.transform = "translateX(8px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.paragraph
                  e.currentTarget.style.transform = "translateX(0)"
                }}
              >
                At Systoid, we believe that great software is born from the perfect blend of creativity, technical
                expertise, and deep understanding of business needs. Our journey began with a simple mission: to bridge
                the gap between innovative ideas and their digital implementation.
              </p>
              <p
                style={{
                  color: colors.paragraph,
                  lineHeight: "1.8",
                  marginBottom: "24px",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.heading
                  e.currentTarget.style.transform = "translateX(8px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.paragraph
                  e.currentTarget.style.transform = "translateX(0)"
                }}
              >
                Over the years, we've evolved into a comprehensive software house that specializes in web applications,
                mobile apps, desktop solutions, digital marketing, and custom software development. Our team combines
                years of experience with cutting-edge technologies to deliver solutions that not only meet but exceed
                expectations.
              </p>
              <p
                style={{
                  color: colors.paragraph,
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.heading
                  e.currentTarget.style.transform = "translateX(8px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.paragraph
                  e.currentTarget.style.transform = "translateX(0)"
                }}
              >
                What sets us apart is our commitment to understanding your unique challenges and crafting tailored
                solutions that drive real business value. We don't just write code; we build partnerships that last.
              </p>
            </div>

            {/* Enhanced Key Highlights */}
            <div
              style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: "20px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateZ(0)",
                  boxShadow: colors.subtleShadow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(10px) scale(1.03)"
                  e.currentTarget.style.boxShadow = colors.shadow
                  e.currentTarget.style.borderColor = colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0) scale(1)"
                  e.currentTarget.style.boxShadow = String(colors.subtleShadow)
                  e.currentTarget.style.borderColor = colors.cardBorder
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "8px",
                  }}
                >
                  100%
                </div>
                <div style={{ fontSize: "0.95rem", color: colors.textLight, fontWeight: "600" }}>
                  Client Satisfaction
                </div>
              </div>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: "20px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateZ(0)",
                  boxShadow: colors.subtleShadow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(10px) scale(1.03)"
                  e.currentTarget.style.boxShadow = colors.shadow
                  e.currentTarget.style.borderColor = colors.primaryLight
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0) scale(1)"
                  e.currentTarget.style.boxShadow = String(colors.subtleShadow)
                  e.currentTarget.style.borderColor = colors.cardBorder
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "8px",
                  }}
                >
                  24/7
                </div>
                <div style={{ fontSize: "0.95rem", color: colors.textLight, fontWeight: "600" }}>Support Available</div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div
            className="about-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "32px",
              transform: contentInView ? "translateX(0)" : "translateX(30px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.7s",
            }}
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateZ(0)",
                  boxShadow: colors.subtleShadow,
                  cursor: "pointer",
                  borderRadius: "24px",
                  animation: `cardFloat${index} ${6 + index}s ease-in-out infinite`,
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(30px) scale(1.05)"
                  e.currentTarget.style.borderColor = colors.primary
                  e.currentTarget.style.boxShadow = String(colors.shadow)
                  const iconDiv = e.currentTarget.querySelector(".stat-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1.2) rotate(360deg)"
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0) scale(1)"
                  e.currentTarget.style.borderColor = colors.cardBorder
                  e.currentTarget.style.boxShadow = String(colors.subtleShadow)
                  const iconDiv = e.currentTarget.querySelector(".stat-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1) rotate(0deg)"
                  }
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${colors.primaryLight}26, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="stat-bg-overlay"
                />
                <CardContent style={{ padding: "32px", textAlign: "center", position: "relative", zIndex: 2 }}>
                  <div
                    className="stat-icon-div"
                    style={{
                      width: "64px",
                      height: "64px",
                      margin: "0 auto 24px auto",
                      borderRadius: "20px",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: `0 10px 25px ${colors.primaryLight}40`,
                    }}
                  >
                    <stat.icon style={{ height: "32px", width: "32px", color: "#FFFFFF" }} />
                  </div>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "900",
                      marginBottom: "12px",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: colors.textLight,
                      fontWeight: "600",
                    }}
                  >
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div
          ref={valuesRef}
          style={{
            opacity: valuesInView ? 1 : 0,
            transform: valuesInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.5s",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: "900",
              color: colors.heading,
              textAlign: "center",
              marginBottom: "60px",
              letterSpacing: "-0.01em",
            }}
          >
            Our Core Values
          </h3>
          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
              gap: "40px",
            }}
          >
            {values.map((value, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: valuesInView ? "translateZ(0)" : "translateZ(-50px)",
                  transitionDelay: `${index * 0.1}s`,
                  boxShadow: colors.subtleShadow,
                  cursor: "pointer",
                  borderRadius: "24px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(20px) scale(1.03)"
                  e.currentTarget.style.borderColor = colors.primary
                  e.currentTarget.style.boxShadow = String(colors.shadow)
                  const iconDiv = e.currentTarget.querySelector(".value-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1.2) rotate(10deg)"
                  }
                  const title = e.currentTarget.querySelector(".value-title") as HTMLElement
                  if (title) {
                    title.style.color = colors.primary
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0) scale(1)"
                  e.currentTarget.style.borderColor = colors.cardBorder
                  e.currentTarget.style.boxShadow = String(colors.subtleShadow)
                  const iconDiv = e.currentTarget.querySelector(".value-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1) rotate(0deg)"
                  }
                  const title = e.currentTarget.querySelector(".value-title") as HTMLElement
                  if (title) {
                    title.style.color = colors.heading
                  }
                }}
              >
                <CardContent style={{ padding: "40px" }}>
                  <div
                    className="value-icon-div"
                    style={{
                      width: "80px",
                      height: "80px",
                      margin: "0 auto 24px auto",
                      borderRadius: "20px",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: `0 15px 30px ${colors.primaryLight}40`,
                    }}
                  >
                    <value.icon style={{ height: "40px", width: "40px", color: "#FFFFFF" }} />
                  </div>
                  <h4
                    className="value-title"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "800",
                      color: colors.heading,
                      marginBottom: "16px",
                      transition: "color 0.3s ease",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      color: colors.paragraph,
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      fontWeight: "400",
                    }}
                  >
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes aboutFloat1 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.7;
            }
            50% { 
              transform: translateY(-25px) translateX(15px); 
              opacity: 0.9;
            }
          }

          @keyframes aboutFloat2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(20px) translateX(-20px); 
              opacity: 0.8;
            }
          }

          @keyframes aboutRotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes badgeFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          /* Removed neon titleGlow for light theme */

          @keyframes cardFloat0 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes cardFloat1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          @keyframes cardFloat2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes cardFloat3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          @media (min-width: 640px) {
            .about-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .about-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 1024px) {
            .about-content-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (min-width: 768px) {
            .values-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) {
            .values-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
