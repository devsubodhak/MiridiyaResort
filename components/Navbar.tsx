"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-forest-dark/95 backdrop-blur-md border-b border-gold-dark/20 py-1" 
          : "bg-forest-dark/0 py-4"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-forest-dark/60 backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-forest-dark z-50 shadow-2xl flex flex-col p-8 pt-24"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-cream p-2"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl text-cream font-playfair uppercase tracking-widest hover:text-gold-light transition-colors block border-b border-white/5 pb-4"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <a 
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold-primary text-white px-8 py-5 tracking-widest text-sm uppercase font-semibold flex items-center justify-center rounded-sm shadow-xl"
                >
                  Book via WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
