import React from "react";
import FeaturesCard from "./FeaturesCard";
import SectionHeadingText from "./SectionHeadingText";

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


      <div className="triangle-blur-left transform rotate-[0deg] animate-slide-X "></div>
      {/* <div className="triangle-blur-right transform rotate-[80deg] animate-slide-X "></div> */}
      <div className="triangle-blur-mid transform  animate-slide-X "></div>
      {/* <div className="triangle-blur transform animate-slide-X "></div> */}

 

      <div className="w-[90vw] mx-auto">
      <SectionHeadingText
        miniTitle="Features"
        title={"Why Choosing\nPirmada"}
        description="Bespoke solutions integrating innovative design, robust technology, and
        strategic insight for lasting success."
      />
      </div>

      {/* cards */}
      <div className="mt-16 md:mt-24 grid grid-cols-1  w-[80vw] md:grid-cols-3 gap-6 md:gap-8">
        <FeaturesCard
          index="01"
          gradientAngle="-120deg"
          title="Reliability & Security"
          description="From backend architecture to interfaces, we secure assets and deliver robust, dependable solutions."
          className="bg-black"
          useGradient={true}
        />
        <FeaturesCard
          index="02"
          gradientAngle="180deg"
          title="Cutting-Edge Technology"
          description="Our team uses modern tools, frameworks, and standards to ensure top-tier performance always."
          className="bg-black top-0 md:-top-8"
          useGradient={true}
        />
        <FeaturesCard
          index="03"
          gradientAngle="100deg"
          title="Transparent Communication"
          description="We consistently inform you every single step, offering honest feedback and proactive updates."
          className="bg-black"
          useGradient={true}
        />
        <FeaturesCard
          index="04"
          gradientAngle="-120deg"
          title="Quality & Precision"
          description="We focus on details, blending creativity with technical expertise to surpass all expectations."
          className=" bg-black border border-white/20 transparent md:border-white/0"
          useGradient={false}
        />
        <FeaturesCard
          index="05"
          gradientAngle="180deg"
          title="Timely Delivery and Ongoing Support"
          description="We always ensure a genuine, lasting partnership to bring your vision to life."
          className="bg-black top-0 md:-top-8 border border-white/20 md:border-white/0"
          useGradient={false}
        />
        <FeaturesCard
          index="06"
          gradientAngle="120deg"
          title="Scalability & Flexibility"
          description="We build solutions designed to grow with your business effortlessly as you expand."
          className=" bg-black border border-white/20 md:border-white/0"
          useGradient={false}
        />
      </div>


      <div className="triangle-blur-front transform  "></div>
    </section>
  );
};

export default Features
