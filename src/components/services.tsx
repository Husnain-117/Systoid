"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Smartphone, Globe, Monitor, Megaphone, Cog, Palette, ArrowRight, Zap } from 'lucide-react'
import { useState, useEffect, useRef } from "react"

// Local service illustrations (add/replace with your assets)
import webImg from "../assets/web.jpg";
import mobileImg from "../assets/app.jpg";
import desktopImg from "../assets/desktop.jpg";
import marketingImg from "../assets/marketing.jpg";
import softwareImg from "../assets/solutions.jpg";
import designImg from "../assets/uiux.jpg";

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

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js for scalable solutions.",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      image: webImg,
      gradient: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      image: mobileImg,
      gradient: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description:
        "Powerful desktop applications for Windows, macOS, and Linux using modern frameworks and technologies.",
      features: ["Cross-platform", "Electron Apps", "Native Performance", "Auto-updates"],
      image: desktopImg,
      gradient: `linear-gradient(135deg, ${colors.primary}CC, ${colors.primaryLight}CC)`,
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"],
      image: marketingImg,
      gradient: `linear-gradient(135deg, ${colors.primaryLight}CC, ${colors.primary}CC)`,
    },
    {
      icon: Cog,
      title: "Software Solutions",
      description:
        "Custom software solutions tailored to your business needs with enterprise-grade security and scalability.",
      features: ["Enterprise Software", "API Development", "Cloud Solutions", "DevOps Services"],
      image: softwareImg,
      gradient: `linear-gradient(135deg, ${colors.primary}DD, ${colors.primaryLight}AA)`,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      image: designImg,
      gradient: `linear-gradient(135deg, ${colors.primaryLight}DD, ${colors.primary}AA)`,
    },
  ]

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const [headerRef, headerInView] = useInView()
  const [servicesGridRef, servicesGridInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <section
      id="services"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        background: `linear-gradient(120deg, ${colors.bgGradientStart}, ${colors.bgGradientEnd})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decorations */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 260, height: 260, borderRadius: "50%", background: `radial-gradient(closest-side, ${colors.primaryLight}26, transparent)` }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-60px", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(closest-side, ${colors.primary}22, transparent)` }} />
      </div>

      <div
        className="services-container-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "60px",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
              marginBottom: "24px",
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
              <Zap style={{ height: "16px", width: "16px", color: "#FFFFFF" }} />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.textDark,
                fontWeight: "600",
              }}
            >
              Our Services
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "900",
              color: colors.heading,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Comprehensive Digital Solutions
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: colors.paragraph,
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            From concept to deployment, we provide end-to-end digital solutions that transform your business and drive
            growth in the digital age.
          </p>
        </div>

        {/* Enhanced Services Grid - Smaller Cards */}
        <div
          ref={servicesGridRef}
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "24px", // Reduced gap
            maxHeight: "80vh", // Restore vertical scroll as before
            overflowY: "auto",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: servicesGridInView
                  ? hoveredCard === index
                    ? "translateY(-6px)"
                    : "scale(1)"
                  : "scale(0.95) translateY(20px)",
                opacity: servicesGridInView ? 1 : 0,
                transitionDelay: servicesGridInView ? `${index * 0.1}s` : "0s",
                boxShadow: hoveredCard === index ? colors.shadow : colors.subtleShadow,
                cursor: "pointer",
                borderRadius: "20px", // Smaller border radius
                overflow: "hidden",
                position: "relative",
                height: "auto", // Let content determine height
                minHeight: "320px", // Minimum height for consistency
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: service.gradient,
                  opacity: hoveredCard === index ? 0.06 : 0,
                  transition: "opacity 0.5s ease",
                  zIndex: 1,
                }}
              />

              {/* Smaller Service Image */}
              <div
                style={{
                  width: "100%",
                  height: "180px", // Reduced height
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredCard === index ? "scale(1.08)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      hoveredCard === index
                        ? `linear-gradient(45deg, ${colors.primaryLight}25, ${colors.primary}25)`
                        : "transparent",
                    transition: "all 0.4s ease",
                  }}
                />
              </div>

              <CardContent style={{ padding: "24px", position: "relative", zIndex: 2 }}> {/* Reduced padding */}
                {/* Smaller Icon */}
                <div
                  style={{
                    width: "60px", // Reduced size
                    height: "60px",
                    borderRadius: "16px",
                    background: service.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px", // Reduced margin
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform:
                      hoveredCard === index ? "scale(1.08) rotate(3deg) translateY(-4px)" : "scale(1) rotate(0deg)",
                    boxShadow:
                      hoveredCard === index
                        ? `0 15px 30px ${colors.primaryLight}40`
                        : `0 8px 20px ${colors.primaryLight}25`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <service.icon
                    style={{ height: "30px", width: "30px", color: "#FFFFFF", position: "relative", zIndex: 2 }} // Reduced size
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `conic-gradient(from 0deg, ${colors.primaryLight}60, ${colors.primary}60, ${colors.primaryLight}60)`,
                      animation: hoveredCard === index ? "iconRotate 2s linear infinite" : "none",
                      opacity: 0.3,
                    }}
                  />
                </div>

                {/* Smaller Title */}
                <h3
                  style={{
                    fontSize: "1.25rem", // Reduced size
                    fontWeight: "800",
                    color: hoveredCard === index ? colors.primary : colors.heading,
                    marginBottom: "12px", // Reduced margin
                    transition: "color 0.3s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Smaller Description */}
                <p
                  style={{
                    color: colors.paragraph,
                    marginBottom: "20px", // Reduced margin
                    lineHeight: "1.6",
                    fontSize: "0.95rem", // Reduced size
                  }}
                >
                  {service.description}
                </p>

                {/* Compact Features List */}
                <ul style={{ marginBottom: "20px", listStyle: "none", padding: 0 }}> {/* Reduced margin */}
                  {service.features.slice(0, 3).map((feature, featureIndex) => ( // Show only 3 features
                    <li
                      key={featureIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.85rem", // Reduced size
                        color: colors.textLight,
                        marginBottom: "8px", // Reduced margin
                        transition: "all 0.3s ease",
                        transform: hoveredCard === index ? "translateX(6px)" : "translateX(0)",
                        transitionDelay: `${featureIndex * 0.05}s`,
                      }}
                    >
                      <div
                        style={{
                          width: "6px", // Reduced size
                          height: "6px",
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                          borderRadius: "50%",
                          marginRight: "12px",
                          transition: "all 0.3s ease",
                          transform: hoveredCard === index ? "scale(1.3)" : "scale(1)",
                          boxShadow: hoveredCard === index ? `0 0 8px ${colors.primaryLight}60` : "none",
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Compact CTA Link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: colors.primary,
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    transform: hoveredCard === index ? "translateX(8px)" : "translateX(0)",
                    cursor: "pointer",
                    fontSize: "0.95rem", // Reduced size
                  }}
                  onClick={scrollToContact}
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight
                    style={{
                      marginLeft: "8px",
                      height: "16px", // Reduced size
                      width: "16px",
                      transition: "transform 0.3s ease",
                      transform: hoveredCard === index ? "translateX(4px)" : "translateX(0)",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          style={{
            textAlign: "center",
            marginTop: "60px",
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              background: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "24px",
              padding: "40px 32px", // Reduced padding
              maxWidth: "800px", // Reduced max width
              margin: "0 auto",
              boxShadow: colors.subtleShadow,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `conic-gradient(from 0deg, ${colors.primaryLight}08, ${colors.primary}08, transparent)`,
                animation: "ctaRotate 25s linear infinite",
                opacity: 0.3,
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontSize: "1.75rem", // Reduced size
                  fontWeight: "900",
                  color: colors.heading,
                  marginBottom: "16px",
                }}
              >
                Ready to Transform Your Business?
              </h3>
              <p
                style={{
                  color: colors.paragraph,
                  marginBottom: "32px",
                  fontSize: "1.05rem", // Reduced size
                  lineHeight: "1.6",
                  maxWidth: "500px",
                  margin: "0 auto 32px auto",
                }}
              >
                Let's discuss how our comprehensive digital solutions can help you achieve your goals and drive
                unprecedented growth.
              </p>
              <button
                onClick={scrollToContact}
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                  color: "#FFFFFF",
                  fontWeight: "800",
                  padding: "16px 40px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "scale(1)",
                  boxShadow: `0 10px 30px ${colors.primaryLight}40`,
                  fontSize: "1.1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`
                  e.currentTarget.style.transform = "scale(1.05) translateY(-2px)"
                  e.currentTarget.style.boxShadow = `0 15px 40px ${colors.primaryLight}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primaryLight}40`
                }}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes galaxyDrift {
            0% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-15px) translateX(8px); }
            50% { transform: translateY(-30px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(-8px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes serviceFloat1 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-25px) translateX(15px); 
              opacity: 0.8;
            }
          }

          @keyframes serviceFloat2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.5;
            }
            50% { 
              transform: translateY(20px) translateX(-12px); 
              opacity: 0.7;
            }
          }

          @keyframes iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          @keyframes iconRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes ctaRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @media (min-width: 640px) {
            .services-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .services-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 20px !important;
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 24px !important;
            }
          }
        `}
      </style>
    </section>
  )
}
