"use client";

import { useState } from "react";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    checkin: "",
    checkout: "",
    guests: "1",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Miridiya! I would like to make a booking enquiry.
Name: ${formData.name}
Check-in: ${formData.checkin}
Check-out: ${formData.checkout}
Guests: ${formData.guests}
Room Type: Air-Conditioned
Requests: ${formData.requests}`;
    
    window.open(buildWhatsAppURL(message), "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl border border-gold-dark/10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Full Name</label>
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
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Number of Guests</label>
          <input 
            required 
            type="number" 
            name="guests" 
            value={formData.guests}
            onChange={handleChange}
            min="1" 
            className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Check-in Date</label>
          <input 
            required 
            type="date" 
            name="checkin" 
            value={formData.checkin}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Check-out Date</label>
          <input 
            required 
            type="date" 
            name="checkout" 
            value={formData.checkout}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
          />
        </div>
      </div>
      


      <div className="flex flex-col space-y-2">
        <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Special Requests (Optional)</label>
        <textarea 
          name="requests" 
          value={formData.requests}
          onChange={handleChange}
          rows={4} 
          placeholder="Any special requirements?" 
          className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-gold-primary hover:bg-gold-dark text-white py-4 rounded-sm transition-all nav-link font-bold uppercase tracking-widest shadow-lg"
      >
        Send Enquiry on WhatsApp
      </button>
      <p className="text-center text-xs opacity-50 italic">
        * Clicking this will open your WhatsApp with a pre-filled message.
      </p>
    </form>
  );
};

export default BookingForm;
