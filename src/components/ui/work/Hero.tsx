"use client"
import Img1 from '@/components/parallaxImages/1.png';

import Img2 from '@/components/parallaxImages/2.png';
import Img3 from '@/components/parallaxImages/3.png';
import Img4 from '@/components/parallaxImages/4.png';
import Img5 from '@/components/parallaxImages/5.png';
import Img6 from '@/components/parallaxImages/6.png';
import Img7 from '@/components/parallaxImages/7.png';
import Img8 from '@/components/parallaxImages/8.png';
import Img9 from '@/components/parallaxImages/9.png';

import Img10 from '@/components/parallaxImages/10.png';
import Img11 from '@/components/parallaxImages/11.png';
import Img12 from '@/components/parallaxImages/12.png';

import Img13 from '@/components/parallaxImages/1.png';

import Img14 from '@/components/parallaxImages/2.png';
import Img15 from '@/components/parallaxImages/3.png';
import Img16 from '@/components/parallaxImages/4.png';
import Img17 from '@/components/parallaxImages/5.png';
import Img18 from '@/components/parallaxImages/6.png';
import Img19 from '@/components/parallaxImages/7.png';
import Img20 from '@/components/parallaxImages/8.png';
import Img21 from '@/components/parallaxImages/9.png';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import AnimatedCopy from '@/components/ui/AnimatedCopy';

export default function Hero() {
 const staticImages = [
  Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21
 ]
  {/*  const staticImages2: string[] = [
    Img1.src, Img2.src, Img3.src, Img4.src, Img5.src, Img6.src,
    Img7.src, Img8.src, Img9.src, Img10.src, Img11.src, Img12.src,
    Img13.src, Img14.src, Img15.src, Img16.src, Img17.src, Img18.src,
    Img19.src, Img20.src, Img21.src, Img22.src, Img23.src, Img24.src,
  ];*/}
  return (
    <div className="mx-auto  max-w-9xl  bg-black">
      {/* 1) RELATIVE PARENT to stack children */}
      <div className="relative h-[600px] overflow-hidden ">
        
        
        <div className="absolute inset-0 z-0">
          <ThreeDMarquee images={staticImages} />
          
        </div>
      {/* 2) 3D MARQUEE: fill the container, at the back  
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={staticImages} />
    </div>*/}



        {/* 3) BLACK FADE OVERLAY: sits above the marquee */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-b
            from-black/60
          
            to-black/80
            z-10
          "
        />

        {/* 4) TEXT: front most, centered */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
          <AnimatedCopy
            tag="h1"
            delay={0.2}
            duration={1}
            stagger={0.05}
            direction="bottom"
            className=" text-4xl font-bold "
          >
            Our Showpiece Projects
          </AnimatedCopy>
          <AnimatedCopy
            tag="p"
            delay={0.4}
            duration={1}
            stagger={0.04}
            direction="bottom"
            className="mt-4 max-w-2xl text-base md:text-lg"
          >
            Dive into our latest work to see how we transform bold ideas into impactful, measurable success stories. We partner with forward-thinking brands to craft digital experiences that captivate audiences and drive real business growth.
          </AnimatedCopy>
        </div>
        
      </div>
     
    </div>
  );
}
