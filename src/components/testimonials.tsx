"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Star, Quote } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Custom hook for scroll-in-view animation (reused from other components)
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

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Define the color palette based on the consistent theme
  const colors = {
    backgroundStart: "rgba(71, 75, 79, 0.1)", // Transparent dark gray for gradient start
    backgroundEnd: "#222629", // Dark gray for gradient end
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

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      imageQuery: "professional man headshot",
      rating: 5,
      text: "Systoid transformed our vision into a reality. Their web application exceeded our expectations and helped us scale our business significantly. The team's professionalism and technical expertise are unmatched.",
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      imageQuery: "professional woman smiling",
      rating: 5,
      text: "The mobile app developed by Systoid has been a game-changer for our customer engagement. The user experience is seamless, and the app performance is outstanding. Highly recommended!",
    },
    {
      name: "Robert Johnson",
      role: "Founder, InnovateLab",
      company: "InnovateLab",
      imageQuery: "man in business casual",
      rating: 5,
      text: "Working with Systoid on our desktop application was an absolute pleasure. They delivered on time, within budget, and the quality of work was exceptional. We'll definitely work with them again.",
    },
    {
      name: "Sarah Wilson",
      role: "CMO, BrandBoost",
      company: "BrandBoost",
      imageQuery: "woman with glasses smiling",
      rating: 5,
      text: "Systoid's digital marketing expertise helped us increase our online presence by 400%. Their strategic approach and execution were flawless. They truly understand modern marketing.",
    },
    {
      name: "Michael Brown",
      role: "CTO, DataFlow Systems",
      company: "DataFlow Systems",
      imageQuery: "man in tech office",
      rating: 5,
      text: "The custom software solution provided by Systoid streamlined our operations and improved efficiency by 60%. Their technical team is incredibly skilled and responsive.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds
    return () => clearInterval(timer)
  }, [testimonials.length])

  // Refs for scroll animations
  const [headerRef, headerInView] = useInView()
  const [featuredTestimonialRef, featuredTestimonialInView] = useInView()
  const [allTestimonialsGridRef, allTestimonialsGridInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <section
      id="testimonials"
      style={{
        paddingTop: "80px", // py-20
        paddingBottom: "80px", // py-20
        background: `linear-gradient(to bottom, ${colors.backgroundStart}, ${colors.backgroundEnd})`, // bg-gradient-to-b from-[#474B4F]/10 to-[#222629]
      }}
    >
      <div
        className="testimonials-container-inner"
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
            <Star style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.grayText }}>Client Reviews</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", // text-3xl sm:text-4xl lg:text-5xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              marginBottom: "24px", // mb-6
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "1.125rem", // text-lg
              color: colors.grayText, // text-[#6B6E70]
              maxWidth: "768px", // max-w-3xl
              margin: "0 auto", // mx-auto
            }}
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Systoid.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          ref={featuredTestimonialRef}
          style={{
            maxWidth: "896px", // max-w-4xl
            margin: "0 auto 64px auto", // mx-auto mb-16
            opacity: featuredTestimonialInView ? 1 : 0,
            transform: featuredTestimonialInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          <Card
            style={{
              backgroundColor: `${colors.accentGreen}1a`, // bg-gradient-to-r from-[#86C232]/10 to-[#61892F]/10
              backdropFilter: "blur(4px)", // backdrop-blur-sm
              border: `1px solid ${colors.ctaBorder}`, // border-[#86C232]/20
              transition: "all 0.3s ease",
              transform: "scale(1)",
              boxShadow: "none",
              borderRadius: "12px", // rounded-xl
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${colors.accentGreen}66` // hover:border-[#86C232]/40
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.ctaBorder
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <CardContent
              style={{
                padding: "32px", // p-8 md:p-12
                textAlign: "center",
                transition: "opacity 0.5s ease-in-out", // For testimonial text transition
                opacity: 1, // Always visible, content changes
              }}
            >
              <Quote style={{ height: "48px", width: "48px", color: colors.accentGreen, margin: "0 auto 24px auto" }} />{" "}
              {/* h-12 w-12 text-[#86C232] mx-auto mb-6 */}
              <blockquote
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", // text-xl md:text-2xl
                  color: colors.whiteText, // text-white
                  fontWeight: "500", // font-medium
                  lineHeight: "1.6", // leading-relaxed
                  marginBottom: "32px", // mb-8
                  transition: "opacity 0.5s ease-in-out",
                }}
                key={currentTestimonial} // Key change forces re-render and transition
              >
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                {" "}
                {/* space-x-4 */}
                <img
                  src={`/placeholder.svg?height=80&width=80&query=${testimonials[currentTestimonial].imageQuery}`}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  style={{
                    borderRadius: "9999px", // rounded-full
                    border: `2px solid ${colors.accentGreen}`, // border-2 border-[#86C232]
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      color: colors.whiteText, // text-white
                      fontWeight: "bold",
                      fontSize: "1.125rem", // text-lg
                    }}
                  >
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div
                    style={{
                      color: colors.accentGreen, // text-[#86C232]
                      fontWeight: "500", // font-medium
                    }}
                  >
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div
                    style={{
                      color: colors.grayText, // text-[#6B6E70]
                      fontSize: "0.875rem", // text-sm
                    }}
                  >
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
              {/* Rating */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
                {" "}
                {/* mt-6 */}
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star
                    key={i}
                    style={{ height: "20px", width: "20px", color: colors.accentGreen, fill: "currentColor" }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Testimonial Navigation */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "32px", gap: "8px" }}>
            {" "}
            {/* mt-8 space-x-2 */}
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: "12px", // w-3
                  height: "12px", // h-3
                  borderRadius: "9999px", // rounded-full
                  transition: "all 0.3s ease",
                  backgroundColor: index === currentTestimonial ? colors.accentGreen : colors.grayText, // bg-[#86C232] : bg-[#6B6E70]
                  transform: index === currentTestimonial ? "scale(1.25)" : "scale(1)", // scale-125
                }}
                onMouseEnter={(e) => {
                  if (index !== currentTestimonial) {
                    e.currentTarget.style.backgroundColor = `${colors.accentGreen}80` // hover:bg-[#86C232]/50
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentTestimonial) {
                    e.currentTarget.style.backgroundColor = colors.grayText
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div
          ref={allTestimonialsGridRef}
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
            gap: "32px", // gap-8
            opacity: allTestimonialsGridInView ? 1 : 0,
            transform: allTestimonialsGridInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.5s",
          }}
        >
          {testimonials.map((testimonial, index) => (
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
                ...(index === currentTestimonial && {
                  boxShadow: `0 0 0 2px ${colors.accentGreen}80`, // ring-2 ring-[#86C232]/50
                }),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)" // hover:scale-105
                e.currentTarget.style.borderColor = `${colors.accentGreen}80` // hover:border-[#86C232]/50
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <CardContent style={{ padding: "24px" }}>
                {" "}
                {/* p-6 */}
                {/* Rating */}
                <div style={{ display: "flex", marginBottom: "16px" }}>
                  {" "}
                  {/* mb-4 */}
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      style={{ height: "16px", width: "16px", color: colors.accentGreen, fill: "currentColor" }}
                    />
                  ))}
                </div>
                {/* Testimonial Text */}
                <blockquote
                  style={{
                    color: colors.grayText, // text-[#6B6E70]
                    marginBottom: "24px", // mb-6
                    lineHeight: "1.6", // leading-relaxed
                  }}
                >
                  "{testimonial.text.substring(0, 120)}..."
                </blockquote>
                {/* Client Info */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {" "}
                  {/* space-x-3 */}
                  <img
                    src={`/placeholder.svg?height=50&width=50&query=${testimonial.imageQuery}`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "9999px", // rounded-full
                      border: `1px solid ${colors.accentGreen}`, // border border-[#86C232]
                    }}
                  />
                  <div>
                    <div
                      style={{
                        color: colors.whiteText, // text-white
                        fontWeight: "600", // font-semibold
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        color: colors.accentGreen, // text-[#86C232]
                        fontSize: "0.875rem", // text-sm
                      }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
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
              Ready to Join Our Success Stories?
            </h3>
            <p
              style={{
                color: colors.grayText, // text-[#6B6E70]
                marginBottom: "24px", // mb-6
              }}
            >
              Let's create something amazing together and add your success story to our growing list of satisfied
              clients.
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
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>

      {/* Global styles for media queries */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .testimonials-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .testimonials-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Testimonials Grid Layout */
          @media (min-width: 768px) { /* md:grid-cols-2 */
            .testimonials-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) { /* lg:grid-cols-3 */
            .testimonials-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>
    </section>
  )
}
