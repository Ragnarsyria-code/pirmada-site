import React, { forwardRef } from 'react'
import Image from 'next/image'

export const CardFive = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#121212] h-[220px] lg:h-auto relative rounded-[10px] border border-white/15 overflow-hidden row-span-2 lg:col-span-3 lg:row-span-5"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bentoGrid/card1/bg.png"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative p-6 lg:p-8 z-0">
        {/* Secondary image (positioned top-right) */}
        <div className="absolute lg:w-[50%] w-[49%] top-0 lg:top-0 mr-[-2px] right-0">
          <Image
            src="/assets/bentoGrid/card5/main.png"
            alt="Secondary"
            width={2000}
            height={1000}
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div className="mt-8 lg:mt-12 lg:w-[50%]">
          <div className="relative w-6 h-6 mb-7">
            <Image
              src="/assets/bentoGrid/card5/icon.svg"
              alt="Icon"
              height={100}
              width={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-md mb-2 lg:text-2xl w-[60%] lg:w-[100%] tracking-tight font-medium text-white">
            UI / UX Design
          </h3>
          <p className="text-sm lg:text-base text-white opacity-75">
            Design intuitive interfaces and seamless user journeys that keep visitors engaged.
          </p>
        </div>
      </div>
    </div>
  );
});

CardFive.displayName = 'CardFive';
