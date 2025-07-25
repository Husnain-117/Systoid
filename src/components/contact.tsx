"use client"
import Card from "@mui/material/Card"
import type React from "react"

import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Custom hook for scroll-in-view animation (reused from About and Portfolio components)
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

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
    inputBg: "#222629", // Dark background for text fields
    inputBorder: "#6B6E70", // Border for text fields
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@Systoid.com",
      subDetails: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subDetails: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Silicon Valley",
      subDetails: "CA 94000, United States",
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

  // Refs for scroll animations
  const [headerRef, headerInView] = useInView()
  const [mainContentRef, mainContentInView] = useInView()
  const [bottomCtaRef, bottomCtaInView] = useInView()

  return (
    <section
      id="contact"
      style={{
        paddingTop: "80px", // py-20
        paddingBottom: "80px", // py-20
        backgroundColor: colors.background, // bg-[#222629]
      }}
    >
      <div
        className="contact-container-inner"
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
            <MessageCircle style={{ height: "16px", width: "16px", color: colors.accentGreen }} />
            <span style={{ fontSize: "0.875rem", color: colors.grayText }}>Get In Touch</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", // text-3xl sm:text-4xl lg:text-5xl
              fontWeight: "bold",
              color: colors.whiteText, // text-white
              marginBottom: "24px", // mb-6
            }}
          >
            Let's Start Your Next Project
          </h2>
          <p
            style={{
              fontSize: "1.125rem", // text-lg
              color: colors.grayText, // text-[#6B6E70]
              maxWidth: "768px", // max-w-3xl
              margin: "0 auto", // mx-auto
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
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
            gap: "48px", // gap-12
            opacity: mainContentInView ? 1 : 0,
            transform: mainContentInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "1.5rem", // text-2xl
                  fontWeight: "bold",
                  color: colors.whiteText, // text-white
                  marginBottom: "24px", // mb-6
                }}
              >
                Contact Information
              </h3>
              <p
                style={{
                  color: colors.grayText, // text-[#6B6E70]
                  marginBottom: "32px", // mb-8
                }}
              >
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>
            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {" "}
              {/* space-y-6 */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px", // space-x-4
                    transition: "transform 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)"
                    const title = e.currentTarget.querySelector(".info-title") as HTMLElement
                    if (title) title.style.color = colors.accentGreen
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)"
                    const title = e.currentTarget.querySelector(".info-title") as HTMLElement
                    if (title) title.style.color = colors.whiteText
                  }}
                >
                  <div
                    style={{
                      width: "48px", // w-12
                      height: "48px", // h-12
                      background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                      borderRadius: "8px", // rounded-lg
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <info.icon style={{ height: "24px", width: "24px", color: colors.whiteText }} />
                  </div>
                  <div>
                    <h4
                      className="info-title"
                      style={{
                        color: colors.whiteText, // text-white
                        fontWeight: "600", // font-semibold
                        marginBottom: "4px", // mb-1
                        transition: "color 0.3s ease",
                      }}
                    >
                      {info.title}
                    </h4>
                    <p
                      style={{
                        color: colors.accentGreen, // text-[#86C232]
                        fontWeight: "500", // font-medium
                      }}
                    >
                      {info.details}
                    </p>
                    <p
                      style={{
                        color: colors.grayText, // text-[#6B6E70]
                        fontSize: "0.875rem", // text-sm
                      }}
                    >
                      {info.subDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Quick Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "32px" }}>
              {" "}
              {/* space-y-4 pt-8 */}
              <Button
                sx={{
                  width: "100%", // w-full
                  background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                  color: colors.whiteText, // text-white
                  fontWeight: "600", // font-semibold
                  padding: "12px 24px", // py-3
                  borderRadius: "8px", // rounded-lg
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  "&:hover": {
                    background: `linear-gradient(to right, ${colors.darkerGreen}, ${colors.accentGreen})`,
                    transform: "scale(1.02)", // hover:scale-105
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <Calendar style={{ marginRight: "8px", height: "20px", width: "20px" }} /> {/* mr-2 h-5 w-5 */}
                Schedule a Meeting
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "100%", // w-full
                  borderColor: colors.grayText, // border-[#6B6E70]
                  color: colors.grayText, // text-[#6B6E70]
                  backgroundColor: "transparent", // bg-transparent
                  padding: "12px 24px", // py-3
                  borderRadius: "8px", // rounded-lg
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colors.grayText, // hover:bg-[#6B6E70]
                    color: colors.whiteText, // hover:text-white
                    borderColor: colors.grayText, // Keep border color consistent
                  },
                }}
              >
                <Globe style={{ marginRight: "8px", height: "20px", width: "20px" }} /> {/* mr-2 h-5 w-5 */}
                View Our Portfolio
              </Button>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              style={{
                backgroundColor: colors.cardBg, // bg-[#474B4F]/20
                backdropFilter: "blur(4px)", // backdrop-blur-sm
                border: `1px solid ${colors.cardBorder}`, // border-[#6B6E70]/20
                transition: "all 0.3s ease",
                transform: "scale(1)", // Initial scale
                boxShadow: "none", // Initial shadow
                borderRadius: "12px", // rounded-xl
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${colors.accentGreen}80` // hover:border-[#86C232]/50
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)" // hover:shadow-xl
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.cardBorder
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <CardContent style={{ padding: "32px" }}>
                {" "}
                {/* p-8 */}
                <h3
                  style={{
                    fontSize: "1.5rem", // text-2xl
                    fontWeight: "bold",
                    color: colors.whiteText, // text-white
                    marginBottom: "24px", // mb-6
                  }}
                >
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {" "}
                  {/* space-y-6 */}
                  {/* Name and Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
                      gap: "24px", // gap-6
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
                        InputLabelProps={{ style: { color: colors.grayText } }}
                        InputProps={{
                          style: {
                            color: colors.whiteText,
                            background: colors.inputBg,
                            borderRadius: "8px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.accentGreen} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.accentGreen} !important` },
                          },
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        id="email"
                        name="email"
                        label="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{ style: { color: colors.grayText } }}
                        InputProps={{
                          style: {
                            color: colors.whiteText,
                            background: colors.inputBg,
                            borderRadius: "8px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.accentGreen} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.accentGreen} !important` },
                          },
                        }}
                      />
                    </div>
                  </div>
                  {/* Company and Service */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
                      gap: "24px", // gap-6
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
                        InputLabelProps={{ style: { color: colors.grayText } }}
                        InputProps={{
                          style: {
                            color: colors.whiteText,
                            background: colors.inputBg,
                            borderRadius: "8px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.accentGreen} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.accentGreen} !important` },
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
                        InputLabelProps={{ style: { color: colors.grayText } }}
                        InputProps={{
                          style: {
                            color: colors.whiteText,
                            background: colors.inputBg,
                            borderRadius: "8px",
                          },
                          sx: {
                            "& fieldset": { borderColor: colors.inputBorder },
                            "&:hover fieldset": { borderColor: `${colors.accentGreen} !important` },
                            "&.Mui-focused fieldset": { borderColor: `${colors.accentGreen} !important` },
                          },
                        }}
                        SelectProps={{
                          native: true, // Use native select for better styling control
                          style: { color: colors.whiteText },
                          IconComponent: () => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ color: colors.grayText, marginRight: "12px" }}
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          ),
                        }}
                      >
                        <option value="" style={{ backgroundColor: colors.inputBg, color: colors.grayText }}>
                          Select a service
                        </option>
                        {services.map((service, index) => (
                          <option
                            key={index}
                            value={service}
                            style={{ backgroundColor: colors.inputBg, color: colors.whiteText }}
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
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{ style: { color: colors.grayText } }}
                      InputProps={{
                        style: {
                          color: colors.whiteText,
                          background: colors.inputBg,
                          borderRadius: "8px",
                        },
                        sx: {
                          "& fieldset": { borderColor: colors.inputBorder },
                          "&:hover fieldset": { borderColor: `${colors.accentGreen} !important` },
                          "&.Mui-focused fieldset": { borderColor: `${colors.accentGreen} !important` },
                        },
                      }}
                    />
                  </div>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    sx={{
                      width: "100%", // w-full
                      background: `linear-gradient(to right, ${colors.accentGreen}, ${colors.darkerGreen})`,
                      color: colors.whiteText, // text-white
                      fontWeight: "600", // font-semibold
                      padding: "12px 24px", // py-3
                      borderRadius: "8px", // rounded-lg
                      transition: "all 0.3s ease",
                      transform: "scale(1)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      "&:hover": {
                        background: `linear-gradient(to right, ${colors.darkerGreen}, ${colors.accentGreen})`,
                        transform: "scale(1.02)", // hover:scale-105
                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                      },
                    }}
                    className="group" // Add group class for icon hover
                  >
                    <Send
                      style={{
                        marginRight: "8px", // mr-2
                        height: "20px", // h-5
                        width: "20px", // w-5
                        transition: "transform 0.3s ease",
                      }}
                      className="group-hover:translate-x-1"
                    />
                    Send Message
                  </Button>
                </form>
                {/* Additional Info */}
                <div
                  style={{
                    marginTop: "32px", // mt-8
                    padding: "24px", // p-6
                    backgroundColor: `${colors.accentGreen}1a`, // bg-[#86C232]/10
                    borderRadius: "8px", // rounded-lg
                    border: `1px solid ${colors.ctaBorder}`, // border border-[#86C232]/20
                  }}
                >
                  <h4
                    style={{
                      color: colors.whiteText, // text-white
                      fontWeight: "600", // font-semibold
                      marginBottom: "8px", // mb-2
                    }}
                  >
                    What happens next?
                  </h4>
                  <ul
                    style={{
                      color: colors.grayText, // text-[#6B6E70]
                      fontSize: "0.875rem", // text-sm
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px", // space-y-1
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

        {/* Map or Additional CTA */}
        <div
          ref={bottomCtaRef}
          style={{
            marginTop: "64px", // mt-16
            opacity: bottomCtaInView ? 1 : 0,
            transform: bottomCtaInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.5s",
          }}
        >
          <Card
            style={{
              background: `linear-gradient(to right, ${colors.ctaBgGradientStart}, ${colors.ctaBgGradientEnd})`,
              backdropFilter: "blur(4px)", // backdrop-blur-sm
              border: `1px solid ${colors.ctaBorder}`, // border-[#86C232]/20
              borderRadius: "16px", // rounded-2xl
            }}
          >
            <CardContent style={{ padding: "32px", textAlign: "center" }}>
              {" "}
              {/* p-8 */}
              <h3
                style={{
                  fontSize: "1.5rem", // text-2xl
                  fontWeight: "bold",
                  color: colors.whiteText, // text-white
                  marginBottom: "16px", // mb-4
                }}
              >
                Prefer to Talk Directly?
              </h3>
              <p
                style={{
                  color: colors.grayText, // text-[#6B6E70]
                  marginBottom: "24px", // mb-6
                  maxWidth: "800px", // max-w-2xl
                  margin: "0 auto 24px auto", // mx-auto
                }}
              >
                Sometimes it's easier to just have a conversation. Book a free 30-minute consultation call with our team
                to discuss your project requirements.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", // flex-col
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px", // space-y-4 sm:space-y-0 sm:space-x-4
                }}
                className="bottom-cta-buttons"
              >
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
                    "&:hover": {
                      background: `linear-gradient(to right, ${colors.darkerGreen}, ${colors.accentGreen})`,
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Phone style={{ marginRight: "8px", height: "20px", width: "20px" }} /> {/* mr-2 h-5 w-5 */}
                  Book a Call
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: colors.grayText, // border-[#6B6E70]
                    color: colors.grayText, // text-[#6B6E70]
                    backgroundColor: "transparent", // bg-transparent
                    padding: "12px 32px", // px-8 py-3
                    borderRadius: "8px", // rounded-lg
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: colors.grayText, // hover:bg-[#6B6E70]
                      color: colors.whiteText, // hover:text-white
                      borderColor: colors.grayText, // Keep border color consistent
                    },
                  }}
                >
                  <Mail style={{ marginRight: "8px", height: "20px", width: "20px" }} /> {/* mr-2 h-5 w-5 */}
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Global styles for media queries */}
      <style>
        {`
          /* Responsive container padding */
          @media (min-width: 640px) { /* sm:px-6 */
            .contact-container-inner {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 1024px) { /* lg:px-8 */
            .contact-container-inner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          /* Main Content Grid Layout */
          @media (min-width: 1024px) { /* lg:grid-cols-3 */
            .contact-main-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }

          /* Form Grid Columns */
          @media (min-width: 768px) { /* md:grid-cols-2 */
            .form-grid-cols {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          /* Bottom CTA Buttons Layout */
          @media (min-width: 640px) { /* sm:flex-row */
            .bottom-cta-buttons {
              flex-direction: row !important;
              gap: 16px !important; /* sm:space-x-4 */
            }
          }

          /* Custom styles for Material UI TextField outline */
          .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
            border-color: ${colors.inputBorder};
            border-radius: 8px;
          }
          .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
            border-color: ${colors.accentGreen} !important;
          }
          .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: ${colors.accentGreen} !important;
          }
          .MuiInputLabel-outlined {
            color: ${colors.grayText};
          }
          .MuiInputLabel-outlined.Mui-focused {
            color: ${colors.accentGreen} !important;
          }
          .MuiInputBase-input {
            color: ${colors.whiteText};
            background-color: ${colors.inputBg};
            border-radius: 8px;
          }
          .MuiSelect-icon {
            color: ${colors.grayText};
          }
        `}
      </style>
    </section>
  )
}
