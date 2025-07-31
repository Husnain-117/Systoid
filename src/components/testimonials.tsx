"use client"
import { useState, useEffect, useRef } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Star, Quote } from "lucide-react"

// Import profile images
import profile1 from "../assets/person1.jpg";
import profile2 from "../assets/person2.jpg";
import profile3 from "../assets/person3.jpg";
import profile4 from "../assets/person4.jpg";
import profile5 from "../assets/person2.jpg";

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
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

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: profile1,
      rating: 5,
      text: "Systoid transformed our vision into a reality. Their web application exceeded our expectations and helped us scale our business significantly. The team's professionalism and technical expertise are unmatched.",
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      image: profile2,
      rating: 5,
      text: "The mobile app developed by Systoid has been a game-changer for our customer engagement. The user experience is seamless, and the app performance is outstanding. Highly recommended!",
    },
    {
      name: "Robert Johnson",
      role: "Founder, InnovateLab",
      company: "InnovateLab",
      image: profile3,
      rating: 5,
      text: "Working with Systoid on our desktop application was an absolute pleasure. They delivered on time, within budget, and the quality of work was exceptional. We'll definitely work with them again.",
    },
    {
      name: "Sarah Wilson",
      role: "CMO, BrandBoost",
      company: "BrandBoost",
      image: profile4,
      rating: 5,
      text: "Systoid's digital marketing expertise helped us increase our online presence by 400%. Their strategic approach and execution were flawless. They truly understand modern marketing.",
    },
    {
      name: "Michael Brown",
      role: "CTO, DataFlow Systems",
      company: "DataFlow Systems",
      image: profile5,
      rating: 5,
      text: "The custom software solution provided by Systoid streamlined our operations and improved efficiency by 60%. Their technical team is incredibly skilled and responsive.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const [headerRef, headerInView] = useInView()
  const [featuredTestimonialRef, featuredTestimonialInView] = useInView()
  const [allTestimonialsGridRef, allTestimonialsGridInView] = useInView()

  return (
    <section
      id="testimonials"
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
              radial-gradient(circle at 35% 25%, ${colors.electricCyan}10 1px, transparent 1px),
              radial-gradient(circle at 65% 75%, ${colors.vibrantGreen}08 1px, transparent 1px),
              radial-gradient(circle at 15% 85%, ${colors.electricCyan}06 1px, transparent 1px)
            `,
            backgroundSize: "140px 140px, 180px 180px, 120px 120px",
            animation: "testimonialsGalaxy 24s linear infinite",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "140px",
            height: "140px",
            background: `radial-gradient(circle, ${colors.electricCyan}15, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(35px)",
            animation: "testimonialsFloat1 11s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            right: "12%",
            width: "180px",
            height: "180px",
            background: `radial-gradient(circle, ${colors.vibrantGreen}12, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(45px)",
            animation: "testimonialsFloat2 15s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className="testimonials-container-inner"
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
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
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
                padding: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "iconPulse 3s ease-in-out infinite",
              }}
            >
              <Quote style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.warmGray,
                fontWeight: "600",
              }}
            >
              Client Testimonials
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
            What Our Clients Say
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
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Systoid.
          </p>
        </div>

        {/* Enhanced Featured Testimonial */}
        <div
          ref={featuredTestimonialRef}
          style={{
            marginBottom: "60px",
            opacity: featuredTestimonialInView ? 1 : 0,
            transform: featuredTestimonialInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.3s",
          }}
        >
          <Card
            style={{
              backgroundColor: colors.cardBg,
              backdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              position: "relative",
              overflow: "hidden",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `conic-gradient(from 0deg, ${colors.electricCyan}08, ${colors.vibrantGreen}08, transparent)`,
                animation: "testimonialRotate 25s linear infinite",
                opacity: 0.3,
              }}
            />
            <CardContent style={{ padding: "48px 40px", position: "relative", zIndex: 2 }}>
              <div
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `3px solid ${colors.electricCyan}`,
                      boxShadow: `0 0 20px ${colors.electricCyan}40`,
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "800",
                        color: colors.pureWhite,
                        marginBottom: "4px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p
                      style={{
                        color: colors.electricCyan,
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p
                      style={{
                        color: colors.warmGray,
                        fontSize: "0.9rem",
                      }}
                    >
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={prevTestimonial}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      border: `2px solid ${colors.electricCyan}`,
                      backgroundColor: `${colors.electricCyan}20`,
                      color: colors.electricCyan,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 4px 15px ${colors.electricCyan}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.electricCyan
                      e.currentTarget.style.color = colors.deepNavy
                      e.currentTarget.style.borderColor = colors.electricCyan
                      e.currentTarget.style.transform = "scale(1.1)"
                      e.currentTarget.style.boxShadow = `0 6px 20px ${colors.electricCyan}50`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.electricCyan}20`
                      e.currentTarget.style.color = colors.electricCyan
                      e.currentTarget.style.borderColor = colors.electricCyan
                      e.currentTarget.style.transform = "scale(1)"
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.electricCyan}30`
                    }}
                  >
                    {/* CSS Arrow pointing left */}
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderRight: `10px solid currentColor`,
                        transition: "all 0.3s ease",
                      }}
                    />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      border: `2px solid ${colors.electricCyan}`,
                      backgroundColor: `${colors.electricCyan}20`,
                      color: colors.electricCyan,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 4px 15px ${colors.electricCyan}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.electricCyan
                      e.currentTarget.style.color = colors.deepNavy
                      e.currentTarget.style.borderColor = colors.electricCyan
                      e.currentTarget.style.transform = "scale(1.1)"
                      e.currentTarget.style.boxShadow = `0 6px 20px ${colors.electricCyan}50`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.electricCyan}20`
                      e.currentTarget.style.color = colors.electricCyan
                      e.currentTarget.style.borderColor = colors.electricCyan
                      e.currentTarget.style.transform = "scale(1)"
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.electricCyan}30`
                    }}
                  >
                    {/* CSS Arrow pointing right */}
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderLeft: `10px solid currentColor`,
                        transition: "all 0.3s ease",
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* Rating Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "24px" }}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      height: "20px",
                      width: "20px",
                      fill: colors.vibrantGreen,
                      color: colors.vibrantGreen,
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: colors.warmGray,
                  fontStyle: "italic",
                  position: "relative",
                  paddingLeft: "32px",
                  marginBottom: "24px",
                }}
              >
                <Quote
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    height: "24px",
                    width: "24px",
                    color: colors.electricCyan,
                    opacity: 0.6,
                  }}
                />
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Testimonial Progress Indicators */}
<div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
  {testimonials.map((_, index) => (
    <div
      key={index}
      onClick={() => setCurrentTestimonial(index)}
      style={{
        position: "relative",
        height: "4px",
        width: "50px",
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
          width: index === currentTestimonial ? "100%" : "0%",
          background: `linear-gradient(90deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
          borderRadius: "2px",
          transition: "width 0.5s ease",
          boxShadow: index === currentTestimonial ? `0 0 8px ${colors.electricCyan}60` : "none",
        }}
      />
    </div>
  ))}
