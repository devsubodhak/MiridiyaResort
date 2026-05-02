import { Phone } from "lucide-react";

const WhatsAppFloat = () => {
    const whatsappLink = "https://wa.me/94763009385?text=Hi%20Miridiya!%20I%20need%20some%20information.";

    return (
        <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group duration-300 ring-4 ring-white"
            aria-label="Contact us on WhatsApp"
        >
            <Phone size={28} className="fill-current" />
            <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                Need help? Chat with us!
            </span>
        </a>
    );
};

export default WhatsAppFloat;
