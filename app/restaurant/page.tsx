"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import ReservationForm from "@/components/ReservationForm";
import { ArrowRight, UtensilsCrossed, Leaf, Coffee, Globe, Info } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";

export default function Restaurant() {
  const menuSections = [
    {
      id: "breakfast",
      title: "Breakfast",
      items: ["American Breakfast", "Full English/Irish Breakfast", "Sri Lankan (Hoppers, Kiribath)", "A La Carte", "Buffet Options"],
      label: "[MENU-BREAKFAST]"
    },
    {
      id: "mains",
      title: "Mains & Rice & Curry",
      items: ["Traditional Sri Lankan Rice & Curry", "Asian Dishes", "BBQ (on request)", "Packed Lunch (for excursions)"],
      label: "[MENU-MAINS]"
    },
    {
      id: "dietary",
      title: "Dietary Options",
      items: ["Vegan", "Vegetarian", "Gluten-Free", "Allergy-Free"],
      label: "[MENU-DIETARY]"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <section className="relative h-[50vh] min-h-[450px] md:min-h-[550px] bg-forest-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder label="[RESTAURANT-HERO]" className="h-full w-full" aspectRatio="hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 uppercase tracking-widest">Miridiya Restaurant</h1>
              <p className="text-xl md:text-2xl text-gold-light font-playfair italic leading-relaxed max-w-2xl">
                "Honest food. Local spices. Sri Lankan soul."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 md:py-32 bg-cream overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
               <Reveal>
                 <div className="absolute -top-12 -left-12 text-gold-light/20 select-none pointer-events-none">
                   <UtensilsCrossed size={200} />
                 </div>
                 <blockquote className="text-3xl md:text-4xl font-playfair text-forest-dark italic leading-snug relative z-10">
                   "One of the secrets behind a delicious meal is selecting the best spices."
                 </blockquote>
               </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal delay={0.3}>
                <p className="text-lg text-charcoal leading-relaxed mb-8">
                  Miridiya Restaurant serves both resort guests and walk-in visitors. We cook with locally sourced ingredients, traditional Sri Lankan spices, and recipes passed through generations — adapted thoughtfully for diverse palates.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 text-forest-dark font-semibold">
                    <Leaf className="text-gold-primary" size={20} />
                    <span>Fresh & Local</span>
                  </div>
                  <div className="flex items-center space-x-3 text-forest-dark font-semibold">
                    <Coffee className="text-gold-primary" size={20} />
                    <span>Artisanal Coffee</span>
                  </div>
                  <div className="flex items-center space-x-3 text-forest-dark font-semibold">
                    <Globe className="text-gold-primary" size={20} />
                    <span>Global Palette</span>
                  </div>
                  <div className="flex items-center space-x-3 text-forest-dark font-semibold">
                    <Info className="text-gold-primary" size={20} />
                    <span>Dietary Care</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="nav-link text-gold-primary mb-4">On The Plate</p>
            <h2 className="text-4xl md:text-5xl text-forest-dark">What We Serve</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {menuSections.map((section, i) => (
              <Reveal key={section.id} delay={i * 0.2}>
                <div className="group">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-8 h-64">
                     <ImagePlaceholder label={section.label} className="w-full h-full group-hover:scale-110 transition-transform duration-700" aspectRatio="4/3" />
                  </div>
                  <h3 className="text-2xl font-playfair text-forest-dark mb-6 border-b border-gold-primary/30 pb-4 uppercase tracking-wider">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-between text-charcoal opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-xs text-gold-dark/60 font-medium uppercase tracking-widest italic flex items-center">
                    <Info size={12} className="mr-2" />
                    Prices & current availability on request
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE RESERVATION */}
      <section className="py-20 md:py-32 bg-forest-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <p className="nav-link text-gold-light mb-4">Stay & Dine</p>
            <h2 className="text-4xl md:text-6xl text-white mb-6">Reserve a Table</h2>
          </div>
          <ReservationForm />
        </div>
      </section>

      {/* CATERING SECTION */}
      <section className="py-20 md:py-32 bg-cream text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl text-forest-dark mb-8">Group & Catering Enquiries</h2>
           <p className="text-lg text-charcoal opacity-80 mb-12 max-w-2xl mx-auto">
             We cater to corporate groups, team retreats, day-trippers, and special occasions. Get in touch to discuss custom menus and arrangements.
           </p>
           <a 
            href={buildWhatsAppURL("Hello! I would like to discuss catering for a group event at Miridiya Restaurant.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold-primary hover:bg-gold-dark text-white px-10 py-5 rounded-sm nav-link font-bold shadow-xl transition-all"
          >
            WhatsApp Catering Enquiry
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
