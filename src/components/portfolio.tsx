"use client"
import { useEffect, useState, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { ExternalLink, Github, Smartphone, Globe, Monitor, Megaphone } from "lucide-react"

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

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  // Define the color palette based on the consistent theme
  const colors = {
    background: "#222629", // Dark gray - used for section background
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

  const filters = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "web", label: "Web Apps", icon: Globe },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "desktop", label: "Desktop Apps", icon: Monitor },
    { id: "marketing", label: "Digital Marketing", icon: Megaphone },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "A comprehensive e-commerce solution with advanced inventory management and analytics.",
      imageQuery: "modern e-commerce website dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Cross-platform mobile app for fitness tracking with social features and AI coaching.",
      imageQuery: "sleek mobile fitness app interface",
      technologies: ["React Native", "Firebase", "TensorFlow", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Project Management Tool",
      category: "desktop",
      description: "Desktop application for project management with real-time collaboration features.",
      imageQuery: "desktop project management software interface",
      technologies: ["Electron", "Vue.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Brand Marketing Campaign",
      category: "marketing",
      description: "Complete digital marketing campaign that increased brand awareness by 300%.",
      imageQuery: "digital marketing analytics dashboard with charts",
      technologies: ["SEO", "Social Media", "PPC", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Healthcare Dashboard",
      category: "web",
      description: "Real-time healthcare analytics dashboard for medical professionals.",
      imageQuery: "healthcare analytics dashboard with patient data",
      technologies: ["Next.js", "D3.js", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "mobile",
      description: "On-demand food delivery app with real-time tracking and payment integration.",
      imageQuery: "food delivery mobile app interface",
      technologies: ["Flutter", "Firebase", "Google Maps", "PayPal"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  // Refs for scroll animations
  const [headerRef, headerInView] = useInView()
  const [filtersRef, filtersInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <section
      id="portfolio"
      style={{
        paddingTop: "80px", // py-20
        paddingBottom: "80px", // py-20
        backgroundColor: colors.background, // bg-[#222629] - distinct from previous gradient
      }}
    >
      <div
        className="portfolio-container-inner"
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
            <Globe style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.grayText }}>Our Work</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", // text-3xl sm:text-4xl lg:text-5xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              marginBottom: "24px", // mb-6
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              fontSize: "1.125rem", // text-lg
              color: colors.grayText, // text-[#6B6E70]
              maxWidth: "768px", // max-w-3xl
              margin: "0 auto", // mx-auto
            }}
          >
            Explore our portfolio of successful projects that showcase our expertise across different technologies and
            industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          ref={filtersRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px", // gap-4
            marginBottom: "48px", // mb-12
            opacity: filtersInView ? 1 : 0,
            transform: filtersInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px", // space-x-2
                padding: "12px 24px", // px-6 py-3
                borderRadius: "9999px", // rounded-full
                transition: "all 0.3s ease",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                ...(activeFilter === filter.id
                  ? {
                      background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                      color: colors.whiteText,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }
                  : {
                      backgroundColor: colors.cardBg, // bg-[#474B4F]/20
                      color: colors.grayText, // text-[#6B6E70]
                      "&:hover": {
                        backgroundColor: "rgba(71, 75, 79, 0.4)", // hover:bg-[#474B4F]/40
                        color: colors.whiteText, // hover:text-white
                      },
                    }),
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = "rgba(71, 75, 79, 0.4)"
                  e.currentTarget.style.color = colors.whiteText
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = colors.cardBg
                  e.currentTarget.style.color = colors.grayText
                }
              }}
            >
              <filter.icon style={{ height: "16px", width: "16px" }} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
            gap: "32px", // gap-8
            opacity: projectsInView ? 1 : 0,
            transform: projectsInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.5s",
          }}
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
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
                const image = e.currentTarget.querySelector(".project-image") as HTMLElement
                if (image) image.style.transform = "scale(1.1)" // group-hover:scale-110
                const overlay = e.currentTarget.querySelector(".project-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "1" // group-hover:opacity-100
                const title = e.currentTarget.querySelector(".project-title") as HTMLElement
                if (title) title.style.color = colors.accentGreen // group-hover:text-[#86C232]
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = "none"
                const image = e.currentTarget.querySelector(".project-image") as HTMLElement
                if (image) image.style.transform = "scale(1)"
                const overlay = e.currentTarget.querySelector(".project-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "0"
                const title = e.currentTarget.querySelector(".project-title") as HTMLElement
                if (title) title.style.color = colors.whiteText
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={`/placeholder.svg?height=300&width=400&query=${project.imageQuery}`}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "192px", // h-48
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  className="project-image"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: `linear-gradient(to top, ${colors.background}cc, transparent)`, // from-[#222629]/80
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "16px", // pb-4
                  }}
                  className="project-overlay"
                >
                  <div style={{ display: "flex", gap: "12px" }}>
                    {" "}
                    {/* space-x-3 */}
                    <Button
                      size="small"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                        color: colors.whiteText,
                        "&:hover": {
                          background: `linear-gradient(to right, ${colors.darkerGreen}, ${colors.accentGreen})`,
                        },
                        fontWeight: 600,
                        padding: "6px 12px", // px-3 py-1.5
                        borderRadius: "8px", // rounded-2
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // boxShadow: 3
                        textTransform: "none",
                      }}
                      startIcon={<ExternalLink style={{ height: "16px", width: "16px" }} />} // h-4 w-4
                    >
                      Live
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: colors.whiteText,
                        color: colors.whiteText,
                        background: "transparent",
                        "&:hover": {
                          background: colors.whiteText,
                          color: colors.background, // text-[#222629]
                          borderColor: colors.whiteText,
                        },
                        padding: "6px 12px", // px-3 py-1.5
                        borderRadius: "8px", // rounded-2
                        textTransform: "none",
                      }}
                      startIcon={<Github style={{ height: "16px", width: "16px" }} />} // h-4 w-4
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent style={{ padding: "24px" }}>
                {" "}
                {/* p-6 */}
                <h3
                  className="project-title"
                  style={{
                    fontSize: "1.25rem", // text-xl
                    fontWeight: "bold",
                    color: colors.whiteText, // text-white
                    marginBottom: "12px", // mb-3
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: colors.grayText, // text-[#6B6E70]
                    marginBottom: "16px", // mb-4
                    lineHeight: "1.6", // leading-relaxed
                  }}
                >
                  {project.description}
                </p>
                {/* Technologies */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {" "}
                  {/* flex flex-wrap gap-2 */}
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "4px 12px", // px-3 py-1
                        backgroundColor: `${colors.accentGreen}33`, // bg-[#86C232]/20
                        color: colors.accentGreen, // text-[#86C232]
                        fontSize: "0.75rem", // text-xs
                        fontWeight: "500", // font-medium
                        borderRadius: "9999px", // rounded-full
                        border: `1px solid ${colors.accentGreen}4d`, // border border-[#86C232]/30
                      }}
                    >
                      {tech}
                    </span>
                  ))}
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
            marginTop: "64px", // mt-16
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.7s",
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
              Have a Project in Mind?
            </h3>
            <p
              style={{
                color: colors.grayText, // text-[#6B6E70]
                marginBottom: "24px", // mb-6
              }}
            >
              Let's bring your ideas to life with our expertise and passion for innovation.
            </p>
            <Button
              sx={{
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
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Global styles for media queries and animations */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .portfolio-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .portfolio-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Projects Grid Layout */
          @media (min-width: 768px) { /* md:grid-cols-2 */
            .projects-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) { /* lg:grid-cols-3 */
            .projects-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
