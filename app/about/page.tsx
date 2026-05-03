"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Facebook, Phone, Mail, MapPin, ExternalLink, Leaf, Heart, Wind } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function About() {
  const values = [
    { title: "Preserved Wilderness", desc: "We are surrounded by one of Sri Lanka's most biodiverse river valleys. Our responsibility to protect it is as important as our hospitality.", icon: Leaf },
    { title: "Warm Hospitality", desc: "Rooted in Sri Lankan tradition, we believe in the land, in local food, and in welcoming guests as family.", icon: Heart },
    { title: "Eco Commitment", desc: "We use locally sourced ingredients, support local guides and staff, and aim to minimise our environmental footprint.", icon: Wind },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <section className="relative h-[50vh] min-h-[450px] md:min-h-[550px] bg-forest-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder label="[ABOUT-HERO]" className="h-full w-full" aspectRatio="hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-7xl text-white mb-6 uppercase tracking-widest">Our Story</h1>
              <p className="text-xl text-cream/80 max-w-2xl mx-auto font-playfair italic leading-relaxed">
                "In Sinhala, 'Miridiya' means cool water — an apt name for a place born beside the Kelani River."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 md:py-32 bg-off-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-3/5">
              <Reveal>
                <p className="nav-link text-gold-primary mb-6">The Meaning of Miridiya</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-forest-dark mb-10 leading-tight">Authentic Heritage Beside the Kelani River</h2>
                <div className="space-y-6 text-lg text-charcoal opacity-80 leading-relaxed max-w-2xl">
                  <p>
                    Our resort and restaurant grew from a simple belief: that the best hospitality is honest, warm, and deeply rooted in place. We believe in the land, in local food, in Sri Lankan tradition. 
                  </p>
                  <p>
                    Miridiya Holiday Resort & Restaurant offers a quiet escape for explorers and a peaceful sanctuary for those who wish to disconnect.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="w-full lg:w-2/5 grid grid-cols-1 gap-8">
               <Reveal delay={0.3}>
                 <div className="p-8 bg-cream rounded-sm border-l-4 border-gold-primary shadow-xl">
                    <h4 className="text-xl font-playfair italic text-forest-dark mb-4">Quick Facts</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3 text-sm flex-col space-y-1">
                        <span className="font-bold text-gold-dark uppercase tracking-widest text-[10px]">Location</span>
                        <span className="opacity-80">Hatton Road, Nawata, Yatiyantota, Sabaragamuwa Province, Sri Lanka 71700</span>
                      </li>
                      <li className="flex items-start space-x-3 text-sm flex-col space-y-1">
                        <span className="font-bold text-gold-dark uppercase tracking-widest text-[10px]">Nearest Town</span>
                        <span className="opacity-80">Kithulgala (15–25 min drive)</span>
                      </li>
                      <li className="flex items-start space-x-3 text-sm flex-col space-y-1">
                        <span className="font-bold text-gold-dark uppercase tracking-widest text-[10px]">Experience Since</span>
                        <span className="opacity-80">Built on years of hospitality experience</span>
                      </li>
                    </ul>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY IMAGE SECTION */}
      <section className="py-0">
        <ImagePlaceholder label="[ABOUT-PROPERTY]" className="w-full min-h-[500px]" aspectRatio="hero" />
      </section>

      {/* VALUES SECTION (Commitment) */}
      <section className="py-20 md:py-32 bg-forest-mid text-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 md:mb-24">
             <p className="nav-link text-gold-light mb-4">Our Commitment</p>
             <h2 className="text-4xl md:text-6xl mb-6">Respecting Nature</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((val, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="flex flex-col items-center text-center group">
                   <div className="w-20 h-20 bg-forest-dark rounded-full flex items-center justify-center text-gold-light mb-8 group-hover:scale-110 transition-transform shadow-lg border border-gold-primary/20">
                     <val.icon size={36} />
                   </div>
                   <h3 className="text-2xl font-playfair mb-6 tracking-wide underline underline-offset-8 decoration-gold-primary/30 decoration-2">{val.title}</h3>
                   <p className="text-cream/70 leading-relaxed font-inter">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-off-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair text-forest-dark mb-10 max-w-2xl mx-auto italic">
              "Escape the noise. Find your river. Welcome to Miridiya."
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                <a href="https://facebook.com/MiridiyaResort" target="_blank" className="nav-link flex items-center text-gold-primary hover:text-gold-dark transition-colors">
                  <Facebook className="mr-2" size={20} /> Facebook 
                </a>
                <a href="mailto:miridiyaresort@gmail.com" className="nav-link flex items-center text-gold-primary hover:text-gold-dark transition-colors">
                  <Mail className="mr-2" size={20} /> miridiyaresort@gmail.com
                </a>
                <a href="tel:+94763009385" className="nav-link flex items-center text-gold-primary hover:text-gold-dark transition-colors">
                  <Phone className="mr-2" size={20} /> +94 76 3009 385
                </a>
            </div>
         </div>
      </section>
    </div>
  );
}
