"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardOne } from "./Card1";
import { CardTwo } from "./Card2";
import { CardThree } from "./Card3";
import { CardFour } from "./Card4";
import { CardFive } from "./Card5";

import gsap from "gsap";
import AnimatedCopy from "../AnimatedCopy";

const AboutBentoGrid: React.FC = () => {
  // We track if our section is currently in the viewport
  const [inView, setInView] = useState(false);

  // Reference to the entire section (we'll observe this)
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Create an array of refs for the 5 card components
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1) Set up the Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is visible, set inView to true
        if (entries[0].isIntersecting) {
          setInView(true);
          // If you only want the animation once, unobserve now
          observer.unobserve(entries[0].target);
        }
      },
      {
        // Adjust threshold as desired (0.1 = 10% in view)
        threshold: 0.1,
      }
    );

    observer.observe(sectionRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // 2) Run GSAP animation only when inView is true
  useEffect(() => {
    if (!inView) return;

    const elements = cardRefs.current.filter((el) => el !== null) as HTMLDivElement[];

    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.5, // or any delay you like
      }
    );
  }, [inView]);

  return (
    // Attach ref to the entire section to observe
    <section
      ref={sectionRef}
      className="relative w-[90vw] mx-auto flex flex-col items-center justify-center py-20 md:pt-60 md:pb-32 overflow-hidden"
    >
      
       <AnimatedCopy
              tag="h1"
              delay={0.2}
              duration={1}
              stagger={0.05}
              direction="bottom"
              className="max-w-sm md:max-w-xl text-center"
            >
           
           Innovative Digital Offerings
            
                              
                </AnimatedCopy>
                <AnimatedCopy
                  tag="p"
                  delay={0.2}
                  duration={1}
                  stagger={0.05}
                  direction="bottom"
                  className=" text-[16px] md:text-xl text-center max-w-sm md:max-w-xl"
                >
                Our expert team transforms ideas into reality with innovative design, robust technology, and strategic insights.</AnimatedCopy>

      <div className="py-14 h-[100%] lg:h-[920px] overflow-y-auto grid gap-4 grid-cols-1 grid-rows-8 md:grid-rows-6 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-12">
        <CardOne ref={(el) => { cardRefs.current[0] = el; }} />
        <CardTwo ref={(el) => { cardRefs.current[1] = el; }} />
        <CardThree ref={(el) => { cardRefs.current[2] = el; }} />
        <CardFour ref={(el) => { cardRefs.current[3] = el; }} />
        <CardFive ref={(el) => { cardRefs.current[4] = el; }} />
      </div>
    </section>
  );
};

export default AboutBentoGrid;
