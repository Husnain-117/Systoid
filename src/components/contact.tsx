"use client"
import Card from "@mui/material/Card"
import type React from "react"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from 'lucide-react'
import { useState, useEffect, useRef } from "react"

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
    inputBg: "#0F1419",
    inputBorder: "#8B9DC3",
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "husnainn.akram@gmail.com",
      subDetails: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+923087816472",
      subDetails: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Sahiwal, Pakistan",
      subDetails: "Postal Code : 57000",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon-Fri: 9AM-6PM",
      subDetails: "Weekend: By appointment",
    },
  ]

  const services = [
    "Web Application Development",
    "Mobile App Development",
    "Desktop Application",
    "Digital Marketing",
    "Software Solutions",
    "UI/UX Design",
    "Consulting",
    "Other",
  ]

  const [headerRef, headerInView] = useInView()
  const [mainContentRef, mainContentInView] = useInView()
  const [bottomCtaRef, bottomCtaInView] = useInView()

  return (
    <section
      id="contact"
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
              radial-gradient(circle at 25% 40%, ${colors.electricCyan}10 1px, transparent 1px),
              radial-gradient(circle at 75% 20%, ${colors.vibrantGreen}08 1px, transparent 1px),
              radial-gradient(circle at 50% 80%, ${colors.electricCyan}06 1px, transparent 1px)
            `,
            backgroundSize: "160px 160px, 200px 200px, 180px 180px",
            animation: "contactGalaxy 20s linear infinite",
            opacity: 0.4,
          }}
        />
        
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "20%",
            width: "160px",
            height: "160px",
            background: `radial-gradient(circle, ${colors.electricCyan}15, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "contactFloat 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            left: "15%",
            width: "200px",
            height: "200px",
            background: `radial-gradient(circle, ${colors.vibrantGreen}12, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            animation: "contactFloat 14s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className="contact-container-inner"
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
                padding: "6px",
                animation: "iconPulse 3s ease-in-out infinite",
              }}
            >
              <MessageCircle style={{ height: "16px", width: "16px", color: colors.pureWhite }} />
            </div>
            <span
              style={{
                fontSize: "0.95rem",
                color: colors.warmGray,
                fontWeight: "600",
              }}
            >
              Get In Touch
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
            Let's Start Your Next Project
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
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss how we can help you
            achieve your goals.
          </p>
        </div>

        <div
          ref={mainContentRef}
          className="contact-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "40px",
            opacity: mainContentInView ? 1 : 0,
            transform: mainContentInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {/* Enhanced Contact Information */}
          <div className="lg:col-span-1">
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "800",
                  color: colors.pureWhite,
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Contact Information
              </h3>
              <p
                style={{
                  color: colors.warmGray,
                  marginBottom: "32px",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}
              >
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>
            
            {/* Enhanced Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "20px",
                    backgroundColor: colors.cardBg,
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "16px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)"
                    e.currentTarget.style.borderColor = colors.electricCyan
                    e.currentTarget.style.boxShadow = `0 8px 25px ${colors.electricCyan}30`
                    const title = e.currentTarget.querySelector(".info-title") as HTMLElement
                    if (title) title.style.color = colors.electricCyan
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.borderColor = colors.cardBorder
                    e.currentTarget.style.boxShadow = "none"
                    const title = e.currentTarget.querySelector(".info-title") as HTMLElement
                    if (title) title.style.color = colors.pureWhite
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 15px ${colors.electricCyan}40`,
                    }}
                  >
                    <info.icon style={{ height: "20px", width: "20px", color: colors.pureWhite }} />
                  </div>
                  <div>
                    <h4
                      className="info-title"
                      style={{
                        color: colors.pureWhite,
                        fontWeight: "700",
                        marginBottom: "4px",
                        transition: "color 0.3s ease",
                        fontSize: "1rem",
                      }}
                    >
                      {info.title}
                    </h4>
                    <p
                      style={{
                        color: colors.electricCyan,
                        fontWeight: "600",
                        marginBottom: "4px",
                        fontSize: "0.95rem",
                      }}
                    >
                      {info.details}
                    </p>
                    <p
                      style={{
                        color: colors.warmGray,
                        fontSize: "0.85rem",
                      }}
                    >
                      {info.subDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Quick Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "32px" }}>
              <Button
                sx={{
                  width: "100%",
                  background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                  color: colors.deepNavy,
                  fontWeight: "700",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "scale(1)",
                  boxShadow: `0 8px 25px ${colors.electricCyan}40`,
                  textTransform: "none",
                  "&:hover": {
                    background: `linear-gradient(135deg, ${colors.vibrantGreen}, ${colors.electricCyan})`,
                    transform: "scale(1.02) translateY(-2px)",
                    boxShadow: `0 12px 30px ${colors.electricCyan}60`,
                  },
                }}
              >
                <Calendar style={{ marginRight: "8px", height: "18px", width: "18px" }} />
                Schedule a Meeting
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  borderColor: colors.warmGray,
                  color: colors.warmGray,
                  backgroundColor: colors.cardBg,
                  backdropFilter: "blur(20px) saturate(180%)",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: colors.electricCyan,
                    color: colors.deepNavy,
                    borderColor: colors.electricCyan,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${colors.electricCyan}40`,
                  },
                }}
              >
                <Globe style={{ marginRight: "8px", height: "18px", width: "18px" }} />
                View Our Portfolio
              </Button>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card
              style={{
                backgroundColor: colors.cardBg,
                backdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${colors.cardBorder}`,
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                borderRadius: "20px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${colors.electricCyan}60`
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)"
              }}
            >
              <CardContent style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "800",
                    color: colors.pureWhite,
                    marginBottom: "24px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Send us a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div
                    style={{
                      padding: "16px",
                      backgroundColor: `${colors.vibrantGreen}20`,
                      border: `1px solid ${colors.vibrantGreen}60`,
                      borderRadius: "12px",
                      marginBottom: "24px",
                      color: colors.vibrantGreen,
                      fontSize: "0.95rem",
                    }}
                  >
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    style={{
                      padding: "16px",
                      backgroundColor: "rgba(220, 53, 69, 0.1)",
                      border: "1px solid rgba(220, 53, 69, 0.3)",
                      borderRadius: "12px",
                      marginBottom: "24px",
                      color: "#dc3545",
                      fontSize: "0.95rem",
                    }}
                  >
                    ❌ Failed to send message. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Name and Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                      gap: "20px",
                    }}
                    className="form-grid-cols"
                  >
                    <div>
                      <TextField
                        id="name"
                        name="name"
                        label="Full Name *"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: colors.warmGray },
                          sx: {
                            "&.Mui-focused": {
                              color: `${colors.electricCyan} !important`,
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            color: colors.pureWhite,
                            background: colors.inputBg,
                            borderRadius: "12px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.electricCyan} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.electricCyan} !important` },
                          },
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        id="email"
                        name="email"
                        label="Email Address *"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: colors.warmGray },
                          sx: {
                            "&.Mui-focused": {
                              color: `${colors.electricCyan} !important`,
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            color: colors.pureWhite,
                            background: colors.inputBg,
                            borderRadius: "12px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.electricCyan} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.electricCyan} !important` },
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Company and Service */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                      gap: "20px",
                    }}
                    className="form-grid-cols"
                  >
                    <div>
                      <TextField
                        id="company"
                        name="company"
                        label="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: colors.warmGray },
                          sx: {
                            "&.Mui-focused": {
                              color: `${colors.electricCyan} !important`,
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            color: colors.pureWhite,
                            background: colors.inputBg,
                            borderRadius: "12px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.electricCyan} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.electricCyan} !important` },
                          },
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        id="service"
                        name="service"
                        select
                        label="Service Interested In *"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: colors.warmGray },
                          sx: {
                            "&.Mui-focused": {
                              color: `${colors.electricCyan} !important`,
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            color: colors.pureWhite,
                            background: colors.inputBg,
                            borderRadius: "12px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.electricCyan} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.electricCyan} !important` },
                          },
                        }}
                        SelectProps={{
                          native: true,
                          style: { color: colors.pureWhite },
                        }}
                      >
                        <option value="" style={{ backgroundColor: colors.inputBg, color: colors.warmGray }}>
                          Select a service
                        </option>
                        {services.map((service, index) => (
                          <option
                            key={index}
                            value={service}
                            style={{ backgroundColor: colors.inputBg, color: colors.pureWhite }}
                          >
                            {service}
                          </option>
                        ))}
                      </TextField>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <TextField
                      id="message"
                      name="message"
                      label="Project Details *"
                      required
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: colors.warmGray },
                        sx: {
                          "&.Mui-focused": {
                            color: `${colors.electricCyan} !important`,
                          },
                        },
                      }}
                      InputProps={{
                        style: {
                          color: colors.pureWhite,
                          background: colors.inputBg,
                          borderRadius: "12px",
                        },
                        sx: {
                          "& fieldset": { borderColor: colors.inputBorder },
                          "&:hover fieldset": { borderColor: `${colors.electricCyan} !important` },
                          "&.Mui-focused fieldset": { borderColor: `${colors.electricCyan} !important` },
                        },
                      }}
                    />
                  </div>

                  {/* Enhanced Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{
                      width: "100%",
                      background: isSubmitting
                        ? colors.warmGray
                        : `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                      color: colors.deepNavy,
                      fontWeight: "800",
                      padding: "16px 24px",
                      borderRadius: "12px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: "scale(1)",
                      boxShadow: `0 8px 25px ${colors.electricCyan}40`,
                      textTransform: "none",
                      fontSize: "1.05rem",
                      "&:hover": !isSubmitting
                        ? {
                            background: `linear-gradient(135deg, ${colors.vibrantGreen}, ${colors.electricCyan})`,
                            transform: "scale(1.02) translateY(-2px)",
                            boxShadow: `0 12px 30px ${colors.electricCyan}60`,
                          }
                        : {},
                      "&:disabled": {
                        background: colors.warmGray,
                        color: colors.pureWhite,
                        opacity: 0.7,
                      },
                    }}
                  >
                    <Send
                      style={{
                        marginRight: "8px",
                        height: "18px",
                        width: "18px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* Enhanced Additional Info */}
                <div
                  style={{
                    marginTop: "32px",
                    padding: "24px",
                    backgroundColor: `${colors.electricCyan}10`,
                    borderRadius: "16px",
                    border: `1px solid ${colors.cardBorder}`,
                  }}
                >
                  <h4
                    style={{
                      color: colors.pureWhite,
                      fontWeight: "700",
                      marginBottom: "12px",
                      fontSize: "1.05rem",
                    }}
                  >
                    What happens next?
                  </h4>
                  <ul
                    style={{
                      color: colors.warmGray,
                      fontSize: "0.9rem",
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <li>• We'll review your message within 24 hours</li>
                    <li>• Schedule a discovery call to discuss your project</li>
                    <li>• Provide a detailed proposal and timeline</li>
                    <li>• Start building your dream project</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div
          ref={bottomCtaRef}
          style={{
            marginTop: "60px",
            opacity: bottomCtaInView ? 1 : 0,
            transform: bottomCtaInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.5s",
          }}
        >
          <Card
            style={{
              background: colors.glassMorphism,
              backdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `conic-gradient(from 0deg, ${colors.electricCyan}08, ${colors.vibrantGreen}08, transparent)`,
                animation: "ctaRotate 20s linear infinite",
                opacity: 0.3,
              }}
            />
            <CardContent style={{ padding: "40px", textAlign: "center", position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "900",
                  color: colors.pureWhite,
                  marginBottom: "16px",
                  textShadow: `0 0 30px ${colors.electricCyan}40`,
                }}
              >
                Prefer to Talk Directly?
              </h3>
              <p
                style={{
                  color: colors.warmGray,
                  marginBottom: "32px",
                  maxWidth: "600px",
                  margin: "0 auto 32px auto",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                }}
              >
                Sometimes it's easier to just have a conversation. Book a free 30-minute consultation call with our team
                to discuss your project requirements.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
                className="bottom-cta-buttons"
              >
                <Button
                  sx={{
                    background: `linear-gradient(135deg, ${colors.electricCyan}, ${colors.vibrantGreen})`,
                    color: colors.deepNavy,
                    fontWeight: "800",
                    padding: "16px 32px",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: "scale(1)",
                    boxShadow: `0 8px 25px ${colors.electricCyan}40`,
                    textTransform: "none",
                    fontSize: "1.05rem",
                    "&:hover": {
                      background: `linear-gradient(135deg, ${colors.vibrantGreen}, ${colors.electricCyan})`,
                      transform: "scale(1.05) translateY(-2px)",
                      boxShadow: `0 12px 30px ${colors.electricCyan}60`,
                    },
                  }}
                >
                  <Phone style={{ marginRight: "8px", height: "18px", width: "18px" }} />
                  Book a Call
                </Button>
                <Button
                  variant="outlined"
                  href="mailto:husnainakram336@gmail.com"
                  sx={{
                    borderColor: colors.warmGray,
                    color: colors.warmGray,
                    backgroundColor: colors.cardBg,
                    backdropFilter: "blur(20px) saturate(180%)",
                    padding: "16px 32px",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    textTransform: "none",
                    fontSize: "1.05rem",
                    "&:hover": {
                      backgroundColor: colors.electricCyan,
                      color: colors.deepNavy,
                      borderColor: colors.electricCyan,
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${colors.electricCyan}40`,
                    },
                  }}
                >
                  <Mail style={{ marginRight: "8px", height: "18px", width: "18px" }} />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes contactGalaxy {
            0% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-8px) translateX(5px); }
            66% { transform: translateY(-16px) translateX(-3px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes contactFloat {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-15px) translateX(8px); 
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
            .contact-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) {
            .contact-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 1024px) {
            .contact-main-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }

          @media (min-width: 768px) {
            .form-grid-cols {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (min-width: 640px) {
            .bottom-cta-buttons {
              flex-direction: row !important;
              gap: 16px !important;
            }
          }
        `}
      </style>
    </section>
  )
}
