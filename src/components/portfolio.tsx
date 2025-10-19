"use client"
import { useEffect, useState, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { ExternalLink, Github, Smartphone, Globe, Monitor, Megaphone } from 'lucide-react'

import ecommerce from "../assets/e-commmerce.jpg"
import fitness from "../assets/fitness-tracking.jpg"
import project from "../assets/project-management.jpg"
import marketing from "../assets/marketing 2.jpg"
import healthcare from "../assets/health-care.jpg"
import food from "../assets/food.jpg"

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

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

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
    textDark: "#143c3c",
    textLight: "#5D7A7A",
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
      image: ecommerce,
      description: "A comprehensive e-commerce solution with advanced inventory management and analytics.",
      imageQuery: "modern e-commerce website dashboard interface",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "mobile",
      image: fitness,
      description: "Cross-platform mobile app for fitness tracking with social features and AI coaching.",
      imageQuery: "sleek mobile fitness app interface design",
      technologies: ["React Native", "Firebase", "TensorFlow", "Redux"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 3,
      title: "Project Management Tool",
      category: "desktop",
      image: project,
      description: "Desktop application for project management with real-time collaboration features.",
      imageQuery: "desktop project management software interface",
      technologies: ["Electron", "Vue.js", "Socket.io", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 4,
      title: "Brand Marketing Campaign",
      category: "marketing",
      image: marketing,
      description: "Complete digital marketing campaign that increased brand awareness by 300%.",
      imageQuery: "digital marketing analytics dashboard with charts",
      technologies: ["SEO", "Social Media", "PPC", "Analytics"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 5,
      title: "Healthcare Dashboard",
      category: "web",
      image: healthcare,
      description: "Real-time healthcare analytics dashboard for medical professionals.",
      imageQuery: "healthcare analytics dashboard with patient data",
      technologies: ["Next.js", "D3.js", "Express", "MySQL"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "mobile",
      image: food,
      description: "On-demand food delivery app with real-time tracking and payment integration.",
      imageQuery: "food delivery mobile app interface design",
      technologies: ["Flutter", "Firebase", "Google Maps", "PayPal"],
      liveUrl: "",
      githubUrl: "",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

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
  const [filtersRef, filtersInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <section
      id="portfolio"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        background: `linear-gradient(120deg, ${colors.bgGradientStart}, ${colors.bgGradientEnd})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decorations */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 260, height: 260, borderRadius: "50%", background: `radial-gradient(closest-side, ${colors.primaryLight}26, transparent)` }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-60px", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(closest-side, ${colors.primary}22, transparent)` }} />
      </div>

      <div
        className="portfolio-container-inner"
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
            transitionDelay: "0.1s",
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
              }}
            >
              <Globe style={{ height: "16px", width: "16px", color: "#FFFFFF" }} />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.textDark,
                fontWeight: "600",
              }}
            >
              Our Work
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
            Featured Projects
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
            Explore our portfolio of successful projects that showcase our expertise across different technologies and
            industries.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div
          ref={filtersRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
            opacity: filtersInView ? 1 : 0,
            transform: filtersInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.3s",
          }}
        >
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "9999px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                fontWeight: "600",
                border: `1px solid ${colors.cardBorder}`,
                cursor: "pointer",
                transform: filtersInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${0.3 + index * 0.1}s`,
                fontSize: "0.9rem",
                ...(activeFilter === filter.id
                  ? {
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      color: "#FFFFFF",
                      boxShadow: colors.subtleShadow,
                    }
                  : {
                      backgroundColor: colors.cardBg,
                      color: colors.textLight,
                    }),
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = colors.primarySoft
                  e.currentTarget.style.color = colors.primary
                  e.currentTarget.style.transform = "translateY(-2px)"
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = colors.cardBg
                  e.currentTarget.style.color = colors.textLight
                  e.currentTarget.style.transform = "translateY(0)"
                }
              }}
            >
              <filter.icon style={{ height: "16px", width: "16px" }} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div
          ref={projectsRef}
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: projectsInView ? "scale(1) translateY(0)" : "scale(0.95) translateY(30px)",
                opacity: projectsInView ? 1 : 0,
                transitionDelay: projectsInView ? `${0.5 + index * 0.1}s` : "0s",
                boxShadow: colors.subtleShadow,
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)"
                e.currentTarget.style.borderColor = colors.primary
                e.currentTarget.style.boxShadow = colors.shadow
                const image = e.currentTarget.querySelector(".project-image") as HTMLElement
                if (image) image.style.transform = "scale(1.06)"
                const overlay = e.currentTarget.querySelector(".project-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "1"
                const title = e.currentTarget.querySelector(".project-title") as HTMLElement
                if (title) title.style.color = colors.primary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)"
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = String(colors.subtleShadow)
                const image = e.currentTarget.querySelector(".project-image") as HTMLElement
                if (image) image.style.transform = "scale(1)"
                const overlay = e.currentTarget.querySelector(".project-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "0"
                const title = e.currentTarget.querySelector(".project-title") as HTMLElement
                if (title) title.style.color = colors.heading
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="project-image"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: `linear-gradient(45deg, ${colors.primary}1A, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                  className="project-overlay"
                >
                  <Button
                    size="small"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      color: "#FFFFFF",
                      "&:hover": {
                        background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
                        transform: "scale(1.04)",
                      },
                      fontWeight: 700,
                      padding: "8px 16px",
                      borderRadius: "8px",
                      boxShadow: `0 4px 15px ${colors.primaryLight}40`,
                      textTransform: "none",
                      fontSize: "0.85rem",
                    }}
                    startIcon={<ExternalLink style={{ height: "14px", width: "14px" }} />}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: colors.primary,
                      color: colors.primary,
                      background: `${colors.primary}0F`,
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        background: `${colors.primary}14`,
                        color: colors.primary,
                        borderColor: colors.primary,
                        transform: "scale(1.03)",
                      },
                      padding: "8px 16px",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "0.85rem",
                    }}
                    startIcon={<Github style={{ height: "14px", width: "14px" }} />}
                  >
                    Code
                  </Button>
                </div>
              </div>
              <CardContent style={{ padding: "20px" }}>
                <h3
                  className="project-title"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "800",
                    color: colors.heading,
                    marginBottom: "10px",
                    transition: "color 0.3s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: colors.paragraph,
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        padding: "4px 10px",
                        backgroundColor: `${colors.primaryLight}26`,
                        color: colors.primary,
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        borderRadius: "9999px",
                        border: `1px solid ${colors.cardBorder}`,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${colors.primaryLight}33`
                        e.currentTarget.style.transform = "translateY(-1px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${colors.primaryLight}26`
                        e.currentTarget.style.transform = "translateY(0)"
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
            marginTop: "60px",
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.7s",
          }}
        >
          <div
            style={{
              background: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "24px",
              padding: "40px 32px",
              maxWidth: "800px",
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
                animation: "ctaRotate 20s linear infinite",
                opacity: 0.3,
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "900",
                  color: colors.heading,
                  marginBottom: "16px",
                }}
              >
                Have a Project in Mind?
              </h3>
              <p
                style={{
                  color: colors.paragraph,
                  marginBottom: "32px",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                  maxWidth: "500px",
                  margin: "0 auto 32px auto",
                }}
              >
                Let's bring your ideas to life with our expertise and passion for innovation.
              </p>
              <Button
                onClick={scrollToContact}
                sx={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                  color: "#FFFFFF",
                  fontWeight: "800",
                  padding: "16px 40px",
                  borderRadius: "12px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "scale(1)",
                  boxShadow: `0 8px 25px ${colors.primaryLight}40`,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  "&:hover": {
                    background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
                    transform: "scale(1.05) translateY(-2px)",
                    boxShadow: `0 15px 35px ${colors.primaryLight}60`,
                  },
                }}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes portfolioGalaxy {
            0% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-12px) translateX(8px); }
            66% { transform: translateY(-24px) translateX(-6px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes portfolioFloat {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-20px) translateX(12px); 
              opacity: 0.8;
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

          @media (min-width: 640px) {
            .portfolio-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .portfolio-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
