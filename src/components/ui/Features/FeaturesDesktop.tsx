import React from "react";
import FeaturesCard from "./FeaturesCardDesk";
import AnimatedCopy from "../AnimatedCopy";

const Features = () => {
  return (
    <section className="relative border py-24 border-white/10 rounded-2xl md:rounded-4xl flex flex-col justify-center overflow-hidden items-center  ">
      {/* Background Gradient with Blur */}
      <div className="absolute inset-0     ">
        <div
          className="relative -top-10 circle"
          style={{
            width: "1308px",
            height: "1000px",
          }}
        >
          {/* Blurred background shape */}
          <div
            className="absolute inset-0    "
            style={{
              clipPath: "ellipse(50% 50% at 50% 50%)",
            }}
          />

          {/* Grid overlay, clipped to the same shape */}
          <div
            className="absolute inset-0 grid grid-cols-10  circle "
            style={{
              clipPath: "ellipse(50% 50% at 50% 50%)",
            }}
          >
            {Array.from({ length: 20 }).map((_, colIndex) => (
              <div key={colIndex} className="grid grid-rows-20">
                {Array.from({ length: 20 }).map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="w-[131px] h-[131px] border-[0.5px] border-white/30"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="hidden md:flex triangle-blur-left transform rotate-[0deg] animate-slide-X "></div>
      {/* <div className="triangle-blur-right transform rotate-[80deg] animate-slide-X "></div> */}
      <div className="hidden md:flex triangle-blur-mid transform  animate-slide-X "></div>
      <div className="md:hidden flex triangle-blur-mobile transform "></div>

      {/* <div className="triangle-blur transform animate-slide-X "></div> */}

 

      
       <AnimatedCopy
                    tag="h1"
                    delay={0.2}
                    duration={1}
                    stagger={0.05}
                    direction="bottom"
                    className="max-w-xs md:max-w-xl text-center"
                  >
                   Why Choosing Pirmada
                     </AnimatedCopy>
                    <AnimatedCopy
                    tag="p"
                    delay={0.2}
                    duration={1}
                    stagger={0.05}
                    direction="bottom"
                    className=" text-[16px] md:text-xl text-center max-w-[400px] md:max-w-[550px]"
                  >
                   Bespoke solutions integrating innovative design, robust technology, and
                   strategic insight for lasting success.  </AnimatedCopy>

      {/* cards */}
      <div className="mt-16 md:mt-24 grid grid-cols-1  w-[80vw] md:grid-cols-3 gap-6 md:gap-8">
        <FeaturesCard
          index="01"
          gradientAngle="-120deg"
          title="Reliability & Security"
          description="From backend architecture to interfaces, we secure assets and deliver robust, dependable solutions."
          className="bg-black hidden md:flex"
          useGradient={true}
          
        />
        <FeaturesCard
          index="01"
          gradientAngle="180deg"
          title="Reliability & Security"
          description="From backend architecture to interfaces, we secure assets and deliver robust, dependable solutions."
          className="bg-black flex md:hidden"
          useGradient={true}
          fullSolidColor={true}

        />
        <FeaturesCard
          index="02"
          gradientAngle="180deg"
          title="Cutting-Edge Technology"
          description="Our team uses modern tools, frameworks, and standards to ensure top-tier performance always."
          className="bg-black top-0 md:-top-8 hidden md:flex"
          useGradient={true}
        />
         <FeaturesCard
          index="02"
          gradientAngle="180deg"
          title="Cutting-Edge Technology"
          description="Our team uses modern tools, frameworks, and standards to ensure top-tier performance always."
          className="bg-black top-0 md:-top-8 flex md:hidden"
          useGradient={true}
          fullSolidColor={true}
        />
        <FeaturesCard
          index="03"
          gradientAngle="100deg"
          title="Transparent Communication"
          description="We consistently inform you every single step, offering honest feedback and proactive updates."
          className="bg-black hidden md:flex"
          useGradient={true}

        />
        <FeaturesCard
          index="03"
          gradientAngle="100deg"
          title="Transparent Communication"
          description="We consistently inform you every single step, offering honest feedback and proactive updates."
          className="bg-black flex md:hidden"
          useGradient={true}
          fullSolidColor={true}
        />
        <FeaturesCard
          index="04"
          gradientAngle="-120deg"
          title="Quality & Precision"
          description="We focus on details, blending creativity with technical expertise to surpass all expectations."
          className="hidden md:flex bg-black border border-white/20 transparent md:border-white/0"
          useGradient={false}
        />
        <FeaturesCard
          index="04"
          gradientAngle="-120deg"
          title="Quality & Precision"
          description="We focus on details, blending creativity with technical expertise to surpass all expectations."
          className="flex md:hidden bg-black border border-white/20 transparent md:border-white/0"
          useGradient={true}
          fullSolidColor={true}
        />
        <FeaturesCard
          index="05"
          gradientAngle="180deg"
          title="Timely Delivery and Ongoing Support"
          description="We always ensure a genuine, lasting partnership to bring your vision to life."
          className="hidden md:flex bg-black top-0 md:-top-8 border border-white/20 md:border-white/0"
          useGradient={false}
        />

        <FeaturesCard
          index="05"
          gradientAngle="180deg"
          title="Timely Delivery and Ongoing Support"
          description="We always ensure a genuine, lasting partnership to bring your vision to life."
          className="flex md:hidden bg-black top-0 md:-top-8 border border-white/20 md:border-white/0"
          useGradient={true}
          fullSolidColor={true}
        />
        <FeaturesCard
          index="06"
          gradientAngle="120deg"
          title="Scalability & Flexibility"
          description="We build solutions designed to grow with your business effortlessly as you expand."
          className="hidden md:flex bg-black border border-white/20 md:border-white/0"
          useGradient={false}
        />
        <FeaturesCard
          index="06"
          gradientAngle="120deg"
          title="Scalability & Flexibility"
          description="We build solutions designed to grow with your business effortlessly as you expand."
          className="flex md:hidden bg-black border border-white/20 md:border-white/0"
          useGradient={true}
          fullSolidColor={true}
        />
      </div>


      <div className="hidden md:flex  triangle-blur-front transform  "></div>
    </section>
  );
};

export default Features