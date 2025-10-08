import { Linkedin, Mail } from 'lucide-react';
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
    const myName = process.env.REACT_APP_MY_NAME;

    const socialLinks = [
    { icon: <Linkedin size={20} />, href: linkedinUrl, label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:thayyab1130@gmail.com", label: "Email" },
  ];
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-gradient">{myName}</span>
              </h3>
              <p className="text-muted-foreground">
                Building the web, one project at a time.
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-3 rounded-full glass-card border-border/50 text-muted-foreground hover:text-primary hover-glow transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
            <p>© {currentYear} Your Name. All rights reserved.</p>
            <p className="mt-2">
              Designed & Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
