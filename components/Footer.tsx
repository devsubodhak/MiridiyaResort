import Link from "next/link";
import Image from "next/image";
import { Facebook, Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "./Reveal";

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-cream py-16 md:py-24 border-t border-gold-dark/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <Reveal delay={0.1}>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image 
                    src="/logo.png" 
                    alt="Miridiya Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-playfair text-2xl md:text-3xl tracking-wider">Miridiya</span>
                  <span className="text-gold-light text-xs uppercase tracking-[0.15em] font-semibold mt-1">Resort & Restaurant</span>
                </div>
              </div>
              <p className="font-playfair italic text-lg opacity-80 leading-relaxed">
                "Cool waters. Lush forests. Authentic Sri Lanka."
              </p>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.2}>
            <div className="flex flex-col space-y-4">
              <h3 className="text-gold-light uppercase tracking-widest text-sm font-semibold mb-2">Quick Links</h3>
              <Link href="/" className="hover:text-gold-light transition-colors text-sm">Home</Link>
              <Link href="/resort" className="hover:text-gold-light transition-colors text-sm">Resort</Link>
              <Link href="/restaurant" className="hover:text-gold-light transition-colors text-sm">Restaurant</Link>
              <Link href="/activities" className="hover:text-gold-light transition-colors text-sm">Activities</Link>
              <Link href="/gallery" className="hover:text-gold-light transition-colors text-sm">Gallery</Link>
              <Link href="/about" className="hover:text-gold-light transition-colors text-sm">About Us</Link>
              <Link href="/contact" className="hover:text-gold-light transition-colors text-sm">Contact</Link>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.3}>
            <div className="flex flex-col space-y-4">
              <h3 className="text-gold-light uppercase tracking-widest text-sm font-semibold mb-2">Contact Info</h3>
              <div className="flex items-start space-x-3 text-sm opacity-80">
                <Phone size={16} className="text-gold-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+94 36 7855 700</span>
                  <span>+94 76 3009 385</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm opacity-80">
                <Mail size={16} className="text-gold-primary flex-shrink-0" />
                <span>miridiyaresort@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm opacity-80">
                <MapPin size={16} className="text-gold-primary mt-1 flex-shrink-0" />
                <span>Hatton Road, Nawata, Yatiyantota, Sri Lanka 71700</span>
              </div>
            </div>
          </Reveal>

          {/* Follow Us */}
          <Reveal delay={0.4}>
            <div className="flex flex-col space-y-6">
              <h3 className="text-gold-light uppercase tracking-widest text-sm font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/MiridiyaResort" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-transform hover:-translate-y-1 p-2 bg-forest-mid rounded-sm"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://wa.me/94763009385" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-transform hover:-translate-y-1 p-2 bg-forest-mid rounded-sm"
                >
                  <span className="w-6 h-6 flex items-center justify-center font-bold text-lg leading-none">W</span>
                </a>
              </div>
              <div className="pt-4 border-t border-gold-dark/20">
                <p className="text-xs opacity-60">
                  A getaway where the river whispers and the forest breathes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold-primary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs opacity-50 uppercase tracking-widest">
          <p>© 2026 Miridiya Resort & Restaurant. All rights reserved.</p>
          <div className="flex space-x-6">
            <button className="hover:text-gold-light transition-colors">Privacy Policy</button>
            <button className="hover:text-gold-light transition-colors">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
