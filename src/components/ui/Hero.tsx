"use client";
import UnicornEmbed from "@/components/UnicornEmbed";
import AnimatedCopy from "@/components/ui/AnimatedCopy";
import InteractiveLiquid from "./GradietButton/InteractiveLiquid";
import { usePageTransition } from "./hook/usePageTransition";
import { motion } from "framer-motion";

export default function Home() {
  const { navigateWithTransition } = usePageTransition();

  return (
    <main>
      <div className="relative h-[533px] md:h-[614px] flex flex-col items-center justify-center overflow-hidden">
        {/* UnicornEmbed as background */}
        <div className="absolute inset-0 z-0 top-[-16px]">
          <UnicornEmbed />
        </div>

        {/* Content in front */}
        <div className="relative z-2 flex flex-col items-center justify-center text-center w-full mt-56">
          <AnimatedCopy
            tag="default"
            delay={0.3}
            duration={1}
            stagger={0.05}
            direction="bottom"
            className="max-w-[500px] md:max-w-[800px] text-center "
          >
            Ignite Your Vision Elevate Your Brand
          </AnimatedCopy>

          <AnimatedCopy
            tag="p"
            delay={0.3}
            duration={1}
            stagger={0.05}
            direction="bottom"
            className="text-[16px] md:text-xl text-center text-white/85 max-w-[400px] md:max-w-4xl"
          >
            Welcome to Pirmada. We help you bring your idea to life — from great websites and apps to full development services. We help entrepreneurs, startups, and businesses shine.
          </AnimatedCopy>
        </div>
   
        {/* Button */}
        <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative z-2 mt-8 md:mt-12" onClick={() => navigateWithTransition("/contact")}>
          <InteractiveLiquid label="Get Started" />
        </div>
    </motion.div>
        
      </div>
    </main>
  );
}


{/* 
    
    
"use client";
import React from "react";
import InteractiveLiquid from "./GradietButton/InteractiveLiquid";
import AnimatedCopy from "./AnimatedCopy";
import { usePageTransition } from "@/components/ui/hook/usePageTransition";


// const Scene = dynamic(() => import("@/components/ui/Scene"), {
  // ssr: false,
// });

const Hero = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    

<div className="relative h-[533px] md:h-[614px]  flex flex-col items-center justify-center overflow-hidden">

   <div className="relative flex flex-col items-center justify-center text-center w-full">
        
       
        <AnimatedCopy
          tag="h1"
          delay={0.2}
          duration={1}
          stagger={0.05}
          direction="bottom"
          className=" max-w-2xl text-center uppercase"
        >
       
        
        ignite your vision elevate your brand
                          
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              delay={0.2}
              duration={1}
              stagger={0.05}
              direction="bottom"
              className=" text-[16px] z-2 md:text-xl text-center max-w-[400px] md:max-w-4xl"
            >
              Welcome to Pirmada. we help tou bring your idea to life, from making great websites and apps to full development services we help enterpreneurs, startups and businesses shine
        Bring your idea to life with Pirmada,we help enterpreneurs, startups and businesses shine
       </AnimatedCopy>
       </div>
      

      <div onClick={() => navigateWithTransition("/contact")}>
    
    
          <InteractiveLiquid label="Get Started" />
        
          </div>
    </div>
 
   
    
  );
};

export default Hero;
    
    
    import Spline from '@splinetool/react-spline/next';

    
    <main>
    
    <Spline
        scene="https://prod.spline.design/KlRXgRYYzloXmnVs/scene.splinecode" 
      />
    </main>


    
    
          <Link href="/contact" >
            <InteractiveLiquid label="Get Started" />
          </Link>
        </div>*/}