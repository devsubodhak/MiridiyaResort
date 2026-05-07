"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
    const filters = ["All", "Resort & Rooms", "Kitchen & Food", "Nature & Wildlife", "Activities", "Surroundings"];
    const [activeFilter, setActiveFilter] = useState("All");

    const galleryItems = [
        { id: 1, label: "Comfortable Room", group: "Resort & Rooms", src: "/images/room5.jpeg" },
        { id: 2, label: "Resort Interior", group: "Resort & Rooms", src: "/images/room6.jpeg" },
        { id: 3, label: "Riverside Room", group: "Resort & Rooms", src: "/images/room7.jpeg" },
        { id: 4, label: "Luxury Suite", group: "Resort & Rooms", src: "/images/room8.jpeg" },
        { id: 5, label: "Resort View", group: "Resort & Rooms", src: "/resort-preview.jpg" },
        { id: 6, label: "Exterior View", group: "Resort & Rooms", src: "/images/rooms.jpg" },
        { id: 7, label: "Sri Lankan Breakfast", group: "Kitchen & Food", src: "/images/breakfast.jpg" },
        { id: 8, label: "Traditional Dinner", group: "Kitchen & Food", src: "/images/restaurant.jpg" },
        { id: 9, label: "Dining Area", group: "Kitchen & Food", src: "/restaurant-preview.png" },
        { id: 10, label: "Chef's Special", group: "Kitchen & Food", src: "/images/breakfast.jpg" },
        { id: 11, label: "Kelani River", group: "Nature & Wildlife", src: "/hero.jpg" },
        { id: 12, label: "Local Flora", group: "Nature & Wildlife", src: "/hero.jpg" },
        { id: 13, label: "Exotic Birds", group: "Nature & Wildlife", src: "/act-bird.jpg" },
        { id: 14, label: "Rainforest", group: "Nature & Wildlife", src: "/act-trekking.jpg" },
        { id: 15, label: "White Water Rafting", group: "Activities", src: "/act-rafting.jpg" },
        { id: 16, label: "Jungle Trekking", group: "Activities", src: "/act-trekking.jpg" },
        { id: 17, label: "Canyoning", group: "Activities", src: "/canyoning.jpg" },
        { id: 18, label: "Beli Lena Cave", group: "Activities", src: "/act-cave.jpg" },
        { id: 19, label: "Miridiya Entrance", group: "Surroundings", src: "/images/name-board.jpg" },
        { id: 20, label: "Scenic View", group: "Surroundings", src: "/hero.jpg" },
    ];

    const filteredItems = activeFilter === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.group === activeFilter);

    return (
        <div className="flex flex-col w-full">
            {/* PAGE HERO */}
            <section className="relative h-[40vh] min-h-[350px] md:min-h-[450px] bg-forest-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <ImagePlaceholder 
                        label="[GAL-HERO]" 
                        src="/hero.jpg"
                        alt="Miridiya Gallery Hero"
                        className="h-full w-full" 
                        aspectRatio="hero" 
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-4xl md:text-7xl text-white mb-6 uppercase tracking-widest">Gallery</h1>
                            <p className="text-xl text-gold-light font-playfair italic leading-relaxed max-w-2xl">
                                A glimpse into the life and landscape of Miridiya.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FILTERS */}
            <section className="py-12 bg-off-white sticky top-[80px] md:top-[96px] z-30 shadow-sm overflow-x-auto">
                <div className="container mx-auto px-4 flex justify-center space-x-6 whitespace-nowrap scrollbar-hide">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`nav-link text-xs pb-2 border-b-2 transition-all ${
                                activeFilter === filter 
                                ? "border-gold-primary text-gold-primary font-bold" 
                                : "border-transparent text-charcoal opacity-50 hover:opacity-100"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* MASONRY/GRID */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4">
                    <motion.div 
                        layout
                        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={item.id} 
                                    className="break-inside-avoid relative group cursor-zoom-in rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <ImagePlaceholder 
                                        label={item.label} 
                                        src={item.src}
                                        alt={item.label}
                                        className="w-full opacity-90 group-hover:opacity-100 transition-opacity" 
                                        aspectRatio={item.id % 3 === 0 ? "16/9" : "4/3"} 
                                    />
                                    <div className="absolute inset-0 bg-forest-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                         <span className="text-white nav-link text-[10px] tracking-widest font-bold bg-gold-primary px-4 py-2 border border-white/20">Expand View</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                         <span className="bg-white/90 backdrop-blur-sm text-forest-dark px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">{item.group}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
