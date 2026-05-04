"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Clock, Mountain, Bike, Waves, Map, Bird, ArrowRight } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const ActivityCard = ({ id, title, label, src, desc, duration, difficulty }: any) => {
  return (
    <div className="group bg-white rounded-lg shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center text-center">
      <div className="relative overflow-hidden w-full h-[300px] md:h-[400px]">
        <ImagePlaceholder 
          label={label} 
          src={src}
          alt={title}
          className="w-full h-full group-hover:scale-105 transition-transform duration-700" 
          aspectRatio="4/3" 
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <span className="bg-forest-dark text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
             {difficulty}
           </span>
           <span className="bg-white text-forest-dark text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
              <Clock size={10} className="mr-1" />
              {duration}
           </span>
        </div>
      </div>
      <div className="p-8 md:p-12 flex flex-col flex-grow items-center text-center">
        <h3 className="text-2xl md:text-3xl font-playfair text-forest-dark mb-6 tracking-wide">{title}</h3>
        <p className="text-charcoal leading-relaxed mb-10 opacity-80 max-w-sm italic">
          "{desc}"
        </p>
        <a 
          href={buildWhatsAppURL(`Hello! I am interested in arranging ${title} during my visit to Miridiya.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-gold-primary hover:text-gold-dark transition-colors font-bold nav-link group border-b border-gold-primary/20 hover:border-gold-primary pb-1"
        >
          Arrange This Activity 
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default function Activities() {
  const activities = [
    {
      id: "RAFTING",
      title: "White Water Rafting",
      label: "[ACT-RAFTING]",
      src: "/act-rafting.jpg",
      desc: "The Kelani River's famous Grade 3–4 rapids offer one of Sri Lanka's most thrilling rafting experiences. Suitable for beginners and experienced rafters alike.",
      duration: "Half day",
      difficulty: "Moderate–High",
      icon: Waves
    },
    {
      id: "TREKKING",
      title: "Rainforest Trekking",
      label: "[ACT-TREKKING]",
      src: "/act-trekking.jpg",
      desc: "Wind through ancient trails in the Kithulgala rainforest — dense with tropical flora, hidden waterfalls, and wildlife.",
      duration: "2–4 hours",
      difficulty: "Easy–Moderate",
      icon: Mountain
    },
    {
      id: "CANYONING",
      title: "Canyoning",
      label: "[ACT-CANYONING]",
      src: "/canyoning.jpg",
      desc: "Navigate streams, jump into natural rock pools, and explore the canyon terrain of the Kelani valley.",
      duration: "Half day",
      difficulty: "Moderate",
      icon: Bike
    },
    {
      id: "BIRDS",
      title: "Bird Watching",
      label: "[ACT-BIRDS]",
      src: "/act-bird.jpg",
      desc: "The Miridiya property sits in a prime bird corridor. Spot migratory species, endemic Sri Lankan birds, and rare rainforest dwellers.",
      duration: "1–3 hours",
      difficulty: "Easy",
      icon: Bird
    },
    {
      id: "CAVE",
      title: "Beli Lena Cave",
      label: "[ACT-CAVE]",
      src: "/act-cave.jpg",
      desc: "Visit the ancient Beli Lena rock shelter — a fascinating archaeological site with prehistoric cave drawings, just a short distance away.",
      duration: "2–3 hours",
      difficulty: "Easy",
      icon: Map
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <section className="relative h-[40vh] min-h-[350px] md:min-h-[450px] bg-forest-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder label="[ACTIVITIES-HERO]" className="h-full w-full" aspectRatio="hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 uppercase tracking-widest">Experiences & Adventures</h1>
              <p className="text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto font-playfair italic leading-relaxed">
                Kithulgala is Sri Lanka's adventure capital — and Miridiya is your gateway to it all.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 md:py-32 bg-off-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl md:text-5xl text-forest-dark mb-8">Adventure Beyond the River</h2>
           <p className="text-lg text-charcoal opacity-80 leading-relaxed mb-12">
             We can arrange and assist with a wide range of experiences. Whether you seek the adrenaline of Grade 4 rapids or the quiet of ancient rock shelters, our team ensures your safety and comfort throughout your journey.
           </p>
        </div>
      </section>

      {/* ACTIVITY CARDS */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-16 lg:gap-20">
            {activities.map((act, i) => (
              <Reveal key={act.id} delay={i * 0.1}>
                <div className="w-full max-w-md">
                  <ActivityCard {...act} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM SECTION */}
      <section className="py-20 md:py-32 bg-gold-primary overflow-hidden text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-4xl md:text-6xl mb-8">Ready for Adventure?</h2>
           <p className="text-lg md:text-xl opacity-90 mb-12">
             Tell us what you're interested in and we'll help you plan the perfect experience.
           </p>
           <a 
            href={buildWhatsAppURL("Hello! I am planning a visit to Miridiya and would like to learn more about the adventure activities available.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-forest-dark px-10 py-5 rounded-sm nav-link font-bold shadow-xl transition-all"
          >
            Send Adventure Enquiry
            <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
