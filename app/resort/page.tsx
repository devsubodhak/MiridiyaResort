"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import BookingForm from "@/components/BookingForm";
import { ArrowRight, Wifi, Tv, Coffee, Utensils, Plane, Car, Flame, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { buildWhatsAppURL } from "@/lib/whatsapp";

export default function Resort() {
  const rooms = [
    {
      id: "AC",
      label: "AC Room",
      src: "/images/rooms.jpg",
      title: "Air-Conditioned Rooms",
      price: "Enquire for rates",
      desc: "Comfortable AC rooms with satellite TV, complimentary Wi-Fi, private bathroom, and room service.",
      features: ["AC", "Ensuite", "TV", "Wi-Fi"]
    },
    {
      id: "NAC",
      label: "Non-AC Room",
      src: "/images/rooms2.jpg",
      title: "Non-Air-Conditioned Rooms",
      price: "Enquire for rates",
      desc: "Naturally cool rooms designed to immerse you in the forest ambiance, with all essential amenities.",
      features: ["Natural Cool", "Ensuite", "TV", "Wi-Fi"]
    }
  ];

  const amenities = [
    { icon: Wifi, label: "Complimentary Wi-Fi" },
    { icon: Tv, label: "Satellite TV" },
    { icon: Utensils, label: "24hr Room Service" },
    { icon: Coffee, label: "On-Site Restaurant" },
    { icon: Plane, label: "Travel Assistance" },
    { icon: Car, label: "Pick-up & Drop-off" },
    { icon: Flame, label: "BBQ Facilities" },
    { icon: ShoppingBag, label: "Packed Lunch" },
    { icon: MapPin, label: "Drivers' Quarters" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <section className="relative h-[40vh] min-h-[350px] md:min-h-[450px] bg-forest-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ImagePlaceholder 
            label="[RESORT-HERO]" 
            src="/hero.jpg"
            alt="Miridiya Holiday Resort Hero"
            className="h-full w-full" 
            aspectRatio="hero" 
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl">Miridiya Holiday Resort</h1>
              <p className="text-lg md:text-xl text-cream/80 max-w-2xl font-playfair italic leading-relaxed">
                A peaceful riverside retreat in Nawata, Yatiyantota — your home base for exploring Kithulgala's wonders or simply unwinding in nature.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACCOMMODATION SECTION */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <p className="nav-link text-gold-primary mb-4">Stay with Us</p>
            <h2 className="text-4xl md:text-5xl text-forest-dark">Accommodation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 0.2}>
                <div className="group bg-white rounded-lg shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder label={room.label} className="w-full h-[300px] md:h-[400px] group-hover:scale-105 transition-transform duration-700" aspectRatio="4/3" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <h3 className="text-3xl font-playfair text-forest-dark mb-4">{room.title}</h3>
                    <p className="text-charcoal leading-relaxed mb-8 opacity-80">{room.desc}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-auto mb-10">
                      {room.features.map(f => (
                        <span key={f} className="text-xs uppercase tracking-widest font-bold bg-cream px-3 py-1 rounded-full text-gold-dark">{f}</span>
                      ))}
                    </div>

                    <a 
                      href={buildWhatsAppURL(`Hello! I would like to enquire about room rates and availability at Miridiya Holiday Resort for ${room.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold-primary hover:bg-gold-dark text-white px-8 py-4 rounded-sm transition-all nav-link text-center"
                    >
                      Enquire About Rates
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="nav-link text-gold-primary mb-4">Our Facilities</p>
            <h2 className="text-4xl md:text-5xl text-forest-dark">What's Included</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {amenities.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                <div className="p-4 bg-white rounded-full shadow-sm text-gold-primary group-hover:bg-gold-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-forest-dark uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DINING AT THE RESORT */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-2xl">
              <ImagePlaceholder 
                label="[RESORT-DINING]" 
                src="/images/restaurant.jpg"
                alt="Dining at Miridiya"
                className="w-full h-[400px] md:h-[500px]" 
                aspectRatio="4/3" 
              />
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <p className="nav-link text-gold-primary mb-4">Taste Miridiya</p>
              <h2 className="text-4xl md:text-5xl text-forest-dark mb-8">Dining</h2>
              <p className="text-lg text-charcoal leading-relaxed mb-10 max-w-xl">
                Our on-site restaurant serves American, buffet, full English/Irish, vegetarian, and Asian breakfast options. Special menus for vegan, vegetarian, gluten-free, and allergy-free requirements — just let us know in advance.
              </p>
              <Link 
                href="/kitchen" 
                className="group inline-flex items-center text-gold-primary font-semibold hover:text-gold-dark transition-colors border-b-2 border-gold-primary pb-2"
              >
                Explore Miridiya Kitchen 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING INQUIRY FORM */}
      <section className="py-20 md:py-32 bg-gold-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-6xl mb-6">Make a Booking Enquiry</h2>
            <p className="text-lg opacity-80 font-playfair italic">
              Fill in your details and we'll open a WhatsApp message for you — our team responds within a few hours.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
