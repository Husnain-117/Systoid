"use client"

import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Desktop Apps", href: "#" },
      { name: "Digital Marketing", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Consulting", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-[#222629] border-t border-[#474B4F]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-[#86C232] to-[#61892F] p-2 rounded-lg">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Systoid</span>
              </div>
              <p className="text-[#6B6E70] mb-6 leading-relaxed max-w-md">
                We are a passionate team of developers, designers, and digital strategists committed to delivering
                innovative solutions that drive business success.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[#6B6E70]">
                  <Mail className="h-4 w-4 text-[#86C232]" />
                  <span>hello@Systoid.com</span>
                </div>
                <div className="flex items-center space-x-3 text-[#6B6E70]">
                  <Phone className="h-4 w-4 text-[#86C232]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-[#6B6E70]">
                  <MapPin className="h-4 w-4 text-[#86C232]" />
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#6B6E70] hover:text-[#86C232] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#6B6E70] hover:text-[#86C232] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#6B6E70] hover:text-[#86C232] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-[#474B4F]/30">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-[#6B6E70] mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#474B4F]/20 border border-[#6B6E70]/30 text-white placeholder-[#6B6E70] px-4 py-2 rounded-lg focus:border-[#86C232] focus:outline-none"
              />
              <button className="bg-gradient-to-r from-[#86C232] to-[#61892F] hover:from-[#61892F] hover:to-[#86C232] text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-[#474B4F]/30">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-[#6B6E70] text-sm">© {currentYear} Systoid. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-[#474B4F]/20 hover:bg-gradient-to-r hover:from-[#86C232] hover:to-[#61892F] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-[#6B6E70] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-[#6B6E70] hover:text-[#86C232] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#6B6E70] hover:text-[#86C232] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
