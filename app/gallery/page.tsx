"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
    const filters = ["All", "Resort & Rooms", "Kitchen & Food", "Nature & Wildlife", "Activities", "Surroundings"];
    const [activeFilter, setActiveFilter] = useState("All");

    const galleryItems = [
        { id: 1, label: "[GAL-ROOM-1]", group: "Resort & Rooms" },
        { id: 2, label: "[GAL-ROOM-2]", group: "Resort & Rooms" },
        { id: 3, label: "[GAL-ROOM-3]", group: "Resort & Rooms" },
        { id: 4, label: "[GAL-ROOM-4]", group: "Resort & Rooms" },
        { id: 5, label: "[GAL-POOL]", group: "Resort & Rooms" },
        { id: 6, label: "[GAL-EXTERIOR]", group: "Resort & Rooms" },
        { id: 7, label: "[GAL-FOOD-1]", group: "Kitchen & Food" },
        { id: 8, label: "[GAL-FOOD-2]", group: "Kitchen & Food" },
        { id: 9, label: "[GAL-FOOD-3]", group: "Kitchen & Food" },
        { id: 10, label: "[GAL-KITCHEN]", group: "Kitchen & Food" },
        { id: 11, label: "[GAL-RIVER-1]", group: "Nature & Wildlife" },
        { id: 12, label: "[GAL-RIVER-2]", group: "Nature & Wildlife" },
        { id: 13, label: "[GAL-BIRDS]", group: "Nature & Wildlife" },
        { id: 14, label: "[GAL-FOREST]", group: "Nature & Wildlife" },
        { id: 15, label: "[GAL-RAFTING]", group: "Activities" },
        { id: 16, label: "[GAL-TREKKING]", group: "Activities" },
        { id: 17, label: "[GAL-CANYONING]", group: "Activities" },
        { id: 18, label: "[GAL-CAVE]", group: "Activities" },
        { id: 19, label: "[GAL-SURR-1]", group: "Surroundings" },
        { id: 20, label: "[GAL-SURR-2]", group: "Surroundings" },
    ];

    const filteredItems = activeFilter === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.group === activeFilter);

    return (
        <div className="flex flex-col w-full">
            {/* PAGE HERO */}
            <section className="relative h-[40vh] min-h-[350px] md:min-h-[450px] bg-forest-dark flex items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4">
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
            <section className="py-12 bg-off-white sticky top-20 z-30 shadow-sm overflow-x-auto">
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
