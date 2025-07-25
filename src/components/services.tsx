"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Smartphone, Globe, Monitor, Megaphone, Cog, Palette, ArrowRight, Zap } from "lucide-react"
import { useState } from "react"

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Define the color palette based on the provided component's theme
  const colors = {
    background: "#222629", // Dark gray
    accentGreen: "#86C232", // Light green
    darkerGreen: "#61892F", // Darker green
    mediumGray: "#6B6E70", // Medium gray for text
    lightGrayBg: "rgba(71, 75, 79, 0.2)", // Card background
    lightGrayBorder: "rgba(107, 110, 112, 0.2)", // Card border
    whiteText: "#FFFFFF", // White
    badgeBg: "rgba(71, 75, 79, 0.3)", // Badge background
    badgeBorder: "rgba(107, 110, 112, 0.2)", // Badge border
    ctaBgGradientStart: "rgba(134, 194, 50, 0.1)", // CTA section background gradient start
    ctaBgGradientEnd: "rgba(97, 137, 47, 0.1)", // CTA section background gradient end
    ctaBorder: "rgba(134, 194, 50, 0.2)", // CTA section border
  }

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js for scalable solutions.",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      imageQuery: "modern web application interface",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      imageQuery: "sleek mobile app interface",
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description:
        "Powerful desktop applications for Windows, macOS, and Linux using modern frameworks and technologies.",
      features: ["Cross-platform", "Electron Apps", "Native Performance", "Auto-updates"],
      imageQuery: "desktop software interface",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"],
      imageQuery: "digital marketing analytics dashboard",
    },
    {
      icon: Cog,
      title: "Software Solutions",
      description:
        "Custom software solutions tailored to your business needs with enterprise-grade security and scalability.",
      features: ["Enterprise Software", "API Development", "Cloud Solutions", "DevOps Services"],
      imageQuery: "abstract software development code",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      imageQuery: "user interface design wireframe",
    },
  ]

  return (
    <section
      id="services"
      style={{
        paddingTop: "80px", // py-20
        paddingBottom: "80px", // py-20
        backgroundColor: colors.background, // bg-[#222629]
      }}
    >
      <div
        className="services-container-inner"
        style={{
          maxWidth: "1280px", // container mx-auto
          margin: "0 auto",
          padding: "0 16px", // px-4
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px", // mb-16
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
            <Zap style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.mediumGray }}>Our Services</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", // text-3xl sm:text-4xl lg:text-5xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              marginBottom: "24px", // mb-6
            }}
          >
            Comprehensive Digital Solutions
          </h2>
          <p
            style={{
              fontSize: "1.125rem", // text-lg
              color: colors.mediumGray, // text-[#6B6E70]
              maxWidth: "768px", // max-w-3xl
              margin: "0 auto", // mx-auto
            }}
          >
            From concept to deployment, we provide end-to-end digital solutions that transform your business and drive
            growth in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
            gap: "32px", // gap-8
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: colors.lightGrayBg, // bg-[#474B4F]/20
                backdropFilter: "blur(4px)", // backdrop-blur-sm
                border: `1px solid ${colors.lightGrayBorder}`, // border-[#6B6E70]/20
                transition: "all 0.3s ease",
                transform: hoveredCard === index ? "scale(1.03)" : "scale(1)", // hover:scale-105
                boxShadow: hoveredCard === index ? "0 10px 20px rgba(0,0,0,0.3)" : "none", // hover:shadow-xl
                cursor: "pointer",
                borderRadius: "12px", // rounded-xl
                overflow: "hidden", // Ensure image corners are rounded
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service Image */}
              <div
                style={{
                  width: "100%",
                  height: "200px", // Fixed height for images
                  overflow: "hidden",
                  marginBottom: "24px", // mb-6
                }}
              >
                <img
                  src={`/placeholder.svg?height=200&width=400&query=${service.imageQuery}`}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>

              <CardContent style={{ padding: "32px" }}>
                {/* Icon */}
                <div
                  style={{
                    width: "64px", // w-16
                    height: "64px", // h-16
                    borderRadius: "12px", // rounded-xl
                    background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px", // mb-6
                    transition: "all 0.3s ease",
                    transform: hoveredCard === index ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)",
                    boxShadow: hoveredCard === index ? "0 4px 15px rgba(134, 194, 50, 0.4)" : "none",
                  }}
                >
                  <service.icon style={{ height: "32px", width: "32px", color: colors.whiteText }} />
                </div>
                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.25rem", // text-xl
                    fontWeight: "bold",
                    color: hoveredCard === index ? colors.accentGreen : colors.whiteText, // group-hover:text-[#86C232]
                    marginBottom: "16px", // mb-4
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.title}
                </h3>
                {/* Description */}
                <p
                  style={{
                    color: colors.mediumGray, // text-[#6B6E70]
                    marginBottom: "24px", // mb-6
                    lineHeight: "1.6", // leading-relaxed
                  }}
                >
                  {service.description}
                </p>
                {/* Features */}
                <ul style={{ marginBottom: "24px", listStyle: "none", padding: 0 }}>
                  {" "}
                  {/* space-y-2 mb-6 */}
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.875rem", // text-sm
                        color: colors.mediumGray, // text-[#6B6E70]
                        marginBottom: "8px", // space-y-2
                      }}
                    >
                      <div
                        style={{
                          width: "6px", // w-1.5
                          height: "6px", // h-1.5
                          backgroundColor: colors.accentGreen, // bg-[#86C232]
                          borderRadius: "50%", // rounded-full
                          marginRight: "12px", // mr-3
                        }}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Learn More Link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: colors.accentGreen, // text-[#86C232]
                    fontWeight: "500", // font-medium
                    transition: "transform 0.3s ease",
                    transform: hoveredCard === index ? "translateX(8px)" : "translateX(0)", // group-hover:translate-x-2
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight style={{ marginLeft: "8px", height: "16px", width: "16px" }} /> {/* ml-2 h-4 w-4 */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "64px", // mt-16
          }}
        >
          <div
            style={{
              background: `linear-gradient(to right, ${colors.ctaBgGradientStart}, ${colors.ctaBgGradientEnd})`,
              backdropFilter: "blur(4px)", // backdrop-blur-sm
              border: `1px solid ${colors.ctaBorder}`, // border border-[#86C232]/20
              borderRadius: "16px", // rounded-2xl
              padding: "32px", // p-8
              maxWidth: "896px", // max-w-4xl
              margin: "0 auto", // mx-auto
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem", // text-2xl
                fontWeight: "bold",
                color: colors.whiteText, // text-white
                marginBottom: "16px", // mb-4
              }}
            >
              Ready to Transform Your Business?
            </h3>
            <p
              style={{
                color: colors.mediumGray, // text-[#6B6E70]
                marginBottom: "24px", // mb-6
              }}
            >
              Let's discuss how our comprehensive digital solutions can help you achieve your goals.
            </p>
            <button
              style={{
                background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                color: colors.whiteText, // text-white
                fontWeight: "600", // font-semibold
                padding: "12px 32px", // px-8 py-3
                borderRadius: "8px", // rounded-lg
                transition: "all 0.3s ease",
                transform: "scale(1)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, ${colors.darkerGreen}, ${colors.accentGreen})`
                e.currentTarget.style.transform = "scale(1.05)"
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)"
              }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Global styles for media queries */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .services-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .services-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Services Grid Layout */
          @media (min-width: 768px) { /* md:grid-cols-2 */
            .services-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) { /* lg:grid-cols-3 */
            .services-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
