import React, { forwardRef } from 'react';
import Image from 'next/image';

export const CardFour = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#000000] relative rounded-[10px] border border-white/15 overflow-hidden hidden lg:flex row-span-2 lg:col-span-1 lg:row-span-2 items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bentoGrid/card4/bg.png"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative p-6 lg:p-8 z-0">
        {/* Secondary image – no title/description */}
        <div className="inset-0">
          <Image
            src="/assets/bentoGrid/card4/logo-white.svg"
            alt="Secondary"
            width={70}
            height={100}
            className="object-fill"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
});

CardFour.displayName = 'CardFour';
