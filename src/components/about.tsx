"use client"
import { useEffect, useState, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Target, Eye, Award, Users, Clock, Shield, TrendingUp, Heart } from "lucide-react"

// Custom hook for scroll-in-view animation
function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Optionally, unobserve after it's visible once
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
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
  // Define the color palette based on the provided component's theme
  const colors = {
    backgroundStart: "#222629", // Dark gray
    backgroundEnd: "rgba(71, 75, 79, 0.2)", // Transparent dark gray for gradient
    accentGreen: "#86C232", // Light green
    darkerGreen: "#61892F", // Darker green
    mediumGray: "#6B6E70", // Medium gray for text
    lightGrayBg: "rgba(71, 75, 79, 0.2)", // Card background
    lightGrayBorder: "rgba(107, 110, 112, 0.2)", // Card border
    whiteText: "#FFFFFF", // White
    badgeBg: "rgba(71, 75, 79, 0.3)", // Badge background
    badgeBorder: "rgba(107, 110, 112, 0.2)", // Badge border
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
    { icon: TrendingUp, number: "500+", label: "Projects Completed", color: colors.accentGreen },
    { icon: Users, number: "50+", label: "Happy Clients", color: colors.darkerGreen },
    { icon: Clock, number: "5+", label: "Years Experience", color: colors.accentGreen },
    { icon: Shield, number: "99%", label: "Success Rate", color: colors.darkerGreen },
  ]

  // Refs for scroll animations
  const [headerRef, headerInView] = useInView()
  const [contentRef, contentInView] = useInView()
  const [valuesRef, valuesInView] = useInView()

  return (
    <section
      id="about"
      style={{
        paddingTop: "80px", // py-20
        paddingBottom: "80px", // py-20
        background: `linear-gradient(to bottom, ${colors.backgroundStart}, ${colors.backgroundEnd})`, // bg-gradient-to-b from-[#222629] to-[#474B4F]/20
      }}
    >
      <div
        className="about-container-inner"
        style={{
          maxWidth: "1280px", // container mx-auto
          margin: "0 auto",
          padding: "0 16px", // px-4 sm:px-6 lg:px-8
        }}
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "64px", // mb-16
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px", // space-x-2
              backgroundColor: colors.badgeBg, // bg-[#474B4F]/30
              backdropFilter: "blur(4px)", // backdrop-blur-sm
              border: `1px solid ${colors.badgeBorder}`, // border border-[#6B6E70]/20
              borderRadius: "9999px", // rounded-full
              padding: "8px 16px", // px-4 py-2
              marginBottom: "24px", // mb-6
            }}
          >
            <Heart style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.mediumGray }}>About Systoid</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", // text-3xl sm:text-4xl lg:text-5xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              marginBottom: "24px", // mb-6
            }}
          >
            Crafting Digital Excellence Since 2019
          </h2>
          <p
            style={{
              fontSize: "1.125rem", // text-lg
              color: colors.mediumGray, // text-[#6B6E70]
              maxWidth: "768px", // max-w-3xl
              margin: "0 auto", // mx-auto
            }}
          >
            We are a passionate team of developers, designers, and digital strategists committed to delivering
            innovative solutions that drive business success.
          </p>
        </div>

        <div
          ref={contentRef}
          className="about-content-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
            gap: "64px", // gap-16
            alignItems: "center",
            marginBottom: "80px", // mb-20
            opacity: contentInView ? 1 : 0,
            transform: contentInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {/* Left Content */}
          <div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)", // text-2xl sm:text-3xl
                fontWeight: "bold",
                color: colors.whiteText, // text-white
                marginBottom: "24px", // mb-6
              }}
            >
              Building Tomorrow's Digital Solutions Today
            </h3>
            <div style={{ marginBottom: "32px", listStyle: "none", padding: 0 }}>
              {" "}
              {/* space-y-6 */}
              <p
                style={{
                  color: colors.mediumGray, // text-[#6B6E70]
                  lineHeight: "1.6", // leading-relaxed
                  marginBottom: "16px",
                }}
              >
                At Systoid, we believe that great software is born from the perfect blend of creativity, technical
                expertise, and deep understanding of business needs. Our journey began with a simple mission: to bridge
                the gap between innovative ideas and their digital implementation.
              </p>
              <p
                style={{
                  color: colors.mediumGray, // text-[#6B6E70]
                  lineHeight: "1.6", // leading-relaxed
                  marginBottom: "16px",
                }}
              >
                Over the years, we've evolved into a comprehensive software house that specializes in web applications,
                mobile apps, desktop solutions, digital marketing, and custom software development. Our team combines
                years of experience with cutting-edge technologies to deliver solutions that not only meet but exceed
                expectations.
              </p>
              <p
                style={{
                  color: colors.mediumGray, // text-[#6B6E70]
                  lineHeight: "1.6", // leading-relaxed
                }}
              >
                What sets us apart is our commitment to understanding your unique challenges and crafting tailored
                solutions that drive real business value. We don't just write code; we build partnerships that last.
              </p>
            </div>
            {/* Key Highlights */}
            <div
              style={{
                marginTop: "32px", // mt-8
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // grid-cols-2
                gap: "16px", // gap-4
              }}
            >
              <div
                style={{
                  backgroundColor: colors.lightGrayBg, // bg-[#474B4F]/20
                  backdropFilter: "blur(4px)", // backdrop-blur-sm
                  border: `1px solid ${colors.lightGrayBorder}`, // border border-[#6B6E70]/20
                  borderRadius: "8px", // rounded-lg
                  padding: "16px", // p-4
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem", // text-2xl
                    fontWeight: "bold",
                    color: colors.accentGreen, // text-[#86C232]
                    marginBottom: "4px", // mb-1
                  }}
                >
                  100%
                </div>
                <div style={{ fontSize: "0.875rem", color: colors.mediumGray }}>Client Satisfaction</div>
              </div>
              <div
                style={{
                  backgroundColor: colors.lightGrayBg, // bg-[#474B4F]/20
                  backdropFilter: "blur(4px)", // backdrop-blur-sm
                  border: `1px solid ${colors.lightGrayBorder}`, // border border-[#6B6E70]/20
                  borderRadius: "8px", // rounded-lg
                  padding: "16px", // p-4
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem", // text-2xl
                    fontWeight: "bold",
                    color: colors.accentGreen, // text-[#86C232]
                    marginBottom: "4px", // mb-1
                  }}
                >
                  24/7
                </div>
                <div style={{ fontSize: "0.875rem", color: colors.mediumGray }}>Support Available</div>
              </div>
            </div>
          </div>
          {/* Right Content - Stats */}
          <div
            className="about-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // grid-cols-2
              gap: "24px", // gap-6
            }}
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: colors.lightGrayBg, // bg-[#474B4F]/20
                  backdropFilter: "blur(4px)", // backdrop-blur-sm
                  border: `1px solid ${colors.lightGrayBorder}`, // border-[#6B6E70]/20
                  transition: "all 0.3s ease",
                  transform: "scale(1)", // Initial scale
                  boxShadow: "none", // Initial shadow
                  cursor: "pointer",
                  borderRadius: "12px", // rounded-xl
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.borderColor = `${colors.accentGreen}80` // hover:border-[#86C232]/50
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)"
                  const iconDiv = e.currentTarget.querySelector(".stat-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1.1)"
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.borderColor = colors.lightGrayBorder
                  e.currentTarget.style.boxShadow = "none"
                  const iconDiv = e.currentTarget.querySelector(".stat-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1)"
                  }
                }}
              >
                <CardContent style={{ padding: "24px", textAlign: "center" }}>
                  <div
                    className="stat-icon-div"
                    style={{
                      width: "48px", // w-12
                      height: "48px", // h-12
                      margin: "0 auto 16px auto", // mx-auto mb-4
                      borderRadius: "9999px", // rounded-full
                      background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <stat.icon style={{ height: "24px", width: "24px", color: colors.whiteText }} />
                  </div>
                  <div
                    style={{
                      fontSize: "1.875rem", // text-3xl
                      fontWeight: "bold",
                      marginBottom: "8px", // mb-2
                      color: stat.color, // Dynamic color from stat.color
                    }}
                  >
                    {stat.number}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: colors.mediumGray }}>{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div
          ref={valuesRef}
          style={{
            opacity: valuesInView ? 1 : 0,
            transform: valuesInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.5s",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)", // text-2xl sm:text-3xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              textAlign: "center",
              marginBottom: "48px", // mb-12
            }}
          >
            Our Core Values
          </h3>
          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
              gap: "32px", // gap-8
            }}
          >
            {values.map((value, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: colors.lightGrayBg, // bg-[#474B4F]/20
                  backdropFilter: "blur(4px)", // backdrop-blur-sm
                  border: `1px solid ${colors.lightGrayBorder}`, // border-[#6B6E70]/20
                  transition: "all 0.3s ease",
                  transform: "scale(1)", // Initial scale
                  boxShadow: "none", // Initial shadow
                  cursor: "pointer",
                  borderRadius: "12px", // rounded-xl
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.borderColor = `${colors.accentGreen}80` // hover:border-[#86C232]/50
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)"
                  const iconDiv = e.currentTarget.querySelector(".value-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1.1)"
                  }
                  const title = e.currentTarget.querySelector(".value-title") as HTMLElement
                  if (title) {
                    title.style.color = colors.accentGreen
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.borderColor = colors.lightGrayBorder
                  e.currentTarget.style.boxShadow = "none"
                  const iconDiv = e.currentTarget.querySelector(".value-icon-div") as HTMLElement
                  if (iconDiv) {
                    iconDiv.style.transform = "scale(1)"
                  }
                  const title = e.currentTarget.querySelector(".value-title") as HTMLElement
                  if (title) {
                    title.style.color = colors.whiteText
                  }
                }}
              >
                <CardContent style={{ padding: "24px" }}>
                  <div
                    className="value-icon-div"
                    style={{
                      width: "64px", // w-16
                      height: "64px", // h-16
                      margin: "0 auto 16px auto", // mx-auto mb-4
                      borderRadius: "9999px", // rounded-full
                      background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <value.icon style={{ height: "32px", width: "32px", color: colors.whiteText }} />
                  </div>
                  <h4
                    className="value-title"
                    style={{
                      fontSize: "1.125rem", // text-lg
                      fontWeight: "bold",
                      color: colors.whiteText, // text-white
                      marginBottom: "12px", // mb-3
                      transition: "color 0.3s ease",
                    }}
                  >
                    {value.title}
                  </h4>
                  <p style={{ color: colors.mediumGray, fontSize: "0.875rem", lineHeight: "1.6" }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Global styles for media queries */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .about-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .about-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* About Content Grid Layout */
          @media (min-width: 1024px) { /* lg:grid-cols-2 */
            .about-content-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          /* Values Grid Layout */
          @media (min-width: 768px) { /* md:grid-cols-2 */
            .values-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) { /* lg:grid-cols-4 */
            .values-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
