"use client";

import { useState } from "react";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    partySize: "2",
    dietary: [] as string[],
    notes: "",
  });

  const dietaryOptions = ["Vegan", "Vegetarian", "Gluten-Free"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dietaryStr = formData.dietary.length > 0 ? formData.dietary.join(", ") : "None";
    const message = `Hello! I would like to reserve a table at Miridiya Kitchen.
Name: ${formData.name}
Date: ${formData.date}
Time: ${formData.time}
Party Size: ${formData.partySize}
Dietary: ${dietaryStr}
Notes: ${formData.notes}`;
    
    window.open(buildWhatsAppURL(message), "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleDietary = (item: string) => {
    setFormData(prev => ({
      ...prev,
      dietary: prev.dietary.includes(item) 
        ? prev.dietary.filter(d => d !== item) 
        : [...prev.dietary, item]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl border border-gold-dark/10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Name</label>
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
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Party Size</label>
          <input 
            required 
            type="number" 
            name="partySize" 
            value={formData.partySize}
            onChange={handleChange}
            min="1" 
            className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Date</label>
          <input 
            required 
            type="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Preferred Time</label>
          <input 
            required 
            type="time" 
            name="time" 
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
          />
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Dietary Requirements</label>
        <div className="flex flex-wrap gap-4">
          {dietaryOptions.map((opt) => (
            <label key={opt} className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={formData.dietary.includes(opt)}
                onChange={() => toggleDietary(opt)}
                className="w-5 h-5 accent-gold-primary border-gold-dark/20 rounded-sm"
              />
              <span className="text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-xs uppercase tracking-widest font-bold text-forest-dark">Additional Notes</label>
        <textarea 
          name="notes" 
          value={formData.notes}
          onChange={handleChange}
          rows={4} 
          placeholder="Anything else we should know?" 
          className="w-full px-4 py-3 rounded-sm border border-gold-dark/20 focus:outline-none focus:ring-1 focus:ring-gold-primary"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-gold-primary hover:bg-gold-dark text-white py-4 rounded-sm transition-all nav-link font-bold uppercase tracking-widest shadow-xl"
      >
        Reserve via WhatsApp
      </button>
      <p className="text-center text-xs opacity-50 italic">
        * Clicking this will open your WhatsApp with a pre-filled reservation request.
      </p>
    </form>
  );
};

export default ReservationForm;
