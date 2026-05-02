"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resort", href: "/resort" },
    { name: "Restaurant", href: "/restaurant" },
    { name: "Activities", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappURL = "https://wa.me/94763009385?text=Hello%20Miridiya!%20I%20would%20like%20to%20make%20a%20booking%20enquiry.";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-forest-dark ${
        isScrolled ? "bg-opacity-90 backdrop-blur-md border-b border-gold-dark/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image 
                src="/logo.png" 
                alt="Miridiya Logo" 
                fill 
                className="object-contain"
                priority 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-playfair text-xl md:text-2xl tracking-wider group-hover:text-gold-light transition-colors">Miridiya</span>
              <span className="text-gold-light text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold mt-1">Resort & Restaurant</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="nav-link text-cream hover:text-gold-light transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a 
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-primary hover:bg-gold-dark text-white px-6 py-3 transition-all tracking-wider text-xs uppercase font-semibold rounded-sm"
            >
              Book via WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-forest-dark z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-cream font-playfair uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-primary text-white px-8 py-4 tracking-widest text-sm uppercase font-semibold"
          >
            Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
