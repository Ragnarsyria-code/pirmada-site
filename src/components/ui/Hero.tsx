

import React from "react";
import InteractiveLiquid from "./GradietButton/InteractiveLiquid";
import Link from "next/link";
import AnimatedCopy from "./AnimatedCopy";
// adjust if needed

// const Scene = dynamic(() => import("@/components/ui/Scene"), {
  // ssr: false,
// });

const Hero = () => {
  return (
    

<div className="relative py-40 md:py-56 flex flex-col items-center justify-center overflow-hidden">
      




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
              className=" text-[16px]  md:text-xl text-center max-w-[400px] md:max-w-4xl"
            >
              Welcome to Pirmada. we help tou bring your idea to life, from making great websites and apps to full development services we help enterpreneurs, startups and businesses shine
        Bring your idea to life with Pirmada,we help enterpreneurs, startups and businesses shine
       </AnimatedCopy>
       </div>
      
      <Link href="/contact" aria-label="button" >
          <InteractiveLiquid label="Get Started" />
        </Link>
  
    </div>
 
   
    
  );
};

export default Hero;
{/* 
    
    
    
    
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