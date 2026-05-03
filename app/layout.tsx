import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AnimationProvider from "@/components/AnimationProvider";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miridiya Holiday Resort & Restaurant | Kithulgala, Sri Lanka",
  description: "A riverside retreat in the heart of Kithulgala's rainforest, offering warm Sri Lankan hospitality, adventure, and authentic cuisine.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-gold-primary selection:text-white`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
