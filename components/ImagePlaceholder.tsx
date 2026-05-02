import Image from "next/image";
import { Camera } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "hero";
}

const ImagePlaceholder = ({ label, src, alt, className, aspectRatio = "4/3" }: ImagePlaceholderProps) => {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "hero": "aspect-[21/9] md:aspect-video lg:h-[80vh]",
  }[aspectRatio];

  return (
    <div className={cn("relative overflow-hidden bg-[#E8E0CC] flex flex-col items-center justify-center group", aspectClass, className)}>
      {src ? (
        <Image 
          src={src} 
          alt={alt || label} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <>
          {/* Background Image (blurred placeholder) */}
          <div className="absolute inset-0 bg-[#E8E0CC] transition-colors duration-700 group-hover:bg-[#dfd7c2]" />
          
          {/* Icon & Text */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3 opacity-60 transition-opacity duration-300 group-hover:opacity-80">
            <Camera size={24} className="text-gold-dark" strokeWidth={1.5} />
            <span className="font-playfair italic text-sm text-gold-dark text-center px-4 leading-snug">
              {label}
            </span>
          </div>

          {/* Subtle Border */}
          <div className="absolute inset-4 border border-gold-dark/10 pointer-events-none" />
        </>
      )}
    </div>
  );
};

export default ImagePlaceholder;