</div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced All Testimonials Grid */}
        <div
          ref={allTestimonialsGridRef}
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "24px",
            opacity: allTestimonialsGridInView ? 1 : 0,
            transform: allTestimonialsGridInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.5s",
          }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: colors.cardBg,
                backdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
                e.currentTarget.style.borderColor = colors.electricCyan
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.25), 0 0 0 1px ${colors.electricCyan}60`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)"
              }}
            >
              <CardContent style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `2px solid ${colors.electricCyan}`,
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "800",
                        color: colors.pureWhite,
                        marginBottom: "4px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      style={{
                        color: colors.electricCyan,
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      style={{
                        height: "16px",
                        width: "16px",
                        fill: colors.vibrantGreen,
                        color: colors.vibrantGreen,
                      }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    color: colors.warmGray,
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text.substring(0, 120)}..."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes testimonialsGalaxy {
            0% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-6px) translateX(4px); }
            66% { transform: translateY(-12px) translateX(-3px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes testimonialsFloat1 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-12px) translateX(8px); 
              opacity: 0.8;
            }
          }

          @keyframes testimonialsFloat2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.5;
            }
            50% { 
              transform: translateY(10px) translateX(-6px); 
              opacity: 0.7;
            }
          }

          @keyframes iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          @keyframes testimonialRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @media (min-width: 640px) {
            .testimonials-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .testimonials-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 768px) {
            .testimonials-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) {
            .testimonials-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
