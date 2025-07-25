"use client"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  // Define the color palette based on the provided image
  const colors = {
    background: "#2C2F33", // Dark charcoal gray
    accentGreen: "#8BC34A", // Vibrant green
    darkerGreen: "#7CB342", // Darker green for button hover
    whiteText: "#FFFFFF", // White for main heading
    grayText: "#A0A0A0", // Medium gray for subtitle, badge, watch demo, stats labels
    badgeBg: "rgba(71, 75, 79, 0.5)", // Transparent gray for badge background
    badgeBorder: "rgba(107, 110, 112, 0.3)", // Transparent gray for badge border
    scrollIndicatorBorder: "#A0A0A0", // Gray for scroll indicator border
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: colors.background, // Solid background color
        paddingTop: "96px", // Added margin top for better spacing
      }}
    >
      {/* Animated Background Elements (subtle, matching the dark theme) */}
      <div style={{ position: "absolute", inset: "0" }}>
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "40px",
            width: "288px",
            height: "288px",
            backgroundColor: `${colors.accentGreen}1a`, // 10% opacity
            borderRadius: "50%",
            filter: "blur(48px)",
            animation: "pulse 2s infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "40px",
            width: "384px",
            height: "384px",
            backgroundColor: `${colors.darkerGreen}1a`, // 10% opacity
            borderRadius: "50%",
            filter: "blur(48px)",
            animation: "pulse 2s infinite",
            animationDelay: "1s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: `linear-gradient(45deg, ${colors.accentGreen}0d, ${colors.darkerGreen}0d)`, // 5% opacity
            borderRadius: "50%",
            filter: "blur(48px)",
            animation: "spin 20s linear infinite",
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
        }}
        className="hero-container-inner"
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 2vw",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: colors.badgeBg,
              backdropFilter: "blur(4px)",
              border: `1px solid ${colors.badgeBorder}`,
              borderRadius: "9999px",
              padding: "8px 16px",
              marginBottom: "32px",
              transition: "all 1s ease",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
            }}
          >
            <Sparkles style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.grayText }}>
              Transforming Ideas into Digital Reality
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: "clamp(2rem, 7vw, 3.5rem)",
              fontWeight: "bold",
              color: colors.whiteText,
              marginBottom: "24px",
              lineHeight: "1.1",
              transition: "all 1s ease",
              transitionDelay: "0.2s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              whiteSpace: "normal",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            Build the Future with{" "}
            <span
              style={{
                color: colors.accentGreen, // Direct color for "Systoid"
              }}
            >
              Systoid
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: colors.grayText,
              marginBottom: "32px",
              maxWidth: "90vw",
              margin: "0 auto 32px auto",
              lineHeight: "1.6",
              transition: "all 1s ease",
              transitionDelay: "0.4s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              wordBreak: "break-word",
            }}
          >
            We deliver cutting-edge digital marketing, web applications, mobile apps, desktop solutions, and
            comprehensive software services that drive your business forward.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "48px",
              transition: "all 1s ease",
              transitionDelay: "0.6s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              width: "100%",
            }}
            className="cta-buttons-container"
          >
            <Button
              sx={{
                backgroundColor: colors.accentGreen, // bg-[#86C232]
                color: colors.whiteText, // text-white
                fontWeight: "600", // font-semibold
                padding: "16px 32px", // px-8 py-4
                borderRadius: "8px", // rounded-lg
                textTransform: "none", // Prevent uppercase
                transition: "all 0.3s ease",
                transform: "scale(1)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)", // shadow-lg
                "&:hover": {
                  backgroundColor: colors.darkerGreen, // hover:bg-[#61892F]
                  transform: "scale(1.05)", // hover:scale-105
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)", // hover:shadow-xl
                },
              }}
            >
              Start Your Project
              <ArrowRight
                style={{
                  marginLeft: "8px", // ml-2
                  height: "20px", // h-5
                  width: "20px", // w-5
                  transition: "transform 0.3s ease",
                }}
                className="arrow-icon"
              />
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: colors.grayText, // border-[#6B6E70]
                color: colors.grayText, // text-[#6B6E70]
                backgroundColor: "transparent", // bg-transparent
                padding: "16px 32px", // px-8 py-4
                borderRadius: "8px", // rounded-lg
                textTransform: "none", // Prevent uppercase
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: colors.grayText, // hover:bg-[#6B6E70]
                  color: colors.whiteText, // hover:text-white
                  borderColor: colors.grayText, // Keep border color consistent
                },
              }}
            >
              <Play
                style={{
                  marginRight: "8px", // mr-2
                  height: "20px", // h-5
                  width: "20px", // w-5
                  transition: "transform 0.3s ease",
                }}
                className="play-icon"
              />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "32px",
              maxWidth: "900px",
              margin: "0 auto",
              transition: "all 1s ease",
              transitionDelay: "0.8s",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              width: "100%",
            }}
            className="stats-grid"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)", // text-2xl sm:text-3xl
                    fontWeight: "bold",
                    color: colors.accentGreen, // text-[#86C232]
                    marginBottom: "4px", // mb-1
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ fontSize: "0.875rem", color: colors.grayText }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px", // bottom-8
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
        }}
      >
        <div
          style={{
            width: "24px", // w-6
            height: "40px", // h-10
            border: `2px solid ${colors.grayText}`, // border-2 border-[#6B6E70]
            borderRadius: "9999px", // rounded-full
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px", // mt-2 for inner div
          }}
        >
          <div
            style={{
              width: "4px", // w-1
              height: "12px", // h-3
              backgroundColor: colors.accentGreen, // bg-[#86C232]
              borderRadius: "9999px", // rounded-full
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      </div>

      {/* Global styles for animations and responsive adjustments */}
      <style>
        {`
          /* Responsive container padding */
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
              gap: 20px !important;
              max-width: 98vw !important;
            }
          }
          @media (min-width: 601px) and (max-width: 900px) {
            .hero-container-inner {
              padding-left: 5vw;
              padding-right: 5vw;
            }
            .cta-buttons-container {
              flex-direction: row !important;
              gap: 16px !important;
            }
            .stats-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 24px !important;
              max-width: 90vw !important;
            }
          }
          @media (min-width: 901px) {
            .hero-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .cta-buttons-container {
              flex-direction: row !important;
              gap: 24px !important;
            }
            .stats-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
              gap: 32px !important;
              max-width: 900px !important;
            }
          }

          /* Button Icon Hover Animations */
          .cta-buttons-container > button:first-of-type:hover .arrow-icon {
            transform: translateX(4px);
          }
          .cta-buttons-container > button:last-of-type:hover .play-icon {
            transform: scale(1.1);
          }

          /* Background Animations */
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40%, 43% { transform: translateX(-50%) translateY(-10px); }
            70% { transform: translateX(-50%) translateY(-5px); }
          }
        `}
      </style>
    </section>
  )
}
