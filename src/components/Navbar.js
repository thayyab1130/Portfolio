import React, { useEffect, useState } from 'react'
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { toast } from 'react-toastify';

export default function Navbar() {

  const[isScrolled,setIsScrolled]=useState(false);
  const[isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
  
  const myName = process.env.REACT_APP_MY_NAME;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(()=>{
    console.log("baseurl : ",baseUrl);
  },[])

  useEffect(()=>{
    const handleScorll=()=>{
      const offset=window.scrollY;
      setIsScrolled(offset>50);   
    }

    window.addEventListener('scroll',handleScorll);
    return()=> window.removeEventListener('scroll',handleScorll);
  },[])

   const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const openResume = () => {
    const resumeUrl = `${baseUrl}/resume/Mohammed_thayyab_resume_full.pdf`;
    try {
      window.open(resumeUrl, "_blank");
    } catch (error) {
      console.error("Failed to open resume:", error);
      toast.error("Failed to open resume. Please try again later.");
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${
          isScrolled || isMobileMenuOpen ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            {/* <span className="text-gradient">Portfolio</span> */}
            <span className="text-gradient">{myName}</span>
            {/* <span className="text-gradient">Nothing</span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="w-full bg-primary text-primary-foreground" onClick={openResume}>
              Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
