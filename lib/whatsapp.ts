export const buildWhatsAppURL = (text: string, phone: string = "94763009385") => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
