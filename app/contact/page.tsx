"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Facebook, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gold-primary/20 last:border-0 py-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
                <h4 className="text-xl font-playfair text-forest-dark group-hover:text-gold-primary transition-colors">{question}</h4>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={20} className="text-gold-primary" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 text-charcoal opacity-80 leading-relaxed font-inter">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Contact() {
    const faqs = [
        { q: "Do you have online booking?", a: "We handle all reservations via WhatsApp for a personal, fast response. This allows us to offer the best current rates and tailored experiences." },
        { q: "Is the restaurant open to non-guests?", a: "Yes — Miridiya Restaurant welcomes walk-in visitors. We recommend calling ahead or sending a WhatsApp for larger parties." },
        { q: "Do you cater to dietary requirements?", a: "Yes — vegan, vegetarian, gluten-free, and allergy-free options are available on request. Just let us know in advance!" },
        { q: "How far are you from Kithulgala?", a: "We are located approximately 15–25 minutes by road from Kithulgala town, depending on traffic conditions." },
        { q: "Can you arrange activities?", a: "Yes — we assist with rafting, trekking, bird watching, canyoning, and more through our trusted network of guides and staff." }
    ];

    return (
        <div className="flex flex-col w-full">
            {/* PAGE HERO */}
            <section className="relative h-[40vh] min-h-[350px] md:min-h-[450px] bg-forest-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <ImagePlaceholder 
                        label="[CONTACT-HERO]" 
                        src="/hero.jpg"
                        alt="Miridiya Contact Hero"
                        className="h-full w-full" 
                        aspectRatio="hero" 
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-4xl md:text-7xl text-white mb-6 uppercase tracking-widest">Get in Touch</h1>
                            <p className="text-xl text-gold-light font-playfair italic leading-relaxed max-w-2xl">
                                We are here to help you plan your perfect riverside escape.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* TWO-COLUMN CONTACT SECTION */}
            <section className="py-20 md:py-32 bg-off-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                        {/* LEFT: INFO */}
                        <div className="w-full lg:w-1/2 flex flex-col space-y-12">
                            <Reveal>
                                <div>
                                    <h2 className="text-4xl font-playfair text-forest-dark mb-10">Contact Details</h2>
                                    <div className="space-y-8">
                                        <div className="flex items-start space-x-6">
                                            <div className="p-4 bg-cream rounded-full text-gold-primary shadow-sm">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <p className="nav-link text-xs pb-1 opacity-50">Phone & WhatsApp</p>
                                                <p className="text-lg font-semibold text-forest-dark">+94 36 7855 700</p>
                                                <p className="text-lg font-semibold text-forest-dark">+94 76 3009 385</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-6">
                                            <div className="p-4 bg-cream rounded-full text-gold-primary shadow-sm">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="nav-link text-xs pb-1 opacity-50">Email Address</p>
                                                <p className="text-lg font-semibold text-forest-dark">miridiyaresort@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-6">
                                            <div className="p-4 bg-cream rounded-full text-gold-primary shadow-sm">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <p className="nav-link text-xs pb-1 opacity-50">Our Address</p>
                                                <p className="text-lg font-semibold text-forest-dark leading-relaxed">
                                                    Hatton Road, Nawata, Yatiyantota, <br />
                                                    Sabaragamuwa Province, Sri Lanka 71700
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pt-6">
                                            <a 
                                                href={buildWhatsAppURL("Hello Miridiya! I would like to make an enquiry.")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center bg-gold-primary hover:bg-gold-dark text-white px-10 py-5 rounded-sm nav-link font-bold shadow-xl transition-all w-full md:w-auto"
                                            >
                                                Message on WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <div className="p-6 sm:p-10 bg-forest-mid text-white rounded-lg shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <ExternalLink size={100} />
                                    </div>
                                    <h3 className="text-2xl font-playfair mb-6">Getting There</h3>
                                    <div className="space-y-6 opacity-90 text-[15px] leading-relaxed">
                                        <p><strong>From Colombo:</strong> Take the A1 towards Kegalle, then follow signs to Kithulgala (approx. 2 hours).</p>
                                        <p><strong>From Kandy:</strong> Head south via Gampola towards Kithulgala (approx. 1.5 hours).</p>
                                        <p className="italic font-playfair mt-6">We can arrange pick-up from nearby towns or major airports — just enquire via WhatsApp.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* RIGHT: FORM */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-playfair text-forest-dark mb-10">Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="py-0 h-[500px] w-full bg-cream relative overflow-hidden ring-4 ring-white shadow-inner">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.4334351!2d80.4038!3d7.0486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30bc227c95e6f%3A0xe74f6e14713c72b8!2sYatiyantota!5e0!3m2!1sen!2slk!4v1712495689000!5m2!1sen!2slk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Miridiya Resort Location"
                ></iframe>
                <div className="absolute bottom-10 left-10 p-4 bg-white/90 backdrop-blur-sm shadow-xl rounded-sm max-w-xs border border-gold-primary/20 pointer-events-none">
                     <p className="font-playfair italic text-forest-dark text-sm">Located centrally for adventure in Yatiyantota and Kithulgala.</p>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 md:py-32 bg-cream">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <p className="nav-link text-gold-primary mb-4">Your Questions</p>
                        <h2 className="text-4xl md:text-5xl text-forest-dark">Common Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
