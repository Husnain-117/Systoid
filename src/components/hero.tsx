"use client"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { ArrowRight, Play, Zap, ChevronDown } from 'lucide-react'

function useCountUp(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  return count
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  // Enhanced professional color palette
  const colors = {
    deepNavy: "#1A1D29",
    electricCyan: "#00D9FF",
    vibrantGreen: "#00FF88",
    pureWhite: "#FFFFFF",
    warmGray: "#8B9DC3",
    glassMorphism: "rgba(26, 29, 41, 0.85)",
    accentGlow: "rgba(0, 217, 255, 0.2)",
    greenGlow: "rgba(0, 255, 136, 0.2)",
  }

  const projectsCount = useCountUp(500, 2000, 800)
  const clientsCount = useCountUp(50, 2000, 1000)
  const experienceCount = useCountUp(5, 2000, 1200)

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
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${colors.deepNavy} 0%, #0F1419 50%, ${colors.deepNavy} 100%)`,
        paddingTop: "120px", // Increased padding to fix spacing issue
        paddingBottom: "60px",
      }}
    >
      {/* Enhanced Galaxy Background Animation */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1 }}>
        {/* Galaxy Dots Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 30%, ${colors.electricCyan}15 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, ${colors.vibrantGreen}12 1px, transparent 1px),
              radial-gradient(circle at 40% 70%, ${colors.electricCyan}08 1px, transparent 1px),
              radial-gradient(circle at 90% 80%, ${colors.vibrantGreen}10 1px, transparent 1px),
              radial-gradient(circle at 10% 90%, ${colors.electricCyan}06 1px, transparent 1px)
            `,
            backgroundSize: "200px 200px, 300px 300px, 150px 150px, 250px 250px, 180px 180px",
            animation: "galaxyMove 25s linear infinite",
            opacity: 0.4,
          }}
        />
        
        {/* Floating Orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${colors.electricCyan}25, ${colors.electricCyan}08, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "heroFloat1 12s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${colors.vibrantGreen}20, ${colors.vibrantGreen}06, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "heroFloat2 15s ease-in-out infinite reverse",
          }}
        />
        
        {/* Rotating Gradient Ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: `conic-gradient(from 0deg, ${colors.electricCyan}12, ${colors.vibrantGreen}12, transparent, ${colors.electricCyan}12)`,
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: "heroRotate 30s linear infinite",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 5vw",
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="hero-container-inner"
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "55px 2vw",
          }}
        >
          {/* Enhanced Badge with Better Spacing */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: colors.glassMorphism,
              backdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.electricCyan}40`,
              borderRadius: "9999px",
              padding: "12px 24px",
              marginBottom: "48px", // Increased margin for better spacing
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
              boxShadow: `0 8px 32px ${colors.accentGlow}`,
              animation: "badgePulse 4s ease-in-out infinite alternate",
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                borderRadius: "50%",
                padding: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "iconSpin 3s ease-in-out infinite",
                boxShadow: `0 0 20px ${colors.electricCyan}60`,
              }}
            >
              <Zap
                style={{
                  height: "16px",
                  width: "16px",
                  color: colors.pureWhite,
                }}
              />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.warmGray,
                fontWeight: "600",
              }}
            >
              The Next Move Is Yours
            </span>
          </div>

          {/* Enhanced Main Heading with Advanced Animations */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
              fontWeight: "900",
              color: colors.pureWhite,
              marginBottom: "32px",
              lineHeight: "1.1",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.2s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              textShadow: `0 0 40px ${colors.electricCyan}40`,
              letterSpacing: "-0.02em",
              animation: "titleTypewriter 3s ease-out forwards",
            }}
          >
            Build the Future with{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "textGlow 3s ease-in-out infinite alternate, textSlide 2s ease-out forwards",
                position: "relative",
                display: "inline-block",
              }}
            >
              Systoid
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
              color: colors.warmGray,
              marginBottom: "40px",
              maxWidth: "85vw",
              margin: "0 auto 40px auto",
              lineHeight: "1.7",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.4s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              fontWeight: "400",
            }}
          >
            We deliver cutting-edge digital marketing, web applications, mobile apps, desktop solutions, and
            comprehensive software services that drive your business forward in the digital age.
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "60px", // Reduced margin for better fit
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.6s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              width: "100%",
            }}
            className="cta-buttons-container"
          >
            <Button
              onClick={scrollToContact}
              sx={{
                background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                color: colors.deepNavy,
                fontWeight: "800",
                padding: "16px 32px",
                borderRadius: "16px",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: "scale(1)",
                boxShadow: `0 12px 35px ${colors.electricCyan}50`,
                fontSize: "1.05rem",
                "&:hover": {
                  background: `linear-gradient(135deg, ${colors.vibrantGreen}, ${colors.electricCyan})`,
                  transform: "scale(1.05) translateY(-4px)",
                  boxShadow: `0 20px 50px ${colors.electricCyan}70`,
                },
              }}
            >
              Start Your Project
              <ArrowRight
                style={{
                  marginLeft: "12px",
                  height: "20px",
                  width: "20px",
                  transition: "transform 0.3s ease",
                }}
                className="arrow-icon"
              />
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: colors.warmGray,
                color: colors.warmGray,
                backgroundColor: colors.glassMorphism,
                backdropFilter: "blur(20px) saturate(180%)",
                padding: "16px 32px",
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "1.05rem",
                fontWeight: "600",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: colors.electricCyan,
                  color: colors.deepNavy,
                  borderColor: colors.electricCyan,
                  transform: "translateY(-3px)",
                  boxShadow: `0 15px 35px ${colors.electricCyan}40`,
                },
              }}
            >
              <Play
                style={{
                  marginRight: "12px",
                  height: "20px",
                  width: "20px",
                  transition: "transform 0.3s ease",
                }}
                className="play-icon"
              />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats - Smaller and Better Fit */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "20px", // Reduced gap
              maxWidth: "800px", // Reduced max width
              margin: "0 auto",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.8s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              width: "100%",
            }}
            className="stats-grid"
          >
            {[
              { number: `${projectsCount}+`, label: "Projects Delivered" },
              { number: `${clientsCount}+`, label: "Happy Clients" },
              { number: `${experienceCount}+`, label: "Years Experience" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "20px 12px", // Reduced padding
                  borderRadius: "16px", // Smaller border radius
                  backgroundColor: colors.glassMorphism,
                  backdropFilter: "blur(20px) saturate(180%)",
                  border: `1px solid ${colors.electricCyan}30`,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: `statFloat${index} ${5 + index}s ease-in-out infinite`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.03)" // Reduced scale
                  e.currentTarget.style.backgroundColor = colors.accentGlow
                  e.currentTarget.style.borderColor = colors.electricCyan
                  e.currentTarget.style.boxShadow = `0 15px 30px ${colors.electricCyan}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.backgroundColor = colors.glassMorphism
                  e.currentTarget.style.borderColor = `${colors.electricCyan}30`
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", // Reduced font size
                    fontWeight: "900",
                    background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "6px", // Reduced margin
                    textShadow: `0 0 20px ${colors.electricCyan}40`,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem", // Reduced font size
                    color: colors.warmGray,
                    fontWeight: "600",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Positioned After Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
          paddingBottom: "20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          onClick={scrollToServices}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            animation: "scrollBounce 2s infinite",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          <div
            style={{
              width: "32px",
              height: "52px",
              border: `2px solid ${colors.electricCyan}`,
              borderRadius: "26px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "12px",
              backgroundColor: colors.glassMorphism,
              backdropFilter: "blur(20px) saturate(180%)",
              boxShadow: `0 0 25px ${colors.electricCyan}40`,
            }}
          >
            <div
              style={{
                width: "4px",
                height: "16px",
                background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                borderRadius: "2px",
                animation: "scrollPulse 2s infinite",
              }}
            />
          </div>
          <ChevronDown
            style={{
              height: "24px",
              width: "24px",
              color: colors.electricCyan,
              animation: "chevronBounce 2s infinite",
            }}
          />
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes galaxyMove {
            0% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-40px) translateX(-5px); }
            75% { transform: translateY(-20px) translateX(-10px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes heroFloat1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-25px) translateX(15px) rotate(180deg); }
          }

          @keyframes heroFloat2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(20px) translateX(-10px) rotate(-180deg); }
          }

          @keyframes heroRotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes badgePulse {
            0% { box-shadow: 0 8px 32px ${colors.accentGlow}; }
            100% { box-shadow: 0 8px 32px ${colors.electricCyan}60, 0 0 40px ${colors.vibrantGreen}30; }
          }

          @keyframes iconSpin {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
          }

          @keyframes titleTypewriter {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 0.5; }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes textSlide {
            0% { transform: translateX(-20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes textGlow {
            0% { filter: brightness(1) drop-shadow(0 0 20px ${colors.electricCyan}40); }
            100% { filter: brightness(1.2) drop-shadow(0 0 30px ${colors.vibrantGreen}40); }
          }

          @keyframes scrollBounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-15px); }
            70% { transform: translateY(-8px); }
          }

          @keyframes scrollPulse {
            0% { opacity: 1; transform: translateY(0); }
            50% { opacity: 0.5; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes chevronBounce {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(8px); opacity: 1; }
          }

          @keyframes statFloat0 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          @keyframes statFloat1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes statFloat2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }

          @keyframes statFloat3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }

          @media (max-width: 600px) {
            .hero-container-inner {
              padding-left: 3vw;
              padding-right: 3vw;
            }
            .cta-buttons-container {
              flex-direction: column !important;
              gap: 16px !important;
            }
            .stats-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
              max-width: 95vw !important;
            }
          }
          @media (min-width: 601px) and (max-width: 900px) {
            .cta-buttons-container {
              flex-direction: row !important;
              gap: 16px !important;
            }
            .stats-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 18px !important;
            }
          }
          @media (min-width: 901px) {
            .cta-buttons-container {
              flex-direction: row !important;
              gap: 20px !important;
            }
          }

          .cta-buttons-container > button:first-of-type:hover .arrow-icon {
            transform: translateX(6px);
          }
          .cta-buttons-container > button:last-of-type:hover .play-icon {
            transform: scale(1.3);
          }
        `}
      </style>
    </section>
  )
}
