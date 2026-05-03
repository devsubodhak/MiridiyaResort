"use client";

import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Leaf, ForkKnife, Compass, ArrowRight, MapPin, Phone } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-forest-dark overflow-hidden">
        {/* Hero Background Placeholder */}
        <div className="absolute inset-0 opacity-40">
           <ImagePlaceholder 
             label="[HERO-MAIN]" 
             src="/hero.jpg"
             alt="Miridiya Holiday Resort - Riverside View"
             className="h-full w-full" 
             aspectRatio="1/1" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="nav-link text-gold-light mb-4 md:mb-6 uppercase tracking-widest text-sm font-semibold"
          >
            Nawata · Yatiyantota · Sri Lanka
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="text-4xl md:text-6xl lg:text-8xl leading-none mb-6 max-w-5xl mx-auto"
          >
            Where the River Whispers and the Forest Breathes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="text-lg md:text-xl md:max-w-2xl mx-auto mb-10 opacity-90 font-inter"
          >
            A riverside retreat in the heart of Kithulgala's rainforest, offering warm Sri Lankan hospitality, adventure, and authentic cuisine.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href={buildWhatsAppURL("Hello! I am interested in staying at Miridiya Holiday Resort. Could you share availability and rates?")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gold-primary hover:bg-gold-dark text-white px-10 py-5 rounded-sm nav-link transition-all flex items-center justify-center group"
            >
              Enquire About a Stay
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              href="/restaurant" 
              className="w-full sm:w-auto border border-white hover:bg-white hover:text-forest-dark text-white px-10 py-5 rounded-sm nav-link transition-all"
            >
              Explore the Restaurant
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BRAND INTRO STRIP */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold-primary shadow-sm">
                  <Leaf size={32} />
                </div>
                <h3 className="text-2xl font-playfair text-forest-dark">Nature & Wilderness</h3>
                <p className="text-charcoal opacity-80 max-w-[280px]">Kelani River valley, rainforest, and local migratory birds.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-col items-center space-y-4 border-y md:border-y-0 md:border-x border-gold-dark/10 py-12 md:py-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold-primary shadow-sm">
                  <ForkKnife size={32} />
                </div>
                <h3 className="text-2xl font-playfair text-forest-dark">Authentic Cuisine</h3>
                <p className="text-charcoal opacity-80 max-w-[280px]">Traditional Sri Lankan flavours and freshest local ingredients.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.5}>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold-primary shadow-sm">
                  <Compass size={32} />
                </div>
                <h3 className="text-2xl font-playfair text-forest-dark">Adventure</h3>
                <p className="text-charcoal opacity-80 max-w-[280px]">Rafting, trekking, canyoning, and bird watching.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESORT PREVIEW SECTION */}
      <section className="bg-off-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <ImagePlaceholder 
                    label="[RESORT-PREVIEW]" 
                    src="/resort-preview.jpg"
                    alt="Miridiya Holiday Resort Exterior"
                    className="w-full h-[400px] md:h-[600px]" 
                    aspectRatio="4/3" 
                  />
                </div>
              </Reveal>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <Reveal>
                <p className="nav-link text-gold-primary mb-4">The Resort</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-forest-dark mb-8">Miridiya Holiday Resort</h2>
                <p className="text-lg text-charcoal leading-relaxed mb-10 max-w-xl">
                  Set along the Kelani River in Nawata, our resort offers comfortable air-conditioned and non-air-conditioned rooms with satellite TV, complimentary Wi-Fi, and 24-hour room service — all surrounded by the sounds of nature.
                </p>
                <Link 
                  href="/resort" 
                  className="group inline-flex items-center text-gold-primary font-semibold hover:text-gold-dark transition-colors border-b-2 border-gold-primary pb-2"
                >
                  View Rooms & Facilities 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT PREVIEW SECTION */}
      <section className="bg-cream py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <Reveal>
                <p className="nav-link text-gold-primary mb-4">The Culinary Experience</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-forest-dark mb-8">Miridiya Restaurant</h2>
                <p className="text-lg text-charcoal leading-relaxed mb-10 max-w-xl">
                  Our restaurant is the heart of Miridiya. From traditional Sri Lankan rice and curry to international breakfast options — we cook with the finest local spices, fresh ingredients, and genuine care. Vegan, vegetarian, gluten-free options available.
                </p>
                <Link 
                  href="/restaurant" 
                  className="group inline-flex items-center text-gold-primary font-semibold hover:text-gold-dark transition-colors border-b-2 border-gold-primary pb-2"
                >
                  See Our Menu 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <ImagePlaceholder 
                    label="[RESTAURANT-PREVIEW]" 
                    src="/restaurant-preview.png"
                    alt="Miridiya Restaurant Dining Experience"
                    className="w-full h-[400px] md:h-[600px]" 
                    aspectRatio="4/3" 
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES STRIP */}
      <section className="bg-forest-dark py-20 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="nav-link text-gold-light mb-4">Get Outside</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl">Adventures Await</h2>
              </div>
              <Link 
                href="/activities" 
                className="flex items-center text-gold-light hover:text-white transition-colors nav-link group border-b border-gold-light hover:border-white pb-1"
              >
                See All Activities 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "RAFTING", title: "White Water Rafting", text: "The legendary Kelani River rapids", src: "/act-rafting.jpg" },
              { id: "TREKKING", title: "Rainforest Trekking", text: "Ancient trails through cloud forest", src: "/act-trekking.jpg" },
              { id: "BIRDS", title: "Bird Watching", text: "A wild sanctuary for migrating species", src: "/act-bird.jpg" },
              { id: "CAVE", title: "Beli Lena Cave", text: "Discover ancient rock shelters nearby", src: "/act-cave.jpg" }
            ].map((act, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6 relative rounded-sm">
                    <ImagePlaceholder 
                      label={`[ACT-${act.id}]`} 
                      src={act.src}
                      alt={act.title}
                      className="w-full group-hover:scale-105 transition-transform duration-700" 
                      aspectRatio="4/3" 
                    />
                  </div>
                  <h4 className="text-xl font-playfair mb-2 group-hover:text-gold-primary transition-colors">{act.title}</h4>
                  <p className="text-white/60 text-sm italic">{act.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section className="bg-gold-primary py-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">Ready to Plan Your Visit?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-12">
            Get in touch via WhatsApp for the fastest response — our team is ready to help you plan your stay, arrange activities, and reserve your table.
          </p>
          <a 
            href={buildWhatsAppURL("Hello Miridiya! I would like to plan a visit.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-forest-dark px-10 py-5 rounded-sm nav-link font-bold hover:bg-off-white transition-colors group shadow-xl"
          >
            <span className="w-5 h-5 mr-3 text-green-600 font-bold flex items-center justify-center border-2 border-green-600 rounded-full">W</span>
            Enquire via WhatsApp
          </a>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-off-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="flex items-center space-x-3 text-gold-primary mb-6">
                <MapPin className="w-8 h-8" />
                <h3 className="text-3xl font-playfair text-forest-dark">Find Us</h3>
              </div>
              <p className="text-charcoal opacity-80 mb-8 leading-relaxed">
                Hatton Road, Nawata, Yatiyantota — approximately 15–25 minutes from Kithulgala town.
              </p>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://maps.google.com/?q=Miridiya+Holiday+Resort+Yatiyantota" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-gold-primary font-semibold hover:text-gold-dark transition-colors nav-link"
                >
                  Get Directions 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3 h-[450px] rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.4334351!2d80.4038!3d7.0486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30bc227c95e6f%3A0xe74f6e14713c72b8!2sYatiyantota!5e0!3m2!1sen!2slk!4v1712495689000!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
