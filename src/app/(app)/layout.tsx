import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Nav from "@/components/ui/Nav/Navbar";
import Footer from "@/components/ui/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const biggerFont = localFont({
  src: [
    {
      path: "./fonts/BiggerDisplay.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bigger",
});



export const metadata: Metadata = {
  title: "Pirmada",
  description: "Ignite your vision, elevate your brand.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${biggerFont.variable} antialiased bg-black`}
      >
        <Nav />
        {children}
       <Footer/>
      </body>
    </html>
  );
}

// Attach the font definitions as static properties to the RootLayout component
RootLayout.fonts = {
  biggerFont,
};

export default RootLayout;
