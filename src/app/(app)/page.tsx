import AboutBentoGrid from "@/components/ui/Services/AboutBentoGrid"
import ContactSection from "@/components/ui/Contact/Form"
import Features from "@/components/ui/Features/FeaturesDesktop"
import Hero from "@/components/ui/Hero";
import type { Metadata } from "next";

//add comments to test
export const metadata: Metadata = {
  title: "PIRMADA | Creative Design and Development Agency",
  description: "Pirmada is a premium creative agency helping brands ignite vision and elevate their digital presence with expert design & development.",
  openGraph: {
    url: "/",
    images: [{ url: "/og-image.png", width:1200, height:630 }],
  },
};
export default function ExamplePage() {
  return (
    <>
     <Hero/>
     <AboutBentoGrid/>
    
     <Features/>
     <ContactSection/>
    </>
  );

  
}
