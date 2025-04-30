"use client";

import Image from "next/image";
import React from "react";
import AnimatedCopy from "../AnimatedCopy";

interface CardProps {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="border border-white/20 rounded-xl bg-[#131313] px-7 py-8 md:py-12 flex flex-col">
      <Image
        src={imageSrc}
        alt="brand"
        width={50}
        height={50}
        className="size-[50px]  "
      />

   <AnimatedCopy
             tag="h3"
             duration={1.2}
             stagger={0.05}
             direction="bottom"
             className="mt-7 "
           >
       {title}
           </AnimatedCopy>
   
           <p className=" text-base text-white/60  mt-4">
             {description}
           </p>
   
    </div>
  );
};

export default ServiceCard;
