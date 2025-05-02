import React, { forwardRef } from 'react';
import Image from 'next/image';

export const CardThree = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#121212] relative rounded-2xl border border-white/15 overflow-hidden row-span-2 lg:col-span-2 lg:row-span-7"
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

      <div className="relative flex gap-6 p-6 lg:p-8 z-0">
        {/* Content */}
        <div className="mt-8 lg:mt-12 lg:w-[80%]">
          <div className="relative w-6 h-6 mb-7">
            <Image
              src="/assets/bentoGrid/card3/icon.svg"
              alt="Icon"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-md mb-2 lg:text-2xl w-[60%] lg:w-[100%] tracking-tight font-medium text-white">
            Zero-to-Launch Startup
          </h3>
          <p className="text-sm lg:text-base text-white opacity-75">
            Transform your vision into a thriving business with end-to-end support, from initial concept to public launch.
          </p>
        </div>
      </div>
    </div>
  );
});

CardThree.displayName = 'CardThree';
