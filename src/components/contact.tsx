"use client"

import Card from "@mui/material/Card"
import type React from "react"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Mail, Phone, MapPin, Clock, Send, Calendar, Globe } from "lucide-react"
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

  // Light professional palette aligned with Hero/Header
  const colors = {
    bgLight: "#FFFFFF",
    bgGradientStart: "#FAFBFC",
    bgGradientEnd: "#FFFFFF",
    heading: "#0F172A",
    paragraph: "#334155",
    primary: "#1E40AF",
    primaryLight: "#60A5FA",
    primarySoft: "#EAF2FF",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E7EB",
    shadow: "0 15px 45px rgba(15, 23, 42, 0.1)",
    subtleShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
    textDark: "#0F172A",
    textLight: "#64748B",
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
      await new Promise((resolve) => setTimeout(resolve, 2000))
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
      details: "systoid.pk@gmail.com",
      subDetails: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+923027893040",
      subDetails: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "16-W Scheme No.2, Farid Town Sahiwal, Pakistan",
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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(120deg, ${colors.bgGradientStart}, ${colors.bgGradientEnd})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decorations */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(closest-side, ${colors.primaryLight}26, transparent)` }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(closest-side, ${colors.primary}22, transparent)` }} />
      </div>
      <div
        className="contact-container-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          padding: "20px 16px", // Responsive padding
        }}
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "24px",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "900",
              color: colors.heading,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Start Your Next Project
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
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss how we can help you
            achieve your goals.
          </p>
        </div>
        <div
          ref={mainContentRef}
          className="contact-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Default for smaller screens
            gap: "32px",
            opacity: mainContentInView ? 1 : 0,
            transform: mainContentInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {/* Enhanced Contact Information */}
          <div className="contact-info-col">
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "800",
                  color: colors.heading,
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Contact Information
              </h3>
              <p
                style={{
                  color: colors.textLight,
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
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "16px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)"
                    e.currentTarget.style.borderColor = colors.primary
                    e.currentTarget.style.boxShadow = String(colors.shadow)
                    const title = e.currentTarget.querySelector(".info-title") as HTMLElement
                    if (title) title.style.color = colors.primary
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.borderColor = colors.cardBorder
                    e.currentTarget.style.boxShadow = String(colors.subtleShadow)
                    const title = e.currentTarget.querySelector(".info-title") as HTMLElement
                    if (title) title.style.color = colors.heading
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 15px ${colors.primaryLight}40`,
                    }}
                  >
                    <info.icon style={{ height: "20px", width: "20px", color: "#FFFFFF" }} />
                  </div>
                  <div>
                    <h4
                      className="info-title"
                      style={{
                        color: colors.heading,
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
                        color: colors.primary,
                        fontWeight: "600",
                        marginBottom: "4px",
                        fontSize: "0.95rem",
                      }}
                    >
                      {info.details}
                    </p>
                    <p
                      style={{
                        color: colors.textLight,
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
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                  color: "#FFFFFF",
                  fontWeight: "700",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "scale(1)",
                  boxShadow: `0 8px 32px ${colors.primaryLight}40`,
                  textTransform: "none",
                  "&:hover": {
                    background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
                    transform: "scale(1.02) translateY(-2px)",
                    boxShadow: `0 12px 30px ${colors.primaryLight}60`,
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
                  borderColor: colors.cardBorder,
                  color: colors.textLight,
                  backgroundColor: colors.cardBg,
                  padding: "14px 24px",
                  borderRadius: "12px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: colors.primary,
                    color: "#FFFFFF",
                    borderColor: colors.primary,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${colors.primaryLight}40`,
                  },
                }}
              >
                <Globe style={{ marginRight: "8px", height: "18px", width: "18px" }} />
                View Our Portfolio
              </Button>
            </div>
          </div>
          {/* Enhanced Contact Form */}
          <Card
            className="contact-form-col"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              transition: "all 0.3s ease",
              boxShadow: colors.subtleShadow,
              borderRadius: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.primary
              e.currentTarget.style.boxShadow = String(colors.shadow)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.cardBorder
              e.currentTarget.style.boxShadow = String(colors.subtleShadow)
            }}
          >
            <CardContent style={{ padding: "32px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "800",
                  color: colors.heading,
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
                    backgroundColor: `${colors.primaryLight}20`,
                    border: `1px solid ${colors.primaryLight}60`,
                    borderRadius: "12px",
                    marginBottom: "24px",
                    color: colors.primary,
                    fontSize: "0.95rem",
                  }}
                >
                  {"✅ Message sent successfully! We'll get back to you soon."}
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
                  {"❌ Failed to send message. Please try again or contact us directly."}
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
                      margin="none"
                      variant="filled"
                      InputLabelProps={{
                        style: { color: colors.textLight },
                        sx: {
                          "&.Mui-focused": {
                            color: `${colors.primary} !important`,
                          },
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, 10px) scale(0.75)",
                          },
                        },
                      }}
                      InputProps={{
                        disableUnderline: true, // Remove underline for filled variant
                        style: {
                          color: colors.textDark,
                          background: colors.cardBg,
                          borderRadius: "12px",
                          padding: "16px 14px", // Adjust padding for label inside
                        },
                        sx: {
                          "& fieldset": { borderColor: colors.cardBorder },
                          "&:hover fieldset": { borderColor: `${colors.primary} !important` },
                          "&.Mui-focused fieldset": { borderColor: `${colors.primary} !important` },
                          "&.MuiFilledInput-root": {
                            backgroundColor: colors.cardBg,
                            "&:hover": { backgroundColor: colors.cardBg },
                            "&.Mui-focused": { backgroundColor: colors.cardBg },
                          },
                          border: `1px solid ${colors.cardBorder}`, // Add explicit border
                          "&:hover": { border: `1px solid ${colors.primary}` },
                          "&.Mui-focused": { border: `1px solid ${colors.primary}` },
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
                      margin="none"
                      variant="filled"
                      InputLabelProps={{
                        style: { color: colors.textLight },
                        sx: {
                          "&.Mui-focused": {
                            color: `${colors.primary} !important`,
                          },
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, 10px) scale(0.75)",
                          },
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: colors.textDark,
                          background: colors.cardBg,
                          borderRadius: "12px",
                          padding: "16px 14px",
                        },
                        sx: {
                          "& fieldset": { borderColor: colors.cardBorder },
                          "&:hover fieldset": { borderColor: `${colors.primary} !important` },
                          "&.Mui-focused fieldset": { borderColor: `${colors.primary} !important` },
                          "&.MuiFilledInput-root": {
                            backgroundColor: colors.cardBg,
                            "&:hover": { backgroundColor: colors.cardBg },
                            "&.Mui-focused": { backgroundColor: colors.cardBg },
                          },
                          border: `1px solid ${colors.cardBorder}`,
                          "&:hover": { border: `1px solid ${colors.primary}` },
                          "&.Mui-focused": { border: `1px solid ${colors.primary}` },
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
                      margin="none"
                      variant="filled"
                      InputLabelProps={{
                        style: { color: colors.textLight },
                        sx: {
                          "&.Mui-focused": {
                            color: `${colors.primary} !important`,
                          },
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, 10px) scale(0.75)",
                          },
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: colors.textDark,
                          background: colors.cardBg,
                          borderRadius: "12px",
                          padding: "16px 14px",
                        },
                        sx: {
                          "& fieldset": { borderColor: colors.cardBorder },
                          "&:hover fieldset": { borderColor: `${colors.primary} !important` },
                          "&.Mui-focused fieldset": { borderColor: `${colors.primary} !important` },
                          "&.MuiFilledInput-root": {
                            backgroundColor: colors.cardBg,
                            "&:hover": { backgroundColor: colors.cardBg },
                            "&.Mui-focused": { backgroundColor: colors.cardBg },
                          },
                          border: `1px solid ${colors.cardBorder}`,
                          "&:hover": { border: `1px solid ${colors.primary}` },
                          "&.Mui-focused": { border: `1px solid ${colors.primary}` },
                        },
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="service"
                      name="service"
                      select
                      label="Select a service..." // Adjusted label
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      fullWidth
                      margin="none"
                      variant="filled"
                      InputLabelProps={{
                        style: { color: colors.textLight },
                        sx: {
                          "&.Mui-focused": {
                            color: `${colors.primary} !important`,
                          },
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, 10px) scale(0.75)",
                          },
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: colors.textDark,
                          background: colors.cardBg,
                          borderRadius: "12px",
                          padding: "16px 14px",
                        },
                        sx: {
                          "& fieldset": { borderColor: colors.cardBorder },
                          "&:hover fieldset": { borderColor: `${colors.primary} !important` },
                          "&.Mui-focused fieldset": { borderColor: `${colors.primary} !important` },
                          "&.MuiFilledInput-root": {
                            backgroundColor: colors.cardBg,
                            "&:hover": { backgroundColor: colors.cardBg },
                            "&.Mui-focused": { backgroundColor: colors.cardBg },
                          },
                          border: `1px solid ${colors.cardBorder}`,
                          "&:hover": { border: `1px solid ${colors.primary}` },
                          "&.Mui-focused": { border: `1px solid ${colors.primary}` },
                        },
                      }}
                      SelectProps={{
                        native: true,
                        style: { color: colors.textDark },
                        sx: {
                          "& .MuiSelect-icon": { color: colors.textLight }, // Style dropdown arrow
                        },
                      }}
                    >
                      <option value="" style={{ backgroundColor: colors.cardBg, color: colors.textLight }}>
                        Select a service...
                      </option>
                      {services.map((service, index) => (
                        <option
                          key={index}
                          value={service}
                          style={{ backgroundColor: colors.cardBg, color: colors.textDark }}
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
                    margin="none" // Adjusted margin
                    variant="filled" // Changed to filled variant
                    InputLabelProps={{
                      style: { color: colors.textLight },
                      sx: {
                        "&.Mui-focused": {
                          color: `${colors.primary} !important`,
                        },
                        "&.MuiInputLabel-shrink": {
                          transform: "translate(14px, 10px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        color: colors.textDark,
                        background: colors.cardBg,
                        borderRadius: "12px",
                        padding: "16px 14px",
                      },
                      sx: {
                        "& fieldset": { borderColor: colors.cardBorder },
                        "&:hover fieldset": { borderColor: `${colors.primary} !important` },
                        "&.Mui-focused fieldset": { borderColor: `${colors.primary} !important` },
                        "&.MuiFilledInput-root": {
                          backgroundColor: colors.cardBg,
                          "&:hover": { backgroundColor: colors.cardBg },
                          "&.Mui-focused": { backgroundColor: colors.cardBg },
                        },
                        border: `1px solid ${colors.cardBorder}`,
                        "&:hover": { border: `1px solid ${colors.primary}` },
                        "&.Mui-focused": { border: `1px solid ${colors.primary}` },
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
                      ? colors.textLight
                      : `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                    color: "#FFFFFF",
                    fontWeight: "800",
                    padding: "16px 24px",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: "scale(1)",
                    boxShadow: `0 8px 25px ${colors.primaryLight}40`,
                    textTransform: "none",
                    fontSize: "1.05rem",
                    '&.Mui-disabled': {
                      background: colors.textLight,
                      color: '#FFFFFF',
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
                  backgroundColor: colors.cardBg,
                  borderRadius: "16px",
                  border: `1px solid ${colors.cardBorder}`,
                  boxShadow: String(colors.subtleShadow),
                }}
              >
                <h4
                  style={{
                    color: colors.heading,
                    fontWeight: "700",
                    marginBottom: "12px",
                    fontSize: "1.05rem",
                  }}
                >
                  What happens next?
                </h4>
                <ul
                  style={{
                    color: colors.textLight,
                    fontSize: "0.9rem",
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li>{"• We'll review your message within 24 hours"}</li>
                  <li>{"• Schedule a discovery call to discuss your project"}</li>
                  <li>{"• Provide a detailed proposal and timeline"}</li>
                  <li>{"• Start building your dream project"}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
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
              background: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "24px",
              boxShadow: String(colors.subtleShadow),
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
            <CardContent style={{ padding: "40px", textAlign: "center", position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "900",
                  color: colors.heading,
                  marginBottom: "16px",
                }}
              >
                Prefer to Talk Directly?
              </h3>
              <p
                style={{
                  color: colors.paragraph,
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
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                    color: "#FFFFFF",
                    fontWeight: "800",
                    padding: "16px 32px",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: "scale(1)",
                    boxShadow: `0 0 30px ${colors.primaryLight}40`,
                    textTransform: "none",
                    fontSize: "1.05rem",
                    "&:hover": {
                      background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
                      transform: "scale(1.05) translateY(-2px)",
                      boxShadow: `0 12px 30px ${colors.primaryLight}60`,
                    },
                  }}
                >
                  <Phone style={{ marginRight: "8px", height: "18px", width: "18px" }} />
                  Book a Call
                </Button>
                <Button
                  variant="contained"
                  href="mailto:husnainakram336@gmail.com"
                  sx={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                    color: "#FFFFFF",
                    border: `1px solid ${colors.primary}`,
                    padding: "16px 32px",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    textTransform: "none",
                    fontSize: "1.05rem",
                    boxShadow: `0 0 30px ${colors.primaryLight}20`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
                      color: "#FFFFFF",
                      borderColor: colors.primary,
                      transform: "translateY(-2px)",
                      boxShadow: `0 0 40px ${colors.primaryLight}40`,
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
      {/* Enhanced Animations and Responsive Styles */}
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

        /* Responsive adjustments */
        @media (max-width: 767px) { /* For small screens */
          #contact {
            padding: 20px 0 !important; /* Reduce vertical padding */
          }
          .contact-container-inner {
            padding: 0 10px !important; /* Reduce horizontal padding */
          }
          .contact-main-grid {
            gap: 20px !important; /* Reduce gap */
          }
          .form-grid-cols {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important; /* Ensure single column on small screens */
          }
          .bottom-cta-buttons {
            flex-direction: column !important; /* Ensure buttons stack */
          }
        }

        @media (min-width: 768px) { /* For medium screens */
          .contact-container-inner {
            padding-left: 24px;
            padding-right: 24px;
          }
          .form-grid-cols {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important; /* Two columns for form fields */
          }
        }

        @media (min-width: 1024px) { /* For large screens */
          .contact-container-inner {
            padding-left: 32px;
            padding-right: 32px;
          }
          .contact-main-grid {
            grid-template-columns: 1fr 2fr !important; /* 1/3 for info, 2/3 for form */
          }
          .contact-info-col {
            grid-column: span 1;
          }
          .contact-form-col {
            grid-column: span 1 / span 2; /* Span the remaining 2/3 of the grid */
          }
        }
      `}
      </style>
    </section>
  )
}
