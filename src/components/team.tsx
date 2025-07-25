"use client"
import { useEffect, useState, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

// Custom hook for scroll-in-view animation (reused from About component)
function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target) // Unobserve once visible
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

export default function Team() {
  // Define the color palette based on the consistent theme
  const colors = {
    background: "#222629", // Dark gray
    cardBg: "rgba(71, 75, 79, 0.2)", // Card background
    cardBorder: "rgba(107, 110, 112, 0.2)", // Card border
    accentGreen: "#86C232", // Light green
    darkerGreen: "#61892F", // Darker green
    whiteText: "#FFFFFF", // White
    grayText: "#A0A0A0", // Medium gray for text
    badgeBg: "rgba(71, 75, 79, 0.3)", // Badge background
    badgeBorder: "rgba(107, 110, 112, 0.2)", // Badge border
    ctaBgGradientStart: "rgba(134, 194, 50, 0.1)", // CTA section background gradient start
    ctaBgGradientEnd: "rgba(97, 137, 47, 0.1)", // CTA section background gradient end
    ctaBorder: "rgba(134, 194, 50, 0.2)", // CTA section border
  }

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in software development and business strategy.",
      imageQuery: "professional man smiling",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex@Systoid.com",
      },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Technical architect specializing in scalable systems and emerging technologies.",
      imageQuery: "professional woman coding",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@Systoid.com",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating elegant solutions to complex problems.",
      imageQuery: "man working on computer",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "michael@Systoid.com",
      },
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and exceptional user experiences.",
      imageQuery: "woman designing on tablet",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emily@Systoid.com",
      },
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      bio: "Mobile app specialist with expertise in iOS, Android, and cross-platform development.",
      imageQuery: "man using smartphone",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@Systoid.com",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Digital Marketing Lead",
      bio: "Marketing strategist with proven track record in digital campaigns and brand growth.",
      imageQuery: "woman analyzing marketing data",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@Systoid.com",
      },
    },
  ]

  // Refs for scroll animations
  const [headerRef, headerInView] = useInView()
  const [teamGridRef, teamGridInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <section
      id="team"
      style={{
        paddingTop: "80px", // py-20
        paddingBottom: "80px", // py-20
        backgroundColor: colors.background, // bg-[#222629]
      }}
    >
      <div
        className="team-container-inner"
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
            <Mail style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.grayText }}>Our Team</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", // text-3xl sm:text-4xl lg:text-5xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              marginBottom: "24px", // mb-6
            }}
          >
            Meet the Experts Behind Systoid
          </h2>
          <p
            style={{
              fontSize: "1.125rem", // text-lg
              color: colors.grayText, // text-[#6B6E70]
              maxWidth: "768px", // max-w-3xl
              margin: "0 auto", // mx-auto
            }}
          >
            Our diverse team of talented professionals brings together years of experience, creativity, and passion to
            deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={teamGridRef}
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
            gap: "32px", // gap-8
            opacity: teamGridInView ? 1 : 0,
            transform: teamGridInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: colors.cardBg, // bg-[#474B4F]/20
                backdropFilter: "blur(4px)", // backdrop-blur-sm
                border: `1px solid ${colors.cardBorder}`, // border-[#6B6E70]/20
                transition: "all 0.3s ease",
                transform: "scale(1)", // Initial scale
                boxShadow: "none", // Initial shadow
                borderRadius: "12px", // rounded-xl
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)" // hover:scale-105
                e.currentTarget.style.borderColor = `${colors.accentGreen}80` // hover:border-[#86C232]/50
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)" // hover:shadow-xl
                const image = e.currentTarget.querySelector(".member-image") as HTMLElement
                if (image) image.style.transform = "scale(1.1)" // group-hover:scale-110
                const overlay = e.currentTarget.querySelector(".member-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "1" // group-hover:opacity-100
                const socialLinks = e.currentTarget.querySelector(".social-links") as HTMLElement
                if (socialLinks) socialLinks.style.opacity = "1" // group-hover:opacity-100
                const name = e.currentTarget.querySelector(".member-name") as HTMLElement
                if (name) name.style.color = colors.accentGreen // group-hover:text-[#86C232]
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = "none"
                const image = e.currentTarget.querySelector(".member-image") as HTMLElement
                if (image) image.style.transform = "scale(1)"
                const overlay = e.currentTarget.querySelector(".member-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "0"
                const socialLinks = e.currentTarget.querySelector(".social-links") as HTMLElement
                if (socialLinks) socialLinks.style.opacity = "0"
                const name = e.currentTarget.querySelector(".member-name") as HTMLElement
                if (name) name.style.color = colors.whiteText
              }}
            >
              <CardContent style={{ padding: "0" }}>
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={`/placeholder.svg?height=300&width=300&query=${member.imageQuery}`}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "256px", // h-64
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    className="member-image"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: "0",
                      background: `linear-gradient(to top, ${colors.background}cc, transparent)`, // from-[#222629]/80
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="member-overlay"
                  ></div>
                  {/* Social Links */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px", // bottom-4
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "12px", // space-x-3
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="social-links"
                  >
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "40px", // w-10
                        height: "40px", // h-10
                        backgroundColor: colors.accentGreen, // bg-[#86C232]
                        borderRadius: "9999px", // rounded-full
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.darkerGreen)} // hover:bg-[#61892F]
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGreen)}
                    >
                      <Linkedin style={{ height: "20px", width: "20px", color: colors.whiteText }} />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: colors.accentGreen,
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.darkerGreen)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGreen)}
                    >
                      <Twitter style={{ height: "20px", width: "20px", color: colors.whiteText }} />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: colors.accentGreen,
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.darkerGreen)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGreen)}
                    >
                      <Github style={{ height: "20px", width: "20px", color: colors.whiteText }} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: colors.accentGreen,
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.darkerGreen)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGreen)}
                    >
                      <Mail style={{ height: "20px", width: "20px", color: colors.whiteText }} />
                    </a>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "24px" }}>
                  {" "}
                  {/* p-6 */}
                  <h3
                    className="member-name"
                    style={{
                      fontSize: "1.25rem", // text-xl
                      fontWeight: "bold",
                      color: colors.whiteText, // text-white
                      marginBottom: "8px", // mb-2
                      transition: "color 0.3s ease",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      color: colors.accentGreen, // text-[#86C232]
                      fontWeight: "500", // font-medium
                      marginBottom: "12px", // mb-3
                    }}
                  >
                    {member.role}
                  </div>
                  <p
                    style={{
                      color: colors.grayText, // text-[#6B6E70]
                      fontSize: "0.875rem", // text-sm
                      lineHeight: "1.6", // leading-relaxed
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div
          ref={ctaRef}
          style={{
            textAlign: "center",
            marginTop: "64px", // mt-16
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.5s",
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
              Join Our Growing Team
            </h3>
            <p
              style={{
                color: colors.grayText, // text-[#6B6E70]
                marginBottom: "24px", // mb-6
              }}
            >
              We're always looking for talented individuals who share our passion for innovation and excellence.
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
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      {/* Global styles for media queries */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .team-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .team-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Team Grid Layout */
          @media (min-width: 768px) { /* md:grid-cols-2 */
            .team-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) { /* lg:grid-cols-3 */
            .team-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
