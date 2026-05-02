"use client";

import { useState } from "react";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Enquiry",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello Miridiya!
Name: ${formData.name}
Subject: ${formData.subject}
Message: ${formData.message}`;
        
        window.open(buildWhatsAppURL(message), "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gold-dark/10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-forest-dark italic lg:not-italic">Full Name</label>
                    <input 
                        required 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-forest-dark italic lg:not-italic">Email (Optional)</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-forest-dark italic lg:not-italic">Phone / WhatsApp</label>
                    <input 
                        required 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+94 76..." 
                        className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-forest-dark italic lg:not-italic">Subject</label>
                    <select 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Room Booking">Room Booking</option>
                        <option value="Table Reservation">Table Reservation</option>
                        <option value="Activity Booking">Activity Booking</option>
                        <option value="Group/Corporate">Group/Corporate</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-forest-dark italic lg:not-italic">Message</label>
                <textarea 
                    required 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                />
            </div>

            <button 
                type="submit" 
                className="w-full bg-gold-primary hover:bg-gold-dark text-white py-4 rounded-sm transition-all nav-link font-bold uppercase tracking-widest shadow-xl"
            >
                Send via WhatsApp
            </button>
        </form>
    );
};

export default ContactForm;
