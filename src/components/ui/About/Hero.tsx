import React from 'react'
import InteractiveLiquid from '@/components/ui/GradietButton/InteractiveLiquid'

import Image from "next/image";
import LooperGroupLeft from "@/components/ImagesAboutPage/LooperGroupLeft.jpg"
import Link from 'next/link';
import AnimatedCopy from '../AnimatedCopy';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-40 md:py-56 overflow-hidden">
      
      {/* Left image */}
      <Image
      priority
        className="absolute left-[-200px]  md:left-[-200px] -top-20 md:top-20 w-[1037.3px] h-[889px] object-contain"
        width={1537}
        height={1489}
        alt=""
        src={LooperGroupLeft}
      />

      {/* Right image (flipped) */}
      <Image
      priority
        className="absolute  right-[-200px] md:right-[-200px] -top-20 md:top-20 w-[1037.3px] h-[889px] object-contain scale-x-[-1]"
        width={1537}
        height={1489}
        alt=""
        src={LooperGroupLeft}
      />
<div className="absolute  bottom-0  left-[-40px] right-[-40px] h-full bg-gradient-to-t from-black to-black/40 "></div>
<div className="absolute  bottom-0 left-[-40px] right-[-40px] h-50 bg-gradient-to-t from-black to-black/90 blur-xl "></div>
      {/* Center content */}
      <div className="relative flex flex-col items-center justify-center text-center w-full">
        
       
      <AnimatedCopy
        tag="h1"
        delay={0.2}
        duration={1}
        stagger={0.05}
        direction="bottom"
        className=" max-w-xl text-center "
      >
     
      About Pirmada
      
                        
          </AnimatedCopy>
          <AnimatedCopy
            tag="p"
            delay={0.2}
            duration={1}
            stagger={0.05}
            direction="bottom"
            className=" text-[16px] md:text-xl text-center max-w-sm md:max-w-[700px] "
          >
           Pirmada is a tech-focused creative agency that builds brands from the ground up. It uses clear strategy and smart design to craft standout online identities. Whether for a new startup or an established business
           we  injects energy and expertise into every pixel—turning brands into unforgettable market leaders.  </AnimatedCopy>
  
        <Link href="/contact" >
          <InteractiveLiquid label="Get Started" />
        </Link>
      </div>

    </section>
  )
}

export default Hero
