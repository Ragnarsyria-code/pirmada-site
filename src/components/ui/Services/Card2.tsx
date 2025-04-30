import React, { forwardRef } from 'react'
import Image from 'next/image'

export const CardTwo = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#121212] relative rounded-[10px] border border-white/15 overflow-hidden row-span-2 lg:col-span-2 lg:row-span-7"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bentoGrid/card2/bg.png"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative p-6 lg:p-8 z-0">
        {/* Content */}
        <div className="mt-8 lg:mt-12 lg:w-[80%]">
          <div className="relative w-6 h-6 mb-7">
            <Image
              src="/assets/bentoGrid/card2/icon.svg"
              alt="Icon"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-md mb-2 lg:text-2xl  lg:w-[100%] tracking-tight font-medium text-white">
            Brand & Visual Identity
          </h3>
          <p className="text-sm lg:text-base text-white opacity-75">
            Establish a cohesive brand identity that resonates across every channel.
          </p>
        </div>
      </div>
    </div>
  );
});

// Prevent React dev-mode warning for unnamed forwardRef components
CardTwo.displayName = "CardTwo";
