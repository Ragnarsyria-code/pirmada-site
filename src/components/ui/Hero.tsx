"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AnimatedLink } from "./AnimatedLink";

const Scene = dynamic(() => import("@/components/ui/Scene"), {
  ssr: false,
});

const Hero = () => {
  return (
    // Make the parent container relative so absolute children position inside it
    <main className="relative h-[80vh] flex flex-col items-center justify-center">
      <Scene />

      {/* Absolutely placed button container */}
     
        <AnimatedLink
          href="/#contact"
          variant="ripple"
          className="text-black absolute lg:bottom-2 bottom-24 bg-gradient-to-r from-[#4DEBB7] to-[#4BD4DF] rounded-full px-6 py-2"
          rippleCircleClassName="border-[#4BD4DF]"
        >
          Get Started
        </AnimatedLink>
   
    </main>
  );
};

export default Hero;
